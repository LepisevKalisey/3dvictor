import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import FaqSection from '@/components/faq-section'
import LeadForm from '@/components/lead-form'
import WhatsappButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <section className="py-16 bg-card/50">
        <div className="container">
          <p className="text-xl text-center max-w-3xl mx-auto">
            Надоели плавающие цены, срывы сроков и хрупкие детали? Мы фиксируем цену заранее, берём на себя срок и перепечатываем, если ошибка на нашей стороне.
          </p>
        </div>
      </section>
      
      <FeaturesSection />
      <FaqSection />
      <LeadForm />
      <WhatsappButton />
    </>
  )
}