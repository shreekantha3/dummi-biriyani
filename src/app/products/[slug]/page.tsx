import { notFound } from "next/navigation";
import { getProductBySlug, getReviewsByProductId, products } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";
import type { Product, Review } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const productReviews = getReviewsByProductId(product.id!);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailClient
      product={product as Product}
      reviews={productReviews as Review[]}
      relatedProducts={relatedProducts as Product[]}
    />
  );
}
