"use client"

import Link from 'next/link'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Search } from '@/components/dashboard/search'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isDashboardActive = pathname === '/dashboard' || pathname === '/dashboard/'
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-tech-glow animate-pulse-tech" />
      
      <div className="container flex h-14 items-center max-w-full px-4">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <div className="w-7 h-7 rounded bg-tech-gradient flex items-center justify-center shadow-tech-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <span className="font-bold bg-clip-text text-transparent bg-tech-gradient">游戏运营平台</span>
          </Link>
          
          {/* 导航链接 */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/dashboard" 
              className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 flex items-center gap-1.5 ${
                isDashboardActive 
                  ? 'bg-tech-gradient text-white shadow-tech-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
              <span>仪表盘</span>
              {isDashboardActive && (
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <nav className="flex items-center space-x-2">
            <div className="hidden md:flex items-center text-sm mr-2 border border-border/50 rounded-md px-2 py-1 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span id="tech-time">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            
            <ThemeSwitcher />
            
            <Button variant="outline" size="icon" className="border-border/50 shadow-tech-sm relative">
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-tech-indigo animate-pulse-tech" />
              <span className="sr-only">通知</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </Button>
            
            <Button variant="outline" size="icon" className="border-border/50 shadow-tech-sm">
              <span className="sr-only">用户设置</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

if (typeof document !== 'undefined') {
  setInterval(() => {
    const timeElement = document.getElementById('tech-time')
    if (timeElement) {
      timeElement.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  }, 60000)
} 
 