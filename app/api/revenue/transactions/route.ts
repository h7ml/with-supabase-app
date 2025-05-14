import { NextResponse } from "next/server"

export async function GET() {
  // TODO: 从数据库获取实际数据
  const transactions = [
    {
      id: "1",
      date: "2024-03-20T10:00:00Z",
      game: "王者荣耀",
      type: "充值",
      amount: "¥100",
      status: "success",
    },
    {
      id: "2",
      date: "2024-03-20T09:30:00Z",
      game: "和平精英",
      type: "购买道具",
      amount: "¥50",
      status: "success",
    },
    {
      id: "3",
      date: "2024-03-20T09:00:00Z",
      game: "原神",
      type: "充值",
      amount: "¥200",
      status: "success",
    },
    {
      id: "4",
      date: "2024-03-20T08:30:00Z",
      game: "阴阳师",
      type: "购买礼包",
      amount: "¥150",
      status: "success",
    },
  ]

  return NextResponse.json(transactions)
} 
