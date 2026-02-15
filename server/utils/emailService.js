const nodemailer = require('nodemailer');

/**
 * Email Service for sending Requestnotifications
 * Uses environment variables for SMTP configuration
 */

const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Generate email body based on Requesttype
 * Only includes non-empty fields
 */
const generateEmailBody = (inquiry) => {
  const commonFields = `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Full Name:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.firstName} ${inquiry.lastName}
  </td>
</tr>
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Email:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    <a href="mailto:${inquiry.email}">${inquiry.email}</a>
  </td>
</tr>
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>WhatsApp:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    <a href="https://wa.me/${inquiry.whatsapp.replace(/\D/g, '')}">${inquiry.whatsapp}</a>
  </td>
</tr>
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Country:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.country}
  </td>
</tr>
${inquiry.organization ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Organization:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.organization}
  </td>
</tr>
` : ''}
`;

  let typeSpecificFields = '';

  if (inquiry.inquiryType === 'solution') {
    typeSpecificFields = `
${inquiry.industry ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Industry:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.industry}
  </td>
</tr>
` : ''}
${inquiry.requirements ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Requirements:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.requirements}
  </td>
</tr>
` : ''}
`;
  } else if (inquiry.inquiryType === 'project') {
    typeSpecificFields = `
${inquiry.project ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Project:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.project}
  </td>
</tr>
` : ''}
${inquiry.teamMembers ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Team Members:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.teamMembers}
  </td>
</tr>
` : ''}
${inquiry.message ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Message:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.message}
  </td>
</tr>
` : ''}
`;
  } else if (inquiry.inquiryType === 'consultation') {
    typeSpecificFields = `
${inquiry.message ? `
<tr>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
    <strong>Requirements:</strong>
  </td>
  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
    ${inquiry.message}
  </td>
</tr>
` : ''}
`;
  }

  return commonFields + typeSpecificFields;
};

/**
 * Get email subject based on Requesttype
 */
const getEmailSubject = (inquiry) => {
  const typeLabels = {
    solution: 'New Solution Request',
    project: 'New Project Request',
    consultation: 'New Consultation Request',
  };
  return `${typeLabels[inquiry.inquiryType] || 'New Request'} - ${inquiry.firstName} ${inquiry.lastName}`;
};

/**
 * Send Requestnotification email to LushWare
 */
const sendInquiryEmail = async (inquiry) => {
  try {
    const transporter = createEmailTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✓ SMTP connection verified for admin email');
    } catch (verifyError) {
      console.error('✗ SMTP verification failed for admin email:', verifyError.message);
      throw verifyError;
    }

    const mailOptions = {
      from: `"LushWare Support" <${process.env.MAIL_USER}>`,
      to: 'info@lushware.org',
      subject: getEmailSubject(inquiry),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', -apple-system, system-ui, sans-serif; color: #111827; }
    .container { max-width: 650px; margin: 40px auto; background-color: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    
    /* Elegant Sidebar Border Design */
    .inner-container { border-left: 6px solid #059669; padding: 40px; }
    
    .header-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #059669; margin-bottom: 8px; }
    .main-title { font-size: 24px; font-weight: 800; color: #111827; margin: 0 0 24px 0; }
    
    .status-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 30px; }
    .status-text { margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563; }
    .type-highlight { color: #059669; font-weight: 600; text-decoration: underline; }

    /* Data Table - Preserving your dynamic content */
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    /* Stylings to apply to the content inside generateEmailBody(inquiry) */
    table td { padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; vertical-align: top; }
    
    .footer { padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; }
    .footer-content { display: flex; justify-content: space-between; align-items: center; }
    .timestamp { font-size: 12px; color: #9ca3af; margin: 0; }
    .brand { font-size: 12px; font-weight: 600; color: #6b7280; margin: 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="inner-container">
      <div class="header-label">System Notification</div>
      <h1 class="main-title">Request Logged</h1>
      
      <div class="status-box">
        <p class="status-text">
          A new <span class="type-highlight">${inquiry.inquiryType.charAt(0).toUpperCase() + inquiry.inquiryType.slice(1)}</span> 
          entry has been processed through the <strong>LushWare ORG</strong> web server.
        </p>
      </div>

      <table>
        ${generateEmailBody(inquiry)}
      </table>
    </div>
    
    <div class="footer">
      <p class="timestamp">
        <strong>Processed on:</strong> ${new Date(inquiry.submittedAt).toLocaleString()}
      </p>
      <p class="brand" style="margin-top: 10px;">
        LushWare ORG &copy; 2026 | Internal Request System
      </p>
    </div>
  </div>
</body>
</html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✓ Admin notification email sent successfully:', info.messageId);
    if (info.accepted && info.accepted.length > 0) {
      console.log('  Accepted:', info.accepted.join(', '));
    }
    if (info.rejected && info.rejected.length > 0) {
      console.warn('  Rejected:', info.rejected.join(', '));
    }
    return true;
  } catch (error) {
    console.error('✗ Error sending admin notification email:');
    console.error('  Error message:', error.message);
    if (error.code) console.error('  Error code:', error.code);
    if (error.command) console.error('  SMTP command:', error.command);
    if (error.response) console.error('  Server response:', error.response);
    // Don't throw - log the error but don't fail the inquiry submission
    return false;
  }
};

const sendUserConfirmationEmail = async (inquiry) => {
  try {
    const transporter = createEmailTransporter();

    const mailOptions = {
      from: `"LushWare Team" <${process.env.MAIL_USER || process.env.SMTP_USER}>`,
      to: inquiry.email,
      subject: "We’ve received your submission – LushWare",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', -apple-system, system-ui, sans-serif; color: #111827; }
    .container { max-width: 650px; margin: 40px auto; background-color: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .inner { padding: 40px; border-left: 6px solid #059669; }
    .title { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
    .text { font-size: 15px; line-height: 1.7; color: #374151; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    table td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; vertical-align: top; }
    .footer { padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="inner">
      <h1 class="title">Thank you, ${inquiry.firstName} 👋</h1>

      <p class="text">
        We’ve successfully received your submission at <strong>LushWare</strong>.
        Our team is currently reviewing your request, and one of our members
        will get in touch with you as soon as possible.
      </p>

      <p class="text">
        Below is a summary of the information you submitted:
      </p>

      <table>
        <tr><td><strong>Name</strong></td><td>${inquiry.firstName} ${inquiry.lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${inquiry.email}</td></tr>
        <tr><td><strong>Country</strong></td><td>${inquiry.country}</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${inquiry.whatsapp}</td></tr>
        <tr><td><strong>Inquiry Type</strong></td><td>${inquiry.inquiryType}</td></tr>

        ${inquiry.organization ? `<tr><td><strong>Organization</strong></td><td>${inquiry.organization}</td></tr>` : ''}
        ${inquiry.industry ? `<tr><td><strong>Industry</strong></td><td>${inquiry.industry}</td></tr>` : ''}
        ${inquiry.project ? `<tr><td><strong>Project</strong></td><td>${inquiry.project}</td></tr>` : ''}
        ${inquiry.requirements ? `<tr><td><strong>Requirements</strong></td><td>${inquiry.requirements}</td></tr>` : ''}
        ${inquiry.message ? `<tr><td><strong>Message</strong></td><td>${inquiry.message}</td></tr>` : ''}
      </table>

      <p class="text" style="margin-top: 24px;">
        If you have any additional details to share, feel free to reply to this email.
        We look forward to connecting with you.
      </p>

      <p class="text">
        Best regards,<br />
        <strong>LushWare Team</strong>
      </p>
    </div>

    <div class="footer">
      © 2026 LushWare ORG · 
    </div>
  </div>
</body>
</html>
      `,
    };

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✓ SMTP connection verified for user confirmation email');
    } catch (verifyErr) {
      console.error('✗ SMTP verification failed for user confirmation email:', verifyErr.message);
      throw verifyErr;
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('✓ User confirmation email sent successfully:', info.messageId);
    if (info.accepted && info.accepted.length > 0) {
      console.log('  Accepted:', info.accepted.join(', '));
    }
    if (info.rejected && info.rejected.length > 0) {
      console.warn('  Rejected:', info.rejected.join(', '));
    }
    return true;
  } catch (error) {
    console.error('✗ Error sending user confirmation email:');
    console.error('  Error message:', error.message);
    if (error.code) console.error('  Error code:', error.code);
    if (error.command) console.error('  SMTP command:', error.command);
    if (error.response) console.error('  Server response:', error.response);
    return false;
  }
};


module.exports = {
  sendInquiryEmail,
  sendUserConfirmationEmail
};
