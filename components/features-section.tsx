import { CheckCircle, Users, Palette, GraduationCap, Home } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <h2 className="text-center mb-12">Для кого наш сервис</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg">
            <Users className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Инженеры и стартапы</h3>
            <p className="text-text/70">Быстрые прототипы по назначению.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <Palette className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Дизайнеры и архитекторы</h3>
            <p className="text-text/70">Чистая поверхность, финиш по запросу.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <GraduationCap className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Студенты</h3>
            <p className="text-text/70">Доступные материалы, сдача в срок.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <Home className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Быт и подарки</h3>
            <p className="text-text/70">Кронштейны, держатели, кастом-аксессуары без ожидания с Ali.</p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">Как мы работаем</h2>
          
          <div className="bg-card p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 text-accent font-bold rounded-full w-8 h-8 flex items-center justify-center">1</div>
                  <h3 className="font-bold">Заявка</h3>
                </div>
                <p className="text-text/70 pl-11">Файл или описание.</p>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 text-accent font-bold rounded-full w-8 h-8 flex items-center justify-center">2</div>
                  <h3 className="font-bold">Фикс-смета и срок</h3>
                </div>
                <p className="text-text/70 pl-11">После проверки.</p>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 text-accent font-bold rounded-full w-8 h-8 flex items-center justify-center">3</div>
                  <h3 className="font-bold">Печать и доставка</h3>
                </div>
                <p className="text-text/70 pl-11">Или самовывоз.</p>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
              <p className="text-accent font-medium">SLA: Если мы опоздаем по нашей вине — перепечатаем или дадим скидку 20%.</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg mb-12">
            <h3 className="font-bold text-xl mb-6">Примерные цены</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-border/30">
                <span>Держатель телефона / мелкая деталь</span>
                <span className="font-bold">от 3500 ₸</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/30">
                <span>Детализированный макет / функциональный прототип</span>
                <span className="font-bold">от 12 000 ₸</span>
              </div>
            </div>
            
            <p className="text-text/70 text-sm">
              Итог зависит от материала, размера и финиша — фиксируем до старта.
            </p>
          </div>
          
          <h2 className="text-center mb-8">Наши гарантии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg flex gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Фикс-смета до печати</h3>
                <p className="text-text/70 text-sm">Без скрытых доплат.</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg flex gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Инженерная проверка</h3>
                <p className="text-text/70 text-sm">Ориентация, поддержки, допуски.</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg flex gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Гарантия перепечати</h3>
                <p className="text-text/70 text-sm">Если ошибка на нашей стороне.</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg flex gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">NDA по умолчанию</h3>
                <p className="text-text/70 text-sm">Конфиденциальность ваших файлов.</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg flex gap-4 md:col-span-2">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Доставка по Алматы</h3>
                <p className="text-text/70 text-sm">Безопасная упаковка.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}