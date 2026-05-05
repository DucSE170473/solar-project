import { Link, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Zap, QrCode, ChevronDown, User, LogOut, ShieldCheck } from 'lucide-react'
import { useAuth } from '../hooks/useAuth' // Hook lấy user/role
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

export default function SolarHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false) // Quản lý menu user

  const { user, role } = useAuth()
  const navigate = useNavigate()

  // Hàm xử lý Login
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Login Error:", error)
    }
  }

  // Hàm xử lý Logout
  const handleLogout = async () => {
    await signOut(auth)
    setShowUserMenu(false)
    navigate({ to: '/' })
  }

  // ... (giữ nguyên logic scrolled và hotlines)
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

        {/* 3. Auth & Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Nút QR */}
          <button onClick={() => setShowQR(true)} className={`hidden sm:block p-2 rounded-full transition-all ${scrolled ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-emerald-900'}`}>
            <QrCode size={18} />
          </button>

          {/* LOGIC AUTH: LOGIN HOẶC USER MENU */}
          {!user ? (
            <button 
              onClick={handleLogin}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all border ${
                scrolled 
                ? 'border-emerald-200 text-emerald-900 hover:bg-emerald-50' 
                : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <User size={14} />
              <span>Login</span>
            </button>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center gap-2 p-1 pr-3 rounded-full transition-all border ${
                  scrolled ? 'border-emerald-100 bg-emerald-50' : 'border-white/10 bg-white/5'
                }`}
              >
                <img src={user.photoURL || ''} alt="avatar" className="w-7 h-7 rounded-full border border-emerald-500" />
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className={`text-[9px] font-black uppercase tracking-tighter ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
                    {user.displayName?.split(' ').pop()}
                  </span>
                  <span className="text-[7px] font-bold text-emerald-500 uppercase">{role}</span>
                </div>
                <ChevronDown size={10} className={`transition-transform ${showUserMenu ? 'rotate-180' : ''} ${scrolled ? 'text-emerald-900' : 'text-white'}`} />
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-emerald-50 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-2 border-b border-emerald-50 mb-1">
                    <p className="text-[10px] font-black text-emerald-900 line-clamp-1 uppercase">{user.displayName}</p>
                    <p className="text-[8px] text-zinc-400 font-bold">{user.email}</p>
                  </div>
                  {(role === 'admin' || role === 'marketing') && (
                    <Link to="/projects" className="flex items-center gap-3 px-4 py-2 text-[10px] font-bold text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600 uppercase tracking-widest">
                      <ShieldCheck size={14} /> Quản trị dự án
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-[10px] font-bold text-red-500 hover:bg-red-50 uppercase tracking-widest"
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Nút báo giá */}
          <Link to="/contact" className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-[10px] tracking-[0.15em] uppercase transition-all active:scale-95 ${scrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-900 hover:bg-emerald-400 hover:text-white'}`}>
            <span>Báo giá</span>
            <Zap size={12} fill="currentColor" />
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-lg transition-colors z-[110] ${scrolled ? 'text-emerald-900 bg-emerald-50' : 'text-white bg-white/10'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ... (Giữ nguyên phần Mobile Menu Overlay và QR Modal) */}
      </nav>
    </header>
  )
}