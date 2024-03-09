import React from "react";
import ProductCard from "./ProductCard";
import bioImg from "../../assets/characteristicImages/bio.png";
import crueltyFreeImg from "../../assets/characteristicImages/cruelty-free.png";
import noChemicalImg from "../../assets/characteristicImages/noChemical.png";
import sustainableImg from "../../assets/characteristicImages/sustainable.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ProductScreen = () => {
  const scrollToLeft = () => {
    const div = document.getElementById("scrollableProducts");
    div.scrollLeft = div.scrollLeft - 400;
  };

  const scrollToRight = () => {
    const div = document.getElementById("scrollableProducts");
    div.scrollLeft = div.scrollLeft + 400;
  };
  return (
    <div className="h-screen w-screen ">
      <div className="h-1/3 w-full bg-earthyOlive flex flex-col items-center justify-evenly text-white text-2xl">
        <div className=" tracking-wider">ORGANIC FROM THE START</div>
        <div className="flex w-[80%] justify-evenly h-2/5 text-base tracking-wide">
          <div className="flex flex-col items-center justify-between">
            <img src={bioImg} className="h-3/5" />
            <p>recycled materials</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img src={sustainableImg} className="h-3/5" />
            <p>grown organically</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img src={noChemicalImg} className="h-3/5" />
            <p>no sulfates or parabens</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img src={crueltyFreeImg} className="h-3/5" />
            <p>cruelty free</p>
          </div>
        </div>
      </div>
      <div className="h-2/3 bg-slateShadow flex">
        <button
          onClick={scrollToLeft}
          className="w-[7.5%] flex items-center justify-center"
        >
          <SlArrowLeft className="text-2xl text-earthyOlive" />
        </button>

        <div className="w-[85%] h-full  flex flex-col justify-center items-start">
          <p className="text-white">//bestellers</p>

          <div
            className="w-full overflow-scroll scroll-smooth "
            id="scrollableProducts"
          >
            <div
              className="flex w-fit
             justify-center items-center space-x-2 "
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <button
          onClick={scrollToRight}
          className="w-[7.5%] flex items-center justify-center"
        >
          <SlArrowRight className="text-2xl text-earthyOlive" />
        </button>
      </div>{" "}
    </div>
  );
};

export default ProductScreen;
