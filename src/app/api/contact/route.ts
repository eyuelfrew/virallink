import { NextRequest, NextResponse } from 'next/server';
import { telegramBot } from '@/lib/telegram';

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = requests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS) {
    return true;
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0]) : 'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    const { name, email, service, message } = body;
    
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Prepare data for Telegram
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: body.company?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
      service: service.trim(),
      budget: body.budget?.trim() || undefined,
      timeline: body.timeline?.trim() || undefined,
      message: message.trim(),
    };

    // Send to Telegram
    const success = await telegramBot.sendContactForm(contactData);
    
    if (!success) {
      console.error('Failed to send message to Telegram');
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}