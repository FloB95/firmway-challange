import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { RiskStatsGrid } from "./RiskStatsGrid"

describe("RiskStatsGrid", () => {
  const defaultStats = {
    probability: "2.7%",
    mean: "32.3d",
    p90: "73.3d",
    mttr: "41.6d",
  }

  it("renders all stat labels", () => {
    render(<RiskStatsGrid stats={defaultStats} />)
    expect(screen.getByText("Probability")).toBeInTheDocument()
    expect(screen.getByText("Mean")).toBeInTheDocument()
    expect(screen.getByText("P90")).toBeInTheDocument()
    expect(screen.getByText("MTTR")).toBeInTheDocument()
  })

  it("renders all stat values", () => {
    render(<RiskStatsGrid stats={defaultStats} />)
    expect(screen.getByText("2.7%")).toBeInTheDocument()
    expect(screen.getByText("32.3d")).toBeInTheDocument()
    expect(screen.getByText("73.3d")).toBeInTheDocument()
    expect(screen.getByText("41.6d")).toBeInTheDocument()
  })

  it("updates values when props change", () => {
    const { rerender } = render(<RiskStatsGrid stats={defaultStats} />)
    expect(screen.getByText("2.7%")).toBeInTheDocument()

    const newStats = {
      probability: "5.5%",
      mean: "40.0d",
      p90: "85.0d",
      mttr: "50.0d",
    }
    rerender(<RiskStatsGrid stats={newStats} />)

    expect(screen.getByText("5.5%")).toBeInTheDocument()
    expect(screen.getByText("40.0d")).toBeInTheDocument()
    expect(screen.getByText("85.0d")).toBeInTheDocument()
    expect(screen.getByText("50.0d")).toBeInTheDocument()
  })

  it("renders with 4-column grid layout", () => {
    const { container } = render(<RiskStatsGrid stats={defaultStats} />)
    const grid = container.firstChild
    expect(grid).toHaveClass("grid-cols-4")
  })

  it("has border-top styling", () => {
    const { container } = render(<RiskStatsGrid stats={defaultStats} />)
    const grid = container.firstChild
    expect(grid).toHaveClass("border-t")
  })
})
