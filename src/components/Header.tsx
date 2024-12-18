import React from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold">ShopClone</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-600 text-white rounded-r-md">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-orange-200">
              <Heart size={24} />
            </button>
            <button className="text-white hover:text-orange-200">
              <ShoppingCart size={24} />
            </button>
            <button className="text-white hover:text-orange-200">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}