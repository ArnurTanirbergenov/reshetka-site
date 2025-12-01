import { Gift as GiftIcon, Lock, Sparkles } from 'lucide-react';

export function Gift() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <GiftIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-center text-gray-900 mb-4">
              Ценные подарки <span className="text-yellow-600">каждому клиенту!</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              При заказе решеток вы получаете полезные подарки совершенно бесплатно
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Качественный замок</h3>
                  <p className="text-gray-600">
                    Надежный замок с набором ключей для максимальной безопасности. Легко открывается изнутри, невозможно взломать снаружи.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Специальная щетка</h3>
                  <p className="text-gray-600">
                    Профессиональная щетка для мытья окон с решетками. Удобная ручка и качественные материалы для легкой уборки.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200 text-center">
              <p className="text-gray-700">
                🎁 Стоимость подарков: <span className="line-through">15 000 ₸</span> — <span className="text-yellow-700">для вас бесплатно!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
