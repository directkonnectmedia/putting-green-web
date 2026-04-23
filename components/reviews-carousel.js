import React from 'react'

// NOTE: Placeholder testimonials. Replace with real customer reviews when
// available (Google Reviews or direct quotes).
const REVIEWS = [
  {
    initials: 'MR',
    name: 'Maria R.',
    city: 'Phoenix, AZ',
    text: 'Alejandro installed a custom putting green in our backyard and it turned out incredible. True roll, clean edges, and my husband is out there practicing every morning. Professional from start to finish.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    city: 'Scottsdale, AZ',
    text: 'Replaced our dead lawn with synthetic grass from Putting Green. The turf looks real, our dogs love it, and the water bill dropped immediately. Fair price and clean install.',
  },
  {
    initials: 'SL',
    name: 'Sarah L.',
    city: 'Mesa, AZ',
    text: 'We needed gravel for the driveway and beds around the house. Alejandro delivered and spread it the same week, exactly the color we wanted. Great communication and honest pricing.',
  },
  {
    initials: 'DM',
    name: 'Daniel M.',
    city: 'Chandler, AZ',
    text: 'Had a multi-hole putting green built in the backyard — fringe, cups, the whole thing. Quality materials and the crew worked clean. My kids play on it every day and it still looks pristine.',
  },
  {
    initials: 'PK',
    name: 'Priya K.',
    city: 'Tempe, AZ',
    text: 'Full front yard synthetic grass install. The turf is soft, pet-safe, and holds up in the summer heat. Alejandro walked us through every option and delivered exactly what he promised.',
  },
]

function Stars() {
  return (
    <div className="rc-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-accent)">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="rc-card">
      <div className="rc-card-top">
        <Stars />
        <svg className="rc-quote" width="36" height="36" viewBox="0 0 24 24" fill="var(--color-accent)" opacity="0.18" aria-hidden="true">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z" />
        </svg>
      </div>
      <p className="rc-text">&ldquo;{review.text}&rdquo;</p>
      <div className="rc-reviewer">
        <div className="rc-avatar"><span>{review.initials}</span></div>
        <div className="rc-reviewer-meta">
          <span className="rc-name">{review.name}</span>
          <span className="rc-city">{review.city}</span>
        </div>
      </div>
    </article>
  )
}

export default function ReviewsCarousel() {
  const loop = [...REVIEWS, ...REVIEWS]

  return (
    <div className="rc-root" aria-label="Customer reviews">
      <div className="rc-viewport">
        <div className="rc-track">
          {loop.map((review, i) => (
            <div key={i} className="rc-slide">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      <div className="rc-edge rc-edge-left" aria-hidden="true" />
      <div className="rc-edge rc-edge-right" aria-hidden="true" />

      <style jsx>{`
        .rc-root {
          position: relative;
          width: 100%;
        }
        .rc-viewport {
          overflow: hidden;
          padding: 8px 0 20px;
        }
        .rc-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: rc-scroll 55s linear infinite;
          will-change: transform;
        }
        .rc-root:hover .rc-track {
          animation-play-state: paused;
        }
        @keyframes rc-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 10px)); }
        }
        .rc-slide {
          flex: 0 0 auto;
          width: 380px;
        }
        .rc-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px 24px;
          background: var(--color-surface);
          border-radius: var(--border-radius-sm);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--color-border);
          min-height: 260px;
        }
        .rc-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .rc-stars {
          display: flex;
          gap: 2px;
        }
        .rc-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-on-surface);
          margin: 0;
          font-family: var(--font-family-body);
          flex: 1;
        }
        .rc-reviewer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--color-border);
        }
        .rc-avatar {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: var(--color-on-primary, #fff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
        }
        .rc-reviewer-meta {
          display: flex;
          flex-direction: column;
        }
        .rc-name {
          font-weight: 600;
          color: var(--color-on-surface);
          font-size: 0.92rem;
        }
        .rc-city {
          font-size: 0.8rem;
          color: var(--color-on-surface-secondary);
        }
        .rc-edge {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          pointer-events: none;
          z-index: 2;
        }
        .rc-edge-left {
          left: 0;
          background: linear-gradient(to right, var(--color-background, #faf9f7), transparent);
        }
        .rc-edge-right {
          right: 0;
          background: linear-gradient(to left, var(--color-background, #faf9f7), transparent);
        }
        @media (max-width: 640px) {
          .rc-slide {
            width: 300px;
          }
          .rc-track {
            gap: 14px;
            animation-duration: 45s;
          }
          .rc-edge {
            width: 40px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .rc-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
