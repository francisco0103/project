import { Product } from '../types/Product';

const productTemplates = [
  {
    category: 'Smartphones',
    brands: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    templates: [
      'BRAND Model YEAR',
      'BRAND Phone Pro MAX',
      'BRAND Phone Ultra',
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab',
      'https://images.unsplash.com/photo-1573148195900-7845dcb9b127',
    ],
    priceRange: { min: 299, max: 1299 }
  },
  {
    category: 'Laptops',
    brands: ['Dell', 'HP', 'Lenovo', 'Asus', 'Apple'],
    templates: [
      'BRAND Laptop Pro YEAR',
      'BRAND Notebook Elite',
      'BRAND UltraBook',
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf',
    ],
    priceRange: { min: 499, max: 2499 }
  },
  // Add more categories...
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePrice(min: number, max: number): number {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

export function generateProducts(count: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const template = getRandomElement(productTemplates);
    const brand = getRandomElement(template.brands);
    const year = 2020 + Math.floor(Math.random() * 5);
    
    const title = getRandomElement(template.templates)
      .replace('BRAND', brand)
      .replace('YEAR', year.toString());

    products.push({
      id: i + 1,
      title,
      price: generatePrice(template.priceRange.min, template.priceRange.max),
      image: getRandomElement(template.imageUrls),
      rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
      sales: Math.floor(Math.random() * 5000),
      category: template.category,
      brand,
      inStock: Math.random() > 0.1,
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 40) + 10 : 0,
    });
  }

  return products;
}