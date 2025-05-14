import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // 环境变量：Supabase 的公共 URL
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // 环境变量：Supabase 的匿名密钥
  );