import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navbar({
  activeView,
  onViewChange,
  onOpenSearch,
  onOpenCart,
  cartCount
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "collection", label: "Collection" },
    { key: "contact", label: "Contact" }
  ];

  const handleLinkClick = (key: string) => {
    onViewChange(key);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#131313]/95 border-b border-[#333333] flex justify-between items-center w-full px-6 md:px-10 py-4 sticky top-0 z-50 backdrop-blur-md">
      {/* Brand logo */}
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick("home");
        }}
        className="font-display text-[2.2rem] md:text-[2.6rem] tracking-tighter uppercase text-white hover:opacity-80 transition-opacity"
      >
        RARE_VOID
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = activeView === link.key;
          return (
            <a
              key={link.key}
              href={`#/${link.key === "home" ? "" : link.key}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.key);
              }}
              className={`font-mono text-xs uppercase tracking-widest transition-all duration-150 py-1 px-1.5 ${
                isActive
                  ? "text-white border-b-2 border-white font-bold"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Action controls */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* SHOP_NOW Action Button */}
        <button
          onClick={() => handleLinkClick("collection")}
          className="hidden sm:inline-flex bg-white hover:bg-transparent text-black hover:text-white border border-transparent hover:border-white font-mono text-[10px] uppercase font-bold tracking-widest px-4 py-2 transition-all duration-200 select-none shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          [SHOP_NOW]
        </button>

        {/* Search Trigger */}
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="text-white hover:bg-white hover:text-[#131313] transition-all p-2 bg-transparent select-none duration-150"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Shopping Cart Trigger */}
        <button
          onClick={onOpenCart}
          aria-label="Shopping Cart"
          className="text-white hover:bg-white hover:text-[#131313] transition-all p-2 bg-transparent select-none duration-150 relative"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-[#131313] font-mono text-[9px] font-bold w-4 h-4 flex items-center justify-center border border-[#131313]">
              {cartCount}
            </span>
          )}
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-white hover:bg-zinc-800 p-2 transition-all"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drop-down selector menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0e0e0e] border-b border-[#333333] z-50 flex flex-col p-6 space-y-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = activeView === link.key;
            return (
              <a
                key={link.key}
                href={`#/${link.key === "home" ? "" : link.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.key);
                }}
                className={`font-mono text-sm uppercase tracking-widest py-2 border-b border-[#222222] ${
                  isActive ? "text-white font-bold pl-2 border-l-2 border-l-white" : "text-zinc-500"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
