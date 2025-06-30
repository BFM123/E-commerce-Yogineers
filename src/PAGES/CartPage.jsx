import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart = [], clearCart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-100 min-h-[70vh] rounded-2xl shadow-2xl mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-700 text-center tracking-tight">🛒 Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" className="w-32 h-32 mb-6 opacity-60" />
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-blue-100">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row items-center justify-between py-6"
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl shadow border border-blue-100 bg-white"
                  />
                  <div>
                    <div className="font-bold text-lg text-blue-900">{item.name}</div>
                    <div className="text-gray-500 text-sm mt-1">${item.price.toFixed(2)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-l-lg font-bold text-lg transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={e => updateQuantity(item._id, Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-14 text-center border border-blue-200 rounded-none py-1 focus:outline-none"
                  />
                  <button
                    onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-r-lg font-bold text-lg transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700 text-xl transition"
                    title="Remove"
                  >
                    &times;
                  </button>
                </div>
                <div className="font-bold text-blue-700 w-24 text-right text-lg mt-4 sm:mt-0">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
            <span className="text-2xl font-bold text-blue-800">
              Total: <span className="bg-blue-100 px-4 py-2 rounded-lg text-blue-900">${total.toFixed(2)}</span>
            </span>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 font-semibold shadow transition"
              >
                Clear Cart
              </button>
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 rounded-lg font-bold shadow hover:from-blue-700 hover:to-purple-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;