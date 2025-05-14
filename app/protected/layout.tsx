import { ReactNode } from 'react'
import { Header } from '@/components/dashboard/header'

interface ProtectedLayoutProps {
  children: ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 添加科技风格背景 */}
      <div className="fixed inset-0 -z-10 tech-grid-bg-dots opacity-30 pointer-events-none" />
      
      {/* 添加辉光效果 */}
      <div className="fixed top-[20%] right-[10%] w-64 h-64 rounded-full bg-tech-radial opacity-30 blur-3xl pointer-events-none" />
      <div className="fixed bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-tech-radial opacity-20 blur-3xl pointer-events-none" />
      
      <Header />
      <main className="p-4 md:p-6 min-h-[calc(100vh-3.5rem)]">
        {children}
      </main>
    </div>
  )
} 
