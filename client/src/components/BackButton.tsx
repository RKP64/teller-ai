"use client";

import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";

interface BackButtonProps {
  link: string;
}

const BackButton = ({ link }: BackButtonProps) => {
  return (
    <Link href={link}>
      <IoReturnUpBackOutline className="h-16 w-16 text-primaryColor shadow-lg drop-shadow-lg cursor-pointer z-30 absolute top-3 left-5" />
    </Link>
  );
};

export default BackButton;
