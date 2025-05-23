// app/api/rsvp/route.js
import { getResend } from '../../../lib/resend';

export async function POST(request) {
  try {
    const resend = getResend();

    const body = await request.json();
    const { attending, totalGuests, names, songRequests, message } = body;

    if (
      attending === undefined ||
      totalGuests === undefined ||
      !names
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const emailContent = `
      <h2>New RSVP Submission</h2>
      <p><strong>Attending:</strong> ${attending}</p>
      <p><strong>Total Guests:</strong> ${totalGuests}</p>
      <p><strong>Names:</strong> ${names}</p>
      <p><strong>Song Requests:</strong> ${songRequests || 'None'}</p>
      <p><strong>Message:</strong> ${message || 'None'}</p>
    `;

    // Send email using Resend SDK
    await resend.emails.send({
      from: 'RSVP Form <Clifford623@gmail.com>', // Replace with your verified email/domain
      to: ['clifford623@gmail.com'], // Your email
      subject: 'New RSVP Received!',
      html: emailContent,
    });

    return new Response(
      JSON.stringify({ message: "RSVP received and emailed!" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("RSVP error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500 }
    );
  }
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
