const whatsapp = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '595981000000';
const phone = import.meta.env.PUBLIC_PHONE_NUMBER || '+595981000000';

export const contact = {
  formAction: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id',
  whatsapp,
  phone,
  whatsappUrl: `https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, quiero consultar por una propiedad en Asunción.')}`,
  phoneUrl: `tel:${phone.replace(/\s+/g, '')}`,
  email: 'hola@luciabenitez.com',
  addressLabel: 'Atención comercial en Asunción, Paraguay',
  mapEmbedUrl: import.meta.env.PUBLIC_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps?q=Asunci%C3%B3n%2C%20Paraguay&z=12&output=embed',
  social: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/',
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL || 'https://facebook.com/',
    gmb: import.meta.env.PUBLIC_GMB_PROFILE_URL || 'https://maps.google.com/'
  }
};
