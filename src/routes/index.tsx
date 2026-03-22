import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { Projects } from '../components/Projects'
import CTA from '../components/CTA'
import { CheckCircle2, Star } from "lucide-react"

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION: Ấn tượng đầu tiên mạnh mẽ */}
      <Hero />

      {/* 2. TRUST BAR: Các con số biết nói */}
      <section className="bg-[var(--brand-primary)] py-8 md:py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-around gap-6 md:gap-8 text-center">
          <div className="space-y-1 text-[var(--brand-accent)]">
            <p className="text-2xl md:text-3xl font-black">100%</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">An toàn lao động</p>
          </div>
          <div className="space-y-1 text-[var(--brand-accent)]">
            <p className="text-2xl md:text-3xl font-black">98%</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">Đúng tiến độ</p>
          </div>
          <div className="space-y-1 text-[var(--brand-accent)]">
            <p className="text-2xl md:text-3xl font-black">ISO 9001</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">Chất lượng</p>
          </div>
          <div className="space-y-1 text-[var(--brand-accent)]">
            <p className="text-2xl md:text-3xl font-black">24/7</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">Hỗ trợ</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <About />

      {/* 4. SERVICES */}
      <div className="bg-slate-50">
        <Services />
      </div>

      {/* 5. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-[var(--brand-primary)]/10 rounded-full -z-10 animate-pulse"></div>
            <img
              src="/steel-6.jpg"
              alt="Quality Construction"
              className="rounded-3xl shadow-2xl border-b-8 border-[var(--brand-primary)] w-full"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
              Sự khác biệt từ <br /><span className="text-[var(--brand-primary)]">Thành Công Group</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "Kỹ thuật tối ưu", d: "Sử dụng phần mềm tiên tiến nhất để bóc tách khối lượng, tiết kiệm 15% vật tư." },
                { t: "Nhà xưởng hiện đại", d: "Dây chuyền sản xuất tự động đảm bảo độ chính xác tuyệt đối từng chi tiết thép." },
                { t: "Pháp lý hoàn thiện", d: "Hỗ trợ trọn gói thủ tục thẩm duyệt PCCC và cấp phép xây dựng." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 bg-[var(--brand-primary)]/5 p-2 rounded-lg group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.t}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <div className="border-t border-slate-100">
        <Projects />
      </div>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-primary)]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-10 text-[var(--brand-accent)]">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-xl md:text-3xl font-medium italic text-slate-700 leading-relaxed tracking-tight">
            "Chúng tôi hoàn toàn yên tâm khi bàn giao gói thầu kết cấu thép cho Thành Công Group. Tiến độ nhanh, kỹ thuật chuẩn và thái độ làm việc rất chuyên nghiệp."
          </p>
          <div className="mt-10 md:mt-12 flex flex-col items-center">
            <div className="w-12 h-1 bg-[var(--brand-primary)] mb-6"></div>
            <p className="font-black text-[var(--brand-primary)] uppercase tracking-widest text-lg">Chị Linh</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Giám đốc dự án - Viettel</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA: Chốt hạ hành động */}
      <CTA />
    </main>
  )
}