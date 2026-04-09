export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string[];
}

export type Category = 'All' | 'Dresses' | 'Outerwear' | 'Accessories' | 'Evening Wear';
