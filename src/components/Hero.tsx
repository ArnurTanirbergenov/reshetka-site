import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, ArrowRight } from 'lucide-react';
import reshetka1 from './images/reshetka1.jpg';
export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span>Защита и безопасность</span>
            </div>
            <h1 className="text-gray-900 mb-6">
              Решетки на окна с функцией<br />
              <span className="text-red-600">аварийного выхода</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Спасите жизнь себе и близким при пожаре или землетрясении, когда выход через дверь невозможен. Наши решетки открываются изнутри за секунды!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                Заказать консультацию
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+77003030111"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition text-center"
              >
                Позвонить сейчас
              </a>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <div>
                <div className="text-red-600">2000+</div>
                <div>Довольных клиентов</div>
              </div>
              <div>
                <div className="text-red-600">5 лет</div>
                <div>Гарантии</div>
              </div>
              <div>
                <div className="text-red-600">24 часа</div>
                <div>Установка</div>
              </div>
            </div>
          </div>
            <div className="relative">
            <ImageWithFallback
              src={reshetka1}
              alt="Решетки на окна"
              className="rounded-lg shadow-2xl w-full"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
