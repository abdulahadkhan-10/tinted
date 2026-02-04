import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function BTSPage() {
    return (
        <main className="min-h-screen bg-[#05070a] text-white selection:bg-electric-blue selection:text-white font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="space-y-4">
                        <span className="px-4 py-1 border border-electric-blue text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em] rounded-full">Archive // 2024-25</span>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                            The <span className="gradient-text italic">Unfiltered</span> <br /> Process.
                        </h1>
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                        Peek behind the curtain of our high-production sets, strategy sessions, and creative chaos.
                    </p>
                </div>
            </section>

            {/* Hero Asset for BTS */}
            <section className="px-6 pb-32 max-w-7xl mx-auto">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                    <Image
                        src="/Stop.png"
                        alt="Process Hero"
                        fill
                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                    <div className="absolute bottom-12 left-12">
                        <h3 className="text-3xl font-black uppercase tracking-tighter">On Location: Mumbai</h3>
                        <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">Commercial Production // Q4 2024</p>
                    </div>
                </div>
            </section>

            {/* Grid of raw moments */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 border-l-4 border-electric-blue pl-6">Raw Captures</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="aspect-square relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-mono text-[10px] tracking-widest uppercase">
                                [Moment_0{item}_Loading]
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent group-hover:opacity-0 transition-opacity" />
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-500">03:4{item} PM</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
