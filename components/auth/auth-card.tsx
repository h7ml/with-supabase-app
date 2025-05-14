"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface AuthCardProps {
  children: React.ReactNode
  className?: string
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* 背景装饰 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-radial opacity-40 blur-xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tech-radial opacity-30 blur-xl rounded-full pointer-events-none" />
      
      {/* 主卡片 */}
      <div 
        className={cn(
          "relative backdrop-blur-sm bg-background/80 border border-border/50 rounded-lg p-8 shadow-tech-md z-10 overflow-hidden tech-card",
          className
        )}
      >
        {/* 顶部边框发光效果 */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-tech-glow animate-pulse-tech" />
        
        {/* 角落装饰元素 */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30 rounded-tr-lg" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30 rounded-bl-lg" />
        </div>
        
        {/* 主要内容 */}
        {children}
      </div>
    </div>
  )
} 
