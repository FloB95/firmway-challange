import type { ChartConfig } from "@/components/ui/chart"

import type { RiskStats } from "./types"

/**
 * Chart axis configuration
 */
export const CHART_CONFIG = {
  X_DOMAIN_MAX: 175,
  X_AXIS_TICKS: [0, 25, 50, 75, 100, 125, 150, 175],
  Y_DOMAIN_MAX: 0.025,
  Y_AXIS_TICKS: [0, 0.005, 0.01, 0.015, 0.02, 0.025],
  Y_AXIS_WIDTH: 50,
} as const

/**
 * Chart margin configuration
 */
export const CHART_MARGIN = {
  top: 10,
  right: 10,
  left: 20,
  bottom: 25,
} as const

/**
 * Color palette for chart elements
 */
export const CHART_COLORS = {
  PDF_CURVE: "#0098C0",
  SAFETY_STOCK: "#00dbff",
  MEAN_DISRUPTION: "#000000",
  AREA_FILL: "var(--color-primary)",
} as const

/**
 * Chart styling configuration
 */
export const CHART_STYLES = {
  AREA_FILL_OPACITY: 0.2,
  LINE_STROKE_WIDTH: 1,
  REFERENCE_LINE_STROKE_WIDTH: 1,
  REFERENCE_LINE_DASH_ARRAY: "6 4",
} as const

/**
 * Recharts configuration for the density chart
 */
export const DENSITY_CHART_CONFIG = {
  density: {
    label: "PDF curve",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

/**
 * Default statistics when none provided
 */
export const DEFAULT_STATS: RiskStats = {
  probability: "2.7%",
  mean: "32.3d",
  p90: "73.3d",
  mttr: "41.6d",
}

/**
 * Axis label configuration
 */
export const AXIS_LABELS = {
  X_AXIS: "Disruption days",
  Y_AXIS: "Probability Density",
} as const
