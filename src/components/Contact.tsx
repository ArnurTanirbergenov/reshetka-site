import { useState } from 'react';
import { Phone, Clock, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    windows: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь была бы отправка данных
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Закажите бесплатную консультацию
          </h2>
          <p className="text-gray-600 text-lg">
            Оставьте заявку, и мы перезвоним вам в течение 15 минут
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="+7 ___ ___ __ __"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Количество окон
                </label>
                <select
                  name="windows"
                  value={formData.windows}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="1">1 окно</option>
                  <option value="2">2 окна (скидка 10%)</option>
                  <option value="3">3 окна (скидка 12%)</option>
                  <option value="4+">4+ окна (скидка 15%)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Комментарий (необязательно)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Укажите адрес, желаемое время звонка или другие пожелания"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Отправить заявку
              </button>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  ✓ Спасибо! Мы перезвоним вам в ближайшее время.
                </div>
              )}
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Телефон</div>
                  <a href="tel:+77003030111" className="text-gray-900 text-xl hover:text-red-600">
                    +7 700 303 0111
                  </a>
                  <div className="text-gray-600 text-sm mt-1">
                    Звоните, мы всегда на связи
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">График работы</div>
                  <div className="text-gray-900">
                    Ежедневно с 9:00 до 19:00
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    Без выходных и праздников
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Зона обслуживания</div>
                  <div className="text-gray-900">
                    Алматы и Алматинская область
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    Бесплатный выезд по городу
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-gray-900 mb-3">
                🎁 Специальное предложение
              </h3>
              <p className="text-gray-700">
                При заказе в течение 3 дней после консультации — дополнительная скидка 5% и ускоренное изготовление!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
