import { ChevronRight, Sun } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface SolarPageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb: string
  bgImage?: string
}

export default function SolarPageHeader({ 
  title, 
  subtitle, 
  breadcrumb, 
  bgImage = "public/bgr-1.jpg" 
}: SolarPageHeaderProps) {
  return (
    <section className="relative py-24 md:py-44 bg-emerald-950 overflow-hidden">
      {/* 1. Lớp Nền (Background Layer) */}
      <div className="absolute inset-0">
        {/* Ảnh nền với hiệu ứng Zoom chậm tạo cảm giác sống động */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{ backgroundImage: `url('${bgImage}')` }}
          aria-hidden="true"
        />
        
        {/* Lớp phủ Gradient Emerald Deep - Đặc trưng của Zonpro */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/20"></div>
        
        {/* Hiệu ứng hạt năng lượng (SVG Overlay) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* 2. Nội dung (Content Layer) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Breadcrumbs - Phong cách Clean Tech */}
          <nav className="flex items-center gap-3 text-emerald-100/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            <Link to="/" className="hover:text-emerald-400 transition-colors duration-300">
              Trang chủ
            </Link>
            <ChevronRight size={14} className="opacity-30" />
            <span className="text-white border-b border-emerald-500/50 pb-1">{breadcrumb}</span>
          </nav>

          {/* Tiêu đề chính - Cực đại và Hiện đại */}
          <div className="relative group">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter drop-shadow-2xl">
              {title}
            </h1>
            
            {/* Thanh trang trí công nghệ: Kết hợp Emerald và Amber (Mặt trời) */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-12 h-1.5 bg-emerald-500 rounded-full"></div>
              <div className="w-4 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-12 h-1.5 bg-emerald-500 rounded-full"></div>
            </div>
            
            {/* Icon Sun bay lơ lửng trang trí */}
            <Sun className="absolute -top-8 -right-8 text-emerald-400/20 w-16 h-16 md:w-24 md:h-24 animate-spin-slow" />
          </div>

          {subtitle && (
            <p className="max-w-3xl text-emerald-50/80 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-md italic">
              "{subtitle}"
            </p>
          )}
        </div>
      </div>

      {/* 3. Chuyển vùng đáy - Fade mượt mà vào nội dung trắng của trang con */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
      
      {/* Decorative Text chạy chìm bên dưới */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[12rem] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter whitespace-nowrap uppercase">
        TTCO Technology
      </div>
    </section>
  )
}