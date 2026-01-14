import { useQuery } from "@tanstack/react-query"

import type { RiskDetailResponse, RiskListItem, RiskListResponse } from "@/lib/api/types"

/**
 * Query keys for risk-related queries
 */
export const riskKeys = {
  all: ["risks"] as const,
  lists: () => [...riskKeys.all, "list"] as const,
  list: () => [...riskKeys.lists()] as const,
  details: () => [...riskKeys.all, "detail"] as const,
  detail: (id: string) => [...riskKeys.details(), id] as const,
}

/**
 * Fetch the list of all risks
 */
async function fetchRiskList(): Promise<RiskListItem[]> {
  const response = await fetch("/api/risks")

  if (!response.ok) {
    throw new Error("Failed to fetch risk list")
  }

  const data = (await response.json()) as RiskListResponse
  return data.risks
}

/**
 * Fetch detailed information for a specific risk
 */
async function fetchRiskDetail(id: string): Promise<RiskDetailResponse> {
  const response = await fetch(`/api/risks/${encodeURIComponent(id)}`)

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Risk not found: ${id}`)
    }
    throw new Error("Failed to fetch risk details")
  }

  return response.json() as Promise<RiskDetailResponse>
}

/**
 * Hook to fetch the list of all risks
 */
export function useRiskList() {
  return useQuery({
    queryKey: riskKeys.list(),
    queryFn: fetchRiskList,
  })
}

/**
 * Hook to fetch detailed information for a specific risk
 */
export function useRiskDetail(id: string | null) {
  return useQuery({
    queryKey: riskKeys.detail(id ?? ""),
    queryFn: () => fetchRiskDetail(id!),
    enabled: !!id,
  })
}
