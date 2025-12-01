import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';
import reshetka2 from './images/reshetka2.jpg';
export function Solution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={reshetka2}
              alt="Открывающиеся решетки"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-gray-900 mb-6">
              Наши решетки <span className="text-red-600">спасают жизни</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Инновационная система открывания позволяет быстро распахнуть решетку изнутри за 3-5 секунд. При этом с улицы проникнуть невозможно — полная защита от злоумышленников.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Быстрое открывание изнутри</div>
                  <div className="text-gray-600">Распахивается за секунды специальным механизмом</div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Полная защита снаружи</div>
                  <div className="text-gray-600">Невозможно открыть с улицы, надежный замок</div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Прочная конструкция</div>
                  <div className="text-gray-600">Выдерживает экстремальные нагрузки</div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Эстетичный вид</div>
                  <div className="text-gray-600">Аккуратный дизайн, не портит фасад здания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
