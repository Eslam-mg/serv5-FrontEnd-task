"use client";
import React from 'react';
import { useQuery } from "@tanstack/react-query"
import { SkeletonCard } from '../SkeletonCard/SkeletonCard';
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
        return response.json();
    };

    const {data, isLoading, isError, error} = useQuery({queryKey: ["products"], queryFn: getAllProducts})

    return (
        <div>
            {isLoading && (<SkeletonCard/>)}

            {isError && (
                <div className="text-red-500">Error: {(error as Error).message}</div>
            )}
        </div>
    )
}