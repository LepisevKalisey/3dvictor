'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <a
      href="https://wa.me/77000000000?text=Здравствуйте!%20Нужна%203D-печать%20в%20Алматы.%20Задача:%20{кратко}.%20Размер:%20{примерно}.%20Материал:%20{если%20знаете}.%20Нужны%20фикс-смета%20и%20срок."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}