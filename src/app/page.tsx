"use client"

import { useState } from "react"

import type { RiskItem } from "@/components/RiskContributorItem"
import { RiskContributorsList } from "@/components/RiskContributorsList"
import { RiskDetailPanel } from "@/components/RiskDetailPanel"
import { useRiskList } from "@/lib/hooks/use-risks"

export default function Web() {
  const { data: risks, isLoading, error } = useRiskList()
  const [selectedItem, setSelectedItem] = useState<RiskItem | null>(null)

  // Set initial selection when data loads
  const displayedItem = selectedItem ?? risks?.[0] ?? null

  if (isLoading) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Florian Onboarding Challenge
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <p className="text-muted-foreground">Loading risks...</p>
        </div>
      </section>
    )
  }

  if (error || !risks) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Florian Onboarding Challenge
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <p className="text-destructive">Failed to load risks</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Florian Onboarding Challenge
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-6 px-4">
        <RiskContributorsList
          title="Top risk contributors"
          items={risks}
          height="400px"
          selectedItem={displayedItem}
          onSelectItem={setSelectedItem}
        />
        {displayedItem && (
          <div className="w-full max-w-[600px]">
            <RiskDetailPanel item={displayedItem} />
          </div>
        )}
      </div>
    </section>
  )
}
