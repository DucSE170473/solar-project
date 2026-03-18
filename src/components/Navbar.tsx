import { Link } from '@tanstack/react-router'
import { Phone, ArrowRight, Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        <Link to="/" className="flex items-center gap-3 no-underline group">
          {/* Logo Image */}
          <div className="h-12 w-12 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/ttb-white.jpg"
              alt="Thành Công Group Logo"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="text-blue-900 font-black text-xl tracking-tighter uppercase">
              Thành Công
            </span>
            <span className="text-slate-400 text-[10px] font-bold tracking-[0.25em] uppercase">
              Group
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-[13px] uppercase tracking-widest font-bold text-slate-500">
          <Link to="/" className="hover:text-blue-700 transition [&.active]:text-blue-700 [&.active]:border-b-2 [&.active]:border-blue-700 pb-1">Trang chủ</Link>
          <Link to="/about" className="hover:text-blue-700 transition [&.active]:text-blue-700 [&.active]:border-b-2 [&.active]:border-blue-700 pb-1">Về chúng tôi</Link>
          <Link to="/projects" className="hover:text-blue-700 transition [&.active]:text-blue-700 [&.active]:border-b-2 [&.active]:border-blue-700 pb-1">Dự án</Link>
          <Link to="/contact" className="hover:text-blue-700 transition [&.active]:text-blue-700 [&.active]:border-b-2 [&.active]:border-blue-700 pb-1">Liên hệ</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a href="tel:0792515151" className="hidden lg:flex items-center gap-2 text-blue-900 font-bold text-sm">
            <div className="p-2 bg-blue-50 rounded-full text-blue-600">
              <Phone size={16} fill="currentColor" />
            </div>
            0792.51.51.51
          </a>

          <button className="bg-blue-800 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center gap-2 group shadow-lg shadow-blue-800/20 text-sm">
            BÁO GIÁ
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}