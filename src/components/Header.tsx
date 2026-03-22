import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Đóng menu khi đổi trang hoặc xoay màn hình
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/about", label: "Giới thiệu" },
    { to: "/projects", label: "Dự án" },
    { to: "/contact", label: "Liên hệ" },
  ]

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[var(--brand-primary)] shadow-2xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">

        {/* 1. Logo Section - Cải thiện hiển thị logo nền trắng */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline group z-[110]">
          <div className="bg-white p-1 rounded-lg shadow-sm group-hover:shadow-md transition-all h-10 md:h-12 flex items-center justify-center overflow-hidden mix-blend-multiply">
            <img
              src="/ttb-white.jpg"
              alt="TTB CORP Logo"
              className="h-full w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-tight border-l-2 border-white/20 pl-2 md:pl-3">
            <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-1">
              TTB CORP
            </span>
            <p className="text-[9px] md:text-[10px] text-white/70 font-bold uppercase mt-2 tracking-wider">
              Công ty Cổ Phần Thành Công
            </p>
          </div>
        </Link>

        {/* 2. Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.15em] text-white/80">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative group transition-colors duration-300 hover:text-white [&.active]:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. Nút Hotline & Báo Giá */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0792515151"
            className="hidden lg:flex items-center gap-2 border-2 border-white/40 text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-[var(--brand-primary)] transition-all duration-500"
          >
            <Phone size={14} /> 0792.51.51.51
          </a>

          {/* Nút Báo Giá
          <Link to="/contact" className="bg-white text-[var(--brand-primary)] px-4 md:px-6 py-2.5 rounded-xl font-bold hover:bg-[var(--brand-accent)] hover:text-white transition-all flex items-center gap-2 group shadow-lg text-[11px] md:text-sm no-underline">
            <span className="hidden sm:inline uppercase tracking-widest">BÁO GIÁ</span>
            <span className="sm:hidden uppercase font-black">Tư vấn</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link> */}

          {/* Toggle Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-[110]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 4. Overlay Menu Mobile */}
        <div className={`
          fixed inset-0 bg-[var(--brand-primary)] z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}
        `}>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white uppercase tracking-[0.2em] hover:text-[var(--brand-accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:0792515151"
              className="mt-4 flex items-center gap-3 bg-white text-[var(--brand-primary)] px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest active:scale-95 transition-transform"
            >
              <Phone size={18} /> Gọi ngay: 0792.51.51.51
            </a>
          </div>

          {/* Họa tiết TTB chìm cho menu mobile */}
          <div className="absolute bottom-10 opacity-5 text-6xl font-black text-white italic tracking-tighter">
            TTB CORP
          </div>
        </div>

      </nav>
    </header>
  )
}