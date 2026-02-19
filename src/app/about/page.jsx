'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        Strategy Meets <br />
                        <span className="text-electric-blue italic font-light">Story.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-light max-w-4xl leading-relaxed">
                        Tinted Media is where brands come to stand out. We’re a modern creative and media agency crafting culture-driven campaigns, unforgettable narratives, and content designed to make people stop, look, and engage.
                    </p>
                </motion.div>
            </section>

            {/* Core Values / What We Stand For */}
            <section className="py-20 px-6 bg-gray-50 text-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="space-y-4">
                        <p className="text-electric-blue font-mono text-xs tracking-[0.4em] uppercase">The Manifesto</p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Thoughtful. Bold. <br /> <span className="italic font-light">Rebellious.</span></h2>
                    </div>
                    <div className="md:border-l border-black/10 md:pl-12 max-w-lg">
                        <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
                            We don’t chase the digital pulse. We create it. We elevate brands, empower creators, and turn digital noise into real influence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-100">
                        <Image
                            src="/gad 3.png"
                            alt="Visual Craft"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Our Story</h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                Tinted Media didn’t start with the idea of being “just another agency.” It started with frustration.
                                Too many brands were playing it safe. Too much content looked the same.
                            </p>
                            <p>
                                So we built the kind of creative partner we wished existed — one that thinks like strategists, moves like storytellers, and executes like operators.
                                Tinted Media was born to challenge the ordinary. To tint the lens. To shift perspectives.
                            </p>
                            <p>
                                What began as a vision to do things differently has grown into a creative force helping startups, legacy brands, and digital creators show up louder, sharper, and more culturally relevant than ever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-32 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="space-y-2">
                            <p className="text-electric-blue font-mono text-xs tracking-[0.4em] uppercase">The Leadership</p>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Sadaf Khan</h2>
                            <p className="text-lg font-bold uppercase tracking-widest text-gray-400">Founder & Creative Strategist</p>
                        </div>
                        <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed text-left">
                            <p>
                                Sadaf khan is a creative strategist with an instinct for storytelling and a sharp eye for culture.
                                She understood early on that attention isn’t bought — it’s earned.
                            </p>
                            <p>
                                She built Tinted Media around one belief: Great brands aren’t manufactured. They’re crafted with intention.
                                Her approach blends intuition with insight, art with analytics, and creativity with conversion.
                            </p>
                            <blockquote className="border-l-4 border-electric-blue pl-8 py-4 text-xl font-black italic text-black">
                                "Attention isn't bought — it's earned."
                            </blockquote>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-200 shadow-2xl">
                        {/* Placeholder for founder image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                            Sadaf Khan
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">The <span className="text-electric-blue italic font-light">Collective.</span></h2>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            Powered by a collective of strategists, designers, storytellers, and digital natives who refuse to think small. No egos. No fluff. Just people who care deeply about building work that works.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {[
                            { title: "Strategy Always", desc: "No execution without a calculated plan to move the needle." },
                            { title: "Creativity Without Limits", desc: "Challenging the ordinary to create unmistakable perspectives." },
                            { title: "Results That Speak", desc: "Work that doesn't just look good—it performs in the real world." }
                        ].map((item, i) => (
                            <div key={i} className="p-12 rounded-[3.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-black/5">
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6 bg-white text-black text-center border-t border-black/5">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        Refuse to <br /> <span className="text-electric-blue italic font-light">Blend In.</span>
                    </h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-6 px-12 py-6 bg-black text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-electric-blue transition-all shadow-2xl"
                    >
                        Let's Make Something Unforgettable
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
