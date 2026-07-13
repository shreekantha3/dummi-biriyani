import ProductsPageClient from "./ProductsPageClient";
import { filterProducts, getCategories } from "@/lib/data";

export default function ProductsPage() {
  const initialProducts = filterProducts({ sort: "featured" });
  const categories = getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Our Menu</h1>
        <p className="text-slate-600">
          Discover our delicious range of biryani, rice & combo dishes
        </p>
      </div>

      <ProductsPageClient initialProducts={initialProducts} categories={categories} />
    </div>
  );
}
