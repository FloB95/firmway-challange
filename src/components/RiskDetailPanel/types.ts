import type { RiskItem } from "@/components/RiskContributorItem"
import type { DisruptionDataPoint, RiskMarkers, RiskStats } from "@/lib/api"

// Re-export types from API for convenience
export type { DisruptionDataPoint, RiskMarkers, RiskStats }

/**
 * Props for the RiskDetailPanel component
 */
export interface RiskDetailPanelProps {
  /** The risk item to display details for */
  item: RiskItem
}

/**
 * Extended data point with area density for split line/area rendering
 */
export interface ChartDataPoint {
  days: number
  density: number
  areaDensity: number | null
}

/**
 * Props for the ChartLegend component
 */
export interface ChartLegendProps {
  pdfCurveColor: string
  safetyStockColor: string
  safetyStockDays: number
  meanDisruptionColor: string
  meanDisruptionDays: number
}

/**
 * Props for individual legend items
 */
export interface LegendItemProps {
  color: string
  label: string
  dashed?: boolean
}

/**
 * Props for the DisruptionChart component
 */
export interface DisruptionChartProps {
  data: ChartDataPoint[]
  safetyStockDays: number
  meanDisruptionDays: number
}

/**
 * Props for the RiskStatsGrid component
 */
export interface RiskStatsGridProps {
  stats: RiskStats
}
