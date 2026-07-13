"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlideOutCart from "@/components/SlideOutCart";
import AddedToCartToast from "@/components/AddedToCartToast";
import ProductCard from "@/components/ProductCard";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";
import "@/app/globals.css";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SlideOutCart />
        <AddedToCartToast />
      </div>
    </CartProvider>
  );
}
