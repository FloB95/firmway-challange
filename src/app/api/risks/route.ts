import { NextResponse } from "next/server"

import { MOCK_RISK_LIST } from "@/lib/api/mock-data"
import type { RiskListResponse } from "@/lib/api/types"

/**
 * GET /api/risks
 * Returns the list of all risks
 */
export async function GET(): Promise<NextResponse<RiskListResponse>> {
  // Simulate network delay for realistic behavior
  await new Promise((resolve) => setTimeout(resolve, 100))

  return NextResponse.json({
    risks: MOCK_RISK_LIST,
  })
}
