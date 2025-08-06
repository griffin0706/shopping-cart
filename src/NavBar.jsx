import { createContext, useState, useContext } from "react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { games } from "./storage";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  deleteItem: () => {},
});

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = games;
  const addToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    };
    const existing = cartItems.find((items) => items.id === item.id);
    if (existing) {
      const updatedCart = cartItems.map((items) =>
        items.id === item.id
          ? { ...items, quantity: items.quantity + 1 }
          : items
      );
      setCartItems(updatedCart);
    } else {
      setCartItems((prev) => [...prev, newItem]);
    }
  };
  const deleteItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  return (
    <>
      <ShopContext.Provider
        value={{ cartItems, products, addToCart, deleteItem }}
      >
        <nav className="main-navigation">
          <ul>
            <Link to="/">GRIFFIN STORE</Link>
            <Link to="/browse">Browse</Link>
          </ul>
          <div className="cart-count">
            <Link to="Cart">Cart</Link>
            <div className="count">
              {cartItems.length > 0 ? cartItems.length : 0}
            </div>
          </div>
        </nav>
        <div className="main-container">
          <Outlet />
        </div>
      </ShopContext.Provider>
    </>
  );
};

export default NavBar;
