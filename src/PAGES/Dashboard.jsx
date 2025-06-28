import React, { useState, useEffect } from "react";
import Carousel from "../COMPONENTS/COMMON/Carousel";
import ProductGrid from "../COMPONENTS/ProductGrid";
import axios from "axios";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const carouselItems = items.slice(0, 6);
  const gridItems = items.slice(6);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Explore</h1>
      <Carousel items={carouselItems} onAddToCart={handleAddToCart} />
      {gridItems.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-center">More Products</h2>
          <ProductGrid items={gridItems} onAddToCart={handleAddToCart} />
        </>
      )}
    </div>
  );
};

export default Dashboard;