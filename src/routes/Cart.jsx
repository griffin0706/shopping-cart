import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Cart = () => {
  const [storage, setStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState(() => {
    const data = window.localStorage.getItem("CART");
    const initialValue = JSON.parse(data);
    return initialValue || "";
  });

  useEffect(() => {
    window.localStorage.setItem("CART", JSON.stringify(cartItem));
  }, [cartItem]);

  const deleteItem = (id) => {
    const updated = cartItem.filter((item) => item.id !== id);
    setCartItem(updated);
  };

  if (!storage) {
    return <div>Error</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cart-container"
    >
      {cartItem.length > 0 ? (
        <>
          <div className="cart-holder">
            {cartItem.map((cart) => {
              return (
                <div className="cart-item-container" key={cart.id}>
                  <img className="cart-image" src={cart.image}></img>
                  <div className="cart-item-text">
                    <div className="item-text">{cart.name}</div>
                    <div className="item-text">₱{cart.price}</div>
                    <div className="item-text">Qty: {cart.quantity}</div>
                  </div>
                  <button
                    className="cartBtn"
                    onClick={() => deleteItem(cart.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cart-total">
            <div className="cart-title">Cart Total</div>
            <div className="cart-total-item">
              <div>Price</div>
              <div>
                ₱
                {cartItem.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)}
              </div>
            </div>
            <div className="cart-total-item">
              <div>Tax</div>
              <div>₱0</div>
            </div>
            <div className="cart-total-item border-top">
              <div className="subtotal">Subtotal</div>
              <div className="subtotal">
                ₱
                {cartItem.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)}
              </div>
            </div>

            <button className="checkoutBtn">Checkout</button>
          </div>
        </>
      ) : (
        <div class="no-items">No Items in cart.</div>
      )}
    </motion.div>
  );
};

export default Cart;
