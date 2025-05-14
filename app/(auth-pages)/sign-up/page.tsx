import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { AuthCard } from "@/components/auth/auth-card";
import { TechInput } from "@/components/auth/tech-input";
import { TechLabel } from "@/components/auth/tech-label";
import { PasswordInput } from "@/components/auth/password-input";
import { TechSubmitButton } from "@/components/auth/tech-submit-button";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <AuthCard>
        <div className="space-y-6">
          <div className="space-y-2 text-center mb-6">
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-tech-gradient">创建账户</h1>
            <p className="text-sm text-muted-foreground">
              输入您的信息以注册新账户
            </p>
          </div>
          
          <form className="flex flex-col space-y-6" action={signUpAction}>
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
                <TechLabel htmlFor="password" icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                }>
                  密码
                </TechLabel>
                <PasswordInput
                  name="password"
                  id="password"
                  placeholder="创建强密码"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  showStrengthMeter
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <TechSubmitButton 
                pendingText="正在注册..." 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                }
                hoverIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                  </svg>
                }
              >
                创建账户
              </TechSubmitButton>
              
              <p className="text-center text-sm">
                已有账户？{" "}
                <Link className="text-primary hover:text-primary/90 hover:underline transition-colors font-medium" href="/sign-in">
                  立即登录
                </Link>
              </p>
            </div>
            
            <FormMessage message={searchParams} />
          </form>
        </div>
      </AuthCard>
      <div className="mt-6 max-w-md mx-auto">
        <SmtpMessage />
      </div>
    </>
  );
}
