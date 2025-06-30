import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import EnhancedImage from "./EnhancedImage";

const ProductGrid = ({ items = []}) => {
  const { addToCart } = useCart();

    // Store quantity for each item by id
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(q => ({
      ...q,
      [id]: Math.max(1, value)
    }));
  };


  return (
    <div className="w-full px-4 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => {
          return (
            <div
              key={item._id}
              className="group bg-[#a5d8f0] backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 mx-2 flex flex-col"
            >
               {/* Enhanced Image Container */}
              <div className="relative overflow-hidden w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <EnhancedImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
                  containerClassName="w-full h-full flex items-center justify-center"
                  showLoader={true}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </div>
                {/* Discount Badge */}
                {item.originalPrice && item.originalPrice > item.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Quantity and Add to Cart */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, (quantities[item._id] || 1) - 1)
                      }
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantities[item._id] || 1}
                      onChange={e =>
                        handleQuantityChange(item._id, parseInt(e.target.value) || 1)
                      }
                      className="w-16 px-2 py-2 text-center border-0 focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, (quantities[item._id] || 1) + 1)
                      }
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(item, quantities[item._id] || 1)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
                {/* Old Price (if discounted) */}
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                )}
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;