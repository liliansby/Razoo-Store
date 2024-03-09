import React from "react";
import productImg from "../../assets/produc.jpg";

const ProductCard = () => {
  return (
    <div className=" w-[200px] flex flex-col items-center justify-center bg-veryLightGreen text-xs pb-2">
      <img src={productImg} />
      <p>Shampoo</p>
    </div>
  );
};

export default ProductCard;
