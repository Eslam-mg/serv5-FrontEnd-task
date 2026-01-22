import CategoryButtons from "@/components/CategoryButtons/CategoryButtons";
import DailyEssentials from "@/components/DailyEssentials/DailyEssentials";
import FetchProducts from "@/components/FetchProducts/FetchProducts";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import TopCategories from "@/components/TopCategories/TopCategories";
import TopElectronicsBrands from "@/components/TopElectronicsBrands/TopElectronicsBrands";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* top section */}
      <section className="w-full border-b border-borderColor">
        <CategoryButtons />
      </section>

      <section className="w-full max-w-7xl mx-auto px-8 mt-4">
        <HeroCarousel />
      </section>

      {/* products */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FetchProducts/>
      </section>

      {/* top category */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopCategories/>
      </section>

      {/*  */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopElectronicsBrands/>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DailyEssentials/>
      </section>
    </>
  );
}