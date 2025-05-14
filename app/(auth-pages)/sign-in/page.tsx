import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { AuthCard } from "@/components/auth/auth-card";
import { TechInput } from "@/components/auth/tech-input";
import { TechLabel } from "@/components/auth/tech-label";
import { PasswordInput } from "@/components/auth/password-input";
import { TechSubmitButton } from "@/components/auth/tech-submit-button";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="space-y-2 text-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-tech-gradient">登录账户</h1>
          <p className="text-sm text-muted-foreground">
            请输入您的登录凭证进入系统
          </p>
        </div>
        
        <form className="flex flex-col space-y-6" action={signInAction}>
          <div className="space-y-4">
            {/* 邮箱输入框 */}
            <div className="space-y-2">
              <TechLabel htmlFor="email" icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              }>
                电子邮件
              </TechLabel>
              <TechInput
                name="email"
                id="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>
            
            {/* 密码输入框 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <TechLabel htmlFor="password" icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                }>
                  密码
                </TechLabel>
                <Link
                  className="text-xs text-primary hover:text-primary/90 hover:underline transition-colors"
                  href="/forgot-password"
                >
                  忘记密码？
                </Link>
              </div>
              <PasswordInput
                name="password"
                id="password"
                placeholder="您的密码"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <TechSubmitButton 
              pendingText="正在登录..." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                </svg>
              }
            >
              登录系统
            </TechSubmitButton>
            
            <p className="text-center text-sm">
              还没有账户？{" "}
              <Link className="text-primary hover:text-primary/90 hover:underline transition-colors font-medium" href="/sign-up">
                立即注册
              </Link>
            </p>
          </div>
          
          <FormMessage message={searchParams} />
        </form>
      </div>
    </AuthCard>
  );
}
