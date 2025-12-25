import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/api/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center px-[50px] py-2 bg-[#f1f1f1] shadow-transparent rounded-[15px]">
      <img
        src={LOGO_URL}
        alt="Food App Logo"
        className="w-[180px] h-[90px] sm:w-[220px] sm:h-[110px] md:w-[260px] md:h-[130px] object-contain"
      />

      <ul className="flex items-center gap-[35px] text-[18px] list-none p-0 m-0">
        <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>{" "}
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        <button
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
          className="px-6 py-2 border rounded hover:bg-orange-500 hover:text-white"
        >
          {btnNameReact}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
    </header>
  );
};

export default Header;
