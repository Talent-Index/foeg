import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PartnershipRequest {
  name: string;
  organization: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, organization, email, message }: PartnershipRequest = await req.json();

    console.log("Received partnership request from:", name, email);

    const timestamp = new Date().toISOString();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FOEG Labs <onboarding@resend.dev>",
        to: ["foeglabslimited@gmail.com"],
        subject: `New Partnership Inquiry from ${name}`,
        html: `
          <h1>New Partnership Inquiry</h1>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Organization:</strong> ${organization || "Not specified"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr />
          <p><small>Submitted at: ${timestamp}</small></p>
          <p><small>Source: FOEG Labs website – Partnership form</small></p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-partnership-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
