export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  specs: string[];
  tag?: "In Stock" | "Limited" | "Exclusive" | "Archive" | "";
  category: string;
  material: string;
  details: string;
}

export interface CartItem {
  id: string; // Combined product.id + size
  product: Product;
  quantity: number;
  size: string;
}

export interface LocationNode {
  city: string;
  name: string; // e.g. HQ / LAB
  address1: string;
  address2: string;
  coordN: string;
  coordE: string;
  hours: string;
  mapEmbed?: string;
  status: "ACTIVE" | "APPOINTMENT" | "TEMP_CLOSED";
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  designation: string;
  message: string;
  timestamp: string;
}
