"use client";
import React from 'react';
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

    return (
        <div>FetchProducts</div>
    )
}