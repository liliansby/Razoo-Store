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
              text="This hair serum worked wonders! Silky-smooth locks with just a few drops. Love it!"
              name="Olivia Bennett"
              image={img1}
            />
            <ReviewCard
              text="I've struggled with frizzy hair for years until I found this smoothing cream. It's like magic in a bottle! It controls frizz even in humid weather, leaving my hair sleek and manageable. Plus, it doesn't weigh down my curls."
              name="Mason Carter"
              image={img3}
            />
            <ReviewCard
              text="As someone with sensitive scalp, finding a shampoo that soothes without stripping natural oils is a challenge. This one is a gem. Gentle yet effective."
              name="Isabella Thompson"
              image={img2}
            />

            <ReviewCard
              text="I have curly hair and this conditioner is a game-changer. Defines my curls without leaving them crunchy. Bye-bye frizz!"
              name="Elijah Rodriguez"
              image={img4}
            />
            <ReviewCard
              text="Life-changing! This leave-in conditioner saved my damaged hair. It's lightweight, non-greasy, and adds the perfect amount of hydration. Highly recommend!"
              name="Liam Anderson"
              image={img5}
            />
            <ReviewCard
              text="Finally found a product that tames my unruly hair! This styling gel provides long-lasting hold without stiffness. Plus, it smells fantastic. Highly recommend!"
              name="Ava Wright"
              image={img6}
            />
            <ReviewCard
              text="Five stars! This shampoo gave my hair incredible volume and shine. Plus, it smells amazing. My new go-to for sure!"
              name="Noah Martinez"
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
