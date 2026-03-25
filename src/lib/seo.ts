import { agent } from '../data/agent';
import { contact } from '../data/contact';
import { site } from '../data/site';

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export const globalSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: agent.name,
  description: 'Agente inmobiliaria especializada en propiedades de compra, venta y alquiler en Asunción, Paraguay.',
  url: absoluteUrl('/'),
  telephone: contact.phone,
  email: contact.email,
  image: absoluteUrl(agent.image),
  logo: absoluteUrl('/images/logo.svg'),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Asunción',
    addressCountry: 'PY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.2867,
    longitude: -57.647,
  },
  areaServed: [
    { '@type': 'City', name: 'Asunción' },
    ...agent.neighborhoods.slice(0, 3).map((name) => ({ '@type': 'Neighborhood', name })),
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: contact.phone,
    availableLanguage: ['Spanish'],
  },
  sameAs: [contact.social.facebook, contact.social.instagram, contact.social.gmb],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: absoluteUrl('/'),
  inLanguage: 'es-PY',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${absoluteUrl('/propiedades')}?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: agent.name,
  jobTitle: 'Agente Inmobiliaria',
  worksFor: {
    '@type': 'RealEstateAgent',
    name: agent.name,
  },
  url: absoluteUrl('/sobre-mi'),
  image: absoluteUrl(agent.image),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Asunción',
    addressCountry: 'PY',
  },
  knowsAbout: ['Real estate', 'Propiedades en Paraguay', 'Mercado inmobiliario Asunción'],
  sameAs: [contact.social.instagram, contact.social.facebook],
});

export const serviceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Real Estate Services',
  provider: {
    '@type': 'RealEstateAgent',
    name: agent.name,
    url: absoluteUrl('/'),
  },
  areaServed: {
    '@type': 'City',
    name: 'Asunción',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Inmobiliarios',
    itemListElement: [
      'Compra de Propiedades',
      'Venta de Propiedades',
      'Alquiler de Propiedades',
      'Asesoría de Inversión Inmobiliaria',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
  },
});

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
    { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
  ],
});
