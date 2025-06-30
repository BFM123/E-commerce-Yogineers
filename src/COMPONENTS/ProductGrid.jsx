import React from "react";
import EnhancedImage from "./EnhancedImage";

const ProductGrid = ({ items = [], onAddToCart }) => (
  <div className="w-full px-4 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item) => (
        <div
          key={item._id}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 overflow-hidden transform hover:-translate-y-2"
        >
          {/* Enhanced Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-72">
            <EnhancedImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button
              onClick={() => onAddToCart(item, 1)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:scale-110"
              title="Quick Add to Cart"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32a1 1 0 001.83.8l.85-2.12m0 0h10m-10 0a2 2 0 104 0m6 0a2 2 0 104 0" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg backdrop-blur-sm">
              ${item.price}
            </div>
            {item.originalPrice && item.originalPrice > item.price && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
              {item.description}
            </p>
            <div className="mb-4">
              {item.originalPrice && item.originalPrice > item.price ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                  <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-blue-600">${item.price}</span>
              )}
            </div>
            <button
              onClick={() => onAddToCart(item, 1)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32a1 1 0 001.83.8l.85-2.12m0 0h10m-10 0a2 2 0 104 0m6 0a2 2 0 104 0" />
                </svg>
                Add to Cart
              </span>
            </button>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGrid;