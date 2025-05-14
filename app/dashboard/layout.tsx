import { ReactNode } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 添加科技风格背景 */}
      <div className="fixed inset-0 -z-10 tech-grid-bg opacity-30 pointer-events-none" />
      
      {/* 添加辉光效果 */}
      <div className="fixed top-[20%] right-[10%] w-64 h-64 rounded-full bg-tech-radial opacity-30 blur-3xl pointer-events-none" />
      <div className="fixed bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-tech-radial opacity-20 blur-3xl pointer-events-none" />
      
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          {/* 内容卡片包装 */}
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 shadow-tech-sm tech-card">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 
