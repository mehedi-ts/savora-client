import { Description, FieldError, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryBtn from "./ui/PrimaryBtn";
import SecondaryBtn from "./ui/SecondaryBtn";

const Navbar = () => {
  const publicNavLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Recipes",
      url: "/recipes",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="shadow-sm py-4 stack top-0 z-75">
      <div className="main-nav max-w-7xl  mx-auto border-orange  flex justify-between items-center">
        <div className=" relative w-40 h-10 ">
          <Image src="/images/savora-logo.png" alt="logo" fill></Image>
        </div>
        <ul className="flex items-center justify-between gap-6 font-medium">
          {publicNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* <div className="search-box max-w-xl">
          <SearchField>
            <Label />
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input />
              <SearchField.ClearButton />
            </SearchField.Group>
            <Description />
            <FieldError />
          </SearchField>
        </div> */}
        <div className="flex items-center gap-4">
          <SecondaryBtn>Login</SecondaryBtn>
          <PrimaryBtn>Register</PrimaryBtn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
