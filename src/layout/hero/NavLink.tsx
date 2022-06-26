import React from "react";

interface INavLink {
  active?: boolean;
}

const NavLink: React.FC<INavLink> = ({ active = false, children }) => {
  return (
    <a
      href="#all"
      className={`text-white uppercase md:capitalize text-[13px] px-[8px] md:px-0 py-[11.2px] md:py-0 flex-shrink-0 ${
        active && "border-b-[3px] border-white"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
