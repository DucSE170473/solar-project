import { CheckCircle2, Award, Sun, Zap, Leaf } from 'lucide-react'

export default function SolarAbout() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Họa tiết chìm - Đổi sang dạng vòng tròn năng lượng (Sun rays) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative">
        
        {/* Khối Hình ảnh (Bên trái) */}
        <div className="relative order-2 lg:order-1 px-4 md:px-0">
          {/* Ảnh 1: Tấm pin dẻo đang được uốn cong hoặc dán lên bề mặt thực tế */}
          <div className="relative z-10 w-full md:w-4/5 aspect-[4/3] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <img 
              src="public/solar-6.jpg" 
              alt="Công nghệ pin mặt trời dẻo Zonpro" 
              className="w-full h-full object-cover"
            />
            {/* Overlay nhẹ màu xanh công nghệ */}
            <div className="absolute inset-0 bg-emerald-900/10"></div>
          </div>

          {/* Ảnh 2: Một dự án thực tế (ví dụ lắp trên mái nhà xưởng hoặc xe RV) */}
          <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 z-20 w-1/2 md:w-3/5 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <img 
              src="public/solar-1.jpg" 
              alt="Ứng dụng pin mặt trời TTCO" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge Chứng chỉ - Thay Award bằng biểu tượng Năng lượng sạch */}
          <div className="absolute -top-6 -left-2 md:top-10 md:-left-10 z-30 bg-emerald-600 text-white p-4 md:p-6 rounded-2xl shadow-xl animate-float">
            <Zap size={24} className="text-amber-300 mb-1 md:mb-2 md:size-8" fill="currentColor" />
            <p className="text-lg md:text-2xl font-black leading-none italic">ECO-TECH</p>
            <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-80 mt-1 text-emerald-100">Tiên phong</p>
          </div>
        </div>

        {/* Nội dung (Bên phải) */}
        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 md:w-10 h-[2px] bg-emerald-500"></div>
              <span className="text-emerald-600 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px]">
                Zonprosolar Technology
              </span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Dẫn nguồn sáng xanh <br /> 
              <span className="text-emerald-500 italic">Mọi lúc - Mọi nơi</span>
            </h2>
            
            <p className="text-emerald-700 text-lg md:text-xl font-bold border-l-4 border-emerald-400 pl-4 mx-auto lg:mx-0 w-fit">
              Thành Công TTCO Technology
            </p>
            
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Chúng tôi mang đến giải pháp <strong>Pin mặt trời bán dẫn</strong> thế hệ mới. Khắc phục hoàn toàn nhược điểm của pin truyền thống nhờ trọng lượng siêu nhẹ và khả năng lắp đặt linh hoạt trên mọi địa hình.
            </p>
          </div>

          {/* Danh sách đặc tính kỹ thuật từ Profile */}
          <div className="grid gap-4 md:gap-6">
            {[
              { 
                title: 'Công nghệ Siêu nhẹ & Siêu dẻo', 
                desc: 'Chỉ 8.1kg, không cần khung đỡ, dán trực tiếp lên mái tôn mỏng hoặc bề mặt cong.',
                icon: <Leaf className="size-5 md:size-6" />
              },
              { 
                title: 'Hiệu suất Bán dẫn cao', 
                desc: 'Tối ưu hóa khả năng hấp thụ ánh sáng ngay cả trong điều kiện bức xạ thấp.',
                icon: <Sun className="size-5 md:size-6" />
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-md transition-all group">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Các con số biết nói - Chuyển sang các chỉ số năng lượng */}
          <div className="pt-6 border-t border-slate-100 flex justify-around lg:justify-start gap-8 md:gap-12">
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 italic">225<span className="text-sm md:text-base ml-1">W</span></p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Công suất tối đa</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 italic">3.0<span className="text-sm md:text-base ml-1">mm</span></p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Độ dày siêu mỏng</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 italic">IP67</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Chống nước tuyệt đối</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}