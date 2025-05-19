"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  {
    /* Hooks */
  }
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50000) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, [isScroll]);

  {
    /* Handlers Function */
  }
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  {
    /* Icons */
  }
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const barIcon = <FontAwesomeIcon icon={faBars} />;
  const crossIcon = <FontAwesomeIcon icon={faClose} />;
  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
        }`}
      >
        <Link href="/">
          <h1 className="text-4xl  relative">
            <span className="absolute bottom-6  left-[-6px] font-bold ">.</span>
            Basit{" "}
            <span className="absolute bottom-[3.5px] right-[-6px] font-bold ">
              .
            </span>
          </h1>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-12 py-3 ${
            isScroll
              ? "bg-[linear-gradient(#e0e0e0,#e9e9e9,#fff,#f0f0f0)] shadow-2x; bg-opacity-25"
              : ""
          }`}
        >
          <li>
            <Link href="/" className="font-Ovo text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-Ovo text-lg">
              About
            </Link>
          </li>

          <li>
            <Link href="/skill" className="font-Ovo text-lg">
              Skill
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[-3px] md:gap-1">
          <Link href="/contact">
            {" "}
            <Button className="rounded-full hidden md:flex items-center gap-1 px-7 py-5  border border-gray-500 ml-4 text-lg font-Ovo shadow-md">
              {" "}
              Contact <span className="rotate-[-40deg]">{arrowIcon}</span>
            </Button>
          </Link>
          <Button variant="icon" onClick={openMenu}>
            <li className="block md:hidden ml-3">{barIcon}</li>
          </Button>
        </div>
        {/* ------------ Mobile Menu ------------*/}
        <ul
          ref={sideMenuRef}
          className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 w-64 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <li className="w-5 cursor-pointer">{crossIcon}</li>
          </div>
          <li>
            <Link href="/" className="font-Ovo" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-Ovo" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link href="/skill" className="font-Ovo" onClick={closeMenu}>
              Skill
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
