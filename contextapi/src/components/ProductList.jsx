import ProductCard from "./ProductCard";

export default function ProductList({ product }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-gray-100">
      {product.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
