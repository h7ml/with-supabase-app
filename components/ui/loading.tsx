export function Loading() {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex h-8 w-8 items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center rounded-lg border bg-card text-card-foreground shadow-sm">
      <LoadingSpinner />
    </div>
  )
} 
