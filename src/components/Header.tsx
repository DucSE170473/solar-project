import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Zap, ChevronRight } from 'lucide-react'

export default function SolarHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hiệu ứng đổi màu header khi cuộn trang
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Đóng menu khi đổi trang hoặc xoay màn hình
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/about", label: "Công nghệ" },
    { to: "/projects", label: "Dự án" },
    { to: "/contact", label: "Liên hệ" },
  ]

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-white/80 backdrop-blur-xl shadow-lg py-2 border-b border-emerald-50' 
      : 'bg-emerald-950 py-4 md:py-6'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

        {/* 1. Logo Section - Tự động đổi màu theo trạng thái scroll */}
        <Link to="/" className="flex items-center gap-2 md:gap-4 no-underline group z-[110]">
          <div className={`transition-all duration-500 p-1.5 rounded-xl ${scrolled ? 'bg-emerald-600' : 'bg-white'}`}>
            <img
              src="logo-TTC.jpg" 
              alt="Zonprosolar"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight border-l-2 border-emerald-500/30 pl-3">
            <span className={`text-[11px] md:text-sm font-black tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              ZONPRO<span className="text-emerald-500">SOLAR</span>
            </span>
            <p className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-zinc-500' : 'text-emerald-200/50'}`}>
              Thành Công TTCo Group
            </p>
          </div>
        </Link>

        {/* 2. Menu Desktop - Tinh chỉnh khoảng cách và hiệu ứng hover */}
        <div className={`hidden md:flex items-center gap-8 lg:gap-10 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${
          scrolled ? 'text-zinc-600' : 'text-emerald-50/70'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative group transition-all duration-300 hover:text-emerald-500 [&.active]:text-emerald-500 ${scrolled ? '' : '[&.active]:text-white'}`}
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. Nút Hotline & Call to Action */}
        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="tel:0792515151"
            className={`hidden xl:flex items-center gap-3 font-black text-xs tracking-widest transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-emerald-600' : 'text-white'
            }`}
          >
            <div className={`p-2 rounded-full ${scrolled ? 'bg-emerald-100' : 'bg-emerald-500/20'}`}>
              <Phone size={16} className="animate-pulse" />
            </div>
            0792.51.51.51
          </a>

          <Link to="/contact" className={`
            flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full font-black text-[10px] md:text-xs tracking-[0.15em] uppercase transition-all shadow-xl active:scale-95
            ${scrolled 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200' 
              : 'bg-white text-emerald-900 hover:bg-emerald-400 hover:text-white shadow-black/20'}
          `}>
            <span>Báo giá</span>
            <Zap size={14} fill="currentColor" className="hidden sm:block" />
          </Link>

          {/* Toggle Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors z-[110] ${
              scrolled ? 'text-emerald-900 bg-emerald-50' : 'text-white bg-white/10'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 4. Overlay Menu Mobile - Fullscreen Modern Style */}
        <div className={`
          fixed inset-0 bg-emerald-950 z-[100] flex flex-col items-center justify-center gap-10 transition-all duration-700 md:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible translate-x-full'}
        `}>
          {/* Background Pattern cho Menu Mobile */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Zap size={300} className="text-white" />
          </div>

          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black text-white uppercase tracking-[0.1em] flex items-center gap-4 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-emerald-500 text-sm">0{idx + 1}.</span>
                {link.label}
              </Link>
            ))}

            <div className={`mt-10 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <a
                href="tel:0792515151"
                className="flex items-center gap-4 bg-emerald-500 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/20"
              >
                <Phone size={20} /> 0792.51.51.51
              </a>
              <p className="text-emerald-500/50 text-[10px] font-bold uppercase tracking-widest">Tư vấn kỹ thuật miễn phí</p>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}