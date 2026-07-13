export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice: string | null;
  category: string;
  image: string;
  images: string[];
  rating: string;
  reviewsCount: number;
  isFeatured: boolean;
  inStock: boolean;
  spiceLevel: number;
  portionSize: string;
  preparationTime: string;
  tags: string[] | null;
}

export interface Review {
  id?: number;
  productId: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  items: CartItem[];
  totalAmount: string;
  status: string;
  createdAt: Date;
}
