import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SITE from '../lib/site-config'

const CATEGORY_LABEL = {
  pavers: 'Paver Installation',
  xeriscape: 'Xeriscaping',
  pool: 'Pool Deck',
  turf: 'Artificial Turf',
  lighting: 'Landscape Lighting',
  fire: 'Fire Pit & Kitchen',
  walls: 'Retaining Wall',
}

const DESCRIPTIONS = {
  pavers: [
    'Backyard paver patio with charcoal finish',
    'Custom driveway paver installation',
    'Front walkway with travertine pavers',
    'Pool deck paver transformation',
    'Side-yard paver pathway',
    'Multi-level paver patio with fire feature',
    'Belgard paver driveway extension',
    'Entryway walkway with accent border',
    'Pergola patio with sand-set pavers',
    'Backyard paver courtyard',
  ],
  xeriscape: [
    'Desert modern xeriscape with native agave',
    'Front-yard xeriscape and rock bed',
    'Water-wise garden with decomposed granite',
    'Drought-tolerant front yard design',
    'Sonoran-native plant installation',
    'Ornamental rock and boulder landscape',
    'Low-water courtyard garden',
    'Modern desert front yard design',
    'Xeriscape conversion with river rock',
  ],
  pool: [
    'Travertine pool deck remodel',
    'Cool-deck pool surround',
    'Resort-style pool deck with pavers',
    'Pool coping and deck replacement',
    'Slip-resistant pool deck finish',
    'Poolside paver lounge area',
    'Modern pool deck with acid-stained concrete',
    'Pool deck expansion with pavers',
  ],
  turf: [
    'Pet-friendly artificial turf install',
    'Backyard turf lawn replacement',
    'Putting green turf feature',
    'Side-yard turf installation',
    'Drought-resistant turf lawn',
    'Playground turf with shock pad',
    'Front-yard turf replacement',
    'Low-maintenance turf landscape',
  ],
  lighting: [
    'Pathway lighting with LED bollards',
    'Tree uplight accent lighting',
    'Patio bistro string lighting',
    'Facade wash lighting design',
    'Step and hardscape LED lighting',
    'Smart low-voltage landscape lighting',
    'Architectural uplight installation',
    'Warm-glow garden lighting',
  ],
  fire: [
    'Custom built-in gas fire pit',
    'Outdoor kitchen with built-in grill',
    'Paver fire pit lounge',
    'Natural stone fire feature',
    'Covered outdoor cooking area',
    'Gas fire bowl water feature combo',
    'Concrete fire pit with seat wall',
    'Resort-style outdoor kitchen',
  ],
  walls: [
    'Block retaining wall installation',
    'Decorative seat wall with cap',
    'Multi-tier garden retaining wall',
    'Stacked-stone retaining wall',
    'Freestanding planter wall',
    'Slope stabilization retaining wall',
    'Dry-stack decorative wall',
    'Modern block accent wall',
  ],
}

const PHOTO_NUMBERS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 60, 61, 62, 63, 64, 66,
]

const CATEGORY_CYCLE = ['pavers', 'xeriscape', 'pool', 'turf', 'lighting', 'fire', 'walls']

const PROJECTS = PHOTO_NUMBERS.map((n, i) => {
  const category = CATEGORY_CYCLE[i % CATEGORY_CYCLE.length]
  const descList = DESCRIPTIONS[category]
  const description = descList[Math.floor(i / CATEGORY_CYCLE.length) % descList.length]
  const pad = String(n).padStart(2, '0')
  return {
    id: `p${pad}`,
    src: `/photos/photo-${pad}.jpg`,
    category,
    categoryLabel: CATEGORY_LABEL[category],
    description,
  }
})

export default function ProjectGallery() {
  const visible = PROJECTS

  return (
    <>
      <Head>
        <title>{`Project Gallery — ${SITE.brand.name}`}</title>
        <meta property="og:title" content={`Project Gallery — ${SITE.brand.name}`} />
        <meta
          name="description"
          content="Browse our recent landscaping projects."
        />
      </Head>
      <div className="pg-page">
        <Navigation />

        <section className="pg-hero">
          <div className="pg-hero-inner">
            <span className="pg-eyebrow">PORTFOLIO</span>
            <h1 className="pg-title">Our Work Gallery</h1>
            <p className="pg-subtitle">
              Browse our recent landscaping projects.
            </p>
          </div>
        </section>

        <section className="pg-grid-section">
          <div className="pg-grid">
            {visible.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: Math.min(i, 8) * 0.03 }}
                className="pg-tile"
              >
                <div className="pg-tile-media">
                  <img src={p.src} alt={p.description} loading="lazy" />
                </div>
              </motion.figure>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="pg-empty">No projects in this category yet.</div>
          )}
        </section>

        <section className="pg-cta">
          <div className="pg-cta-inner">
            <h2 className="pg-cta-title">Ready to transform your landscape?</h2>
            <p className="pg-cta-text">
              Join hundreds of homeowners who trusted {SITE.brand.name} for their outdoor transformation.
            </p>
            <div className="pg-cta-actions">
              <a href="/#booking" className="pg-cta-btn pg-cta-btn-primary">Book a Free Estimate</a>
              <a href={`tel:${SITE.contact.phoneTel}`} className="pg-cta-btn pg-cta-btn-outline">Call {SITE.contact.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .pg-page {
          width: 100%;
          min-height: 100vh;
          background: var(--color-background, #faf9f7);
        }
        .pg-hero {
          padding: 120px 24px 48px;
          text-align: center;
          background: var(--color-background, #faf9f7);
        }
        .pg-hero-inner {
          max-width: 780px;
          margin: 0 auto;
        }
        .pg-eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 18px;
        }
        .pg-title {
          font-family: var(--font-family-heading);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 18px;
          color: var(--color-on-surface);
        }
        .pg-subtitle {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--color-on-surface-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .pg-filters-section {
          padding: 24px 24px 32px;
          position: sticky;
          top: 0;
          z-index: 5;
          background: var(--color-background, #faf9f7);
        }
        .pg-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pg-chip {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1.5px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-on-surface);
          font-family: var(--font-family-body);
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pg-chip:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .pg-chip.is-active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .pg-grid-section {
          padding: 0 24px 96px;
        }
        .pg-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .pg-tile {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pg-tile-media {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: var(--border-radius-sm);
          background: var(--color-surface-elevated, #f2f0ec);
        }
        .pg-tile-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .pg-tile:hover .pg-tile-media img {
          transform: scale(1.04);
        }
        .pg-tile-caption {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0 2px;
        }
        .pg-tile-category {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        .pg-tile-desc {
          font-size: 0.92rem;
          color: var(--color-on-surface);
          line-height: 1.4;
        }
        .pg-empty {
          max-width: 1100px;
          margin: 80px auto;
          text-align: center;
          color: var(--color-on-surface-secondary);
        }
        .pg-cta {
          padding: 72px 24px 96px;
          background: var(--color-surface-elevated, #f2f0ec);
        }
        .pg-cta-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .pg-cta-title {
          font-family: var(--font-family-heading);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.2;
          margin: 0 0 14px;
          color: var(--color-on-surface);
        }
        .pg-cta-text {
          font-size: 1rem;
          color: var(--color-on-surface-secondary);
          margin: 0 0 30px;
          line-height: 1.6;
        }
        .pg-cta-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .pg-cta-btn {
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
        .pg-cta-btn-primary {
          background: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .pg-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px color-mix(in srgb, var(--color-primary) 35%, transparent);
        }
        .pg-cta-btn-outline {
          border-color: var(--color-border);
          color: var(--color-on-surface);
          background: var(--color-surface);
        }
        .pg-cta-btn-outline:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .pg-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .pg-hero {
            padding: 96px 20px 36px;
          }
          .pg-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 18px;
          }
          .pg-chip {
            padding: 8px 14px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  )
}
