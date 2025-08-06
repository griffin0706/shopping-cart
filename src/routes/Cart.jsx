import React from "react";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../NavBar";

const Cart = () => {
  const { cartItems, deleteItem } = useContext(ShopContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cart-container"
    >
      {cartItems.length > 0 ? (
        <>
          <div className="cart-holder">
            {cartItems.map((cart) => {
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
                {cartItems.reduce((total, item) => {
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
                {cartItems.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)}
              </div>
            </div>

            <button className="checkoutBtn">Checkout</button>
          </div>
        </>
      ) : (
        <div className="no-items">No Items in cart.</div>
      )}
    </motion.div>
  );
};

export default Cart;
