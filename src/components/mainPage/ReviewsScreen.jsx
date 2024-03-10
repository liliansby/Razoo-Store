import React from "react";
import ReviewCard from "./ReviewCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import img1 from "../../assets/reviewImages/reviewImage1.png";
import img2 from "../../assets/reviewImages/reviewImage2.png";
import img3 from "../../assets/reviewImages/reviewImage3.png";
import img4 from "../../assets/reviewImages/reviewImage4.png";
import img5 from "../../assets/reviewImages/reviewImage5.png";
import img6 from "../../assets/reviewImages/reviewImage6.png";
import img7 from "../../assets/reviewImages/reviewImage7.png";

const ReviewsScreen = () => {
  const scrollToLeft = () => {
    const div = document.getElementById("scrollableReviews");
    div.scrollLeft = div.scrollLeft - 400;
  };

  const scrollToRight = () => {
    const div = document.getElementById("scrollableReviews");
    div.scrollLeft = div.scrollLeft + 400;
  };
  return (
    <div className="bg-mossySage h-[400px] flex">
      <button
        onClick={scrollToLeft}
        className="w-[7.5%] flex items-center justify-center"
      >
        <SlArrowLeft className="text-2xl text-slateShadow" />
      </button>
      <div className="w-[85%] h-full  flex flex-col justify-center items-start">
        <p className="text-white text-lg">//reviews</p>
        <div
          className="w-full overflow-scroll scroll-smooth "
          id="scrollableReviews"
        >
          <div className="flex w-fit justify-center items-center space-x-2 ">
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img1}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img2}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img3}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img4}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img5}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img6}
            />
            <ReviewCard
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, adipisci. "
              name="name"
              image={img7}
            />
          </div>
        </div>
      </div>
      <button
        onClick={scrollToRight}
        className="w-[7.5%] flex items-center justify-center"
      >
        <SlArrowRight className="text-2xl text-slateShadow" />
      </button>
    </div>
  );
};

export default ReviewsScreen;
