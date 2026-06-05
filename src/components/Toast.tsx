import { useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgBorder =
    type === "success"
      ? "bg-[#131313] border-white text-white"
      : type === "error"
      ? "bg-red-950/95 border-red-500 text-red-100"
      : "bg-zinc-900 border-zinc-700 text-zinc-100";

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-sm pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`flex items-start gap-4 p-4 border brutal-border shadow-2xl backdrop-blur-md ${bgBorder}`}
      >
        <div className="mt-0.5 shrink-0">
          <Check className="w-4 h-4 text-white font-bold" />
        </div>
        
        <div className="flex-grow">
          <p className="font-mono text-xs uppercase tracking-widest font-bold text-zinc-400">
            [SYS_MESSAGE]
          </p>
          <p className="font-mono text-xs mt-1 leading-relaxed text-white">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="shrink-0 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
