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
    this.botToken = process.env.TELEGRAM_BOT_TOKEN || '';
    this.chatId = process.env.TELEGRAM_CHAT_ID || '';

    if (!this.botToken || !this.chatId) {
      throw new Error('Telegram bot token and chat ID must be provided in environment variables');
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

// Export a singleton instance
export const telegramBot = new TelegramBot();