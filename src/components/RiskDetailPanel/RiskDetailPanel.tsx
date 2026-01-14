"use client"

import { memo } from "react"

import { ChartLegend, DisruptionChart, RiskStatsGrid } from "./components"
import { CHART_COLORS } from "./constants"
import { useRiskDetail } from "./hooks"
import type { RiskDetailPanelProps } from "./types"

/**
 * Panel displaying detailed risk information including:
 * - Disruption exposure header
 * - Probability density chart with safety stock and mean disruption markers
 * - Chart legend
 * - Risk statistics grid (Probability, Mean, P90, MTTR)
 */
export const RiskDetailPanel = memo(function RiskDetailPanel({ item }: RiskDetailPanelProps) {
  const { data, detail, isLoading, error } = useRiskDetail({
    riskId: item.id,
  })

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <header>
          <h2 className="leading-4 font-semibold">Disruption exposure</h2>
        </header>
        <div className="flex h-[300px] items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  if (error || !detail) {
    return (
      <div className="flex flex-col gap-4">
        <header>
          <h2 className="leading-4 font-semibold">Disruption exposure</h2>
        </header>
        <div className="flex h-[300px] items-center justify-center">
          <div className="text-destructive">Failed to load risk data</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <header>
        <h2 className="leading-4 font-semibold">Disruption exposure</h2>
      </header>

      {/* Chart */}
      <DisruptionChart
        data={data}
        safetyStockDays={detail.markers.safetyStockDays}
        meanDisruptionDays={detail.markers.meanDisruptionDays}
      />

      {/* Legend */}
      <ChartLegend
        pdfCurveColor={CHART_COLORS.PDF_CURVE}
        safetyStockColor={CHART_COLORS.SAFETY_STOCK}
        safetyStockDays={detail.markers.safetyStockDays}
        meanDisruptionColor={CHART_COLORS.MEAN_DISRUPTION}
        meanDisruptionDays={detail.markers.meanDisruptionDays}
      />

      {/* Statistics */}
      <RiskStatsGrid stats={detail.stats} />
    </div>
  )
})
