'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

const faqItems = [
  {
    question: 'Какие материалы вы используете для 3D-печати?',
    answer: 'Мы используем качественные PLA, PETG, ABS, TPU и другие материалы от проверенных производителей. Выбор материала зависит от требований к изделию: прочность, гибкость, термостойкость и т.д.'
  },
  {
    question: 'Сколько времени занимает 3D-печать?',
    answer: 'Время печати зависит от размера, сложности и детализации модели. Небольшие простые модели могут быть готовы за несколько часов, сложные крупные изделия могут печататься до нескольких дней.'
  },
  {
    question: 'Нужна ли мне своя 3D-модель или вы можете создать её?',
    answer: 'Вы можете предоставить готовую 3D-модель или мы можем создать её для вас по вашим эскизам, фотографиям или описанию за дополнительную плату.'
  },
  {
    question: 'Какого максимального размера деталь вы можете напечатать?',
    answer: 'Максимальный размер печати на наших принтерах составляет 300x300x400 мм. Более крупные изделия мы можем напечатать по частям с последующей сборкой.'
  },
  {
    question: 'Как оплатить заказ?',
    answer: 'Мы принимаем оплату наличными при получении, банковским переводом или через популярные платежные системы. Для крупных заказов может потребоваться предоплата.'
  }
]

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
        
        <Accordion className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} className="border rounded-lg p-2 bg-card">
              <AccordionTrigger 
                className="text-left font-semibold px-4"
                onClick={() => toggleItem(index)}
                open={openItems[index]}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent open={openItems[index]}>
                <div className="px-4 text-text/80">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}