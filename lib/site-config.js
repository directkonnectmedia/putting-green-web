// ============================================================================
// SITE CONFIG — single source of truth for client-specific branding.
// Edit THIS FILE FIRST when spinning up a new client site.
// All pages and components pull their brand/contact/location info from here.
// ============================================================================

export const SITE = {
  brand: {
    // Full legal company name. Used in <title> tags, metadata, alt text.
    name: 'Putting Green',

    // The hero title and nav wordmark split into two parts:
    //   <nameFirst> <nameRest>
    // where nameRest renders in the accent color.
    nameFirst: 'Putting',
    nameRest: 'Green',

    // A short description used in meta tags and the footer blurb.
    tagline: 'Backyard putting greens, synthetic grass, gravel, pavers, and full tree service in Phoenix, Arizona.',
  },

  contact: {
    // Display-formatted phone number.
    phoneDisplay: '(602) 810-6147',

    // Digits only, used in `tel:` links. No parens, dashes, or spaces.
    phoneTel: '6028106147',

    // Optional business email (not shown in default UI; reserved for future).
    email: 'hello@example.com',
  },

  location: {
    // City + state, used in the hero tagline and various "we serve..." copy.
    city: 'Phoenix',
    state: 'Arizona',

    // Full tagline shown under the hero title (already uppercased in markup).
    heroTagline: 'PUTTING GREENS \u2022 SYNTHETIC GRASS \u2022 GRAVEL \u2022 PAVERS \u2022 TREE SERVICE \u2022 PHOENIX, ARIZONA',

    // The service-area cities listed in the "Let's Build..." booking section.
    serviceAreaCities: 'Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, and surrounding areas',

    // Short label shown in contact rows.
    serviceAreaLabel: 'Phoenix, AZ & Surrounding Area',
  },

  hours: {
    // Display string for business hours.
    display: 'Mon\u2013Sat: 7:00 AM \u2013 6:00 PM',
  },
}

export default SITE
