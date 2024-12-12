import { Heart, ShoppingCart } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="hidden md:flex justify-between items-center max-w-full px-32 mx-auto py-2 text-sm text-white bg-[#292929] border-b">
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-500">Для бизнеса</a>
        <a href="#" className="hover:text-blue-500">Карьера в Авито</a>
        <a href="#" className="hover:text-blue-500">Помощь</a>
        <a href="#" className="hover:text-blue-500">Каталоги</a>
        <a href="#" className="hover:text-blue-500">Польза</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:text-blue-500">
          <Heart size={20} />
        </button>
        <button className="hover:text-blue-500">
          <ShoppingCart size={20} />
        </button>
        <button className="bg-[#00AAFF] text-white px-4 py-1.5 rounded hover:bg-[#0095e0]">
          Разместить объявление
        </button>
        <a href="#" className="hover:text-blue-500">Вход и регистрация</a>
      </div>
    </nav>
  );
}