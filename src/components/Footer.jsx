import React, { useState } from "react";
import logoWhite from "../assets/logo-row-white.png";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  const [email, setEmail] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    window.alert(`Email ${email} was subscribed`);
    setEmail("");
  };

  return (
    <div className="bg-slateShadow ">
      <div className="py-[93px] flex justify-center tracking-widest text-base text-white">
        <div className="">
          <div className="mb-5 ml-[-10px] mt-[-17px]">
            <Link to="/">
              <img src={logoWhite} alt="razoo logo" className="w-[160px]" />
            </Link>
          </div>
          <div>
            <ul className="space-y-1 flex flex-col">
              <li className="cursor-pointer hover:underline underline-offset-[3px] py-[3px] w-fit">
                <Link to="/">HOME</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[3px] py-[3px]">
                <Link to="/shop">SHOP</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[3px] py-[3px]">
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[3px] py-[3px]">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4 flex flex-col items-center justify-between mb-[-50px]">
          <form
            className="flex flex-col items-center"
            onSubmit={(event) => formSubmit(event)}
          >
            <p className="font-[400] text-lg pb-3" htmlFor="">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <input
              className="text-sm bg-slateShadow border-[1px] h-8 w-72 pl-3 placeholder-white"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            <button
              className=" font-[300] bg-earthyOlive px-8 py-[5px] mt-3 mb-3 text-base tracking-wide"
              type="submit"
            >
              SUBMIT
            </button>
            <div className="flex items-center">
              <input
                className="mr-3 h-4 w-4 appearance-none rounded-sm border checked:bg-mossySage"
                id="accept-terms"
                type="checkbox"
                required
              />
              <label
                className="font-[200] text-[12px] text-sm"
                htmlFor="accept-terms"
              >
                I accept the terms & conditions of this subscription
              </label>
            </div>
          </form>
          <p className="font-[200] text-xs">copyright © 2024 Razoo.com</p>
        </div>
        <div>
          <div className="font-[400] pb-4 text-lg">CONTACT</div>
          <div className="space-y-1">
            <p className="cursor-pointer hover:underline underline-offset-[3px] py-[1px] font-[200] text-base pb-2">
              +358 488 382709
            </p>
            <p className="cursor-pointer hover:underline underline-offset-[3px] py-[1px] font-[200] text-base  pb-2">
              razoo@gmail.com
            </p>
            <p className="py-[1px] font-[200] text-base  pb-4">FOLLOW US</p>
          </div>
          <ul className="flex items-start space-x-3">
            <li>
              <SlSocialFacebook className="text-white text-base  " />
            </li>
            <li>
              <SlSocialTwitter className="text-white text-base  " />
            </li>
            <li>
              <SlSocialInstagram className="text-white text-base  " />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
