import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen, waitFor } from "@testing-library/react"
import type { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { RiskDetailPanel } from "./RiskDetailPanel"

// Mock ResizeObserver for recharts
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock

// Mock data
const mockRiskData = {
  earthquake: {
    id: "earthquake",
    title: "Earthquake",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.002 },
      { days: 50, density: 0.018 },
      { days: 100, density: 0.015 },
      { days: 175, density: 0.001 },
    ],
    markers: { safetyStockDays: 32, meanDisruptionDays: 68 },
    stats: { probability: "2.7%", mean: "32.3d", p90: "73.3d", mttr: "41.6d" },
  },
  wildfire: {
    id: "wildfire",
    title: "Wildfire",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.003 },
      { days: 50, density: 0.02 },
      { days: 100, density: 0.01 },
      { days: 175, density: 0.001 },
    ],
    markers: { safetyStockDays: 28, meanDisruptionDays: 52 },
    stats: { probability: "4.2%", mean: "28.5d", p90: "65.2d", mttr: "38.1d" },
  },
  flood: {
    id: "flood",
    title: "Flood",
    riskCategory: "Natural",
    chartData: [
      { days: 0, density: 0.001 },
      { days: 50, density: 0.012 },
      { days: 100, density: 0.025 },
      { days: 175, density: 0.004 },
    ],
    markers: { safetyStockDays: 45, meanDisruptionDays: 89 },
    stats: { probability: "5.6%", mean: "45.2d", p90: "98.5d", mttr: "52.3d" },
  },
}

// Mock the use-risks hook
vi.mock("@/lib/hooks/use-risks", () => ({
  useRiskDetail: vi.fn((id: string | null) => {
    const data = id ? mockRiskData[id as keyof typeof mockRiskData] : null
    return {
      data,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    }
  }),
  riskKeys: {
    all: ["risks"],
    lists: () => ["risks", "list"],
    list: () => ["risks", "list"],
    details: () => ["risks", "detail"],
    detail: (id: string) => ["risks", "detail", id],
  },
}))

// Create a wrapper with QueryClientProvider
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
}

function renderWithClient(ui: ReactNode) {
  const testQueryClient = createTestQueryClient()
  return render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>)
}

describe("RiskDetailPanel", () => {
  const mockItem = {
    id: "earthquake",
    title: "Earthquake",
    riskCategory: "Natural",
    daysAffected: 0.6,
    riskPercentage: 8.9,
    probability: 3.1,
  }

  describe("Header", () => {
    it("renders the disruption exposure label", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("Disruption exposure")).toBeInTheDocument()
      })
    })

    it("renders the title as h2", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Disruption exposure")
      })
    })

    it("uses semantic header element", async () => {
      const { container } = renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(container.querySelector("header")).toBeInTheDocument()
      })
    })
  })

  describe("Statistics Grid", () => {
    it("renders all stat cards after loading", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("Probability")).toBeInTheDocument()
        expect(screen.getByText("Mean")).toBeInTheDocument()
        expect(screen.getByText("P90")).toBeInTheDocument()
        expect(screen.getByText("MTTR")).toBeInTheDocument()
      })
    })

    it("renders earthquake stats values", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("2.7%")).toBeInTheDocument()
        expect(screen.getByText("32.3d")).toBeInTheDocument()
        expect(screen.getByText("73.3d")).toBeInTheDocument()
        expect(screen.getByText("41.6d")).toBeInTheDocument()
      })
    })
  })

  describe("Chart", () => {
    it("renders the chart container after loading", async () => {
      const { container } = renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        const chart = container.querySelector('[data-slot="chart"]')
        expect(chart).toBeInTheDocument()
      })
    })
  })

  describe("Legend", () => {
    it("renders PDF curve legend item", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("PDF curve")).toBeInTheDocument()
      })
    })

    it("renders safety stock legend item with correct days", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("Safety stock (32d)")).toBeInTheDocument()
      })
    })

    it("renders mean disruption legend item with correct days", async () => {
      renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(screen.getByText("Mean disruption time (68d)")).toBeInTheDocument()
      })
    })
  })

  describe("Different Risk Types", () => {
    it("renders Wildfire risk with different stats", async () => {
      const wildfireItem = { ...mockItem, id: "wildfire", title: "Wildfire" }
      renderWithClient(<RiskDetailPanel item={wildfireItem} />)
      await waitFor(() => {
        expect(screen.getByText("4.2%")).toBeInTheDocument()
        expect(screen.getByText("28.5d")).toBeInTheDocument()
      })
    })

    it("renders Flood risk with different stats", async () => {
      const floodItem = { ...mockItem, id: "flood", title: "Flood" }
      renderWithClient(<RiskDetailPanel item={floodItem} />)
      await waitFor(() => {
        expect(screen.getByText("5.6%")).toBeInTheDocument()
        expect(screen.getByText("45.2d")).toBeInTheDocument()
      })
    })
  })

  describe("Styling", () => {
    it("has flex column layout", async () => {
      const { container } = renderWithClient(<RiskDetailPanel item={mockItem} />)
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("flex")
        expect(container.firstChild).toHaveClass("flex-col")
      })
    })
  })
})
