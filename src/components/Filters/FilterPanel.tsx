import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  onFilterChange: (filters: any) => void;
  categories: string[];
  brands: string[];
}

export default function FilterPanel({ onFilterChange, categories, brands }: FilterPanelProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal size={20} />
        <h2 className="font-semibold">Filters</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <select 
            className="w-full p-2 border rounded-md"
            onChange={(e) => onFilterChange({ category: e.target.value })}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-medium mb-2">Brand</h3>
          <select 
            className="w-full p-2 border rounded-md"
            onChange={(e) => onFilterChange({ brand: e.target.value })}
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 p-2 border rounded-md"
              onChange={(e) => onFilterChange({ minPrice: Number(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 p-2 border rounded-md"
              onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) })}
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => onFilterChange({ inStock: e.target.checked })}
            />
            In Stock Only
          </label>
        </div>

        <div>
          <h3 className="font-medium mb-2">Minimum Rating</h3>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            className="w-full"
            onChange={(e) => onFilterChange({ minRating: Number(e.target.value) })}
          />
        </div>
      </div>
    </div>
  );
}