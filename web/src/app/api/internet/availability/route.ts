import { NextResponse } from "next/server";

export const runtime = "nodejs";

type AvailabilityBody = {
  addressLine1?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
};

/**
 * Proxies to Vocus (or your aggregator) from the server so credentials never reach the browser.
 * Wire `VOCUS_API_BASE_URL` + auth when you have contract details.
 */
export async function POST(request: Request) {
  let body: AvailabilityBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const base = process.env.VOCUS_API_BASE_URL;
  const token = process.env.VOCUS_API_TOKEN;

  if (!base || !token) {
    return NextResponse.json(
      {
        configured: false,
        message:
          "Vocus API is not configured. Set VOCUS_API_BASE_URL and VOCUS_API_TOKEN.",
        requestEcho: body,
      },
      { status: 501 }
    );
  }

  const res = await fetch(`${base.replace(/\/$/, "")}/availability`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: "Upstream availability check failed", status: res.status, data },
      { status: 502 }
    );
  }

  return NextResponse.json(data);
}
