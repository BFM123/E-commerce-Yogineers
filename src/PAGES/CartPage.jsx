import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart = [], clearCart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-[60vh] rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shadow"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-gray-500 text-sm">${item.price.toFixed(2)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={e => updateQuantity(item._id, Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border rounded"
                  />
                  <button
                    onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                    title="Remove"
                  >
                    &times;
                  </button>
                </div>
                <div className="font-bold text-blue-700 w-20 text-right">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <span className="text-xl font-bold text-blue-800">Total: ${total.toFixed(2)}</span>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 font-semibold shadow"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;