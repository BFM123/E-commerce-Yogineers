import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import EnhancedImage from "../EnhancedImage";
import { useCart } from "../../CONTEXT/cartContext";


export const Card = ({ item = []}) => {
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
    <div className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 mx-2">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-0">
          <EnhancedImage
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
            containerClassName="w-full h-full flex items-center justify-center"
            showLoader={true}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        {/* Price */}
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
        {/*<div className="flex items-center space-x-3 mb-2">
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
        </div>*/}
      </div>
    </div>
  );
};

const Carousel = ({ items = [], AddToCart }) => (
  <div className="w-full relative">
    {/* Background with gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
    <div className="absolute inset-0 bg-black/30"></div>
    
    {/* Content */}
    <div className="relative z-10 pt-32 pb-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Products
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover our handpicked collection of premium products
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Swiper Container */}
      <div className="px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              effect: "slide",
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              effect: "slide",
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              effect: "coverflow",
              centeredSlides: true,
            },
          }}
          className="pb-16"
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <Card item={item} AddToCart={AddToCart} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full cursor-pointer transition-all duration-300 group">
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full cursor-pointer transition-all duration-300 group">
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center space-x-2 mt-8"></div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

    <style jsx>{`
      .swiper-pagination-bullet-custom {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .swiper-pagination-bullet-active-custom {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        transform: scale(1.2);
      }
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default Carousel;