import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Zap, QrCode, ChevronDown, UserCheck } from 'lucide-react'

export default function SolarHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const hotlines = [
    { label: "0792.51.51.51", sub: "Tổng đài Solar", tel: "0792515151" },
    { label: "0946.234.114", sub: "Kỹ thuật dự án", tel: "0946234114" },
    { label: "0908.528.525", sub: "Hotline Lãnh đạo", tel: "0908528525", isBoss: true },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2 border-b border-emerald-50' 
      : 'bg-emerald-950 py-4 md:py-6'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 md:gap-4 no-underline group z-[110]">
          <div className={`transition-all duration-500 p-1.5 rounded-xl ${scrolled ? 'bg-emerald-600' : 'bg-white'}`}>
            <img src="logo-TTC.jpg" alt="Zonprosolar" className="h-8 md:h-10 w-auto object-contain" />
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

        {/* 2. Menu Desktop */}
        <div className={`hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
          scrolled ? 'text-zinc-600' : 'text-emerald-50/70'
        }`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="relative group transition-all duration-300 hover:text-emerald-500">
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. Hotline & QR & Call to Action */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Nút QR Quick Access */}
          <button 
            onClick={() => setShowQR(true)}
            className={`p-2 rounded-full transition-all ${scrolled ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-emerald-900'}`}
          >
            <QrCode size={18} />
          </button>

          {/* Hotline Dropdown (Desktop) */}
          <div className="hidden xl:block relative group">
            <button className={`flex items-center gap-2 font-black text-[10px] tracking-widest uppercase transition-all ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              <Phone size={14} className="text-emerald-500" />
              <span>Hotline</span>
              <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
            </button>
            
            <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-emerald-50 overflow-hidden">
              {hotlines.map((h, i) => (
                <a key={i} href={`tel:${h.tel}`} className={`flex flex-col px-5 py-3 hover:bg-emerald-50 transition-colors border-b border-emerald-50 last:border-none ${h.isBoss ? 'bg-emerald-50/50' : ''}`}>
                  <span className={`text-[8px] font-black uppercase tracking-tighter ${h.isBoss ? 'text-emerald-600' : 'text-zinc-400'}`}>
                    {h.isBoss ? '⭐ Lãnh đạo' : h.sub}
                  </span>
                  <span className="text-xs font-black text-emerald-950">{h.label}</span>
                </a>
              ))}
            </div>
          </div>

          <Link to="/contact" className={`
            flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-[10px] tracking-[0.15em] uppercase transition-all active:scale-95
            ${scrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-900 hover:bg-emerald-400 hover:text-white'}
          `}>
            <span>Báo giá</span>
            <Zap size={12} fill="currentColor" />
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-lg transition-colors z-[110] ${scrolled ? 'text-emerald-900 bg-emerald-50' : 'text-white bg-white/10'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-emerald-950 z-[100] flex flex-col items-center justify-center p-6 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible translate-x-full'}`}>
          <div className="flex flex-col items-center gap-6 w-full max-w-xs">
            {navLinks.map((link, idx) => (
              <Link key={idx} to={link.to} onClick={() => setIsOpen(false)} className="text-2xl font-black text-white uppercase tracking-widest">{link.label}</Link>
            ))}
            
            <div className="w-full pt-6 border-t border-white/10 flex flex-col gap-3">
              {hotlines.map((h, i) => (
                <a key={i} href={`tel:${h.tel}`} className={`flex items-center justify-between p-4 rounded-xl ${h.isBoss ? 'bg-emerald-500 text-white' : 'bg-white/5 text-white'}`}>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold opacity-60 uppercase">{h.sub}</span>
                    <span className="text-sm font-black">{h.label}</span>
                  </div>
                  <Phone size={16} />
                </a>
              ))}
              <button onClick={() => { setShowQR(true); setIsOpen(false); }} className="w-full bg-white text-emerald-900 p-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2">
                <QrCode size={18} /> Quét mã Zalo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MODAL QR CODE (Dùng chung cho cả Desktop & Mobile) */}
      {showQR && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-md" onClick={() => setShowQR(false)}>
          <div className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center relative shadow-2xl animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowQR(false)} className="absolute top-5 right-5 text-zinc-400 hover:text-emerald-600"><X size={24} /></button>
            <div className="mb-6 flex justify-center">
                <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600"><QrCode size={32} /></div>
            </div>
            <h3 className="text-emerald-900 font-black uppercase tracking-wider mb-2">Kết nối Zalo Solar</h3>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mb-6 tracking-widest">Tư vấn dự án & Kỹ thuật</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 group">
                <div className="aspect-square bg-zinc-50 rounded-2xl p-2 border-2 border-transparent group-hover:border-emerald-500 transition-all">
                    <img src="solar-qr.jpg" alt="QR Công ty" className="w-full h-full object-contain" />
                </div>
                <p className="text-[9px] font-black text-zinc-400 uppercase">Zalo Công ty</p>
              </div>
              <div className="space-y-2 group">
                <div className="aspect-square bg-emerald-50 rounded-2xl p-2 border-2 border-transparent group-hover:border-emerald-500 transition-all">
                    <img src="tuan.jpg" alt="QR Sếp" className="w-full h-full object-contain" />
                </div>
                <p className="text-[9px] font-black text-emerald-600 uppercase">Zalo Lãnh đạo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}