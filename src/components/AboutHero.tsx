import { ChevronRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function AboutHero() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--brand-primary)] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-steel-bg.jpg')] bg-cover bg-center grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-blue-200/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-[var(--brand-accent)] transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-white">Giới thiệu</span>
          </nav>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
            Về chúng tôi <br />
            <span className="text-[var(--brand-accent)] italic">TTB CORP</span>
          </h1>
          
          <p className="max-w-2xl text-blue-100/70 text-sm md:text-lg font-medium leading-relaxed">
            Hơn một thập kỷ kiến tạo những giá trị vững chắc, chúng tôi tự hào là đối tác tin cậy trong lĩnh vực kết cấu thép và hạ tầng công nghiệp tại Việt Nam.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
