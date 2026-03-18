import { createFileRoute } from '@tanstack/react-router'
import Projects from '../components/Projects'

export const Route = createFileRoute('/projects')({
  component: () => (
    <div className="py-12">
       <Projects />
    </div>
  ),
})