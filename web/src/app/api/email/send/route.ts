import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

type SendBody = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
};

export async function POST(request: Request) {
  const internal = process.env.INTERNAL_API_SECRET;
  if (internal && request.headers.get("x-api-key") !== internal) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = getResend();
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !from) {
    return NextResponse.json(
      {
        error:
          "Email not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.",
      },
      { status: 501 }
    );
  }

  let body: SendBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.to || !body.subject || (!body.html && !body.text)) {
    return NextResponse.json(
      {
        error: "Provide to, subject, and html or text",
      },
      { status: 400 }
    );
  }

  const { data, error } = body.html
    ? await resend.emails.send({
        from,
        to: body.to,
        subject: body.subject,
        html: body.html,
      })
    : await resend.emails.send({
        from,
        to: body.to,
        subject: body.subject,
        text: body.text!,
      });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ id: data?.id });
}
