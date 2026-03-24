import { createFileRoute } from '@tanstack/react-router'
import SolarHero from '../components/Hero'
import SolarAbout from '../components/About'
import SolarServices from '../components/Services'
import { SolarProjects } from '../components/Projects'
import SolarCTA from '../components/CTA'
import { Zap, ShieldCheck, Leaf, Star, CheckCircle2, Award } from "lucide-react"

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white font-sans antialiased">
      {/* 1. HERO SECTION - Cấu trúc 2025: Năng lượng sạch dẫn đầu */}
      <div className="rise-in">
        <SolarHero />
      </div>

      {/* 2. ENERGY TRUST BAR: Tập trung vào hiệu năng và công nghệ */}
      <section className="bg-emerald-950 py-10 md:py-20 text-white relative overflow-hidden">
        {/* Hiệu ứng hạt năng lượng chìm */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Trọng lượng pin", value: "8.1kg", sub: "Siêu nhẹ đột phá", icon: <Leaf size={20}/> },
              { label: "Thời gian bảo hành", value: "25 Năm", sub: "Cam kết hiệu suất", icon: <ShieldCheck size={20}/> },
              { label: "Tiêu chuẩn quốc tế", value: "IEC CE", sub: "Chất lượng toàn cầu", icon: <Award size={20}/> },
              { label: "Tư vấn kỹ thuật", value: "24/7", sub: "Đội ngũ TTCO", icon: <Zap size={20}/> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <p className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">{item.value}</p>
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-500/80">{item.label}</p>
                  <p className="text-[8px] md:text-[9px] font-bold text-emerald-100/30 uppercase tracking-widest">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - Chuyển đổi sang giải pháp xanh */}
      <div className="rise-in" style={{ animationDelay: '400ms' }}>
        <SolarAbout />
      </div>

      {/* 4. SERVICES - Hệ sinh thái lắp đặt & cung ứng */}
      <div className="bg-zinc-50 border-y border-zinc-100 rise-in" style={{ animationDelay: '500ms' }}>
        <SolarServices />
      </div>

      {/* 5. WHY ZONPRO: Lợi thế từ Pin Bán Dẫn Siêu Nhẹ */}
      <section className="py-20 md:py-32 bg-white rise-in" style={{ animationDelay: '600ms' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full -z-10 animate-pulse"></div>
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-b-[12px] border-emerald-600 transition-all duration-1000 group-hover:-translate-y-4">
              <img
                src="nen-1.jpg" 
                alt="Zonpro Solar Technology"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-square group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-4xl font-black italic">8.1KG</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Trọng lượng cực thấp</p>
              </div>
            </div>
          </div>

          <div className="space-y-10 md:space-y-14">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-emerald-500"></div>
                <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px]">Lợi thế cạnh tranh</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-zinc-900 leading-[0.9] uppercase tracking-tighter">
                Sự khác biệt từ <span className="text-emerald-600 italic">Công nghệ dán</span>
              </h2>
            </div>

            <div className="space-y-8 md:space-y-10">
              {[
                { t: "Không xuyên thấu mái", d: "Công nghệ dán trực tiếp giúp bảo vệ mái tôn nhà xưởng, triệt tiêu hoàn toàn rủi ro dột nước." },
                { t: "Không cần giá đỡ", d: "Loại bỏ hệ thống khung nhôm nặng nề, giảm 70% tải trọng lên kết cấu mái so với pin truyền thống." },
                { t: "Tái sử dụng linh hoạt", d: "Thiết kế thông minh cho phép tháo dỡ và tái lắp đặt dễ dàng khi cần cải tạo nhà xưởng." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="mt-1 shrink-0 bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-zinc-900 text-lg md:text-xl uppercase tracking-tight">{item.t}</h4>
                    <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS - Showcase các công trình năng lượng sạch */}
      <div className="border-t border-zinc-100 bg-zinc-50/50 rise-in" style={{ animationDelay: '700ms' }}>
        <SolarProjects />
      </div>

      {/* 7. TESTIMONIALS - Giữ lại uy tín từ các đối tác lớn như Viettel */}
      <section className="py-20 md:py-32 bg-emerald-950 text-white relative overflow-hidden rise-in" style={{ animationDelay: '800ms' }}>
        <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-12 text-amber-400">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={28} className="drop-shadow-lg" />)}
          </div>
          <p className="text-2xl md:text-4xl font-black italic text-emerald-50 leading-tight tracking-tight drop-shadow-md">
            "Chúng tôi đánh giá cao giải pháp pin dẻo của Thành Công TTCo Group. Sản phẩm giải quyết được bài toán tải trọng cho các mái xưởng cũ của Viettel một cách hoàn hảo."
          </p>
          <div className="mt-12 md:mt-16 flex flex-col items-center">
            <div className="w-16 h-1.5 bg-emerald-500 mb-8 rounded-full shadow-lg"></div>
            <p className="font-black text-white uppercase tracking-[0.3em] text-xl">Chị Linh</p>
            <p className="text-[10px] md:text-xs font-bold text-emerald-400/50 uppercase tracking-[0.4em] mt-3">Giám đốc dự án - Viettel Group</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA - Kêu gọi hành động vì tương lai xanh */}
      <div className="rise-in" style={{ animationDelay: '900ms' }}>
        <SolarCTA />
      </div>
    </main>
  )
}