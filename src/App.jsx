import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, MapPin, ChevronDown, Menu, Truck } from 'lucide-react';
import LogoW from './assets/Logo-w.png';


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
              <div className='p-2 rounded-md bg-[#2A43D4]'><img className='w-28' src={LogoW} alt="" /></div>
            </a>

            <button className="hidden md:flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              <Menu className="h-5 w-5 mr-2" />
              Все категории
            </button>

            <div className="flex-1 border border-blue-500 rounded-2xl relative">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                className="w-full border-blue-500 px-4 py-2 border !rounded-2xl outline-none md:rounded-l-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 !rounded-r-2xl bg-blue-500 text-white ">
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
              Vositachi Молл
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
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_1.png',
    href: '#'
  },
  {
    title: 'Недвижимость',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_4_v2.png',
    href: '#'
  },
  {
    title: 'Работа',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_110_new_2.png',
    href: '#'
  },
  {
    title: 'Одежда, обувь, аксессуары',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_27.png',
    href: '#'
  },
  {
    title: 'Хобби и отдых',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png',
    href: '#'
  },
  {
    title: 'Животные',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_35.png',
    href: '#'
  },
  {
    title: 'Готовый бизнес и оборудование',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_8_v2.png',
    href: '#'
  },
  {
    title: 'Электроника',
    image: 'https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_6.png',
    href: '#'
  }
];

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.title}
            href={category.href}
            className="group relative w-[100px] h-[90px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className=" absolute bottom-0">
              <img
                src={category.image}
                alt={category.title}
                loading='lazy'
                className="h-[90px] !w-[156px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-blue-500">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





const RecommendationCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imghover, setImghover] = useState(false);

  // Limit to 5 images
  const displayedImages = item.images.slice(0, 5);
  const additionalImagesCount = item.images.length - 5;
 const [plusImg, setPlusImg] = useState(false)
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div
        onMouseEnter={() => {
          if (item.images.length !== 1) {
            setImghover(true);
          }
        }}
        onMouseLeave={() => setImghover(false)}
        className="relative cursor-pointer aspect-square"
      >
        <img
          className="w-full h-full object-cover"
          src={item.images[activeImage]}
          alt={item.title}
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
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

        {imghover && (
          <div
            className={`grid px-2 w-full absolute bottom-0 h-full left-1/2 transform -translate-x-1/2 grid-rows-1 ${
              item.images.length === 1
                ? 'grid-cols-1'
                : item.images.length === 2
                ? 'grid-cols-2'
                : item.images.length === 3
                ? 'grid-cols-3'
                : item.images.length === 4
                ? 'grid-cols-4'
                : item.images.length === 5
                ? 'grid-cols-5'
                : 'grid-cols-5'
            } gap-1 w-full`}
          >
            {displayedImages.map((_, index) => (
              <div
                key={index}
                onMouseEnter={() => {setActiveImage(index)
                  if(index == 4){
                    setPlusImg(true)
                  }
                }}
                onMouseLeave={() => {setActiveImage(0)
                  setPlusImg(false)
                }}
                className="relative z-20"
              >
                <div
                  className={`h-[2px] w-full bottom-2 absolute transition-all rounded-full duration-200 ${
                    activeImage === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            ))}
            {plusImg && (
              <div className="absolute flex justify-center items-center h-full w-full bg-[#00000088] z-10">
                <span className=" text-center text-2xl text-white">
                  Ещё <br /> {additionalImagesCount} фото
                </span>
              </div>
            )}
          </div>
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
  const recommendations = [
  {
    id: 1,
    title: 'Брендовые пакеты guess',
    price: '200 ₽',
    images: ['https://80.img.avito.st/image/1/1.b-xH0baDwwUpcRkEFeBN901zwQP1ZscF9QGiCeuqwt_ycsEH73I.a9NFydL2GgD38_4NRvtZ-JHReMwChdNfp41ssJqFAqY'],
    hasDelivery: true
  },
  {
    id: 2,
    title: 'Резинка для волос Dior',
    price: '335 ₽',
    originalPrice: '500 ₽',
    discount: '-33%',
    images: ['https://20.img.avito.st/image/1/1.0OdNpLaDfA4jBKYPYcOogGQFfgj_E3gO_3QdAuHffdT4B34M5Qc.b_XD_B1BNZw7ULO5TITeA6hgWo7IBjUyLISu5793PRA',
      'https://80.img.avito.st/image/1/1.VLqJI7aD-FOfg1pSrUoRn5-C-lU7lPxTO_OZXyUg-fE8gPpRIYA.P6ufvgfKUhhJfhQ5KlSxcOKVZYPQZL8nmt6JZiFw_Ek'
    ],
    hasDelivery: true
  },
  {
    id: 3,
    title: 'Пакеты и Упаковка louis vuitton оригинал',
    price: '1 000 ₽',
    images: ['https://30.img.avito.st/image/1/1.BwOEkLaDq-rqMHHrhqAoZrAyqew2J6_qNkDK5ijrqjAxM6noLDM.PQknNptkP3JWRk1tIq7_i978Y-xMLgTc6xp2-MS545U'],
    hasDelivery: true
  },
  {
    id: 4,
    title: 'Брендовые пакеты karl lagerfeld',
    price: '215 ₽',
    images: ['https://80.img.avito.st/image/1/1.VLqJI7aD-FPngyJSrUoRn5-C-lU7lPxTO_OZXyVY-Yk8gPpRIYA.TVlMWkiT9fip00NLk21EKAJ6EKxC1jzqgTFf45sSdJQ',
      'https://20.img.avito.st/image/1/1.T7X1NLaD41zjlEFd52VRq-aV4VpHg-dcR-SCUFk34v5Al-FeXZc.yjAkS1E-T0KwzCkw-P6ONYENbX8VybeMByFrKyyFqvo',
      'https://10.img.avito.st/image/1/1.VjhnQ7a8-tFx41jQR1IvEbHg_NfF5vrXooP2yXHjWNDR4PjN0Q.cnnKoSue7zKp8CESxjOQVebRt1crMARLlprojM8K7Dc',
      'https://30.img.avito.st/image/1/1.W21NuLaD94RbGFWFd40CClwZ9YL_D_OE_2iWiOG79ib4G_WG5Rs.tKd24FZHvhFlMWbVBVi5kImBW_iBjwW2mZZnviaMCcY',
      'https://00.img.avito.st/image/1/1.B4JxVLaDq2tn9Alqc2x_6G32qW3D469rw4TKZ91XqsnE96lp2fc.b4TqoR5jKzFPKKM7yQm7va3I6G7FWlaQQF22E2Kk7-w',
      "https://40.img.avito.st/image/1/1.XF3DILaD8LTVgFK193VQINSB8rJxl_S0cfCRuG8j8RZ2g_K2a4M.phvzad0Y_5sNQG4WNkipp2ths4QSIZKpWiDTdlj5C-g",
      'https://00.img.avito.st/image/1/1.B4JxVLaDq2tn9Alqc2x_6G32qW3D469rw4TKZ91XqsnE96lp2fc.b4TqoR5jKzFPKKM7yQm7va3I6G7FWlaQQF22E2Kk7-w',
    ],
    hasDelivery: true
  }
];


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
        <Recommendations />
      </div>
      <Footer />
    </main>
  );
};

export default App;

