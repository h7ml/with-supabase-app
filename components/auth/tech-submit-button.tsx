"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useFormStatus } from "react-dom"

interface TechSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pendingText?: string
  icon?: React.ReactNode
  hoverIcon?: React.ReactNode
}

export function TechSubmitButton({
  className,
  children,
  pendingText = "处理中...",
  icon,
  hoverIcon,
  ...props
}: TechSubmitButtonProps) {
  const { pending } = useFormStatus()
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <button
      type="submit"
      className={cn(
        "relative overflow-hidden group",
        "h-11 px-6 py-2 rounded-md font-medium text-sm",
        "bg-tech-gradient text-white border border-primary/20",
        "shadow-tech-sm hover:shadow-tech-md active:shadow-tech-sm",
        "transition-all duration-300 ease-out",
        "disabled:opacity-70 disabled:pointer-events-none",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-1",
        className
      )}
      disabled={pending || props.disabled}
      aria-disabled={pending || props.disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {/* 图标 */}
        {pending ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : isHovered && hoverIcon ? (
          <span className="w-4 h-4">{hoverIcon}</span>
        ) : icon ? (
          <span className="w-4 h-4">{icon}</span>
        ) : null}
        
        {/* 按钮文字 */}
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {pending ? pendingText : children}
        </span>
      </div>
      
      {/* 发光效果 - 鼠标悬停时 */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* 发光效果 - 持续动画 */}
      <div className="absolute -inset-[100%] top-1/2 bg-white/5 rotate-45 transform-gpu animate-[spin_5s_linear_infinite]" />
    </button>
  )
} 
