// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "notifications@zuproduction.pk";
    const TO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "contact@zuproduction.pk";

    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      projectType,
      projectDate,
      location,
      projectDetails,
    } = body;

    const trimmedName = String(name || "").trim();
    const trimmedEmail = String(email || "").trim().toLowerCase();
    const trimmedPhone = String(phone || "").trim();
    const trimmedCompany = String(company || "").trim();
    const trimmedDate = String(projectDate || "").trim();
    const trimmedLocation = String(location || "").trim();
    const trimmedDetails = String(projectDetails || "").trim();

    // 1. Basic Name Check
    if (!trimmedName) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    // 2. Reliable Email Check
    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Reliable Phone Check
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || phoneDigits.length < 6) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    // Pre-computed HTML blocks
    const companySummaryHtml = trimmedCompany
      ? `<p style="color: #888888; margin: 6px 0;">Company: <span style="color: #ffffff; font-weight: 500;">${trimmedCompany}</span></p>`
      : "";

    const dateSummaryHtml = trimmedDate
      ? `<p style="color: #888888; margin: 6px 0;">Timeline: <span style="color: #ffffff;">${trimmedDate}</span></p>`
      : "";

    const locationSummaryHtml = trimmedLocation
      ? `<p style="color: #888888; margin: 6px 0;">Location: <span style="color: #ffffff;">${trimmedLocation}</span></p>`
      : "";

    const internalSubject = trimmedCompany
      ? `[New Lead] ${projectType} - ${trimmedName} (${trimmedCompany})`
      : `[New Lead] ${projectType} - ${trimmedName}`;

    // Internal Studio Notification
    const internalMailPromise = resend.emails.send({
      from: `ZU Production Leads <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: trimmedEmail,
      subject: internalSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; color: #ffffff; padding: 24px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #0c0c0c; border: 1px solid #262626; border-radius: 12px; padding: 32px;">
              <h2 style="color: #ffffff; margin: 0 0 6px 0; font-size: 20px; text-transform: uppercase;">New Project Enquiry</h2>
              <p style="color: #c40c0c; margin: 0 0 20px 0; font-size: 11px; font-family: monospace;">INBOUND LEAD</p>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #888888; width: 35%;">Name:</td><td style="padding: 6px 0; color: #ffffff; font-weight: bold;">${trimmedName}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Company:</td><td style="padding: 6px 0; color: #ffffff;">${trimmedCompany || "None"}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Email:</td><td style="padding: 6px 0; color: #ffffff;"><a href="mailto:${trimmedEmail}" style="color: #ff3333; text-decoration: none;">${trimmedEmail}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Phone:</td><td style="padding: 6px 0; color: #ffffff;"><a href="tel:${trimmedPhone}" style="color: #ffffff; text-decoration: none;">${trimmedPhone}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Service:</td><td style="padding: 6px 0; color: #ff3333; font-weight: bold;">${projectType}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Target Date:</td><td style="padding: 6px 0; color: #ffffff;">${trimmedDate || "Not specified"}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Location:</td><td style="padding: 6px 0; color: #ffffff;">${trimmedLocation || "Not specified"}</td></tr>
              </table>

              <div style="background-color: #171717; border-left: 3px solid #c40c0c; padding: 14px; border-radius: 4px; margin-top: 20px;">
                <p style="color: #888888; margin: 0 0 6px 0; font-size: 11px; font-family: monospace; text-transform: uppercase;">Details:</p>
                <p style="color: #ffffff; margin: 0; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${trimmedDetails || "No additional details provided."}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Client Confirmation
    const clientReplyPromise = resend.emails.send({
      from: `ZU Production <${FROM_EMAIL}>`,
      to: [trimmedEmail],
      replyTo: TO_EMAIL,
      subject: `Thank you for contacting ZU Production`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; color: #ffffff; padding: 24px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #0c0c0c; border: 1px solid #262626; border-radius: 12px; padding: 32px;">
              <div style="border-bottom: 2px solid #c40c0c; padding-bottom: 16px; margin-bottom: 24px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px;">ZU PRODUCTION</h1>
                <p style="color: #c40c0c; margin: 4px 0 0 0; font-size: 11px; font-family: monospace; letter-spacing: 1px;">CREATIVE PRODUCTION & MEDIA</p>
              </div>

              <p style="font-size: 16px; color: #f5f5f5; margin: 0 0 16px 0;">Hello ${trimmedName},</p>
              
              <p style="font-size: 14px; color: #cccccc; line-height: 1.6; margin: 0 0 20px 0;">
                Thanks for reaching out! We received your message regarding your <strong>${projectType}</strong> project.
              </p>

              <div style="background-color: #171717; border: 1px solid #262626; border-radius: 8px; padding: 18px; margin: 20px 0; font-size: 13px;">
                <p style="color: #c40c0c; margin: 0 0 12px 0; font-weight: bold; font-family: monospace; font-size: 11px; text-transform: uppercase;">Message Summary:</p>
                <p style="color: #888888; margin: 6px 0;">Service: <span style="color: #ffffff; font-weight: 500;">${projectType}</span></p>
                ${companySummaryHtml}
                ${dateSummaryHtml}
                ${locationSummaryHtml}
              </div>

              <p style="font-size: 14px; color: #cccccc; line-height: 1.6; margin: 0 0 16px 0;">
                Our team is reviewing your requirements and will reply within <strong>24 hours</strong>.
              </p>

              <p style="font-size: 14px; color: #cccccc; line-height: 1.6; margin: 0 0 24px 0;">
                If your project is urgent, reply directly to this email or call us anytime.
              </p>

              <div style="padding: 14px 18px; background-color: #000000; border: 1px solid #292929; border-radius: 8px; font-size: 12px;">
                <p style="margin: 3px 0; color: #ffffff;">Email: <a href="mailto:${TO_EMAIL}" style="color: #ff3333; text-decoration: none;">${TO_EMAIL}</a></p>
                <p style="margin: 3px 0; color: #ffffff;">Location: Karachi, Pakistan</p>
              </div>

              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #222222; font-size: 12px; color: #777777;">
                <p style="margin: 0; line-height: 1.5;">Best regards,<br><strong style="color: #ffffff;">ZU Production Team</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    await Promise.all([internalMailPromise, clientReplyPromise]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}