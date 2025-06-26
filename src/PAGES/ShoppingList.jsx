import React, { useEffect, useState } from "react";
import ShoppingItem from "../COMPONENTS/Shop/ShoppingItem";
import AddItemForm from "../COMPONENTS/Shop/AddItemForm";

const ShoppingList = ({ isBusinessOwner }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  const handleAddToCart = (item) => setCart((prev) => [...prev, item]);
  const handleItemAdded = (item) => setItems((prev) => [...prev, item]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/your-background-image.jpg')", // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-8 pb-16 px-2">
        {isBusinessOwner && (
          <div className="mb-8">
            <AddItemForm onItemAdded={handleItemAdded} />
          </div>
        )}
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 drop-shadow-lg tracking-wide">
          EXPLORE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.length === 0 ? (
            <div className="col-span-full text-center text-gray-200 text-lg">No products available.</div>
          ) : (
            items.map((item) => (
              <div
                key={item._id}
                className="flex justify-center items-center"
              >
                <div className="w-full min-h-[300px] max-w-[480px] bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <ShoppingItem item={item} onAddToCart={handleAddToCart} />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-12 bg-white/90 rounded-lg shadow p-6 max-w-xl mx-auto">
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
    </div>
  );
};

export default ShoppingList;