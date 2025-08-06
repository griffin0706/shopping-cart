import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../NavBar";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const { products, addToCart } = useContext(ShopContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [slideToggle, setSlideToggle] = useState(false);
  const navigate = useNavigate();

  const changeImage = (index) => {
    setSlideToggle(true);
    setCurrentImage(index);

    setTimeout(() => {
      setSlideToggle(false);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="discover-container"
    >
      <div className={slideToggle ? "image-slider slide-in" : "image-slider"}>
        <img src={products[currentImage].image} className="image" />
        <div className="image-description">
          <div>{products[currentImage].name}</div>
          <div>{products[currentImage].description}</div>
          <div>₱{products[currentImage].price}</div>
          <div className="image-button-container">
            <button
              onClick={() => navigate(`/game/${products[currentImage].id}`)}
            >
              View
            </button>
          </div>
        </div>
      </div>
      <div className="image-label">
        {products.slice(0, 6).map((img, index) => {
          return (
            <button key={img.id} onClick={() => changeImage(index)}>
              {img.name}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Discover;
