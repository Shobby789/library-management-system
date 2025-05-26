import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className="w-full py-7 padding-x">
      <nav className="w-full flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={176}
            height={32}
            className=""
            alt="logo"
          />
        </Link>

        <ul className="flex items-center gap-10">
          <li>
            <Link href={"/"} className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/search"} className="text-lg">
              Search
            </Link>
          </li>
          <li>
            <Link href={"/profile"} className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <span className="font-semibold text-sm">SM</span>
              </div>
              <span>Adrian</span>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <TbLogout2 className="text-red-600 text-xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
