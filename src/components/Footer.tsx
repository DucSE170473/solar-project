import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react"
import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 pt-12 md:pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Grid chính: 1 cột (mobile) -> 2 cột (tablet) -> 4 cột (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-slate-800 pb-12">

          {/* Cột 1: Thương hiệu - Căn giữa trên Mobile cực nhỏ */}
          <div className="space-y-6">
            <div className="flex flex-col gap-5">
              {/* Logo - Đảm bảo không bị méo trên mobile */}
              <div className="h-12 md:h-14 w-fit overflow-hidden">
                <img
                  src="/ttb-white.jpg" // Đảm bảo file này trong public/
                  alt="TTB CORP Logo"
                  className="h-full w-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>

              {/* Tên thương hiệu - Style sang trọng */}
              <div className="flex flex-col leading-tight border-l-4 border-blue-600 pl-4">
                <span className="text-blue-500 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-1">
                  TTB CORP
                </span>
                <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-wider">
                  Công ty Cổ Phần Thành Công
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-xs">
              Chuyên gia hàng đầu trong lĩnh vực tư vấn, thiết kế và thi công kết cấu thép nhà xưởng đạt chuẩn quốc tế.
            </p>

            {/* Social Icons - Tăng kích thước vùng bấm (Touch target) cho mobile */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-all active:scale-95">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-red-500 hover:bg-slate-700 transition-all active:scale-95">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh - Dàn 2 cột nhỏ trên mobile để tiết kiệm diện tích */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Liên kết</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Trang chủ</Link></li>
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Về chúng tôi</Link></li>
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Dự án</Link></li>
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Cột 3: Dịch vụ */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Dịch vụ</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Kết cấu thép', 'Hệ thống PCCC', 'Điện mặt trời', 'Xây dựng hạ tầng'].map((svc) => (
                <li key={svc} className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:w-3 transition-all"></span>
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Liên hệ - Tối ưu hiển thị địa chỉ dài */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Thông tin</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  166/12 Huỳnh Văn Nghệ, P. Tân Sơn, TP. HCM <br />
                  <span className="text-[11px] text-slate-500 italic block mt-1">Tan Son Ward, Ho Chi Minh City, Vietnam</span>
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <a href="tel:0792515151" className="text-blue-500 shrink-0">0792.51.51.51</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span className="break-all">thanhcongtechco@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền - Căn giữa trên Mobile */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center md:text-left">
          <p className="opacity-60">
            &copy; {year} <span className="text-blue-500 font-bold">THÀNH CÔNG GROUP</span>. All rights reserved.
          </p>
          <p className="text-slate-600 flex items-center gap-2">
            Phát triển bởi 
            <span className="px-2 py-0.5 bg-slate-800 rounded text-blue-400 font-black">TTC TECH</span>
          </p>
        </div>
      </div>
    </footer>
  )
}