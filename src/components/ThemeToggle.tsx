import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor, Zap } from 'lucide-react'

type ThemeMode = 'light' | 'dark' | 'auto'

export default function SolarThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto')
  const [mounted, setMounted] = useState(false)

  // Đảm bảo component chỉ render icon sau khi đã mount ở client để tránh lỗi Hydration
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as ThemeMode
    const initialMode = stored || 'auto'
    setMode(initialMode)
    applyTheme(initialMode)
  }, [])

  const applyTheme = (targetMode: ThemeMode) => {
    const root = window.document.documentElement
    const isDark = targetMode === 'dark' || 
      (targetMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
    
    // Cập nhật biến CSS Brand theo theme
    if (isDark) {
      root.style.setProperty('--brand-primary', '#064e3b') // emerald-900
      root.style.setProperty('--brand-surface', '#020617') // slate-950
    } else {
      root.style.setProperty('--brand-primary', '#10b981') // emerald-500
      root.style.setProperty('--brand-surface', '#ffffff')
    }
  }

  const toggleMode = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto']
    const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length]
    setMode(nextMode)
    applyTheme(nextMode)
    localStorage.setItem('theme', nextMode)
  }

  if (!mounted) return <div className="w-10 h-10" />

  return (
    <button
      onClick={toggleMode}
      className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-emerald-950/30 border border-zinc-200 dark:border-emerald-500/30 transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg overflow-hidden"
      aria-label="Toggle Energy Mode"
    >
      {/* Background Effect khi hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icons Container */}
      <div className="relative z-10">
        {mode === 'light' && (
          <Sun size={20} className="text-amber-500 animate-spin-slow" />
        )}
        {mode === 'dark' && (
          <Moon size={20} className="text-emerald-400 animate-pulse" />
        )}
        {mode === 'auto' && (
          <div className="relative">
            <Monitor size={20} className="text-zinc-500 dark:text-emerald-200" />
            <Zap size={10} className="absolute -top-1 -right-1 text-emerald-500 fill-emerald-500" />
          </div>
        )}
      </div>

      {/* Tooltip nhỏ báo trạng thái */}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 group-hover:-bottom-12 transition-all bg-emerald-600 text-white text-[9px] font-black py-1 px-2 rounded uppercase tracking-widest whitespace-nowrap">
        {mode === 'auto' ? 'Hệ thống' : mode === 'dark' ? 'Tiết kiệm' : 'Tối ưu'}
      </span>
    </button>
  )
}