import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import SITE from '../lib/site-config'

const Footer = (props) => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand-column">
                <div className="footer-logo-wrapper">
                  {/* Uncomment when /public/logo.png is added. */}
                  {/*
                  <img
                    src="/logo.png"
                    alt={SITE.brand.name}
                    className="footer-logo-img"
                  />
                  */}
                  <h2 className="footer-brand-name">
                    <span>{SITE.brand.nameFirst}</span>
                    <br></br>
                    <span className="footer-thq-footer-brand-accent-elm">
                      {SITE.brand.nameRest}
                    </span>
                  </h2>
                </div>
                <p className="footer-description section-content">
                  {SITE.brand.tagline}
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title section-subtitle">
                  Quick Links
                </h3>
                <nav className="footer-nav">
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <Link href="/">
                        <a>
                          <div className="footer-nav-link">
                            <span>Home</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>Our Services</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/project-gallery">
                        <a>
                          <div className="footer-nav-link">
                            <span>Project Gallery</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/reviews">
                        <a>
                          <div className="footer-nav-link">
                            <span>Client Reviews</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/contact-booking">
                        <div className="footer-nav-link">
                          <span>Book Estimate</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-contact-column">
                <h3 className="footer-column-title section-subtitle">
                  Contact Us
                </h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <a href={`tel:${SITE.contact.phoneTel}`}>
                      <div className="footer-contact-link">
                        <span>{SITE.contact.phoneDisplay}</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      {SITE.location.serviceAreaLabel}
                    </span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      {SITE.hours.display}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
              <p className="footer-copyright">
                &copy; {year} {SITE.brand.name} &bull; {SITE.location.city}, {SITE.location.state} &bull; All
                Rights Reserved
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  // No complex logic required for this semantic footer,
  // but we can add a subtle scroll-reveal effect if needed.
  // Intersection Observer could be used here for the "fade in" requirement
  // mentioned in global design requirements.

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 }
  )

  const footerSection = document.querySelector(".footer-section")
  if (footerSection) {
    footerSection.style.opacity = "0"
    footerSection.style.transform = "translateY(20px)"
    footerSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    footerObserver.observe(footerSection)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-brand-accent-elm {
            color: var(--color-secondary);
            font-size: 0.75em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer-logo-img {
            height: 56px;
            width: auto;
            display: block;
            object-fit: contain;
            flex-shrink: 0;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
