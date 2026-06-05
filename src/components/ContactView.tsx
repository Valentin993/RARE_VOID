import { useState, FormEvent } from "react";
import { ArrowRight, MapPin, Map, ExternalLink, Activity, Info, X } from "lucide-react";
import { LOCATIONS } from "../data";
import { LocationNode, Inquiry } from "../types";

interface ContactViewProps {
  onShowSuccessToast: (msg: string) => void;
}

export default function ContactView({ onShowSuccessToast }: ContactViewProps) {
  // Form coordinates state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("GENERAL_INQUIRY");
  const [message, setMessage] = useState("");

  // Map popup dialog state
  const [activeMapNode, setActiveMapNode] = useState<LocationNode | null>(null);

  // Locally simulated history log of secure transmissions
  const [transmissionHistory, setTransmissionHistory] = useState<Inquiry[]>([
    {
      id: "LINE_009_RD",
      name: "SYSTEM_AGENT_TEST",
      email: "test.probe@rarevoid.com",
      designation: "TECHNICAL_SUPPORT",
      message: "Diagnostic protocol online. Secure payload interface active.",
      timestamp: "2026-06-05 22:44:15"
    }
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const newInquiry: Inquiry = {
      id: `TX_${Math.floor(1000 + Math.random() * 9000)}_SEC`,
      name: name.toUpperCase(),
      email: email.toUpperCase(),
      designation: subject,
      message: message,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19)
    };

    setTransmissionHistory([newInquiry, ...transmissionHistory]);
    onShowSuccessToast(`COMM_TRANSMIT_SUCCESS_SYS: PAYLOAD ${newInquiry.id} REGISTERED.`);
    
    // Clear state
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex-grow flex flex-col w-full">
      {/* Hero Header Split Section (60/40) */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#333333] relative min-h-[40vh] md:min-h-[50vh]">
        <div className="md:col-span-5 flex flex-col justify-end p-8 md:p-12 relative z-10 bg-[#131313]/90 backdrop-blur-xs">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            [SECURE_INTERFACE_INIT]
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5rem] text-white uppercase leading-none mb-6">
            CONTACT /
            <br />
            SYSTEMS
          </h1>
          <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-none mt-4">
            Direct Interface Protocol v1.0
          </p>
        </div>

        <div className="md:col-span-7 relative h-[300px] md:h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-70 scale-100 hover:scale-[1.03] transition-transform duration-700 ease-in-out cursor-pointer"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida/ADBb0ujv7LFzsGu5aT0IUg4q6wCUU2NbIEUfY7TR8S5nB8oMqLGer9wyASol1qf9jpYNDrtaH_VMDRSeFyfPDX4JQRVDr5KTMtgYioF3baPKxBcRvXS9yjmTCsSPdgtkMtC4uuhToIMLFwrbl0AzlUDQNcrTcUWgLQo_m2y0fuqsZ9a8-GVYSvH532zg4Qxm3aTOeo6TTBQ_S2zvhGn0C4oL1KtlfB1cPk-tjl2MRwh__SkWzSa4nm1w53sFnQ')"
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Two Column Grid: Inquiries Form & Physical Logistics Coordinates */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#333333]">
        
        {/* Left Column: Form payload entry (7/12 Width) */}
        <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-[#333333] p-8 md:p-12 lg:p-16 flex flex-col bg-[#0e0e0e]/50">
          <div className="mb-10 flex justify-between items-end border-b border-[#222222] pb-4">
            <h2 className="font-display text-3xl text-white uppercase tracking-wider">
              INQUIRIES
            </h2>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest select-none">
              [SECURE_PAYLOAD_TRANSMIT]
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-2xl">
            {/* Name Input */}
            <div className="group flex flex-col">
              <label
                htmlFor="name"
                className="font-mono text-[10px] text-zinc-500 uppercase mb-2 group-focus-within:text-white transition-colors tracking-widest"
              >
                01. IDENTIFICATION // OWNER_NAME
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ENTER_NAME"
                className="bg-transparent border-0 border-b border-[#333333] focus:border-white focus:ring-0 text-white font-mono text-xs py-3 px-0 outline-none uppercase placeholder-zinc-700 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="group flex flex-col">
              <label
                htmlFor="email"
                className="font-mono text-[10px] text-zinc-500 uppercase mb-2 group-focus-within:text-white transition-colors tracking-widest"
              >
                02. COMM_CHANNEL // EMAIL_ADDR
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_EMAIL"
                className="bg-transparent border-0 border-b border-[#333333] focus:border-white focus:ring-0 text-white font-mono text-xs py-3 px-0 outline-none uppercase placeholder-zinc-700 transition-colors"
              />
            </div>

            {/* Category Dropdown Selection */}
            <div className="group flex flex-col">
              <label
                htmlFor="subject"
                className="font-mono text-[10px] text-zinc-500 uppercase mb-2 group-focus-within:text-white transition-colors tracking-widest"
              >
                03. DESIGNATION // CHN_SELECT
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#131313] border-0 border-b border-[#333333] focus:border-white focus:ring-0 text-white font-mono text-xs py-3 px-0 outline-none uppercase cursor-pointer"
              >
                <option value="GENERAL_INQUIRY">GENERAL_INQUIRY // ARCH_QUERY</option>
                <option value="PRESS_&_MEDIA">PRESS_&amp;_MEDIA // PUBLIC_NEWS</option>
                <option value="WHOLESALE">WHOLESALE // BULK_ORDER_SYSTEM</option>
                <option value="TECHNICAL_SUPPORT">TECHNICAL_SUPPORT // DEVI_RECOVERY</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="group flex flex-col">
              <label
                htmlFor="message"
                className="font-mono text-[10px] text-zinc-500 uppercase mb-2 group-focus-within:text-white transition-colors tracking-widest"
              >
                04. DATA_PAYLOAD // MSG_DATA_STREAM
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="INPUT_MESSAGE_DATA..."
                className="bg-[#131313] border border-[#333333] focus:border-white focus:ring-0 text-white font-mono text-xs p-4 outline-none resize-none placeholder-zinc-700 uppercase"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-white text-black font-mono text-xs uppercase px-8 py-4 hover:bg-[#131313] hover:text-white border border-transparent hover:border-white transition-all duration-150 inline-flex items-center gap-3 select-none font-bold"
              >
                TRANSMIT SIGNALS
                <ArrowRight className="w-4 h-4 text-current" />
              </button>
            </div>
          </form>

          {/* Active transmitted signal streams log viewer */}
          <div className="mt-16 border-t border-[#222222] pt-8 bg-[#0e0e0e]/20">
            <h3 className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              [ONLINE_SIGNAL_FEEDBACK_CHANNELS]
            </h3>

            <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2">
              {transmissionHistory.map((log) => (
                <div key={log.id} className="p-4 border border-[#222222] bg-[#0c0c0c] font-mono text-[11px]">
                  <div className="flex justify-between items-start text-zinc-500 border-b border-[#222222] pb-2 mb-2">
                    <span className="text-white font-bold">{log.id}</span>
                    <span>{log.timestamp}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-zinc-400 uppercase mb-1">
                    <div>FROM: <span className="text-white">{log.name}</span></div>
                    <div className="col-span-2">ADDR: <span className="text-white truncate">{log.email}</span></div>
                  </div>
                  <div className="text-zinc-500 uppercase mb-2">
                    TYPE: <span className="text-white bg-zinc-800 px-1 py-0.2">{log.designation}</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed uppercase pl-2 border-l border-zinc-500">
                    "{log.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: physical logistics addresses and coordinates (5/12 Width) */}
        <div className="md:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col bg-[#131313]">
          <div className="mb-10 flex justify-between items-end border-b border-[#222222] pb-4">
            <h2 className="font-display text-3xl text-white uppercase tracking-wider">
              LOGISTICS
            </h2>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest select-none">
              [PHYSICAL_NODES]
            </span>
          </div>

          <div className="flex flex-col gap-12">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="group border-b border-[#222222] pb-8 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-3xl text-white uppercase leading-none select-none">
                    {loc.city}
                  </h3>
                  <span className="font-mono text-[9px] text-[#8e9192] border border-[#333333] px-2 py-0.5 bg-[#0e0e0e] tracking-widest select-none">
                    {loc.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-zinc-400 uppercase">
                  <div>
                    <p className="text-white font-bold mb-1">{loc.name}</p>
                    <p>{loc.address1}</p>
                    <p>{loc.address2}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">COORD_Y: {loc.coordN}</p>
                    <p className="text-white">COORD_X: {loc.coordE}</p>
                    <p className="mt-2 text-zinc-600">HRS: {loc.hours}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#1f1f1f] flex justify-between items-center">
                  <button
                    onClick={() => setActiveMapNode(loc)}
                    className="font-mono text-[10px] text-white hover:underline uppercase inline-flex items-center gap-1.5 bg-transparent select-none font-bold"
                  >
                    <Map className="w-3.5 h-3.5 text-zinc-500" />
                    VIEW_MAP_IFRAME
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Logo / Online Systems Online Status Section */}
      <section className="w-full bg-[#0e0e0e] py-24 flex flex-col items-center justify-center relative overflow-hidden h-[400px]">
        {/* Large Typography ribbon backdrop */}
        <div className="absolute inset-x-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none whitespace-nowrap overflow-hidden">
          <span className="font-display text-[18vw] leading-none text-white font-bold tracking-widest">
            SYSTEMS_ONLINE
          </span>
        </div>

        <div className="z-10 relative group text-center cursor-pointer">
          <div className="font-display text-4xl text-zinc-700 tracking-widest font-black uppercase mb-2 group-hover:text-white transition-colors">
            RARE_VOID
          </div>
          <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
            ● ALL_SYSTEMS_ONLINE // PROTOCOL_V1.0
          </p>
        </div>
      </section>

      {/* Interactive Maps Iframe Embed Modal Custom dialog */}
      {activeMapNode && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setActiveMapNode(null)} />
          
          <div className="relative bg-[#131313] border border-[#333333] w-full max-w-3xl flex flex-col shadow-2xl z-10 p-[1px]">
            {/* Header */}
            <div className="p-4 bg-[#0e0e0e] border-b border-[#333333] flex justify-between items-center font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white uppercase font-bold text-xs tracking-wider">
                  NODE_MAP: {activeMapNode.city} // {activeMapNode.name}
                </span>
              </div>
              <button
                onClick={() => setActiveMapNode(null)}
                className="text-zinc-500 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embed / Visual Map Container */}
            <div className="w-full h-[400px] border-b border-[#333333] bg-[#090909] relative">
              <iframe
                title={`Map of ${activeMapNode.city}`}
                src={activeMapNode.mapEmbed}
                className="w-full h-full border-0 grayscale-map"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info details */}
            <div className="p-6 bg-[#0e0e0e] font-mono text-[11px] text-zinc-400 uppercase flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <span className="text-white block font-bold mb-0.5">ADDRESS:</span>
                <span>{activeMapNode.address1}, {activeMapNode.address2}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-white block font-bold mb-0.5">COORDS:</span>
                <span>{activeMapNode.coordN} / {activeMapNode.coordE}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
