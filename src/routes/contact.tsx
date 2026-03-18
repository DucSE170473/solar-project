import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react"

// 1. Định nghĩa component trước
function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
       {/* Toàn bộ code UI của bạn giữ nguyên ở đây */}
       {/* ... */}
    </div>
  )
}

// 2. Đăng ký route sau
export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

// Component phụ
function ContactInfoItem({ icon, title, content, link }: any) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        {link ? (
          <a href={link} className="text-lg font-bold text-slate-800 hover:text-yellow-600 transition-colors">{content}</a>
        ) : (
          <p className="text-lg font-bold text-slate-800">{content}</p>
        )}
      </div>
    </div>
  )
}