import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SITE from '../lib/site-config'

const REVIEWS = [
  {
    initials: 'MR',
    name: 'Maria R.',
    city: 'Tolleson, AZ',
    service: 'Paver Patio & Fire Pit',
    text: 'They completely transformed our backyard into a desert oasis. The paver patio and fire pit area are absolutely stunning. Professional crew, on time, and the quality is unmatched.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    city: 'Avondale, AZ',
    service: 'Artificial Turf & Xeriscape',
    text: 'Best landscaping company in the West Valley, hands down. They installed artificial turf and a full xeriscaping design. Our water bill dropped and the yard looks incredible year-round.',
  },
  {
    initials: 'SL',
    name: 'Sarah L.',
    city: 'Goodyear, AZ',
    service: 'Pool Deck Remodel',
    text: 'From the first consultation to the final walkthrough, the team lived up to their name. Our pool deck remodel exceeded every expectation. Highly recommend to anyone in the area.',
  },
  {
    initials: 'DM',
    name: 'Daniel M.',
    city: 'Buckeye, AZ',
    service: 'Retaining Walls & Irrigation',
    text: 'They built beautiful retaining walls and upgraded our irrigation in about a week. Clean jobsite every day, great communication, and the finished work looks like a magazine cover. Worth every dollar.',
  },
  {
    initials: 'PK',
    name: 'Priya K.',
    city: 'Litchfield Park, AZ',
    service: 'Full Backyard Remodel',
    text: 'We did a full backyard remodel — pavers, turf, lighting, the works. The team handled everything with our HOA and kept us updated daily. Worth every penny.',
  },
  {
    initials: 'RF',
    name: 'Robert F.',
    city: 'Phoenix, AZ',
    service: 'Landscape Lighting',
    text: 'Low-voltage landscape lighting transformed our curb appeal after dark. They picked the right fixtures, ran everything cleanly, and the result is genuinely breathtaking at night.',
  },
  {
    initials: 'AB',
    name: 'Amanda B.',
    city: 'Peoria, AZ',
    service: 'Pet-Friendly Turf',
    text: 'Installed pet-friendly artificial turf for our two dogs. No more dust bowl, no more brown spots, and the kids love it too. Incredibly happy with the whole experience and will be calling again for our front yard.',
  },
  {
    initials: 'CE',
    name: 'Carlos E.',
    city: 'Tolleson, AZ',
    service: 'Paver Driveway',
    text: 'The paver driveway they installed has completely elevated the look of our home. Meticulous attention to detail on the borders and crisp cuts around the curves.',
  },
  {
    initials: 'LH',
    name: 'Lisa H.',
    city: 'Surprise, AZ',
    service: 'Fire Pit & Outdoor Kitchen',
    text: 'We host a lot, and our new outdoor kitchen and fire pit are now the centerpiece of every gathering. Solid construction, beautiful stone work, and fast turnaround.',
  },
]

function Stars({ size = 18 }) {
  return (
    <div className="rv-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="var(--color-accent)">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <style jsx>{`
        .rv-stars { display: inline-flex; gap: 2px; }
      `}</style>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <Head>
        <title>{`Reviews — ${SITE.brand.name}`}</title>
        <meta property="og:title" content={`Reviews — ${SITE.brand.name}`} />
        <meta
          name="description"
          content={`See what homeowners are saying about ${SITE.brand.name}.`}
        />
      </Head>
      <div className="rv-page">
        <Navigation />

        <section className="rv-hero">
          <div className="rv-hero-inner">
            <motion.span
              className="rv-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              WHAT CLIENTS SAY
            </motion.span>
            <motion.h1
              className="rv-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Reviews &amp; Testimonials
            </motion.h1>
            <motion.p
              className="rv-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Real feedback from real West Valley homeowners. We take every project personally &mdash;
              and our clients notice.
            </motion.p>
            <motion.div
              className="rv-summary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <Stars size={22} />
              <span className="rv-summary-score">5.0 average</span>
              <span className="rv-summary-dot">&middot;</span>
              <span className="rv-summary-count">Based on {REVIEWS.length}+ verified reviews</span>
            </motion.div>
          </div>
        </section>

        <section className="rv-masonry-section">
          <div className="rv-masonry">
            {REVIEWS.map((r, i) => (
              <motion.article
                key={r.name}
                className={`rv-card ${i % 3 === 1 ? 'rv-card--accent' : ''}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.05, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
              >
                <svg
                  className="rv-big-quote"
                  width="90"
                  height="90"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z"
                  />
                </svg>
                <Stars size={16} />
                <p className="rv-text">&ldquo;{r.text}&rdquo;</p>
                <div className="rv-footer">
                  <div className="rv-reviewer">
                    <div className="rv-avatar"><span>{r.initials}</span></div>
                    <div className="rv-meta">
                      <span className="rv-name">{r.name}</span>
                      <span className="rv-city">{r.city}</span>
                    </div>
                  </div>
                  <span className="rv-service-tag">{r.service}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="rv-cta">
          <div className="rv-cta-inner">
            <h2 className="rv-cta-title">Ready to write your own review?</h2>
            <p className="rv-cta-text">
              Book your free estimate and let&apos;s build an outdoor space you&apos;ll love for years.
            </p>
            <div className="rv-cta-actions">
              <Link href="/#booking"><a className="rv-cta-btn rv-cta-btn-primary">Book a Free Estimate</a></Link>
              <a href={`tel:${SITE.contact.phoneTel}`} className="rv-cta-btn rv-cta-btn-outline">Call {SITE.contact.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .rv-page {
          width: 100%;
          min-height: 100vh;
          background: var(--color-background, #faf9f7);
        }
        .rv-hero {
          padding: 120px 24px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .rv-hero-inner {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .rv-eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 18px;
        }
        .rv-title {
          font-family: var(--font-family-heading);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 18px;
          color: var(--color-on-surface);
        }
        .rv-subtitle {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--color-on-surface-secondary);
          max-width: 600px;
          margin: 0 auto 24px;
        }
        .rv-summary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          font-size: 0.92rem;
          color: var(--color-on-surface-secondary);
          flex-wrap: wrap;
          justify-content: center;
        }
        .rv-summary-score {
          font-weight: 700;
          color: var(--color-on-surface);
          margin-left: 4px;
        }
        .rv-summary-dot {
          color: var(--color-border);
        }

        .rv-masonry-section {
          padding: 48px 24px 96px;
        }
        .rv-masonry {
          max-width: 1180px;
          margin: 0 auto;
          column-count: 3;
          column-gap: 24px;
        }
        .rv-card {
          break-inside: avoid;
          margin: 0 0 24px;
          display: block;
          position: relative;
          overflow: hidden;
          padding: 28px 28px 24px;
          background: var(--color-surface);
          border-radius: 18px;
          border: 1px solid var(--color-border);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.3s ease;
        }
        .rv-card:hover {
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.1);
        }
        .rv-card--accent {
          background: linear-gradient(
            160deg,
            color-mix(in srgb, var(--color-primary) 7%, var(--color-surface)) 0%,
            var(--color-surface) 55%
          );
        }
        .rv-big-quote {
          position: absolute;
          top: -14px;
          right: -14px;
          color: var(--color-accent);
          opacity: 0.08;
          pointer-events: none;
        }
        .rv-text {
          position: relative;
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-on-surface);
          margin: 14px 0 20px;
          font-family: var(--font-family-body);
        }
        .rv-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }
        .rv-reviewer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .rv-avatar {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: var(--color-on-primary, #fff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.88rem;
          box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 25%, transparent);
        }
        .rv-meta {
          display: flex;
          flex-direction: column;
        }
        .rv-name {
          font-weight: 600;
          color: var(--color-on-surface);
          font-size: 0.94rem;
        }
        .rv-city {
          font-size: 0.8rem;
          color: var(--color-on-surface-secondary);
        }
        .rv-service-tag {
          padding: 5px 11px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .rv-cta {
          padding: 72px 24px 96px;
          background: var(--color-surface-elevated, #f2f0ec);
        }
        .rv-cta-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .rv-cta-title {
          font-family: var(--font-family-heading);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.2;
          margin: 0 0 14px;
          color: var(--color-on-surface);
        }
        .rv-cta-text {
          font-size: 1rem;
          color: var(--color-on-surface-secondary);
          margin: 0 0 30px;
          line-height: 1.6;
        }
        .rv-cta-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .rv-cta-btn {
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
        .rv-cta-btn-primary {
          background: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .rv-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px color-mix(in srgb, var(--color-primary) 35%, transparent);
        }
        .rv-cta-btn-outline {
          border-color: var(--color-border);
          color: var(--color-on-surface);
          background: var(--color-surface);
        }
        .rv-cta-btn-outline:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .rv-masonry {
            column-count: 2;
          }
        }
        @media (max-width: 640px) {
          .rv-hero {
            padding: 96px 20px 36px;
          }
          .rv-masonry {
            column-count: 1;
          }
          .rv-card {
            padding: 24px 22px 20px;
          }
        }
      `}</style>
    </>
  )
}
