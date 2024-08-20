import AdvancedEMR from "@/components/advanced-emr/AdvancedEMR";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import LearnMore from "@/components/learn-more/LearnMore";
import SoftwareSolutions from "@/components/software-solutions/SoftwareSolutions";
import WhatOurUsersSay from "@/components/what-our-users-say/WhatOurUsersSay";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <LearnMore />
      <AdvancedEMR />
      <SoftwareSolutions />
      <WhatOurUsersSay />
      <Footer />
    </main>
  );
}
