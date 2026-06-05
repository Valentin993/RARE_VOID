import { X, Plus, Minus, Trash2, Lock, ArrowRight } from "lucide-react";
import { CartItem } from "../types";
import { motion } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, amount: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  const subtotal = cart.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-hidden">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xs cursor-pointer"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-screen max-w-md bg-[#131313] border-l border-[#333333] flex flex-col pointer-events-auto h-full relative"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#333333] flex justify-between items-center bg-[#0e0e0e]">
            <div>
              <h2 className="font-display text-4xl text-white tracking-widest uppercase">Cart / Bag</h2>
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                SECURE PHYSICAL ACCESS PROTOCOL
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-12">
                <div className="w-12 h-12 rounded-none border border-dashed border-zinc-700 flex items-center justify-center text-zinc-600 mb-4 font-mono text-xs">
                  00
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  CART_EMPTY_SYS_IDLE
                </p>
                <p className="font-mono text-[11px] text-zinc-600 mt-2 uppercase max-w-xs leading-relaxed">
                  Navigate to collections to transmit items into your local physical payload buffer.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-[#222222] items-start"
                >
                  <div className="w-20 h-24 bg-[#0e0e0e] border border-[#222222] shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>

                  <div className="flex-grow min-w-0">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                      REF. {item.product.id}
                    </span>
                    <h3 className="font-display text-lg text-white leading-tight uppercase truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-mono text-[11px] text-zinc-500 uppercase mt-0.5">
                      SIZE: <span className="text-white font-medium">{item.size}</span>
                    </p>

                    <p className="font-mono text-xs text-white mt-1.5 font-bold">
                      ${item.product.price}
                    </p>

                    {/* Quantity Selector & Remove Button */}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-[#333333]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-0.5 text-xs font-mono text-white select-none border-x border-[#333333]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer controls */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#333333] bg-[#0e0e0e] space-y-4">
              <div className="space-y-1.5 font-mono text-xs text-zinc-400 uppercase">
                <div className="flex justify-between">
                  <span>payload count</span>
                  <span className="text-white">{cart.reduce((s, c) => s + c.quantity, 0)} items</span>
                </div>
                <div className="flex justify-between">
                  <span>Secure Transmission Handling</span>
                  <span className="text-white">FREE</span>
                </div>
                <div className="flex justify-between border-t border-[#222222] pt-4 text-sm font-bold">
                  <span className="text-white">TOTAL PAYLOAD SUB</span>
                  <span className="text-white">${subtotal}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onCheckout}
                  className="w-full bg-white text-black font-display text-2xl py-4 uppercase tracking-widest hover:bg-[#131313] hover:text-white hover:border hover:border-white border border-transparent transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-current" />
                  SECURE TRANSMIT
                  <ArrowRight className="w-5 h-5 text-current" />
                </button>
                <p className="font-mono text-[9px] text-zinc-600 text-center mt-3 uppercase tracking-wider">
                  ENCRYPTED VIA HIGH-END EXCLUSIVE PROTOCOLS • SSL POS
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
