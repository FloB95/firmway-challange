/**
 * API Response Types for Risk Management
 */

/**
 * Risk item in the list response
 */
export interface RiskListItem {
  id: string
  title: string
  riskCategory: string
  daysAffected: number
  riskPercentage: number
  probability: number
}

/**
 * Response from GET /api/risks
 */
export interface RiskListResponse {
  risks: RiskListItem[]
}

/**
 * Data point for disruption probability density chart
 */
export interface DisruptionDataPoint {
  days: number
  density: number
}

/**
 * Marker positions on the chart
 */
export interface RiskMarkers {
  safetyStockDays: number
  meanDisruptionDays: number
}

/**
 * Statistical metrics for risk assessment
 */
export interface RiskStats {
  probability: string
  mean: string
  p90: string
  mttr: string
}

/**
 * Response from GET /api/risks/:id
 */
export interface RiskDetailResponse {
  id: string
  title: string
  riskCategory: string
  chartData: DisruptionDataPoint[]
  markers: RiskMarkers
  stats: RiskStats
}
