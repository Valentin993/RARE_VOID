import { useState, FormEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import { motion } from "motion/react";

interface HomeViewProps {
  onViewChange: (view: string) => void;
  onSelectProduct: (product: Product) => void;
  onShowSuccessToast: (msg: string) => void;
}

export default function HomeView({
  onViewChange,
  onSelectProduct,
  onShowSuccessToast
}: HomeViewProps) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    onShowSuccessToast(`COMM_SUBSCRIBE_SUCCESS: ${email.toUpperCase()} REG_COMPLETED.`);
    setEmail("");
  };

  // Find the featured first 3 products
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="flex-grow flex flex-col w-full">
      {/* 50/50 Split Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] md:min-h-[70vh] border-b border-[#333333]">
        {/* Left Side text content */}
        <div className="md:col-span-6 flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-[#333333]">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            [SYS_PROTOCOL_INIT]
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white uppercase mb-6 leading-[0.9] tracking-tighter">
            BRUTAL
            <br />
            STREETWEAR
          </h1>
          <p className="font-body text-zinc-400 text-sm md:text-base max-w-md mb-12 leading-relaxed">
            MINIMAL HOODIES INSPIRED BY UNDERGROUND CULTURE, BRUTALISM, AND MODERN STREET FASHION. EVERY PIECE STANDS AS A TOOL OF UTILITY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onViewChange("collection")}
              className="bg-white text-black font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#131313] hover:text-white border border-transparent hover:border-white transition-all duration-150 text-center select-none"
            >
              Shop Collection
            </button>
            <button
              onClick={() => onViewChange("about")}
              className="bg-transparent border border-[#444748] text-white font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-150 text-center select-none"
            >
              Explore About
            </button>
          </div>
        </div>

        {/* Right Side Image Area */}
        <div className="md:col-span-6 relative bg-[#1b1b1b] overflow-hidden min-h-[400px] md:min-h-full flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApyfHyGChHFDYPIhvuRCqjjO3zOvKT0FJg2w3t-4yegX-sZ2NhUvini2-DZJ-EZTWxyE-Qg-eErxh1y5-sbf1-yjKvUpzSLOYJD6fNRvTPqbivCyRSrz5gBkyJuFSElYCI0nSQnmkLgRnhwkVRvrHf_KpVVq9eR8qtEaEHDyUsGy1h9wf8IYz5PIBWbA20qO1WALb-mcc9NBYA4fFfVR-pLQyZhSUHfMXfzd19Rp3TJervZntXigB4KEVTSzfHW04mwBsxs2Mchm4"
            alt="Model wearing brutalist streetwear hoodie"
            className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-transparent pointer-events-none border-t md:border-t-0 border-[#333333]" />
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="w-full overflow-hidden bg-[#2a2a2a] py-3.5 border-b border-[#333333] select-none">
        <div className="whitespace-nowrap flex font-mono text-xs text-white uppercase animate-marquee">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-4">NEW DROP - LIMITED RELEASE - RARE_VOID INDUSTRIAL EXCLUSIVES</span>
              <span className="mx-4 text-zinc-600">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured Collection section */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12 border-b border-[#333333] pb-4">
          <h2 className="font-display text-4xl text-white uppercase tracking-wider">Featured</h2>
          <span className="font-mono text-xs text-zinc-500 border border-[#333333] px-3 py-1 bg-[#1b1b1b] uppercase">
            003 ITEMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group flex flex-col bg-[#131313] border border-[#222222] hover:bg-[#1b1b1b] hover:border-white transition-all duration-200 cursor-pointer overflow-hidden p-[1px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0e0e0e] flex items-center justify-center p-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-w-full max-h-[45vh] object-contain filter grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:filter-none transition-all duration-300 group-hover:scale-105"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-white text-black font-mono text-[9px] font-bold px-2 py-1 uppercase tracking-widest border border-white">
                    {product.tag}
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-[#333333] flex justify-between items-start bg-[#131313] group-hover:bg-[#1b1b1b] transition-all">
                <div>
                  <h3 className="font-mono text-xs text-white uppercase font-bold tracking-widest mb-1 group-hover:text-white">
                    {product.name}
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {product.material.split("(")[0].trim()}
                  </p>
                </div>
                <span className="font-mono text-xs text-white bg-[#1f1f1f] border border-[#333333] px-2.5 py-1 font-bold">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section/Philosophy Teaser */}
      <section className="py-24 px-6 md:px-12 bg-[#0e0e0e] border-y border-[#333333] relative overflow-hidden">
        {/* Repeating grid aesthetics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #8e9192 0, #8e9192 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />

        <div className="max-w-3xl relative z-10 mx-auto text-center md:text-left">
          <h2 className="font-display text-4xl text-white uppercase mb-6 opacity-30 tracking-widest font-bold">
            PHILOSOPHY
          </h2>
          <p className="font-body text-white text-base md:text-xl lg:text-2xl leading-relaxed font-light mb-8 uppercase tracking-wide">
            "WE DESIGN FOR THE CONCRETE LANDSCAPE. REJECTING SUPERFLUOUS DETAIL IN FAVOR OF RAW STRUCTURAL INTEGRITY. EVERY GARMENT IS A TOOL, CONSTRUCTED WITH HIGH-DENSITY MATERIALS AND EXACT SPECIFICATIONS."
          </p>
          <button
            onClick={() => onViewChange("about")}
            className="font-mono text-xs text-white border border-white/30 hover:border-white px-6 py-3 bg-[#131313] uppercase tracking-widest flex items-center gap-2 mx-auto md:mx-0 select-none group transition-all"
          >
            DISCOVER PROTOCOLS
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </section>

      {/* Join the Network Signup Newsletter */}
      <section className="py-24 px-6 md:px-12 flex justify-center items-center bg-[#131313]">
        <div className="w-full max-w-xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-4 tracking-widest font-normal">
            Join the Network
          </h2>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8 leading-relaxed">
            [ACCESS LIMITED RELEASES & EXCLUSIONS INTELLIGENCE DIRECT]
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 group border border-[#333333]">
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-[#0e0e0e] border-0 text-white font-mono text-xs p-4 focus:outline-none placeholder-zinc-700 uppercase"
            />
            <button
              type="submit"
              className="bg-white text-black font-mono text-xs uppercase px-8 py-4 sm:-ml-[1px] hover:bg-[#131313] hover:text-white hover:border-white border border-transparent transition-all font-bold select-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
