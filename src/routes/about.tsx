import { createFileRoute } from '@tanstack/react-router'
import AboutHero from '../components/AboutHero'
import About from '../components/About'
import Timeline from '../components/Timeline'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <div className="-mt-12 relative z-20">
        <About />
      </div>
      <Timeline />
    </main>
  )
}
