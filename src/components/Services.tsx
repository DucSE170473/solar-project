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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Họa tiết trang trí nền */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Tiêu đề Section */}
        <div className="text-center mb-20 space-y-6 relative">
          <div className="absolute inset-0 -top-10 flex justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="text-[12rem] font-black tracking-tighter">STEEL</span>
          </div>

          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-blue-900/20"></div>
              <span className="text-blue-900 font-black uppercase tracking-[0.5em] text-[10px]">
                Công ty Cổ Phần Thành Công
              </span>
              <div className="h-[1px] w-12 bg-blue-900/20"></div>
            </div>
            <span className="text-[#1e3a8a] font-black uppercase tracking-[0.25em] text-2xl drop-shadow-sm">
              TTB <span className="text-amber-600">CORP</span>
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-[-0.02em] uppercase">
            <span className="text-[#1e3a8a]">Giải pháp</span>
            <br />
            <span className="relative inline-block mt-4">
              Kết cấu thép
              <span className="absolute -bottom-4 left-0 w-full h-[8px] bg-[#1e3a8a]"></span>
              <span className="absolute -bottom-7 left-0 w-2/3 h-[2px] bg-amber-500"></span>
            </span>
            <span className="block mt-12 text-3xl md:text-4xl font-light tracking-[0.4em] text-slate-400">
              Toàn diện
            </span>
          </h2>
        </div>

        {/* Lưới dịch vụ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steelServices.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.3)] transition-all duration-700 flex flex-col items-start overflow-hidden"
            >
              {/* Lớp ảnh nền lồng chìm - Đã sửa lỗi không thấy ảnh */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`/${item.bgImg}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-[0.2] group-hover:opacity-[0.4] grayscale group-hover:grayscale-0 blur-[0.5px] group-hover:blur-0"
                />
                {/* Lớp phủ Gradient thông minh: Giảm độ đặc của màu trắng để hiện ảnh */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/40 to-transparent transition-all duration-500"></div>
              </div>

              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-[360deg] transition-all duration-700`}>
                {item.icon}
              </div>

              {/* Nội dung text - Tăng độ đậm để nổi bật trên nền ảnh */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 text-[#1e3a8a] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 font-bold leading-relaxed mb-8 opacity-90">
                  {item.desc}
                </p>
              </div>

              {/* Viền chạy khi hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Khối CTA Báo giá */}
        <div className="mt-24 relative rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[#1e3a8a]">
            <img
              src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1200"
              className="w-full h-full object-cover opacity-20"
              alt="Steel Construction"
            />
          </div>

          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left space-y-4">
              <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Tư vấn miễn phí
              </span>
              <h4 className="flex flex-col gap-2">
                {/* Dòng dẫn dắt: Nhỏ hơn, tracking rộng tạo sự sang trọng */}
                <span className="text-blue-200 text-sm md:text-base font-bold uppercase tracking-[0.4em] opacity-80">
                  Yêu cầu báo giá thiết kế
                </span>

                {/* Dòng chính: Cực dày, tạo cảm giác thép đặc */}
                <span className="text-4xl md:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                  Kết cấu thép <br />
                  <span className="flex items-center gap-4">
                    <span className="text-amber-400">&</span>
                    <span className="relative">
                      Hệ thống PCCC
                      {/* Đường gạch chân kép tinh tế */}
                      <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-amber-500/30"></span>
                      <span className="absolute -bottom-1 left-0 w-1/3 h-[4px] bg-amber-500"></span>
                    </span>
                  </span>
                </span>
              </h4>
              <p className="text-blue-100/70 font-medium italic">Giải pháp tối ưu - Thi công thần tốc - Chất lượng bền vững.</p>
            </div>

            <a
              href="tel:0792515151"
              className="bg-white 
      hover:bg-amber-500 
      text-blue-700 
      hover:text-white 
      px-10 py-5 
      rounded-2xl 
      font-bold 
      text-sm 
      uppercase tracking-wide 
      transition-all duration-300 
      flex items-center gap-3 
      shadow-lg hover:shadow-2xl 
      hover:-translate-y-1"
            >
              GỌI NGAY: 0792.51.51.51
              <div className="bg-blue-700 
        text-white 
        p-2 
        rounded-full 
        transition-all duration-300
        group-hover:bg-white 
        group-hover:text-blue-700">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}