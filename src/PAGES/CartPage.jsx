import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b pb-2"
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;