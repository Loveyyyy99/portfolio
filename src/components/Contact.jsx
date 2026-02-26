/* ─────────────────────────────────────────────────────────────
   Contact  —  email link + minimal contact form
───────────────────────────────────────────────────────────── */
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  /* In a real app you'd POST to an API / Resend / Formspree etc. */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="section-tint py-20 sm:py-28"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="max-w-xl">
          {/* Section label */}
          <span className="reveal section-label">Get in touch</span>

          {/* Heading */}
          <h2 className="reveal section-heading mb-4">
            Let's work together.
          </h2>

          {/* Intro copy */}
          <p className="reveal text-stone-500 leading-relaxed mb-10">
            Have a project in mind, or just want to say hi? My inbox is always open.
            I typically respond within 24 hours.
          </p>

          {/* Email CTA card */}
          <a
            href="mailto:lovepreetbhatia178@gmail.com"
            className="reveal btn-hover flex items-center gap-4
                       bg-white border border-stone-200 rounded-2xl
                       px-6 py-4 shadow-soft mb-8 max-w-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-lavender-100
                            flex items-center justify-center flex-shrink-0">
              <MailIcon className="w-4 h-4 text-lavender-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-stone-400 mb-0.5">Email me at</p>
              <p className="text-sm font-medium text-stone-700 truncate">
                lovepreetbhatia178@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub link */}
          <a
            href="https://github.com/Loveyyyy99"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal btn-hover flex items-center gap-4
                       bg-white border border-stone-200 rounded-2xl
                       px-6 py-4 shadow-soft mb-10 max-w-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-stone-100
                            flex items-center justify-center flex-shrink-0">
              <GitHubIcon className="w-4 h-4 text-stone-600" />
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-0.5">Find me on</p>
              <p className="text-sm font-medium text-stone-700">github.com/Loveyyyy99</p>
            </div>
          </a>

          {/* ── Contact form ── */}
          {sent ? (
            <div className="reveal bg-mint rounded-2xl px-7 py-8 text-center shadow-soft">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-serif text-lg text-stone-700 mb-1">Message sent!</p>
              <p className="text-sm text-stone-500">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal bg-white rounded-2xl p-7 shadow-soft border border-stone-100 space-y-4"
              noValidate
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-stone-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="input-ring w-full bg-stone-50 border border-stone-200
                               rounded-xl px-4 py-3 text-sm text-stone-700
                               placeholder-stone-300 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-stone-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="input-ring w-full bg-stone-50 border border-stone-200
                               rounded-xl px-4 py-3 text-sm text-stone-700
                               placeholder-stone-300 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-stone-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="input-ring w-full bg-stone-50 border border-stone-200
                             rounded-xl px-4 py-3 text-sm text-stone-700
                             placeholder-stone-300 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-hover w-full bg-stone-800 text-white
                           text-sm font-semibold py-3.5 rounded-xl shadow-sm"
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Inline SVG icons ──────────────────────────────────────── */
function MailIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function GitHubIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
