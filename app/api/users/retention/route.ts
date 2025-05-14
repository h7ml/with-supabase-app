import { NextResponse } from "next/server"

export async function GET() {
  // TODO: 从数据库获取实际数据
  const retention = [
    { day: "第1天", retention: 100 },
    { day: "第2天", retention: 75 },
    { day: "第3天", retention: 68 },
    { day: "第4天", retention: 62 },
    { day: "第5天", retention: 55 },
    { day: "第6天", retention: 47 },
    { day: "第7天", retention: 41 },
    { day: "第14天", retention: 36 },
    { day: "第30天", retention: 29 },
  ]

  return NextResponse.json(retention)
} 
