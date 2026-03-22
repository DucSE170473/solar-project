import { ChevronRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb: string
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--brand-primary)] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-steel-bg.jpg')] bg-cover bg-center grayscale"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-blue-200/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-[var(--brand-accent)] transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-white">{breadcrumb}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
            {title}
          </h1>
          
          {subtitle && (
            <p className="max-w-2xl text-blue-100/70 text-sm md:text-lg font-medium leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
