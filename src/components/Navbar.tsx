import { Link } from '@tanstack/react-router'
import { Phone, ArrowRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Đóng menu khi người dùng đổi trang hoặc thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/about", label: "Về chúng tôi" },
    { to: "/projects", label: "Dự án" },
    { to: "/contact", label: "Liên hệ" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-[100] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        
        {/* 1. Logo Section - Tối ưu kích thước trên mobile */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline group z-[110]">
          <div className="h-10 w-10 md:h-12 md:w-12 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/ttb-white.jpg"
              alt="TTB CORP Logo"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col leading-none border-l-2 border-slate-200 pl-2 md:pl-3">
            <span className="text-blue-900 font-black text-lg md:text-xl tracking-tighter uppercase">
              Thành Công
            </span>
            <div className="flex flex-col mt-0.5">
              <span className="text-blue-600 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase">
                TTB CORP
              </span>
            </div>
          </div>
        </Link>

        {/* 2. Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-[12px] lg:text-[13px] uppercase tracking-widest font-bold text-slate-500">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="hover:text-blue-700 transition [&.active]:text-blue-700 [&.active]:border-b-2 [&.active]:border-blue-700 pb-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 3. Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="tel:0792515151" className="hidden lg:flex items-center gap-2 text-blue-900 font-bold text-sm">
            <div className="p-2 bg-blue-50 rounded-full text-blue-600">
              <Phone size={14} fill="currentColor" />
            </div>
            0792.51.51.51
          </a>

          {/* Nút Báo Giá - Thu nhỏ text trên mobile cực nhỏ */}
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center gap-2 group shadow-lg shadow-blue-800/20 text-[11px] md:text-sm">
            <span className="hidden sm:inline">BÁO GIÁ</span>
            <span className="sm:hidden uppercase font-black">Tư vấn</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors z-[110]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        <div className="flex flex-col items-center gap-8 text-center px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-blue-900 uppercase tracking-widest hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="h-[1px] w-20 bg-slate-100"></div>

          <a 
            href="tel:0792515151" 
            className="flex flex-col items-center gap-3 text-blue-900"
          >
            <div className="p-4 bg-blue-50 rounded-full text-blue-600">
              <Phone size={24} fill="currentColor" />
            </div>
            <span className="font-black text-xl">0792.51.51.51</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Hỗ trợ kỹ thuật 24/7</span>
          </a>
        </div>
      </div>
    </header>
  )
}