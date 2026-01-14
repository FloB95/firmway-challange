import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { RiskContributorsList } from "./RiskContributorsList"

describe("RiskContributorsList", () => {
  const mockItems = [
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
  ]

  it("renders the title", () => {
    render(<RiskContributorsList title="Top risk contributors" items={mockItems} />)
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Top risk contributors")
  })

  it("renders all items", () => {
    render(<RiskContributorsList title="Top risk contributors" items={mockItems} />)
    expect(screen.getByText("Earthquake")).toBeInTheDocument()
    expect(screen.getByText("Wildfire")).toBeInTheDocument()
  })

  it("renders with custom height", () => {
    const { container } = render(<RiskContributorsList title="Test" items={mockItems} height="500px" />)
    const scrollArea = container.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toHaveStyle({ height: "500px" })
  })

  it("renders with custom total days", () => {
    render(<RiskContributorsList title="Test" items={mockItems} totalDays={100} />)
    expect(screen.getByText("0.6 days affected of 100 days")).toBeInTheDocument()
  })

  it("renders empty list when no items", () => {
    const { container } = render(<RiskContributorsList title="Empty" items={[]} />)
    const items = container.querySelectorAll('[data-slot="item"]')
    expect(items).toHaveLength(0)
  })

  it("renders scroll area", () => {
    const { container } = render(<RiskContributorsList title="Test" items={mockItems} />)
    const scrollArea = container.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toBeInTheDocument()
  })

  it("highlights the selected item", () => {
    const { container } = render(<RiskContributorsList title="Test" items={mockItems} selectedItem={mockItems[0]} />)
    const items = container.querySelectorAll('[data-slot="item"]')
    expect(items[0]).toHaveClass("border-primary")
    expect(items[1]).not.toHaveClass("border-primary")
  })

  it("calls onSelectItem when an item is clicked", () => {
    const handleSelect = vi.fn()
    const { container } = render(<RiskContributorsList title="Test" items={mockItems} onSelectItem={handleSelect} />)
    const items = container.querySelectorAll('[data-slot="item"]')
    fireEvent.click(items[0])
    expect(handleSelect).toHaveBeenCalledWith(mockItems[0])
  })

  it("calls onSelectItem with correct item when second item is clicked", () => {
    const handleSelect = vi.fn()
    const { container } = render(<RiskContributorsList title="Test" items={mockItems} onSelectItem={handleSelect} />)
    const items = container.querySelectorAll('[data-slot="item"]')
    fireEvent.click(items[1])
    expect(handleSelect).toHaveBeenCalledWith(mockItems[1])
  })
})
