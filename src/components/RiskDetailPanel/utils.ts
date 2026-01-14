import type { DisruptionDataPoint } from "@/lib/api"

import type { ChartDataPoint } from "./types"

/**
 * Interpolates density value at a specific day using linear interpolation
 * between the two nearest data points.
 *
 * @param data - Array of disruption data points sorted by days
 * @param targetDay - The day value to interpolate at
 * @returns The interpolated density value
 */
export function interpolateDensity(data: DisruptionDataPoint[], targetDay: number): number {
  if (data.length === 0) {
    return 0
  }

  const firstPoint = data[0]
  const lastPoint = data[data.length - 1]

  if (!firstPoint || !lastPoint) {
    return 0
  }

  if (data.length === 1) {
    return firstPoint.density
  }

  // Find the two points that bracket the target day
  for (let i = 0; i < data.length - 1; i++) {
    const current = data[i]
    const next = data[i + 1]

    if (!current || !next) {
      continue
    }

    if (current.days <= targetDay && next.days >= targetDay) {
      const dayRange = next.days - current.days

      // Avoid division by zero
      if (dayRange === 0) {
        return current.density
      }

      const ratio = (targetDay - current.days) / dayRange
      return current.density + ratio * (next.density - current.density)
    }
  }

  // If target day is before first point, return first density
  if (targetDay < firstPoint.days) {
    return firstPoint.density
  }

  // If target day is after last point, return last density
  return lastPoint.density
}

/**
 * Transforms raw disruption data into chart-ready format with split area/line data.
 * Points before safetyStockDays have areaDensity = null (no fill).
 * Points at and after safetyStockDays have areaDensity = density (shows fill).
 *
 * @param data - Raw disruption data points
 * @param safetyStockDays - The day threshold where area fill begins
 * @returns Transformed data ready for ComposedChart
 */
export function prepareChartData(data: DisruptionDataPoint[], safetyStockDays: number): ChartDataPoint[] {
  if (data.length === 0) {
    return []
  }

  const result: ChartDataPoint[] = []

  // Add points before safety stock (areaDensity = null for no fill)
  for (const point of data) {
    if (point.days < safetyStockDays) {
      result.push({
        days: point.days,
        density: point.density,
        areaDensity: null,
      })
    }
  }

  // Add interpolated point exactly at safety stock threshold
  const safetyStockDensity = interpolateDensity(data, safetyStockDays)
  result.push({
    days: safetyStockDays,
    density: safetyStockDensity,
    areaDensity: safetyStockDensity,
  })

  // Add points after safety stock (areaDensity = density for fill)
  for (const point of data) {
    if (point.days > safetyStockDays) {
      result.push({
        days: point.days,
        density: point.density,
        areaDensity: point.density,
      })
    }
  }

  return result
}

/**
 * Formats density value for tooltip display
 */
export function formatDensityValue(value: number): string {
  return value.toFixed(4)
}

/**
 * Formats Y-axis tick values
 */
export function formatYAxisTick(value: number): string {
  return value.toFixed(3)
}
