import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Спасибо за заявку | 3D-печать в Алматы',
  description: 'Ваша заявка на 3D-печать в Алматы принята',
}

export default function ThanksPage() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-4">Спасибо — ваша заявка принята!</h1>
        <p className="text-xl mb-8">
          Скоро подтвердим фикс-цену и срок в WhatsApp или по телефону.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5C] text-white">
            <a href="https://wa.me/77000000000?text=Здравствуйте!%20Нужна%203D-печать%20в%20Алматы.%20Задача:%20{кратко}.%20Размер:%20{примерно}.%20Материал:%20{если%20знаете}.%20Нужны%20фикс-смета%20и%20срок." target="_blank" rel="noopener noreferrer">
              Открыть WhatsApp
            </a>
          </Button>
          
          <Button asChild variant="outline">
            <Link href="/">
              На главную
            </Link>
          </Button>
        </div>
        
        <p className="text-text/70">
          Если забыли детали — напишите их в WhatsApp, так расчёт будет быстрее.
        </p>
      </div>
    </div>
  )
}