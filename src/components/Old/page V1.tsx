import HeroV3 from "@/components/HeroV3";
import PricingCardV2 from "@/components/PricingCardV2";
import FeaturesV2 from "@/components/FeaturesV2";
import HowItWorksV2 from "@/components/HowItWorksV2";
import FooterV2 from "@/components/FooterV2";
import HeaderV4 from "@/components/HeaderV4";
import HeroV4 from "@/components/HeroV4";

export default function Home() {
  return (
    <div className="min-h-screen relative">


      {/* Основной контент */}
      <div className="relative">
        <HeaderV4 />
        <HeroV4 />
        {/* Hero Section */}
        <div className="relative">
          <HeroV3 />
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Pricing Section */}
        <div className="relative -mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <PricingCardV2 />
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Features Section */}
        <div className="relative -mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <FeaturesV2 />
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* How It Works Section */}
        <div className="relative -mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <HowItWorksV2 />
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Footer Section */}
        <div className="relative -mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <FooterV2 />
        </div>
      </div>
    </div>
  );
}
