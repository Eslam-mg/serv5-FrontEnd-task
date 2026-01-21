'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const popularCategories = [
    'Staples',
    'Beverages',
    'Personal Care',
    'Home Care',
    'Baby Care',
    'Vegetables & Fruits',
    'Snacks & Foods',
    'Dairy & Bakery',
];

const customerServices = [
    'About Us',
    'Terms & Conditions',
    'FAQ',
    'Privacy Policy',
    'E-waste Policy',
    'Cancellation & Return Policy',
];

export default function Footer() {

    return (
        <footer className="w-full bg-primaryColor text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left Section - Contact & Download */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <h2 className="text-2xl sm:text-3xl font-bold">MegaMart</h2>

                        {/* Contact Us */}
                        <div className="space-y-3">
                            <h3 className="text-base font-semibold mb-4">Contact Us</h3>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/icon/whatsapp.svg"
                                    width={20}
                                    height={20}
                                    alt="WhatsApp"
                                    loading="lazy"
                                />
                                <div className="text-sm">
                                    <p className="text-white/90">Whats App</p>
                                    <p className="font-medium">+1 202-918-2132</p>
                                </div>
                            </div>

                            {/* Call Us */}
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/icon/phone.svg"
                                    width={20}
                                    height={20}
                                    alt="Phone"
                                    loading="lazy"
                                />
                                <div className="text-sm">
                                    <p className="text-white/90">Call Us</p>
                                    <p className="font-medium">+1 202-918-2132</p>
                                </div>
                            </div>
                        </div>

                        {/* Download App */}
                        <div className="space-y-3">
                            <h3 className="text-base font-semibold">Download App</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="#"
                                    className="transition-transform hover:scale-105 duration-200"
                                >
                                    <Image
                                        src="/icon/app-store.svg"
                                        width={135}
                                        height={40}
                                        alt="Download on App Store"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="transition-transform hover:scale-105 duration-200"
                                >
                                    <Image
                                        src="/icon/google-play.svg"
                                        width={135}
                                        height={40}
                                        alt="Get it on Google Play"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Most Popular Categories */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold border-b-2 border-white pb-2 w-fit">
                            Most Popular Categories
                        </h3>
                        <ul className="space-y-2 list-disc">
                            {popularCategories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/90 hover:text-white hover:underline transition-all duration-200"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Customer Services */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold border-b-2 border-white pb-2 w-fit">
                            Customer Services
                        </h3>
                        <ul className="space-y-2 list-disc">
                            {customerServices.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/90 hover:text-white hover:underline transition-all duration-200"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-sm text-white/80">
                        © 2022 All rights reserved. Reliance Retail Ltd.
                    </p>
                </div>
            </div>
        </footer>
    );
}
