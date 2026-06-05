import { useState } from "react";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import { SlidersHorizontal, ArrowDown, Eye } from "lucide-react";

interface CollectionViewProps {
  onSelectProduct: (product: Product) => void;
}

export default function CollectionView({ onSelectProduct }: CollectionViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "HOODIES", "T-SHIRTS", "OUTERWEAR", "PANTS", "BAGS", "ACCESSORIES"];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "ALL") return true;
    return p.category.toUpperCase() === selectedCategory;
  });

  return (
    <div className="flex-grow flex flex-col w-full">
      {/* Lookbook Hero Header */}
      <section className="relative w-full h-[55vh] md:h-[75vh] border-b border-[#333333] bg-[#1b1b1b] overflow-hidden select-none">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="RARE_VOID Lookbook campaign view"
            className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-90 opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBOF9sMDETAUcnFh0EzrTw_hM5GpRv94HtAkevolzDXBocQq0VMbakfKkJ47jndQBCupA3N9FQPJDwpWCRRtZuxwuLX470aGtR4A6DVSMlqaAuk3ac2FClnADY6c1oOvLwacOk5X00xbYsV8kdFhmazNmJfdHxBAzmwD17MHNra-e6uHNGzcrpQ2N07dIvnsOlO9ciOj5psgwFmobdlNZOP4PULPOgD8jFO4tl-n31yLF2hkf0rcyIgBHbadGVlPrUn-ZvXTe91NQ"
          />
        </div>
        
        {/* Subtle overlays and grid styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:calc((100%-11px)/12)_100px] opacity-10 pointer-events-none" />

        {/* Hero textual callouts */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 md:p-10 z-10 max-w-[1920px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] bg-white text-black px-2.5 py-1.5 uppercase tracking-widest font-bold">
              SEASON 02
            </span>
            <span className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest opacity-80">
              {PRODUCTS.length} ITEMS DETECTED
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl text-white uppercase leading-[0.85] tracking-tighter mb-8 mix-blend-difference break-words max-w-2xl">
            COLLECTION 01
            <br />
            / VOID
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-6 border-t border-white/20 items-stretch md:items-center max-w-4xl">
            <p className="font-mono text-zinc-400 text-xs uppercase tracking-widest leading-relaxed max-w-xs md:max-w-none">
              EXPLORING THE INTERSECTION OF RAW INDUSTRIAL ARCHITECTURE AND SECURE, HIGH-END STREET APPAREL COVES.
            </p>
            <div className="shrink-0 flex items-end">
              <a
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white font-mono text-xs font-bold px-6 py-3.5 uppercase tracking-widest flex items-center gap-2 transition-all leading-none select-none"
              >
                EXPLORE ALL
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Area */}
      <section id="catalog" className="w-full px-6 md:px-10 py-16 scroll-mt-20 max-w-[1920px] mx-auto">
        
        {/* Category filtering tab rows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-4 border-b border-[#333333] gap-6">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
            <h2 className="font-display text-3xl text-white uppercase tracking-wider">
              ARCHIVE_ITEMS
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 bg-[#0e0e0e] border border-[#222222] p-1 rounded-none overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-[#131313] font-bold"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-zinc-500 uppercase shrink-0 pt-0.5 hidden lg:block">
            {filteredProducts.length} SYSTEM RECORDS INDE_D
          </span>
        </div>

        {/* Dynamic Items list */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-[#333333] font-mono text-sm uppercase tracking-widest text-zinc-500">
            [SYS_CATALOG_FILTER_PRODUCT_BUFFER_EMPTY]
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group flex flex-col bg-[#131313] border border-[#222222] hover:bg-[#1b1b1b] hover:border-white transition-all duration-200 cursor-pointer overflow-hidden p-[1px] relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0e0e0e] flex items-center justify-center p-8">
                  {/* Overlay background panel with details description and quick view triggers */}
                  <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 z-20">
                    <div className="font-mono text-[9px] text-[#8e9192] uppercase tracking-widest mb-1">
                      TECHNICAL SPECIFICATIONS
                    </div>
                    <ul className="space-y-1 mb-6">
                      {product.specs.slice(0, 2).map((item, index) => (
                        <li key={index} className="font-mono text-[10.5px] text-zinc-300 leading-tight uppercase truncate">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-white text-black font-display text-xl py-3 uppercase tracking-widest hover:bg-black hover:text-white hover:border hover:border-white flex items-center justify-center gap-1.5 transition-all outline-none duration-150 border border-transparent font-medium">
                      <Eye className="w-4 h-4" />
                      QUICK VIEW
                    </button>
                  </div>

                  <img
                    alt={product.name}
                    className="max-w-full max-h-[40vh] object-contain filter grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:filter-none transition-transform duration-500 group-hover:scale-105 z-10"
                    src={product.img}
                  />

                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-white text-black font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest border border-white">
                      {product.tag}
                    </div>
                  )}

                  <span className="absolute top-4 right-4 z-10 font-mono text-[8.5px] text-zinc-600 bg-black/40 px-1.5 py-0.5 border border-[#222222]">
                    REF.{product.id}
                  </span>
                </div>

                <div className="p-5 border-t border-[#222222] group-hover:border-white/20 flex flex-col justify-between bg-[#131313] group-hover:bg-[#1b1b1b] transition-all gap-3">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-mono text-xs text-white uppercase font-bold tracking-widest truncate">
                      {product.name}
                    </h3>
                    <span className="font-mono text-xs text-white font-bold bg-[#1f1f1f] border border-[#333333] px-2 py-0.5">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-zinc-500 font-mono text-[9.5px]">
                    <span className="uppercase">{product.category}</span>
                    <span className="uppercase text-[9px] truncate max-w-[120px] text-right">
                      {product.material.split("(")[0].trim()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
