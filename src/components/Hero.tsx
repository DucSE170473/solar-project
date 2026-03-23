import { Download, Sun, MoveRight, Globe2 } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function SolarHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-slate-50 overflow-hidden pt-20 md:pt-0">
      
      {/* Lớp nền High-Tech: Thay đổi sang dạng lưới hoặc ảnh mảng xanh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent"></div>
        <img
          src="public/solar-5.png" // Ảnh pattern dạng tế bào quang điện hoặc lưới điện xanh
          alt="Zonprosolar Tech Foundation"
          className="w-full h-full object-cover opacity-[0.5] mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Khối nội dung bên trái */}
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Label động: Nhấn mạnh Công nghệ bán dẫn */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Công nghệ pin mặt trời bán dẫn
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.1] md:leading-[0.95] tracking-tight">
            <span className="block text-base md:text-2xl font-medium tracking-[0.15em] text-slate-500 mb-2 uppercase">
              Dẫn nguồn sáng xanh
            </span>
            <span className="relative inline-block text-slate-900">
              Pin Mặt Trời
              <br />
              <span className="text-emerald-500 italic">Ở Mọi Nơi</span>
              {/* Trang trí hiệu ứng ánh sáng */}
              <span className="absolute -top-4 -right-8 text-amber-400 opacity-50 hidden md:block">
                <Sun size={48} strokeWidth={1} />
              </span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed border-l-0 lg:border-l-4 border-emerald-500/30 pl-0 lg:pl-6 mx-auto lg:mx-0">
            <span className="text-emerald-600 font-bold uppercase tracking-wider">ZONPROSOLAR (TTCO)</span>
            <br />
            Giải pháp tấm pin <span className="font-bold text-slate-800">siêu nhẹ (8.1kg)</span> và <span className="font-bold text-slate-800">siêu dẻo</span>. 
            Không cần khung đỡ, lắp đặt trên mọi bề mặt cong và mái tôn yếu.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-4">
            <Link
              to="/projects"
              className="bg-emerald-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 hover:-translate-y-1 active:scale-95 uppercase text-xs md:text-sm"
            >
              Khám phá dự án
              <MoveRight size={18} />
            </Link>

            <a
              href="/2-12_ZONPROSOLAR CORPORATE BROCHURE(A.2)2025.7.28.pdf"
              target="_blank"
              className="bg-white border-2 border-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center gap-3 group uppercase text-xs md:text-sm"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Catalogue (PDF)
            </a>
          </div>
        </div>

        {/* Khối ảnh bên phải - Hiển thị độ dẻo của pin */}
        <div className="order-1 lg:order-2 relative px-4 md:px-0">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[8px] border-white group">
            <img
              src="public/solar-7.jpg" // Nên dùng ảnh pin đang uốn cong hoặc dán trên mái tôn
              alt="Zonprosolar Flexible Panel"
              className="w-full object-cover aspect-[4/3] md:aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Lớp phủ gradient nhẹ lên ảnh */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>

          {/* Badge Thông số nổi bật - Thay vì ISO, hãy dùng trọng lượng hoặc độ dẻo */}
          <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 z-20 bg-emerald-600 p-5 md:p-8 rounded-[2rem] shadow-2xl text-white animate-float">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-widest opacity-80 mb-1 text-emerald-100">Trọng lượng</p>
              <p className="text-3xl md:text-5xl font-black italic">8.1<span className="text-lg">kg</span></p>
              <div className="h-1 w-full bg-white/20 my-2 rounded-full overflow-hidden">
                 <div className="h-full bg-white w-2/3"></div>
              </div>
              <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-tighter">Siêu nhẹ - Siêu bền</p>
            </div>
          </div>

          {/* Tech Orbs - Đổi màu sang xanh lục */}
          <div className="absolute -top-10 -right-10 h-60 w-60 bg-emerald-200/30 rounded-full -z-10 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-blue-200/20 rounded-full -z-10 blur-[60px]"></div>
        </div>
      </div>

      {/* Text chạy chìm khổng lồ */}
      <div className="absolute bottom-[-2%] right-[-2%] text-[8rem] lg:text-[15rem] font-black text-slate-200/40 pointer-events-none select-none italic tracking-tighter hidden md:block">
        ZONPROSOLAR
      </div>
    </section>
  )
}