import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SmtpMessage() {
  return (
    <div className="bg-background/80 px-5 py-4 border border-border/50 rounded-md shadow-tech-sm flex gap-4 backdrop-blur-sm">
      <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm text-foreground">
          <span className="font-medium">注意：</span> 电子邮件发送受到速率限制。启用自定义 SMTP 以提高速率限制。
        </div>
        <div>
          <Link
            href="https://supabase.com/docs/guides/auth/auth-smtp"
            target="_blank"
            className="text-primary hover:text-primary/80 flex items-center text-sm gap-1 transition-colors"
          >
            <span>了解更多</span>
            <ArrowUpRight size={14} className="opacity-70" />
          </Link>
        </div>
      </div>
    </div>
  );
}
