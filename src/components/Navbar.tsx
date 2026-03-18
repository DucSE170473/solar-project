// src/components/Navbar.tsx
import { Link } from '@tanstack/react-router'
import { Phone, ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        
        {/* Logo - Sửa href thành to */}
        <Link to="/">
          <img 
            src="/ttb-white.jpg" 
            alt="TTB Corp Logo" 
            className="h-12 w-auto mix-blend-multiply" // Giúp logo tiệp màu với nền trắng
          />
        </Link>

        {/* Menu - Sửa các class để trông tinh tế hơn */}
        <nav className="hidden md:flex gap-8 text-[14px] uppercase tracking-wider font-bold text-slate-600">
          <Link to="/" className="hover:text-yellow-600 transition [&.active]:text-yellow-600">Trang chủ</Link>
          <Link to="/about" className="hover:text-yellow-600 transition [&.active]:text-yellow-600">Về chúng tôi</Link>
          <Link to="/projects" className="hover:text-yellow-600 transition [&.active]:text-yellow-600">Dự án</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition [&.active]:text-yellow-600">Liên hệ</Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <a href="tel:0123456789" className="hidden lg:flex items-center gap-2 text-slate-900 font-black">
            <Phone size={18} className="text-yellow-500" />
            0123.456.789
          </a>
          <button className="bg-yellow-500 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-900 transition-all flex items-center gap-2 group shadow-lg shadow-yellow-500/20">
            BÁO GIÁ
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </header>
  )
}