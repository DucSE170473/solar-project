import { Sun, Zap, Globe, Rocket, ShieldCheck } from "lucide-react"

export default function SolarTimeline() {
  const milestones = [
    { 
      year: '2014', 
      title: 'Khởi Đầu Vững Chắc', 
      desc: 'Thành lập Thành Công Group với thế mạnh về cơ khí và kết cấu thép công nghiệp tại TP. HCM.',
      icon: <ShieldCheck className="text-emerald-500" size={24} />
    },
    { 
      year: '2020', 
      title: 'Mở Rộng Hệ Sinh Thái', 
      desc: 'Phát triển mảng giải pháp cơ điện và PCCC, trở thành đối tác tin cậy của các tập đoàn như Viettel, Haka.',
      icon: <Globe className="text-emerald-500" size={24} />
    },
    { 
      year: '2023', 
      title: 'Nghiên Cứu Công Nghệ Xanh', 
      desc: 'Hợp tác chiến lược cùng Zonprosolar để nghiên cứu dòng pin bán dẫn siêu dẻo phù hợp khí hậu Việt Nam.',
      icon: <Sun className="text-amber-500" size={24} />
    },
    { 
      year: '2025', 
      title: 'Kỷ Nguyên Pin Siêu Nhẹ', 
      desc: 'Ra mắt dòng pin ZP-DB7A siêu nhẹ 8.1kg, dẫn đầu thị trường pin mặt trời không khung đỡ.',
      icon: <Zap className="text-emerald-400" size={24} />
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title Section */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Rocket size={14} />
            Hành trình vươn tầm
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
            Tầm nhìn & <span className="text-emerald-600 italic">Sứ mệnh</span>
          </h2>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
            <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line (Desktop) với hiệu ứng Gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-100 via-emerald-500 to-emerald-100 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-16 md:space-y-0">
            {milestones.map((ms, index) => (
              <div key={ms.year} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot - Nút thắt thời gian */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-white border-4 border-emerald-500 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {ms.icon}
                   </div>
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 flex flex-col px-4 md:px-16">
                  <div className={`
                    relative p-8 md:p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 transition-all duration-500 group overflow-hidden
                    hover:bg-emerald-950 hover:border-emerald-500 hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.25)]
                    ${index % 2 === 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}
                  `}>
                    {/* Year Watermark */}
                    <span className={`text-6xl md:text-8xl font-black absolute -top-4 opacity-[0.05] group-hover:opacity-10 group-hover:text-emerald-400 transition-all duration-500 ${index % 2 === 0 ? 'left-6' : 'right-6'}`}>
                      {ms.year}
                    </span>

                    <div className="relative z-10">
                      <div className={`mb-4 flex items-center gap-3 md:hidden`}>
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                           {ms.icon}
                        </div>
                        <span className="text-xl font-black text-emerald-600">{ms.year}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-emerald-900 group-hover:text-emerald-400 mb-4 uppercase tracking-tight">
                        {ms.title}
                      </h3>
                      
                      <p className="text-zinc-600 group-hover:text-emerald-50/80 font-medium leading-relaxed text-sm md:text-base">
                        {ms.desc}
                      </p>
                    </div>

                    {/* Hover Decor */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}