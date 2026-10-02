import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      <h2 className="font-semibold text-lg mt-4 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-xl font-bold mt-3">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
