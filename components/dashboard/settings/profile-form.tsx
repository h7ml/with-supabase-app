"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { profileFormSchema } from "@/lib/validations/forms"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
    },
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)

    try {
      // TODO: 调用 API 保存数据
      console.log(data)
      toast({
        title: "个人资料已更新",
        description: "您的个人资料信息已成功保存。",
      })
    } catch (error) {
      toast({
        title: "发生错误",
        description: "无法保存个人资料信息，请稍后再试。",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">个人资料</h3>
        <p className="text-sm text-muted-foreground">
          更新您的个人资料信息
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input placeholder="输入用户名" {...field} />
                </FormControl>
                <FormDescription>
                  这是您在平台上显示的名称。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>邮箱地址</FormLabel>
                <FormControl>
                  <Input placeholder="输入邮箱地址" {...field} />
                </FormControl>
                <FormDescription>
                  您的邮箱地址用于登录和接收通知。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>个人简介</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="介绍一下自己..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  向其他团队成员简单介绍一下自己。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "保存中..." : "保存更改"}
          </Button>
        </form>
      </Form>
    </div>
  )
} 
 