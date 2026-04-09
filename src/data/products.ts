import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Midnight Gown',
    category: 'Evening Wear',
    price: 850,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
    description: 'A floor-length silk gown that captures the essence of midnight elegance.',
    details: ['100% Mulberry Silk', 'Hand-stitched hem', 'Concealed back zipper']
  },
  {
    id: '2',
    name: 'Cashmere Wrap Coat',
    category: 'Outerwear',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious double-faced cashmere coat with a relaxed wrap silhouette.',
    details: ['100% Italian Cashmere', 'Detachable belt', 'Deep welt pockets']
  },
  {
    id: '3',
    name: 'Pearl Embellished Clutch',
    category: 'Accessories',
    price: 450,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    description: 'A statement accessory adorned with hand-placed freshwater pearls.',
    details: ['Freshwater pearls', 'Satin lining', 'Gold-tone hardware']
  },
  {
    id: '4',
    name: 'Velvet Meridian Blazer',
    category: 'Outerwear',
    price: 680,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    description: 'Structured velvet blazer with sharp lapels and a tailored waist.',
    details: ['Premium velvet', 'Silk lapels', 'Padded shoulders']
  },
  {
    id: '5',
    name: 'Chiffon Aria Dress',
    category: 'Dresses',
    price: 520,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
    description: 'Lightweight chiffon dress with delicate pleats and a flowing hemline.',
    details: ['Silk chiffon', 'Fully lined', 'Elasticated waist']
  },
  {
    id: '6',
    name: 'Gold Leaf Earrings',
    category: 'Accessories',
    price: 290,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Intricately designed gold leaf earrings that add a touch of nature to luxury.',
    details: ['18k Gold plated', 'Lightweight design', 'Hypoallergenic']
  },
  {
    id: '7',
    name: 'Satin Slip Dress',
    category: 'Dresses',
    price: 380,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
    description: 'The quintessential satin slip dress for a minimalist yet bold look.',
    details: ['Heavyweight satin', 'Adjustable straps', 'Side slit']
  },
  {
    id: '8',
    name: 'Tweed Heritage Jacket',
    category: 'Outerwear',
    price: 950,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=800',
    description: 'Classic tweed jacket with modern proportions and fringed edges.',
    details: ['Wool blend tweed', 'Silk lining', 'Custom buttons']
  }
];
