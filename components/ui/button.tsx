import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // 默认：背景为主色，文字为前景色，悬停时背景为主色/90
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", // 破坏性：背景为破坏色，文字为破坏前景色，悬停时背景为破坏色/90
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // 轮廓：有边框，背景为背景色，悬停时背景为强调色，文字为强调前景色
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", // 次要：背景为次要色，文字为次要前景色，悬停时背景为次要色/80
        ghost: "hover:bg-accent hover:text-accent-foreground", // 幽灵：悬停时背景为强调色，文字为强调前景色
        link: "text-primary underline-offset-4 hover:underline", // 链接：文字为主色，下划线偏移4，悬停时显示下划线
      },
      size: {
        default: "h-10 px-4 py-2", // 默认：高度10，水平内边距4，垂直内边距2
        sm: "h-9 rounded-md px-3", // 小：高度9，圆角中等，水平内边距3
        lg: "h-11 rounded-md px-8", // 大：高度11，圆角中等，水平内边距8
        icon: "h-10 w-10", // 图标：高度10，宽度10
      },
    },
    defaultVariants: {
      variant: "default", // 默认变体：默认
      size: "default", // 默认尺寸：默认
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // 是否作为子组件
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // 如果是子组件则使用Slot，否则使用button
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button"; // 按钮的显示名称为“Button”

export { Button, buttonVariants };