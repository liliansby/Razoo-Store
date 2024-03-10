import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    window.alert(`Your subject '${subject}' was succesfully sent`);
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div className="bg-contactPageBg flex flex-col items-center w-screen h-screen bg-cover bg-top bg-no-repeat space-y-[140px]">
        <NavBar isWhite={true} />
        <div className="text-white w-[75%] h-[100%] flex flex-col items-start">
          <div className=" flex items-center justify-between h-full w-full">
            <div className=" w-[50%] h-full">
              <form
                className="text-black flex flex-col h-full  text-xl"
                onSubmit={(event) => {
                  formSubmit(event);
                }}
              >
                <p className="my-1 text-3xl text-white font-[400]">Email Us</p>
                <input
                  className="pl-3 py-1 mb-[11px] text-lg placeholder-black bg-white opacity-[.58]"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="pl-3 py-1 mb-[11px] text-lg placeholder-black bg-white opacity-[.58]"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="pl-3 py-1 mb-[11px] text-lg placeholder-black bg-white opacity-[.58]"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <textarea
                  className=" bg-white opacity-[.58] pl-3 text-lg placeholder-black py-1"
                  // style={{ minHeight: "100%" }
                  placeholder="Message"
                  type="text"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div>
                  <button
                    className="bg-mossySage px-12 py-1.5 mt-3 text-lg text-white font-[400]"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-4  w-[45%] h-full">
              <div>
                <p className="text-3xl my-1 font-[400]">Contact Info</p>
                <div className="bg-white opacity-[.58] py-4 pl-3 text-black text-lg">
                  <p className="pb-2">+358 699 5948302</p>
                  <ul className="flex items-start space-x-2">
                    <li>
                      <SlSocialFacebook className="text-black text-lg " />
                    </li>
                    <li>
                      <SlSocialTwitter className="text-black text-lg " />
                    </li>
                    <li>
                      <SlSocialInstagram className="text-black text-lg " />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-3xl pb-1 mt-[1.5px] font-[400]">
                  Store Hours
                </p>
                <div className="py-3 h-min bg-white opacity-[.58] pl-3 text-black text-lg">
                  <p>Nameofthestreet 45B 00389,</p>
                  <p className="pb-[10px]">Helsinki</p>
                  <p>Mon-Fri 9:00-20:00</p>
                  <p>Sat 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
