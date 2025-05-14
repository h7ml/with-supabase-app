"use client"

import { useToast } from "./use-toast"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Toaster() {
  const { toasts, dismiss } = useToast()
  
  if (!toasts.length) return null
  
  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-md w-full">
      {toasts.map((toast) => (
        <Toast 
          key={toast.id} 
          id={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onDismiss={() => dismiss(toast.id)}
        />
      ))}
    </div>
  )
}

interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
  onDismiss: () => void
}

function Toast({ title, description, variant = "default", onDismiss }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // 延迟一点以获得淡入效果
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div
      className={cn(
        "bg-background border p-4 rounded-lg shadow-lg transition-opacity duration-300 relative",
        variant === "destructive" && "border-destructive",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex justify-between items-start">
        {title && <div className="font-medium">{title}</div>}
        <button onClick={onDismiss} className="h-5 w-5 text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      {description && <div className="text-sm text-muted-foreground mt-1">{description}</div>}
    </div>
  )
} 
