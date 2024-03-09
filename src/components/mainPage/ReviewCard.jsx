import React from "react";

const ReviewCard = ({ image, text, name }) => {
  return (
    <div className="border-2 border-earthyOlive w-[440px] h-[280px] flex items-center">
      <div className="flex flex-col items-center justify-between h-[80%] text-sm mx-6">
        <div className="flex flex-col items-center text-center ">
          <img src={image} className="w-24 rounded-full" />
          <p className="mt-2 ">{text}</p>
        </div>
        <p className="">&copy; {name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
