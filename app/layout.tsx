import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js 和 Supabase 入门套件",
  description: "使用 Next.js 和 Supabase 构建应用的最快方式",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 tech-grid-bg" />
          <div className="fixed inset-0 -z-10 bg-tech-radial opacity-30" />
          
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 backdrop-blur-sm bg-background/80">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md bg-tech-gradient flex items-center justify-center shadow-tech-md animate-pulse-tech">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                        </svg>
                      </div>
                      <span className="bg-clip-text text-transparent bg-tech-gradient font-bold">
                        Next.js Supabase 入门套件
                      </span>
                    </Link>
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              
              <div className="flex flex-col gap-20 w-full max-w-5xl px-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 bg-background/80 backdrop-blur-sm">
                <p className="flex items-center gap-2">
                  <span>由</span>
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline inline-flex items-center"
                    rel="noreferrer"
                  >
                    <span className="bg-clip-text text-transparent bg-tech-gradient">Supabase</span>
                  </a>
                  <span>提供支持</span>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
