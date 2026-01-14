"use client"

import { memo } from "react"
import { Area, CartesianGrid, ComposedChart, Line, ReferenceLine, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { AXIS_LABELS, CHART_COLORS, CHART_CONFIG, CHART_MARGIN, CHART_STYLES, DENSITY_CHART_CONFIG } from "../constants"
import type { DisruptionChartProps } from "../types"
import { formatDensityValue, formatYAxisTick } from "../utils"

export const DisruptionChart = memo(function DisruptionChart({
  data,
  safetyStockDays,
  meanDisruptionDays,
}: DisruptionChartProps) {
  return (
    <ChartContainer config={DENSITY_CHART_CONFIG} className="h-[300px] w-full">
      <ComposedChart data={data} margin={CHART_MARGIN}>
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="days"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          type="number"
          domain={[0, CHART_CONFIG.X_DOMAIN_MAX]}
          ticks={[...CHART_CONFIG.X_AXIS_TICKS]}
          label={{
            value: AXIS_LABELS.X_AXIS,
            position: "insideBottom",
            offset: -15,
            className: "fill-muted-foreground text-xs",
          }}
        />

        <YAxis
          tickLine={true}
          axisLine={false}
          tickMargin={8}
          ticks={[...CHART_CONFIG.Y_AXIS_TICKS]}
          domain={[0, CHART_CONFIG.Y_DOMAIN_MAX]}
          tickFormatter={formatYAxisTick}
          width={CHART_CONFIG.Y_AXIS_WIDTH}
          label={{
            value: AXIS_LABELS.Y_AXIS,
            angle: -90,
            position: "insideLeft",
            offset: -10,
            dy: 45,
            className: "fill-muted-foreground text-xs",
          }}
        />

        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={() => "PDF Curve"}
              formatter={(value) => [formatDensityValue(value as number), "Density"]}
            />
          }
        />

        {/* Area fill - only renders after safety stock threshold */}
        <Area
          dataKey="areaDensity"
          type="linear"
          fill={CHART_COLORS.AREA_FILL}
          fillOpacity={CHART_STYLES.AREA_FILL_OPACITY}
          stroke="none"
          connectNulls={false}
          tooltipType="none"
        />

        {/* PDF curve line - visible across entire chart */}
        <Line
          dataKey="density"
          type="linear"
          stroke={CHART_COLORS.PDF_CURVE}
          strokeWidth={CHART_STYLES.LINE_STROKE_WIDTH}
          dot={false}
        />

        {/* Safety stock reference line - dashed */}
        <ReferenceLine
          x={safetyStockDays}
          stroke={CHART_COLORS.SAFETY_STOCK}
          strokeWidth={CHART_STYLES.REFERENCE_LINE_STROKE_WIDTH}
          strokeDasharray={CHART_STYLES.REFERENCE_LINE_DASH_ARRAY}
          ifOverflow="extendDomain"
        />

        {/* Mean disruption reference line - solid */}
        <ReferenceLine
          x={meanDisruptionDays}
          stroke={CHART_COLORS.MEAN_DISRUPTION}
          strokeWidth={CHART_STYLES.REFERENCE_LINE_STROKE_WIDTH}
          ifOverflow="extendDomain"
        />
      </ComposedChart>
    </ChartContainer>
  )
})
