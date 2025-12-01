import { Shield, Phone, Clock } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-red-500" />
              <div>
                <div className="text-red-500">Безопасные Решетки</div>
                <div className="text-gray-400 text-sm">Аварийный выход при ЧС</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Защитите свою семью с помощью инновационных решеток, которые обеспечивают безопасность и возможность экстренной эвакуации.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+77003030111" className="hover:text-white">
                  +7 700 303 0111
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Ежедневно 9:00 - 19:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Преимущества</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Гарантия 5 лет</li>
              <li>✓ Бесплатная доставка по Алматы</li>
              <li>✓ Установка за 1 день</li>
              <li>✓ Подарки каждому клиенту</li>
              <li>✓ Скидки при заказе от 2 окон</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Безопасные Решетки. Все права защищены.
          </div>
          <button
            onClick={scrollToTop}
            className="text-red-500 hover:text-red-400 text-sm"
          >
            ↑ Наверх
          </button>
        </div>
      </div>
    </footer>
  );
}
