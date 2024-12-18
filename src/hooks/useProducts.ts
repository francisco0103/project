import { useState, useMemo } from 'react';
import { Product } from '../types/Product';
import { generateProducts } from '../utils/generateProducts';

interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  minRating?: number;
}

interface SortOption {
  field: keyof Product;
  direction: 'asc' | 'desc';
}

export function useProducts(itemsPerPage: number = 24) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [sort, setSort] = useState<SortOption>({ field: 'sales', direction: 'desc' });
  
  const allProducts = useMemo(() => generateProducts(1000), []);
  
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.brand) {
      result = result.filter(p => p.brand === filters.brand);
    }
    if (filters.minPrice) {
      result = result.filter(p => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= filters.maxPrice!);
    }
    if (filters.inStock !== undefined) {
      result = result.filter(p => p.inStock === filters.inStock);
    }
    if (filters.minRating) {
      result = result.filter(p => p.rating >= filters.minRating!);
    }
    
    result.sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];
      const modifier = sort.direction === 'asc' ? 1 : -1;
      return (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) * modifier;
    });
    
    return result;
  }, [allProducts, filters, sort]);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  return {
    products: paginatedProducts,
    totalProducts: filteredProducts.length,
    currentPage,
    totalPages,
    setCurrentPage,
    setFilters,
    setSort,
    filters,
    sort
  };
}