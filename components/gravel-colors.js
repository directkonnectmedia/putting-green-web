import React, { useRef } from 'react'

const COLORS = [
  {
    name: 'Gray',
    blurb: 'Clean, classic, works with every palette.',
    image: '/photos/gravel-gray.jpg',
    sizes: ['1/4"', '3/8"', '1/2"', '3/4"'],
  },
  {
    name: 'Beige',
    blurb: 'Warm desert neutral for courtyards and beds.',
    image: '/photos/gravel-beige.jpg',
    sizes: ['1/4"', '3/8"', '1/2"'],
  },
  {
    name: 'Red',
    blurb: 'Rich rust tone that pops against green.',
    image: '/photos/gravel-red.jpg',
    sizes: ['1/4"', '3/8"', '1/2"'],
  },
  {
    name: 'Decorative Mix',
    blurb: 'Custom blends of complementary tones.',
    image: '/photos/gravel-mix.jpg',
    sizes: ['Custom blends'],
  },
]

export default function GravelColors() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.gc-card')
    const delta = card ? card.getBoundingClientRect().width : track.clientWidth
    track.scrollBy({ left: dir * delta, behavior: 'smooth' })
  }

  return (
    <section id="gravel-colors" className="gc-section">
      <div className="gc-container">
        <div className="gc-header">
          <span className="home-section-label">AVAILABLE COLORS</span>
          <h2 className="home-section-title section-title">Gravel Colors</h2>
          <div className="header-divider"></div>
          <p className="gc-subtitle">
            Multiple sizes and colors available for driveways, yards, and
            landscape beds. Delivery and installation included.
          </p>
        </div>

        <div className="gc-carousel">
          <button
            type="button"
            className="gc-nav gc-nav--prev"
            aria-label="Previous color"
            onClick={() => scrollByCard(-1)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="gc-track" ref={trackRef}>
            {COLORS.map((c, i) => (
              <article
                key={c.name}
                className="gc-card"
                style={{ '--gc-image': `url(${c.image})` }}
              >
                <div
                  className="gc-card-texture"
                  role="img"
                  aria-label={`${c.name} gravel close-up`}
                />
                <div className="gc-card-overlay">
                  <div className="gc-card-body">
                    <span className="gc-card-eyebrow">{`0${i + 1} / Gravel Color`}</span>
                    <h3 className="gc-card-title">{c.name}</h3>
                    <p className="gc-card-blurb">{c.blurb}</p>
                    <div className="gc-sizes">
                      {c.sizes.map((s) => (
                        <span key={s} className="gc-size-chip">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="gc-nav gc-nav--next"
            aria-label="Next color"
            onClick={() => scrollByCard(1)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .gc-section {
          padding: var(--spacing-3xl) 0;
          background: var(--color-surface);
          position: relative;
        }
        .gc-container {
          max-width: var(--content-max-width);
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
        }
        .gc-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
        }
        .gc-subtitle {
          max-width: 580px;
          margin: var(--spacing-sm) auto 0;
          color: var(--color-on-surface-secondary);
          font-family: var(--font-family-body);
          font-size: var(--font-size-base);
          line-height: 1.55;
        }

        .gc-carousel {
          position: relative;
        }
        .gc-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          border-radius: var(--border-radius-lg);
          scrollbar-width: none;
        }
        .gc-track::-webkit-scrollbar {
          display: none;
        }

        .gc-card {
          flex: 0 0 100%;
          scroll-snap-align: start;
          position: relative;
          height: clamp(420px, 52vh, 560px);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: 0 18px 44px color-mix(in srgb, var(--color-on-surface) 14%, transparent);
        }

        .gc-card-texture {
          position: absolute;
          inset: 0;
          background-image: var(--gc-image);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .gc-card-texture::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 30%, transparent 55%, rgba(0, 0, 0, 0.45) 100%),
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.2), transparent 60%);
          pointer-events: none;
        }

        .gc-card-overlay {
          position: absolute;
          inset: auto 0 0 0;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          display: flex;
          z-index: 2;
        }
        .gc-card-body {
          max-width: 560px;
          padding: clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.5rem, 3vw, 2rem);
          background: color-mix(in srgb, #ffffff 55%, transparent);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid color-mix(in srgb, #ffffff 60%, transparent);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 14px 34px color-mix(in srgb, var(--color-on-surface) 18%, transparent);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .gc-card-eyebrow {
          font-family: var(--font-family-body);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-primary);
          font-weight: 700;
        }
        .gc-card-title {
          margin: 0;
          font-family: var(--font-family-heading);
          font-weight: var(--font-weight-heading);
          font-size: clamp(1.75rem, 3.2vw, 2.4rem);
          color: var(--color-on-surface);
          letter-spacing: var(--letter-spacing-heading);
          line-height: 1.1;
        }
        .gc-card-blurb {
          margin: 0;
          font-family: var(--font-family-body);
          color: var(--color-on-surface);
          opacity: 0.85;
          font-size: 1rem;
          line-height: 1.55;
        }
        .gc-sizes {
          margin-top: var(--spacing-sm);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .gc-size-chip {
          padding: 6px 12px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--color-primary) 10%, transparent);
          color: var(--color-primary);
          border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
          font-size: 0.82rem;
          font-weight: 600;
          font-family: var(--font-family-body);
          letter-spacing: 0.04em;
        }

        .gc-nav {
          position: absolute;
          top: calc(50% - 28px);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid color-mix(in srgb, #ffffff 60%, transparent);
          background: color-mix(in srgb, #ffffff 60%, transparent);
          backdrop-filter: blur(14px) saturate(160%);
          -webkit-backdrop-filter: blur(14px) saturate(160%);
          color: var(--color-on-surface);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          box-shadow: 0 8px 22px color-mix(in srgb, var(--color-on-surface) 18%, transparent);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .gc-nav:hover {
          background: var(--color-primary);
          color: var(--color-on-primary);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--color-primary) 35%, transparent);
        }
        .gc-nav--prev {
          left: clamp(10px, 2vw, 22px);
        }
        .gc-nav--next {
          right: clamp(10px, 2vw, 22px);
        }

        @media (max-width: 640px) {
          .gc-card {
            height: clamp(380px, 60vh, 480px);
          }
          .gc-card-overlay {
            padding: 1rem;
          }
          .gc-nav {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  )
}
