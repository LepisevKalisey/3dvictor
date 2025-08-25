import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">3D Victor</h3>
            <p className="text-text/70">
              Быстрая и надёжная 3D-печать в Алматы с инженерной проверкой и доставкой по городу.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <p className="text-text/70 mb-2">Алматы. Самовывоз или доставка по городу.</p>
            <p className="text-text/70 mb-2">Пн–Сб, 10:00–19:00 (Asia/Almaty)</p>
            <p className="text-text/70">
              <a href="tel:+77000000000" className="hover:text-accent">+7 700 000 00 00</a>
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-text/70">
              <li>
                <Link href="/policy" className="hover:text-accent">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <a href="https://wa.me/77000000000" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-text/50 text-sm">
          © {new Date().getFullYear()} 3D Victor. Все права защищены.
        </div>
      </div>
    </footer>
  )
}