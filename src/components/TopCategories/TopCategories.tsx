"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
    { name: "Mobile", image: "/image/image1.png", active: true },
    { name: "Cosmetics", image: "/image/image2.png" },
    { name: "Electronics", image: "/image/Ellipse 41.png" },
    { name: "Furniture", image: "/image/image4.png" },
    { name: "Watches", image: "/image/image 5.png" },
    { name: "Decor", image: "/image/image6.png" },
    { name: "Accessories", image: "/image/image7.png" },
]

export default function TopCategories() {
    return (
        <section className="py-10">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-borderColor">
                <div className="relative after:absolute after:w-full after:h-1 after:bg-primaryColor after:-bottom-1 after:-translate-y-1/2">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Shop From <span className="text-primaryColor">Top Categories</span>
                    </h2>
                    <div className="mt-2 h-1 w-32 rounded-full bg-pritext-primaryColor" />
                </div>

                <Link href="/" className="flex items-center gap-1 text-base font-medium text-HEadingColor">
                    <span>View All</span>
                    <ChevronRight className="mt-0.5 text-primaryColor"/>
                </Link>
            </div>

            {/* Categories */}
            <div className="flex items-center justify-between gap-6 flex-wrap">
                {categories.map((cat) => (
                    <div key={cat.name} className="flex flex-col items-center gap-3">
                        <div className={`h-33 w-33 flex items-center justify-center rounded-full bg-background1Color ${cat.active && "border-2 border-primaryColor shadow"} `}
                        >
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                width={60}
                                height={60}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
