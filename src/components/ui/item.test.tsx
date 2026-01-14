import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item"

describe("Item", () => {
  it("renders with children", () => {
    render(<Item>Item content</Item>)
    expect(screen.getByText("Item content")).toBeInTheDocument()
  })

  it("applies default variant classes", () => {
    const { container } = render(<Item>Default</Item>)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("bg-transparent")
    expect(item).toHaveAttribute("data-variant", "default")
  })

  it("applies outline variant classes", () => {
    const { container } = render(<Item variant="outline">Outline</Item>)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("border-border")
    expect(item).toHaveAttribute("data-variant", "outline")
  })

  it("applies muted variant classes", () => {
    const { container } = render(<Item variant="muted">Muted</Item>)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("bg-muted/50")
    expect(item).toHaveAttribute("data-variant", "muted")
  })

  it("applies small size classes", () => {
    const { container } = render(<Item size="sm">Small</Item>)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("py-3")
    expect(item).toHaveAttribute("data-size", "sm")
  })

  it("applies custom className", () => {
    const { container } = render(<Item className="custom-class">Custom</Item>)
    const item = container.querySelector('[data-slot="item"]')
    expect(item).toHaveClass("custom-class")
  })
})

describe("ItemGroup", () => {
  it("renders with children", () => {
    render(
      <ItemGroup>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </ItemGroup>
    )
    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  it("has list role", () => {
    render(<ItemGroup>Content</ItemGroup>)
    expect(screen.getByRole("list")).toBeInTheDocument()
  })

  it("applies correct data-slot attribute", () => {
    const { container } = render(<ItemGroup>Content</ItemGroup>)
    const group = container.querySelector('[data-slot="item-group"]')
    expect(group).toBeInTheDocument()
  })
})

describe("ItemSeparator", () => {
  it("renders with correct data-slot", () => {
    const { container } = render(<ItemSeparator />)
    const separator = container.querySelector('[data-slot="item-separator"]')
    expect(separator).toBeInTheDocument()
  })
})

describe("ItemMedia", () => {
  it("renders with children", () => {
    render(<ItemMedia>Media</ItemMedia>)
    expect(screen.getByText("Media")).toBeInTheDocument()
  })

  it("applies default variant", () => {
    const { container } = render(<ItemMedia>Default</ItemMedia>)
    const media = container.querySelector('[data-slot="item-media"]')
    expect(media).toHaveAttribute("data-variant", "default")
  })

  it("applies icon variant classes", () => {
    const { container } = render(<ItemMedia variant="icon">Icon</ItemMedia>)
    const media = container.querySelector('[data-slot="item-media"]')
    expect(media).toHaveClass("size-8")
    expect(media).toHaveAttribute("data-variant", "icon")
  })

  it("applies image variant classes", () => {
    const { container } = render(<ItemMedia variant="image">Image</ItemMedia>)
    const media = container.querySelector('[data-slot="item-media"]')
    expect(media).toHaveClass("size-10")
    expect(media).toHaveAttribute("data-variant", "image")
  })
})

describe("ItemContent", () => {
  it("renders with children", () => {
    render(<ItemContent>Content text</ItemContent>)
    expect(screen.getByText("Content text")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemContent>Content</ItemContent>)
    const content = container.querySelector('[data-slot="item-content"]')
    expect(content).toBeInTheDocument()
  })

  it("applies flex-1 class", () => {
    const { container } = render(<ItemContent>Content</ItemContent>)
    const content = container.querySelector('[data-slot="item-content"]')
    expect(content).toHaveClass("flex-1")
  })
})

describe("ItemTitle", () => {
  it("renders with children", () => {
    render(<ItemTitle>Title text</ItemTitle>)
    expect(screen.getByText("Title text")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemTitle>Title</ItemTitle>)
    const title = container.querySelector('[data-slot="item-title"]')
    expect(title).toBeInTheDocument()
  })

  it("applies font-medium class", () => {
    const { container } = render(<ItemTitle>Title</ItemTitle>)
    const title = container.querySelector('[data-slot="item-title"]')
    expect(title).toHaveClass("font-medium")
  })
})

describe("ItemDescription", () => {
  it("renders with children", () => {
    render(<ItemDescription>Description text</ItemDescription>)
    expect(screen.getByText("Description text")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemDescription>Description</ItemDescription>)
    const description = container.querySelector('[data-slot="item-description"]')
    expect(description).toBeInTheDocument()
  })

  it("renders as paragraph element", () => {
    render(<ItemDescription>Description</ItemDescription>)
    const paragraph = screen.getByText("Description")
    expect(paragraph.tagName).toBe("P")
  })
})

describe("ItemActions", () => {
  it("renders with children", () => {
    render(<ItemActions>Actions</ItemActions>)
    expect(screen.getByText("Actions")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemActions>Actions</ItemActions>)
    const actions = container.querySelector('[data-slot="item-actions"]')
    expect(actions).toBeInTheDocument()
  })

  it("applies flex class", () => {
    const { container } = render(<ItemActions>Actions</ItemActions>)
    const actions = container.querySelector('[data-slot="item-actions"]')
    expect(actions).toHaveClass("flex")
  })
})

describe("ItemHeader", () => {
  it("renders with children", () => {
    render(<ItemHeader>Header content</ItemHeader>)
    expect(screen.getByText("Header content")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemHeader>Header</ItemHeader>)
    const header = container.querySelector('[data-slot="item-header"]')
    expect(header).toBeInTheDocument()
  })
})

describe("ItemFooter", () => {
  it("renders with children", () => {
    render(<ItemFooter>Footer content</ItemFooter>)
    expect(screen.getByText("Footer content")).toBeInTheDocument()
  })

  it("applies correct data-slot", () => {
    const { container } = render(<ItemFooter>Footer</ItemFooter>)
    const footer = container.querySelector('[data-slot="item-footer"]')
    expect(footer).toBeInTheDocument()
  })
})
