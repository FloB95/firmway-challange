// Main component
export { RiskDetailPanel } from "./RiskDetailPanel"

// Types
export type {
  ChartDataPoint,
  ChartLegendProps,
  DisruptionChartProps,
  DisruptionDataPoint,
  LegendItemProps,
  RiskDetailPanelProps,
  RiskStats,
  RiskStatsGridProps,
} from "./types"

// Sub-components (for advanced customization)
export { ChartLegend, DisruptionChart, RiskStatsGrid } from "./components"

// Hooks (for custom implementations)
export { useRiskDetail } from "./hooks"

// Constants (for theming/configuration)
export { CHART_COLORS, CHART_CONFIG, DEFAULT_STATS } from "./constants"

// Utilities (for data processing)
export { formatDensityValue, formatYAxisTick, interpolateDensity, prepareChartData } from "./utils"
