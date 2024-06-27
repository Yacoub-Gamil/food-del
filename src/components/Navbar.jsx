import { useState } from "react";
import { assets } from "../assets/assets";

function Navbar() {
  const [menu, setMune] = useState("home");

  return (
    <div className=" px-[20px] flex justify-between items-center ">
      <img src={assets.logo} alt="Logo" className="w-[150px]" />
      <ul className=" flex gap-3 text-[#49557e] text-[20px]">
        <li
          onClick={() => setMune("home")}
          className={
            menu === "home" ? " cursor-pointer text-red-300 " : "cursor-pointer"
          }
        >
          Home
        </li>
        <li
          onClick={() => setMune("menu")}
          className={
            menu === "menu" ? "cursor-pointer text-red-300 " : "cursor-pointer "
          }
        >
          Menu
        </li>
        <li
          onClick={() => setMune("mobile")}
          className={
            menu === "mobile"
              ? "cursor-pointer text-red-300 "
              : "cursor-pointer "
          }
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMune("contact")}
          className={
            menu === "contact"
              ? "cursor-pointer text-red-300 "
              : "cursor-pointer "
          }
        >
          Contact us
        </li>
      </ul>

      <div className=" flex gap-9">
        <img src={assets.search_icon} alt="" />
        <div className="">
          <img src={assets.basket_icon} alt="" />
          <div></div>
        </div>
        <button className=" hover:bg-[#fff4f2] duration-200 bg-transparent text-base text-[#49557e] border border-[tomato] py-[10px] px-[30px] rounded-3xl">
          sing in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
