import { Ruler, Award, Eye } from "lucide-react";

interface AboutViewProps {
  onViewChange: (view: string) => void;
}

export default function AboutView({ onViewChange }: AboutViewProps) {
  return (
    <div className="flex-grow flex flex-col w-full">
      {/* Brand Hero Header Section */}
      <header className="relative w-full h-[50vh] md:h-[65vh] border-b border-[#333333] overflow-hidden group">
        <div className="absolute inset-0 bg-black/50 z-10 transition-colors duration-300 group-hover:bg-black/60" />
        
        <img
          alt="Technical model wearing premium hoody print"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity filter contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgiXCVEYfi6iTnHsKuO64lrFzEE6cUSAjHP3tUDlrRl_FYrkV0zR-8OaAi8GjAMcXhpGDzctPllNkY1EZ0pv6-L1mHcJgAIRkGTwhMAYkEziaHUcFaVA4FoLwVmAgKubujIq7SbBBzav2qzFm5SylMG75o4KFkpZ-hJwHr66aHB-PF0cgFcnh-dyn_TLgXxSyMW1qBzcWhb24NJhYdZredmwFcuhZcz4RuGqVtKIFDvmFgMrpP7GpqjTPvRjfoHOQd9L9HCeJc78"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="font-display text-5xl md:text-[6.5rem] text-white uppercase tracking-tighter leading-none mix-blend-difference">
            VOID PHILOSOPHY
          </h1>
          <p className="font-mono text-xs text-white mt-4 border border-white px-4 py-2 bg-[#131313]/50 backdrop-blur-md uppercase tracking-widest leading-none select-none">
            REJECTING THE SUPERFICIAL.
          </p>
        </div>

        {/* Technical frame markers */}
        <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-[#8e9192] select-none">
          SYS.INIT.01
        </div>
        <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] text-[#8e9192] leading-none select-none">
          LAT. 51.5074 N // LON. 0.1278 W
        </div>
      </header>

      {/* Brand Story Split Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#333333]">
        {/* Left Column vertical text banner indicator */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#333333] p-12 bg-[#0e0e0e] flex flex-row md:flex-col justify-between items-center md:items-start select-none">
          <div className="font-display text-5xl text-white opacity-25">01</div>
          
          <h2 className="font-display text-4xl text-white uppercase md:rotate-180 md:[writing-mode:vertical-lr] tracking-widest select-none pt-0 md:pt-12">
            MANIFESTO
          </h2>
        </div>

        {/* Right Column core block statement */}
        <div className="md:col-span-8 p-8 md:p-16 bg-[#131313] flex flex-col justify-center gap-8">
          <blockquote className="font-display text-2xl md:text-4xl text-white leading-tight uppercase relative">
            "WE CONSTRUCT TOOLS FOR THE URBAN ENVIRONMENT. RARE_VOID IS NOT FASHION; IT IS STRUCTURAL INTEGRITY. WE REJECT THE EPHEMERAL NATURE OF SEASONAL TRENDS IN FAVOR OF INDUSTRIAL-GRADE AESTHETICS AND ABSOLUTE UTILITARIAN FUNCTION."
          </blockquote>
          
          <div className="flex flex-wrap gap-3">
            <span className="font-mono text-[10px] bg-white text-black px-3.5 py-1 uppercase tracking-widest font-bold">
              Anti-Fast Fashion
            </span>
            <span className="font-mono text-[10px] border border-[#333333] text-zinc-400 px-3.5 py-1 uppercase tracking-widest">
              Structural
            </span>
            <span className="font-mono text-[10px] border border-[#333333] text-zinc-400 px-3.5 py-1 uppercase tracking-widest">
              Utility Spec01
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[#333333]">
        {/* Left item model detail */}
        <div className="border-b md:border-b-0 md:border-r border-[#333333] relative group overflow-hidden aspect-[4/5] md:aspect-auto">
          <img
            alt="Studio modeling detail for graphic print hoody"
            className="w-full h-full object-cover filter contrast-125 grayscale transition-transform duration-700 ease-out group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgf_l-dIMAI6YCICON0qyswmHvXvfqtzyq4Cw_7TyxPm1bAeq_kgc9G_w5fKwViJYiq44afdisBhkxGTDrPLshfFUKf8TTBFbO0199LTYd2XvilH3uYfdPpHJc42g4nh0JbuW4oMn2cSY7VD1t5bHvPm1evaNUCGviLf4F6AIxQ0jekVcWah9G7druzcurvfJmkcepPldQwz5m17GL5lftZK4msH8dIHFZllZDtxhsOF0OL-QbwdR90hrWWgIKEuXc_seBobxJPCI"
          />
          <div className="absolute inset-0 border-[16px] border-[#131313]/90 mix-blend-overlay pointer-events-none" />
          <div className="absolute bottom-6 left-6 font-mono text-xs bg-[#131313] border border-[#333333] px-3.5 py-1.5 text-white tracking-widest select-none">
            EST. 2024
          </div>
        </div>

        {/* Right item listed operations nodes node line */}
        <div className="relative bg-[#0e0e0e] flex items-center justify-center p-8 md:p-16 h-[400px] md:h-auto select-none">
          <div className="text-center w-full max-w-sm">
            <h3 className="font-display text-5xl md:text-7xl text-zinc-800 opacity-30 select-none tracking-normal mb-8">
              ARCHIVE
            </h3>
            
            <ul className="space-y-4 font-display text-xl md:text-2xl text-white text-left inline-block w-full">
              <li className="border-b border-[#222222] pb-2 flex justify-between items-end">
                <span className="tracking-widest">BERLIN</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest h-max pb-1">
                  MAIN_LAB
                </span>
              </li>
              <li className="border-b border-[#222222] pb-2 flex justify-between items-end">
                <span className="tracking-widest">PARIS</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest h-max pb-1">
                  SHOWROOM_NODE
                </span>
              </li>
              <li className="border-b border-[#222222] pb-2 flex justify-between items-end">
                <span className="tracking-widest">LONDON</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest h-max pb-1">
                  STORAGE_ARCHIVE
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Structural Manufacturing Process specifications list */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[#333333] bg-[#131313]">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#333333] hover:bg-[#1b1b1b] transition-colors flex flex-col gap-6">
          <div className="w-12 h-12 border border-[#333333] bg-[#0e0e0e] flex items-center justify-center text-white">
            <Ruler className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
              HEAVYWEIGHT COTTON
            </h4>
            <p className="font-body text-zinc-400 text-xs leading-relaxed uppercase">
              SUBSCRIBED FOR DURABILITY. 500GSM MINIMUM DENSE WEIGHT THRESHOLD. ENGINEERED TO STAND UP AGAINST REPETITIVE WEAR, FRICTION, AND ADVERSE ENVIRONMENTAL CHANGES.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#333333] hover:bg-[#1b1b1b] transition-colors flex flex-col gap-6">
          <div className="w-12 h-12 border border-[#333333] bg-[#0e0e0e] flex items-center justify-center text-white">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
              REINFORCED SEAMS
            </h4>
            <p className="font-body text-zinc-400 text-xs leading-relaxed uppercase">
              HIGH-STRENGTH INDUSTRIAL OVERLOCK THREADS. POINT CONTOURS AND MAJOR REINFORCEMENTS PRE-ANCHORED TO REJECT OUTSIDE DECAY OR EARLY INSTABILITY.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 hover:bg-[#1b1b1b] transition-colors flex flex-col gap-6">
          <div className="w-12 h-12 border border-[#333333] bg-[#0e0e0e] flex items-center justify-center text-white">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
              INDUSTRIAL GRAPHICS
            </h4>
            <p className="font-body text-zinc-400 text-xs leading-relaxed uppercase">
              DETAILED HIGH-DENSITY PLASTISOL, TACTILE IMPRESSION EMBOSSED, AND THERMAL REACTION REFLECTIVES. DESIGNS BUILT TO WEATHER AND AGE WITH THE SUBSTRATE RAW FABRIC.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 md:px-12 flex justify-center items-center bg-[#0e0e0e]">
        <button
          onClick={() => onViewChange("collection")}
          className="bg-transparent border border-white text-white font-display text-2xl px-12 py-6 uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all select-none duration-150"
        >
          EXPLORE THE ARCHIVE &rarr;
        </button>
      </section>
    </div>
  );
}
