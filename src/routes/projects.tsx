import { createFileRoute } from '@tanstack/react-router'
import { SolarProjects } from '../components/Projects' // Component Projects đã chuyển đổi
import SolarPageHeader from '../components/PageHeader' // Component PageHeader đã chuyển đổi
import { Lightbulb, LayoutGrid, CheckCircle } from "lucide-react"

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      {/* 1. Header Trang Dự Án - Sử dụng hình ảnh thực tế lắp đặt pin dẻo */}
      <SolarPageHeader
        title="Dự án thực tế"
        subtitle="Chiêm ngưỡng các giải pháp năng lượng sạch đột phá: từ mái nhà xưởng công nghiệp đến các bề mặt kiến trúc phức tạp."
        breadcrumb="Dự án"
        bgImage="prj-7.avif" 
      />

      {/* 2. Phần lọc & Thống kê nhanh (Project Stats Bar) */}
      <div className="-mt-12 md:-mt-20 relative z-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-[2.5rem] shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-100">
            
            {/* Thống kê 1 */}
            <div className="flex items-center gap-5 md:justify-center pb-6 md:pb-0">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <LayoutGrid size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">500+</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Dự án hoàn thành</p>
              </div>
            </div>

            {/* Thống kê 2 */}
            <div className="flex items-center gap-5 md:justify-center py-6 md:py-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">1.2 MW</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Tổng công suất lắp đặt</p>
              </div>
            </div>

            {/* Thống kê 3 */}
            <div className="flex items-center gap-5 md:justify-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">100%</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Hài lòng từ đối tác</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Lưới danh sách dự án chính */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-2">
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter">Công trình <span className="text-emerald-500 italic">Tiêu biểu</span></h2>
           </div>
           
           {/* Bộ lọc dự án (Filter Tabs) - Có thể mở rộng sau này */}
           <div className="flex flex-wrap gap-2">
              {['Tất cả', 'Nhà xưởng', 'Dân dụng', 'Dự án đặc biệt'].map((filter, i) => (
                <button 
                  key={i}
                  className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all
                  ${i === 0 ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 border border-zinc-100'}`}
                >
                  {filter}
                </button>
              ))}
           </div>
        </div>

        {/* Gọi component hiển thị danh sách dự án */}
        <SolarProjects />
      </div>

      {/* 4. Khối chuyển đổi (CTA) - Kêu gọi tham quan dự án mẫu */}
      <section className="bg-white py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-emerald-50 rounded-3xl mb-8">
             <img src="logo-TTC.jpg" alt="Certified" className="h-12 w-auto opacity-80" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-zinc-900 uppercase mb-6 tracking-tight">
            Bạn muốn tham quan dự án thực tế?
          </h3>
          <p className="max-w-2xl mx-auto text-zinc-500 font-medium leading-relaxed mb-10">
            Chúng tôi luôn sẵn sàng hỗ trợ quý khách hàng tham quan các công trình đã lắp đặt pin Zonpro tại các khu công nghiệp trọng điểm để trực tiếp đánh giá chất lượng và thẩm mỹ.
          </p>
          <a 
            href="tel:0792515151" 
            className="inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Đăng ký tham quan: 0792.51.51.51
          </a>
        </div>
      </section>
    </main>
  )
}