import { ImageWithFallback } from './figma/ImageWithFallback';
import reshetka1 from './images/reshetka1.jpg';
import reshetka2 from './images/reshetka2.jpg';
import reshetka3 from './images/reshetka3.jpg';
import reshetka4 from './images/reshetka4.jpg';

export function Gallery() {
  const images = [
    {
      url: reshetka1,
      alt: 'Решетки на окна - пример 1'
    },
    {
      url: reshetka2,
      alt: 'Решетки на окна - пример 2'
    },
    {
      url: reshetka3,
      alt: 'Решетки на окна - пример 3'
    },
    {
      url: reshetka4,
      alt: 'Решетки на окна - пример 4'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Примеры наших работ
          </h2>
          <p className="text-gray-600 text-lg">
            Более 2000 установленных решеток по всему Алматы и области
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition group">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
