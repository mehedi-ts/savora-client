import Banner from "@/components/homePage/Banner";
import FeaturedRecipes from "@/components/homePage/FeaturedRecipes";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto w-full text-black">
      <Banner></Banner>
      <FeaturedRecipes></FeaturedRecipes>
    </div>
  );
}
