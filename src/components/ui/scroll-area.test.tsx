import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ScrollArea, ScrollBar } from "./scroll-area"

describe("ScrollArea", () => {
  it("renders with children", () => {
    render(<ScrollArea>Scrollable content</ScrollArea>)
    expect(screen.getByText("Scrollable content")).toBeInTheDocument()
  })

  it("applies correct data-slot attribute", () => {
    const { container } = render(<ScrollArea>Content</ScrollArea>)
    const scrollArea = container.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(<ScrollArea className="custom-class">Content</ScrollArea>)
    const scrollArea = container.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toHaveClass("custom-class")
  })

  it("renders viewport", () => {
    const { container } = render(<ScrollArea>Content</ScrollArea>)
    const viewport = container.querySelector('[data-slot="scroll-area-viewport"]')
    expect(viewport).toBeInTheDocument()
  })

  it("renders the scroll area root correctly", () => {
    const { container } = render(<ScrollArea>Content</ScrollArea>)
    // Radix ScrollArea may not render scrollbar until overflow occurs
    const root = container.querySelector('[data-slot="scroll-area"]')
    expect(root).toHaveClass("relative")
  })

  it("renders multiple children", () => {
    render(
      <ScrollArea>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ScrollArea>
    )
    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
    expect(screen.getByText("Item 3")).toBeInTheDocument()
  })
})

describe("ScrollBar", () => {
  // Note: Radix UI ScrollBar only renders when content overflows
  // These tests verify the component is exported and can be used

  it("ScrollBar component is exported", () => {
    expect(ScrollBar).toBeDefined()
    expect(typeof ScrollBar).toBe("function")
  })

  it("ScrollArea accepts ScrollBar as child without error", () => {
    expect(() =>
      render(
        <ScrollArea>
          <div style={{ height: "1000px" }}>Tall content</div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      )
    ).not.toThrow()
  })

  it("ScrollArea renders with horizontal ScrollBar without error", () => {
    expect(() =>
      render(
        <ScrollArea>
          <div style={{ width: "1000px" }}>Wide content</div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )
    ).not.toThrow()
  })
})
