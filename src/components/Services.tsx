import { Factory, DraftingCompass, Building2, ShieldCheck, ArrowUpRight } from "lucide-react"

const steelServices = [
  {
    title: "Tư vấn & Thiết kế",
    icon: <DraftingCompass size={32} />,
    desc: "Tính toán kết cấu tối ưu bằng phần mềm chuyên dụng (Tekla, SAP2000), đảm bảo an toàn và tiết kiệm chi phí vật tư.",
    bgImg: "steel-1.jpg",
    accent: "text-blue-600 bg-blue-50"
  },
  {
    title: "Gia công Sản xuất",
    icon: <Factory size={32} />,
    desc: "Sản xuất cấu kiện thép tại xưởng với quy trình kiểm soát chất lượng nghiêm ngặt, đạt chuẩn độ bền cao cho mọi môi trường.",
    bgImg: "steel-2.jpg",
    accent: "text-amber-600 bg-amber-50"
  },
  {
    title: "Lắp dựng Trọn gói",
    icon: <Building2 size={32} />,
    desc: "Đội ngũ kỹ sư và công nhân lành nghề triển khai lắp dựng tại công trường nhanh chóng, đảm bảo tuyệt đối an toàn lao động.",
    bgImg: "steel-3.jpg",
    accent: "text-blue-800 bg-blue-50"
  },
  {
    title: "Bảo trì & Nâng cấp",
    icon: <ShieldCheck size={32} />,
    desc: "Dịch vụ bảo dưỡng định kỳ và cải tạo nhà xưởng, giúp kéo dài tuổi thọ công trình và tối ưu hóa công năng sử dụng.",
    bgImg: "steel-4.jpg",
    accent: "text-slate-700 bg-slate-100"
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Họa tiết trang trí nền */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Tiêu đề Section - Tối ưu Typography Mobile */}
        <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6 relative">
          <div className="absolute inset-0 -top-6 md:-top-10 flex justify-center opacity-[0.02] md:opacity-[0.03] select-none pointer-events-none">
            <span className="text-7xl md:text-[12rem] font-black tracking-tighter">STEEL</span>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 relative z-10">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-blue-900/20"></div>
              <span className="text-blue-900 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px]">
                Công ty Cổ Phần Thành Công
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-blue-900/20"></div>
            </div>
            <span className="text-[#1e3a8a] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-xl md:text-2xl drop-shadow-sm">
              TTB <span className="text-amber-600">CORP</span>
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight md:leading-none tracking-tight md:tracking-[-0.02em] uppercase">
            <span className="text-[#1e3a8a]">Giải pháp</span>
            <br />
            <span className="relative inline-block mt-2 md:mt-4">
              Kết cấu thép
              <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-[#1e3a8a]"></span>
              <span className="absolute -bottom-4 md:-bottom-7 left-0 w-2/3 h-[1px] md:h-[2px] bg-amber-500"></span>
            </span>
            <span className="block mt-8 md:mt-12 text-xl md:text-4xl font-light tracking-[0.2em] md:tracking-[0.4em] text-slate-400">
              Toàn diện
            </span>
          </h2>
        </div>

        {/* Lưới dịch vụ - 1 cột mobile, 2 cột tablet, 4 cột desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steelServices.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.3)] transition-all duration-700 flex flex-col items-start overflow-hidden"
            >
              {/* Lớp ảnh nền lồng chìm */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`/${item.bgImg}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-[0.15] group-hover:opacity-[0.4] grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent"></div>
              </div>

              {/* Icon - Scale nhỏ hơn trên mobile */}
              <div className={`relative z-10 w-14 h-14 md:w-16 md:h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:rotate-[360deg] transition-all duration-[800ms]`}>
                {item.icon}
              </div>

              {/* Nội dung text */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-[#1e3a8a] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 font-bold leading-relaxed mb-4 md:mb-8 opacity-90">
                  {item.desc}
                </p>
              </div>

              {/* Viền chạy khi hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Khối CTA Báo giá - Tối ưu Layout cho Mobile */}
        <div className="mt-16 md:mt-24 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-[#1e3a8a]">
            <img
              src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1200"
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[3s]"
              alt="Steel Construction"
            />
          </div>

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left space-y-4">
              <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest inline-block">
                Tư vấn miễn phí
              </span>
              <div className="space-y-2">
                <span className="text-blue-200 text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-80 block">
                  Yêu cầu báo giá thiết kế
                </span>
                <h4 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[0.9] uppercase tracking-tighter">
                  Kết cấu thép <br className="hidden sm:block" />
                  <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center lg:justify-start mt-2">
                    <span className="text-amber-400">&</span>
                    <span className="relative">
                      Hệ thống PCCC
                      <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-amber-500/30"></span>
                      <span className="absolute -bottom-0.5 md:-bottom-1 left-0 w-1/3 h-[3px] md:h-[4px] bg-amber-500"></span>
                    </span>
                  </span>
                </h4>
              </div>
              <p className="text-blue-100/70 font-medium italic text-sm md:text-base pt-4">"Giải pháp tối ưu - Thi công thần tốc - Chất lượng bền vững."</p>
            </div>

            <a
              href="tel:0792515151"
              className="w-full lg:w-auto bg-white hover:bg-amber-500 text-blue-700 hover:text-white px-8 md:px-10 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 shadow-xl hover:-translate-y-2 active:scale-95 group/btn"
            >
              GỌI NGAY: 0792.51.51.51
              <div className="bg-blue-700 p-2 rounded-full group-hover/btn:bg-white group-hover/btn:text-blue-700 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}