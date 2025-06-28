import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ items = [], onAddToCart }) => (
  <div className="w-full pt-24 mb-8">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item._id}>
          <Card item={item} onAddToCart={onAddToCart} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// Extracted Card component with quantity logic
const Card = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 p-4 flex flex-col">
      <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full object-contain"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="mt-1 text-blue-600 font-bold">${item.price}</p>
      <div className="mt-3 flex items-center space-x-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
        />
        <button
          onClick={() => onAddToCart(item, quantity)}
          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Carousel;