import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#05070a] text-white selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                    Beyond <br />
                    <span className="gradient-text italic">The Frame.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                    Tinted Media isn't just a marketing agency. We are a culture-forward creative collective
                    dedicated to bridging the gap between brands and the next generation.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-gray-100">
                        <Image
                            src="/gad 3.png"
                            alt="Our Philosophy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Our Philosophy</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                            We believe that authenticity is the only currency that matters in the digital age.
                            Our approach combines raw, unfiltered creativity with data-driven precision to ensure
                            your brand doesn't just join the conversation—it leads it.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {['Creative First', 'Culturally Relevant', 'Data Driven', 'Gen-Z Native'].map((tag) => (
                                <span key={tag} className="px-6 py-2 border-2 border-black rounded-full text-sm font-black uppercase tracking-widest">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Neon accents */}
            <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {[
                    { label: 'Projects Completed', val: '500+' },
                    { label: 'Global Clients', val: '50+' },
                    { label: 'Content Reach', val: '100M+' },
                    { label: 'Awards Won', val: '12' }
                ].map((stat) => (
                    <div key={stat.label} className="space-y-2">
                        <h4 className="text-5xl md:text-7xl font-black text-electric-blue tracking-tighter">{stat.val}</h4>
                        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Mission Card */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="p-12 md:p-20 rounded-[4rem] premium-glass relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric-purple/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10 italic">
                        Our <br /><span className="text-neon-lime">Mission.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed relative z-10">
                        "To redefine the standard of digital excellence by empowering brands with content that feels human,
                        looks premium, and yields undeniable results."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
