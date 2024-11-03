import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Nunito } from "next/font/google";
import { iconItems, navItems } from "@/constants";
import Link from "next/link";

const nunito = Nunito({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 bg-white w-full h-16 flex justify-around items-center border-b border-slate-300">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <Image
            src={"/logo.jpg"}
            alt="logo-brand"
            className="object-cover"
            width={50}
            height={50}
          />
          <h2
            className={`${nunito.className} text-2xl font-bold tracking-wider`}
          >
            Furniro
          </h2>
        </div>
      </Link>
      <ul className="flex items-center gap-x-6">
        {navItems.map((item) => (
          <Link href={item.title === "home" ? "/" : item.title} key={item.id}>
            <li className="cursor-pointer capitalize">{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className="flex justify-around items-center gap-x-10">
        {iconItems.map((item) => (
          <Link href={item.name === "search" ? "/" : item.name} key={item.id}>
            <item.icon className="cursor-pointer" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
