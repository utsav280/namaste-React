import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { LOGO_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import React from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-300 to-orange-500 text-white shadow-lg border-b-4 border-orange-600">
      <div className="logo-container flex-shrink-0">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
          <img
            className="w-20 h-20 object-contain rounded-full"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="nav-items">
        <ul className="flex gap-4 space-x-6 text-lg font-semibold">
          <li className="flex items-center">
            <span className="mr-2">Online Status:</span>
            <span className={onlineStatus ? "text-green-400" : "text-red-400"}>
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li className="flex items-center">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/cart"
              className="hover:text-gray-300 transition duration-300"
            >
              Cart ({cartItems.length})
            </Link>
          </li>
          <li className="flex items-center">
            <button
              className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                setBtnNameReact(btnNameReact === "LogIn" ? "LogOut" : "LogIn");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="flex items-center">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
