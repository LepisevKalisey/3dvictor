import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.webp" 
          alt="3D печать в Алматы" 
          fill 
          priority
          className="object-cover"
        />
      </div>
      
      {/* Темный оверлей для лучшего контраста */}
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
      
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">3D-печать в Алматы</span>
            <span className="block text-primary mt-2">от идеи до детали уже завтра</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto leading-relaxed">
            Фиксируем цену до старта. Инженерная проверка, SLA по срокам, доставка по городу.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold px-8 py-3 text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a 
                href="https://wa.me/77000000000?text=Здравствуйте!%20Нужна%203D-печать%20в%20Алматы.%20Задача:%20{кратко}.%20Размер:%20{примерно}.%20Материал:%20{если%20знаете}.%20Нужны%20фикс-смета%20и%20срок." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                💬 Написать в WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-base md:text-lg transition-all duration-200 hover:scale-105"
            >
              <a href="#lead-form">
                📊 Получить быстрый расчёт
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-border text-sm md:text-base px-4 py-2">
              ⚡ Сроки от 24 ч
            </Badge>
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-border text-sm md:text-base px-4 py-2">
              🔒 NDA по умолчанию
            </Badge>
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-border text-sm md:text-base px-4 py-2">
              ✅ Инженерная проверка
            </Badge>
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-border text-sm md:text-base px-4 py-2">
              👥 Физ/юр лица
            </Badge>
          </div>
          
          <p className="text-base text-white font-medium">
            Мы ответим в WhatsApp и зафиксируем цену и срок
          </p>
        </div>
      </div>
    </section>
  )
}