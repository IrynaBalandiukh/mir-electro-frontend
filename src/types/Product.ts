export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string | null;
  tag: string | null;
  images: string[];
};
