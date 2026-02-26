/* ─────────────────────────────────────────────────────────────
   About  —  bio paragraph + rotating pastel skill badges
───────────────────────────────────────────────────────────── */
import { useReveal } from '../hooks/useReveal'

/* Skills data */
const SKILLS = [
  { label: 'React',       color: 'bg-rose'          },
  { label: 'Next.js',     color: 'bg-peach'          },
  { label: 'TypeScript',  color: 'bg-sky'            },
  { label: 'Node.js',     color: 'bg-mint'           },
  { label: 'PostgreSQL',  color: 'bg-lavender-100'   },
  { label: 'Tailwind CSS',color: 'bg-stone-100'      },
  { label: 'Figma',       color: 'bg-rose'           },
  { label: 'GraphQL',     color: 'bg-peach'          },
  { label: 'Docker',      color: 'bg-sky'            },
  { label: 'Prisma',      color: 'bg-mint'           },
  { label: 'Vercel',      color: 'bg-lavender-100'   },
  { label: 'REST APIs',   color: 'bg-stone-100'      },
]

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      className="section-tint py-20 sm:py-28"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-12 items-start">

          {/* ── Left column: bio ── */}
          <div>
            <span className="reveal section-label">About me</span>

            <h2 className="reveal section-heading mb-6">
              Thoughtful code,{' '}
              <em className="not-italic text-lavender-500">human-first</em> design.
            </h2>

            <p className="reveal text-stone-500 leading-relaxed text-base mb-4">
              I'm a Computer Engineering student passionate about building clean and
              functional web applications. I enjoy working with React and modern
              backend tools to create practical solutions — from mashup generators
              to AI-based note systems.
            </p>

            <p className="reveal text-stone-500 leading-relaxed text-base">
              Currently focused on strengthening full-stack development and building
              real-world projects that solve real problems.
            </p>

            {/* Decorative detail line */}
            <div className="reveal mt-8 flex items-center gap-3 text-sm text-stone-400">
              <span className="w-6 h-px bg-stone-300 inline-block" />
              Computer Engineering · Class of 2027
            </div>
          </div>

          {/* ── Right column: skills ── */}
          <div>
            <span className="reveal section-label">Skills &amp; tools</span>

            <div className="reveal flex flex-wrap gap-2">
              {SKILLS.map(({ label, color }) => (
                <span
                  key={label}
                  className={`badge ${color} hover:scale-105 transition-transform cursor-default`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
