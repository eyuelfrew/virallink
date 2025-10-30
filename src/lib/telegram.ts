// Telegram Bot API integration for contact form submissions

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export class TelegramBot {
  private botToken: string;
  private chatId: string;

  constructor() {
    this.botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '';
    this.chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '';

    if (!this.botToken || !this.chatId) {
      console.warn('Telegram bot token and chat ID must be provided in environment variables');
      // Don't throw error to prevent build failures
    }
  }

  /**
   * Format contact form data into a nice Telegram message
   */
  private formatMessage(data: ContactFormData): string {
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    let message = `🔔 *New Contact Form Submission*\n\n`;
    
    message += `👤 *Name:* ${data.name}\n`;
    message += `📧 *Email:* ${data.email}\n`;
    
    if (data.company) {
      message += `🏢 *Company:* ${data.company}\n`;
    }
    
    if (data.phone) {
      message += `📱 *Phone:* ${data.phone}\n`;
    }
    
    message += `🎯 *Service:* ${data.service}\n`;
    
    if (data.budget) {
      message += `💰 *Budget:* ${data.budget}\n`;
    }
    
    if (data.timeline) {
      message += `⏰ *Timeline:* ${data.timeline}\n`;
    }
    
    message += `\n💬 *Message:*\n${data.message}\n\n`;
    message += `📅 *Submitted:* ${timestamp}`;

    return message;
  }

  /**
   * Send contact form data to Telegram
   */
  async sendContactForm(data: ContactFormData): Promise<boolean> {
    try {
      if (!this.botToken || !this.chatId) {
        console.error('Telegram bot not configured properly');
        return false;
      }

      const message = this.formatMessage(data);
      const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        return false;
      }

      const result = await response.json();
      console.log('Message sent successfully:', result.message_id);
      return true;

    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return false;
    }
  }

  /**
   * Test the bot connection
   */
  async testConnection(): Promise<boolean> {
    try {
      const url = `https://api.telegram.org/bot${this.botToken}/getMe`;
      const response = await fetch(url);
      
      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      console.log('Bot info:', data.result);
      return data.ok;

    } catch (error) {
      console.error('Error testing bot connection:', error);
      return false;
    }
  }
}

// Export a singleton instance with error handling
let telegramBot: TelegramBot;

try {
  telegramBot = new TelegramBot();
} catch (error) {
  console.warn('Telegram bot initialization failed:', error);
  // Create a dummy bot for development
  telegramBot = {
    sendContactForm: async () => {
      console.log('Telegram bot not configured - form data would be sent here');
      return false;
    },
    testConnection: async () => {
      console.log('Telegram bot not configured - connection test would be performed here');
      return false;
    }
  } as unknown as TelegramBot;
}

export { telegramBot };