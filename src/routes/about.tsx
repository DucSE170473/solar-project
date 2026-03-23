import { createFileRoute } from '@tanstack/react-router'
import SolarPageHeader from '../components/PageHeader' // Component PageHeader đã chuyển đổi
import SolarAboutDetail from '../components/About'     // Component About đã chuyển đổi
import SolarTimeline from '../components/Timeline'      // Component Timeline đã chuyển đổi
import { ShieldCheck, Zap, Leaf } from "lucide-react"

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Trang: Chuyển từ Hero sang PageHeader chuyên sâu */}
      <SolarPageHeader 
        title="Công nghệ xanh"
        subtitle="Tiên phong giải pháp Pin mặt trời bán dẫn siêu nhẹ - dẫn đầu kỷ nguyên năng lượng tái tạo 2025."
        breadcrumb="Giới thiệu"
        bgImage="/assets/about-solar-bg.jpg" // Nên dùng ảnh nhà xưởng lắp pin dẻo
      />

      {/* 2. Phần Nội dung chi tiết - Hiệu ứng Floating Layer */}
      <div className="-mt-20 md:-mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Card giới thiệu nhanh (Quick Specs) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Zap size={24} />, label: "Hiệu suất", val: "200W/225W", sub: "Mã ZP-DB7A" },
              { icon: <Leaf size={24} />, label: "Trọng lượng", val: "8.1 KG", sub: "Siêu nhẹ & Dẻo" },
              { icon: <ShieldCheck size={24} />, label: "Bảo hành", val: "25 Năm", sub: "Tiêu chuẩn quốc tế" },
            ].map((item, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-emerald-100 flex items-center gap-5 group hover:bg-emerald-600 transition-all duration-500">
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-white group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-100">{item.label}</p>
                  <p className="text-xl font-black text-emerald-950 group-hover:text-white leading-tight">{item.val}</p>
                  <p className="text-[10px] font-bold text-zinc-500 group-hover:text-emerald-200">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Component About chính (Đã được bạn chuyển đổi) */}
          <SolarAboutDetail />
        </div>
      </div>

      {/* 3. Lịch sử & Tầm nhìn */}
      <div className="bg-zinc-50 py-12 md:py-20">
         <SolarTimeline />
      </div>

      {/* 4. Khối cam kết (Brand Trust) */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-zinc-900 uppercase">
              Chúng tôi không chỉ bán tấm pin, <br />
              <span className="text-emerald-500">chúng tôi cung cấp giải pháp.</span>
            </h2>
            <p className="text-zinc-500 font-medium leading-relaxed italic">
              "Bằng việc ứng dụng công nghệ dán trực tiếp không xuyên thấu mái tôn, Thành Công TTCo Group cam kết bảo vệ toàn diện kết cấu nhà xưởng của bạn trong suốt quá trình vận hành năng lượng."
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}