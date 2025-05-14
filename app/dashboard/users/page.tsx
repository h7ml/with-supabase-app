import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserStats } from "@/components/dashboard/users/user-stats"
import { UserRetention } from "@/components/dashboard/users/user-retention"
import { UserDistribution } from "@/components/dashboard/users/user-distribution"

export const metadata = {
  title: "用户分析 | 游戏运营平台",
}

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">用户分析</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UserStats />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>用户留存</CardTitle>
          </CardHeader>
          <CardContent>
            <UserRetention />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>用户分布</CardTitle>
          </CardHeader>
          <CardContent>
            <UserDistribution />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
