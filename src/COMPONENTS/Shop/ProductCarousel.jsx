import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShoppingItem from "./ShoppingItem";

const ProductCarousel = ({ items, onAddToCart }) => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
    interval={5000}
    className="rounded-xl shadow-lg bg-white"
    renderIndicator={(onClickHandler, isSelected, index, label) => (
      <li
        className={`inline-block mx-1 w-3 h-3 rounded-full ${isSelected ? "bg-blue-600" : "bg-gray-300"}`}
        onClick={onClickHandler}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    )}
  >
    {items.map((item) => (
      <div key={item._id} className="flex justify-center py-8">
        <div className="w-full max-w-md">
          <ShoppingItem item={item} onAddToCart={onAddToCart} />
        </div>
      </div>
    ))}
  </Carousel>
);

export default ProductCarousel;