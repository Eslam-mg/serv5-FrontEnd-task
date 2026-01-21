"use client";
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

const slides = [
    {
        title: "SMART WEARABLE.",
        subtitle: "Best Deal Online on smart watches",
        discount: "UP to 80% OFF",
        image: "/image/image2.png",
    },
    {
        title: "SMART WEARABLE.",
        subtitle: "Best Deal Online on smart watches",
        discount: "UP to 80% OFF",
        image: "/image/image3.png",
    },
    {
        title: "SMART WEARABLE.",
        subtitle: "Best Deal Online on smart watches",
        discount: "UP to 80% OFF",
        image: "/image/image7.png",
    },
]

export default function HeroCarousel() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-80 rounded-3xl bg-[#212844] text-white overflow-hidden">
                            {/* Content */}
                            <div className="flex h-full items-center justify-between px-8 lg:px-20">
                                {/* left div */}
                                <div className="h-full py-8 flex flex-col justify-between">
                                    <div className="w-full space-y-4">
                                        <p className="text-lg lg:text-3xl font-semibold text-white">{slide.subtitle}</p>
                                        <h1 className="text-5xl lg:text-6xl font-bold tracking-wide">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg lg:text-3xl font-semibold text-white">{slide.discount}</p>
                                    </div>
                                    {/* dots */}
                                    <div className="flex gap-2">
                                        <span className="h-2 w-6 rounded-full bg-white" />
                                        <span className="h-2 w-2 rounded-full bg-white" />
                                        <span className="h-2 w-2 rounded-full bg-white" />
                                    </div>

                                </div>

                                {/* Image */}
                                <div className="relative h-80 w-80 hidden md:block">
                                    <div className="w-120 h-120 bg-transparent rounded-full border-2 border-[#2C3454] p-4 absolute top-0 -right-24 -translate-y-2/3">
                                        <div className="w-full h-full rounded-full bg-[#2C3454]" />
                                    </div>
                                    <div className="w-44.25 h-44.25 bg-transparent rounded-full border-2 border-[#2C3454] p-4 absolute bottom-0 -left-4 translate-y-1/2">
                                        <div className="w-full h-full rounded-full bg-[#2C3454]" />
                                    </div>
                                    <Image
                                        src={slide.image}
                                        alt="product"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="left-0 -translate-x-1/2 h-12 w-12 lg:w-20 lg:h-20 border-4 lg:border-8 border-white rounded-full bg-background3Color hover:bg-background3Color text-primaryColor cursor-pointer shadow-none" />
            <CarouselNext className="right-0 translate-x-1/2 h-12 w-12 lg:w-20 lg:h-20 border-4 lg:border-8 border-white rounded-full bg-background3Color hover:bg-background3Color text-primaryColor cursor-pointer shadow-none" />
        </Carousel>
    )
}
