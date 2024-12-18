import React from 'react';
import { Smartphone, Laptop, Camera, Watch, Headphones, Gift } from 'lucide-react';

const categories = [
  { name: 'Phones', icon: Smartphone },
  { name: 'Laptops', icon: Laptop },
  { name: 'Cameras', icon: Camera },
  { name: 'Watches', icon: Watch },
  { name: 'Audio', icon: Headphones },
  { name: 'Gifts', icon: Gift },
];

export default function CategoryBar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center px-4 py-2 text-gray-600 hover:text-orange-500"
            >
              <category.icon size={24} />
              <span className="mt-1 text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}