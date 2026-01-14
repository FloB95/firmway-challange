import { RiskContributorItem, type RiskItem } from "@/components/RiskContributorItem"
import { ScrollArea } from "@/components/ui/scroll-area"

export interface RiskContributorsListProps {
  title: string
  items: RiskItem[]
  height?: string
  totalDays?: number
  selectedItem?: RiskItem | null
  onSelectItem?: (item: RiskItem) => void
}

export function RiskContributorsList({
  title,
  items,
  height = "500px",
  totalDays = 365,
  selectedItem,
  onSelectItem,
}: RiskContributorsListProps) {
  return (
    <div className="flex w-full max-w-[600px] flex-col gap-5">
      <h2 className="ml-4 leading-4 font-semibold">{title}</h2>
      <ScrollArea className={`h-[${height}]`} style={{ height }}>
        <div className="flex flex-col gap-[16px] px-4">
          {items.map((item) => (
            <RiskContributorItem
              key={item.id}
              item={item}
              totalDays={totalDays}
              isSelected={selectedItem?.id === item.id}
              onClick={() => onSelectItem?.(item)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
