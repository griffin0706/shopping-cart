import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCartPlus } from "@mdi/js";
import { motion } from "framer-motion";

const Browse = () => {
  const [storage, setStorage] = useState(() => {
    const data = window.localStorage.getItem("GAME_STORAGE");
    const initialValue = JSON.parse(data);
    return initialValue || "";
  });
  const [cartItem, setCartItem] = useState(() => {
    const data = window.localStorage.getItem("CART");
    const initialValue = JSON.parse(data);
    return initialValue || "";
  });

  useEffect(() => {
    window.localStorage.setItem("CART", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    };
    const existing = cartItem.find((items) => items.id === item.id);
    if (existing) {
      const updatedCart = cartItem.map((items) =>
        items.id === item.id
          ? { ...items, quantity: items.quantity + 1 }
          : items
      );
      setCartItem(updatedCart);
    } else {
      setCartItem((prev) => [...prev, newItem]);
    }
  };

  if (!storage) {
    return <div>Error</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="browse-container"
    >
      {storage.map((game) => {
        return (
          <div key={game.id} className="item-container">
            <img className="browse-image" src={game.image}></img>
            <div className="item-description">
              <div className="name-cart">
                <div className="bold">{game.name}</div>
                <button onClick={() => addToCart(game)}>
                  <Icon path={mdiCartPlus} size={0.8} />
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
