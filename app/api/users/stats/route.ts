import { NextResponse } from "next/server"

export async function GET() {
  // TODO: 从数据库获取实际数据
  const stats = {
    totalUsers: "1,234,567",
    activeUsers: "876,543",
    payRate: "5.4%",
    newUsers: "23,456"
  }

  return NextResponse.json(stats)
} 
