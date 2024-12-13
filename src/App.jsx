import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, MapPin, ChevronDown, Menu, Truck } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top navigation */}
      <div className="bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-zinc-300">Для бизнеса</a>
              <a href="#" className="hover:text-zinc-300">Карьера в Авито</a>
              <a href="#" className="hover:text-zinc-300">Помощь</a>
              <div className="relative group">
                <button className="flex items-center hover:text-zinc-300">
                  Каталоги
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="hover:text-zinc-300">Польза</a>
            </nav>
            <div className="flex items-center space-x-4 ml-auto">
              <a href="#" className="hover:text-zinc-300">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-zinc-300">
                <ShoppingCart className="h-5 w-5" />
              </a>
              <a href="#" className="hidden md:block hover:text-zinc-300">
                Вход и регистрация
              </a>
              <a href="#" className="bg-blue-500 px-4 py-1.5 rounded-md hover:bg-blue-600 transition-colors">
                Разместить объявление
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </button>

            <a href="/" className="text-2xl font-bold">
              Avito
            </a>

            <button className="hidden md:flex items-center px-4 py-2 bg-blue-500 text-white rounded-l-md">
              <Menu className="h-5 w-5 mr-2" />
              Все категории
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                className="w-full px-4 py-2 border rounded-md md:rounded-l-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md">
                Найти
              </button>
            </div>

            <button className="hidden md:flex items-center text-gray-700">
              <MapPin className="h-5 w-5 mr-2" />
              Во всех регионах
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Services navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-2 overflow-x-auto">
            <a href="#" className="flex items-center gap-2 min-w-max text-sm text-gray-700">
              <span className="p-1 bg-gray-100 rounded">🏃</span>
              Путешествия
            </a>
            <a href="#" className="flex items-center gap-2 min-w-max text-sm text-gray-700">
              <span className="p-1 bg-gray-100 rounded">🏷️</span>
              Скидки
            </a>
            <a href="#" className="flex items-center gap-2 min-w-max text-sm text-gray-700">
              <span className="p-1 bg-gray-100 rounded">💇</span>
              Мастера красоты
            </a>
            <a href="#" className="flex items-center gap-2 min-w-max text-sm text-gray-700">
              <span className="p-1 bg-gray-100 rounded">🚗</span>
              Гараж
            </a>
            <a href="#" className="flex items-center gap-2 min-w-max text-sm text-gray-700">
              <span className="p-1 bg-gray-100 rounded">🛍️</span>
              Авито Молл
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4">
            <button onClick={() => setIsOpen(false)} className="mb-4">
              ✕ Закрыть
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="py-2 border-b">Для бизнеса</a>
              <a href="#" className="py-2 border-b">Карьера в Авито</a>
              <a href="#" className="py-2 border-b">Помощь</a>
              <a href="#" className="py-2 border-b">Каталоги</a>
              <a href="#" className="py-2 border-b">Польза</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

const categories = [
  {
    title: 'Авто',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Недвижимость',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Работа',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Одежда, обувь, аксессуары',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Хобби и отдых',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Животные',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Готовый бизнес и оборудование',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  },
  {
    title: 'Электроника',
    image: '/placeholder.svg?height=150&width=150',
    href: '#'
  }
];

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <a
            key={category.title}
            href={category.href}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-500">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const promoItems = [
  {
    title: 'Новогодние скидки',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: '#яПомогаю',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Помогайте покупая',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Игра Авито и МЧС',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Участвовать в олимпиаде',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Зимние кроссовки',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Бордовый — цвет сезона',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  },
  {
    title: 'Нетоксичное общение',
    image: '/placeholder.svg?height=120&width=120',
    href: '#'
  }
];

const PromoScroll = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex overflow-x-auto gap-4 pb-4">
        {promoItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="flex-none w-[120px] group"
          >
            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-red-100 group-hover:border-red-200">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-xs text-center text-gray-900">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

const recommendations = [
  {
    id: 1,
    title: 'Брендовые пакеты guess',
    price: '200 ₽',
    image: '/placeholder.svg?height=200&width=200',
    hasDelivery: true
  },
  {
    id: 2,
    title: 'Резинка для волос Dior',
    price: '335 ₽',
    originalPrice: '500 ₽',
    discount: '-33%',
    image: '/placeholder.svg?height=200&width=200',
    hasDelivery: true
  },
  {
    id: 3,
    title: 'Пакеты и Упаковка louis vuitton оригинал',
    price: '1 000 ₽',
    image: '/placeholder.svg?height=200&width=200',
    hasDelivery: true
  },
  {
    id: 4,
    title: 'Брендовые пакеты karl lagerfeld',
    price: '215 ₽',
    image: '/placeholder.svg?height=200&width=200',
    hasDelivery: true
  }
];

const RecommendationCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-square">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
            }`}
          />
        </button>
        {item.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded">
            {item.discount}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm text-gray-900 font-medium line-clamp-2 mb-1 group-hover:text-blue-500">
          {item.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{item.price}</span>
          {item.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {item.originalPrice}
            </span>
          )}
        </div>
        {item.hasDelivery && (
          <div className="flex items-center gap-1 mt-2 text-gray-500">
            <Truck className="h-4 w-4" />
            <span className="text-xs">Доставка</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Recommendations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6">Рекомендации для вас</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendations.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const footerLinks = [
    { title: 'Правила Авито', href: '#' },
    { title: 'Реклама на сайте', href: '#' },
    { title: 'О компании', href: '#' },
    { title: 'Карьера в Авито', href: '#' },
    { title: 'Авито Польза', href: '#' }
  ];

  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm text-gray-500">
            © ООО «КЕХ еКоммерц» 2007-2024.
            <a href="#" className="text-blue-500 hover:text-blue-600 ml-1">
              Авито использует рекомендательные технологии
            </a>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm text-gray-700 hover:text-blue-500 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <CategoryGrid />
        <PromoScroll />
        <Recommendations />
      </div>
      <Footer />
    </main>
  );
};

export default App;

