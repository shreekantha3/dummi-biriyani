"use client";

import { useState } from "react";
import type { Product, Review } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import Link from "next/link";
import {
  Star,
  Clock,
  Flame,
  Check,
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  RefreshCw,
  Heart,
  Share2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

interface Props {
  product: Product;
  reviews: Review[];
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, reviews, relatedProducts }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const discount = product.originalPrice
    ? Math.round(
        ((parseFloat(product.originalPrice) - parseFloat(product.price)) /
          parseFloat(product.originalPrice)) *
          100
      )
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-amber-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-700 transition-colors">
          Menu
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 group">
            <img
              src={allImages[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {discount > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-lg shadow-lg">
                {discount}% OFF
              </span>
            )}
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((i) => (i - 1 + allImages.length) % allImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentImage((i) => (i + 1) % allImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    currentImage === idx
                      ? "border-amber-500 ring-2 ring-amber-200"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
              {product.category}
            </span>
            {product.isFeatured && (
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                🔥 Bestseller
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-lg font-bold text-slate-900">{product.rating}</span>
              <span className="text-sm text-slate-500">
                ({product.reviewsCount} reviews)
              </span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-green-600 font-medium">In Stock</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-amber-700">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6">{product.longDescription}</p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Clock, label: "Prep Time", value: product.preparationTime },
              { icon: Flame, label: "Spice Level", value: `${product.spiceLevel}/5` },
              { icon: Check, label: "Portion", value: product.portionSize },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-slate-50 rounded-xl">
                <item.icon className="w-5 h-5 text-amber-600 mb-2" />
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="text-sm font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-slate-100 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-slate-600 hover:bg-slate-200 rounded-l-xl transition-colors"
              >
                −
              </button>
              <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="px-4 py-3 text-slate-600 hover:bg-slate-200 rounded-r-xl transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart • {formatPrice(parseFloat(product.price) * quantity)}
            </button>
          </div>

          {/* Wishlist & Share */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
                isWishlisted
                  ? "border-red-200 bg-red-50 text-red-600"
                  : "border-slate-200 text-slate-600 hover:border-amber-300"
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500" : ""}`} />
              {isWishlisted ? "Wishlisted" : "Wishlist"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-amber-300 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
            {[
              { icon: Truck, text: "Free delivery ₹299+" },
              { icon: Shield, text: "100% Fresh" },
              { icon: RefreshCw, text: "Easy Returns" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs text-slate-600">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          Customer Reviews ({reviews.length})
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-slate-50 rounded-2xl sticky top-24">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-slate-900 mb-2">{product.rating}</div>
                <StarRating rating={Math.round(parseFloat(product.rating))} size="lg" />
                <p className="text-sm text-slate-500 mt-2">
                  Based on {product.reviewsCount} reviews
                </p>
              </div>

              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = reviews.filter((r) => r.rating === star).length;
                  const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 w-4">{star}</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-sm text-slate-500 w-8 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Review List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-amber-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-900">{review.author}</span>
                      {review.verified && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <StarRating rating={review.rating} size="sm" />
                      <span className="text-xs text-slate-500">
                        {new Date(review.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-slate-700 mt-3 leading-relaxed">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
}
