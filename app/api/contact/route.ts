import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Bu forma artıq backend istifadə etmir. Sorğunu WhatsApp ilə göndərin."
    },
    { status: 410 }
  );
}
