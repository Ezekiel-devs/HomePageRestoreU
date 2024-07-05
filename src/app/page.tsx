import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Atouts from "@/components/Atout";
import Partenaire from "@/components/Partenaires";
import Stats from "@/components/stat";
import { Metadata } from "next";
import dynamic from 'next/dynamic';


export const metadata: Metadata = {
  title: "RestoreU",
  description: "RestoreU",
  // other metadata
};

export default function Home() {

  const Video = dynamic(() => import('@/components/Video'), { ssr: false });

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Atouts />
      <Partenaire />
      <Blog />
      <Video />
      <Pricing />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
