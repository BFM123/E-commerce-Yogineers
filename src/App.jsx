import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/COMMON/Navbar";
import ShoppingList from "./PAGES/ShoppingList";

function App() {
  const [isBusinessOwner, setIsBusinessOwner] = useState(false);

  return (
    <Router>
      <Navbar />
      <div className="bg-gradient-to-b from-[#e3f6fc] to-[#b6e0f7] min-h-screen pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <button
              className={`mr-4 px-6 py-2 rounded-full font-semibold shadow transition 
                ${isBusinessOwner ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"}`}
              onClick={() => setIsBusinessOwner(true)}
            >
              Business Owner View
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold shadow transition 
                ${!isBusinessOwner ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"}`}
              onClick={() => setIsBusinessOwner(false)}
            >
              Customer View
            </button>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6">
            <Routes>
              <Route
                path="/"
                element={<ShoppingList isBusinessOwner={isBusinessOwner} />}
              />
              <Route
                path="/shop"
                element={<ShoppingList isBusinessOwner={isBusinessOwner} />}
              />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;