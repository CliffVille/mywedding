// app/api/rsvp/route.js
import { resend } from '../../../lib/resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const { attending, totalGuests, names, songRequests, message } = body;

    if (!attending || !totalGuests || !names) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    const emailContent = `
      <h2>New RSVP Submission</h2>
      <p><strong>Attending:</strong> ${attending}</p>
      <p><strong>Total Guests:</strong> ${totalGuests}</p>
      <p><strong>Names:</strong> ${names}</p>
      <p><strong>Song Requests:</strong> ${songRequests || 'None'}</p>
      <p><strong>Message:</strong> ${message || 'None'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'RSVP Form <onboarding@resend.dev>', // Your verified domain
      to: ['lauradstoker@gmail.com'], // Change this to your email
      subject: 'New RSVP Received!',
      html: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Email failed to send" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "RSVP received and emailed!" }), {
      status: 200,
    });

  } catch (error) {
    console.error("RSVP error:", error); // <-- shows the real cause
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
    status: 500,
    });
  }
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
