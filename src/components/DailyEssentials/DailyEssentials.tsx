import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const essentials = [
    { name: "Daily Essentials", image: "/image/fruit1.png", active: true },
    { name: "Vegitables", image: "/image/fruit2.png" },
    { name: "Fruits", image: "/image/fruit3.png" },
    { name: "Strowberry", image: "/image/fruit4.png" },
    { name: "Mango", image: "/image/fruit5.png" },
    { name: "Cherry", image: "/image/fruit6.png" },
]

export default function DailyEssentials() {
    return (
        <div className="py-10">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-borderColor">
                <div className="relative after:absolute after:w-full after:h-1 after:bg-primaryColor after:-bottom-1 after:-translate-y-1/2">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Daily <span className="text-primaryColor">Essentials</span>
                    </h2>
                    <div className="mt-2 h-1 w-32 rounded-full bg-pritext-primaryColor" />
                </div>

                <Link href="/" className="flex items-center gap-1 text-base font-medium text-HEadingColor">
                    <span>View All</span>
                    <ChevronRight className="mt-0.5 text-primaryColor" />
                </Link>
            </div>

            {/* Categories */}
            <div className="flex items-center justify-between gap-6 flex-wrap">
                {essentials.map((ess) => (
                    <div key={ess.name} className="flex flex-col items-center gap-3">
                        <div className={`h-33 w-33 flex items-center justify-center rounded-lg bg-background1Color ${ess.active && "border-2 border-primaryColor shadow"} `}
                        >
                            <Image
                                src={ess.image}
                                alt={ess.name}
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-medium">{ess.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
