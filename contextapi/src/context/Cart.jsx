import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-6"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-28 h-28 object-contain"
            />

            {/* Product details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="text-gray-600 mt-2">Price: ${item.price}</p>

              <p className="font-semibold mt-2">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Quantity buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  -
                </button>

                <span className="font-bold">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart total */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold">Total: ${getCartTotal()}</h2>
      </div>
    </div>
  );
}
