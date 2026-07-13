"use client";

import { useCart } from "@/lib/cart-context";

export default function AddedToCartToast() {
  const { items } = useCart();
  const lastItem = items[items.length - 1];

  if (!lastItem) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] animate-slideUp">
      <div className="bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
        <span className="text-lg">✅</span>
        <div>
          <p className="text-sm font-medium">{lastItem.product.name} added to cart!</p>
          <p className="text-xs text-slate-400">
            {lastItem.quantity} item{lastItem.quantity > 1 ? "s" : ""} • ₹{parseFloat(lastItem.product.price) * lastItem.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
