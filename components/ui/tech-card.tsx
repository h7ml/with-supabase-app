"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface TechCardProps {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  icon?: React.ReactNode
}

export function TechCard({ 
  children, 
  className,
  title,
  subtitle,
  icon 
}: TechCardProps) {
  return (
    <div className="relative w-full">
      {/* 背景装饰 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-radial opacity-40 blur-xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tech-radial opacity-30 blur-xl rounded-full pointer-events-none" />
      
      {/* 主卡片 */}
      <div 
        className={cn(
          "relative backdrop-blur-sm bg-background/80 border border-border/50 rounded-lg p-6 shadow-tech-md z-10 overflow-hidden tech-card",
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
        
        {/* 标题区域（如果提供） */}
        {(title || subtitle) && (
          <div className="mb-4 pb-4 border-b border-border/30">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="w-8 h-8 rounded bg-tech-gradient flex items-center justify-center shadow-tech-sm">
                  {icon}
                </div>
              )}
              <div>
                {title && <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-tech-gradient">{title}</h3>}
                {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
              </div>
            </div>
          </div>
        )}
        
        {/* 主要内容 */}
        {children}
      </div>
    </div>
  )
} 
