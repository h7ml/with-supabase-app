"use client"

import { useEffect } from "react"
import { DonutChart } from '@tremor/react'
import { LoadingCard } from "@/components/ui/loading"
import { useUsersStore } from "@/lib/store/users"

export function UserDistribution() {
  const { distribution, loading, fetchDistribution } = useUsersStore()

  useEffect(() => {
    fetchDistribution()
  }, [fetchDistribution])

  if (loading) {
    return <LoadingCard />
  }

  const valueFormatter = (number: number) => `${number}%`

  return (
    <div className="h-[300px]">
      <DonutChart
        data={distribution}
        category="value"
        index="name"
        valueFormatter={valueFormatter}
        colors={["indigo", "violet", "fuchsia", "rose", "pink", "sky"]}
      />
    </div>
  )
} 
 