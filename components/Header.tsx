"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

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
  const user = useUser();
  const path = usePathname();
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
      {!user ? (
        <SignInButton mode="modal">
          <Button>Get started</Button>
        </SignInButton>
      ) : (
        <>
          <Link href={"/create-new-trip"}>
            <Button>New trip</Button>
          </Link>
          <Link href={"/my-trips"}>
            <Button>My trips</Button>
          </Link>
          <UserButton />
        </>
      )}
    </div>
  );
};

export default Header;
