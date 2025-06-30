import React, { useEffect, useState } from "react";
import Navbar from "./COMPONENTS/COMMON/Navbar";
import Carousel, { Card } from "./COMPONENTS/COMMON/Carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./CONTEXT/CartContext";
import ProductGrid from "./COMPONENTS/ProductGrid";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (item, quantity) => {
    toast.success(`${quantity} × ${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        borderRadius: "12px",
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ToastContainer />
      
      {/* Hero/Carousel Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 to-blue-900 pb-12">
        <Carousel items={items} onAddToCart={handleAddToCart} />
      </section>

      {/* Products Section */}
      <section className="w-full">
        {/* Section Header */}
        <div className="w-full px-0 pt-16 pb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover premium products carefully curated for quality and style
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid items={items} onAddToCart={handleAddToCart} />
      </section>
    </div>
  );
}

export default App;