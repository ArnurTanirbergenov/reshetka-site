import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Айгуль К.',
      location: 'Алматы, мкр. Аксай',
      rating: 5,
      text: 'Очень довольна! Мастера приехали вовремя, установили быстро и аккуратно. Показали, как открывать решетки изнутри — очень просто. Теперь спокойна за безопасность детей.',
      date: 'Ноябрь 2024'
    },
    {
      name: 'Ержан М.',
      location: 'Алматы, Бостандыкский р-н',
      rating: 5,
      text: 'Заказал решетки на все окна квартиры. Получил хорошую скидку. Качество отличное, сварка аккуратная, покраска ровная. Подарки тоже порадовали. Рекомендую!',
      date: 'Октябрь 2024'
    },
    {
      name: 'Гульнара С.',
      location: 'Алматинская область',
      rating: 5,
      text: 'Живем в частном доме, очень переживали за безопасность. После землетрясения решили установить именно открывающиеся решетки. Сделали быстро, выезд в область был недорогим. Спасибо!',
      date: 'Сентябрь 2024'
    },
    {
      name: 'Максим В.',
      location: 'Алматы, Медеуский р-н',
      rating: 5,
      text: 'Профессиональная работа! Приехали на замер, сделали точный расчет, изготовили за неделю. Установка заняла 4 часа на 3 окна. Все чисто, качественно. Очень доволен.',
      date: 'Ноябрь 2024'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-600 text-lg">
            Более 2000 довольных клиентов по всему Алматы
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-red-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
                <div className="text-gray-500 text-sm">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
