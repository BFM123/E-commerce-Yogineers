import React, { useEffect, useState } from "react";
import Navbar from "./COMPONENTS/COMMON/Navbar";
import Carousel, { Card } from "./COMPONENTS/COMMON/Carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./CONTEXT/CartContext";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (item, quantity) => {
    toast.success(`${quantity} × ${item.name} added to cart!`);
    // You can add actual cart logic here if desired
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ToastContainer />
      <main className="max-w-7xl mx-auto px-4">
        <Carousel items={items} onAddToCart={handleAddToCart} />
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          Explore More Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {items.map((item) => (
            <Card key={item._id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;