import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { RiskContributorItem } from "./RiskContributorItem"

describe("RiskContributorItem", () => {
  const mockItem = {
    title: "Earthquake",
    riskCategory: "Natural",
    daysAffected: 0.6,
    riskPercentage: 8.9,
    probability: 3.1,
  }

  it("renders the item title", () => {
    render(<RiskContributorItem item={mockItem} />)
    expect(screen.getByText("Earthquake")).toBeInTheDocument()
  })

  it("renders the risk category", () => {
    render(<RiskContributorItem item={mockItem} />)
    expect(screen.getByText("Natural")).toBeInTheDocument()
  })

  it("renders the risk percentage", () => {
    render(<RiskContributorItem item={mockItem} />)
    expect(screen.getByText("8.9% of total")).toBeInTheDocument()
  })

  it("renders the probability", () => {
    render(<RiskContributorItem item={mockItem} />)
    expect(screen.getByText("3.1% probability")).toBeInTheDocument()
  })

  it("renders days affected with default total days", () => {
    render(<RiskContributorItem item={mockItem} />)
    expect(screen.getByText("0.6 days affected of 365 days")).toBeInTheDocument()
  })

  it("renders days affected with custom total days", () => {
    render(<RiskContributorItem item={mockItem} totalDays={100} />)
    expect(screen.getByText("0.6 days affected of 100 days")).toBeInTheDocument()
  })

  it("renders the progress bar", () => {
    const { container } = render(<RiskContributorItem item={mockItem} />)
    const progress = container.querySelector('[data-slot="progress"]')
    expect(progress).toBeInTheDocument()
  })

  it("renders with outline variant", () => {
    const { container } = render(<RiskContributorItem item={mockItem} />)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveAttribute("data-variant", "outline")
  })

  it("applies selected styles when isSelected is true", () => {
    const { container } = render(<RiskContributorItem item={mockItem} isSelected />)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("border-primary")
    expect(item).toHaveClass("bg-accent/30")
  })

  it("does not apply selected styles when isSelected is false", () => {
    const { container } = render(<RiskContributorItem item={mockItem} isSelected={false} />)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).not.toHaveClass("border-primary")
  })

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn()
    const { container } = render(<RiskContributorItem item={mockItem} onClick={handleClick} />)
    const item = container.querySelector('[data-slot="item"]')
    fireEvent.click(item!)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("has cursor-pointer class for clickable appearance", () => {
    const { container } = render(<RiskContributorItem item={mockItem} />)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("cursor-pointer")
  })
})
