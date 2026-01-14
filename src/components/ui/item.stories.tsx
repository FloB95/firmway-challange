import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"
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

const meta: Meta<typeof Item> = {
  title: "UI/Item",
  component: Item,
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "outline", "muted"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Item>

export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Item Title</ItemTitle>
        <ItemDescription>This is a description of the item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithOutline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Outlined Item</ItemTitle>
        <ItemDescription>This item has an outline border.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithMuted: Story = {
  args: {
    variant: "muted",
  },
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Muted Item</ItemTitle>
        <ItemDescription>This item has a muted background.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Small Item</ItemTitle>
        <ItemDescription>A more compact item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Item with Icon</ItemTitle>
        <ItemDescription>This item has an icon media element.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Item with Actions</ItemTitle>
        <ItemDescription>This item has action buttons.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Item variant="outline">
      <ItemHeader>
        <ItemTitle>Header Title</ItemTitle>
        <span className="text-muted-foreground text-sm">Meta info</span>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>This is the main content of the item that spans the full width.</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span className="text-muted-foreground text-xs">Footer left</span>
        <Button size="sm">Action</Button>
      </ItemFooter>
    </Item>
  ),
}

export const CompleteItem: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Complete Example</ItemTitle>
        <ItemDescription>An item demonstrating all available sub-components.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">View</Button>
      </ItemActions>
    </Item>
  ),
}

export const ItemGroupExample: Story = {
  render: () => (
    <ItemGroup className="max-w-md">
      <Item>
        <ItemContent>
          <ItemTitle>First Item</ItemTitle>
          <ItemDescription>Description for first item.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
          <ItemDescription>Description for second item.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
          <ItemDescription>Description for third item.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>With border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Muted background.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export default meta
