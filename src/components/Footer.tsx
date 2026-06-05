interface FooterProps {
  onViewChange: (view: string) => void;
  onOpenDoc: (docType: string) => void;
}

export default function Footer({ onViewChange, onOpenDoc }: FooterProps) {
  return (
    <footer className="bg-[#131313] border-t border-[#333333] flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-10 py-12 gap-8 max-w-full">
      <div
        onClick={() => onViewChange("home")}
        className="font-display text-4xl text-white cursor-pointer hover:opacity-80 transition-opacity"
      >
        RARE_VOID
      </div>

      <div className="flex gap-6 font-mono text-[11px] text-zinc-500">
        <button
          onClick={() => onOpenDoc("PRIVACY_INFO_LOG")}
          className="hover:text-white transition-colors duration-150 uppercase bg-transparent"
        >
          Privacy
        </button>
        <button
          onClick={() => onOpenDoc("TERMS_OF_ENGAGEMENT")}
          className="hover:text-white transition-colors duration-150 uppercase bg-transparent"
        >
          Terms
        </button>
        <button
          onClick={() => onOpenDoc("SHIPPING_PROTOCOL")}
          className="hover:text-white transition-colors duration-150 uppercase bg-transparent"
        >
          Shipping
        </button>
        <button
          onClick={() => onViewChange("collection")}
          className="hover:text-white transition-colors duration-150 uppercase bg-transparent"
        >
          Archive
        </button>
      </div>

      <div className="font-mono text-[10px] text-zinc-500 uppercase text-center md:text-right">
        ©2024 RARE_VOID INDUSTRIAL EXCLUSIVES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
