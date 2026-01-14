import { describe, expect, it } from "vitest"

import { formatDensityValue, formatYAxisTick, interpolateDensity, prepareChartData } from "./utils"

describe("utils", () => {
  describe("interpolateDensity", () => {
    const sampleData = [
      { days: 0, density: 0.01 },
      { days: 50, density: 0.02 },
      { days: 100, density: 0.015 },
    ]

    it("returns exact value when target matches a data point", () => {
      expect(interpolateDensity(sampleData, 50)).toBe(0.02)
    })

    it("interpolates between two points correctly", () => {
      // At day 25, should be halfway between 0.01 and 0.02
      expect(interpolateDensity(sampleData, 25)).toBe(0.015)
    })

    it("returns first density for empty array", () => {
      expect(interpolateDensity([], 25)).toBe(0)
    })

    it("returns first density for single point array", () => {
      expect(interpolateDensity([{ days: 0, density: 0.05 }], 25)).toBe(0.05)
    })

    it("returns first density when target is before first point", () => {
      const data = [
        { days: 10, density: 0.01 },
        { days: 50, density: 0.02 },
      ]
      expect(interpolateDensity(data, 5)).toBe(0.01)
    })

    it("returns last density when target is after last point", () => {
      expect(interpolateDensity(sampleData, 150)).toBe(0.015)
    })

    it("handles points with same day value", () => {
      const data = [
        { days: 50, density: 0.01 },
        { days: 50, density: 0.02 },
        { days: 100, density: 0.015 },
      ]
      expect(interpolateDensity(data, 50)).toBe(0.01)
    })
  })

  describe("prepareChartData", () => {
    const sampleData = [
      { days: 0, density: 0.01 },
      { days: 25, density: 0.015 },
      { days: 50, density: 0.02 },
      { days: 75, density: 0.018 },
      { days: 100, density: 0.015 },
    ]

    it("returns empty array for empty input", () => {
      expect(prepareChartData([], 30)).toEqual([])
    })

    it("sets areaDensity to null for points before safetyStockDays", () => {
      const result = prepareChartData(sampleData, 50)
      const beforePoints = result.filter((p) => p.days < 50)
      expect(beforePoints.every((p) => p.areaDensity === null)).toBe(true)
    })

    it("sets areaDensity to density for points after safetyStockDays", () => {
      const result = prepareChartData(sampleData, 50)
      const afterPoints = result.filter((p) => p.days > 50)
      expect(afterPoints.every((p) => p.areaDensity === p.density)).toBe(true)
    })

    it("includes interpolated point at safetyStockDays", () => {
      const result = prepareChartData(sampleData, 30)
      const safetyStockPoint = result.find((p) => p.days === 30)
      expect(safetyStockPoint).toBeDefined()
      expect(safetyStockPoint?.areaDensity).toBe(safetyStockPoint?.density)
    })

    it("maintains data integrity for all points", () => {
      const result = prepareChartData(sampleData, 50)
      // Original points should have same density values
      const originalPoint = result.find((p) => p.days === 25)
      expect(originalPoint?.density).toBe(0.015)
    })

    it("handles safetyStockDays at exact data point", () => {
      const result = prepareChartData(sampleData, 50)
      const safetyStockPoint = result.find((p) => p.days === 50)
      expect(safetyStockPoint?.density).toBe(0.02)
      expect(safetyStockPoint?.areaDensity).toBe(0.02)
    })
  })

  describe("formatDensityValue", () => {
    it("formats to 4 decimal places", () => {
      expect(formatDensityValue(0.0123456)).toBe("0.0123")
    })

    it("pads with zeros if needed", () => {
      expect(formatDensityValue(0.01)).toBe("0.0100")
    })

    it("handles zero", () => {
      expect(formatDensityValue(0)).toBe("0.0000")
    })
  })

  describe("formatYAxisTick", () => {
    it("formats to 3 decimal places", () => {
      expect(formatYAxisTick(0.0125)).toBe("0.013")
    })

    it("pads with zeros if needed", () => {
      expect(formatYAxisTick(0.01)).toBe("0.010")
    })

    it("handles zero", () => {
      expect(formatYAxisTick(0)).toBe("0.000")
    })
  })
})
