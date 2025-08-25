import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/hero.webp" 
          alt="3D печать в Алматы" 
          fill 
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">
            3D-печать в Алматы — от идеи до детали уже завтра
          </h1>
          
          <p className="text-xl mb-8 text-text/90">
            Фиксируем цену до старта. Инженерная проверка, SLA по срокам, доставка по городу.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5C] text-white">
              <a href="https://wa.me/77000000000?text=Здравствуйте!%20Нужна%203D-печать%20в%20Алматы.%20Задача:%20{кратко}.%20Размер:%20{примерно}.%20Материал:%20{если%20знаете}.%20Нужны%20фикс-смета%20и%20срок." target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <a href="#lead-form">
                Получить быстрый расчёт
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-background/50 backdrop-blur">Сроки от 24 ч</Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur">NDA по умолчанию</Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur">Инженерная проверка</Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur">Физ/юр лица</Badge>
          </div>
          
          <p className="text-sm text-text/70">
            Мы ответим в WhatsApp и зафиксируем цену и срок.
          </p>
        </div>
      </div>
    </section>
  )
}