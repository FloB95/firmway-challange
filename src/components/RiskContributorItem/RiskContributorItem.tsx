import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export interface RiskItem {
  id: string
  title: string
  riskCategory: string
  daysAffected: number
  riskPercentage: number
  probability: number
}

export interface RiskContributorItemProps {
  item: RiskItem
  totalDays?: number
  isSelected?: boolean
  onClick?: () => void
}

export function RiskContributorItem({ item, totalDays = 365, isSelected = false, onClick }: RiskContributorItemProps) {
  const progressValue = item.probability

  return (
    <Item
      variant="outline"
      className={cn("hover:bg-accent/50 cursor-pointer transition-colors", isSelected && "border-primary bg-accent/30")}
      onClick={onClick}
      data-testid="risk-item"
    >
      <ItemContent className="gap-[8px]">
        <ItemTitle>{item.title}</ItemTitle>
        <div>
          <div className="flex items-center gap-3">
            <p>{item.riskCategory}</p>
            <div className="h-[4px] w-[4px] rounded-full bg-gray-400"></div>
            <p>{item.riskPercentage}% of total</p>
          </div>
        </div>
      </ItemContent>
      <ItemActions>
        <div className="flex flex-col gap-2">
          <p>
            {item.daysAffected} days affected of {totalDays} days
          </p>
          <Progress value={progressValue} />
          <p>{item.probability}% probability</p>
        </div>
      </ItemActions>
    </Item>
  )
}
