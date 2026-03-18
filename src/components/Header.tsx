import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e3a8a] shadow-2xl px-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3">
        
        {/* Logo Section - TTB CORP */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="h-12 w-auto overflow-hidden">
            <img 
              src="/ttb-white.jpg" 
              alt="TTB CORP Logo" 
              className="h-full w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-tight border-l-2 border-white/20 pl-3">
            <span className="text-white font-black text-lg tracking-tighter uppercase leading-none">
              Thành Công
            </span>
            <span className="text-blue-300 font-black text-[10px] tracking-[0.2em] uppercase mt-1">
              TTB CORP
            </span>
            <span className="text-white/40 text-[8px] font-bold uppercase mt-1 hidden sm:block tracking-widest">
              Công ty Cổ Phần
            </span>
          </div>
        </Link>

        {/* Menu chính - Màu chữ trắng tinh tế trên nền Navy đậm */}
        <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.15em] text-white/80">
          <Link 
            to="/" 
            className="relative group transition-colors duration-300 hover:text-white [&.active]:text-white"
          >
            Trang chủ
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/about" 
            className="relative group transition-colors duration-300 hover:text-white [&.active]:text-white"
          >
            Giới thiệu
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/projects" 
            className="relative group transition-colors duration-300 hover:text-white [&.active]:text-white"
          >
            Dự án
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/contact" 
            className="relative group transition-colors duration-300 hover:text-white [&.active]:text-white"
          >
            Liên hệ
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Nút Hotline - Thiết kế viền trắng sang trọng */}
        <a 
          href="tel:0792515151" 
          className="hidden lg:block border-2 border-white/40 text-white px-7 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1e3a8a] hover:border-white transition-all duration-500 shadow-lg shadow-black/20"
        >
          Hotline: 0792.51.51.51
        </a>
      </nav>
    </header>
  )
}