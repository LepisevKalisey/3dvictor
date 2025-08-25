import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  message: z.string().optional(),
  policy: z.literal(true, {
    errorMap: () => ({ message: 'Необходимо согласие с политикой конфиденциальности' }),
  }),
})

export const runtime = 'edge'; // Добавляем поддержку Edge Runtime для лучшей производительности на Vercel

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из запроса
    const body = await request.json()
    
    // Валидируем данные
    const result = formSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { message: 'Ошибка валидации данных', errors: result.error.format() },
        { status: 400 }
      )
    }
    
    const { name, phone, message } = result.data
    
    // В реальном проекте здесь будет отправка данных в Telegram и по email
    console.log('Получена новая заявка:', { name, phone, message })
    
    // Имитация задержки сервера (уменьшаем для Vercel)
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ошибка при обработке заявки:', error)
    return NextResponse.json(
      { message: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}