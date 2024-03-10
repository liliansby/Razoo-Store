import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-row.png";
import logoWhite from "../assets/logo-row-white.png";
import { CgSearch } from "react-icons/cg";

const NavBar = ({ isWhite }) => {
  return (
    <div
      className={`flex justify-between items-center border-b-[2px]
      ${
        isWhite === true ? "border-white text-white" : "border-black text-black"
      } pb-0  w-[82%] min-h-[80px] mx-auto`}
    >
      <div className="w-1/5">
        <div className="w-[148px]">
          <Link to="/">
            <img src={isWhite === true ? logoWhite : logo} alt="razoo logo" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex space-x-6 justify-self-center tracking-wide text-xl font-[300]">
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
        <ul className="flex justify-end space-x-6 tracking-wide text-xl font-[300]">
          <li className="mt-[2px] text-2xl pr-[11px]">
            <button>
              <CgSearch />
            </button>
          </li>
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
