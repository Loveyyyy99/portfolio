/* ─────────────────────────────────────────────────────────────
   App.jsx  —  root component; assembles all sections
───────────────────────────────────────────────────────────── */
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
