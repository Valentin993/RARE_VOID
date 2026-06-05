import { useState, useEffect } from "react";
import { X, Check, ShieldCheck, HelpCircle } from "lucide-react";
import { Product } from "../types";
import { motion } from "motion/react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBag: (product: Product, size: string) => void;
}

export default function ProductModal({ product, onClose, onAddToBag }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Reset selected size when modal change
    if (product) {
      setSelectedSize("M");
      setIsSuccess(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToBag(product, selectedSize);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop blur */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Main Content Modal Card */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#131313] border border-[#333333] w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-zinc-500 hover:text-white hover:rotate-90 transition-all p-2 duration-300 bg-black/40 backdrop-blur-xs border border-transparent hover:border-[#333333]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Column: Image Area (3/5 Width) */}
        <div className="w-full md:w-3/5 bg-[#0e0e0e] flex items-center justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#333333] relative overflow-hidden min-h-[300px] md:min-h-0">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:10%_10%] opacity-5 pointer-events-none" />

          {product.tag && (
            <div className="absolute top-4 left-4 z-20 bg-white text-black font-mono text-[9px] font-bold px-3 py-1 uppercase tracking-widest border border-white">
              {product.tag}
            </div>
          )}

          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            src={product.img}
            alt={product.name}
            className="max-w-full max-h-[50vh] object-contain z-10 filter grayscale mix-blend-luminosity hover:mix-blend-normal hover:filter-none transition-all duration-300"
          />
        </div>

        {/* Right Column: Details Area (2/5 Width) */}
        <div className="w-full md:w-2/5 flex flex-col p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-none">
          <div className="mb-8">
            <span className="font-mono text-xs text-zinc-500 mb-2 block tracking-widest">
              REF. {product.id} // SYS_ITEM
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[2.8rem] text-white leading-none uppercase mb-2 tracking-tight">
              {product.name}
            </h2>
            <p className="font-mono text-xl text-white font-bold tracking-wider mt-2">
              ${product.price}
            </p>
          </div>

          <div className="space-y-6">
            {/* Description Text */}
            <p className="font-body text-zinc-400 text-xs leading-relaxed">
              {product.details}
            </p>

            {/* Technical Specifications */}
            <div className="border-t border-[#222222] pt-6">
              <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
                [TECHNICAL_SPECIFICATIONS]
              </h4>
              <ul className="space-y-2.5">
                <li className="font-mono text-[11px] text-zinc-400 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-1.5"></span>
                  <div>
                    <span className="text-white font-bold">MATERIAL: </span>
                    {product.material}
                  </div>
                </li>
                {product.specs.map((spec, i) => (
                  <li key={i} className="font-mono text-[11px] text-zinc-400 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-white shrink-0 mt-1.5"></span>
                    <span>{spec.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selector */}
            <div className="border-t border-[#222222] pt-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  [SIZE_SELECT]
                </h4>
                <div className="flex items-center gap-1 font-mono text-[9px] text-zinc-500 uppercase hover:text-white cursor-pointer select-none">
                  <HelpCircle className="w-3 h-3" />
                  <span>SIZE GUIDE</span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 font-mono text-xs uppercase tracking-widest border transition-all duration-150 ${
                      selectedSize === size
                        ? "bg-white text-black border-white font-bold"
                        : "bg-transparent text-white border-[#333333] hover:border-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-6 border-t border-[#222222] mt-auto">
              <button
                onClick={handleAdd}
                disabled={isSuccess}
                className={`w-full py-4 font-display text-2xl uppercase tracking-widest border border-transparent transition-all flex items-center justify-center gap-2 ${
                  isSuccess
                    ? "bg-zinc-800 text-emerald-400 cursor-default"
                    : "bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
                }`}
              >
                {isSuccess ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    ADDED_TO_BAG_SUCCESS
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    ADD TO BAG / SECURE
                  </>
                )}
              </button>
              <p className="font-mono text-[9px] text-zinc-600 text-center mt-3 uppercase tracking-wider">
                ESTIMATED GLOBAL DISPATCH PROTOCOL: 3-5 LAB_DAYS
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
