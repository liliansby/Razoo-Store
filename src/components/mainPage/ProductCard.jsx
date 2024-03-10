import React from "react";
import A0 from "../../assets/productImages/0.png";
import A1 from "../../assets/productImages/1.png";
import A2 from "../../assets/productImages/2.png";
import A3 from "../../assets/productImages/3.png";
import A4 from "../../assets/productImages/4.png";
import A5 from "../../assets/productImages/5.png";
import A6 from "../../assets/productImages/6.png";
import A7 from "../../assets/productImages/7.png";
import A8 from "../../assets/productImages/8.png";
import A9 from "../../assets/productImages/9.png";
import A10 from "../../assets/productImages/10.png";
import A11 from "../../assets/productImages/11.png";
import A12 from "../../assets/productImages/12.png";
import A13 from "../../assets/productImages/13.png";
import A14 from "../../assets/productImages/14.png";
import A15 from "../../assets/productImages/15.png";

const ProductCard = ({ name, id }) => {
  const imageMap = {
    0: A0,
    1: A1,
    2: A2,
    3: A3,
    4: A4,
    5: A5,
    6: A6,
    7: A7,
    8: A8,
    9: A9,
    10: A10,
    11: A11,
    12: A12,
    13: A13,
    14: A14,
    15: A15,
  };

  const imagePath = imageMap[id];

  return (
    <div className=" w-[300px] flex flex-col items-center justify-center bg-veryLightGreen text-xs pb-2">
      <img src={imagePath} className="py-2" />
      <p>€ {name}</p>
    </div>
  );
};

export default ProductCard;
