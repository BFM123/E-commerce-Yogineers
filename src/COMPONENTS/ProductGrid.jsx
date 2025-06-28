import React, { useState } from "react";

const ProductGrid = ({ items = [], onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {items.map((item) => (
      <GridCard key={item._id} item={item} onAddToCart={onAddToCart} />
    ))}
  </div>
);

const GridCard = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto object-contain"
      />
      <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="mt-1 text-blue-600 font-bold">${item.price}</p>
      <div className="flex items-center mt-2">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-16 border rounded p-1 mr-2"
        />
        <button
          onClick={() => onAddToCart(item, quantity)}
          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
