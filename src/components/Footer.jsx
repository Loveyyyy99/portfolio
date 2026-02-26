/* ─────────────────────────────────────────────────────────────
   Footer  —  minimal single-row footer
───────────────────────────────────────────────────────────── */

const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/Loveyyyy99',
  },
  {
    label: 'Email',
    href:  'mailto:lovepreetbhatia178@gmail.com',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-50 border-t border-stone-100 py-10">
      <div
        className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row
                   items-center justify-between gap-4 text-sm text-stone-400"
      >
        {/* Wordmark */}
        <span className="font-serif text-base text-stone-600 font-medium">
          lb.
        </span>

        {/* Copyright */}
        <span>
          Designed &amp; built by Lovepreet Bhatia — {year}
        </span>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:text-lavender-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
