import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import bottleImg from "../../assets/mainPageProductImg.png";
import { HiArrowLongRight } from "react-icons/hi2";

const HomeScreen = () => {
  return (
    <div className="bg-mainPageBg w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-white overflow-scroll">
      <NavBar isWhite={true} />
      <div className="relative text-5xl h-full w-full flex justify-center items-center text-center flex-col overflow-hidden">
        <img
          className="absolute rotate-10 top-[21%] mb-2 w-[400px]"
          src={bottleImg}
          alt="picture of shampoo bottle"
        />
        <div className="absolute top-[15%] flex flex-col items-end">
          <div>
            <p className="font-poppins font-[200] text-sm mb-2 tracking-[0.05em]">
              100% organic
            </p>
            <p className="font-garamond text-[60px] mb-1">WITHOUT</p>
            <p className="font-sulfates tracking-[0.05em] text-[58px] ">
              SULFATES AND PARABENS
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center border-[1.1px] w-[140px] h-[23px] text-xs tracking-wide ml-[160px]">
              <Link
                to="/shop"
                className="py-2 px-4 flex items-center justify-center"
              >
                shop now <HiArrowLongRight className="ml-1 text-xl" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
