<a href="https://nextjs-with-supabase.h7ml.cn">
  <img alt="Next.js 和 Supabase 入门套件 - 使用 Next.js 和 Supabase 构建应用的最快方式" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js 和 Supabase 入门套件</h1>
</a>

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app/network/members)
[![GitHub issues](https://img.shields.io/github/issues/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app/issues)
[![GitHub license](https://img.shields.io/github/license/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app/commits/main)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

[![Visitors](https://visitor-badge.laobi.icu/badge?page_id=h7ml.with-supabase-app)](https://github.com/h7ml/with-supabase-app)
[![Lines of code](https://img.shields.io/tokei/lines/github/h7ml/with-supabase-app)](https://github.com/h7ml/with-supabase-app)

</div>

<p align="center">
 使用 Next.js 和 Supabase 构建应用的最快方式
</p>

<p align="center">
  <a href="#features"><strong>功能特性</strong></a> ·
  <a href="#demo"><strong>演示</strong></a> ·
  <a href="#deploy-to-vercel"><strong>部署到 Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>克隆并本地运行</strong></a> ·
  <a href="#feedback-and-issues"><strong>反馈和问题</strong></a> ·
  <a href="#more-supabase-examples"><strong>更多示例</strong></a>
</p>
<br/>

## 功能特性

- 适用于整个 [Next.js](https://nextjs.org) 技术栈
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - 一切都能正常运行！
- supabase-ssr。一个用于配置 Supabase Auth 使用 cookie 的包
- 使用 [Tailwind CSS](https://tailwindcss.com) 进行样式设计
- 使用 [shadcn/ui](https://ui.shadcn.com/) 提供的组件
- 可选的 [Supabase Vercel 集成和 Vercel 部署](#deploy-your-own)
  - 环境变量会自动分配到 Vercel 项目

## 演示

您可以在 [nextjs-with-supabase.h7ml.cn](https://nextjs-with-supabase.h7ml.cn) 查看一个完整运行的演示。

## 部署到 Vercel

Vercel 部署将引导您创建 Supabase 账户和项目。

安装 Supabase 集成后，所有相关的环境变量都将被分配到项目中，因此部署将完全正常运行。

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fh7ml%2Fwith-supabase-app&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fnextjs-with-supabase.h7ml.cn&external-id=https%3A%2F%2Fgithub.com%2Fh7ml%2Fwith-supabase-app&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png)

上述操作还会将入门套件克隆到您的 GitHub 中，您可以将其克隆到本地并在本地进行开发。

如果您只想在本地开发而不想部署到 Vercel，请[按照以下步骤操作](#clone-and-run-locally)。

## 克隆并本地运行

1. 您首先需要一个 Supabase 项目，可以通过 [Supabase 仪表板](https://database.new) 创建

2. 克隆项目到本地

   ```bash
   git clone https://github.com/h7ml/with-supabase-app.git
   ```

3. 使用 `cd` 命令进入应用目录

   ```bash
   cd with-supabase-app
   ```

4. 安装依赖

   ```bash
   pnpm install
   ```

5. 将 `.env.example` 重命名为 `.env.local`，并更新以下内容：

   ```
   NEXT_PUBLIC_SUPABASE_URL=[插入 Supabase 项目 URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[插入 Supabase 项目 API 匿名密钥]
   ```

   `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 都可以在 [您的 Supabase 项目的 API 设置](https://app.supabase.com/project/_/settings/api) 中找到

6. 现在您可以运行 Next.js 本地开发服务器：

   ```bash
   pnpm dev
   ```

   入门套件现在应该在 [localhost:3000](http://localhost:3000/) 上运行。

7. 该模板默认初始化了 shadcn/ui 样式。如果您想要其他 ui.shadcn 样式，请删除 `components.json` 并[重新安装 shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> 查看[本地开发文档](https://supabase.com/docs/guides/getting-started/local-development)，也可以在本地运行 Supabase。

## 反馈和问题

请在 [GitHub Issues](https://github.com/h7ml/with-supabase-app/issues) 上提交反馈和问题。

## 更多 Supabase 示例

- [Next.js 订阅支付入门](https://github.com/vercel/nextjs-subscription-payments)
- [基于 Cookie 的身份验证与 Next.js 13 App Router（免费课程）](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth 与 Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
