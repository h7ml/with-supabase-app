import { Suspense } from 'react'
import { Overview } from '@/components/dashboard/overview'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { StatsCards } from '@/components/dashboard/stats-cards'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">仪表盘</h2>
      </div>
      <Suspense fallback={<div>加载中...</div>}>
        <StatsCards />
      </Suspense>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <div className="flex h-full flex-col gap-8">
            <Suspense fallback={<div>加载中...</div>}>
              <Overview />
            </Suspense>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex h-full flex-col gap-8">
            <Suspense fallback={<div>加载中...</div>}>
              <RecentActivity />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 
