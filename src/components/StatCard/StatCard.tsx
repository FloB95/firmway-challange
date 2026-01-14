import { cn } from "@/lib/utils"

export interface StatCardProps {
  label: string
  value: string
  className?: string
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  )
}
