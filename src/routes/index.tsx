import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { Projects } from '../components/Projects'
import CTA from '../components/CTA'
import { CheckCircle2, Star } from "lucide-react"

export const Route = createFileRoute('/')(  {
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION: Ấn tượng đầu tiên mạnh mẽ */}
      <Hero />

      {/* 2. TRUST BAR: Các con số biết nói */}
      <section className="bg-blue-900 py-8 md:py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-around gap-6 md:gap-8 text-center">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-black text-amber-400">100%</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">An toàn lao động</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-black text-amber-400">98%</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">Đúng tiến độ</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-black text-amber-400">ISO 9001</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">Tiêu chuẩn chất lượng</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-black text-amber-400">24/7</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">Hỗ trợ kỹ thuật</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION: Giới thiệu năng lực */}
      <About />

      {/* 4. SERVICES: Tập trung vào Kết cấu thép */}
      <div className="bg-slate-50">
        <Services />
      </div>

      {/* 5. WHY CHOOSE US: Tại sao khách hàng chọn TTB */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000"
              alt="Quality Construction"
              className="rounded-3xl shadow-2xl border-b-8 border-blue-900 w-full"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              SỰ KHÁC BIỆT TỪ <br /><span className="text-blue-800 tracking-tighter">THÀNH CÔNG GROUP</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "Kỹ thuật tối ưu", d: "Sử dụng phần mềm tiên tiến nhất để bóc tách khối lượng, tiết kiệm 15% vật tư." },
                { t: "Nhà xưởng hiện đại", d: "Dây chuyền sản xuất tự động đảm bảo độ chính xác tuyệt đối từng chi tiết thép." },
                { t: "Pháp lý hoàn thiện", d: "Hỗ trợ trọn gói thủ tục thẩm duyệt PCCC và cấp phép xây dựng." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0"><CheckCircle2 className="text-blue-600" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.t}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS: Minh chứng thực tế */}
      <div className="border-t border-slate-100">
        <Projects />
      </div>

      {/* 7. TESTIMONIALS: Ý kiến khách hàng */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center gap-1 mb-6 text-amber-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="text-lg md:text-2xl font-medium italic text-slate-700 leading-relaxed">
            "Chúng tôi hoàn toàn yên tâm khi bàn giao gói thầu kết cấu thép cho Thành Công Group. Tiến độ nhanh, kỹ thuật chuẩn và thái độ làm việc rất chuyên nghiệp."
          </p>
          <div className="mt-6 md:mt-8">
            <p className="font-black text-blue-900 uppercase">Chị Linh</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Giám đốc dự án - Viettel</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA: Chốt hạ hành động */}
      <CTA />
    </main>
  )
}