import { ArrowRight, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            <div className="flex items-center justify-center w-4 h-4 bg-blue-900 text-white rounded-full">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Chuyên gia kết cấu thép tiền chế
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">
            Vững Nền Tảng <br />
            <span className="text-blue-700 font-outline-2">Sáng Tương Lai</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            <span className="text-blue-900 font-bold italic">Công ty Cổ Phần Thành Công TTB CORP</span>
            <br />
            Đơn vị hàng đầu về tư vấn, thiết kế và thi công hệ sinh thái kết cấu thép & hạ tầng công nghiệp trọn gói.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-blue-900/30 transition-all flex items-center gap-2">
              Khởi tạo dự án <ArrowRight size={20} />
            </button>
            <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-900 hover:bg-slate-50 transition-all">
              Hồ sơ năng lực
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000"
              alt="Steel Structure"
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
          {/* Trang trí phía sau ảnh */}
          <div className="absolute -bottom-6 -right-6 h-64 w-64 bg-blue-100 rounded-full -z-10 blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  )
}