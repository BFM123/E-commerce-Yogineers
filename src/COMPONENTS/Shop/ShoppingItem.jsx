import React from "react";

const ShoppingItem = ({ item, onAddToCart }) => (
  <div className="flex flex-col items-center w-full h-full p-6">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-40 object-cover rounded-xl mb-4 shadow"
      style={{ background: "#e5e7eb" }}
    />
    <h2 className="text-lg font-bold mb-1 text-gray-800">{item.name}</h2>
    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-2">{item.category}</span>
    <p className="text-gray-600 mb-2 text-center flex-1">{item.description}</p>
    <div className="flex justify-between items-center w-full mb-2">
      <span className="text-blue-700 font-semibold text-lg">${item.price.toFixed(2)}</span>
      <span className={`text-xs ${item.stock > 0 ? "text-green-600" : "text-red-600"}`}>
        {item.stock > 0 ? "In Stock" : "Out of Stock"}
      </span>
    </div>
    <button
      className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:bg-gray-400 w-full"
      onClick={() => onAddToCart(item)}
      disabled={item.stock === 0}
    >
      Add to Cart
    </button>
  </div>
);

export default ShoppingItem;