import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { answers, email, timestamp } = data;

    // Format the email content as HTML for better readability
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .section { background: white; margin: 15px 0; padding: 15px; border-left: 4px solid #8B5CF6; border-radius: 4px; }
    .label { font-weight: bold; color: #8B5CF6; margin-bottom: 5px; }
    .answer { color: #333; margin-bottom: 10px; }
    .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎯 New Quiz Response!</h1>
      <p style="margin: 5px 0 0 0;">DialerGPT Community Quiz</p>
    </div>
    <div class="content">
      <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <p><strong>📧 Respondent Email:</strong> <a href="mailto:${email}">${email}</a></p>

      <div class="section">
        <div class="label">🛠️ QUESTION 1: What should we build first?</div>
        <div class="answer">${answers.tool}</div>
        ${answers.tool === 'other' && answers.toolOther ? `<div class="answer"><em>Details: ${answers.toolOther}</em></div>` : ''}
      </div>

      <div class="section">
        <div class="label">💬 QUESTION 2: Why does your team need this built?</div>
        <div class="answer">${answers.motivation}</div>
        ${answers.motivation === 'other' && answers.motivationOther ? `<div class="answer"><em>Details: ${answers.motivationOther}</em></div>` : ''}
      </div>

      <div class="section">
        <div class="label">⏰ QUESTION 3: How fast do you need this live?</div>
        <div class="answer">${answers.urgency}</div>
      </div>
    </div>
    <div class="footer">
      This response was submitted via the DialerGPT community quiz at ${new Date(timestamp).toLocaleString()}
    </div>
  </div>
</body>
</html>
    `.trim();

    // Use Web Fetch API to send email via Resend
    // You need to set RESEND_API_KEY in your .env.local file
    // Get your free API key at https://resend.com
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'DialerGPT Quiz <onboarding@resend.dev>', // Use your verified domain in production
          to: ['dialergpt@gmail.com'],
          reply_to: email,
          subject: `🎯 New Quiz Response from ${email}`,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        console.error('Resend API error:', await response.text());
      }
    } else {
      // Fallback: Just log to console if no API key is set
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 QUIZ SUBMISSION (Email not sent - no RESEND_API_KEY)');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('To:', 'dialergpt@gmail.com');
      console.log('From:', email);
      console.log('Timestamp:', new Date(timestamp).toLocaleString());
      console.log('\nAnswers:');
      console.log('1. Tool:', answers.tool, answers.toolOther || '');
      console.log('2. Motivation:', answers.motivation, answers.motivationOther || '');
      console.log('3. Urgency:', answers.urgency);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }

    return NextResponse.json({
      success: true,
      message: 'Quiz submitted successfully'
    });

  } catch (error) {
    console.error('Error processing quiz submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit quiz' },
      { status: 500 }
    );
  }
}
