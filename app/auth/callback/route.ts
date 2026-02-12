import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    await supabaseClient.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
