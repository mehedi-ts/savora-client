import React from "react";
import SecondaryBtn from "../ui/SecondaryBtn";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedRecipes = () => {
  const featured = [];
  return (
    <div className="py-10">
      <div className="header flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-black">Featured Recipes</h2>
        </div>
        <SecondaryBtn className="flex items-center gap-4">
          <span>View All Recipes</span>
          <FaArrowRightLong className="text-base text-brandSecond" />
        </SecondaryBtn>
      </div>

      {featured.length === 0 ? (
        <div className="w-full py-20 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Featured Recipes Found
            </h3>

            <p className="text-gray-500 mt-2">
              There are no recipes available right now.
            </p>
          </div>
        </div>
      ) : (
        <div>mlo</div>
      )}
    </div>
  );
};

export default FeaturedRecipes;
