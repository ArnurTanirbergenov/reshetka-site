import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <div className="text-red-600">Безопасные Решетки</div>
          <div className="text-gray-600 text-sm">Аварийный выход при ЧС</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <div className="text-gray-600 text-sm">Ежедневно 9:00 - 19:00</div>
            <a href="tel:+77003030111" className="text-red-600 hover:text-red-700">
              +7 700 303 0111
            </a>
          </div>
          <a
            href="tel:+77003030111"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Позвонить</span>
          </a>
        </div>
      </div>
    </header>
  );
}
