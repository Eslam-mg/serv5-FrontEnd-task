import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BrandCard {
    id: number;
    brand: string;
    discount: string;
    bgColor: string;
    bgColor2: string;
    textColor: string;
    borderColor: string;
    logo: string;
    image: string;
}

const brandsData: BrandCard[] = [
    {
        id: 1,
        brand: "IPHONE",
        discount: "UP to 80% OFF",
        bgColor: "bg-[#313131]",
        bgColor2: "bg-[#404040]",
        borderColor: "border-[#404040]",
        textColor: "text-white",
        logo: "/image/apple.svg",
        image: "/image/image8.png",
    },
    {
        id: 2,
        brand: "REALME",
        discount: "UP to 80% OFF",
        bgColor: "bg-[#FFF3CC]",
        bgColor2: "bg-[#F6DE8D]",
        borderColor: "border-[#F6DE8D]",
        textColor: "text-gray-900",
        logo: "/image/REALME.svg",
        image: "/image/image9.png",
    },
    {
        id: 3,
        brand: "XIAOMI",
        discount: "UP to 80% OFF",
        bgColor: "bg-[#FFECDF]",
        bgColor2: "bg-[#FFD1B0]",
        borderColor: "border-[#FFD1B0]",
        textColor: "text-gray-900",
        logo: "/image/XIAOMI.svg",
        image: "/image/image10.png",
    },
];

export default function TopElectronicsBrands() {

    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-borderColor">
                <div className="relative after:absolute after:w-full after:h-1 after:bg-primaryColor after:-bottom-1 after:-translate-y-1/2">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Top <span className="text-primaryColor">Electronics Brands</span>
                    </h2>
                    <div className="mt-2 h-1 w-32 rounded-full bg-pritext-primaryColor" />
                </div>

                <Link href="/" className="flex items-center gap-1 text-base font-medium text-HEadingColor">
                    <span>View All</span>
                    <ChevronRight className="mt-0.5 text-primaryColor" />
                </Link>
            </div>

            {/* Carousel */}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {brandsData.map((brand) => (
                        <CarouselItem key={brand.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className={`${brand.bgColor} ${brand.textColor} flex items-center justify-between rounded-2xl p-6 h-50 md:h-60 relative overflow-hidden cursor-pointer`}>
                                {/* Brand Tag */}
                                <div className={`${brand.bgColor2} absolute top-4 left-4 px-3 py-1 rounded-md`}>
                                    <span className={`${brand.textColor} text-xs font-semibold uppercase"`}>
                                        {brand.brand}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="">
                                    {/* Logo */}
                                    <div className="mb-4 rounded-lg w-16 h-16 flex items-center">
                                        <Image src={brand.logo} width={50} height={50} alt="logo" loading="lazy" />
                                    </div>

                                    {/* Discount Text */}
                                    <h3 className="text-xl md:text-2xl font-bold">
                                        {brand.discount}
                                    </h3>
                                </div>

                                {/* Product Image */}
                                <div className="relative w-40 h-44 md:w-44 md:h-48">
                                    <div className={`w-60 h-60 bg-transparent rounded-full border-2 ${brand.borderColor} p-3 absolute top-0 -right-16 -translate-y-1/3 z-0`}>
                                        <div className={`w-full h-full rounded-full ${brand.bgColor2}`} />
                                    </div>
                                    <Image src={brand.image} fill className="object-contain bg-transparent" alt="image" loading="lazy" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
