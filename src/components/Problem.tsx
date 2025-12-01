import { Flame, Building2, AlertTriangle } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Обычные решетки — это <span className="text-red-500">смертельная ловушка</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Статистика показывает: во время пожаров и землетрясений люди не могут выбраться из дома через окна из-за обычных решеток
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg border border-red-900">
            <Flame className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="mb-3">Пожар</h3>
            <p className="text-gray-300">
              При пожаре у вас есть 2-3 минуты для эвакуации. Обычные решетки не дают выбраться через окно, отрезая единственный путь спасения.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-red-900">
            <Building2 className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="mb-3">Землетрясение</h3>
            <p className="text-gray-300">
              Двери заклинивает, лестницы разрушаются. Окно становится единственным выходом, но решетки не открываются.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-red-900">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="mb-3">Другие ЧС</h3>
            <p className="text-gray-300">
              Утечка газа, взрыв, обрушение — в критической ситуации каждая секунда на счету. Решетки не должны мешать спасению.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
