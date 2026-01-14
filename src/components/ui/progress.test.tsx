import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Progress } from "./progress"

describe("Progress", () => {
  it("renders with default value", () => {
    const { container } = render(<Progress />)
    const progress = container.querySelector('[data-slot="progress"]')
    expect(progress).toBeInTheDocument()
  })

  it("renders with specified value", () => {
    const { container } = render(<Progress value={50} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: "translateX(-50%)" })
  })

  it("renders with 0 value", () => {
    const { container } = render(<Progress value={0} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: "translateX(-100%)" })
  })

  it("renders with 100 value", () => {
    const { container } = render(<Progress value={100} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: "translateX(-0%)" })
  })

  it("applies custom className", () => {
    const { container } = render(<Progress className="custom-class" />)
    const progress = container.querySelector('[data-slot="progress"]')
    expect(progress).toHaveClass("custom-class")
  })

  it("has correct default classes", () => {
    const { container } = render(<Progress />)
    const progress = container.querySelector('[data-slot="progress"]')
    expect(progress).toHaveClass("h-2")
    expect(progress).toHaveClass("w-full")
    expect(progress).toHaveClass("rounded-xs")
  })

  it("renders indicator with correct classes", () => {
    const { container } = render(<Progress value={50} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveClass("bg-primary")
    expect(indicator).toHaveClass("h-full")
  })

  it("handles undefined value gracefully", () => {
    const { container } = render(<Progress value={undefined} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: "translateX(-100%)" })
  })
})
