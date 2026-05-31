import React from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";
import Image from "next/image";
import { PiCookingPotFill } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-full h-170 bg-[#F2EEE9] flex items-center justify-between">
      <div className="banner-text flex flex-col gap-10 w-1/2 px-10">
        <h1 className="text-6xl font-bold">
          Cook, Share & Discover Amazing{" "}
          <span className="text-brandSecond">Recipes</span>
        </h1>
        <p>
          Explore thousands of recipes, share your culinary creations, and build
          your personal recipe collection.
        </p>
        <div className="flex items-center gap-4">
          <PrimaryBtn className="flex items-center gap-3 ">
            <span>Explore Recipes</span>
            <PiCookingPotFill className="text-xl" />
          </PrimaryBtn>
          <SecondaryBtn className="flex items-center gap-3">
            <span>Add Your Recipe</span>
            <IoIosAddCircleOutline className="text-xl text-brand" />
          </SecondaryBtn>
        </div>
      </div>
      <div className="banner-img relative w-1/2 h-full">
        <Image src="/images/banner.png" alt="bannerImage " fill />
      </div>
    </div>
  );
};

export default Banner;
