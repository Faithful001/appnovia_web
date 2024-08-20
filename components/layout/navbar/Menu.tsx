import { navbarLinks } from "@/data/navbarLinks.data";
import Link from "next/link";
import { Dispatch } from "react";
import { useEffect, useState } from "react";

interface MenuProps {
  setMenuIsOpen: Dispatch<boolean>;
}

const Menu = ({ setMenuIsOpen }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Show the menu with the sliding effect when it's rendered
  }, []);

  const handleCloseMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      setMenuIsOpen(false); // Hide the menu after the sliding effect
    }, 300); // Adjust the timeout to match the transition duration
  };

  return (
    <div
      className={`bg-primaryColor z-50 w-screen left-0 flex flex-col items-start justify-between p-10 lg:px-24 fixed text-white h-screen top-0 transition-transform duration-300 ease-in-out ${
        isVisible ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    >
      <span className="flex w-full justify-between items-center">
        <Link href={"/"} className="text-2xl font-semibold">
          Appnovia
        </Link>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleCloseMenu}
        >
          close
        </span>
      </span>
      <div className="flex flex-col items-start gap-8">
        {navbarLinks.map((data, index) => (
          <Link href={data.to} key={index} className="">
            {data.title}
          </Link>
        ))}
        <Link
          href={"login"}
          className="w-max border border-brandColor rounded-md text-brandColor px-8 py-4 text-lg font-semibold hover:bg-brandColor hover:text-black/80 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Menu;
