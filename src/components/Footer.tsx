import { Mail, Phone, MapPin, Facebook, Youtube, Globe, Zap } from "lucide-react"
import { Link } from '@tanstack/react-router'

export default function SolarFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 pt-16 md:pt-24 pb-8 text-zinc-400 font-sans border-t border-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Grid chính */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-zinc-900 pb-16">

          {/* Cột 1: Thương hiệu công nghệ xanh */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              {/* Logo Zonpro/TTCO */}
              <div className="h-10 md:h-12 w-fit">
                <img
                  src="public/logo-TTC.jpg" // Thay bằng logo Zonpro/TTCO
                  alt="Zonprosolar Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Tagline thương hiệu từ Profile */}
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

            {/* Social Icons - Tone Emerald */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-2xl bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-950/50 transition-all border border-zinc-800 hover:border-emerald-900/50">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-zinc-900 text-zinc-400 hover:text-red-500 hover:bg-zinc-800 transition-all border border-zinc-800">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Cột 2: Điều hướng nhanh */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Khám phá</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm font-bold">
              <li><Link to="/" className="hover:text-emerald-400 flex items-center gap-2 transition-all group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 transition-all"></span> Trang chủ
              </Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 flex items-center gap-2 transition-all group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 transition-all"></span> Công nghệ bán dẫn
              </Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 flex items-center gap-2 transition-all group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 transition-all"></span> Dự án tiêu biểu
              </Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 flex items-center gap-2 transition-all group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 transition-all"></span> Liên hệ báo giá
              </Link></li>
            </ul>
          </div>

          {/* Cột 3: Giải pháp năng lượng (Cập nhật từ hồ sơ Zonpro) */}
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

          {/* Cột 4: Thông tin kết nối - Cập nhật Hotline 0792.51.51.51 */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Kết nối ngay</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4 group">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 self-start group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed font-medium">
                  166 Huỳnh Văn Nghệ, P. Tân Sơn, Q. Tân Bình, TP. HCM
                </span>
              </li>
              <li className="flex gap-4 group items-center">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <a href="tel:0792515151" className="text-emerald-400 font-black text-base tracking-wider hover:underline underline-offset-8">
                  0792.51.51.51
                </a>
              </li>
              <li className="flex gap-4 group items-center">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <a href="mailto:thanhcongtechco@gmail.com" className="font-medium hover:text-white transition-colors border-b border-zinc-800 group-hover:border-emerald-500 pb-1">
                  thanhcongtechco@gmail.com
                </a>
              </li>
              <li className="flex gap-4 group items-center">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Globe size={16} />
                </div>
                <a href="https://ttco.vn" target="_blank" className="font-medium hover:text-white transition-colors">
                  www.ttco.vn
                </a>
              </li>
            </ul>
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