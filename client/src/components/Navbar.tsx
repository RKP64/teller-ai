"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";

export default function BarberMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Stories", link: "/stories" },
    { name: "Categories", link: "/categories" },
    { name: "About Us", link: "#steps" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      id="nav-menu"
      className="text-white bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="hover:bg-none hover:opacity-1">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={i}>
            <Link
              color="foreground"
              href={item.link}
              className="text-white hover:border-solid hover:border-b hover:border-primaryColor transition-all duration-300 font-dmsans">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="/create"
            className="flex items-center rounded-full border-2 border-solid border-gray-500 px-4 py-2 text-[#fff] text-sm hover:bg-white hover:text-black cursor-pointer transition duration-500">
            <IoAdd className="mr-1" /> Create a story
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
