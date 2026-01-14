import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "./button"

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies default variant classes", () => {
    const { container } = render(<Button>Default</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("bg-primary")
    expect(button).toHaveClass("text-primary-foreground")
  })

  it("applies destructive variant classes", () => {
    const { container } = render(<Button variant="destructive">Delete</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("bg-destructive")
    expect(button).toHaveClass("text-white")
  })

  it("applies outline variant classes", () => {
    const { container } = render(<Button variant="outline">Outline</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("border")
    expect(button).toHaveClass("bg-background")
  })

  it("applies secondary variant classes", () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("bg-secondary")
    expect(button).toHaveClass("text-secondary-foreground")
  })

  it("applies ghost variant classes", () => {
    const { container } = render(<Button variant="ghost">Ghost</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("hover:bg-accent")
  })

  it("applies link variant classes", () => {
    const { container } = render(<Button variant="link">Link</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("text-primary")
    expect(button).toHaveClass("underline-offset-4")
  })

  it("applies small size classes", () => {
    const { container } = render(<Button size="sm">Small</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("h-8")
    expect(button).toHaveClass("px-3")
  })

  it("applies large size classes", () => {
    const { container } = render(<Button size="lg">Large</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("h-10")
    expect(button).toHaveClass("px-6")
  })

  it("applies icon size classes", () => {
    const { container } = render(<Button size="icon">Icon</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("size-9")
  })

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })

  it("applies custom className", () => {
    const { container } = render(<Button className="custom-class">Custom</Button>)
    const button = container.querySelector("button")
    expect(button).toHaveClass("custom-class")
  })

  it("sets data attributes for variant and size", () => {
    const { container } = render(
      <Button variant="secondary" size="lg">
        Data
      </Button>
    )
    const button = container.querySelector("button")
    expect(button).toHaveAttribute("data-variant", "secondary")
    expect(button).toHaveAttribute("data-size", "lg")
    expect(button).toHaveAttribute("data-slot", "button")
  })
})
