// app/api/rsvp/route.js
export async function POST(request) {
  try {
    const body = await request.json();
    const { attending, totalGuests, names, songRequests, message } = body;

    if (!attending || !totalGuests || !names) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    // You can add Supabase or Resend logic here if needed

    return new Response(JSON.stringify({ message: "RSVP received!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("RSVP error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

// Optional: Handle unsupported methods
export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
