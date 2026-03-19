import { ArrowRight, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#3333CC] shadow-2xl group transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(51,51,204,0.4)]">

          {/* Lớp ảnh nền thực tế - Lấy từ public/steel-cta-bg.jpg */}
          <div className="absolute inset-0 z-0">
            <img
              src="/steel-cta-bg.jpg"
              alt="TTB Corp Industrial Project"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 group-hover:scale-110 transition-transform duration-1000 blur-[0.5px] group-hover:blur-0"
            />
            {/* Lớp phủ Gradient thông minh để làm nổi bật nội dung phía trái */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3333CC] via-[#3333CC]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 px-8 py-20 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Khối Tiêu đề & Nội dung */}
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Tư vấn khảo sát miễn phí 24/7
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-[0.9] text-white uppercase tracking-tighter">
                <span className="block text-2xl md:text-3xl font-light tracking-[0.2em] text-blue-200 mb-4 opacity-80">
                  Bắt đầu ngay
                </span>
                Dự án công nghiệp <br />
                <span className="text-amber-400 drop-shadow-md">của bạn hôm nay</span>
              </h2>

              <p className="text-blue-50 text-lg font-medium max-w-xl opacity-90 leading-relaxed italic border-l-4 border-amber-500 pl-6 hidden md:block shadow-sm">
                "TTB CORP cam kết mang lại giải pháp kết cấu thép tối ưu về chi phí và bền bỉ cùng thời gian."
              </p>
            </div>

            {/* Khối Nút hành động */}
            <div className="flex flex-col w-full sm:w-auto gap-4 shrink-0">
              {/* Nút Gọi ngay */}
              <a
                href="tel:0792515151"
                className="group/btn bg-white text-[#3333CC] px-10 py-6 rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl hover:-translate-y-1 uppercase text-sm tracking-tighter"
              >
                <div className="bg-[#3333CC] group-hover/btn:bg-white p-2 rounded-full transition-colors">
                  <Phone size={20} className="text-white group-hover/btn:text-amber-500 transition-colors" />
                </div>
                0792.51.51.51
              </a>

              {/* Nút Chuyển trang Contact */}
              <a
                href="/contact"
                className="group/btn2 bg-transparent text-white border-2 border-white/30 px-10 py-6 rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-white/10 hover:border-white transition-all duration-300 uppercase text-sm tracking-tighter"
              >
                Gửi yêu cầu thiết kế
                <ArrowRight size={22} className="group-hover/btn2:translate-x-2 transition-transform text-amber-500" />
              </a>
            </div>

          </div>

          {/* Họa tiết TTB Branding chìm */}
          <div className="absolute bottom-[-15%] right-[-5%] text-[15rem] font-black text-white/5 pointer-events-none select-none italic tracking-tighter">
            TTB
          </div>
        </div>
      </div>
    </section>
  )
}