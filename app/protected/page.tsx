import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon, ShieldIcon, ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { TechCard } from "@/components/ui/tech-card";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-5xl mx-auto py-6">
      <TechCard
        className="mb-2"
        icon={<InfoIcon size={18} className="text-white" />}
        title="受保护区域"
        subtitle="这是一个受保护的页面，只有经过身份验证的用户才能看到"
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldIcon size={14} className="text-primary" />
            <span>安全访问区域</span>
          </div>
          <div className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
            用户ID: {user.id.slice(0, 8)}...
          </div>
        </div>
      </TechCard>

      <TechCard
        title="您的用户信息"
        subtitle="您当前登录账户的详细信息"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      >
        <div className="flex flex-col gap-4">
          {/* 用户信息概览 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground">邮箱</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground">最后登录</p>
              <p className="font-medium">{new Date(user.last_sign_in_at || '').toLocaleString()}</p>
            </div>
          </div>
          
          {/* 详细信息 */}
          <div className="relative">
            <div className="absolute -left-2 top-3 bottom-3 w-[3px] bg-primary/20 rounded-full overflow-hidden">
              <div className="w-full h-1/2 bg-primary/50 animate-pulse-slow"></div>
            </div>
            <pre className="text-xs font-mono p-4 pl-6 rounded bg-muted/30 border border-border/40 max-h-48 overflow-auto shadow-tech-inner">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>
      </TechCard>

      <TechCard
        title="接下来的步骤"
        subtitle="完成下面的步骤来构建您的应用程序"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        }
      >
        <div className="p-2">
          <FetchDataSteps />
        </div>
      </TechCard>
    </div>
  );
}
