import type { NavLink, SeoPage } from '../types/content';

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';
const agentName = 'Lucía Benítez';

export const site = {
  url: siteUrl,
  name: `${agentName} — Agente Inmobiliaria`,
  agentName,
  tagline: 'Comprá, vendé o alquilá en Asunción con una asesora local que responde rápido y te acompaña de principio a fin.',
  location: 'Asunción, Paraguay',
  language: 'es-PY',
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Propiedades', href: '/propiedades' },
    { label: 'Sobre mí', href: '/sobre-mi' },
    { label: 'Contacto', href: '/contacto' },
  ] satisfies NavLink[],
  metrics: [
    { value: '8+', label: 'años asesorando operaciones en Asunción' },
    { value: '150+', label: 'consultas calificadas atendidas' },
    { value: '< 15 min', label: 'tiempo promedio de respuesta en WhatsApp' },
  ],
  seo: {
    home: {
      title: `${agentName} | Agente Inmobiliaria en Asunción, Paraguay`,
      description: `Comprá, vendé o alquilá propiedades en Asunción con ${agentName}, agente de confianza en Villa Morra, Carmelitas y Recoleta. Respondemos rápido por WhatsApp. ¡Consultanos!`,
      path: '/',
    },
    properties: {
      title: `Propiedades en Asunción | ${agentName} — Agente Inmobiliaria`,
      description: `Casas, departamentos y locales en venta y alquiler en Villa Morra, Carmelitas y Recoleta, Asunción. Encontrá tu propiedad ideal con ${agentName}. Contactanos por WhatsApp hoy.`,
      path: '/propiedades',
    },
    about: {
      title: `Sobre Mí | ${agentName} — Agente Inmobiliaria en Asunción`,
      description: `Conocé a ${agentName}, agente inmobiliaria con 8 años en el mercado de Asunción. Especialista en Villa Morra, Carmelitas y Recoleta.`,
      path: '/sobre-mi',
    },
    contact: {
      title: `Contacto | ${agentName} — Agente Inmobiliaria Asunción`,
      description: `Comunicate con ${agentName} para comprar, vender o alquilar en Asunción. Atención por WhatsApp, teléfono o formulario. Respondemos el mismo día.`,
      path: '/contacto',
    },
  } satisfies Record<string, SeoPage>,
};
