import { supabase } from "@/services/supabase";
import { NextRequest, NextResponse } from "next/server";

function getHumanErrorMessage(code: string) {
  switch (code) {
    case "23505":
      return "Telefone já cadastrado";
    default:
      return undefined;
  }
}

export async function POST(request: NextRequest) {
  const { name, email, phone } = await request.json();
  console.log({ name, email, phone });

  const { error, status, statusText } = await supabase
    .from("rsvps")
    .insert({ name, email, phone });

  if (error) {
    return NextResponse.json(
      {
        success: false,
        error: { ...error, humanMessage: getHumanErrorMessage(error.code) },
      },
      { status, statusText }
    );
  }

  return NextResponse.json({ success: true });
}
