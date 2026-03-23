import { ArrowRight, Phone, Sun, Zap } from "lucide-react"
import { useState } from "react"
import { Link } from "@tanstack/react-router"

export default function SolarCTA() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-12 md:py-24 bg-white transition-all duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-emerald-950 shadow-[0_40px_100px_-20px_rgba(16,185,129,0.25)] group transition-all duration-700">

          {/* Lớp ảnh nền thực tế & Xử lý lỗi ảnh */}
          <div className="absolute inset-0 z-0">
            {!imgError ? (
              <img
                src="public/solar-4.jpg" // Nên dùng ảnh một mái nhà xưởng phủ kín pin dẻo Zonpro
                alt="Zonprosolar Green Project"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 group-hover:scale-110 transition-transform duration-[3000ms]"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 opacity-60" />
            )}
            
            {/* Lớp phủ Gradient chuẩn Tech-Green */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-emerald-950 via-emerald-900/90 md:via-emerald-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">

            {/* Khối Tiêu đề & Nội dung */}
            <div className="max-w-3xl text-center lg:text-left space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-md mx-auto lg:mx-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
                  Khảo sát kỹ thuật miễn phí
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] text-white uppercase tracking-tighter">
                <span className="block text-xl md:text-3xl font-light tracking-[0.2em] text-emerald-200/60 mb-3">
                  Sẵn sàng chuyển đổi
                </span>
                Năng lượng xanh <br className="hidden md:block" />
                <span className="text-emerald-400 italic">Cho mọi công trình</span>
              </h2>

              <p className="text-emerald-50/80 text-base md:text-xl font-medium max-w-xl leading-relaxed border-l-4 border-emerald-500 pl-6 mx-auto lg:mx-0 text-left">
                "Zonprosolar cam kết giải pháp pin bán dẫn siêu nhẹ, bảo vệ kết cấu mái và tối ưu hóa hiệu suất đầu tư bền vững."
              </p>
            </div>

            {/* Khối Nút hành động */}
            <div className="flex flex-col w-full sm:w-auto gap-5 shrink-0 relative z-20">
              {/* Nút Gọi ngay - Ưu tiên Hotline 0792.51.51.51 */}
              <a
                href="tel:0792515151"
                className="group/btn bg-white text-emerald-900 px-10 py-6 md:py-7 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:bg-emerald-400 hover:text-white transition-all duration-500 shadow-2xl hover:-translate-y-2 uppercase text-sm md:text-base tracking-widest"
              >
                <div className="bg-emerald-600 group-hover/btn:bg-white p-2.5 rounded-full transition-colors animate-bounce-slow">
                  <Phone size={20} className="text-white group-hover/btn:text-emerald-600 transition-colors" />
                </div>
                0792.51.51.51
              </a>

              {/* Nút Yêu cầu báo giá */}
              <Link
                to="/contact"
                className="group/btn2 bg-emerald-500/10 text-white border-2 border-emerald-400/30 px-10 py-6 md:py-7 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500 uppercase text-sm md:text-base tracking-widest overflow-hidden relative backdrop-blur-sm"
              >
                <span className="relative z-10">Báo giá giải pháp</span>
                <Zap size={20} className="relative z-10 group-hover/btn2:animate-pulse text-emerald-400 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Họa tiết Sunburst chạy chìm */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none select-none"></div>
          <div className="absolute bottom-[-5%] left-[-2%] text-[8rem] md:text-[15rem] font-black text-white/[0.03] pointer-events-none select-none italic tracking-tighter leading-none hidden md:block uppercase">
            TTCO Tech
          </div>
        </div>
      </div>
    </section>
  )
}