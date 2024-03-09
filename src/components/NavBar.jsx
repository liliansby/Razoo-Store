import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-row.png";
import logoWhite from "../assets/logo-row-white.png";

const NavBar = ({ isWhite }) => {
  return (
    <div
      className={`flex justify-between items-center border-b-[1.25px]
      ${
        isWhite === true ? "border-white text-white" : "border-black text-black"
      } pb-0  w-[82%] min-h-[80px] mx-auto`}
    >
      <div className="w-1/5">
        <div className="w-[64%]">
          <Link to="/">
            <img src={isWhite === true ? logoWhite : logo} alt="razoo logo" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex space-x-4 justify-self-center tracking-wide">
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/">HOME</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className=" w-1/5">
        <ul className="flex justify-end space-x-4 tracking-wide">
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/login">LOGIN</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[3px]">
            <Link to="/cart">CART</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
