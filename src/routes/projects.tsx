import { createFileRoute } from '@tanstack/react-router'
import { Projects } from '../components/Projects'
import PageHeader from '../components/PageHeader'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader 
        title="Dự Án Tiêu Biểu" 
        subtitle="Khám phá những công trình kết cấu thép hiện đại và quy mô được thực hiện bởi TTB CORP trên khắp cả nước."
        breadcrumb="Dự án"
      />
      <div className="-mt-16 relative z-20">
        <Projects />
      </div>
    </main>
  )
}