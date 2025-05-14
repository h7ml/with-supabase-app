"use client"

import { useEffect } from "react"
import { BarChart } from "@tremor/react"
import { LoadingCard } from "@/components/ui/loading"
import { useUsersStore } from "@/lib/store/users"

export function UserRetention() {
  const { retention, loading, fetchRetention } = useUsersStore()

  useEffect(() => {
    fetchRetention()
  }, [fetchRetention])

  if (loading) {
    return <LoadingCard />
  }

  const valueFormatter = (number: number) => `${number}%`

  return (
    <div className="h-[300px]">
      <BarChart
        data={retention}
        index="day"
        categories={["retention"]}
        colors={["indigo"]}
        valueFormatter={valueFormatter}
      />
    </div>
  )
} 
 