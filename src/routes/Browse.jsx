import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../NavBar";
const Browse = () => {
  const { addToCart } = useContext(ShopContext);
  const { products } = useContext(ShopContext);

  if (!products) {
    return <div>No available products.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="browse-container"
    >
      {products.map((game) => {
        return (
          <div key={game.id} className="item-container">
            <img className="browse-image" src={game.image}></img>
            <div className="item-description">
              <div className="name-cart">
                <div className="bold">{game.name}</div>
                <button className="cartBtn" onClick={() => addToCart(game)}>
                  Add to cart
                </button>
              </div>
              <div>₱ {game.price}</div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Browse;
