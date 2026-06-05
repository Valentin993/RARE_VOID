import { useState, useEffect } from "react";
import { X, Search, ArrowRight } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import { motion } from "motion/react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

export default function SearchOverlay({ isOpen, onClose, onSelectProduct }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(PRODUCTS.slice(0, 4)); // Show featured by default
    } else {
      const lower = query.toLowerCase();
      const filtered = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower) ||
          p.specs.some((spec) => spec.toLowerCase().includes(lower))
      );
      setResults(filtered);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex flex-col justify-start">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      <div className="relative z-10 w-full bg-[#0e0e0e] border-b border-[#333333] px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">[SYSTEM_INDEX_DEVICES]</span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors duration-150 p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-w-4xl mx-auto mt-8 relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-500" />
          <input
            autoFocus
            type="text"
            placeholder="ENTER_INDEX_PARAMETER (e.g. HOODIE, TEE, French Terry...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-b border-[#333333] hover:border-zinc-500 focus:border-white text-white font-mono text-lg md:text-2xl py-4 pl-10 pr-4 outline-none transition-colors placeholder-zinc-700 uppercase"
          />
        </div>
      </div>

      <div className="relative z-10 flex-grow overflow-y-auto px-6 py-12 md:px-12 bg-[#131313]/90">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-6 px-1 border-l-2 border-white">
            {query ? `MATCHING_NODES_FOUND_ID (${results.length})` : "SUGGESTED_CORE_ARCHIVES"}
          </h3>

          {results.length === 0 ? (
            <div className="py-12 text-center border border-dashed border-[#333333] font-mono text-xs uppercase tracking-widest text-zinc-500">
              [NO_MATCHING_RECORDS_DETECTED]
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="group flex gap-4 p-4 border border-[#222222] hover:border-white hover:bg-[#1b1b1b] transition-all cursor-pointer items-center"
                >
                  <div className="w-16 h-20 bg-[#0e0e0e] border border-[#222222] p-1 flex items-center justify-center shrink-0">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                        REF. {product.id}
                      </span>
                      {product.tag && (
                        <span className="font-mono text-[8px] border border-white/20 bg-white/5 text-white px-1 py-0.2 uppercase">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-[1.4rem] tracking-tight leading-none text-white uppercase group-hover:text-white truncate mt-1">
                      {product.name}
                    </h4>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase mt-0.5">
                      {product.category} // {product.material.split("(")[0].trim()}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-mono text-sm text-white block">${product.price}</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-2" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
