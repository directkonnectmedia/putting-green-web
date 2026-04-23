import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import SITE from '../lib/site-config'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-root">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div
                  aria-label={`${SITE.brand.name} Home`}
                  className="navigation-logo-wrapper"
                >
                  {/*
                    LOGO IMAGE
                    ----------
                    Drop the client's logo at /public/logo.png (transparent PNG,
                    cropped tight) and uncomment the <img> below. Keeping the
                    wordmark alone is fine too — just delete this block.
                  */}
                  {/*
                  <img
                    src="/logo.png"
                    alt={SITE.brand.name}
                    className="navigation-logo-img"
                  />
                  */}
                  <div className="navigation-logo-content">
                    <span className="navigation-brand-name">
                      <span>{SITE.brand.nameFirst} </span>
                      <span className="navigation-thq-navigation-brand-accent-elm1">
                        {SITE.brand.nameRest}
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <Link href="/services">
                    <a>
                      <div className="navigation-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-gallery">
                    <a>
                      <div className="navigation-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/reviews">
                    <a>
                      <div className="navigation-link">
                        <span>Reviews</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-booking">
                    <a>
                      <div className="navigation-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
              <a href={`tel:${SITE.contact.phoneTel}`}>
                <div className="navigation-cta btn btn-accent btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>
                    {' '}
                    Call Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <button
              id="nav-toggle"
              aria-label="Open Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-menu"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div id="nav-overlay" className="navigation-overlay">
            <div className="navigation-overlay-header">
              <Link href="/">
                <a>
                  <div className="navigation-logo-wrapper">
                    {/* Uncomment when a logo file is provided — see nav top. */}
                    {/*
                    <img
                      src="/logo.png"
                      alt={SITE.brand.name}
                      className="navigation-logo-img"
                    />
                    */}
                    <span className="navigation-brand-name">
                      <span>{SITE.brand.nameFirst} </span>
                      <span className="navigation-thq-navigation-brand-accent-elm2">
                        {SITE.brand.nameRest}
                      </span>
                    </span>
                  </div>
                </a>
              </Link>
              <button
                id="nav-close"
                aria-label="Close Menu"
                className="navigation-mobile-close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="navigation-overlay-content">
              <ul className="navigation-mobile-links">
                <li>
                  <Link href="/services">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-gallery">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/reviews">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Reviews</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-booking">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="navigation-mobile-footer">
                <a href={`tel:${SITE.contact.phoneTel}`}>
                  <div className="navigation-mobile-cta btn btn-accent btn-lg">
                    <span>Call {SITE.contact.phoneDisplay}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navRoot = document.querySelector(".navigation-root")
  const toggleBtn = document.getElementById("nav-toggle")
  const closeBtn = document.getElementById("nav-close")
  const overlay = document.getElementById("nav-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const toggleMenu = (isOpen) => {
    navRoot.classList.toggle("is-open", isOpen)
    toggleBtn.setAttribute("aria-expanded", isOpen)
    document.body.style.overflow = isOpen ? "hidden" : ""

    if (isOpen) {
      overlay.style.display = "flex"
    } else {
      overlay.style.display = "none"
    }
  }

  toggleBtn.addEventListener("click", () => toggleMenu(true))
  closeBtn.addEventListener("click", () => toggleMenu(false))

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navRoot.classList.add("scrolled")
    } else {
      navRoot.classList.remove("scrolled")
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navRoot.classList.contains("is-open")) {
      toggleMenu(false)
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-brand-accent-elm1 {
            color: var(--color-accent);
          }
          .navigation-thq-navigation-brand-accent-elm2 {
            color: var(--color-accent);
          }
          .navigation-logo-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .navigation-logo-img {
            height: 52px;
            width: auto;
            display: block;
            object-fit: contain;
          }
          @media (max-width: 640px) {
            .navigation-logo-img {
              height: 40px;
            }
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
