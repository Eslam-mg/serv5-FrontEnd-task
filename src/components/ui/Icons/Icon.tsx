import React from 'react';

interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

export const ChartIcon: React.FC<IconProps> = ({ className = "", width = 22, height = 22 }) => {
    return (
        <svg className="lucide lucide-chart-no-axes-column-decreasing-icon lucide-chart-no-axes-column-decreasing" aria-hidden="true" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V3" /><path d="M12 21V9" /><path d="M19 21v-6" /></svg>
    )
}

export const ArrowDownIcon: React.FC<IconProps> = ({ className = "", width = 22, height = 22 }) => {
    return (
        <svg className="lucide lucide-chevron-down-icon lucide-chevron-down" aria-hidden="true" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    )
}