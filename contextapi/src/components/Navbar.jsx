import { useCart } from "../context/CartContext";

export default function Navbar({ onCartClick }) {
  const { getCartCount } = useCart();

  return (
    <nav className="flex justify-between item-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-x1 front-blod">My Store</h1>

      <button className="bg-white text-gray-900" onClick={onCartClick}>🛒 Cart ({getCartCount()})</button>
    </nav>
  );
}
