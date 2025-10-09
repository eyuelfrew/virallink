import { NextResponse } from 'next/server';
import { telegramBot } from '@/lib/telegram';

export async function GET() {
  try {
    // Test bot connection
    const isConnected = await telegramBot.testConnection();
    
    if (isConnected) {
      // Send a test message
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        service: 'Testing Bot Integration',
        message: 'This is a test message to verify the Telegram bot is working correctly! 🎉'
      };
      
      const messageSent = await telegramBot.sendContactForm(testData);
      
      return NextResponse.json({
        success: true,
        botConnected: isConnected,
        messageSent: messageSent,
        message: 'Bot is working! Check your Telegram for the test message.'
      });
    } else {
      return NextResponse.json({
        success: false,
        botConnected: false,
        message: 'Bot connection failed. Please check your bot token.'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Bot test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to test bot connection.'
    }, { status: 500 });
  }
}