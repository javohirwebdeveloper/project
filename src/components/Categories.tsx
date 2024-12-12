import { CategoryCard } from './CategoryCard';

export function Categories() {
  const categories = [
    { title: 'Авто', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80' },
    { title: 'Недвижимость', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80' },
    { title: 'Работа', image: 'https://i.pinimg.com/1200x/33/0e/aa/330eaa9d22826aff3d47fbcec09cc24f.jpg' },
    { title: 'Одежда, обувь, аксессуары', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=300&q=80' },
    { title: 'Хобби и отдых', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=300&q=80' },
    { title: 'Животные', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' },
    { title: 'Готовый бизнес и оборудование', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="grid max-w-full px-32 mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          imageSrc={category.image}
        />
      ))}
    </div>
  );
}