"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@tremor/react"
import { Loading } from "@/components/ui/loading"
import { useRevenueStore } from "@/lib/store/revenue"

export function Overview() {
  const { transactions, loading, error, fetchTransactions } = useRevenueStore()

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>收入概览</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 flex items-center justify-center text-red-500">
            加载失败: {error}
          </div>
        </CardContent>
      </Card>
    )
  }

  // 如果没有数据，显示空状态
  if (!transactions || transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>收入概览</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            暂无收入数据
          </div>
        </CardContent>
      </Card>
    )
  }

  // 处理数据以适应图表格式
  const chartData = transactions.reduce((acc, transaction) => {
    try {
      const date = new Date(transaction.date)
      // 检查日期是否有效
      if (isNaN(date.getTime())) {
        console.warn(`跳过无效日期: ${transaction.date}`)
        return acc
      }
      
      const formattedDate = date.toLocaleDateString('zh-CN', { month: 'short', year: '2-digit' })
      // 处理可能的金额格式问题
      let amount = 0
      if (typeof transaction.amount === 'string') {
        // 移除货币符号和逗号
        amount = parseFloat(transaction.amount.replace(/[¥,]/g, ''))
      } else if (typeof transaction.amount === 'number') {
        amount = transaction.amount
      }
      
      // 检查金额是否是有效数字
      if (isNaN(amount)) {
        console.warn(`跳过无效金额: ${transaction.amount}`)
        return acc
      }
      
      const existingData = acc.find(item => item.date === formattedDate)
      if (existingData) {
        existingData.Revenue += amount
      } else {
        acc.push({ date: formattedDate, Revenue: amount })
      }
    } catch (err) {
      console.error("处理交易数据出错:", err)
    }
    return acc
  }, [] as { date: string; Revenue: number }[])

  // 按日期排序
  chartData.sort((a, b) => {
    // 将月份转换为数字进行比较（例如："3月22" -> 3）
    const getMonth = (date: string) => {
      const monthMatch = date.match(/(\d+)月/)
      return monthMatch ? parseInt(monthMatch[1]) : 0
    }
    // 将年份转换为数字进行比较（例如："3月22" -> 22）
    const getYear = (date: string) => {
      const yearMatch = date.match(/月(\d+)/)
      return yearMatch ? parseInt(yearMatch[1]) : 0
    }
    
    const yearA = getYear(a.date)
    const yearB = getYear(b.date)
    if (yearA !== yearB) return yearA - yearB
    
    const monthA = getMonth(a.date)
    const monthB = getMonth(b.date)
    return monthA - monthB
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>收入概览</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <AreaChart
            className="h-72 mt-4"
            data={chartData}
            index="date"
            categories={["Revenue"]}
            colors={["indigo"]}
            valueFormatter={(number) => `¥${Intl.NumberFormat("zh-CN").format(number)}`}
          />
        ) : (
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            数据处理后没有有效的图表数据
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
 