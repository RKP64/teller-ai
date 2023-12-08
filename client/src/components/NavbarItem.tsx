import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="transition cursor-pointer text-[#EEF2E6] hover:text-[#57b688] duration-200">
      {label}
    </div>
  );
};

export default NavbarItem;
