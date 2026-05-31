import { Description, FieldError, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryBtn from "./ui/PrimaryBtn";

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
    <nav className="border py-4">
      <div className="main-nav max-w-7xl border mx-auto border-orange">
        <div className=" relative w-47 h-14 border">
          <Image src="/images/savora-logo.png" alt="logo" fill></Image>
        </div>
        <ul>
          {publicNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="search-box max-w-xl">
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
        </div>
        <div>
          <PrimaryBtn>Login</PrimaryBtn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
