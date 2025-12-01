import { Shield, Wrench, Paintbrush, Award, Clock, Ruler } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Качественный металл',
      description: 'Используем только сертифицированную сталь повышенной прочности'
    },
    {
      icon: Wrench,
      title: 'Усиленная сварка',
      description: 'Профессиональная сварка всех соединений, заводское качество'
    },
    {
      icon: Paintbrush,
      title: 'Качественная покраска',
      description: 'Порошковая покраска, устойчивая к коррозии и погодным условиям'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: '5 лет гарантии на конструкцию и механизм открывания'
    },
    {
      icon: Clock,
      title: 'Быстрая установка',
      description: 'Монтаж за 1 день, минимум грязи и неудобств'
    },
    {
      icon: Ruler,
      title: 'Любые размеры',
      description: 'Изготовим решетки по вашим индивидуальным размерам'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Мы гарантируем заводское качество изготовления и профессиональную установку
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <Icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
