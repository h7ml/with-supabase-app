import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RevenueStats } from '@/components/dashboard/revenue/revenue-stats'
import { RevenueChart } from '@/components/dashboard/revenue/revenue-chart'
import { RevenueTable } from '@/components/dashboard/revenue/revenue-table'

export default function RevenuePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">收入报表</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <RevenueStats />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>收入趋势</CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>收入明细</CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueTable />
        </CardContent>
      </Card>
    </div>
  )
} 
