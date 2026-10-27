export type TrustedBrand = { name: string; file: string; approved: boolean }

const brand = (name: string, slug: string): TrustedBrand => ({
  name,
  file: `/brands/trusted-brand-${slug}.webp`,
  approved: true,
})

/** Logos approved for display. Flip `approved` to false to hide one without touching components. */
export const trustedBrands: TrustedBrand[] = [
  brand('Adidas', 'adidas'),
  brand('Alfagift', 'alfagift'),
  brand('Blibli', 'blibli'),
  brand('BNI', 'bni'),
  brand('BRI', 'bri'),
  brand('Burger King', 'burger-king'),
  brand('Clear', 'clear'),
  brand('Coca-Cola', 'coca-cola'),
  brand('DANA', 'dana'),
  brand('Djarum', 'djarum'),
  brand('Erafone', 'erafone'),
  brand('Gojek', 'gojek'),
  brand('Google Gemini', 'google-gemini'),
  brand('Grab', 'grab'),
  brand('Hanasui', 'hanasui'),
  brand('Lazada', 'lazada'),
  brand('Mobile Legends: Bang Bang', 'mobile-legends-bang-bang'),
  brand('Oriflame', 'oriflame'),
  brand('OVO', 'ovo'),
  brand('Paragon', 'paragon'),
  brand('Pepsodent', 'pepsodent'),
  brand('Prime Video', 'prime-video'),
  brand('Roughneck 1991', 'roughneck-1991'),
  brand('Samsung', 'samsung'),
  brand('Superbank', 'superbank'),
  brand('Takeda', 'takeda'),
  brand('TikTok', 'tiktok'),
  brand('Traveloka', 'traveloka'),
  brand('VinFast', 'vinfast'),
  brand('Warner Music Group', 'warner-music'),
].filter((b) => b.approved)
