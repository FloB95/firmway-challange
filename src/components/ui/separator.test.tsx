import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Separator } from "./separator"

describe("Separator", () => {
  it("renders with correct data-slot", () => {
    const { container } = render(<Separator />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it("renders with horizontal orientation by default", () => {
    const { container } = render(<Separator />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toHaveAttribute("data-orientation", "horizontal")
  })

  it("renders with vertical orientation", () => {
    const { container } = render(<Separator orientation="vertical" />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toHaveAttribute("data-orientation", "vertical")
  })

  it("is decorative by default", () => {
    const { container } = render(<Separator />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
    // Radix UI sets role="none" for decorative separators
    expect(separator).toHaveAttribute("role", "none")
  })

  it("can be non-decorative", () => {
    const { container } = render(<Separator decorative={false} />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).not.toHaveAttribute("aria-hidden")
  })

  it("applies custom className", () => {
    const { container } = render(<Separator className="custom-class" />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toHaveClass("custom-class")
  })

  it("has correct default classes", () => {
    const { container } = render(<Separator />)
    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toHaveClass("bg-border")
    expect(separator).toHaveClass("shrink-0")
  })

  it("renders with role separator when not decorative", () => {
    const { container } = render(<Separator decorative={false} />)
    const separator = container.querySelector('[role="separator"]')
    expect(separator).toBeInTheDocument()
  })
})
