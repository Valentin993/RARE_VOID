import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import CollectionView from "./components/CollectionView";
import ContactView from "./components/ContactView";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import Toast from "./components/Toast";
import { Product, CartItem } from "./types";
import { X, Shield, Truck, FileText, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [activeView, setActiveView] = useState<string>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  // Custom document overlay state (Privacy, Terms, Shipping)
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  // Success feedback toast alert state
  const [toast, setToast] = useState<{ message: string; type?: "success" | "info" | "error" } | null>(null);

  // Scroll to Top state
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync state with url hash on load & on change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      if (["home", "about", "collection", "contact"].includes(hash)) {
        setActiveView(hash);
      } else {
        setActiveView("home");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleViewChange = (view: string) => {
    window.location.hash = view === "home" ? "/" : `/${view}`;
    setActiveView(view);
  };

  const showToastMsg = (message: string, type: "success" | "info" | "error" = "success") => {
    setToast({ message, type });
  };

  // Add item to bag handler
  const handleAddToBag = (product: Product, size: string) => {
    const itemId = `${product.id}-${size}`;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === itemId);
      if (existing) {
        showToastMsg(`INCREMENT_QUANTITY_SYS: UPDATED ${product.name} (SIZE: ${size}) QUANTITY.`);
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToastMsg(`PAYLOAD_MOUNTED_SYS: ${product.name} (SIZE: ${size}) MOUNTED IN CART.`);
        return [...prevCart, { id: itemId, product, quantity: 1, size }];
      }
    });
  };

  // Quick select details option
  const handleSelectProduct = (product: Product) => {
    setActiveProduct(product);
  };

  // Update quantity handler
  const handleUpdateQuantity = (id: string, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const nextQ = item.quantity + amount;
          return { ...item, quantity: nextQ > 0 ? nextQ : 1 };
        }
        return item;
      })
    );
  };

  // Remove basket items handler
  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === id);
      if (item) {
        showToastMsg(`PAYLOAD_DISCHARGED: REMOVED ${item.product.name} FROM BUFFER.`, "info");
      }
      return prevCart.filter((i) => i.id !== id);
    });
  };

  // Simulated Checkout complete trigger
  const handleCheckoutComplete = () => {
    showToastMsg("TRANSACTION_SECURE_AUTH: CHECKOUT TRANSMISSION SUBMITTED SUCCESSful.", "success");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col relative">
      
      {/* Universal header navigation */}
      <Navbar
        activeView={activeView}
        onViewChange={handleViewChange}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cart.reduce((s, c) => s + c.quantity, 0)}
      />

      {/* Main viewport rendering views with transitions */}
      <main className="flex-grow flex flex-col w-full relative">
        {activeView === "home" && (
          <HomeView
            onViewChange={handleViewChange}
            onSelectProduct={handleSelectProduct}
            onShowSuccessToast={(msg) => showToastMsg(msg, "success")}
          />
        )}
        {activeView === "about" && (
          <AboutView onViewChange={handleViewChange} />
        )}
        {activeView === "collection" && (
          <CollectionView onSelectProduct={handleSelectProduct} />
        )}
        {activeView === "contact" && (
          <ContactView onShowSuccessToast={(msg) => showToastMsg(msg, "success")} />
        )}
      </main>

      {/* Universal brand footer layout */}
      <Footer
        onViewChange={handleViewChange}
        onOpenDoc={(doc) => setActiveDoc(doc)}
      />

      {/* Product Specification Overviews Details Portal */}
      <AnimatePresence>
        {activeProduct && (
          <ProductModal
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
            onAddToBag={handleAddToBag}
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer sliding element panel */}
      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckoutComplete}
          />
        )}
      </AnimatePresence>

      {/* Instant lookup database indexes overlay */}
      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </AnimatePresence>

      {/* Floating System alerts Toasts */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      {/* Interactive dynamic company legal/shipping documents preview modal */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
              onClick={() => setActiveDoc(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#131313] border border-[#333333] w-full max-w-2xl flex flex-col shadow-2xl z-10 p-[1px]"
            >
              {/* Header bar */}
              <div className="p-4 bg-[#0e0e0e] border-b border-[#333333] flex justify-between items-center font-mono">
                <div className="flex items-center gap-2">
                  {activeDoc === "PRIVACY_INFO_LOG" && <Shield className="w-4 h-4 text-white" />}
                  {activeDoc === "SHIPPING_PROTOCOL" && <Truck className="w-4 h-4 text-white" />}
                  {activeDoc === "TERMS_OF_ENGAGEMENT" && <FileText className="w-4 h-4 text-white" />}
                  <span className="text-white uppercase font-bold text-xs tracking-wider">
                    {activeDoc} // CORE_SYS
                  </span>
                </div>
                <button
                  onClick={() => setActiveDoc(null)}
                  className="text-zinc-500 hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Document contents details */}
              <div className="p-8 md:p-10 font-mono text-xs uppercase text-zinc-400 space-y-6 max-h-[70vh] overflow-y-auto leading-relaxed">
                {activeDoc === "PRIVACY_INFO_LOG" && (
                  <>
                    <p className="text-white font-bold text-sm mb-4">
                      [DATA PROTECTION REGISTER PROTOCOL]
                    </p>
                    <p>
                      YOUR DIGITAL PROFILE ACCURACY AND PRIVACY STATUS ARE SECURED WITH HIGH-END MODERN PROTOCOLS. WE LOG TRANSMISSIONS AND INVENTORY SIGNALS SOLELY TO TRACK PURCHASE AND SECURE SHIPMENTS.
                    </p>
                    <p>
                      WE WILL NEVER EXPOSE, DEPOSIT, OR TRANSMIT ANY ENCRYPTED LOG DATA TO THIRD-PARTY BROKERS. DELETING PERSONAL INVENTORY RECORDS IS OBTAINED VIA NOTIFYING THE DEV LAB TEAM IMMEDIATELY.
                    </p>
                  </>
                )}

                {activeDoc === "TERMS_OF_ENGAGEMENT" && (
                  <>
                    <p className="text-white font-bold text-sm mb-4">
                      [TERMS &amp; SYSTEMS AGREEMENTS]
                    </p>
                    <p>
                      BY INTERFACING WITH THE RARE_VOID INFRASTRUCTURE AND TRANSMITTING SIZES OR CHECKS, YOU ACKNOWLEDGE REJECTING THE SUPERFICIAL AND ACCEPTING THE RAW INTEGRITY OF INDUSTRIAL STENCILS.
                    </p>
                    <p>
                      ALL GARMENTS AND ACCESSORY UTILITIES ARE CLASSED UNDER EXCLUSIVE HARD-WEARING INVENTORY SERIES, COVERED BY WARRANTY SYSTEMS OF QUALITY RECOVERY. ALL DISPATCHES ARE ASSIGNED UNIQUE BARCODES.
                    </p>
                  </>
                )}

                {activeDoc === "SHIPPING_PROTOCOL" && (
                  <>
                    <p className="text-white font-bold text-sm mb-4">
                      [GLOBAL DISTRIBUTION LOGISTICS]
                    </p>
                    <p>
                      SECURE TRUCKING ROUTING SERVICES OPERATE OUTSIDE MAJOR CONCRETE LABS DAILY:
                    </p>
                    <ul className="space-y-3 pt-2 text-zinc-300">
                      <li>• WESTERN EUR ZONE: 2 - 4 BUSINESS CYCLES (DISPATCH FROM BERLIN CORE)</li>
                      <li>• NORTH AMERICAN CONTINENT: 4 - 8 CYCLES (FULLY TRACKED PRIORITY COURIERS)</li>
                      <li>• ARCHIVE CHANNELS / WORLDWIDE: UP TO 10 DAYS FOR SECURED ACCESS PORTS</li>
                    </ul>
                    <p className="pt-2 text-[11px] text-zinc-500">
                      INTELLIGENT UNIQUE TRACKING NUMERICS ARE TRANSMITTED VIA COMM_CHANNELS IMMEDIATELY UPON CONVEYANCE.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Scroll-to-Top Navigation Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            title="Scroll to main system header"
            className="fixed bottom-6 right-6 z-[80] bg-[#1a1a1a] hover:bg-white text-white hover:text-[#131313] border border-[#333333] hover:border-white font-mono text-[10px] uppercase tracking-widest px-4 py-2.5 transition-all duration-200 flex items-center gap-2 select-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>TO_TOP</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
