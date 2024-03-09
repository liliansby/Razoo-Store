import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-screen h-screen">
        <NavBar isWhite={false} />
        <div className="mt-10 flex flex-col items-center">
          <h1>Login Page</h1>
          <h2>Coming Soon!</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
