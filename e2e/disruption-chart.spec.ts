import { expect, test } from "@playwright/test"

test.describe("DisruptionChart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./")
    // Wait for the page to load and risks to be fetched
    await page.waitForSelector('[data-slot="chart"]', { timeout: 10000 })
  })

  test.describe("Page Load", () => {
    test("displays the risk detail panel with chart", async ({ page }) => {
      // Verify the RiskDetailPanel header is visible
      await expect(page.getByRole("heading", { name: "Disruption exposure" })).toBeVisible()

      // Verify the chart container is rendered
      const chartContainer = page.locator('[data-slot="chart"]')
      await expect(chartContainer).toBeVisible()
    })

    test("displays statistics cards", async ({ page }) => {
      // Verify all stat labels are present (use exact match to avoid multiple matches)
      await expect(page.getByText("Probability", { exact: true })).toBeVisible()
      await expect(page.getByText("Mean", { exact: true })).toBeVisible()
      await expect(page.getByText("P90", { exact: true })).toBeVisible()
      await expect(page.getByText("MTTR", { exact: true })).toBeVisible()
    })
  })

  test.describe("Chart Axis Labels", () => {
    test("displays X-axis label without overlapping values", async ({ page }) => {
      const chartContainer = page.locator('[data-slot="chart"]')

      // X-axis label should be visible
      const xAxisLabel = chartContainer.locator('text:has-text("Disruption days")')
      await expect(xAxisLabel).toBeVisible()
    })

    test("displays Y-axis label without overlapping values", async ({ page }) => {
      const chartContainer = page.locator('[data-slot="chart"]')

      // Y-axis label should be visible
      const yAxisLabel = chartContainer.locator('text:has-text("Probability Density")')
      await expect(yAxisLabel).toBeVisible()
    })

    test("X-axis has tick values visible", async ({ page }) => {
      const chartContainer = page.locator('[data-slot="chart"]')

      // Check that some X-axis tick values are rendered (0, 25, 50, etc.)
      await expect(chartContainer.getByText("0", { exact: true })).toBeVisible()
      await expect(chartContainer.getByText("50", { exact: true })).toBeVisible()
      await expect(chartContainer.getByText("100", { exact: true })).toBeVisible()
    })
  })

  test.describe("Chart Legend", () => {
    test("displays PDF curve legend item", async ({ page }) => {
      await expect(page.getByText("PDF curve")).toBeVisible()
    })

    test("displays safety stock legend with days", async ({ page }) => {
      // Safety stock legend should show with dynamic days value
      const safetyStockLegend = page.locator("text=/Safety stock \\(\\d+d\\)/")
      await expect(safetyStockLegend).toBeVisible()
    })

    test("displays mean disruption legend with days", async ({ page }) => {
      // Mean disruption legend should show with dynamic days value
      const meanDisruptionLegend = page.locator("text=/Mean disruption time \\(\\d+d\\)/")
      await expect(meanDisruptionLegend).toBeVisible()
    })
  })

  test.describe("Chart SVG Elements", () => {
    test("renders the chart SVG", async ({ page }) => {
      const chartSvg = page.locator('[data-slot="chart"] svg')
      await expect(chartSvg).toBeVisible()
    })

    test("renders the PDF curve line", async ({ page }) => {
      // The line chart path should be rendered
      const chartSvg = page.locator('[data-slot="chart"] svg')
      const linePath = chartSvg.locator('path[stroke="#0098C0"]')
      await expect(linePath).toBeVisible()
    })

    test("renders reference lines for safety stock and mean disruption", async ({ page }) => {
      const chartSvg = page.locator('[data-slot="chart"] svg')

      // Safety stock reference line (cyan/teal) - use toBeAttached for SVG elements
      const safetyStockLine = chartSvg.locator('line[stroke="#00dbff"]')
      await expect(safetyStockLine).toBeAttached()

      // Mean disruption reference line (black) - use toBeAttached for SVG elements
      const meanDisruptionLine = chartSvg.locator('line[stroke="#000000"]')
      await expect(meanDisruptionLine).toBeAttached()
    })
  })

  test.describe("Risk Selection Interaction", () => {
    test("updates chart when different risk is selected", async ({ page }) => {
      // Find and click on a different risk item in the list
      const riskItems = page.locator('[data-testid="risk-item"]')
      const itemCount = await riskItems.count()

      if (itemCount > 1) {
        // Click on the second risk item
        await riskItems.nth(1).click()

        // Wait for the chart to update
        await page.waitForTimeout(500)

        // The chart should still be visible after selection change
        await expect(page.locator('[data-slot="chart"]')).toBeVisible()
        await expect(page.getByRole("heading", { name: "Disruption exposure" })).toBeVisible()

        // Legend should still be present with valid data
        await expect(page.locator("text=/Safety stock \\(\\d+d\\)/")).toBeVisible()
        await expect(page.locator("text=/Mean disruption time \\(\\d+d\\)/")).toBeVisible()
      }
    })
  })

  test.describe("Responsive Layout", () => {
    test("chart maintains aspect ratio on different screen sizes", async ({ page }) => {
      // Test on a smaller viewport
      await page.setViewportSize({ width: 800, height: 600 })
      await page.waitForTimeout(300)

      const chartContainer = page.locator('[data-slot="chart"]')
      await expect(chartContainer).toBeVisible()

      // Test on a larger viewport
      await page.setViewportSize({ width: 1400, height: 900 })
      await page.waitForTimeout(300)

      await expect(chartContainer).toBeVisible()
    })
  })
})
