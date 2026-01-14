import type { Meta, StoryObj } from "@storybook/react"

import { StatCard } from "./StatCard"

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  args: {
    label: "Probability",
    value: "2.7%",
  },
}

type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  render: (args) => <StatCard {...args} />,
}

export const Probability: Story = {
  args: {
    label: "Probability",
    value: "2.7%",
  },
}

export const Mean: Story = {
  args: {
    label: "Mean",
    value: "32.3d",
  },
}

export const P90: Story = {
  args: {
    label: "P90",
    value: "73.3d",
  },
}

export const MTTR: Story = {
  args: {
    label: "MTTR",
    value: "41.6d",
  },
}

export const AllStats: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <StatCard label="Probability" value="2.7%" />
      <StatCard label="Mean" value="32.3d" />
      <StatCard label="P90" value="73.3d" />
      <StatCard label="MTTR" value="41.6d" />
    </div>
  ),
}

export const LargeValues: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <StatCard label="Total Events" value="1,234,567" />
      <StatCard label="Avg Duration" value="365.25d" />
      <StatCard label="Max Value" value="$99,999.99" />
      <StatCard label="Uptime" value="99.99%" />
    </div>
  ),
}

export default meta
