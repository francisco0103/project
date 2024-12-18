import React from 'react';
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface SortBarProps {
  onSortChange: (sort: { field: string; direction: 'asc' | 'desc' }) => void;
  totalProducts: number;
}

export default function SortBar({ onSortChange, totalProducts }: SortBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        {totalProducts} products found
      </div>
      
      <div className="flex items-center gap-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => {
            const [field, direction] = e.target.value.split('-');
            onSortChange({ field, direction: direction as 'asc' | 'desc' });
          }}
        >
          <option value="sales-desc">Best Selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}