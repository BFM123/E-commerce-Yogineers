import React, { useEffect, useState } from "react";
import ShoppingItem from "../COMPONENTS/Shop/ShoppingItemCard";
import AddItemForm from "../COMPONENTS/Shop/AddItemForm";

const ShoppingList = ({ isBusinessOwner }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch items from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleItemAdded = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <div>
      {isBusinessOwner && (
        <div className="mb-8">
          <AddItemForm onItemAdded={handleItemAdded} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No products available.</div>
        ) : (
          items.map((item) => (
            <ShoppingItem key={item._id} item={item} onAddToCart={handleAddToCart} />
          ))
        )}
      </div>
      <div className="mt-10 bg-white/90 rounded-lg shadow p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;