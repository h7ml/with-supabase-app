import { Suspense } from 'react'
import { Overview } from '@/components/dashboard/overview'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { Cpu, BarChart3, Activity } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-tech-gradient flex items-center justify-center shadow-tech-sm">
            <Cpu size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-tech-gradient">
              仪表盘
            </h1>
            <p className="text-sm text-muted-foreground">
              查看您的游戏运营数据和统计信息
            </p>
          </div>
        </div>

        {/* Tech status indicator */}
        <div className="hidden sm:flex items-center gap-2 text-sm bg-background/60 backdrop-blur-sm border border-border/50 rounded-full py-1 pl-2 pr-4 shadow-tech-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-30"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-muted-foreground">系统运行状态: <span className="text-foreground">正常</span></span>
        </div>
      </div>

      {/* 装饰性线条 */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50 mb-6"></div>

      <Suspense fallback={
        <div className="w-full py-12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
              <div className="absolute inset-1 rounded-full border-r border-border/30"></div>
            </div>
            <span className="text-sm text-muted-foreground">加载统计数据...</span>
          </div>
        </div>
      }>
        <StatsCards />
      </Suspense>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <div className="flex h-full flex-col gap-8">
            <div className="backdrop-blur-sm bg-background/70 border border-border/50 rounded-lg p-5 shadow-tech-sm tech-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-primary" />
                  <h3 className="font-medium">数据概览</h3>
                </div>
                <div className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                  最近 30 天
                </div>
              </div>
              <Suspense fallback={<div className="py-8 text-center text-sm text-muted-foreground">加载图表数据...</div>}>
                <Overview />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex h-full flex-col gap-8">
            <div className="backdrop-blur-sm bg-background/70 border border-border/50 rounded-lg p-5 shadow-tech-sm tech-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity size={18} className="text-primary" />
                  <h3 className="font-medium">近期活动</h3>
                </div>
                <div className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                  实时更新
                </div>
              </div>
              <Suspense fallback={<div className="py-8 text-center text-sm text-muted-foreground">加载活动数据...</div>}>
                <RecentActivity />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
