import { Zap, Sun, ShieldCheck, Rocket, ArrowUpRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

const solarServices = [
  {
    title: "Tư vấn Giải pháp",
    icon: <Sun size={32} />,
    desc: "Khảo sát và tính toán hiệu năng dựa trên công nghệ pin bán dẫn siêu nhẹ, tối ưu hóa diện tích lắp đặt cho mọi loại mái.",
    bgImg: "sv-1.avif",
    accent: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "Cung ứng Pin Bán Dẫn",
    icon: <Zap size={32} />,
    desc: "Phân phối tấm pin Zonpro ZP-DB7A (200W/225W) siêu dẻo, trọng lượng chỉ 8.1kg, không cần khung đỡ cồng kềnh.",
    bgImg: "sv-2.png",
    accent: "text-amber-500 bg-amber-50"
  },
  {
    title: "Lắp đặt Siêu Tốc",
    icon: <Rocket size={32} />,
    desc: "Quy trình dán/treo trực tiếp không xuyên thấu mái tôn, giúp thi công nhanh gấp 3 lần so với pin truyền thống.",
    bgImg: "sv-3.jpg",
    accent: "text-emerald-800 bg-emerald-50"
  },
  {
    title: "Bảo trì & Hiệu suất",
    icon: <ShieldCheck size={32} />,
    desc: "Hệ thống giám sát thông minh giúp theo dõi sản lượng điện 24/7 và dịch vụ bảo trì định kỳ cam kết hiệu suất bền bỉ.",
    bgImg: "sv-4.jpg",
    accent: "text-zinc-700 bg-zinc-100"
  },
]

export default function SolarServices() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      {/* Họa tiết trang trí nền - Line Emerald mỏng */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Tiêu đề Section */}
        <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6 relative">
          <div className="absolute inset-0 -top-6 md:-top-10 flex justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="text-7xl md:text-[12rem] font-black tracking-tighter text-emerald-900">SOLAR</span>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 relative z-10">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-emerald-500/30"></div>
              <span className="text-emerald-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px]">
                Zonprosolar Technology
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-emerald-500/30"></div>
            </div>
            <span className="text-emerald-900 font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-xl md:text-2xl">
              TTCO <span className="text-emerald-500 italic">GROUP</span>
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 leading-tight md:leading-none tracking-tight md:tracking-[-0.02em] uppercase">
            <span className="text-emerald-600">Giải pháp</span>
            <br />
            <span className="relative inline-block mt-2 md:mt-4">
              Năng lượng xanh
              <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-emerald-500 rounded-full"></span>
              <span className="absolute -bottom-4 md:-bottom-7 left-0 w-2/3 h-[1px] md:h-[2px] bg-amber-400"></span>
            </span>
            <span className="block mt-8 md:mt-12 text-xl md:text-4xl font-light tracking-[0.2em] md:tracking-[0.4em] text-zinc-400">
              Hiện đại & Bền vững
            </span>
          </h2>
        </div>

        {/* Lưới dịch vụ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solarServices.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(16,185,129,0.2)] transition-all duration-700 flex flex-col items-start overflow-hidden hover:bg-white"
            >
              {/* Lớp ảnh nền lồng chìm */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`/${item.bgImg}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-[0.4] group-hover:opacity-[0.6] saturate-0 group-hover:saturate-100"
                />
              </div>

              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 md:w-16 md:h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500`}>
                {item.icon}
              </div>

              {/* Nội dung text */}
              <div className="relative z-10 w-full">
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-emerald-950 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-6 md:mb-8 opacity-90">
                  {item.desc}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors group/link"
                >
                  Tư vấn ngay
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Viền Emerald chạy khi hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-emerald-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Khối CTA Kỹ thuật - Cập nhật Pin Bán Dẫn */}
        <div className="mt-16 md:mt-24 relative rounded-[3rem] overflow-hidden shadow-2xl group bg-emerald-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Vế trái: Nội dung sản phẩm */}
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <span className="bg-emerald-500 text-white px-5 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] inline-block shadow-lg">
                Sản phẩm đột phá 2026
              </span>
              <div className="space-y-3">
                <h4 className="text-3xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                  Pin mặt trời <br className="hidden sm:block" />
                  <span className="text-emerald-400 italic">Bán dẫn siêu nhẹ</span>
                </h4>
              </div>
              <p className="text-emerald-100/70 font-medium text-sm md:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
                Chỉ 8.1kg/tấm – Dẻo dai – Không khoan mái. Giải pháp hoàn hảo cho mái tôn nhà xưởng cũ và kết cấu yếu.
              </p>
            </div>

            {/* Vế phải: Hệ thống Hotline thông minh */}
            <div className="flex flex-col gap-6 w-full lg:w-[400px]">
              {/* Nút Hotline Chính */}
              <a
                href="tel:0792515151"
                className="bg-white hover:bg-emerald-400 text-emerald-950 hover:text-white px-10 py-6 rounded-3xl font-black text-sm md:text-base uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 shadow-xl hover:-translate-y-2 active:scale-95 group/btn"
              >
                Tổng đài: 0792.51.51.51
                <div className="bg-emerald-600 p-2 rounded-full group-hover/btn:bg-white group-hover/btn:text-emerald-600 transition-colors">
                  <Zap size={18} fill="currentColor" className="animate-pulse" />
                </div>
              </a>

              {/* Lưới các số hỗ trợ phụ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Kỹ thuật", tel: "0946.234.114", val: "0946234114" },
                  { label: "Lãnh đạo", tel: "0908.528.525", val: "0908528525", highlight: true },
                  { label: "VP 01", tel: "028.62.996.669", val: "02862996669" },
                  { label: "VP 02", tel: "028.665.666.64", val: "02866566664" },
                  { label: "VP 03", tel: "028.628.164.34", val: "02862816434" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:${item.val}`}
                    className={`flex flex-col p-3 rounded-2xl border transition-all hover:scale-105 ${item.highlight
                        ? 'bg-emerald-500/10 border-emerald-500/50 hover:bg-emerald-500'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                      } group/item`}
                  >
                    <span className={`text-[8px] font-black uppercase tracking-tighter mb-1 ${item.highlight ? 'text-emerald-400 group-hover/item:text-white' : 'text-emerald-500/50'}`}>
                      {item.label}
                    </span>
                    <span className={`text-[11px] font-bold tracking-wider ${item.highlight ? 'text-white' : 'text-emerald-100'}`}>
                      {item.tel}
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-emerald-400/30 text-[9px] font-bold text-center uppercase tracking-[0.3em]">Hỗ trợ kỹ thuật & Khảo sát 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}