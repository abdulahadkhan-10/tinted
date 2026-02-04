'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import AboutSection from "@/components/AboutSection";
import ModernServices from "@/components/ModernServices";
import ContentGrid from "@/components/ContentGrid";
import ClientGrid from "@/components/ClientGrid";
import StatsSection from "@/components/StatsSection";
import Showreel from "@/components/Showreel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white selection:bg-electric-blue selection:text-white relative">
      <Navbar />
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <Hero />

      {/* NEW: Stats Section for immediate proof of impact */}
      <StatsSection />

      {/* NEW: Full Screen Cinematic Showreel */}
      <Showreel />

      {/* Video Carousel Section with sticky social text */}
      <section className="py-20 relative overflow-hidden bg-black/40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-6 py-2 premium-glass rounded-full border border-white/10 text-xs font-bold uppercase tracking-[0.4em] text-electric-blue">
          Live Productions
        </div>
        <VideoCarousel />
      </section>

      <AboutSection />

      {/* NEW: Futuristic Modern Services List */}
      <ModernServices />

      {/* BTS & UGC with premium background */}
      <section className="py-32 relative overflow-hidden">
        {/* Cinematic Background Orbs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-purple/10 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Drifting Background Text */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-[0.01] pointer-events-none select-none z-0">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="text-[15rem] font-black uppercase whitespace-nowrap"
          >
            ORIGINALS // UNFILTERED // AUTHENTIC // BEYOND //
          </motion.div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto mb-16">
          <h3 className="text-neon-lime font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Originals</h3>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Content <br />
            <span className="text-gray-500 italic font-light">Universe</span>
          </h2>
        </div>
        <ContentGrid />
      </section>

      {/* NEW: Futuristic Client Grid */}
      <ClientGrid />

      {/* NEW: Bold Contact Section */}
      <ContactForm />

      <Footer />
    </main>
  );
}
