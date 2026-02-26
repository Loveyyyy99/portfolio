/* ─────────────────────────────────────────────────────────────
   Hero  —  full-viewport opening section
   Staggered fade-up on load via Tailwind animate-* + delay-*
───────────────────────────────────────────────────────────── */

// External link icon (inline SVG — no dependency)
function ArrowUpRight({ className = '' }) {
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
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      {/* Decorative blurred blob — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 w-80 h-80 rounded-full
                   bg-lavender-100 opacity-60 blur-3xl"
      />
      {/* Decorative blurred blob — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 w-72 h-72 rounded-full
                   bg-peach opacity-40 blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Status pill */}
        <div className="animate-fade-up fill-both delay-100 inline-flex items-center gap-2
                        bg-white/70 border border-stone-200 rounded-full px-4 py-1.5
                        text-xs text-stone-500 shadow-softer mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Open to internships &amp; collaborations
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up fill-both delay-200
                       font-serif text-5xl sm:text-6xl lg:text-7xl
                       font-medium leading-[1.1] tracking-tight
                       text-stone-800 mb-5 max-w-3xl">
          Hi, I'm{' '}
          <em className="not-italic text-lavender-500">Lovepreet&nbsp;Bhatia.</em>
          <br />
          I build interactive{' '}
          <span className="relative inline-block">
            web experiences.
            {/* Decorative underline squiggle */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 w-full h-1
                         bg-gradient-to-r from-lavender-300 to-peach-deep
                         rounded-full opacity-60"
            />
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="animate-fade-up fill-both delay-300
                      text-base sm:text-lg text-stone-500 font-light
                      max-w-xl leading-relaxed mb-4">
          Computer Engineering student exploring modern web development,
          AI-driven tools, and interactive dashboards.
        </p>

        {/* College pill */}
        <p className="animate-fade-up fill-both delay-400
                      text-sm text-stone-400 mb-10">
          🎓&nbsp; Thapar Institute of Engineering &amp; Technology — Class of 2027
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up fill-both delay-500 flex flex-wrap gap-3">
          <a
            href="https://github.com/Loveyyyy99"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center gap-2
                       bg-stone-800 text-white text-sm font-medium
                       px-6 py-3.5 rounded-2xl shadow-md"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="#contact"
            className="btn-hover inline-flex items-center gap-2
                       bg-white text-stone-700 text-sm font-medium
                       px-6 py-3.5 rounded-2xl shadow-soft
                       border border-stone-200"
          >
            Say hello 👋
          </a>
        </div>
      </div>
    </section>
  )
}

/* Inline GitHub SVG icon */
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
