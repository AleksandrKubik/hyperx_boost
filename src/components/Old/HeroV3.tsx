"use client";

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroV3() {
  return (
    <section className="relative min-h-screen flex flex-col">


      {/* Main Content */}
      <div className="flex-1 pt-16 xs:pt-20">
        <div className="container mx-auto px-4 py-12 xs:py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-8 xs:mb-12">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl ipad:text-8xl font-bold mb-4 xs:mb-6">
                <span className="text-[#1DA1F2] drop-shadow-lg">
                  Grow your X account
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  fast & organically.
                </span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/80 mb-6 xs:mb-8 max-w-3xl mx-auto px-2">
                Get real, organic replies and followers. No bots — just authentic engagement
                to make your profile stand out.
              </p>
            </div>

            {/* CTA Card */}
            <div className="glass-card bg-black/40 backdrop-blur-xl p-6 xs:p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <button className="group w-full px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-base xs:text-lg flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30 hover:scale-105 mb-4 xs:mb-6">
                Get Boost
                <ArrowRight className="w-5 h-5 xs:w-6 xs:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Benefits */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4">
                {[
                  'Increase Credibility',
                  'Lowest Prices',
                  'Faster Growth'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 text-white/70">
                    <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 text-[#1DA1F2] flex-shrink-0" />
                    <span className="text-xs xs:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
