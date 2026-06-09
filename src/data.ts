import { Product, LocationNode } from "./types";

import img_001 from "./assets/images/minimal_trippy_hoodie_1781037981845.png";
import img_002 from "./assets/images/brutalist_tee_1781037997082.png";
import img_003 from "./assets/images/void_archive_cap_1781038012941.png";
import img_004 from "./assets/images/rare_void_hoodie_v2_1781038715195.png";
import img_005 from "./assets/images/industrial_hoodie_1781038043361.png";
import img_006 from "./assets/images/brutalist_hoodie_v2_1781038059987.png";
import img_007 from "./assets/images/geometric_back_tee_1781038075592.png";
import img_008 from "./assets/images/void_windbreaker_1781038090268.png";
import img_009 from "./assets/images/cargo_complex_pants_1781038104605.png";
import img_015 from "./assets/images/shoulder_system_bag_1781038119163.png";
import img_016 from "./assets/images/technical_cargo_shorts_1781038135204.png";
import img_017 from "./assets/images/utility_void_belt_1781038149559.png";
import img_018 from "./assets/images/technical_mesh_mask_1781038164285.png";
import img_019 from "./assets/images/industrial_lanyard_1781038181864.png";

import img_020 from "./assets/images/tactical_utility_vest_1781037232016.png";
import img_021 from "./assets/images/brutalist_heavy_parka_1781037244852.png";
import img_022 from "./assets/images/tactical_harness_bag_1781037258130.png";
import img_024 from "./assets/images/ribbed_tech_beanie_1781037270518.png";
import img_025 from "./assets/images/matrix_stencil_hoodie_1781037282265.png";
import img_026 from "./assets/images/schematic_mock_tee_1781037295914.png";
import img_027 from "./assets/images/chrome_trippy_hoodie_1781037307708.png";
import img_028 from "./assets/images/warped_portal_hoodie_1781037321474.png";
import img_029 from "./assets/images/liquid_optic_tee_1781037334266.png";
import img_030 from "./assets/images/thermal_vortex_tee_1781037345260.png";

export const PRODUCTS: Product[] = [
  {
    id: "001",
    name: "MINIMAL TRIPPY HOODIE",
    price: 180,
    img: img_001,
    specs: [
      "500GSM heavyweight cotton fleece for comfort and durability",
      "Reinforced industrial construction stitching with raw overlock seams",
      "Signature high-definition 'Liquid Distortion' heat-pressed chest graphic",
      "Kangaroo tech pocket and seamless lined hood configuration"
    ],
    tag: "In Stock",
    category: "Hoodies",
    material: "100% Heavyweight Cotton (500GSM)",
    details: "The core emblem of Project Void. Sourced structurally for ultimate thickness and lifetime environment resistance. Engineered with a boxy double-lined drop shoulder profile."
  },
  {
    id: "002",
    name: "BRUTALIST TEE",
    price: 85,
    img: img_002,
    specs: [
      "280GSM high-density open-end structural jersey",
      "High-density tactile plastisol ink logo detailing",
      "Wide boxy oversized fit with continuous clean shoulders",
      "Pre-washed to resist structural shrinkage"
    ],
    tag: "",
    category: "T-Shirts",
    material: "100% Organic Cotton (280GSM)",
    details: "Designed for standard urban temperature regulations. Minimalist brand identity stamp combined with wide structural comfort."
  },
  {
    id: "003",
    name: "VOID ARCHIVE CAP",
    price: 65,
    img: img_003,
    specs: [
      "Distressed dense twill cotton canvas",
      "Stitched three-dimensional structural Void emblem",
      "Reinforced laser-cut ventilation ports",
      "Matte steel adjustable rear buckle closure"
    ],
    tag: "Limited",
    category: "Accessories",
    material: "100% Cotton Canvas Twill",
    details: "Exhibiting pre-aged distress accents for a raw, lived-in brutalist look. Fits head sizes dynamically with mechanical rear adjusting system."
  },
  {
    id: "004",
    name: "RARE_VOID HOODIE",
    price: 180,
    img: img_004,
    specs: [
      "Heavyweight 450GSM French Terry featuring custom premium high-density 'VOID' cosmic vortex print",
      "Metallic silver and deep violet high-contrast graphic detailing on the chest",
      "Articulated structural sleeves with rugged contrast ribbing",
      "Dual hidden side-pocket tactical compartments"
    ],
    tag: "Exclusive",
    category: "Hoodies",
    material: "450GSM Dense French Terry & High-Density Plastisol Print",
    details: "An architectural masterpiece displaying our core high-contrast geometric 'VOID' cosmic vortex emblem. Structured, dense, and built for ultimate techwear aesthetics."
  },
  {
    id: "005",
    name: "INDUSTRIAL HOODIE",
    price: 180,
    img: img_005,
    specs: [
      "Heavyweight 500GSM brushed cotton weave",
      "Construct-Sys custom mechanical layout stencil graphics",
      "Brushed silver industrial steel custom eyelets",
      "Reinforced heavy cuffs with tactile thumb loopholes"
    ],
    tag: "In Stock",
    category: "Hoodies",
    material: "100% Compact Spun Cotton (500GSM)",
    details: "Finished with a sand-wash procedure for heavy surface texture. Adorned with 'CONSTRUCT' visual typography on the chest."
  },
  {
    id: "006",
    name: "BRUTALIST HOODIE",
    price: 180,
    img: img_006,
    specs: [
      "450GSM structural loopback organic cotton",
      "Double-lined hood geometry with rigid structured stand collar",
      "Drop-shoulder paneling for broad silhouettes",
      "Rear alignment vertical tech stitch detail"
    ],
    tag: "Exclusive",
    category: "Hoodies",
    material: "100% Organic Loopback Cotton (450GSM)",
    details: "A sleek, raw-cut hem finish creates an exquisite draping effect on the torso. Keeps heat perfectly while maintaining breathable interior structures."
  },
  {
    id: "007",
    name: "GEOMETRIC BACK TEE",
    price: 85,
    img: img_007,
    specs: [
      "220GSM structural cotton weave",
      "Oversized multi-colored vector construct print across the back",
      "Premium vintage-processed wash finish for premium distress",
      "Tonal ribbed mock neck structure"
    ],
    tag: "",
    category: "T-Shirts",
    material: "Vintage Wash Cotton (220GSM)",
    details: "Features an intricate structural design on the rear, inspired by cybernetic diagrams and raw concrete architectural drafts."
  },
  {
    id: "008",
    name: "VOID WINDBREAKER",
    price: 240,
    img: img_008,
    specs: [
      "Technical water-repellent performance outer shell",
      "Thermal-taped seam line architecture to prevent moisture leak",
      "Laser-cut armpit ventilation channels for active cooling",
      "Adjustable hood, hem, and sleeve buckles"
    ],
    tag: "Limited",
    category: "Outerwear",
    material: "High-Density Technical Nylon",
    details: "Complete weather shelter with utility. Minimalist layout featuring technical logo placements along the storm guard profile."
  },
  {
    id: "009",
    name: "CARGO COMPLEX PANTS",
    price: 210,
    img: img_009,
    specs: [
      "Multi-pocket layout optimized for quick item access",
      "Nylon-reinforced structural knee panels for protection",
      "Adjustable ankle drawcords for variable fits",
      "Heavy-duty utility belt loops and secure snaps"
    ],
    tag: "In Stock",
    category: "Pants",
    material: "Ripstop Cotton & Reinforced Nylon Blend",
    details: "An absolute utilitarian blueprint. Hardened to endure constant wear across harsh landscapes while retaining high aesthetic posture."
  },
  {
    id: "015",
    name: "SHOULDER SYSTEM BAG",
    price: 145,
    img: img_015,
    specs: [
      "1000D high-density ballistic nylon architecture",
      "UTX-Duraflex military-grade buckling",
      "Modular webbed attachments along both flanks",
      "Waterproofing zippers and soft protective compartment linings"
    ],
    tag: "Exclusive",
    category: "Bags",
    material: "1000D Ballistic Nylon",
    details: "A modular carrying node designed to lock across the chest or shoulder. Engineered for high performance items security."
  },
  {
    id: "016",
    name: "TECHNICAL CARGO SHORTS",
    price: 160,
    img: img_016,
    specs: [
      "Lightweight resilient ripstop fabric",
      "Reflective piping elements framing structural pockets",
      "Generous cargo storage arrays with custom buckle guards",
      "Elastic waist structure coupled with web belt"
    ],
    tag: "In Stock",
    category: "Pants",
    material: "Resilient Lightweight Ripstop Nylon",
    details: "Optimized for warm climates. Features the classic modular geometry of RARE_VOID utility lines in short form."
  },
  {
    id: "017",
    name: "UTILITY VOID BELT",
    price: 85,
    img: img_017,
    specs: [
      "Heavy industrial webbing fabric construction",
      "Quick-release metal cobra click-buckle design",
      "Dual slide-on utility pockets for small data keys",
      "Embossed tonal brand labeling"
    ],
    tag: "Limited",
    category: "Accessories",
    material: "Reinforced Tactical Polyester Webbing",
    details: "Designed to lock in place dynamically. Provides modular nodes for attaching accessory keys, flasks, or clips."
  },
  {
    id: "018",
    name: "TECHNICAL MESH MASK",
    price: 65,
    img: img_018,
    specs: [
      "Air-permeable composite structure with layered filter slots",
      "Pliable rubber nose-bridge contour adjustment",
      "Dual strap system wrapping around the neck dynamically",
      "Washable structure with detachable technical parts"
    ],
    tag: "",
    category: "Accessories",
    material: "Composite Air-Permeable Technical Mesh",
    details: "Providing heavy atmosphere filters. Sleek techwear facial aesthetic complete with rubber alignment markers."
  },
  {
    id: "019",
    name: "INDUSTRIAL LANYARD",
    price: 45,
    img: img_019,
    specs: [
      "High-density sublimated heavy lanyard strap",
      "Industrial heavy-duty swivel lock clip",
      "Brutalist typography integrated across the weave",
      "Detachable snap clip module"
    ],
    tag: "Limited",
    category: "Accessories",
    material: "Sublimated Woven Tactel Strap",
    details: "Engineered to keep standard access tokens or keys secure. Features double-sided bold lettering of RARE_VOID."
  },
  {
    id: "020",
    name: "MODULAR TACTICAL VEST",
    price: 195,
    img: img_020,
    specs: [
      "Ultra-resilient 1000D ballistic nylon configuration",
      "Fully detachable modular pocket modules (MOLLE-Sys)",
      "Adorned with brutalist quick-release metal buckles",
      "Concealed quick-access rear document compartment"
    ],
    tag: "Exclusive",
    category: "Outerwear",
    material: "1000D Ballistic Nylon",
    details: "A layered tactical armor chassis crafted for structural tool management. Combines robust concrete aesthetics with adjustable spatial comfort panels."
  },
  {
    id: "021",
    name: "BRUTALIST HEAVY PARKA",
    price: 320,
    img: img_021,
    specs: [
      "Dense windproof heavy-weight structural canvas outershell",
      "Overbuilt oversized funnel-neck storm hood layout",
      "Dual vertical industrial zippers with custom woven pull-loops",
      "Interior quilted micro-fleece heat preservation linings"
    ],
    tag: "Limited",
    category: "Outerwear",
    material: "Heavy-Weight Treated Canvas & Fleece",
    details: "Built to dominate extreme climate drops. Heavyweight structure meets precise grid tailoring, presenting an imposing silhouette of protection."
  },
  {
    id: "022",
    name: "TACTICAL HARNESS BAG",
    price: 155,
    img: img_022,
    specs: [
      "Secured dual shoulder tactical quick-mount layout",
      "Heavy matte-black water-resistant industrial zippers",
      "Interior microfiber-lined communications device sheath",
      "Double reinforced cross-back tension strap matrix"
    ],
    tag: "In Stock",
    category: "Bags",
    material: "Waterproof Micro-Ripstop Nylon",
    details: "Low-profile active cargo node constructed to anchor comfortably against the body. Seamlessly integrates small accessory attachments."
  },
  {
    id: "024",
    name: "RIBBED TECH BEANIE",
    price: 55,
    img: img_024,
    specs: [
      "Heavy gauge high-thermal ribbed knit structure",
      "Brushed steel custom laser-etched brand emblem plate",
      "Double-fold cuff layout for variable structural fit and warmth",
      "Reinforced crown knitting resisting micro-stretch deformation"
    ],
    tag: "Limited",
    category: "Accessories",
    material: "100% Recycled Thermal Polyester",
    details: "Forged with thick structural ribs and a stark metallic silver emblem. Built to insulate against severe environmental windchills."
  },
  {
    id: "025",
    name: "VOID MATRIX HOODIE",
    price: 190,
    img: img_025,
    specs: [
      "520GSM ultra-dense sand-washed organic cotton fleece",
      "Geometric 3D matrix silicone-stencil graphic across rear shoulders",
      "Perfectly rigid double-lined hood holding a stark structure",
      "Concealed horizontal heavy-duty side-seam pockets"
    ],
    tag: "Exclusive",
    category: "Hoodies",
    material: "100% Cotton Fleece (520GSM)",
    details: "An imposing, wide-shouldered boxy hoodie featuring thick structural lines and a premium layered texture. Tailored to withstand harsh elements while retaining soft technical comfort."
  },
  {
    id: "026",
    name: "SCHEMATIC MOCK-NECK TEE",
    price: 90,
    img: img_026,
    specs: [
      "320GSM compact organic cotton interlock knit structure",
      "Thick double-needle mock-neck collar configuration",
      "Architectural blueprint schematic printed in high-density tactile ink",
      "Clean raw-edge hem finishes with reinforced industrial double splits"
    ],
    tag: "Limited",
    category: "T-Shirts",
    material: "100% Compact Spun Cotton (320GSM)",
    details: "Combining graphic blueprint architecture with premium high-density loop jersey. Sized boxy with elongated drop shoulders for active structural drape."
  },
  {
    id: "027",
    name: "LIQUID CHROME HOODIE",
    price: 195,
    img: img_027,
    specs: [
      "520GSM ultra-dense stone-washed black organic fleece",
      "Vibrant high-definition liquid chrome psychedelic print on front",
      "Ergonomically engineered drop shoulder relaxed streetwear silhouette",
      "Premium seamless double-lined structured hood layout"
    ],
    tag: "In Stock",
    category: "Hoodies",
    material: "100% Organic Cotton Fleece (520GSM)",
    details: "An artistic fusion of pure organic geometry and fluid psychedelic energy. Incorporates deep, heavy-drape fabrics with a beautiful, high-fidelity liquid chrome print."
  },
  {
    id: "028",
    name: "WARPED PORTAL HOODIE",
    price: 215,
    img: img_028,
    specs: [
      "480GSM premium loopback structured cotton fabric",
      "Surreal mind-bending spiral topographic portal graphic printed on chest",
      "Built-in continuous high-neck protective storm guard system",
      "Reinforced heavy-rib active cuffs and structured waistband"
    ],
    tag: "Limited",
    category: "Hoodies",
    material: "High-Density Loopback Cotton (480GSM)",
    details: "A striking minimalist presentation of surreal optical dimension. A concrete grey canvas decorated with an overbuilt storm hood and a distorted topographic spiral chest centerpiece."
  },
  {
    id: "029",
    name: "LIQUID OPTIC TEE",
    price: 95,
    img: img_029,
    specs: [
      "320GSM compact organic cotton interlock knit structure",
      "High-fidelity liquid chrome psychedelic face print on chest",
      "Double-needle mock-neck flat-lock collar",
      "Preserved raw split hemlines with dual side vents"
    ],
    tag: "In Stock",
    category: "T-Shirts",
    material: "100% Organic Cotton (320GSM)",
    details: "An experimental study of liquid distortion. Features an incredibly rich, high-fidelity liquid chrome graphic layout printed over a washed heavy black backdrop."
  },
  {
    id: "030",
    name: "THERMAL VORTEX TEE",
    price: 100,
    img: img_030,
    specs: [
      "320GSM ultra-heavy long-staple cotton fibers",
      "Trippy high-vis static thermal-vortex heat print on back",
      "Drop-shoulder boxy structural streetwear silhouette",
      "Overbuilt reinforced continuous seam joints"
    ],
    tag: "Exclusive",
    category: "T-Shirts",
    material: "Premium Spun Cotton (320GSM)",
    details: "A mind-bending graphic exploration. Dressed in cream stone white and featuring a stunning thermal-imaging vortex print mapped across the cotton chassis."
  }
];

export const LOCATIONS: LocationNode[] = [
  {
    city: "BERLIN",
    name: "HQ / LAB",
    address1: "KÖPENICKER STR. 104",
    address2: "10179 BERLIN, DE",
    coordN: "52.5085°N",
    coordE: "13.4313°E",
    hours: "10:00 - 19:00 CET",
    status: "ACTIVE",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1408848464624!2d13.4313!3d52.5085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3650cd39d9%3A0xe54dca218ea1d9b!2zS8O2cGVuaWNrZXIgU3RyLiAxMDQsIDEwMTc5IEJlcmxpbiwgR2VybWFueQ!5e0!3m2!1sen!2sus!4v1700000000000"
  },
  {
    city: "PARIS",
    name: "SHOWROOM",
    address1: "RUE DE TURENNE 42",
    address2: "75003 PARIS, FR",
    coordN: "48.8580°N",
    coordE: "2.3643°E",
    hours: "BY APPOINTMENT",
    status: "APPOINTMENT",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5208848464624!2d2.3643!3d48.8580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e01ea1df6f7%3A0x6b7280!2zNDIgUnVlIGRlIFR1cmVubmUsIDc1MDAzIFBhcmlzLCBGcmFuY2U!5e0!3m2!1sen!2sus!4v1700000000001"
  },
  {
    city: "LONDON",
    name: "ARCHIVE",
    address1: "SHOREDITCH HIGH ST 11",
    address2: "E1 6PG LONDON, UK",
    coordN: "51.5238°N",
    coordE: "-0.0772°W",
    hours: "CLOSED_TEMPORARY",
    status: "TEMP_CLOSED",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5208848464624!2d-0.0772!3d51.5238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb650cd39d9%3A0x1b1c1c!2zMTEgU2hvcmVkaXRjaCBIaWdoIFN0LCBMb25kb24gRTEgNlBHLCBVSw!5e0!3m2!1sen!2sus!4v1700000000002"
  }
];

export const TEAM_MANIFESTO = {
  quote: "We construct tools for the urban environment. RARE_VOID is not fashion; it is structural integrity. We reject the ephemeral nature of seasonal trends in favor of industrial-grade aesthetics and absolute utilitarian function.",
  heading: "VOID PHILOSOPHY",
  tagline: "Rejecting the superficial.",
  intro: "We design for the concrete landscape. Rejecting superfluous detail in favor of raw structural integrity. Every garment is a tool, constructed with high-density materials and exact specifications. This is not fashion; this is uniform for the modern void."
};
