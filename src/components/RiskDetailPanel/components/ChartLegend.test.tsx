import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ChartLegend } from "./ChartLegend"

describe("ChartLegend", () => {
  const defaultProps = {
    pdfCurveColor: "#0098C0",
    safetyStockColor: "#00dbff",
    safetyStockDays: 32,
    meanDisruptionColor: "#000000",
    meanDisruptionDays: 68,
  }

  it("renders PDF curve legend item", () => {
    render(<ChartLegend {...defaultProps} />)
    expect(screen.getByText("PDF curve")).toBeInTheDocument()
  })

  it("renders safety stock legend item with days", () => {
    render(<ChartLegend {...defaultProps} />)
    expect(screen.getByText("Safety stock (32d)")).toBeInTheDocument()
  })

  it("renders mean disruption legend item with days", () => {
    render(<ChartLegend {...defaultProps} />)
    expect(screen.getByText("Mean disruption time (68d)")).toBeInTheDocument()
  })

  it("updates safety stock days when prop changes", () => {
    const { rerender } = render(<ChartLegend {...defaultProps} />)
    expect(screen.getByText("Safety stock (32d)")).toBeInTheDocument()

    rerender(<ChartLegend {...defaultProps} safetyStockDays={45} />)
    expect(screen.getByText("Safety stock (45d)")).toBeInTheDocument()
  })

  it("updates mean disruption days when prop changes", () => {
    const { rerender } = render(<ChartLegend {...defaultProps} />)
    expect(screen.getByText("Mean disruption time (68d)")).toBeInTheDocument()

    rerender(<ChartLegend {...defaultProps} meanDisruptionDays={90} />)
    expect(screen.getByText("Mean disruption time (90d)")).toBeInTheDocument()
  })

  it("has correct accessibility role", () => {
    render(<ChartLegend {...defaultProps} />)
    expect(screen.getByRole("list", { name: "Chart legend" })).toBeInTheDocument()
  })

  it("renders color indicators with correct colors", () => {
    const { container } = render(<ChartLegend {...defaultProps} />)
    const solidIndicator = container.querySelector('div[style*="background-color"]')
    expect(solidIndicator).toHaveStyle({ backgroundColor: "#0098C0" })
  })

  it("renders dashed line for safety stock", () => {
    const { container } = render(<ChartLegend {...defaultProps} />)
    const dashedLine = container.querySelector('line[stroke-dasharray="4 2"]')
    expect(dashedLine).toBeInTheDocument()
  })
})
