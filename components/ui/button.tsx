import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"

    const variantClasses = {
      default: "bg-accent hover:bg-accent/90 text-white",
      outline: "border-primary text-primary hover:bg-primary hover:text-white border-2"
    }

    if (asChild && props.children) {
      return <>{props.children}</>
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          className
        )}
        ref={ref as any}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
