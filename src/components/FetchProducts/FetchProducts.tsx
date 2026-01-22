"use client";
import React from 'react';
import { useQuery } from "@tanstack/react-query"
import { SkeletonCard } from '../SkeletonCard/SkeletonCard';
import { Badge, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter, CardContent } from '../ui/card';
import Link from 'next/link';
interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export default function FetchProducts() {
    const getAllProducts = async (): Promise<Product[]> => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    };

    const { data, isLoading, isError, error } = useQuery({ queryKey: ["products"], queryFn: getAllProducts })

    return (
        <div className='mt-8'>
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-borderColor">
                <div className="relative after:absolute after:w-full after:h-1 after:bg-primaryColor after:-bottom-1 after:-translate-y-1/2">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Grab the best deal on <span className="text-primaryColor">Smartphones</span>
                    </h2>
                    <div className="mt-2 h-1 w-32 rounded-full bg-pritext-primaryColor" />
                </div>

                <Link href="/" className="flex items-center gap-1 text-base font-medium text-HEadingColor">
                    <span>View All</span>
                    <ChevronRight className="mt-0.5 text-primaryColor" />
                </Link>
            </div>
            {isLoading && (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>{Array.from({ length: 5 }, (_, i) => (<SkeletonCard key={i} />))}</div>
            )}

            {isError && (
                <div className="text-red-500">Error: {(error as Error).message}</div>
            )}

            {!isLoading && !isError && (
                <div className="grid grid-cols-5 gap-6">
                    {data?.map((product) => (
                        <Card key={product.id} className="mx-auto w-full h-75 max-w-sm pt-0 rounded-2xl shadow-none hover:shadow hover:border-primaryColor relative overflow-hidden transition-all ease-in-out duration-300">
                            <div className="h-12.5 w-12.5 absolute top-0 right-0 rounded-bl-xl bg-primaryColor text-white text-sm text-center">
                                <span>56% OFF</span>
                            </div>
                            <div className="bg-background1Color w-full h-50 p-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-40 mx-auto object-contain"
                                />
                            </div>
                            <CardContent className='px-3'>
                                <CardTitle>{product.title.split(' ').slice(0, 3).join(" ")}</CardTitle>
                                <CardDescription className='text-base text-HEadingColor flex items-center gap-2'>
                                    <span className='font-bold'>₹{product.price}</span>
                                    <span className='font-normal line-through'>₹14999</span>
                                </CardDescription>
                                <div className="border-t border-borderColor p-0 mt-2">
                                    <span className='text-sucessColor font-semibold text-base'>Save - ₹32999</span>
                                </div>
                            </CardContent>
                        </Card>
                    )).slice(0, 5)}
                </div>
            )}
        </div>
    )
}