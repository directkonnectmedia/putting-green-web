import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import BookingWizard from '../components/booking-wizard'
import ReviewsCarousel from '../components/reviews-carousel'
import GallerySection from '../components/gallery-section'
import GravelColors from '../components/gravel-colors'
import SITE from '../lib/site-config'

const fadeUp = {
  hidden: { y: 24 },
  show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const fadeLeft = {
  hidden: { x: -24 },
  show: { x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { x: 24 },
  show: { x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>{SITE.brand.name}</title>
          <meta property="og:title" content={SITE.brand.name} />
          <meta name="description" content={SITE.brand.tagline} />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            {/*
              HERO BACKGROUND
              ---------------
              Template ships with a static image. To use a looping video:
                1. Drop your MP4 at /public/videos/hero.mp4
                2. Replace <img> below with:
                     <video
                       className="hero-bg-image hero-bg-video"
                       src="/videos/hero.mp4"
                       autoPlay muted loop playsInline preload="auto"
                       aria-hidden="true"
                     />
                3. The .hero-bg-video CSS (in styled-jsx below) disables the
                   slowZoom animation for videos.
            */}
            <img
              src="/photos/pg-02.jpg"
              alt=""
              className="hero-bg-image"
              aria-hidden="true"
            />
            <div className="home-thq-hero-overlay-elm hero-overlay"></div>
          </div>
          <div className="hero-container">
            <h1 className="home-hero-title hero-title">
              <span>{SITE.brand.nameFirst} </span>
              <span className="accent-text">{SITE.brand.nameRest}</span>
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-tagline">{SITE.location.heroTagline}</p>
            <div className="hero-cta-group">
              <a href="#booking">
                <div className="btn btn-accent btn-lg">
                  <span>Book a Free Estimate</span>
                </div>
              </a>
              <a href={`tel:${SITE.contact.phoneTel}`}>
                <div className="hero-btn-white btn btn-lg btn-outline">
                  <span>Call {SITE.contact.phoneDisplay}</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 13 5 5 5-5M7 6l5 5 5-5"></path>
            </svg>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="services-container">
            <div className="services-header">
              <span className="home-section-label">WHAT WE DO</span>
              <h2 className="home-section-title section-title">Our Services</h2>
              <div className="header-divider"></div>
            </div>
            <div id="servicesCarousel" className="services-carousel">
              <div className="services-carousel__track">
                <div className="services-slide is-active" data-slide="0" style={{ backgroundImage: "url(/photos/pg-01.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">01 / Signature Service</span>
                    <h3 className="services-slide__title">Backyard Putting Greens</h3>
                    <p className="services-slide__desc">Custom-built synthetic putting greens for your backyard. True roll, realistic speed, and tailored layouts so you can practice like you&apos;re on the course &mdash; without leaving home.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="1" style={{ backgroundImage: "url(/photos/pg-05.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">02 / Turf &amp; Lawns</span>
                    <h3 className="services-slide__title">Synthetic Grass</h3>
                    <p className="services-slide__desc">Premium American-made synthetic turf that looks real, feels soft, and stays green year-round. Pet-friendly, kid-friendly, and affordably priced.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="2" style={{ backgroundImage: "url(/photos/pg-10.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">03 / Hardscape</span>
                    <h3 className="services-slide__title">Gravel Spreading &amp; Installation</h3>
                    <p className="services-slide__desc">Driveways, yards, and landscape beds. Multiple sizes from &frac14;&quot; fine to &frac34;&quot;, in gray, beige, red, and decorative mixes. Delivery and installation available.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
              </div>
              <button id="servicesNext" aria-label="Next service" className="services-carousel__nav services-carousel__nav--next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
              </button>
              <div id="servicesDots" className="services-carousel__dots">
                <button data-dot="0" className="services-carousel__dot is-active" aria-label="Go to service 1"></button>
                <button data-dot="1" className="services-carousel__dot" aria-label="Go to service 2"></button>
                <button data-dot="2" className="services-carousel__dot" aria-label="Go to service 3"></button>
              </div>
              <div className="services-carousel__progress"><div id="servicesProgress" className="services-carousel__progress-bar"></div></div>
            </div>
          </div>
        </section>
        <GravelColors />
        <GallerySection />
        <section id="reviews" className="reviews-section">
          <div className="reviews-container">
            <div className="reviews-header">
              <span className="home-section-label">WHAT OUR CLIENTS SAY</span>
              <h2 className="home-section-title section-title">
                Reviews &amp; Testimonials
              </h2>
            </div>
            <ReviewsCarousel />
          </div>
        </section>
        <section id="about" className="why-section">
          <div className="why-container">
            <motion.div
              className="why-content"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.span variants={fadeUp} className="home-section-label">
                THE PUTTING GREEN DIFFERENCE
              </motion.span>
              <motion.h2 variants={fadeUp} className="home-section-title section-title">
                Premium Synthetic Turf Built for Phoenix
              </motion.h2>
              <motion.p variants={fadeUp} className="why-description section-content">
                We install custom putting greens, synthetic lawns, and gravel
                with high-quality, American-made materials that hold up to the
                Arizona sun. Clean work, fair pricing, and yards that stay
                beautiful year-round &mdash; pet-safe and kid-safe by default.
              </motion.p>
              <motion.div
                className="trust-points"
                variants={stagger}
              >
                <motion.div variants={fadeLeft} className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Quality Materials</h4>
                    <p className="section-content">
                      Brand-new, American-made synthetic turf and top-grade
                      gravel &mdash; built to last in the Arizona heat.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeLeft} className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Local Knowledge</h4>
                    <p className="section-content">
                      Based in Phoenix and familiar with Valley yards,
                      drainage, and HOA requirements.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeLeft} className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Guaranteed Workmanship</h4>
                    <p className="section-content">
                      Every project is backed by our signature commitment to
                      excellence and durability.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="why-image-wrapper"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <img
                src="/photos/pg-01.jpg"
                alt="Putting Green synthetic turf installation in Phoenix"
                className="why-image"
              />
            </motion.div>
          </div>
        </section>
        <section id="booking" className="booking-section">
          <div className="booking-container">
            <div className="booking-form-wrapper booking-form-wrapper--full">
              <BookingWizard />
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-card">
              <h2 className="home-section-title section-title">
                Ready to Upgrade Your Backyard?
              </h2>
              <p className="cta-text section-content">
                Join Phoenix homeowners who trust {SITE.brand.name} for
                custom putting greens, synthetic lawns, and professional
                gravel installation.
              </p>
              <div className="cta-divider"></div>
              <div className="cta-buttons">
                <a href="#booking">
                  <div className="btn btn-accent btn-xl">
                    <span>Request Your Free Estimate</span>
                  </div>
                </a>
                <a href={`tel:${SITE.contact.phoneTel}`}>
                  <div className="btn btn-outline btn-xl">
                    <span>Call {SITE.contact.phoneDisplay}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes slowZoom {from {transform: scale(1);}
to {transform: scale(1.1);}}@keyframes scaleX {from {transform: scaleX(0);}
to {transform: scaleX(1);}}@keyframes bounce {0%,20%,50%,80%,100% {transform: translateY(0) translateX(-50%);}
40% {transform: translateY(-10px) translateX(-50%);}
60% {transform: translateY(-5px) translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="putting-green">
(function(){
  // Services Carousel
  const sCarousel = document.getElementById("servicesCarousel")
  if (sCarousel) {
    const slides = sCarousel.querySelectorAll(".services-slide")
    const dots = sCarousel.querySelectorAll(".services-carousel__dot")
    const prevBtn = document.getElementById("servicesPrev")
    const nextBtn = document.getElementById("servicesNext")
    const progressBar = document.getElementById("servicesProgress")
    let current = 0
    let timer = null
    let progressTimer = null
    const INTERVAL = 5000

    const goTo = (i) => {
      current = (i + slides.length) % slides.length
      slides.forEach((s, idx) => s.classList.toggle("is-active", idx === current))
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === current))
      restartProgress()
    }

    const next = () => goTo(current + 1)
    const prev = () => goTo(current - 1)

    const startAuto = () => {
      stopAuto()
      timer = setInterval(next, INTERVAL)
      restartProgress()
    }
    const stopAuto = () => {
      if (timer) { clearInterval(timer); timer = null }
      if (progressTimer) { cancelAnimationFrame(progressTimer); progressTimer = null }
    }
    const restartProgress = () => {
      if (!progressBar) return
      progressBar.style.transition = "none"
      progressBar.style.width = "0%"
      // force reflow
      void progressBar.offsetWidth
      if (timer) {
        progressBar.style.transition = "width " + INTERVAL + "ms linear"
        progressBar.style.width = "100%"
      }
    }

    nextBtn?.addEventListener("click", () => { next(); startAuto() })
    prevBtn?.addEventListener("click", () => { prev(); startAuto() })
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.getAttribute("data-dot"), 10)
        goTo(i)
        startAuto()
      })
    })

    // Pause on hover
    sCarousel.addEventListener("mouseenter", stopAuto)
    sCarousel.addEventListener("mouseleave", startAuto)

    // Keyboard
    sCarousel.setAttribute("tabindex", "0")
    sCarousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { next(); startAuto() }
      if (e.key === "ArrowLeft") { prev(); startAuto() }
    })

    // Touch swipe
    let touchStartX = 0
    let touchEndX = 0
    sCarousel.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX }, { passive: true })
    sCarousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        if (diff > 0) next(); else prev()
        startAuto()
      }
    }, { passive: true })

    // Pause when offscreen
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) startAuto(); else stopAuto()
      })
    }, { threshold: 0.25 })
    io.observe(sCarousel)
  }

    // Scroll Reveal Animation (Subtle)
  const revealElements = document.querySelectorAll(".review-card")

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top
      if (elTop < triggerBottom) {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }
    })
  }

  // Initial styles for reveal
  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .hero-bg-video {
            animation: none !important;
            display: block;
            background: #000;
          }
          .home-thq-hero-logo-image-elm {
            width: 140px;
            height: auto;
            display: block;
          }
          .home-thq-hero-overlay-elm {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .home-thq-hero-logo-image-elm {
              width: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
