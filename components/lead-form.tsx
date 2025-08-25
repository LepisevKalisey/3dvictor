'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  message: z.string().optional(),
  policy: z.literal(true, {
    errorMap: () => ({ message: 'Необходимо согласие с политикой конфиденциальности' }),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
      policy: false,
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Ошибка при отправке формы')
      }

      // Успешная отправка
      reset()
      window.location.href = '/thanks'
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Произошла ошибка при отправке формы')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-16 bg-card">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Оставьте заявку на 3D-печать</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Ваше имя <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              placeholder="Введите ваше имя"
              {...register('name')}
              error={errors.name?.message}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Телефон <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              placeholder="+7 (___) ___-__-__"
              {...register('phone')}
              error={errors.phone?.message}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Сообщение
            </label>
            <Textarea
              id="message"
              placeholder="Опишите ваш проект или задайте вопрос"
              {...register('message')}
              error={errors.message?.message}
            />
          </div>
          
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="policy"
              className="mt-1"
              {...register('policy')}
            />
            <div>
              <label htmlFor="policy" className="block font-medium">
                Я согласен с <Link href="/policy" className="text-primary hover:underline">политикой конфиденциальности</Link> <span className="text-destructive">*</span>
              </label>
              {errors.policy && (
                <p className="text-sm text-destructive mt-1">{errors.policy.message}</p>
              )}
            </div>
          </div>
          
          {submitError && (
            <div className="p-3 bg-destructive/10 border border-destructive rounded-md text-destructive">
              {submitError}
            </div>
          )}
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
          
          <p className="text-sm text-text/70 text-center">
            Мы свяжемся с вами в WhatsApp в течение 2 часов в рабочее время (9:00-18:00)
          </p>
        </form>
      </div>
    </section>
  )
}