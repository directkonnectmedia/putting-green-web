import React, { useRef } from 'react'

// Hex tones chosen to read as natural stone. Texture is CSS-only until
// real gravel sample photos are available.
const COLORS = [
  {
    name: 'Gray',
    blurb: 'Clean, classic, works with every palette.',
    base: '#8a8a8a',
    light: '#b8b8b8',
    dark: '#5e5e5e',
    sizes: ['1/4"', '3/8"', '1/2"', '3/4"'],
  },
  {
    name: 'Beige',
    blurb: 'Warm desert neutral for courtyards and beds.',
    base: '#c2a87e',
    light: '#e2cc9f',
    dark: '#8c7349',
    sizes: ['1/4"', '3/8"', '1/2"'],
  },
  {
    name: 'Red',
    blurb: 'Rich rust tone that pops against green.',
    base: '#a64c38',
    light: '#d07560',
    dark: '#723222',
    sizes: ['1/4"', '3/8"', '1/2"'],
  },
  {
    name: 'Decorative Mix',
    blurb: 'Custom blends of complementary tones.',
    base: '#9d8567',
    light: '#d9c6a2',
    dark: '#5c4532',
    sizes: ['Custom blends'],
  },
]

export default function GravelColors() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.gc-card')
    const gap = 20
    const delta = card ? card.getBoundingClientRect().width + gap : 360
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
            {COLORS.map((c) => (
              <article
                key={c.name}
                className="gc-card"
                style={{
                  '--gc-base': c.base,
                  '--gc-light': c.light,
                  '--gc-dark': c.dark,
                }}
              >
                <div className="gc-card-texture" aria-hidden="true" />
                <div className="gc-card-body">
                  <h3 className="gc-card-title">{c.name}</h3>
                  <p className="gc-card-blurb">{c.blurb}</p>
                  <div className="gc-sizes">
                    {c.sizes.map((s) => (
                      <span key={s} className="gc-size-chip">{s}</span>
                    ))}
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
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 12px 4px 28px;
          scrollbar-width: none;
        }
        .gc-track::-webkit-scrollbar {
          display: none;
        }

        .gc-card {
          flex: 0 0 320px;
          scroll-snap-align: start;
          background: color-mix(in srgb, #ffffff 65%, transparent);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid color-mix(in srgb, #ffffff 55%, transparent);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: 0 8px 28px color-mix(in srgb, var(--color-on-surface) 8%, transparent);
          transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1),
                      box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .gc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px color-mix(in srgb, var(--color-on-surface) 14%, transparent);
        }

        .gc-card-texture {
          height: 240px;
          background-color: var(--gc-base);
          background-image:
            radial-gradient(circle at 22% 28%, var(--gc-light) 0 6%, transparent 7%),
            radial-gradient(circle at 72% 18%, var(--gc-dark) 0 5%, transparent 6%),
            radial-gradient(circle at 48% 54%, var(--gc-light) 0 7%, transparent 8%),
            radial-gradient(circle at 18% 78%, var(--gc-dark) 0 6%, transparent 7%),
            radial-gradient(circle at 82% 82%, var(--gc-light) 0 5%, transparent 6%),
            radial-gradient(circle at 62% 72%, var(--gc-dark) 0 4%, transparent 5%),
            radial-gradient(circle at 38% 12%, var(--gc-dark) 0 3%, transparent 4%);
          background-size: 60px 60px, 80px 80px, 70px 70px, 55px 55px, 65px 65px, 50px 50px, 45px 45px;
          background-position: 0 0, 20px 10px, 10px 35px, 35px 20px, 5px 25px, 15px 5px, 28px 18px;
          position: relative;
          filter: contrast(1.05) saturate(1.05);
        }
        .gc-card-texture::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.18), transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.2), transparent 60%);
          pointer-events: none;
        }

        .gc-card-body {
          padding: var(--spacing-lg) var(--spacing-xl) var(--spacing-xl);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .gc-card-title {
          margin: 0;
          font-family: var(--font-family-heading);
          font-weight: var(--font-weight-heading);
          font-size: 1.5rem;
          color: var(--color-on-surface);
          letter-spacing: var(--letter-spacing-heading);
        }
        .gc-card-blurb {
          margin: 0;
          font-family: var(--font-family-body);
          color: var(--color-on-surface-secondary);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        .gc-sizes {
          margin-top: var(--spacing-sm);
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .gc-size-chip {
          padding: 4px 10px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--color-primary) 8%, transparent);
          color: var(--color-primary);
          border: 1px solid color-mix(in srgb, var(--color-primary) 25%, transparent);
          font-size: 0.78rem;
          font-weight: 600;
          font-family: var(--font-family-body);
          letter-spacing: 0.04em;
        }

        .gc-nav {
          position: absolute;
          top: calc(50% - 28px);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid color-mix(in srgb, var(--color-on-surface) 15%, transparent);
          background: color-mix(in srgb, #ffffff 75%, transparent);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          color: var(--color-on-surface);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          box-shadow: 0 6px 20px color-mix(in srgb, var(--color-on-surface) 12%, transparent);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .gc-nav:hover {
          background: var(--color-primary);
          color: var(--color-on-primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 26px color-mix(in srgb, var(--color-primary) 30%, transparent);
        }
        .gc-nav--prev {
          left: -10px;
        }
        .gc-nav--next {
          right: -10px;
        }

        @media (max-width: 720px) {
          .gc-card {
            flex: 0 0 82%;
          }
          .gc-nav--prev {
            left: 6px;
          }
          .gc-nav--next {
            right: 6px;
          }
        }
      `}</style>
    </section>
  )
}
