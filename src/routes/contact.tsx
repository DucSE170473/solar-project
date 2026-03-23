import { createFileRoute } from '@tanstack/react-router'
import SolarPageHeader from '../components/PageHeader'
import SolarContactDetail from '../components/Contact' // Component Contact đã được bạn tối ưu
import { Headset, Mail, MapPin, MessageSquare } from "lucide-react"

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Trang Liên Hệ - Tone Emerald Deep */}
      <SolarPageHeader 
        title="Liên hệ tư vấn"
        subtitle="Đội ngũ kỹ sư của TTCO sẵn sàng hỗ trợ giải đáp mọi thắc mắc về công nghệ pin bán dẫn siêu nhẹ 2025."
        breadcrumb="Liên hệ"
        bgImage="public/ct-1.jpg" 
      />

      {/* 2. Khối thông tin kết nối nhanh (Quick Connect) */}
      <div className="-mt-16 md:-mt-24 relative z-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Hotline - Ưu tiên số 1 */}
            <a href="tel:0792515151" className="bg-white p-6 rounded-[2rem] shadow-xl border border-emerald-50 flex flex-col items-center text-center group hover:bg-emerald-600 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all">
                <Headset size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-100">Hotline 24/7</p>
              <p className="text-lg font-black text-emerald-950 group-hover:text-white">0792.51.51.51</p>
            </a>

            {/* Email */}
            <a href="mailto:thanhcongtechco@gmail.com" className="bg-white p-6 rounded-[2rem] shadow-xl border border-emerald-50 flex flex-col items-center text-center group hover:bg-emerald-600 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all">
                <Mail size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-100">Email báo giá</p>
              <p className="text-sm font-bold text-emerald-950 group-hover:text-white break-all">thanhcongtechco@gmail.com</p>
            </a>

            {/* Văn phòng */}
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-emerald-50 flex flex-col items-center text-center group hover:bg-emerald-600 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all">
                <MapPin size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-100">Địa chỉ VP</p>
              <p className="text-sm font-bold text-emerald-950 group-hover:text-white">Tân Bình, TP. HCM</p>
            </div>

            {/* Zalo / Social */}
            <a href="https://zalo.me/0792515151" target="_blank" className="bg-white p-6 rounded-[2rem] shadow-xl border border-emerald-50 flex flex-col items-center text-center group hover:bg-emerald-600 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all">
                <MessageSquare size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-100">Zalo OA</p>
              <p className="text-lg font-black text-emerald-950 group-hover:text-white">Thành Công Group</p>
            </a>

          </div>
        </div>
      </div>

      {/* 3. Component Form Liên Hệ & Map */}
      <div className="pb-20">
        <SolarContactDetail />
      </div>

      {/* 4. Section: Cam kết phản hồi (Brand Promise) */}
      <section className="bg-zinc-950 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h3 className="text-emerald-400 font-black text-2xl md:text-3xl uppercase mb-4 tracking-tighter">
            Cam kết phản hồi trong 2 giờ làm việc
          </h3>
          <p className="text-zinc-400 font-medium leading-relaxed">
            Mọi yêu cầu báo giá kỹ thuật cho pin Zonpro ZP-DB7A đều được đội ngũ kỹ sư của TTCO xử lý ưu tiên để đảm bảo tiến độ thi công của quý khách.
          </p>
        </div>
      </section>
    </main>
  )
}