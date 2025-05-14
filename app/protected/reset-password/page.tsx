import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { TechCard } from "@/components/ui/tech-card";
import { TechSubmitButton } from "@/components/auth/tech-submit-button";
import { TechInput } from "@/components/auth/tech-input";
import { TechLabel } from "@/components/auth/tech-label";
import { PasswordInput } from "@/components/auth/password-input";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center max-w-5xl mx-auto py-6">
      <TechCard
        title="重置密码"
        subtitle="请在下方输入您的新密码"
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
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        }
        className="max-w-md mx-auto"
      >
        <form className="flex flex-col w-full gap-6 pt-2" action={resetPasswordAction}>
          <div className="space-y-4">
            {/* 新密码输入框 */}
            <div className="space-y-2">
              <TechLabel htmlFor="password" icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              }>
                新密码
              </TechLabel>
              <PasswordInput
                name="password"
                id="password"
                placeholder="输入新密码"
                required
                showStrengthMeter
              />
            </div>
            
            {/* 确认密码输入框 */}
            <div className="space-y-2">
              <TechLabel htmlFor="confirmPassword" icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              }>
                确认密码
              </TechLabel>
              <PasswordInput
                name="confirmPassword"
                id="confirmPassword"
                placeholder="再次输入密码"
                required
              />
            </div>
          </div>
          
          <TechSubmitButton
            pendingText="正在更新..."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
              </svg>
            }
          >
            更新密码
          </TechSubmitButton>
          
          <FormMessage message={searchParams} />
        </form>
      </TechCard>
    </div>
  );
}
