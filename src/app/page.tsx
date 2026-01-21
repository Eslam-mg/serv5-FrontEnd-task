import CategoryButtons from "@/components/CategoryButtons/CategoryButtons";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* top section */}
      <section className="w-full border-b border-borderColor">
        <CategoryButtons />
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <HeroCarousel />
      </section>
    </>
  );
}