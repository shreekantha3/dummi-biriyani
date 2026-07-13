"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import { Filter, SlidersHorizontal, X, ChevronDown } from "lucide-react";

interface Props {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductsPageClient({ initialProducts, categories }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    sort: "featured",
    search: "",
    minPrice: "",
    maxPrice: "",
  });

  const applyFilters = (f: typeof filters) => {
    let result = [...initialProducts];

    if (f.category !== "all") {
      result = result.filter((p) => p.category === f.category);
    }

    if (f.search) {
      const q = f.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    if (f.minPrice) {
      result = result.filter((p) => parseFloat(p.price) >= parseFloat(f.minPrice));
    }
    if (f.maxPrice) {
      result = result.filter((p) => parseFloat(p.price) <= parseFloat(f.maxPrice));
    }

    switch (f.sort) {
      case "price-asc":
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "rating":
        result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "reviews":
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
          return b.reviewsCount - a.reviewsCount;
        });
        break;
    }

    setProducts(result);
  };

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearFilters = () => {
    const reset = { category: "all", sort: "featured", search: "", minPrice: "", maxPrice: "" };
    setFilters(reset);
    applyFilters(reset);
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.sort !== "featured" ||
    filters.search !== "" ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "";

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar - Desktop */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </h3>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                Clear All
              </button>
            )}
          </div>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search biryani..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
            <div className="space-y-1.5">
              {[{ key: "all", label: "All Items" }, ...categories.map((c) => ({ key: c, label: c }))].map((cat) => (
                <label
                  key={cat.key}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === cat.key}
                    onChange={() => updateFilter("category", cat.key)}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-amber-700 transition-colors">
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Price Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => updateFilter("minPrice", e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => updateFilter("maxPrice", e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-amber-300 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
            )}
          </button>

          <div className="flex-1" />

          <div className="relative">
            <select
              value={filters.sort}
              onChange={(e) => updateFilter("sort", e.target.value)}
              className="appearance-none px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
              <option value="name">Name A-Z</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="lg:hidden mb-6 p-4 bg-white border border-slate-200 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Search biryani..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {[{ key: "all", label: "All" }, ...categories.map((c) => ({ key: c, label: c }))].map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => updateFilter("category", cat.key)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      filters.category === cat.key
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min ₹"
                  value={filters.minPrice}
                  onChange={(e) => updateFilter("minPrice", e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="number"
                  placeholder="Max ₹"
                  value={filters.maxPrice}
                  onChange={(e) => updateFilter("maxPrice", e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 w-full py-2 text-sm font-medium text-amber-600 hover:text-amber-700"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}

        <p className="text-sm text-slate-500 mb-6">
          Showing {products.length} item{products.length !== 1 ? "s" : ""}
        </p>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🍚</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No biryani found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
