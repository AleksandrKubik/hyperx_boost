"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FlashSaleBannerV2() {
    const [timeLeft, setTimeLeft] = useState({
        hours: '03',
        minutes: '54',
        seconds: '21'
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59);

            const diff = endOfDay.getTime() - now.getTime();

            const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

            setTimeLeft({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full bg-transparent">
            {/* Фоновая линия */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[2px] 
        bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-50" />

            {/* Контент */}
            <div className="container mx-auto px-4">
                <div className="relative flex items-center justify-center gap-4 py-3 text-sm md:text-base">
                    {/* Текст акции */}
                    <span className="text-white font-medium">
                        FLASH SALE: All services are <span className="text-[#00A3FF]">30% OFF</span>
                    </span>

                    {/* Таймер */}
                    <div className="flex items-center gap-1 text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
                    </div>

                    {/* Кнопка */}
                    <Link
                        href="/offer"
                        className="px-4 py-1 bg-[#00A3FF] text-white rounded-full text-sm 
              transition-all duration-300 hover:bg-[#0077CC] hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                    >
                        Get Offer
                    </Link>
                </div>
            </div>
        </div>
    );
} 