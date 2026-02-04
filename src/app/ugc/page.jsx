import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Users } from "lucide-react";

export default function UGCPage() {
    return (
        <main className="min-h-screen bg-[#05070a] text-white selection:bg-electric-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative flex flex-col items-center">
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-electric-purple/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-2 mb-6">
                    <div className="px-4 py-1 bg-electric-purple/20 border border-electric-purple/30 rounded-full text-electric-purple font-black text-xs uppercase tracking-widest">
                        Community Driven
                    </div>
                    <div className="w-1.5 h-1.5 bg-electric-purple rounded-full animate-pulse" />
                </div>

                <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter text-center leading-[0.85] mb-8">
                    UGC <span className="gradient-text not-italic">EMPIRE.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl text-center leading-relaxed">
                    Real stories from real humans. We turn user-generated authenticity into high-converting brand equity.
                </p>
            </section>

            {/* Experience Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: 'Authentic Reach', desc: 'Content that bypasses the "ad filter" and builds true trust.', icon: <Users size={32} /> },
                        { title: 'Viral Velocity', desc: 'Engineered for shareability across TikTok, Reels, and beyond.', icon: <Sparkles size={32} /> },
                        { title: 'Proven Results', desc: '3.5x higher engagement compared to traditional brand content.', icon: <div className="text-2xl font-black">3.5x</div> }
                    ].map((card, i) => (
                        <div key={i} className="p-10 rounded-[3rem] premium-glass hover:border-electric-purple/40 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-electric-purple/10 flex items-center justify-center text-electric-purple mb-6 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{card.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Masonry-style Grid for UGC placeholders */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className={`break-inside-avoid relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/5 group ${item % 3 === 0 ? 'aspect-video' : 'aspect-[9/16]'}`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/20 to-transparent opacity-40" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-white/40 transition-colors">Capture_Reel_0{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
