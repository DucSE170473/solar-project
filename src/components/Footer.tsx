import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react"
import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">

        {/* Cột 1: Thương hiệu */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="h-14 w-auto overflow-hidden">
              <img
                src="/ttb-white.jpg"
                alt="TTB CORP Logo"
                className="h-full w-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>

            {/* Tên thương hiệu pháp lý */}
            <div className="flex flex-col leading-tight border-l-4 border-blue-600 pl-4">
              <span className="text-white font-black text-xl tracking-tighter uppercase leading-none">
                Thành Công
              </span>
              <span className="text-blue-500 text-xs font-black tracking-[0.2em] uppercase mt-1">
                TTB CORP
              </span>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-wider">
                Công ty Cổ Phần Thành Công
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-400 font-medium">
            Chuyên gia hàng đầu trong lĩnh vực tư vấn, thiết kế và thi công kết cấu thép nhà xưởng đạt chuẩn quốc tế.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-red-500 hover:bg-slate-700 transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Liên kết</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Trang chủ</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Về chúng tôi</Link></li>
            <li><Link to="/projects" className="hover:text-white transition">Dự án tiêu biểu</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Liên hệ báo giá</Link></li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Dịch vụ</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li className="hover:text-blue-400 transition cursor-pointer">• Kết cấu thép nhà xưởng</li>
            <li className="hover:text-blue-400 transition cursor-pointer">• Hệ thống PCCC (Sở duyệt)</li>
            <li className="hover:text-blue-400 transition cursor-pointer">• Điện mặt trời áp mái</li>
            <li className="hover:text-blue-400 transition cursor-pointer">• Xây dựng hạ tầng</li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ trực tiếp */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Thông tin</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>166/12 Huỳnh Văn Nghệ, phường Tân Sơn, TP. HCM /
                166/12 Huynh Van Nghe Street, Tan Son Ward, Ho Chi Minh City, Vietnam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span className="text-white font-bold">0792.51.51.51</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>thanhcongtechco@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
        <p>&copy; {year} THÀNH CÔNG GROUP. All rights reserved.</p>
        <p className="text-slate-600">Phát triển bởi đội ngũ kỹ thuật TTC</p>
      </div>
    </footer>
  )
}