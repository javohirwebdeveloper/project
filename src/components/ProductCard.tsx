import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  isOnlineView?: boolean;
  delivery?: boolean;
}

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  discount,
  isOnlineView,
  delivery,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            -{discount}%
          </span>
        )}
        {isOnlineView && (
          <span className="absolute bottom-2 left-2 bg-white/90 text-black px-2 py-1 text-xs rounded">
            Онлайн-показ
          </span>
        )}
        <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white">
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>
      
      <div>
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-bold">{price} ₽</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice} ₽
            </span>
          )}
        </div>
        {delivery && (
          <div className="mt-1">
            <span className="text-xs text-gray-500">🚚</span>
          </div>
        )}
      </div>
    </div>
  );
}