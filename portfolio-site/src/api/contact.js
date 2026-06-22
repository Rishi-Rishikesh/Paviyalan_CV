import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, website } = req.body || {};

    // Honeypot spam protection
    if (website) {
      return res.status(200).json({ success: true, message: 'Message sent' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      });
    }

    if (message.length > 1500) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long',
      });
    }

    const cleanName = escapeHtml(name);
    const cleanEmail = escapeHtml(email);
    const cleanSubject = escapeHtml(subject || 'Portfolio Contact Message');
    const cleanMessage = escapeHtml(message).replaceAll('\n', '<br />');

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Portfolio Message: ${cleanSubject}`,
      reply_to: cleanEmail,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Subject:</strong> ${cleanSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `,
    });

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Email sending failed',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
}