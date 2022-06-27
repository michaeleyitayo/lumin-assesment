import React from "react";
import backgroundImage from "../../assets/images/Lumin158.webp";
import NavLink from "./NavLink";
import smst from "../../assets/icons/smst.svg";
import NavLink2 from "./NavLink2";

const Hero: React.FC = () => {
  return (
    <div className="992:px-[40px]">
      <div className="992:py-[32px] hidden 992:flex gap-[10px] text-[16px]">
        <p>
          <strong>Home</strong>
        </p>
        <img src={smst} alt="" />
        <p>All Products</p>
      </div>
      <div
        className="h-[352px] w-full bg-center bg-cover flex flex-col items-center justify-center text-center text-white px-[40px] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[67.09px] bg-primary py-[12px] pl-[16px] flex items-center 992:hidden">
          <nav className="w-full flex gap-[40px] md:gap-[60px] overflow-x-auto">
            <NavLink active={true}>all</NavLink>
            <NavLink>best sellers 🎉</NavLink>
            <NavLink>face</NavLink>
            <NavLink>hair & body</NavLink>
            <NavLink>bundles</NavLink>
            <NavLink>accessories</NavLink>
          </nav>
        </div>
        <div>
          <h1 className=" font-serif text-[28px] font-extralight leading-[1em] 992:text-[48px]">
            New to Skincare?
          </h1>
          <p className="mt-[8px] text-[14px] 992:text-[20px]">
            Unlock your personalized skincare routine today.
          </p>
          <a
            href="#shop"
            type="button"
            className="mt-[32px] inline-flex justify-center items-center bg-white uppercase text-black text-[16px] w-[200px] h-[42px]"
          >
            start shopping
          </a>
        </div>
      </div>
      <div className="w-full h-[67.09px] py-[12px] items-center hidden 992:flex">
        <nav className="w-full flex gap-[40px] md:gap-[60px] overflow-x-auto">
          <NavLink2 active={true}>all</NavLink2>
          <NavLink2>best sellers 🎉</NavLink2>
          <NavLink2>face</NavLink2>
          <NavLink2>hair & body</NavLink2>
          <NavLink2>bundles</NavLink2>
          <NavLink2>accessories</NavLink2>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
