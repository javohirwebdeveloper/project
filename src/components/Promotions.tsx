import { CircularPromo } from './CircularPromo';

export function Promotions() {
  const promos = [
    { title: 'Новогодние скидки', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80' },
    { title: '#яПомогаю', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=150&q=80' },
    { title: 'Помогайте покупая', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=150&q=80' },
    { title: 'Игра Авито и МЧС', image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=150&q=80' },
    { title: 'Участвовать в олимпиаде', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=150&q=80' },
    { title: 'Нетоксичное общение', image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=150&q=80' },
    { title: 'Не удаляйте приложение', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=150&q=80' },
    { title: 'Товары в кредит', image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=150&q=80' },
  ];

  return (
    <div className="flex max-w-full px-32 mx-auto gap-4 overflow-x-auto py-4 ">
      {promos.map((promo) => (
        <CircularPromo key={promo.title} {...promo} />
      ))}
    </div>
  );
}