import React, { useState } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import FilterPanel from './components/Filters/FilterPanel';
import ProductCard from './components/ProductGrid/ProductCard';
import Pagination from './components/ProductGrid/Pagination';
import SortBar from './components/ProductGrid/SortBar';
import { useProducts } from './hooks/useProducts';
import { Product } from './types/Product';

function App() {
  const {
    products,
    totalProducts,
    currentPage,
    totalPages,
    setCurrentPage,
    setFilters,
    setSort,
  } = useProducts(24);

  const [wishlist, setWishlist] = useState<Product[]>([]);

  const handleAddToWishlist = (product: Product) => {
    setWishlist(prev => 
      prev.some(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header wishlistCount={wishlist.length} />
      <CategoryBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <div className="w-64 flex-shrink-0">
            <FilterPanel
              onFilterChange={setFilters}
              categories={['Smartphones', 'Laptops', 'Audio', 'Cameras', 'Accessories']}
              brands={['Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo']}
            />
          </div>
          
          <div className="flex-1">
            <SortBar
              onSortChange={setSort}
              totalProducts={totalProducts}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 ShopClone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;