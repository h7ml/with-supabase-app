"use client"

import { AreaChart } from '@tremor/react'

const data = [
  {
    date: '1月',
    revenue: 123456,
    profit: 45678,
  },
  {
    date: '2月',
    revenue: 234567,
    profit: 56789,
  },
  {
    date: '3月',
    revenue: 345678,
    profit: 67890,
  },
  {
    date: '4月',
    revenue: 456789,
    profit: 78901,
  },
  {
    date: '5月',
    revenue: 567890,
    profit: 89012,
  },
  {
    date: '6月',
    revenue: 678901,
    profit: 90123,
  },
]

export function RevenueChart() {
  return (
    <div className="h-[400px]">
      <AreaChart
        data={data}
        index="date"
        categories={["revenue", "profit"]}
        colors={["indigo", "fuchsia"]}
        valueFormatter={(value: number) => `¥${value.toLocaleString()}`}
        yAxisWidth={80}
      />
    </div>
  )
} 
