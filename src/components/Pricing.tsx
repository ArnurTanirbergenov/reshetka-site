import { Check, TrendingDown } from 'lucide-react';

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Цены и условия
          </h2>
          <p className="text-gray-600 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="text-gray-600 mb-2">Стандартный размер</div>
              <div className="text-gray-900 mb-2">
                <span className="text-red-600">94 000</span> ₸
              </div>
              <div className="text-gray-600 text-sm">
                Размер: 2м × 1.5м (высота × ширина)
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Качественный металл</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Усиленная сварка</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Порошковая покраска</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Установка включена</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Бесплатная доставка по Алматы</span>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Заказать 1 решетку
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg shadow-2xl border-2 border-red-500 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              <span>Выгодно</span>
            </div>
            <div className="mb-6 text-white">
              <div className="mb-2">При заказе 2+ окон</div>
              <div className="mb-2">
                <span className="line-through opacity-75">94 000 ₸</span>
              </div>
              <div className="mb-2">
                <span>от 79 900</span> ₸
              </div>
              <div className="text-sm opacity-90">
                Скидка до 15%
              </div>
            </div>
            <div className="space-y-3 mb-8 text-white">
              <div className="flex gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Все преимущества стандартного пакета</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Скидка до 15% на каждую решетку</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Приоритетная установка</span>
              </div>
              <div className="flex gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Дополнительные подарки</span>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="w-full bg-white text-red-600 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Заказать со скидкой
            </button>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-gray-900 mb-4">Дополнительные условия</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <Check className="w-5 h-5 text-blue-600 inline mr-2" />
                Индивидуальные размеры — расчет по запросу
              </div>
              <div>
                <Check className="w-5 h-5 text-blue-600 inline mr-2" />
                Бесплатная доставка по Алматы
              </div>
              <div>
                <Check className="w-5 h-5 text-blue-600 inline mr-2" />
                Выезд в область — оплачивается отдельно
              </div>
              <div>
                <Check className="w-5 h-5 text-blue-600 inline mr-2" />
                Гарантия 5 лет на всю конструкцию
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
