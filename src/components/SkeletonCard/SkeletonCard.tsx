import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <Card className="w-full max-w-xs rounded-2xl overflow-hidden relative p-0 pb-2">
            <Skeleton className="h-12.5 w-12.5 bg-gray-500 rounded-bl-xl absolute -top-1 -right-1" />
            <div className="flex items-center justify-center w-full h-50 bg-background1Color animate-pulse">
                <svg className="w-11 h-11 text-textColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
            </div>
            <CardContent className="flex flex-col gap-4">
                <Skeleton className="h-4 w-2/3 animate-pulse" />
                <Skeleton className="h-4 w-1/2 animate-pulse" />
                <Skeleton className="h-4 w-1/4 animate-pulse" />
            </CardContent>
        </Card>
    )
}
