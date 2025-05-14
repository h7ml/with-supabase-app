import * as z from 'zod'

export const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: '用户名至少需要2个字符' })
    .max(30, { message: '用户名不能超过30个字符' }),
  email: z
    .string()
    .email({ message: '请输入有效的邮箱地址' }),
  bio: z
    .string()
    .max(500, { message: '个人简介不能超过500个字符' })
    .optional(),
})

export const securityFormSchema = z.object({
  current_password: z
    .string()
    .min(1, { message: '请输入当前密码' }),
  new_password: z
    .string()
    .min(8, { message: '密码至少需要8个字符' })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, {
      message: '密码必须包含字母和数字',
    }),
  two_factor: z.boolean().default(false),
})

export const gameFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '游戏名称至少需要2个字符' })
    .max(50, { message: '游戏名称不能超过50个字符' }),
  category: z
    .string()
    .min(1, { message: '请选择游戏类型' }),
  status: z.enum(['active', 'maintenance', 'development'], {
    required_error: '请选择游戏状态',
  }),
}) 
