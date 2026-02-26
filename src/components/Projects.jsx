/* ─────────────────────────────────────────────────────────────
   Projects  —  3-card grid with hover lift
───────────────────────────────────────────────────────────── */
import { useReveal } from '../hooks/useReveal'

/* Project data */
const PROJECTS = [
  {
    id:          1,
    emoji:       '🎵',
    title:       'Mashup Generator',
    description: 'A web application that generates music mashups by combining multiple audio tracks. Enables users to blend songs, adjust timings, and export seamless mixes.',
    stack:       ['React', 'Node.js', 'Web Audio API', 'Express'],
    accentBg:    'bg-rose',
    borderTop:   'border-t-[3px] border-[#f5c6c6]',
    github:      'https://github.com/Loveyyyy99',
  },
  {
    id:          2,
    emoji:       '📊',
    title:       'TOPSIS Decision System',
    description: 'An implementation of the TOPSIS multi-criteria decision-making algorithm to rank alternatives based on weighted criteria with an interactive results dashboard.',
    stack:       ['Python', 'React', 'REST API', 'Recharts'],
    accentBg:    'bg-sky',
    borderTop:   'border-t-[3px] border-[#b8d4ee]',
    github:      'https://github.com/Loveyyyy99',
  },
  {
    id:          3,
    emoji:       '🤖',
    title:       'Auto Notes Generator',
    description: 'An AI-powered tool that converts structured input — lecture slides, raw text, or PDFs — into clean, organized academic notes with summaries and key points.',
    stack:       ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL'],
    accentBg:    'bg-lavender-100',
    borderTop:   'border-t-[3px] border-[#c0b0e8]',
    github:      'https://github.com/Loveyyyy99',
  },
]

/* Arrow icon */
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

/* Single project card */
function ProjectCard({ project, delayClass }) {
  const { emoji, title, description, stack, accentBg, borderTop, github } = project

  return (
    <article
      className={`reveal ${delayClass} card ${borderTop} flex flex-col`}
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-11 h-11 rounded-xl ${accentBg}
                      flex items-center justify-center text-xl`}
          aria-hidden="true"
        >
          {emoji}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="text-stone-300 hover:text-stone-600 transition-colors p-1"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-medium text-stone-800 mb-2 leading-snug">
        {title}
      </h3>

      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Tech stack chips */}
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="bg-stone-100 text-stone-500 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()

  const delays = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-stone-50"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-12">
          <span className="reveal section-label">Selected work</span>
          <h2 className="reveal section-heading">
            Things I've built.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delayClass={delays[i] || ''}
            />
          ))}
        </div>

        {/* GitHub prompt */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/Loveyyyy99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-400 hover:text-lavender-600
                       transition-colors underline underline-offset-4"
          >
            See more on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}
