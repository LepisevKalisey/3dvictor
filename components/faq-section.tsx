import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-card/50">
      <div className="container">
        <h2 className="text-center mb-12">Часто задаваемые вопросы</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Нет 3D-файла?</AccordionTrigger>
              <AccordionContent>
                Опишите идею и габариты, подскажем быстрый путь. Простые правки — часто бесплатно при печати у нас.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Как быстро печатаете?</AccordionTrigger>
              <AccordionContent>
                Многие заказы — за 24 ч при свободных слотах. Срок подтверждаем до старта.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Какие материалы?</AccordionTrigger>
              <AccordionContent>
                PLA/PETG/ABS для функционала, Resin — для высокой детализации. Посоветуем по задаче.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Оплата?</AccordionTrigger>
              <AccordionContent>
                Kaspi/карта для физлиц, счёт для юрлиц. Сумму подтверждаем заранее.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Конфиденциальность?</AccordionTrigger>
              <AccordionContent>
                Да. NDA по умолчанию; ничего не публикуем без вашего согласия.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}