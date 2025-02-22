"use client";

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F3F]/90 via-[#1DA1F2]/90 to-[#0C1F3F]/90 backdrop-blur-md" />

      {/* Нижняя граница с градиентом */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Контент */}
      <div className="relative">
        <div className="container mx-auto px-3 xs:px-4 py-2">
          <div className="flex xs:flex-row items-center justify-center gap-2 xs:gap-4">
            {/* Текст акции */}
            <div className="text-white/90 text-xs xs:text-sm font-medium flex items-center gap-1.5 xs:gap-2 text-center xs:text-left">
              <span className="text-white font-bold whitespace-nowrap">FLASH SALE:</span>
              <span className="whitespace-nowrap">All services are</span>
              <span className="text-white font-bold bg-[#1DA1F2] px-1.5 xs:px-2 py-0.5 rounded whitespace-nowrap">30% OFF</span>
            </div>

            {/* Таймер и кнопка */}
            <div className="flex items-center gap-2 xs:gap-3">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white" />
                <span className="text-white font-mono text-xs xs:text-sm">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
              <button className="px-2.5 xs:px-3 py-1 bg-white text-[#1DA1F2] rounded-full text-xs xs:text-sm font-bold hover:bg-white/90 transition-all whitespace-nowrap">
                Get Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
