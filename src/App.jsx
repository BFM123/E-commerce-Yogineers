import React, { useEffect, useState } from "react";
import NavBar from "./COMPONENTS/COMMON/NavBar";
import Carousel from "./COMPONENTS/COMMON/Carousel";
import ProductGrid from "./COMPONENTS/ProductGrid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        const cats = [...new Set(data.map((item) => item.category))];
        setCategories(cats);
      });
  }, []);

  const handleAddToCart = (item, quantity) => {
    toast.success(`Added ${quantity} x ${item.name} to cart!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar categories={categories} />
      <main className="container mx-auto px-4">
        <Carousel items={items.slice(0, 5)} onAddToCart={handleAddToCart} />
        <ProductGrid items={items} onAddToCart={handleAddToCart} />
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;