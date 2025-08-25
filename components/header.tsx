import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            3D Victor
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-text/80 hover:text-text transition-colors">
            Преимущества
          </Link>
          <Link href="/#faq" className="text-text/80 hover:text-text transition-colors">
            Вопросы
          </Link>
          <Link href="/#lead-form" className="text-text/80 hover:text-text transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex">
            <a href="tel:+77785612123">+7 778 561 21 23</a>
          </Button>
          <Button asChild size="sm">
            <a href="https://wa.me/77785612123?text=Здравствуйте!%20Нужна%203D-печать%20в%20Алматы.%20Задача:%20{кратко}.%20Размер:%20{примерно}.%20Материал:%20{если%20знаете}.%20Нужны%20фикс-смета%20и%20срок." target="_blank" rel="noopener noreferrer">
              Написать в WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}