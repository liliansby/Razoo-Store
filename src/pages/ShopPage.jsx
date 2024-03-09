import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ShopPage = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <NavBar isWhite={false} />
        <div className="mt-10 flex flex-col items-center">
          <h1>Shop Page</h1>
          <h2>Coming Soon!</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
