import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton } from "@clerk/nextjs";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/*  logo */}
      <div className="flex gap-2 items-center">
        <Image src="/logo2.svg" alt="logo" width={30} height={30} />
        <h2 className="text-2xl font-bold">Dukem Travel</h2>
      </div>

      {/* menu */}
      <div className="flex gap-8 items-center">
        {menuOptions.map((option, index) => (
          <Link href={option.path} key={index}>
            <h2 className="text-lg hover:scale-105 transition-all">
              {option.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* get started button */}
      <SignInButton mode="modal">
        <Button>Get started</Button>
      </SignInButton>
    </div>
  );
};

export default Header;
