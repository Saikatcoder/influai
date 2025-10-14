import CustomMouse from "@/components/castomMouse";
import { HeroSection } from "@/components/heroSectionComponnets/HeroSection";
import FeaturesSection from "@/components/heroSectionComponnets/Features";


export default function Home() {

  return (
   <div className = "min-h-screen bg-black text-white overflow-hidden relative"> 
  <div className = "fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse "/>
    <CustomMouse/>
    <HeroSection/>
   <FeaturesSection/>
   </div>
  );
}


