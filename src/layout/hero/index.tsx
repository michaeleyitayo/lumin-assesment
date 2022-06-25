import React from "react";
import backgroundImage from "../../assets/images/Lumin158.webp";

const Hero: React.FC = () => {
  return (
    <div
      className="h-[352px] w-full bg-center bg-cover flex flex-col items-center justify-center text-center text-white px-[40px] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[67.09px] bg-primary py-[12px] pl-[16px] flex items-center">
        <nav className="w-full flex gap-[40px] overflow-x-auto">
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0 border-b-[3px] border-white"
          >
            all
          </a>
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0"
          >
            best sellers 🎉
          </a>
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0"
          >
            face
          </a>
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0"
          >
            hair & body
          </a>
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0"
          >
            bundles
          </a>
          <a
            href="#all"
            className="text-white uppercase text-[13px] px-[8px] py-[11.2px] flex-shrink-0"
          >
            accessories
          </a>
        </nav>
      </div>
      <div>
        <h1 className=" font-serif text-[28px] font-extralight leading-[1em]">
          New to Skincare?
        </h1>
        <p className="mt-[8px] text-[14px] fon">
          Unlock your personalized skincare routine today.
        </p>
        <button
          type="button"
          className="mt-[32px] bg-white uppercase text-black text-[16px] w-[200px] h-[42px] font-bold"
        >
          start shopping
        </button>
      </div>
    </div>
  );
};

export default Hero;
