"use client"

import React, { useState } from "react"
import { TechInput, TechInputProps } from "./tech-input"
import { cn } from "@/lib/utils"

interface PasswordInputProps extends Omit<TechInputProps, "type" | "icon"> {
  showStrengthMeter?: boolean
}

export function PasswordInput({
  className,
  showStrengthMeter = false,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false)
  const [password, setPassword] = useState("")
  
  // 密码强度计算
  const getStrength = (pass: string): number => {
    let score = 0
    
    // 长度检查
    if (pass.length > 5) score += 1
    if (pass.length > 8) score += 1
    
    // 复杂性检查
    if (/[A-Z]/.test(pass)) score += 1
    if (/[0-9]/.test(pass)) score += 1
    if (/[^A-Za-z0-9]/.test(pass)) score += 1
    
    return Math.min(score, 5) // 最高5分
  }
  
  const strength = getStrength(password)
  
  const getStrengthText = (score: number) => {
    if (score <= 1) return "非常弱"
    if (score === 2) return "弱"
    if (score === 3) return "中等"
    if (score === 4) return "强"
    return "非常强"
  }
  
  const getStrengthColor = (score: number) => {
    if (score <= 1) return "bg-destructive/50"
    if (score === 2) return "bg-amber-500/80"
    if (score === 3) return "bg-amber-400"
    if (score === 4) return "bg-green-400"
    return "bg-green-500"
  }
  
  // 显示/隐藏密码的图标
  const EyeIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5"
    >
      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  )
  
  const EyeSlashIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5"
    >
      <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
    </svg>
  )
  
  return (
    <div className="w-full">
      <div className="relative">
        <TechInput
          type={visible ? "text" : "password"}
          className={className}
          {...props}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            props.onChange?.(e)
          }}
        />
        
        {/* 切换可见性按钮 */}
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setVisible(prev => !prev)}
          tabIndex={-1}
        >
          {visible ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
      </div>
      
      {/* 密码强度指示器 */}
      {showStrengthMeter && password && (
        <div className="mt-2 space-y-1">
          <div className="h-1 flex gap-1 transition-all duration-200">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={cn(
                  "h-full flex-1 rounded-full transition-all duration-200",
                  index <= strength 
                    ? getStrengthColor(strength)
                    : "bg-muted"
                )}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-right">
            强度：{getStrengthText(strength)}
          </p>
        </div>
      )}
    </div>
  )
} 
