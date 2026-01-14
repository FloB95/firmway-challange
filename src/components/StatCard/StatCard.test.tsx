import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { StatCard } from "./StatCard"

describe("StatCard", () => {
  it("renders the label", () => {
    render(<StatCard label="Probability" value="2.7%" />)
    expect(screen.getByText("Probability")).toBeInTheDocument()
  })

  it("renders the value", () => {
    render(<StatCard label="Probability" value="2.7%" />)
    expect(screen.getByText("2.7%")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <StatCard label="Test" value="100" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("renders label with muted foreground style", () => {
    render(<StatCard label="Mean" value="32.3d" />)
    const label = screen.getByText("Mean")
    expect(label).toHaveClass("text-muted-foreground")
  })

  it("renders value with semibold font", () => {
    render(<StatCard label="P90" value="73.3d" />)
    const value = screen.getByText("73.3d")
    expect(value).toHaveClass("font-semibold")
  })
})
