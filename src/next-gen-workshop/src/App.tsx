/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cpu, 
  Settings2, 
  ArrowRight, 
  Share2, 
  Network, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDll-e_lokFQRiqLTVOagHZsvrLth9L2NuPnT96eVz2Y4XXr1W_PkQ9A8ZovimLGjKu3VJ_E_tPFepysemID8XhQa1lO8jcaEFZd8fW6Ihg86GeUGX1TL3GwWDYzJo-4a-bOkAb1J5RdQ5lUefQpOssCsXYmMSSh9A4GaYTLhDQDX67b0xGmUPzhY5srdgXqHcb42W-sQNM8d-d7ux_a4oxjoV7vHLebEGRJy6mreKQGCy7_-g3o-HzlN8YqGNvZ9gLolvo2mE_W2U",
  sivaraj: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1F5V_0mMqSdF-6yByDtaSLrin407dFLD3CGv2LH1PguK738t4JgLlwC2yOiRg516s7uolQ3FLNgaN1df-Yp558UbuuLvfPMdoq8TcK-HRKbJtbaRnGB9_evTV2on15NEYnnVvUuaWfpDjfsYkNkC5YAoHPkZvNvlUARVYDD-MVvN7RD15QQBe6cLUn-R40zcTgKBEP0phudMJ6HfpDklmKVbqF_n2Jl_sab7WRxvrOWDTfR4ucAh4QZAPPON7ZfwTWttcWS-k-qs",
  praba: "https://lh3.googleusercontent.com/aida-public/AB6AXuATh5A-LsJIzqWm5CVpZwCckd0GOtInk3CvsANV0JnDkjh491fymHNIjMFX8GPnu-uEWZMR-7ofQ6H1BWs-yjD7mgch7MwcobOqawvqSWyqBlpe_0Hw1NV9Igs6SM8NqKzxqd0J5QjFBrvkhRBSfS8gzEQHPQdxjpnKBmpp5FnHR5PSXZQanwIPHZnsO89Hf_DcnjHW8F8t2zKqt0nW8b4hvnzW6-oyUAX2np4p-DGTcYJt_b6g3frqKYidh-dcG8h5_Q67g-BHmYk"
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-cyan selection:text-brand-dark">
      {/* Background Decor */}
      <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none z-0" />

      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full bg-brand-dark/80 backdrop-blur-md border-b-2 border-brand-gray shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Cpu className="text-brand-cyan w-8 h-8 scale-x-[-1]" />
            <span className="font-display font-black uppercase tracking-widest text-xl md:text-2xl text-brand-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
              NEXT GEN WORKSHOP
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Services", "About Founders", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-display text-xs font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-brand-cyan transition-colors"
                id={`nav-${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-brand-cyan text-brand-dark font-display font-black uppercase tracking-[0.1em] px-6 py-2 active:scale-95 transition-all duration-300 border-2 border-brand-cyan hover:bg-transparent hover:text-brand-cyan"
              id="book-now-header"
            >
              BOOK NOW
            </button>
          </nav>

          <button 
            className="md:hidden text-brand-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-dark border-b border-brand-gray p-6 flex flex-col gap-4"
          >
            {["Services", "About Founders", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gray-400"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-cyan text-brand-dark font-display font-black uppercase tracking-[0.1em] py-3 w-full">
              BOOK NOW
            </button>
          </motion.div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="font-display text-xs font-bold text-brand-cyan uppercase tracking-[0.2em] mb-4 block">
                Engineered for Performance
              </span>
              <h1 className="font-display text-6xl md:text-8xl uppercase font-black mb-8 heading-impact leading-none">
                REVOLUTIONIZING THE <span className="text-brand-cyan glow-cyan">WORKSHOP</span> EXPERIENCE
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                At Nex Gen Workshop, we don't just repair vehicles; we optimize them using the latest in digital telemetry and high-precision engineering.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] md:aspect-square bg-brand-gray/50 border border-brand-gray p-2 overflow-hidden relative group">
                <img 
                  src={IMAGES.hero} 
                  alt="High-tech workshop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[12px] border-brand-cyan/20 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story & Stats Section */}
        <section className="bg-brand-dark/50 py-32 border-y border-brand-gray/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl uppercase font-extrabold mb-8 heading-impact">
                  OUR <span className="text-brand-orange">STORY</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>Founded on the principle of technical superiority, Nex Gen emerged from a gap in the luxury automotive market—the need for a workshop that understands software as much as hardware.</p>
                  <p>We saw owners of modern performance vehicles struggling with generic service centers that lacked the specialized tools and telemetry required for today's complex drivetrains.</p>
                  <p>Nex Gen was built to be the sanctuary for high-performance machines, where every diagnostic is a data-driven mission and every repair is executed with surgical precision.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-48 md:h-64 bg-brand-gray/30 border border-brand-gray flex flex-col items-center justify-center p-6 text-center"
                >
                  <span className="text-4xl md:text-5xl font-display font-black text-brand-cyan heading-impact mb-2">500+</span>
                  <span className="font-display text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Performance Tuned</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-48 md:h-64 bg-brand-cyan border border-brand-cyan flex flex-col items-center justify-center p-6 text-center"
                >
                  <span className="text-4xl md:text-5xl font-display font-black text-brand-dark heading-impact mb-2">0.01</span>
                  <span className="font-display text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark/70">Error Margin</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-4xl md:text-6xl uppercase font-black mb-24 text-center heading-impact leading-none">
            THE ARCHITECTS OF <span className="text-brand-cyan">SPEED</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {/* Sivaraj */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden bg-brand-gray h-[400px] md:h-[500px]">
                <img 
                  src={IMAGES.sivaraj} 
                  alt="Sivaraj"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-dark to-transparent">
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-bold text-brand-cyan mb-1">Sivaraj</h3>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">OWNER & FOUNDER</p>
                </div>
              </div>
              <div className="border-l-4 border-brand-cyan pl-6">
                <p className="text-gray-400 leading-relaxed italic md:not-italic">
                  With over two decades in mechanical engineering and a passion for endurance racing, Sivaraj founded Nex Gen to bridge the gap between track-side expertise and consumer service. His vision drives our technical standards and relentless pursuit of perfection.
                </p>
              </div>
            </motion.div>

            {/* Praba */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden bg-brand-gray h-[400px] md:h-[500px]">
                <img 
                  src={IMAGES.praba} 
                  alt="Praba Sivaraj"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-dark to-transparent">
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-bold text-brand-cyan mb-1">Praba Sivaraj</h3>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">CO-FOUNDER</p>
                </div>
              </div>
              <div className="border-l-4 border-brand-cyan pl-6">
                <p className="text-gray-400 leading-relaxed italic md:not-italic">
                  Praba brings strategic precision and digital innovation to the workshop. By integrating advanced CRM and real-time telemetry updates for clients, she has redefined the transparency and efficiency of the automotive service experience for the digital age.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Footer Callout */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <div className="bg-brand-gray/30 border border-brand-gray p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Settings2 className="text-brand-gray w-24 h-24 opacity-20" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl uppercase font-black mb-6 heading-impact">
                READY FOR THE <span className="text-brand-cyan">NEXT GEN</span> TREATMENT?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Experience automotive care that matches the intelligence of your vehicle. Book your diagnostic session today.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-cyan text-brand-dark font-display font-black uppercase tracking-[0.1em] px-8 py-4 flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  BOOK APPOINTMENT
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-brand-cyan text-brand-cyan font-display font-black uppercase tracking-[0.1em] px-8 py-4 hover:bg-brand-cyan/10 transition-colors">
                  VIEW SERVICES
                </button>
              </div>
            </div>

            {/* Tech Status Stats */}
            <div className="mt-16 pt-10 border-t border-brand-gray flex flex-wrap gap-x-12 gap-y-6 overflow-x-auto scrollbar-hide">
              {[
                { label: "System Status", value: "OPTIMIZED", color: "text-brand-cyan" },
                { label: "Version", value: "V4.02.24" },
                { label: "Latency", value: "14MS" },
                { label: "Encryption", value: "AES-256" }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{stat.label}</span>
                  <span className={`font-mono text-sm font-bold tracking-wider ${stat.color || "text-gray-300"}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-gray">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-brand-cyan">
                <Cpu className="w-6 h-6 scale-x-[-1]" />
                <span className="font-display font-bold uppercase tracking-wider text-sm">NEX GEN PERFORMANCE</span>
              </div>
              <p className="font-display text-[10px] font-bold text-gray-600 tracking-[0.1em]">
                © 2024 NEX GEN PERFORMANCE. ALL RIGHTS RESERVED.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["Services", "Appointment", "About Founders", "Privacy Policy"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className={`font-display text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${link === 'About Founders' ? 'text-brand-cyan' : 'text-gray-600 hover:text-brand-orange'}`}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="p-3 border border-brand-gray text-gray-600 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 border border-brand-gray text-gray-600 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <Network className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
