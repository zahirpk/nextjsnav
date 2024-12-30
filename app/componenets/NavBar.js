"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  const navLinks = [
    "/",
    "/about",
    "/business",
    "/innovation",
    "/news",
    "/project",
    "/login",
  ];

  const hideNavBar = pathname==='/login';
  if(hideNavBar){
    return null;
  }
  return (
    <nav className="bg-gray-100 flex space-x-6">
      {navLinks.map((href) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 rounded ${
            pathname === href
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-100"
          }`}
        >
          {href === "/"
            ? "Home"
            : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
        </Link>
      ))}
    </nav>
  );
}
