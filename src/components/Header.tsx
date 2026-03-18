import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md px-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4">

        {/* Logo Section - Cập nhật TTB CORP */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="h-12 w-auto overflow-hidden">
            <img
              src="/ttb-white.jpg"
              alt="TTB CORP Logo"
              className="h-full w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-none border-l-2 border-slate-200 pl-3">
          
            <span className="text-blue-600 font-black text-[11px] tracking-[0.15em] uppercase mt-0.5">
              TTB CORP
            </span>
            <span className="text-slate-400 text-[9px] font-bold uppercase mt-1 hidden sm:block">
              Công ty Cổ Phần
            </span>
          </div>
        </Link>

        {/* Menu chính */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-slate-600">
          <Link to="/" className="hover:text-blue-900 transition [&.active]:text-blue-900">Trang chủ</Link>
          <Link to="/about" className="hover:text-blue-900 transition [&.active]:text-blue-900">Giới thiệu</Link>
          <Link to="/projects" className="hover:text-blue-900 transition [&.active]:text-blue-900">Dự án</Link>
          <Link to="/contact" className="hover:text-blue-900 transition [&.active]:text-blue-900">Liên hệ</Link>
        </div>

        {/* Nút Hotline */}
        <a
          href="tel:0792515151"
          className="hidden sm:block bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
        >
          0792.51.51.51
        </a>
      </nav>
    </header>
  )
}