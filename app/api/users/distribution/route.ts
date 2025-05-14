import { NextResponse } from "next/server"

export async function GET() {
  // TODO: 从数据库获取实际数据
  const distribution = [
    { name: "18-24岁", value: 30 },
    { name: "25-34岁", value: 40 },
    { name: "35-44岁", value: 15 },
    { name: "45-54岁", value: 10 },
    { name: "55岁以上", value: 5 }
  ]

  return NextResponse.json(distribution)
} 
