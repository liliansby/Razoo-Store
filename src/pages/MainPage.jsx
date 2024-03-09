import React from "react";
import HomeScreen from "../components/mainPage/HomeScreen";
import ProductScreen from "../components/mainPage/ProductScreen";
import ReviewsScreen from "../components/mainPage/ReviewsScreen";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <HomeScreen />
      <ProductScreen />
      <ReviewsScreen />
      <Footer />
    </div>
  );
};

export default MainPage;
