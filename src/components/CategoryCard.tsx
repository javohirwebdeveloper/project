
interface CategoryCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export function CategoryCard({ title, imageSrc, className = '' }: CategoryCardProps) {
  return (
    <a href="#" className={`block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow ${className}`}>
      <div className="aspect-[4/3] mb-2 overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-sm text-gray-800">{title}</h3>
    </a>
  );
}