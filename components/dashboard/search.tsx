import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <div className="relative w-full">
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
        className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <Input
        type="search"
        placeholder="搜索..."
        className="w-full pl-8 bg-background/60 border-border/50 focus:border-primary/50 focus:shadow-tech-sm transition-all"
      />
    </div>
  )
} 
