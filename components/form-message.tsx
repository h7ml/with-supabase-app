export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  if (!message || (Object.keys(message).length === 0)) {
    return null;
  }
  
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm mt-4 transition-all duration-300">
      {"success" in message && (
        <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-md px-4 py-3 text-foreground shadow-tech-sm">
          <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">操作成功</p>
            <p className="mt-1 text-foreground/80">{message.success}</p>
          </div>
        </div>
      )}
      {"error" in message && (
        <div className="flex items-start gap-2 bg-destructive/5 border border-destructive/20 rounded-md px-4 py-3 text-foreground shadow-tech-sm">
          <div className="min-w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">操作失败</p>
            <p className="mt-1 text-foreground/80">{message.error}</p>
          </div>
        </div>
      )}
      {"message" in message && (
        <div className="flex items-start gap-2 bg-background border border-border rounded-md px-4 py-3 text-foreground shadow-tech-sm">
          <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">提示信息</p>
            <p className="mt-1 text-foreground/80">{message.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
