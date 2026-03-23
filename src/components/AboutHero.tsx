import { ChevronRight, Sun, Leaf } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function SolarAboutHero() {
  // Gợi ý: Sử dụng ảnh một cánh đồng pin mặt trời hoặc ảnh cận cảnh bề mặt pin bán dẫn dẻo
  const backgroundImage = "public/solar-2.jpg" 

  return (
    <section className="relative py-24 md:py-48 bg-emerald-950 overflow-hidden">
      {/* 1. Lớp Nền (Background Layer) */}
      <div className="absolute inset-0">
        {/* Ảnh nền với hiệu ứng Zoom nhẹ */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 motion-safe:animate-[pulse_10s_infinite]"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
          aria-hidden="true"
        />

        {/* Lớp phủ màu (Overlay) - Chuyển từ Xanh dương/Đen sang Xanh lá đậm/Xanh dương sâu (Deep Teal) */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/40"></div>
        
        {/* Hiệu ứng hạt sáng (Light particles) giả lập năng lượng mặt trời */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent"></div>
      </div>

      {/* 2. Nội dung (Content Layer) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Breadcrumbs - Tinh chỉnh màu sắc cho phù hợp tone Xanh */}
          <nav className="flex items-center gap-2 text-emerald-100/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            <Link
              to="/"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Trang chủ
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white border-b border-emerald-500/50 pb-0.5">Về chúng tôi</span>
          </nav>

          {/* Tiêu đề chính - Nhấn mạnh thông điệp "Dẫn nguồn sáng xanh" */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter">
              Dẫn nguồn <br />
              <span className="text-emerald-400 italic font-extrabold flex items-center justify-center gap-4">
                Sáng xanh
                <Sun size={48} className="text-amber-400 animate-spin-slow hidden md:block" />
              </span>
            </h1>

            {/* Thanh gạch chân công nghệ - Thay vì gạch đặc, dùng gạch kép hiện đại */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
              <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          {/* Đoạn giới thiệu ngắn - Tận dụng thông tin từ Profile TTCO */}
          <div className="max-w-3xl space-y-4">
            <p className="text-emerald-50/90 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-md">
               Thành Công <span className="text-emerald-400 font-black">TTCO Technology</span> – Đơn vị tiên phong cung cấp giải pháp Pin mặt trời bán dẫn siêu nhẹ và siêu dẻo tại Việt Nam.
            </p>
            <p className="text-emerald-100/60 text-sm md:text-base uppercase tracking-widest font-bold flex items-center justify-center gap-2">
              <Leaf size={16} className="text-emerald-400" />
              Pin mặt trời ở mọi nơi
            </p>
          </div>
        </div>
      </div>

      {/* 3. Hiệu ứng chuyển vùng đáy - Làm mờ vào phần nội dung trắng bên dưới */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      
      {/* Decorative Brand Text chạy chìm */}
      <div className="absolute -bottom-10 left-10 text-[10rem] font-black text-white/[0.03] pointer-events-none select-none hidden lg:block uppercase tracking-tighter">
        Zonprosolar
      </div>
    </section>
  )
}