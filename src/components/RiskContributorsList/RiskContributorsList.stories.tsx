import type { Meta, StoryObj } from "@storybook/react"
import { RiskContributorsList } from "./RiskContributorsList"

const sampleItems = [
  {
    id: "earthquake",
    title: "Earthquake",
    riskCategory: "Natural",
    daysAffected: 0.6,
    riskPercentage: 8.9,
    probability: 3.1,
  },
  {
    id: "wildfire",
    title: "Wildfire",
    riskCategory: "Natural",
    daysAffected: 0.7,
    riskPercentage: 6.4,
    probability: 4.2,
  },
  {
    id: "flood",
    title: "Flood",
    riskCategory: "Natural",
    daysAffected: 0.9,
    riskPercentage: 9.8,
    probability: 5.6,
  },
  {
    id: "tornado",
    title: "Tornado",
    riskCategory: "Natural",
    daysAffected: 0.4,
    riskPercentage: 5.1,
    probability: 2.9,
  },
  {
    id: "hurricane-cyclone",
    title: "Hurricane / Cyclone",
    riskCategory: "Natural",
    daysAffected: 0.85,
    riskPercentage: 10.3,
    probability: 4.8,
  },
  {
    id: "tsunami",
    title: "Tsunami",
    riskCategory: "Natural",
    daysAffected: 0.8,
    riskPercentage: 7.4,
    probability: 2.65,
  },
]

const meta: Meta<typeof RiskContributorsList> = {
  title: "Components/RiskContributorsList",
  component: RiskContributorsList,
  args: {
    title: "Top risk contributors",
    items: sampleItems,
    height: "400px",
    totalDays: 365,
  },
  argTypes: {
    height: {
      control: { type: "text" },
    },
    totalDays: {
      control: { type: "number", min: 1, max: 365 },
    },
  },
}

type Story = StoryObj<typeof RiskContributorsList>

export const Default: Story = {
  render: (args) => <RiskContributorsList {...args} />,
}

export const ShortList: Story = {
  args: {
    title: "Risk Overview",
    items: sampleItems.slice(0, 2),
    height: "200px",
  },
}

export const TallList: Story = {
  args: {
    title: "All Risks",
    items: sampleItems,
    height: "600px",
  },
}

export const EmptyList: Story = {
  args: {
    title: "No risks found",
    items: [],
  },
}

export const CustomTotalDays: Story = {
  args: {
    title: "Monthly Risk Assessment",
    items: sampleItems.map((item) => ({
      ...item,
      daysAffected: item.daysAffected * 10,
    })),
    totalDays: 30,
  },
}

export const MixedCategories: Story = {
  args: {
    title: "All Risk Categories",
    items: [
      ...sampleItems.slice(0, 2),
      {
        id: "cyber-attack",
        title: "Cyber Attack",
        riskCategory: "Security",
        daysAffected: 2.5,
        riskPercentage: 15.2,
        probability: 12.8,
      },
      {
        id: "supply-chain-disruption",
        title: "Supply Chain Disruption",
        riskCategory: "Operational",
        daysAffected: 5.0,
        riskPercentage: 22.1,
        probability: 8.4,
      },
    ],
  },
}

export default meta
