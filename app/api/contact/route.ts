import { NextResponse } from "next/server";

import type { ContactPayload } from "@/lib/types";
import { validateContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const validation = validateContactPayload(payload);

  if (!validation.isValid) {
    return NextResponse.json(
      {
        message: "Form məlumatları tam deyil.",
        errors: validation.errors
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message:
      "Sorğunuz qəbul olundu. Qısa zamanda sizinlə əlaqə saxlayıb layihəni dəqiqləşdirəcəyik."
  });
}
