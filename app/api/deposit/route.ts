import { NextResponse } from "next/server";

let settings = {
  deposit: 10,
  enabled: true,
};

export async function GET() {
  return NextResponse.json(settings);
}

export async function POST(request: Request) {
  const body = await request.json();

  settings.deposit = body.deposit;
  settings.enabled = body.enabled;

  return NextResponse.json({ success: true, settings });
}
