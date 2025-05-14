"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TechInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const TechInput = React.forwardRef<HTMLInputElement, TechInputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative group">
        {/* 输入前图标 */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-200">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm transition-all duration-200",
            "placeholder:text-muted-foreground/70",
            "focus:border-primary/50 focus:shadow-tech-sm focus:outline-none focus:ring-1 focus:ring-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "backdrop-blur-sm",
            icon ? "pl-10" : "pl-3",
            className
          )}
          ref={ref}
          {...props}
        />
        
        {/* 底部强调线 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-focus-within:w-[calc(100%-2px)] transition-all duration-300" />
      </div>
    )
  }
)
TechInput.displayName = "TechInput"

export { TechInput } 
