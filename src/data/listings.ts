import type { Listing } from '../types/content';

export const listings: Listing[] = [
  {
    title: 'Departamento premium en Villa Morra',
    slug: 'departamento-premium-villa-morra',
    type: 'Departamento',
    operation: 'Venta',
    zone: 'Villa Morra',
    price: 'USD 185.000',
    image: '/images/property-1.svg',
    description: '2 dormitorios, amenities premium y excelente acceso a ejes corporativos.',
    badges: ['2 dormitorios', 'Amenities', 'Ideal inversión']
  },
  {
    title: 'Casa familiar en Recoleta',
    slug: 'casa-familiar-recoleta',
    type: 'Casa',
    operation: 'Venta',
    zone: 'Recoleta',
    price: 'USD 298.000',
    image: '/images/property-2.svg',
    description: 'Ambientes amplios, jardín con quincho y ubicación estratégica para familias.',
    badges: ['4 dormitorios', 'Quincho', 'Lista para habitar']
  },
  {
    title: 'Loft ejecutivo en Carmelitas',
    slug: 'loft-ejecutivo-carmelitas',
    type: 'Departamento',
    operation: 'Alquiler',
    zone: 'Carmelitas',
    price: 'Gs. 5.900.000 / mes',
    image: '/images/property-3.svg',
    description: 'Diseño contemporáneo, balcón y cercanía a gastronomía y oficinas.',
    badges: ['Amoblado', '1 dormitorio', 'Pet friendly']
  },
  {
    title: 'Local comercial en Las Mercedes',
    slug: 'local-comercial-las-mercedes',
    type: 'Local',
    operation: 'Alquiler',
    zone: 'Las Mercedes',
    price: 'Gs. 8.400.000 / mes',
    image: '/images/property-4.svg',
    description: 'Frente visible, planta flexible y alto flujo vehicular.',
    badges: ['Comercial', 'Alta exposición', 'Sobre avenida']
  }
];
