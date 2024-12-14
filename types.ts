export interface Product {
    id: number;
    name: string;
    category: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    isNew: boolean;
    imageUrl: string;
  }