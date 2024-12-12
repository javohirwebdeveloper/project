import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <div className='max-w-full px-32 mx-auto'>
      <h2 className="text-xl font-semibold mb-6">Сервисы и услуги Авито</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          icon="delivery"
          title="Доставка"
          description="Проверка при получении и возможность бесплатно вернуть товар"
        />
        <ServiceCard
          icon="autoteka"
          title="Автотека"
          description="Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах"
        />
        <ServiceCard
          icon="travel"
          title="Путешествия"
          description="Выбор свободных дат в календаре и оплата онлайн для гарантии заселения"
        />
        <ServiceCard
          icon="help"
          title="Авито Польза"
          description="Сохраняйте природу и помогайте людям вместе с нами"
        />
      </div>
    </div>
  );
}