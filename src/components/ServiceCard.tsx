import { Truck, Car, Home, Heart } from 'lucide-react';

interface ServiceCardProps {
  icon: 'delivery' | 'autoteka' | 'travel' | 'help';
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const icons = {
    delivery: Truck,
    autoteka: Car,
    travel: Home,
    help: Heart,
  };

  const Icon = icons[icon];

  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <Icon className="w-8 h-8 text-[#00AAFF]" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}