import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">Description text</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Another Section</h4>
        <p className="text-sm text-muted-foreground">More content here</p>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-64">
      <p className="text-sm">Content above</p>
      <Separator {...args} className="my-4" />
      <p className="text-sm">Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Item 1</div>
      <Separator {...args} />
      <div>Item 2</div>
      <Separator {...args} />
      <div>Item 3</div>
    </div>
  ),
}

export const InNavigation: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Home</div>
      <Separator orientation="vertical" />
      <div>Products</div>
      <Separator orientation="vertical" />
      <div>About</div>
      <Separator orientation="vertical" />
      <div>Contact</div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="rounded-lg border p-4 w-64">
      <h3 className="font-medium">Card Title</h3>
      <Separator className="my-4" />
      <p className="text-sm text-muted-foreground">
        Card content goes here with more detailed information.
      </p>
      <Separator className="my-4" />
      <div className="flex justify-end gap-2">
        <button className="text-sm">Cancel</button>
        <button className="text-sm font-medium">Save</button>
      </div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="w-64">
      {["Item 1", "Item 2", "Item 3", "Item 4"].map((item, index, arr) => (
        <div key={item}>
          <div className="py-2 text-sm">{item}</div>
          {index < arr.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div>
        <p className="text-sm mb-2">Default</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm mb-2">Thicker</p>
        <Separator className="h-0.5" />
      </div>
      <div>
        <p className="text-sm mb-2">Dashed (custom)</p>
        <Separator className="border-t border-dashed bg-transparent h-0" />
      </div>
    </div>
  ),
}

export default meta
