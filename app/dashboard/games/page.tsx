import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GamesList } from '@/components/dashboard/games/games-list'
import { GameStats } from '@/components/dashboard/games/game-stats'

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">游戏数据</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <GameStats />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>游戏列表</CardTitle>
        </CardHeader>
        <CardContent>
          <GamesList />
        </CardContent>
      </Card>
    </div>
  )
} 