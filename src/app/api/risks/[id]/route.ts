import { NextResponse } from "next/server"

import { MOCK_RISK_DETAILS } from "@/lib/api/mock-data"
import type { RiskDetailResponse } from "@/lib/api/types"

interface RouteParams {
  params: Promise<{ id: string }>
}

/**
 * GET /api/risks/:id
 * Returns detailed information for a specific risk
 */
export async function GET(
  _request: Request,
  { params }: RouteParams
): Promise<NextResponse<RiskDetailResponse | { error: string }>> {
  const { id } = await params

  // Simulate network delay for realistic behavior
  await new Promise((resolve) => setTimeout(resolve, 100))

  const riskDetail = MOCK_RISK_DETAILS[id]

  if (!riskDetail) {
    return NextResponse.json({ error: `Risk not found: ${id}` }, { status: 404 })
  }

  return NextResponse.json(riskDetail)
}
