import CustomMouse from "@/components/castomMouse";
import { HeroSection } from "@/components/heroSectionComponnets/HeroSection";
import FeaturesSection from "@/components/heroSectionComponnets/Features";
import { SocialFeatures } from "@/components/heroSectionComponnets/SocialFeatures";
import PlatformSection from "@/components/heroSectionComponnets/PlatformSection";
import TestimonialSection from "@/components/heroSectionComponnets/TestimonialSection";
import { CtaSection } from "@/components/heroSectionComponnets/CtaSection";


export default function Home() {

  return (
   <div className = "min-h-screen bg-black text-white overflow-hidden relative"> 
  <div className = "fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse "/>
    <CustomMouse/>
    <HeroSection/>
   <FeaturesSection/>
   <PlatformSection/>
   <SocialFeatures/>
   <TestimonialSection/>
   <CtaSection/>
   </div>
  );
}


