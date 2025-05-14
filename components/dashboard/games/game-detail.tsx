"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Game, useGamesStore } from "@/lib/store/games"
import { LoadingCard } from "@/components/ui/loading"

interface GameDetailProps {
  gameId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GameDetail({ gameId, open, onOpenChange }: GameDetailProps) {
  const { games, loading, error } = useGamesStore()
  
  // 在实际项目中，这里应该调用API获取游戏详情
  // 目前使用本地状态中的游戏数据
  const game = games.find(g => g.id === gameId)
  
  if (loading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>游戏详情</DialogTitle>
          </DialogHeader>
          <LoadingCard />
        </DialogContent>
      </Dialog>
    )
  }
  
  if (!game) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>游戏详情</DialogTitle>
          </DialogHeader>
          <div className="p-4 text-red-500">未找到游戏信息</div>
        </DialogContent>
      </Dialog>
    )
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>游戏详情</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{game.name}</h2>
            <StatusBadge status={game.status} />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <DetailCard title="游戏ID" value={game.id} />
            <DetailCard title="类型" value={game.category} />
            <DetailCard title="收入" value={game.revenue} />
            <DetailCard title="用户数" value={game.users} />
          </div>
          
          <div>
            <h3 className="mb-2 font-semibold">额外信息</h3>
            <p className="text-sm text-gray-500">
              本游戏是我们平台的知名产品之一，拥有活跃的用户社区和持续的内容更新计划。
              游戏运营团队定期举办活动，提高用户参与度和收入。
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function StatusBadge({ status }: { status: Game["status"] }) {
  const statusMap = {
    active: { label: "运营中", className: "bg-green-500" },
    maintenance: { label: "维护中", className: "bg-yellow-500" },
    development: { label: "开发中", className: "bg-blue-500" }
  }
  
  const { label, className } = statusMap[status]
  
  return (
    <Badge className={className}>{label}</Badge>
  )
}

function DetailCard({ title, value }: { title: string, value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-sm font-medium text-gray-500">{title}</div>
        <div className="mt-1 text-lg font-semibold">{value}</div>
      </CardContent>
    </Card>
  )
} 
