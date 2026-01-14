import type { Meta, StoryObj } from "@storybook/react"

import { RiskDetailPanel } from "./RiskDetailPanel"

const meta: Meta<typeof RiskDetailPanel> = {
  title: "Components/RiskDetailPanel",
  component: RiskDetailPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Panel displaying detailed risk information including a probability density chart, safety stock and mean disruption markers, and key statistics. Data is fetched from the API based on the risk item ID.",
      },
    },
  },
  argTypes: {
    item: {
      description: "The risk item to display details for",
    },
  },
}

export default meta
type Story = StoryObj<typeof RiskDetailPanel>

/**
 * Default earthquake risk
 */
export const Default: Story = {
  args: {
    item: {
      id: "earthquake",
      title: "Earthquake",
      riskCategory: "Natural",
      daysAffected: 0.6,
      riskPercentage: 8.9,
      probability: 3.1,
    },
  },
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Wildfire risk
 */
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
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Flood risk - longer duration disruption
 */
export const Flood: Story = {
  args: {
    item: {
      id: "flood",
      title: "Flood",
      riskCategory: "Natural",
      daysAffected: 0.9,
      riskPercentage: 9.8,
      probability: 5.6,
    },
  },
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Tornado risk - shorter duration disruption
 */
export const Tornado: Story = {
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
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Hurricane/Cyclone risk - high impact event
 */
export const HurricaneCyclone: Story = {
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
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Tsunami risk - coastal specific event
 */
export const Tsunami: Story = {
  args: {
    item: {
      id: "tsunami",
      title: "Tsunami",
      riskCategory: "Natural",
      daysAffected: 0.8,
      riskPercentage: 7.4,
      probability: 2.65,
    },
  },
  render: (args) => (
    <div className="max-w-[500px]">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Full width layout - demonstrates responsive behavior
 */
export const FullWidth: Story = {
  args: {
    item: {
      id: "earthquake",
      title: "Earthquake",
      riskCategory: "Natural",
      daysAffected: 0.6,
      riskPercentage: 8.9,
      probability: 3.1,
    },
  },
  render: (args) => (
    <div className="w-full">
      <RiskDetailPanel {...args} />
    </div>
  ),
}

/**
 * Side by side comparison - multiple panels for comparison view
 */
export const SideBySideComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <RiskDetailPanel
        item={{
          id: "earthquake",
          title: "Earthquake",
          riskCategory: "Natural",
          daysAffected: 0.6,
          riskPercentage: 8.9,
          probability: 3.1,
        }}
      />
      <RiskDetailPanel
        item={{
          id: "flood",
          title: "Flood",
          riskCategory: "Natural",
          daysAffected: 0.9,
          riskPercentage: 9.8,
          probability: 5.6,
        }}
      />
    </div>
  ),
}
