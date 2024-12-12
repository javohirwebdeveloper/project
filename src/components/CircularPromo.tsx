
interface CircularPromoProps {
  image: string;
  title: string;
}

export function CircularPromo({ image, title }: CircularPromoProps) {
  return (
    <div className="text-center  max-w-7xl mx-auto">
      <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-red-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="text-xs text-gray-800">{title}</p>
    </div>
  );
}