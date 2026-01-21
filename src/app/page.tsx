import CategoryButtons from "@/components/CategoryButtons/CategoryButtons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CategoryButtons/>
    </div>
  );
}
