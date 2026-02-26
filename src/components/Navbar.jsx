import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-md border-b border-stone-100 shadow-softer'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / wordmark */}
        <a
          href="#"
          className="font-serif text-lg font-medium text-stone-800 tracking-tight hover:text-lavender-600 transition-colors"
        >
          lb.
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-underline text-sm text-stone-500 hover:text-lavender-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA — desktop */}
        <a
          href="mailto:lovepreetbhatia178@gmail.com"
          className="hidden sm:inline-flex btn-hover items-center gap-2 bg-lavender-100 text-lavender-700 text-xs font-semibold px-4 py-2.5 rounded-full shadow-softer"
        >
          Hire me ✦
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          className="sm:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 py-5 flex flex-col gap-4 animate-fade-in fill-both">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="text-stone-600 text-base font-medium hover:text-lavender-600 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:lovepreetbhatia178@gmail.com"
            onClick={closeMobile}
            className="inline-flex w-fit btn-hover items-center bg-lavender-100 text-lavender-700 text-sm font-semibold px-5 py-2.5 rounded-full mt-1"
          >
            Hire me ✦
          </a>
        </div>
      )}
    </header>
  )
}
