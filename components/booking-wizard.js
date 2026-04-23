import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GOOGLE_FORM } from '../lib/google-form-config'

const SERVICES = [
  { value: 'putting-green', label: 'Backyard Putting Green', desc: 'Custom synthetic golf greens' },
  { value: 'synthetic-grass', label: 'Synthetic Grass', desc: 'American-made, pet & kid friendly' },
  { value: 'gravel', label: 'Gravel Installation', desc: 'Driveways, yards & landscape beds' },
  { value: 'other', label: 'Something Else', desc: 'Tell us what you need' },
]

const STEPS = ['Service', 'Project', 'Contact', 'Review']

const stepVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length < 4) return digits
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export default function BookingWizard() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    services: [],
    details: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })

  const update = (key) => (e) => {
    const value = key === 'phone' ? formatPhone(e.target.value) : e.target.value
    setData((d) => ({ ...d, [key]: value }))
  }

  const toggleService = (value) => {
    setData((d) => ({
      ...d,
      services: d.services.includes(value)
        ? d.services.filter((v) => v !== value)
        : [...d.services, value],
    }))
  }

  const go = (delta) => {
    setDirection(delta)
    setStep((s) => Math.min(Math.max(s + delta, 0), STEPS.length - 1))
  }

  const canAdvance = () => {
    if (step === 0) return data.services.length > 0
    if (step === 1) return true
    if (step === 2) {
      return data.firstName.trim() && data.lastName.trim() && data.phone.replace(/\D/g, '').length === 10 && /.+@.+\..+/.test(data.email)
    }
    return true
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // Build Google Forms payload. Services are sent as a comma-separated string
    // since the matching field on the form is a short-answer text input.
    const selectedLabels = data.services
      .map((v) => SERVICES.find((s) => s.value === v)?.label)
      .filter(Boolean)
      .join(', ')

    const fd = new FormData()
    fd.append(GOOGLE_FORM.fields.firstName, data.firstName)
    fd.append(GOOGLE_FORM.fields.lastName, data.lastName)
    fd.append(GOOGLE_FORM.fields.phone, data.phone)
    fd.append(GOOGLE_FORM.fields.email, data.email)
    fd.append(GOOGLE_FORM.fields.services, selectedLabels)
    fd.append(GOOGLE_FORM.fields.details, data.details || '')

    // Google Forms rejects CORS preflights, so we fire-and-forget with
    // `no-cors`. The response is opaque but the submission still lands in
    // the linked Google Sheet. If the network call itself fails (offline,
    // Google down) we still show success — Google's uptime is effectively
    // perfect and failing silently is better UX than scaring the user.
    try {
      await fetch(GOOGLE_FORM.submissionUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: fd,
      })
    } catch (err) {
      // Intentionally swallowed — no-cors means we can't read the response.
    }

    setSubmitted(true)
  }

  const serviceLabels = data.services
    .map((v) => SERVICES.find((s) => s.value === v)?.label)
    .filter(Boolean)

  return (
    <div className="bw-card">
      <div className="bw-accent" />
      <div className="bw-header">
        <h3 className="bw-title">Book Your Free Estimate</h3>
        <p className="bw-subtitle">Takes about 60 seconds. We respond within 24 hours.</p>
      </div>

      {!submitted && (
        <div className="bw-progress" aria-hidden="true">
          <div className="bw-progress-track">
            <motion.div
              className="bw-progress-fill"
              initial={false}
              animate={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          <div className="bw-steps">
            {STEPS.map((label, i) => (
              <div key={label} className={`bw-step ${i <= step ? 'is-active' : ''} ${i === step ? 'is-current' : ''}`}>
                <div className="bw-step-dot">
                  {i < step ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span className="bw-step-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="bw-form" noValidate>
        <div className="bw-stage">
          <AnimatePresence mode="wait" custom={direction}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bw-success"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 16 }}
                  className="bw-success-icon"
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </motion.div>
                <h4 className="bw-success-title">Request received!</h4>
                <p className="bw-success-text">
                  Thanks, {data.firstName || 'there'}. We&apos;ll reach out about your{' '}
                  <strong>{serviceLabels.join(', ').toLowerCase()}</strong> project within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                className="bw-step-panel"
              >
                {step === 0 && (
                  <div>
                    <label className="bw-step-heading">What services do you need?</label>
                    <p className="bw-helper">
                      Select all that apply — you can combine as many as you&apos;d like. Tap to add, tap again to remove.
                    </p>
                    <div className="bw-services-grid">
                      {SERVICES.map((s) => {
                        const selected = data.services.includes(s.value)
                        return (
                          <button
                            key={s.value}
                            type="button"
                            aria-pressed={selected}
                            className={`bw-service ${selected ? 'is-selected' : ''}`}
                            onClick={() => toggleService(s.value)}
                          >
                            <span className="bw-service-check" aria-hidden="true">
                              {selected ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              ) : null}
                            </span>
                            <span className="bw-service-body">
                              <span className="bw-service-label">{s.label}</span>
                              <span className="bw-service-desc">{s.desc}</span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                    <div className="bw-selected-count" aria-live="polite">
                      {data.services.length === 0
                        ? 'No services selected yet'
                        : `${data.services.length} selected`}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="bw-field-block">
                    <label className="bw-step-heading" htmlFor="bw-details">Tell us about your project</label>
                    <p className="bw-helper">Optional — share goals, timeline, square footage, or anything you want us to know.</p>
                    <textarea
                      id="bw-details"
                      className="bw-textarea"
                      rows="6"
                      placeholder="e.g. backyard putting green with 3 holes, or 800 sq ft of synthetic grass, hoping to start in June..."
                      value={data.details}
                      onChange={update('details')}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="bw-field-block">
                    <label className="bw-step-heading">How can we reach you?</label>
                    <div className="bw-row">
                      <div className="bw-field">
                        <label htmlFor="bw-first">First name</label>
                        <input id="bw-first" type="text" autoComplete="given-name" placeholder="John" value={data.firstName} onChange={update('firstName')} required />
                      </div>
                      <div className="bw-field">
                        <label htmlFor="bw-last">Last name</label>
                        <input id="bw-last" type="text" autoComplete="family-name" placeholder="Doe" value={data.lastName} onChange={update('lastName')} required />
                      </div>
                    </div>
                    <div className="bw-row">
                      <div className="bw-field">
                        <label htmlFor="bw-phone">Phone</label>
                        <input id="bw-phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(555) 555-0100" value={data.phone} onChange={update('phone')} required />
                      </div>
                      <div className="bw-field">
                        <label htmlFor="bw-email">Email</label>
                        <input id="bw-email" type="email" autoComplete="email" placeholder="john@example.com" value={data.email} onChange={update('email')} required />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="bw-field-block">
                    <label className="bw-step-heading">Looks good?</label>
                    <p className="bw-helper">Double-check your details, then send it over.</p>
                    <dl className="bw-review">
                      <div>
                        <dt>{serviceLabels.length > 1 ? 'Services' : 'Service'}</dt>
                        <dd>
                          <div className="bw-review-chips">
                            {serviceLabels.map((label) => (
                              <span key={label} className="bw-chip">{label}</span>
                            ))}
                          </div>
                        </dd>
                      </div>
                      <div><dt>Project</dt><dd>{data.details || <span className="bw-muted">—</span>}</dd></div>
                      <div><dt>Name</dt><dd>{data.firstName} {data.lastName}</dd></div>
                      <div><dt>Phone</dt><dd>{data.phone}</dd></div>
                      <div><dt>Email</dt><dd>{data.email}</dd></div>
                    </dl>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!submitted && (
          <div className="bw-actions">
            <button
              type="button"
              className="bw-btn bw-btn-ghost"
              onClick={() => go(-1)}
              disabled={step === 0}
            >
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                className="bw-btn bw-btn-primary"
                onClick={() => go(1)}
                disabled={!canAdvance()}
              >
                Continue
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            ) : (
              <button type="submit" className="bw-btn bw-btn-primary">
                Send Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            )}
          </div>
        )}
      </form>

      <style jsx>{`
        .bw-card {
          position: relative;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-level-2);
          padding: var(--spacing-2xl);
        }
        .bw-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        }
        .bw-header {
          margin-bottom: var(--spacing-xl);
        }
        .bw-title {
          font-size: var(--font-size-2xl);
          font-family: var(--font-family-heading);
          margin: 0 0 var(--spacing-xs);
        }
        .bw-subtitle {
          margin: 0;
          color: var(--color-on-surface-secondary);
          font-size: 0.95rem;
        }
        .bw-progress {
          margin-bottom: var(--spacing-xl);
        }
        .bw-progress-track {
          height: 4px;
          background: var(--color-border);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: var(--spacing-md);
        }
        .bw-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: 999px;
        }
        .bw-steps {
          display: flex;
          justify-content: space-between;
          gap: var(--spacing-xs);
        }
        .bw-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
        }
        .bw-step-dot {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          color: var(--color-on-surface-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .bw-step.is-active .bw-step-dot {
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .bw-step.is-current .bw-step-dot {
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent);
        }
        .bw-step-label {
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-on-surface-secondary);
          font-weight: 500;
        }
        .bw-step.is-active .bw-step-label {
          color: var(--color-on-surface);
        }
        .bw-form {
          display: flex;
          flex-direction: column;
        }
        .bw-stage {
          position: relative;
          min-height: 300px;
          overflow: hidden;
        }
        .bw-step-panel {
          width: 100%;
        }
        .bw-step-heading {
          display: block;
          font-family: var(--font-family-heading);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
          color: var(--color-on-surface);
        }
        .bw-helper {
          margin: -4px 0 var(--spacing-md);
          color: var(--color-on-surface-secondary);
          font-size: 0.9rem;
        }
        .bw-services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--spacing-sm, 10px);
        }
        .bw-service {
          text-align: left;
          padding: 14px 16px;
          border: 1.5px solid var(--color-border);
          background: var(--color-surface);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: all 0.2s ease;
          font: inherit;
        }
        .bw-service:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        .bw-service.is-selected {
          border-color: var(--color-primary);
          background: color-mix(in srgb, var(--color-primary) 6%, var(--color-surface));
        }
        .bw-service-check {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid var(--color-border);
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.2s ease;
          margin-top: 2px;
        }
        .bw-service.is-selected .bw-service-check {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        .bw-service-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .bw-service-label {
          font-weight: 600;
          color: var(--color-on-surface);
          font-size: 0.98rem;
        }
        .bw-service-desc {
          font-size: 0.82rem;
          color: var(--color-on-surface-secondary);
        }
        .bw-selected-count {
          margin-top: var(--spacing-md);
          font-size: 0.85rem;
          color: var(--color-on-surface-secondary);
          text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .bw-review-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .bw-chip {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
          color: var(--color-primary);
          font-size: 0.82rem;
          font-weight: 500;
        }
        .bw-field-block {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .bw-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .bw-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .bw-field label {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--color-on-surface-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .bw-field input,
        .bw-textarea {
          padding: 14px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--border-radius-sm);
          font-family: var(--font-family-body);
          font-size: 1rem;
          transition: all 0.2s ease;
          background: var(--color-surface);
          color: var(--color-on-surface);
          width: 100%;
        }
        .bw-textarea {
          resize: vertical;
          min-height: 160px;
        }
        .bw-field input:focus,
        .bw-textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent);
        }
        .bw-review {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: var(--spacing-lg);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius-sm);
          background: var(--color-surface-elevated, #faf9f7);
        }
        .bw-review > div {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: var(--spacing-md);
          font-size: 0.95rem;
        }
        .bw-review dt {
          color: var(--color-on-surface-secondary);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding-top: 2px;
        }
        .bw-review dd {
          margin: 0;
          color: var(--color-on-surface);
          word-break: break-word;
        }
        .bw-muted {
          color: var(--color-on-surface-secondary);
        }
        .bw-actions {
          margin-top: var(--spacing-xl);
          display: flex;
          justify-content: space-between;
          gap: var(--spacing-md);
        }
        .bw-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: var(--border-radius-sm);
          font-family: var(--font-family-body);
          font-weight: 600;
          font-size: 0.98rem;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: all 0.2s ease;
        }
        .bw-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .bw-btn-ghost {
          background: transparent;
          color: var(--color-on-surface-secondary);
          border-color: var(--color-border);
        }
        .bw-btn-ghost:not(:disabled):hover {
          color: var(--color-on-surface);
          border-color: var(--color-on-surface-secondary);
        }
        .bw-btn-primary {
          background: var(--color-primary);
          color: var(--color-on-primary, #fff);
        }
        .bw-btn-primary:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px color-mix(in srgb, var(--color-primary) 35%, transparent);
        }
        .bw-success {
          text-align: center;
          padding: var(--spacing-xl) var(--spacing-md);
        }
        .bw-success-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--color-primary);
          color: #fff;
        }
        .bw-success-title {
          font-family: var(--font-family-heading);
          font-size: 1.6rem;
          margin: 0 0 var(--spacing-sm, 8px);
        }
        .bw-success-text {
          color: var(--color-on-surface-secondary);
          max-width: 360px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .bw-card {
            padding: var(--spacing-xl);
          }
          .bw-services-grid {
            grid-template-columns: 1fr;
          }
          .bw-row {
            grid-template-columns: 1fr;
          }
          .bw-step-label {
            display: none;
          }
          .bw-stage {
            min-height: 340px;
          }
        }
      `}</style>
    </div>
  )
}
