"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoadingCard } from "@/components/ui/loading"
import { gameFormSchema } from "@/lib/validations/forms"
import { Game, useGamesStore } from "@/lib/store/games"

type GameFormValues = z.infer<typeof gameFormSchema>

interface GameFormProps {
  gameId?: string // 如果是编辑，则传入游戏ID；如果是新建，则不传
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GameForm({ gameId, open, onOpenChange }: GameFormProps) {
  const { games, loading, error, addGame, updateGame } = useGamesStore()
  const [isSaving, setIsSaving] = useState(false)
  
  // 如果是编辑，找到对应游戏
  const gameToEdit = gameId ? games.find(g => g.id === gameId) : undefined
  
  // 表单默认值
  const defaultValues: Partial<GameFormValues> = {
    name: gameToEdit?.name || "",
    category: gameToEdit?.category || "",
    status: gameToEdit?.status || "active",
  }
  
  const form = useForm<GameFormValues>({
    resolver: zodResolver(gameFormSchema),
    defaultValues,
  })
  
  async function onSubmit(data: GameFormValues) {
    setIsSaving(true)
    
    try {
      if (gameId && gameToEdit) {
        // 更新游戏
        await updateGame(gameId, {
          ...gameToEdit,
          name: data.name,
          category: data.category,
          status: data.status,
        })
      } else {
        // 创建新游戏
        const newGame: Game = {
          id: `new-${Date.now()}`, // 实际项目中应由后端生成
          name: data.name,
          category: data.category,
          status: data.status,
          revenue: "¥0",
          users: "0",
        }
        await addGame(newGame)
      }
      
      // 关闭对话框
      onOpenChange(false)
    } catch (err) {
      console.error("保存游戏信息失败:", err)
    } finally {
      setIsSaving(false)
    }
  }
  
  if (loading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{gameId ? "编辑游戏" : "添加游戏"}</DialogTitle>
          </DialogHeader>
          <LoadingCard />
        </DialogContent>
      </Dialog>
    )
  }
  
  // 如果是编辑但找不到游戏
  if (gameId && !gameToEdit) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>编辑游戏</DialogTitle>
          </DialogHeader>
          <div className="p-4 text-red-500">未找到游戏信息</div>
        </DialogContent>
      </Dialog>
    )
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{gameId ? "编辑游戏" : "添加游戏"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>游戏名称</FormLabel>
                  <FormControl>
                    <Input placeholder="输入游戏名称" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>游戏类型</FormLabel>
                  <FormControl>
                    <Input placeholder="输入游戏类型，如MOBA、RPG等" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>游戏状态</FormLabel>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    {...field}
                  >
                    <option value="active">运营中</option>
                    <option value="maintenance">维护中</option>
                    <option value="development">开发中</option>
                  </select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "保存中..." : "保存"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 
