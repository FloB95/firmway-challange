import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "./progress"

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  args: {
    value: 50,
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
}

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: (args) => <Progress {...args} />,
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Quarter: Story = {
  args: {
    value: 25,
  },
}

export const Half: Story = {
  args: {
    value: 50,
  },
}

export const ThreeQuarters: Story = {
  args: {
    value: 75,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const CustomWidth: Story = {
  args: {
    value: 60,
    className: "w-64",
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <div>
        <p className="mb-2 text-sm">0%</p>
        <Progress value={0} />
      </div>
      <div>
        <p className="mb-2 text-sm">25%</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="mb-2 text-sm">50%</p>
        <Progress value={50} />
      </div>
      <div>
        <p className="mb-2 text-sm">75%</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="mb-2 text-sm">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="max-w-sm rounded-lg border p-4">
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium">Upload Progress</span>
        <span className="text-muted-foreground text-sm">67%</span>
      </div>
      <Progress value={67} />
      <p className="text-muted-foreground mt-2 text-xs">Uploading file.zip...</p>
    </div>
  ),
}

export default meta
