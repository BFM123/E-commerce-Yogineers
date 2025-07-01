import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingItem from "../COMPONENTS/Shop/ShoppingItem";
import AddItemForm from "../COMPONENTS/Shop/AddItemForm";
import { useCart } from "../context/CartContext";

const ShoppingList = ({ isBusinessOwner }) => {
  const [items, setItems] = useState([]);
  const { cart, addToCart } = useCart();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFilter = params.get("category");
  const subcategoryFilter = params.get("subcategory");

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  const filteredItems = items.filter((item) => {
    if (!categoryFilter) return true;
    if (subcategoryFilter)
      return (
        item.category === categoryFilter &&
        item.subcategory === subcategoryFilter
      );
    return item.category === categoryFilter;
  });

  const handleItemAdded = (item) => setItems((prev) => [...prev, item]);

  return (
    <div className="w-full bg-gray-100 p-4 pt-28">
      {isBusinessOwner && (
        <div className="mb-8">
          <AddItemForm onItemAdded={handleItemAdded} />
        </div>
      )}
      <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide">
        {categoryFilter
          ? `Category: ${categoryFilter}${subcategoryFilter ? ` > ${subcategoryFilter}` : ""}`
          : "Shop Our Products"}
      </h2>

      <div
        className="grid gap-4 w-full"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center text-gray-600">
            No products available.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="w-full bg-white rounded-2xl shadow-xl flex items-center justify-center min-h-[300px]"
            >
              <ShoppingItem item={item} onAddToCart={addToCart} />
            </div>
          ))
        )}
      </div>
      <div className="mt-12 bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">Cart Summary</h2>
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
        <div className="mt-4 text-center">
          <Link
            to="/cart"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Full Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;