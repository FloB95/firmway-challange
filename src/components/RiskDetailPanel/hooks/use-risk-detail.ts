"use client"

import { useMemo } from "react"

import type { RiskDetailResponse } from "@/lib/api"
import { useRiskDetail as useRiskDetailQuery } from "@/lib/hooks/use-risks"
import type { ChartDataPoint } from "../types"
import { prepareChartData } from "../utils"

interface UseRiskDetailParams {
  riskId: string | null
}

interface UseRiskDetailResult {
  data: ChartDataPoint[]
  detail: RiskDetailResponse | null
  isLoading: boolean
  error: Error | null
  refetch: () => void
}

/**
 * Custom hook for fetching and preparing risk detail data from the API.
 * Uses TanStack Query for data fetching with automatic caching and refetching.
 */
export function useRiskDetail({ riskId }: UseRiskDetailParams): UseRiskDetailResult {
  const { data: detail, isLoading, error, refetch } = useRiskDetailQuery(riskId)

  // Transform chart data for the combined line/area chart
  const chartData = useMemo(() => {
    if (!detail) return []
    return prepareChartData(detail.chartData, detail.markers.safetyStockDays)
  }, [detail])

  return {
    data: chartData,
    detail: detail ?? null,
    isLoading,
    error: error ?? null,
    refetch,
  }
}
