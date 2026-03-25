export interface NavLink { label: string; href: string; }

export interface SeoPage {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export interface Listing {
  title: string;
  slug: string;
  type: string;
  operation: string;
  zone: string;
  price: string;
  image: string;
  description: string;
  badges: string[];
}

export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface Credential {
  label: string;
  detail: string;
}

export interface Zone {
  name: string;
  description: string;
}
