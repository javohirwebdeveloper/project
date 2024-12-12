import { ProductCard } from './ProductCard';

export function Recommendations() {
  const products = [
    {
      title: 'Пакеты и Упаковка louis vuitton оригинал',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Брендовые пакеты guess',
      price: 200,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Резинка для волос Dior',
      price: 335,
      originalPrice: 500,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Брендовые пакеты karl lagerfeld',
      price: 215,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Брендовые пакеты ЦУМ, Подарочные пакеты',
      price: 300,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Новые пакеты цум 21*30 см',
      price: 180,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=80',
      delivery: true
    },
    {
      title: 'Коробробка Dior и Versace упаковка',
      price: 500,
      image: 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=300&q=80',
      isOnlineView: true,
      delivery: true
    },
    {
      title: 'Пакеты и коробки montblanc, gucci, tiffany',
      price: 550,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80',
      delivery: true
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-full px-32 mx-auto">
        <h2 className="text-2xl font-bold mb-6">Рекомендации для вас</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}