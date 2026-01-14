import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Separator } from "./separator"

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
}

type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const HorizontalScrolling: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-muted flex h-24 w-24 shrink-0 items-center justify-center rounded-md border">
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const VerticalScrolling: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Vertical Scroll Example</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-sm">
            This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const BothDirections: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[300px] rounded-md border">
      <div className="w-[500px] p-4">
        <h4 className="mb-4 text-sm font-medium">Both Directions</h4>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-2 text-sm whitespace-nowrap">
            Row {i + 1}: This is a very long line of text that will cause horizontal scrolling when the content exceeds
            the container width.
          </p>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const CustomHeight: Story = {
  render: () => (
    <ScrollArea className="h-[400px] w-64 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Long List</h4>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="py-2">
            <div className="text-sm">Item {i + 1}</div>
            <Separator className="mt-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const CardList: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-80 rounded-md border">
      <div className="space-y-4 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <h5 className="font-medium">Card {i + 1}</h5>
            <p className="text-muted-foreground mt-2 text-sm">
              This is the content of card {i + 1}. It contains some description text.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export default meta
