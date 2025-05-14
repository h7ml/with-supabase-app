import { NextResponse } from "next/server"

export async function GET() {
  // TODO: 从数据库获取实际数据
  const stats = {
    totalRevenue: "¥1,234,567",
    monthlyRevenue: "¥123,456",
    paidUsers: "12,345",
    arpu: "¥100.82"
  }

  return NextResponse.json(stats)
} 
