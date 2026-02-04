import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const serviceName = slug.split('-').join(' ').toUpperCase();

    return (
        <main className="min-h-screen bg-[#05070a] text-white selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full h-96 bg-electric-blue/5 blur-[150px] pointer-events-none" />

                <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter sm:text-7xl leading-[0.85] mb-12">
                    {serviceName.split(' ')[0]} <br />
                    <span className="gradient-text italic">{serviceName.split(' ').slice(1).join(' ')}</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
                    Architecting high-performance {serviceName.toLowerCase()} solutions that define the next era of digital dominance.
                    We don't just execute—we innovate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full text-left">
                    {[
                        { title: 'Strategic Planning', desc: 'Custom roadmaps built on cultural data.' },
                        { title: 'Elite Execution', desc: 'Precision driven delivery with zero compromise.' },
                        { title: 'Scaling Growth', desc: 'Sustained momentum beyond initial impact.' }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[3rem] premium-glass relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:text-electric-blue transition-all">
                                <span className="text-6xl font-black">0{i + 1}</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">{item.title}</h3>
                            <p className="text-gray-500 font-medium relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
