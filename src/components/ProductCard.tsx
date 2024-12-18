import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  sales: number;
}

export default function ProductCard({ title, price, image, rating, sales }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-sm text-gray-700 font-medium line-clamp-2">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-orange-500 font-bold">${price.toFixed(2)}</span>
          <div className="text-xs text-gray-500">
            ⭐ {rating} | {sales} sold
          </div>
        </div>
      </div>
    </div>
  );
}