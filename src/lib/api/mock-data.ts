import type { RiskDetailResponse, RiskListItem } from "./types"

/**
 * Mock data simulating API responses
 * In production, this would be replaced with actual API calls
 */

export const MOCK_RISK_LIST: RiskListItem[] = [
  {
    id: "earthquake",
    title: "Earthquake",
    riskCategory: "Natural",
    daysAffected: 0.6,
    riskPercentage: 8.9,
    probability: 3.1,
  },
  {
    id: "wildfire",
    title: "Wildfire",
    riskCategory: "Natural",
    daysAffected: 0.7,
    riskPercentage: 6.4,
    probability: 4.2,
  },
  {
    id: "flood",
    title: "Flood",
    riskCategory: "Natural",
    daysAffected: 0.9,
    riskPercentage: 9.8,
    probability: 5.6,
  },
  {
    id: "tornado",
    title: "Tornado",
    riskCategory: "Natural",
    daysAffected: 0.4,
    riskPercentage: 5.1,
    probability: 2.9,
  },
  {
    id: "hurricane-cyclone",
    title: "Hurricane / Cyclone",
    riskCategory: "Natural",
    daysAffected: 0.85,
    riskPercentage: 10.3,
    probability: 4.8,
  },
  {
    id: "tsunami",
    title: "Tsunami",
    riskCategory: "Natural",
    daysAffected: 0.8,
    riskPercentage: 7.4,
    probability: 2.65,
  },
]

export const MOCK_RISK_DETAILS: Record<string, RiskDetailResponse> = {
  earthquake: {
    id: "earthquake",
    title: "Earthquake",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.002 },
      { days: 25, density: 0.008 },
      { days: 50, density: 0.018 },
      { days: 75, density: 0.022 },
      { days: 100, density: 0.015 },
      { days: 125, density: 0.008 },
      { days: 150, density: 0.004 },
      { days: 175, density: 0.001 },
    ],
    markers: {
      safetyStockDays: 32,
      meanDisruptionDays: 68,
    },
    stats: {
      probability: "2.7%",
      mean: "32.3d",
      p90: "73.3d",
      mttr: "41.6d",
    },
  },
  wildfire: {
    id: "wildfire",
    title: "Wildfire",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.003 },
      { days: 25, density: 0.012 },
      { days: 50, density: 0.02 },
      { days: 75, density: 0.018 },
      { days: 100, density: 0.01 },
      { days: 125, density: 0.005 },
      { days: 150, density: 0.002 },
      { days: 175, density: 0.001 },
    ],
    markers: {
      safetyStockDays: 28,
      meanDisruptionDays: 52,
    },
    stats: {
      probability: "4.2%",
      mean: "28.5d",
      p90: "65.2d",
      mttr: "38.1d",
    },
  },
  flood: {
    id: "flood",
    title: "Flood",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.001 },
      { days: 25, density: 0.005 },
      { days: 50, density: 0.012 },
      { days: 75, density: 0.02 },
      { days: 100, density: 0.025 },
      { days: 125, density: 0.018 },
      { days: 150, density: 0.01 },
      { days: 175, density: 0.004 },
    ],
    markers: {
      safetyStockDays: 45,
      meanDisruptionDays: 89,
    },
    stats: {
      probability: "5.6%",
      mean: "45.2d",
      p90: "98.5d",
      mttr: "52.3d",
    },
  },
  tornado: {
    id: "tornado",
    title: "Tornado",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.005 },
      { days: 25, density: 0.015 },
      { days: 50, density: 0.022 },
      { days: 75, density: 0.016 },
      { days: 100, density: 0.008 },
      { days: 125, density: 0.003 },
      { days: 150, density: 0.001 },
      { days: 175, density: 0.0 },
    ],
    markers: {
      safetyStockDays: 22,
      meanDisruptionDays: 47,
    },
    stats: {
      probability: "2.9%",
      mean: "18.3d",
      p90: "42.1d",
      mttr: "25.6d",
    },
  },
  "hurricane-cyclone": {
    id: "hurricane-cyclone",
    title: "Hurricane / Cyclone",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.001 },
      { days: 25, density: 0.003 },
      { days: 50, density: 0.008 },
      { days: 75, density: 0.015 },
      { days: 100, density: 0.022 },
      { days: 125, density: 0.02 },
      { days: 150, density: 0.012 },
      { days: 175, density: 0.006 },
    ],
    markers: {
      safetyStockDays: 58,
      meanDisruptionDays: 105,
    },
    stats: {
      probability: "4.8%",
      mean: "55.7d",
      p90: "112.4d",
      mttr: "68.9d",
    },
  },
  tsunami: {
    id: "tsunami",
    title: "Tsunami",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.002 },
      { days: 25, density: 0.006 },
      { days: 50, density: 0.014 },
      { days: 75, density: 0.021 },
      { days: 100, density: 0.019 },
      { days: 125, density: 0.012 },
      { days: 150, density: 0.006 },
      { days: 175, density: 0.002 },
    ],
    markers: {
      safetyStockDays: 38,
      meanDisruptionDays: 76,
    },
    stats: {
      probability: "2.65%",
      mean: "38.9d",
      p90: "85.3d",
      mttr: "48.2d",
    },
  },
}

/**
 * Helper to get risk ID from title
 */
export function getRiskIdFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-")
}
