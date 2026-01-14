import { memo } from "react"

import { StatCard } from "@/components/StatCard"

import type { RiskStatsGridProps } from "../types"

/**
 * Grid displaying risk statistics: Probability, Mean, P90, and MTTR
 */
export const RiskStatsGrid = memo(function RiskStatsGrid({ stats }: RiskStatsGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 border-t pt-4">
      <StatCard label="Probability" value={stats.probability} />
      <StatCard label="Mean" value={stats.mean} />
      <StatCard label="P90" value={stats.p90} />
      <StatCard label="MTTR" value={stats.mttr} />
    </div>
  )
})
