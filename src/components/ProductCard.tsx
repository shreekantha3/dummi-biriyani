"use client";

import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Star, Flame, Clock, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  const discount = product.originalPrice
    ? Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100)
    : 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-lg shadow-lg">
              {discount}% OFF
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2.5 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg shadow-lg">
              ⭐ Bestseller
            </span>
          )}
        </div>

        {/* Spice Level */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-lg">
          {Array.from({ length: product.spiceLevel }).map((_, i) => (
            <Flame key={i} className="w-3 h-3 text-orange-400" />
          ))}
        </div>

        {/* Quick Add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 p-2.5 rounded-xl shadow-lg transition-all duration-300 ${
            isAdding
              ? "bg-green-500 scale-110"
              : "bg-white hover:bg-amber-500 text-slate-700 hover:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          }`}
        >
          {isAdding ? (
            <ShoppingCart className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
            <span className="text-xs text-slate-500">({product.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{product.preparationTime}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-amber-700">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-lg">
            {product.portionSize}
          </span>
        </div>
      </div>
    </Link>
  );
}
