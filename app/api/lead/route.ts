import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  phone?: string;
  industry?: string;
  companySize?: string;
  howHeard?: string;
  referrer?: string;
  interestedIn?: string[];
  message?: string;
  // honeypot — bots fill this, humans never see it
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots don't retry, but never store them.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const role = (body.role || "").trim();
  const phone = (body.phone || "").trim();
  const industry = (body.industry || "").trim();
  const companySize = (body.companySize || "").trim();
  const message = (body.message || "").trim();
  const interestedIn = Array.isArray(body.interestedIn) ? body.interestedIn : [];

  // Every field is required except "How did you hear about us?" (howHeard).
  if (
    !name ||
    !email ||
    !company ||
    !role ||
    !phone ||
    !industry ||
    !companySize ||
    !message ||
    interestedIn.length === 0
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Only the Airtable token comes from the environment (it's the one secret).
  // The destination — the "northstack" table in the "Company / Collab CRM"
  // base — is hard-coded so the form can never write to the wrong place,
  // regardless of which base id happens to be set in the host's env vars.
  const apiKey =
    process.env.AIRTABLE_PAT_TOKEN || process.env.AIRTABLE_API_KEY;
  const baseId = "appKKq9jZB8Y40mDA"; // Company / Collab CRM
  const table = "northstack";

  if (!apiKey) {
    console.error(
      "Airtable token is not set (AIRTABLE_PAT_TOKEN / AIRTABLE_API_KEY) — lead was not stored."
    );
    return NextResponse.json(
      { error: "The form isn't connected yet. Please email us directly." },
      { status: 503 }
    );
  }

  // Map the form payload onto the "northstack" table's actual field names.
  const fields: Record<string, unknown> = {
    Name: name,
    Email: email,
  };
  if (body.company?.trim()) fields.Company = body.company.trim();
  if (body.phone?.trim()) fields.Phone = body.phone.trim();
  if (body.industry?.trim()) fields.Industry = body.industry.trim();
  if (body.companySize?.trim()) fields["Company size"] = body.companySize.trim();
  if (body.howHeard?.trim()) fields["How did you hear"] = body.howHeard.trim();
  if (body.referrer?.trim()) fields.Referrer = body.referrer.trim();
  if (Array.isArray(body.interestedIn) && body.interestedIn.length > 0) {
    fields["What they need"] = body.interestedIn.join(", ");
  }
  // The table has no "Role" field, so fold it into the engagement note.
  const engagement = [
    body.role?.trim() ? `Role: ${body.role.trim()}` : "",
    message,
  ]
    .filter(Boolean)
    .join("\n\n");
  if (engagement) fields.Engagement = engagement;
  // Where they submitted from, if the browser sent a referer.
  const pageUrl = req.headers.get("referer");
  if (pageUrl) fields["Page URL"] = pageUrl;

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
          typecast: true,
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("Airtable error:", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong saving your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed:", err);
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 502 }
    );
  }
}
