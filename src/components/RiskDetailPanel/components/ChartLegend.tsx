import { memo } from "react"

import type { ChartLegendProps, LegendItemProps } from "../types"

/**
 * Individual legend item displaying a color indicator and label
 */
const LegendItem = memo(function LegendItem({ color, label, dashed = false }: LegendItemProps) {
  return (
    <div className="flex items-center gap-2">
      {dashed ? (
        <svg width="16" height="2" className="shrink-0" aria-hidden="true">
          <line x1="0" y1="1" x2="16" y2="1" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      ) : (
        <div className="h-0.5 w-4 shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
      )}
      <span className="text-muted-foreground text-xs">{label}</span>
    </div>
  )
})

/**
 * Chart legend component displaying PDF curve, safety stock, and mean disruption indicators
 */
export const ChartLegend = memo(function ChartLegend({
  pdfCurveColor,
  safetyStockColor,
  safetyStockDays,
  meanDisruptionColor,
  meanDisruptionDays,
}: ChartLegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-1" role="list" aria-label="Chart legend">
      <LegendItem color={pdfCurveColor} label="PDF curve" />
      <LegendItem color={safetyStockColor} label={`Safety stock (${safetyStockDays}d)`} dashed />
      <LegendItem color={meanDisruptionColor} label={`Mean disruption time (${meanDisruptionDays}d)`} />
    </div>
  )
})
