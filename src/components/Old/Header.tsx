"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Youtube, MessageSquare } from 'lucide-react';

const socialServices = [
    {
        name: 'X',
        icon: Twitter,
        href: '/x-boost',
        color: 'bg-black hover:bg-black/90'
    },
    {
        name: 'Telegram',
        icon: MessageSquare,
        href: '/telegram-boost',
        color: 'bg-black hover:bg-black/90'
    },
    {
        name: 'YouTube',
        icon: Youtube,
        href: '/youtube-boost',
        color: 'bg-black hover:bg-black/90'
    }
];

export default function Header() {
    return (
        <div className="relative">
            {/* Эффект подсветки */}
            <div className="absolute inset-0 bg-[#0A1422]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a3772]/20 to-transparent" />
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="absolute h-full w-full bg-gradient-to-br from-[#0066FF]/20 via-transparent to-transparent" />
                </div>
            </div>

            {/* Контент хедера */}
            <header className="relative w-full border-b border-white/10 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-8">
                        {/* Логотип и слоган */}
                        <div className="flex flex-col items-center md:items-start gap-4 max-w-xl">
                            {/* Временный плейсхолдер для логотипа */}
                            <div className="w-40 h-10 flex items-center">
                                <div className="text-2xl font-bold text-white">
                                    HypeX
                                </div>
                            </div>

                            {/* Слоган */}
                            <div className="text-center md:text-left">
                                <h1 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    Grow your social media account fast & organically
                                </h1>
                                <p className="text-neutral-400 text-sm md:text-base">
                                    No bots — just authentic engagement to make your profile stand out.
                                </p>
                            </div>
                        </div>

                        {/* Социальные сети с кнопками */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {socialServices.map((service) => (
                                <div
                                    key={service.name}
                                    className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all 
                                    hover:bg-white/5"
                                >
                                    <div className="relative w-12 h-12 flex items-center justify-center 
                                    bg-white/5 rounded-full group-hover:bg-white/10 transition-all">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <Link
                                        href={service.href}
                                        className={`px-6 py-2 rounded-full ${service.color} text-white text-sm font-medium 
                                        border border-white/10 transition-all hover:border-white/20`}
                                    >
                                        Get Boost
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
} 