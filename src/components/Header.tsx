"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import DummiLogo from "@/components/DummiLogo";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Delivery Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
        ☁️ Hubli Cloud Kitchen — Delivery Only • <span className="font-bold">Free delivery above ₹299</span> • Open 10 AM – 8 PM
      </div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <DummiLogo className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-md group-hover:scale-105 transition-transform" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Dummi Biriyani
                </h1>
                <p className="text-[10px] text-amber-600/70 font-medium tracking-wider uppercase">
                  ☁️ Hubli Cloud Kitchen • 10 AM – 8 PM
                </p>
              </div>
              <span className="sm:hidden text-lg font-extrabold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent leading-tight">
                Dummi Biriyani
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Menu" },
                { href: "/#about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-amber-700 rounded-lg hover:bg-amber-50 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-3 text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-amber-200">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-amber-100">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Menu" },
                { href: "/#about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
