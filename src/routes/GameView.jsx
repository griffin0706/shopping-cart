import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../NavBar";
const GameView = () => {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const existing = products.find((items) => items.id === id);

  return (
    <div className="game-container">
      <div className="game-divider">
        <div className="divider-one">
          <img className="game-image" src={existing.image}></img>
        </div>
        <div className="divider-two">
          <div className="game-title">{existing.name}</div>
          <div className="game-price">₱{existing.price}</div>
          <button
            className="game-cart"
            onClick={() => {
              addToCart(existing);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div>{existing.description}</div>
    </div>
  );
};

export default GameView;
