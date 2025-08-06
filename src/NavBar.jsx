import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";

const NavBar = () => {
  // const [cartItem, setCartItem] = useState(() => {
  //   const data = window.localStorage.getItem("CART");
  //   const initialValue = JSON.parse(data);
  //   return initialValue || "";
  // });

  return (
    <>
      <nav className="main-navigation">
        <ul>
          <Link to="/">GRIFFIN STORE</Link>
          <Link to="/browse">Browse</Link>
        </ul>
        <div className="cart-count">
          <Link to="Cart">Cart</Link>
          {/* <div className="count">
            {cartItem.length > 0 ? cartItem.length : 0}
          </div> */}
        </div>
      </nav>
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
