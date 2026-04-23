import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import BookingWizard from '../components/booking-wizard'
import SITE from '../lib/site-config'

const ContactBooking = (props) => {
  return (
    <>
      <div className="contact-booking-container1">
        <Head>
          <title>{`Contact — ${SITE.brand.name}`}</title>
          <meta property="og:title" content={`Contact — ${SITE.brand.name}`} />
          <meta
            name="description"
            content="Request a free estimate and we'll get back to you within 24 hours."
          />
        </Head>
        <Navigation></Navigation>
        <section className="booking-hero">
          <div className="booking-hero__media">
            <img
              src="https://images.pexels.com/photos/9173338/pexels-photo-9173338.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Luxurious Arizona backyard at golden hour"
              className="booking-hero__image"
            />
            <div className="booking-hero__overlay"></div>
          </div>
          <div className="booking-hero__container">
            <div className="booking-hero__content-card">
              <div className="booking-hero__brand">
                <div className="booking-hero__logo-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
              </div>
              <h1 className="hero-title">
                <span>
                  {' '}
                  Let&apos;s Build Your Dream
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-booking-thq-text-burgundy-elm">
                  Outdoor Space
                </span>
              </h1>
              <div className="booking-hero__divider"></div>
              <p className="hero-subtitle">
                PREMIUM OUTDOOR LIVING • TOLLESON, ARIZONA
              </p>
              <div className="booking-hero__actions">
                <a href="#booking-form">
                  <div className="btn btn-accent btn-lg">
                    <span>Book a Free Estimate</span>
                  </div>
                </a>
                <a href={`tel:${SITE.contact.phoneTel}`}>
                  <div className="btn btn-lg btn-outline">
                    <span>Call {SITE.contact.phoneDisplay}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="booking-hero__scroll-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewbox="0 0 24 24"
              fill="none"
              stroke="var(--color-surface)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 13 5 5 5-5M7 6l5 5 5-5"></path>
            </svg>
          </div>
        </section>
        <section id="booking-form" className="booking-split">
          <div className="booking-split__container">
            <div className="booking-split__grid">
              <div className="booking-info">
                <span className="section-label">GET STARTED</span>
                <h2 className="section-title">
                  Let&apos;s Build Your Dream Outdoor Space
                </h2>
                <p className="section-content">
                  Ready to transform your property? Fill out the form or give us
                  a call for a free, no-obligation estimate. We serve{' '}
                  {SITE.location.serviceAreaCities}.
                </p>
                <div className="booking-info__details">
                  <div className="booking-info__item">
                    <div className="booking-info__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="booking-info__text">
                      <span className="booking-info__label">Phone</span>
                      <a href={`tel:${SITE.contact.phoneTel}`}>
                        <div className="booking-info__link">
                          <span>{SITE.contact.phoneDisplay}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="booking-info__item">
                    <div className="booking-info__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="booking-info__text">
                      <span className="booking-info__label">Service Area</span>
                      <span className="booking-info__value">
                        {SITE.location.serviceAreaLabel}
                      </span>
                    </div>
                  </div>
                  <div className="booking-info__item">
                    <div className="booking-info__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div className="booking-info__text">
                      <span className="booking-info__label">Hours</span>
                      <span className="booking-info__value">
                        Mon–Sat 7:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="booking-info__note">
                  <p className="section-content">
                    <span className="contact-booking-text14">
                      Free Estimates:
                    </span>
                    <span>
                      {' '}
                      We respond to all inquiries within 24 hours to schedule
                      your on-site consultation.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <BookingWizard />
            </div>
          </div>
        </section>
        <section className="process-steps">
          <div className="process-steps__container">
            <div className="process-steps__header">
              <span className="section-label">OUR METHOD</span>
              <h2 className="section-title">How the Process Works</h2>
            </div>
            <div className="process-steps__grid">
              <div className="process-step">
                <div className="process-step__icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <div className="process-step__number">
                    <span>1</span>
                  </div>
                </div>
                <h3 className="process-step__title">Initial Consultation</h3>
                <p className="section-content">
                  We meet at your property to discuss your vision, take
                  measurements, and assess your site&apos;s unique
                  characteristics.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  <div className="process-step__number">
                    <span>2</span>
                  </div>
                </div>
                <h3 className="process-step__title">Design &amp; Estimate</h3>
                <p className="section-content">
                  Our team creates a custom design plan and a detailed,
                  transparent estimate covering all materials and labor costs.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <div className="process-step__number">
                    <span>3</span>
                  </div>
                </div>
                <h3 className="process-step__title">Project Scheduling</h3>
                <p className="section-content">
                  Once approved, we set a start date and our professional crew
                  gets to work bringing your dream landscape to life.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner">
          <div className="cta-banner__gradient"></div>
          <div className="cta-banner__container">
            <div className="cta-banner__content">
              <h2 className="section-title">
                Request Your Free Estimate Today
              </h2>
              <p className="section-content">
                Experience the luxury of a professionally designed outdoor
                living space.
              </p>
              <div className="cta-banner__actions">
                <a href={`tel:${SITE.contact.phoneTel}`}>
                  <div className="btn-surface btn btn-lg">
                    <span>Call {SITE.contact.phoneDisplay}</span>
                  </div>
                </a>
                <a href="#booking-form">
                  <div className="btn btn-accent btn-lg">
                    <span>Book Online</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="services-glance">
          <div className="services-glance__container">
            <div className="services-glance__header">
              <span className="section-label">WHAT WE DO</span>
              <h2 className="section-title">Our Services</h2>
              <div className="services-glance__line"></div>
            </div>
            <div className="services-glance__grid">
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Paver Installation</h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Xeriscaping</h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Artificial Turf</h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="m4.93 19.07 14.14-14.14"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">
                  Pool Deck Remodeling
                </h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18"></path>
                    <path d="M3 17h18"></path>
                    <path d="M3 13h18"></path>
                    <path d="M3 9h18"></path>
                    <path d="M3 5h18"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Retaining Walls</h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Irrigation Systems</h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v3"></path>
                    <path d="M16 2v3"></path>
                    <path d="M4 19c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-5H4v5Z"></path>
                    <path d="M4 14V9c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v5H4Z"></path>
                    <path d="M12 11v3"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">
                  Fire Pits &amp; Kitchens
                </h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20v-8"></path>
                    <path d="M12 12l-4-4"></path>
                    <path d="M12 12l4-4"></path>
                    <path d="M12 20l4-4"></path>
                    <path d="M12 20l-4-4"></path>
                    <path d="M12 4v4"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">
                  Tree &amp; Plant Installation
                </h4>
              </div>
              <div className="service-mini-card">
                <div className="service-mini-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"></path>
                  </svg>
                </div>
                <h4 className="service-mini-card__title">Landscape Lighting</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="booking-faq">
          <div className="booking-faq__container">
            <div className="booking-faq__header">
              <span className="section-label">QUESTIONS</span>
              <h2 className="section-title">Common Inquiries</h2>
            </div>
            <div className="booking-faq__accordion">
              <details className="faq-item">
                <summary className="faq-item__trigger">
                  <span className="faq-item__title">
                    How long does the estimate process take?
                  </span>
                  <span className="faq-item__icon"></span>
                </summary>
                <div className="faq-item__content">
                  <p className="section-content">
                    Typically, we respond to your inquiry within 24 hours. Once
                    we visit your site for the consultation, you will receive a
                    detailed written estimate within 2-3 business days depending
                    on the complexity of the design.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-item__trigger">
                  <span className="faq-item__title">
                    Is there a cost for the initial consultation?
                  </span>
                  <span className="faq-item__icon"></span>
                </summary>
                <div className="faq-item__content">
                  <p className="section-content">
                    No, our initial on-site consultation and project estimates
                    are completely free of charge. We believe in providing value
                    and demonstrating our expertise before you commit to a
                    project.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-item__trigger">
                  <span className="faq-item__title">
                    What areas in the West Valley do you cover?
                  </span>
                  <span className="faq-item__icon"></span>
                </summary>
                <div className="faq-item__content">
                  <p className="section-content">
                    We primarily serve Tolleson, Avondale, Goodyear, Litchfield
                    Park, and Buckeye. If you are located just outside these
                    areas in the West Valley, please reach out as we often
                    accommodate nearby projects.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-item__trigger">
                  <span className="faq-item__title">
                    Do you specialize in water-wise (Xeriscape) designs?
                  </span>
                  <span className="faq-item__icon"></span>
                </summary>
                <div className="faq-item__content">
                  <p className="section-content">
                    Absolutely. Living in the Sonoran Desert, we prioritize
                    sustainable, water-efficient designs that don&apos;t
                    sacrifice beauty. We use native plants and smart irrigation
                    to minimize water waste while maximizing curb appeal.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-item__trigger">
                  <span className="faq-item__title">
                    What should I expect during the first visit?
                  </span>
                  <span className="faq-item__icon"></span>
                </summary>
                <div className="faq-item__content">
                  <p className="section-content">
                    During the first visit, our project manager will walk your
                    property with you, listen to your ideas, discuss your
                    budget, and offer professional advice on materials and
                    layout possibilities. We&apos;ll also take necessary
                    measurements and photos.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <div className="contact-booking-container2">
          <div className="contact-booking-container3">
            <Script
              html={`<style>
        @keyframes slowZoom {from {transform: scale(1);}
to {transform: scale(1.1);}}@keyframes slideUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes bounce {0%,20%,50%,80%,100% {transform: translateY(0) translateX(-50%);}
40% {transform: translateY(-10px) translateX(-50%);}
60% {transform: translateY(-5px) translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="contact-booking-container4">
          <div className="contact-booking-container5">
            <Script
              html={`<script defer data-name="booking-handler">
(function(){
  // Legacy form handler removed — BookingWizard handles submit internally.

  // Accordion single-open logic (Optional enhancement)
  const details = document.querySelectorAll(".faq-item")
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open")
        }
      })
    })
  })

  // Scroll Reveal Animation (Simple version for Level Medium)
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".process-step, .service-mini-card, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contact-booking-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .contact-booking-thq-text-burgundy-elm {
            color: var(--color-accent);
          }
          .contact-booking-text14 {
            font-weight: 700;
          }
          .contact-booking-thq-success-icon-elm {
            display: none;
          }
          .contact-booking-thq-booking-formfeedback-elm {
            display: none;
          }
          .contact-booking-container2 {
            display: none;
          }
          .contact-booking-container3 {
            display: contents;
          }
          .contact-booking-container4 {
            display: none;
          }
          .contact-booking-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ContactBooking
