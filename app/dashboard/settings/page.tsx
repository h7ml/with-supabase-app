import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileForm } from "@/components/dashboard/settings/profile-form"
import { SecurityForm } from "@/components/dashboard/settings/security-form"

export const metadata = {
  title: "设置 | 游戏运营平台",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">设置</h2>
      </div>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="profile">个人资料</TabsTrigger>
          <TabsTrigger value="security">安全设置</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-8">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="security" className="mt-8">
          <SecurityForm />
        </TabsContent>
      </Tabs>
    </div>
  )
} 
