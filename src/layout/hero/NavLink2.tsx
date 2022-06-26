import React from "react";

interface INavLink2 {
  active?: boolean;
}

const NavLink2: React.FC<INavLink2> = ({ active = false, children }) => {
  return (
    <a
      href="#all"
      className={`uppercase text-black md:capitalize text-[13px] px-[8px] md:px-0 py-[11.2px] md:py-0 flex-shrink-0 ${
        active && "border-b-[3px] border-black"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink2;
