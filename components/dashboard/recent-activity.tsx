"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    id: "1",
    type: "游戏上线",
    game: "幻想世界",
    time: "2小时前",
    description: "新游戏《幻想世界》成功上线",
  },
  {
    id: "2",
    type: "系统维护",
    game: "王者荣耀",
    time: "4小时前",
    description: "系统例行维护完成",
  },
  {
    id: "3",
    type: "收入里程碑",
    game: "和平精英",
    time: "6小时前",
    description: "月收入突破1000万",
  },
  {
    id: "4",
    type: "用户里程碑",
    game: "原神",
    time: "12小时前",
    description: "日活跃用户突破100万",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>最近动态</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="rounded-full bg-secondary p-2">
                <div className="h-2 w-2 rounded-full bg-secondary-foreground" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.game}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 
 