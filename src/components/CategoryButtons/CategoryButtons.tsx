"use client"

import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const categories = [
    { name: "Groceries", active: true },
    { name: "Premium Fruits" },
    { name: "Home & Kitchen" },
    { name: "Fashion" },
    { name: "Electronics" },
    { name: "Beauty" },
    { name: "Home Improvement" },
    { name: "Sports, Toys & Luggage" },
]

export default function CategoryButtons() {
    return (
        <div className="w-full py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 py-2 max-w-7xl mx-auto h-fit overflow-x-auto customScrollbar">
            {categories.map((cat) => (
                <DropdownMenu key={cat.name}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className={`rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 text-HEadingColor
                                ${cat.active
                                    ? "bg-primaryColor text-white hover:bg-primaryColor hover:text-white"
                                    : "bg-background3Color text-HEadingColor hover:bg-blue-100"
                                }`}
                        >
                            {cat.name}
                            <ChevronDown size={16} className={cat.active ? "text-white": "text-primaryColor"} />
                        </Button>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            ))}

            </div>
        </div>
    )
}