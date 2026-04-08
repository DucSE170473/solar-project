import { Mail, Phone, MapPin, Facebook, Youtube, Globe, Zap, UserCheck, QrCode } from "lucide-react"
import { Link } from '@tanstack/react-router'

export default function SolarFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 pt-16 md:pt-24 pb-8 text-zinc-400 font-sans border-t border-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Grid chính */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-zinc-900 pb-16">

          {/* Cột 1: Thương hiệu */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <div className="h-10 md:h-12 w-fit">
                <img
                  src="logo-TTC.jpg" 
                  alt="Zonprosolar Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight border-l-2 border-emerald-500 pl-4">
                <span className="text-emerald-500 text-[11px] md:text-xs font-black tracking-[0.3em] uppercase">
                  TTCO TECHNOLOGY
                </span>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-2 tracking-widest">
                  Thành Công TTCo Group
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 font-medium max-w-xs italic">
              "Tiên phong giải pháp Pin mặt trời bán dẫn siêu nhẹ, dẫn nguồn sáng xanh cho tương lai bền vững."
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-2xl bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-950/50 transition-all border border-zinc-800 hover:border-emerald-900/50">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-zinc-900 text-zinc-400 hover:text-red-500 hover:bg-zinc-800 transition-all border border-zinc-800">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Cột 2: Giải pháp năng lượng */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Giải pháp</h4>
            <ul className="space-y-4 text-sm font-semibold">
              {[
                'Pin dẻo mái tôn xưởng',
                'Pin dẻo bề mặt cong',
                'Năng lượng cho xe RV',
                'Hệ thống lưu trữ BESS'
              ].map((svc) => (
                <li key={svc} className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition cursor-pointer group">
                  <Zap size={14} className="text-zinc-700 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Kết nối & Hotline */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Thông tin liên hệ</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 group">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <span className="leading-snug font-medium text-zinc-400">
                  166 Huỳnh Văn Nghệ, P. Tân Sơn, Q. Tân Bình, TP. HCM
                </span>
              </li>
              
              {/* Danh sách Hotline chuyên sâu */}
              <div className="space-y-3 pt-2">
                {[
                  { label: "0792.51.51.51", sub: "Tổng đài hỗ trợ", tel: "0792515151" },
                  { label: "0946.234.114", sub: "Kỹ thuật Solar", tel: "0946234114" },
                  { label: "0908.528.525", sub: "Hotline Lãnh đạo", tel: "0908528525", isBoss: true }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 group p-2 rounded-xl transition-all ${item.isBoss ? 'bg-emerald-500/5 border border-emerald-500/20' : ''}`}>
                    <div className={`p-1.5 rounded-lg ${item.isBoss ? 'bg-emerald-500 text-white' : 'bg-zinc-900 text-emerald-500'}`}>
                      {item.isBoss ? <UserCheck size={14} /> : <Phone size={14} />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-zinc-600 tracking-tighter">{item.sub}</span>
                      <a href={`tel:${item.tel}`} className={`font-black tracking-wider hover:text-white transition-colors ${item.isBoss ? 'text-emerald-400' : 'text-zinc-300'}`}>
                        {item.label}
                      </a>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Cột 4: QR Code & Digital Connect */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Quét mã Zalo</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* QR Công ty */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-2 bg-white rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <img src="/solar-qr.jpg" alt="Zalo Zonpro" className="w-full aspect-square object-contain" />
                </div>
                <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Zalo OA</span>
              </div>
              
              {/* QR Sếp */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-2 bg-white rounded-2xl overflow-hidden transition-all duration-500 border-2 border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  <img src="/tuan.jpg" alt="Zalo Lãnh đạo" className="w-full aspect-square object-contain" />
                </div>
                <span className="text-[9px] font-black uppercase text-emerald-500 tracking-widest">Mr.Tuấn</span>
              </div>
            </div>
            
            <div className="pt-2 flex flex-col gap-2">
              <a href="mailto:thanhcongtechco@gmail.com" className="text-xs font-medium hover:text-emerald-400 flex items-center gap-2">
                <Mail size={14} /> thanhcongtechco@gmail.com
              </a>
              <a href="https://ttco.vn" target="_blank" className="text-xs font-medium hover:text-emerald-400 flex items-center gap-2">
                <Globe size={14} /> www.ttco.vn
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền & Phát triển */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>&copy; {year} <span className="text-zinc-400">THÀNH CÔNG TTCO GROUP</span></p>
            <span className="hidden md:block text-zinc-800">|</span>
            <p>ZONPROSOLAR VIỆT NAM</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="opacity-40">Powered by</span>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-zinc-300 font-black tracking-normal">TTCO TECH</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}