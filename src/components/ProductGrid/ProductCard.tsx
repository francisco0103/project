import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToWishlist }: ProductCardProps) {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            -{product.discount}%
          </div>
        )}
        <button 
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={() => onAddToWishlist?.(product)}
        >
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-sm text-gray-700 font-medium line-clamp-2">{product.title}</h3>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-gray-400 text-sm line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="ml-1">{product.rating}</span>
            </div>
            <span>{product.sales} sold</span>
          </div>
        </div>
        {!product.inStock && (
          <div className="mt-2 text-red-500 text-sm">Out of Stock</div>
        )}
      </div>
    </div>
  );
}