import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/COMMON/Navbar";
import Carousel from "./COMPONENTS/COMMON/Carousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductGrid from "./COMPONENTS/ProductGrid";
import CartPage from "./PAGES/CartPage";

function App() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered(items);
    } else {
      setFiltered(
        items.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
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
      <Navbar onSearch={handleSearch} />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="w-full bg-gradient-to-br from-gray-900 to-blue-900 pb-12">
                <Carousel items={filtered} />
              </section>
              <section className="w-full">
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
                <ProductGrid items={filtered} />
              </section>
            </>
          }
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;