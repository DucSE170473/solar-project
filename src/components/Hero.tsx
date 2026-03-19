import { ArrowRight, Download, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      
      {/* Lớp ảnh nền đại cảnh (Background Overlay) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-steel-bg.jpg" // Hãy đảm bảo có ảnh công trình thực tế trong thư mục public
          alt="TTB Corp Industrial Foundation"
          className="w-full h-full object-cover opacity-[0.05] grayscale" 
        />
        {/* Gradient mờ dần để không làm loãng nội dung */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Khối nội dung bên trái */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#3333CC]/5 border border-[#3333CC]/10 text-[#3333CC] text-[10px] font-black uppercase tracking-[0.3em] shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3333CC] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3333CC]"></span>
            </span>
            Chuyên gia kết cấu thép & PCCC
          </div>

          <h1 className="text-6xl lg:text-[6.5rem] font-black leading-[0.85] tracking-tighter uppercase">
            <span className="block text-2xl lg:text-3xl font-light tracking-[0.3em] text-slate-400 mb-4">
              Vững nền tảng
            </span>
            <span className="relative inline-block text-[#3333CC]">
              Sáng tương lai
              {/* Chi tiết gạch chân kỹ thuật */}
              <span className="absolute -bottom-4 left-0 w-full h-3 bg-[#3333CC]/10 rounded-full"></span>
              <span className="absolute -bottom-4 left-0 w-1/3 h-3 bg-amber-500 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium border-l-4 border-[#3333CC]/20 pl-6">
            <span className="text-[#3333CC] font-black italic uppercase tracking-wider">TTB CORP</span>
            <br />
            Hệ sinh thái hạ tầng công nghiệp trọn gói: Tư vấn tối ưu - Thiết kế chính xác - Thi công thần tốc.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button className="bg-[#3333CC] hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-[#3333CC]/30 transition-all flex items-center gap-3 group hover:-translate-y-1 uppercase text-sm tracking-tighter">
              Nhận báo giá ngay 
              <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/40 transition-colors">
                <ArrowRight size={18} />
              </div>
            </button>
            
            <a
              href="/PROFILE TTB - Thanh Cong TTB Joint Stock Company.pdf"
              target="_blank"
              className="bg-white border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-slate-700 hover:border-[#3333CC] hover:text-[#3333CC] transition-all duration-300 shadow-sm flex items-center gap-3 group uppercase text-sm tracking-tighter"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Hồ sơ năng lực
            </a>
          </div>
        </div>

        {/* Khối ảnh bên phải (Ảnh lồng ảnh) */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(51,51,204,0.3)] border-[12px] border-white group">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000"
              alt="Steel Structure"
              className="w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay nhẹ trên ảnh chính */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3333CC]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Badge thông số kỹ thuật (Tăng uy tín) */}
          <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                <Zap size={28} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Tiêu chuẩn quốc tế</p>
                <p className="text-2xl font-black text-[#3333CC]">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          {/* Họa tiết trang trí phía sau */}
          <div className="absolute -top-10 -right-10 h-80 w-80 bg-[#3333CC]/10 rounded-full -z-10 blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-amber-500/10 rounded-full -z-10 blur-[60px]"></div>
        </div>
      </div>
      
      {/* Chữ TTB CORP khổng lồ chạy chìm phía dưới */}
      <div className="absolute bottom-[-5%] left-[-2%] text-[20rem] font-black text-slate-50 pointer-events-none select-none italic tracking-tighter opacity-40">
        TTB CORP
      </div>
    </section>
  )
}