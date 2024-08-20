"use client";
import { navbarLinks } from "@/data/navbarLinks.data";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-primaryColor w-full flex lg:items-center justify-between p-[22px] lg:px-[120px] px-10">
      <Link href={"/"} className="text-2xl font-semibold">
        Appnovia
      </Link>
      <div className="xl:flex items-center gap-8 hidden">
        {navbarLinks.map((data, index) => (
          <Link href={data.to} key={index} className="w-max">
            {data.title}
          </Link>
        ))}
      </div>
      <Link
        href={"login"}
        className="w-max border border-brandColor rounded-md text-brandColor px-8 py-4 text-lg font-semibold xl:block hidden hover:bg-brandColor hover:text-black/80 transition-all duration-300"
      >
        Get Started
      </Link>
      <div
        className="cursor-pointer xl:hidden block "
        onClick={() => setMenuIsOpen(true)}
      >
        <span className="material-symbols-outlined ">menu</span>
      </div>
      {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} />}
    </div>
  );
};

export default Navbar;
