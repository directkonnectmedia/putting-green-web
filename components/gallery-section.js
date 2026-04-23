import React from 'react'
import Link from 'next/link'

const FEATURED = [
  { src: '/photos/pg-01.jpg', name: 'Backyard Putting Green' },
  { src: '/photos/pg-06.jpg', name: 'Desert Putting Green with Palms' },
  { src: '/photos/pg-08.jpg', name: 'Multi-Hole Practice Green' },
  { src: '/photos/pg-09.jpg', name: 'Front Yard Synthetic Grass' },
  { src: '/photos/pg-07.jpg', name: 'Residential Turf Install' },
  { src: '/photos/pg-10.jpg', name: 'Synthetic Lawn with Gravel Border' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <span className="gallery-label">OUR WORK</span>
          <h2 className="home-section-title gallery-title section-title">
            Project Gallery
          </h2>
        </div>

        <div className="gs-featured-grid">
          {FEATURED.map((p) => (
            <figure key={p.src} className="gs-card">
              <div className="gs-card-media">
                <img src={p.src} alt={p.name} loading="lazy" />
              </div>
              <figcaption className="gs-card-caption">{p.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="gs-toggle-wrap">
          <Link href="/project-gallery">
            <a className="gs-toggle">
              <span>View All Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gs-featured-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .gs-card {
          margin: 0;
          background: var(--color-surface);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--color-border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .gs-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }
        .gs-card-media {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--color-surface-elevated, #f2f0ec);
        }
        .gs-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .gs-card:hover .gs-card-media img {
          transform: scale(1.05);
        }
        .gs-card-caption {
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-on-surface);
          font-family: var(--font-family-body);
          text-align: center;
        }
        .gs-toggle-wrap {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-xl);
        }
        .gs-toggle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: var(--color-surface);
          color: var(--color-on-surface);
          border: 1.5px solid var(--color-border);
          border-radius: 999px;
          font-family: var(--font-family-body);
          font-weight: 600;
          font-size: 0.98rem;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .gs-toggle:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-on-primary, #fff);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px color-mix(in srgb, var(--color-primary) 30%, transparent);
        }
        @media (max-width: 1024px) {
          .gs-featured-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }
        }
        @media (max-width: 720px) {
          .gs-featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
        }
        @media (max-width: 640px) {
          .gs-toggle {
            padding: 12px 20px;
            font-size: 0.92rem;
          }
          .gs-card-caption {
            font-size: 0.82rem;
            padding: 8px 10px;
          }
        }
      `}</style>
    </section>
  )
}
