"use client"
import React from 'react';

interface PropsInterface {
    children : React.ReactNode
}
export default function QueryProvider({children}: PropsInterface) {
    return (
        <div>QueryProvider</div>
    )
}