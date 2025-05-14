import Link from "next/link";
import { TutorialStep } from "./tutorial-step";
import { ArrowUpRight } from "lucide-react";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      {process.env.VERCEL_ENV === "preview" ||
      process.env.VERCEL_ENV === "production" ? (
        <TutorialStep title="设置重定向网址">
          <p>看起来这个应用程序托管在 Vercel 上。</p>
          <p className="mt-4">
            这个特定的部署是
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              "{process.env.VERCEL_ENV}"
            </span>{" "}
            在
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              https://{process.env.VERCEL_URL}
            </span>
            上。
          </p>
          <p className="mt-4">
            您需要{" "}
            <Link
              className="text-primary hover:text-foreground"
              href={
                "https://supabase.com/dashboard/project/_/auth/url-configuration"
              }
            >
              更新您的 Supabase 项目
            </Link>{" "}
            以基于您的 Vercel 部署网址设置重定向网址。
          </p>
          <ul className="mt-4">
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                http://localhost:3000/**
              </span>
            </li>
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/**`}
              </span>
            </li>
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(".vercel.app", "")}-*-[vercel-team-url].vercel.app/**`}
              </span>{" "}
              (Vercel 团队网址可以在{" "}
              <Link
                className="text-primary hover:text-foreground"
                href="https://vercel.com/docs/accounts/create-a-team#find-your-team-id"
                target="_blank"
              >
                Vercel 团队设置
              </Link>
              中找到)
            </li>
          </ul>
          <Link
            href="https://supabase.com/docs/guides/auth/redirect-urls#vercel-preview-urls"
            target="_blank"
            className="text-primary/50 hover:text-primary flex items-center text-sm gap-1 mt-4"
          >
            重定向网址文档 <ArrowUpRight size={14} />
          </Link>
        </TutorialStep>
      ) : null}
      <TutorialStep title="注册您的第一个用户">
        <p>
          前往{" "}
          <Link
            href="/sign-up"
            className="font-bold hover:underline text-foreground/80"
          >
            注册
          </Link>{" "}
          页面并注册您的第一个用户。现在只是您自己也没关系。您的绝妙想法以后会有很多用户！
        </p>
      </TutorialStep>
    </ol>
  );
}