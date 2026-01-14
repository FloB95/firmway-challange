import type { Meta, StoryObj } from "@storybook/react"
import { RiskContributorItem } from "./RiskContributorItem"

const meta: Meta<typeof RiskContributorItem> = {
  title: "Components/RiskContributorItem",
  component: RiskContributorItem,
  args: {
    item: {
      id: "earthquake",
      title: "Earthquake",
      riskCategory: "Natural",
      daysAffected: 0.6,
      riskPercentage: 8.9,
      probability: 3.1,
    },
    totalDays: 365,
  },
  argTypes: {
    totalDays: {
      control: { type: "number", min: 1, max: 365 },
    },
  },
}

type Story = StoryObj<typeof RiskContributorItem>

export const Default: Story = {
  render: (args) => <RiskContributorItem {...args} />,
}

export const Wildfire: Story = {
  args: {
    item: {
      id: "wildfire",
      title: "Wildfire",
      riskCategory: "Natural",
      daysAffected: 0.7,
      riskPercentage: 6.4,
      probability: 4.2,
    },
  },
}

export const HighRisk: Story = {
  args: {
    item: {
      id: "hurricane-cyclone",
      title: "Hurricane / Cyclone",
      riskCategory: "Natural",
      daysAffected: 0.85,
      riskPercentage: 10.3,
      probability: 4.8,
    },
  },
}

export const LowRisk: Story = {
  args: {
    item: {
      id: "tornado",
      title: "Tornado",
      riskCategory: "Natural",
      daysAffected: 0.4,
      riskPercentage: 5.1,
      probability: 2.9,
    },
  },
}

export const CustomTotalDays: Story = {
  args: {
    item: {
      id: "flood",
      title: "Flood",
      riskCategory: "Natural",
      daysAffected: 10,
      riskPercentage: 9.8,
      probability: 5.6,
    },
    totalDays: 100,
  },
}

export const AllRiskTypes: Story = {
  render: () => (
    <div className="flex max-w-[600px] flex-col gap-4">
      <RiskContributorItem
        item={{
          id: "earthquake",
          title: "Earthquake",
          riskCategory: "Natural",
          daysAffected: 0.6,
          riskPercentage: 8.9,
          probability: 3.1,
        }}
      />
      <RiskContributorItem
        item={{
          id: "cyber-attack",
          title: "Cyber Attack",
          riskCategory: "Security",
          daysAffected: 2.5,
          riskPercentage: 15.2,
          probability: 12.8,
        }}
      />
      <RiskContributorItem
        item={{
          id: "supply-chain-disruption",
          title: "Supply Chain Disruption",
          riskCategory: "Operational",
          daysAffected: 5.0,
          riskPercentage: 22.1,
          probability: 8.4,
        }}
      />
    </div>
  ),
}

export default meta
