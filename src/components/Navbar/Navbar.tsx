'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react";
import Image from 'next/image';
import { ChartIcon, CloseIcon } from '../Icons/Icon';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-borderColor shadow-sm ">
            {/* Top Bar */}
            <div className="bg-background1Color">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-9 text-xs sm:text-sm">
                        {/* Left side - Welcome message */}
                        <div className="text-textColor">
                            Welcome to worldwide Megamart!
                        </div>

                        {/* Right side - Utility links */}
                        <div className="flex items-center gap-2 ml-auto">
                            {/* Location */}
                            <button className="flex items-center gap-1.5 text-textColor md:px-3 md:border-r border-[#D9D9D9]">
                                <Image src="/icon/Location.svg" width={16} height={16} alt='map bin' loading='lazy' />
                                <span className="text-xs">Deliver to <span className="font-semibold">423651</span></span>
                            </button>

                            {/* Track Order */}
                            <button className="hidden sm:flex items-center gap-1.5 text-textColor px-3 border-r border-[#D9D9D9]">
                                <Image src="/icon/delivery-truck.svg" width={18} height={18} alt='map bin' loading='lazy' />
                                <span className="text-xs">Track your order</span>
                            </button>

                            {/* All Offers */}
                            <button className="hidden sm:flex items-center gap-1.5 text-textColor">
                                <Image src="/icon/Discount.svg" width={18} height={18} alt='map bin' loading='lazy' />
                                <span className="text-xs">All Offers</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Left Section - Menu & Logo */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-12 h-12 bg-background3Color text-primaryColor rounded-lg flex items-center justify-center cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <ChartIcon width={24} height={24} />
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl sm:text-3xl font-bold text-primaryColor">
                                MegaMart
                            </span>
                        </Link>
                    </div>

                    {/* Center Section - Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl">
                        <div className="relative w-full max-w-md ms-auto bg-background3Color rounded-md">
                            <InputGroup className="max-w-md shadow-none border-none">
                                <InputGroupInput placeholder="Search essentials, groceries and more..." />
                                <InputGroupAddon className='text-primaryColor'>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end"><Image src="/icon/list.svg" width={20} height={20} alt='map bin' loading='lazy' className='absolute top-1/2 -translate-y-1/2 right-4' /></InputGroupAddon>
                            </InputGroup>
                        </div>
                    </div>

                    {/* Right Section - Sign In & Cart */}
                    <div className="flex items-center gap-2">
                        {/* Sign Up/Sign In */}
                        <Link href="/" className="hidden sm:flex items-center gap-2 text-textColor pr-4 border-r border-[#D9D9D9]">
                            <Image src="/icon/user.svg" width={20} height={20} alt='map bin' loading='lazy' />
                            <span className="text-sm font-medium">Sign Up/Sign In</span>
                        </Link>

                        {/* Mobile User Icon */}
                        <Link href="/" className="sm:hidden p-2 text-textColor">
                            <Image src="/icon/user.svg" width={20} height={20} alt='map bin' loading='lazy' />
                        </Link>

                        {/* Cart */}
                        <button className="relative flex items-center gap-2 text-textColor">
                            <Image src="/icon/Buy.svg" width={20} height={20} alt='cart' loading='lazy' />
                            <span className="hidden sm:inline text-sm font-medium">Cart</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden pb-4 mt-2">
                    <div className="relative w-full bg-background3Color rounded-md">
                        <Image src="/icon/Search.svg" width={20} height={20} alt='map bin' loading='lazy' className='absolute top-1/2 -translate-y-1/2 left-2' />
                        <Input
                            type="text"
                            placeholder="Search essentials, groceries and more..."
                            className="w-full pl-10 pr-4 py-2 rounded-md outline-primaryColor focus:outline-primaryColor focus:ring-2 focus:ring-primaryColor border-none shadow-none placeholder:text-xs"
                        />
                        <Image src="/icon/list.svg" width={20} height={20} alt='map bin' loading='lazy' className='absolute top-1/2 -translate-y-1/2 right-4' />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-black/20 bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
                    <div
                        className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-2xl font-bold text-cyan-500">MegaMart</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-500 hover:text-textColor cursor-pointer"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <Link href="#" className="flex items-center gap-3 text-textColor hover:text-primaryColor cursor-pointer transition-colors ease-in-out duration-300 py-2">
                                <Image src="/icon/delivery-truck.svg" width={18} height={18} alt='map bin' loading='lazy' />
                                <span className="text-base">Track your order</span>
                            </Link>

                            <Link href="#" className="flex items-center gap-3 text-textColor hover:text-primaryColor cursor-pointer transition-colors ease-in-out duration-300 py-2">
                                <Image src="/icon/Discount.svg" width={18} height={18} alt='map bin' loading='lazy' />
                                <span className="text-base">All Offers</span>
                            </Link>

                            <Link href="#" className="flex items-center gap-3 text-textColor hover:text-primaryColor cursor-pointer transition-colors ease-in-out duration-300 py-2">
                                <span>Sign Up/Sign In</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}