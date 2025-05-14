"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const techLabelVariants = cva(
  "text-sm font-medium leading-none mb-2 flex items-center gap-1.5 text-foreground/80",
)

const TechLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof techLabelVariants> & {
      icon?: React.ReactNode
    }
>(({ className, icon, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(techLabelVariants(), className)}
    {...props}
  >
    {icon && (
      <span className="text-primary w-4 h-4 flex items-center justify-center">
        {icon}
      </span>
    )}
    <span className="relative">
      {props.children}
      {/* 装饰下划线 */}
      <span className="absolute -bottom-0.5 left-0 w-full max-w-[20px] h-[1px] bg-primary/40" />
    </span>
  </LabelPrimitive.Root>
))

TechLabel.displayName = "TechLabel"

export { TechLabel } 
