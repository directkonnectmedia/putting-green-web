// ============================================================================
// SITE CONFIG — single source of truth for client-specific branding.
// Edit THIS FILE FIRST when spinning up a new client site.
// All pages and components pull their brand/contact/location info from here.
// ============================================================================

export const SITE = {
  brand: {
    // Full legal company name. Used in <title> tags, metadata, alt text.
    name: '[COMPANY NAME] LLC',

    // The hero title and nav wordmark split into two parts:
    //   <nameFirst> <nameRest>
    // where nameRest renders in the accent color.
    //
    // Example:
    //   nameFirst: 'Done Right'   nameRest: 'Landscape LLC'
    //   nameFirst: 'Valley Green' nameRest: 'Landscaping'
    nameFirst: '[Company]',
    nameRest: 'Landscape LLC',

    // A short description used in meta tags and the footer blurb.
    tagline: 'Premium outdoor craftsmanship for the desert lifestyle.',
  },

  contact: {
    // Display-formatted phone number.
    phoneDisplay: '(XXX) XXX-XXXX',

    // Digits only, used in `tel:` links. No parens, dashes, or spaces.
    phoneTel: '0000000000',

    // Optional business email (not shown in default UI; reserved for future).
    email: 'hello@example.com',
  },

  location: {
    // City + state, used in the hero tagline and various "we serve..." copy.
    city: 'Your City',
    state: 'Arizona',

    // Full tagline shown under the hero title (already uppercased in markup).
    // Change this whole string if you want different copy.
    heroTagline: 'PREMIUM OUTDOOR LIVING \u2022 YOUR CITY, ARIZONA',

    // The service-area cities listed in the "Let's Build..." booking section.
    serviceAreaCities: 'Your City, City Two, City Three, and surrounding areas',

    // Short label shown in contact rows (e.g. "Your City, AZ & Surrounding Area").
    serviceAreaLabel: 'Your City, AZ & Surrounding Area',
  },

  hours: {
    // Display string for business hours.
    display: 'Mon\u2013Sat: 7:00 AM \u2013 6:00 PM',
  },

  // Service area disclaimers in copy ("West Valley", "Sonoran Desert", etc.)
  // are left hard-coded in the original service descriptions so you can
  // quickly find-and-replace them per client. See TEMPLATE_SETUP.md.
}

export default SITE
