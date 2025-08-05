import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { games } from "../storage";

const Discover = () => {
  const [storage, setStorage] = useState(games);
  const [currentImage, setCurrentImage] = useState(0);
  const [slideToggle, setSlideToggle] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("GAME_STORAGE", JSON.stringify(storage));
  }, [storage]);

  useEffect(() => {
    const data = window.localStorage.getItem("GAME_STORAGE");
    setStorage(JSON.parse(data));
  }, []);

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
        <img src={storage[currentImage].image} className="image" />
        <div className="image-description">
          <div>{storage[currentImage].name}</div>
          <div>{storage[currentImage].description}</div>
          <div>₱{storage[currentImage].price}</div>
          {/* <div className="image-button-container">
            <button>Add to Cart</button>
          </div> */}
        </div>
      </div>
      <div className="image-label">
        {storage.slice(0, 6).map((img, index) => {
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
