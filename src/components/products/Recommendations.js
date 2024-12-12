import React from 'react';
import { ProductCard } from './ProductCard';
import { recommendationsData } from '../../data/recommendations';

export function Recommendations() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Рекомендации для вас</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendationsData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}