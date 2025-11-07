"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { PlusCircle, MapIcon } from "lucide-react";

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
  const { user } = useUser();
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo2.svg" 
                alt="Dukem Travel Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold bg-primary bg-clip-text text-transparent">
              Dukem Travel
            </h2>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuOptions.map((option) => (
              <Link href={option.path} key={option.path}>
                <Button
                  variant={path === option.path ? "secondary" : "ghost"}
                  className={`text-sm font-medium transition-colors ${
                    path === option.path 
                      ? "bg-blue-50 text-primary hover:bg-blue-100" 
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {option.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {!user ? (
              <SignInButton mode="modal">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                  Get Started
                </Button>
              </SignInButton>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/create-new-trip">
                  <Button 
                    variant="outline" 
                    className="hidden sm:flex items-center gap-2 border-blue-200 text-primary hover:bg-blue-50 hover:border-blue-300"
                  >
                    <PlusCircle className="w-4 h-4" />
                    New Trip
                  </Button>
                </Link>
                <Link href="/my-trips">
                  <Button 
                    variant="outline"
                    className="hidden sm:flex items-center gap-2 border-purple-200 text-primary hover:bg-purple-50 hover:border-purple-300"
                  >
                    <MapIcon className="w-4 h-4" />
                    My Trips
                  </Button>
                </Link>
                <div className="ml-2">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-9 h-9 ring-2 ring-blue-100 hover:ring-blue-200 transition-all"
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown when user is logged in */}
      {user && (
        <div className="sm:hidden border-t bg-gray-50/50 px-4 py-2">
          <div className="flex gap-2">
            <Link href="/create-new-trip" className="flex-1">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-blue-200 text-primary hover:bg-blue-50"
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                New Trip
              </Button>
            </Link>
            <Link href="/my-trips" className="flex-1">
              <Button 
                variant="outline"
                size="sm"
                className="w-full border-purple-200 text-primary hover:bg-purple-50"
              >
                <MapIcon className="w-4 h-4 mr-1" />
                My Trips
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;