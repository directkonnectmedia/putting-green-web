import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SITE from '../lib/site-config'

const SERVICES = [
  {
    title: 'Backyard Putting Greens',
    image: '/photos/photo-05.jpg',
    description:
      'Turn your yard into your own practice course. We design and install custom synthetic putting greens tailored to your space \u2014 true roll, realistic speed, and full control over shape, hole count, and fringe. Built with premium American-made turf that stands up to the Phoenix heat and looks pristine year-round. Kid-friendly, pet-friendly, and virtually maintenance-free.',
  },
  {
    title: 'Synthetic Grass Installation',
    image: '/photos/photo-03.jpg',
    description:
      'Ditch the water bill and the weekend mowing. Our synthetic lawns use high-quality American-made, brand-new turf that looks and feels like the real thing \u2014 soft enough for bare feet and kids\u2019 play, tough enough for dogs, and green 365 days a year. Affordable pricing, clean installation, and pet-safe infill options included on every job.',
  },
  {
    title: 'Gravel Spreading & Installation',
    image: '/photos/photo-32.jpg',
    description:
      'Professional gravel for driveways, yards, and landscape beds. We carry multiple sizes \u2014 \u00bc\u201d fine, \u215c\u201d, \u00bd\u201d, and \u00be\u201d for driveways \u2014 in a full range of colors including gray, beige, red, and decorative mixes. Delivery and installation available. Affordable local service throughout the Phoenix area.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{`Services — ${SITE.brand.name}`}</title>
        <meta property="og:title" content={`Services — ${SITE.brand.name}`} />
        <meta
          name="description"
          content="Custom backyard putting greens, synthetic grass, and gravel installation. American-made turf. Pet and kid friendly. Serving Phoenix, AZ and surrounding areas."
        />
      </Head>
      <div className="sv-page">
        <Navigation />

        <section className="sv-section">
          <div className="sv-container">
            <header className="sv-header">
              <p className="sv-eyebrow">{`WHY ${SITE.brand.name.toUpperCase()}?`}</p>
              <h1 className="sv-heading">Premium Synthetic Turf &amp; Hardscape</h1>
            </header>

            <div className="sv-rows">
              {SERVICES.map((s, i) => {
                const reverse = i % 2 === 1
                return (
                  <div key={s.title} className={`sv-row ${reverse ? 'sv-row--reverse' : ''}`}>
                    <div className="sv-card-image">
                      <div className="sv-card-image-frame">
                        <img src={s.image} alt={s.title} loading="lazy" />
                      </div>
                    </div>
                    <div className="sv-card-text">
                      <p className="sv-card-eyebrow">{`WHY ${SITE.brand.name.toUpperCase()}?`}</p>
                      <h2 className="sv-card-heading">{s.title}</h2>
                      <p className="sv-card-body">{s.description}</p>
                      <Link href="/#booking">
                        <a className="sv-cta">Get a Free Quote</a>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="sv-bottom-cta">
          <div className="sv-bottom-cta-inner">
            <h2 className="sv-bottom-cta-title">Not sure which service fits?</h2>
            <p className="sv-bottom-cta-text">
              Tell us about your project and we&apos;ll put together a free, no-obligation estimate within 24 hours.
            </p>
            <div className="sv-bottom-cta-actions">
              <Link href="/#booking"><a className="sv-bottom-cta-btn sv-bottom-cta-btn-primary">Book a Free Estimate</a></Link>
              <a href={`tel:${SITE.contact.phoneTel}`} className="sv-bottom-cta-btn sv-bottom-cta-btn-outline">Call {SITE.contact.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .sv-page {
          width: 100%;
          min-height: 100vh;
          background: var(--color-background, #faf9f7);
        }
        .sv-section {
          padding: 120px 0 96px;
          position: relative;
          overflow: hidden;
        }
        .sv-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .sv-header {
          text-align: center;
          max-width: 52rem;
          margin: 0 auto clamp(4rem, 6vw, 7rem);
        }
        .sv-eyebrow {
          color: var(--color-accent, #c6a35a);
          font-family: var(--font-family-body);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 0.9rem;
        }
        .sv-heading {
          color: var(--color-primary);
          font-family: var(--font-family-heading);
          font-weight: 800;
          font-size: clamp(2rem, calc(1.5rem + 2vw), 3.25rem);
          line-height: 1.1;
          letter-spacing: -0.015em;
          max-width: 42rem;
          margin: 0 auto;
        }
        .sv-rows {
          display: flex;
          flex-direction: column;
          gap: clamp(5rem, 8vw, 9rem);
          position: relative;
          z-index: 1;
        }
        .sv-row {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0;
        }
        .sv-row--reverse {
          flex-direction: row-reverse;
        }
        .sv-card-image {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 640px;
          flex-shrink: 0;
        }
        .sv-card-image-frame {
          overflow: hidden;
          border-radius: 22px;
          box-shadow: 0 30px 60px rgba(17, 17, 17, 0.18);
          aspect-ratio: 4 / 3;
        }
        .sv-card-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sv-card-image-frame:hover img {
          transform: scale(1.05);
        }
        .sv-card-text {
          position: relative;
          z-index: 20;
          width: 100%;
          max-width: 520px;
          background: rgba(255, 255, 255, 0.65);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          backdrop-filter: blur(16px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 22px;
          padding: clamp(1.75rem, calc(1.5vw + 1rem), 2.75rem);
          box-shadow: 0 20px 50px rgba(17, 17, 17, 0.08);
        }
        .sv-row .sv-card-text {
          margin-right: -4rem;
        }
        .sv-row--reverse .sv-card-text {
          margin-right: 0;
          margin-left: -4rem;
        }
        .sv-card-eyebrow {
          color: var(--color-accent, #c6a35a);
          font-family: var(--font-family-body);
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .sv-card-heading {
          color: var(--color-primary);
          font-family: var(--font-family-heading);
          font-weight: 800;
          font-size: clamp(1.85rem, calc(1.3rem + 1.8vw), 3rem);
          line-height: 1.04;
          letter-spacing: -0.015em;
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .sv-card-body {
          color: var(--color-on-surface-secondary);
          font-family: var(--font-family-body);
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.65;
          margin: 0 0 1.75rem;
        }
        .sv-cta {
          display: inline-block;
          padding: 0.85rem 1.75rem;
          font-family: var(--font-family-body);
          font-weight: 700;
          font-size: 0.92rem;
          letter-spacing: 0.01em;
          color: #fff;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary, var(--color-primary)) 100%);
          border-radius: 9999px;
          box-shadow: 0 10px 24px color-mix(in srgb, var(--color-primary) 25%, transparent);
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          text-decoration: none;
        }
        .sv-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 16px 34px color-mix(in srgb, var(--color-primary) 35%, transparent);
          filter: brightness(1.08);
        }

        .sv-bottom-cta {
          padding: 72px 24px 96px;
          background: var(--color-surface-elevated, #f2f0ec);
        }
        .sv-bottom-cta-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .sv-bottom-cta-title {
          font-family: var(--font-family-heading);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.2;
          margin: 0 0 14px;
          color: var(--color-on-surface);
        }
        .sv-bottom-cta-text {
          font-size: 1rem;
          color: var(--color-on-surface-secondary);
          margin: 0 0 30px;
          line-height: 1.6;
        }
        .sv-bottom-cta-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sv-bottom-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 26px;
          border-radius: var(--border-radius-sm);
          font-weight: 600;
          font-size: 0.98rem;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1.5px solid transparent;
          font-family: var(--font-family-body);
        }
        .sv-bottom-cta-btn-primary {
          background: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .sv-bottom-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px color-mix(in srgb, var(--color-primary) 35%, transparent);
        }
        .sv-bottom-cta-btn-outline {
          border-color: var(--color-border);
          color: var(--color-on-surface);
          background: var(--color-surface);
        }
        .sv-bottom-cta-btn-outline:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        @media (max-width: 900px) {
          .sv-row,
          .sv-row--reverse {
            flex-direction: column;
            gap: 1.5rem;
          }
          .sv-card-image,
          .sv-card-text {
            max-width: 100%;
          }
          .sv-row .sv-card-text,
          .sv-row--reverse .sv-card-text {
            margin-right: 0;
            margin-left: 0;
            margin-top: -3rem;
          }
        }
        @media (max-width: 640px) {
          .sv-section {
            padding: 96px 0 64px;
          }
          .sv-container {
            padding: 0 20px;
          }
          .sv-rows {
            gap: 4rem;
          }
        }
      `}</style>
    </>
  )
}
