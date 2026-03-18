import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic gửi form xử lý tại đây
    alert("Cảm ơn bạn! Thành Công Group sẽ liên hệ lại sớm nhất.")
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề trang */}
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-4xl font-black text-blue-900 uppercase tracking-tight">Liên hệ với chúng tôi</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Sẵn sàng tư vấn giải pháp Kết cấu thép, PCCC và Năng lượng tái tạo tối ưu nhất cho dự án của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* CỘT 1: FORM NHẬN THÔNG BÁO / TƯ VẤN */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Gửi yêu cầu tư vấn</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400 ml-1">Họ và tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400 ml-1">Số điện thoại</label>
                  <input type="tel" placeholder="0792..." className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 ml-1">Lĩnh vực quan tâm</label>
                <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all">
                  <option>Kết cấu thép nhà xưởng</option>
                  <option>Hệ thống PCCC</option>
                  <option>Điện mặt trời (Solar)</option>
                  <option>Khác</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 ml-1">Lời nhắn chi tiết</label>
                <textarea rows={4} placeholder="Mô tả sơ bộ về dự án của bạn..." className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all"></textarea>
              </div>

              <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 uppercase tracking-widest">
                Gửi yêu cầu ngay <Send size={18} />
              </button>
            </form>
          </div>

          {/* CỘT 2: THÔNG TIN VÀ BẢN ĐỒ */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Địa chỉ</p>
                  <p className="text-sm font-bold text-slate-700 leading-snug mt-1">
                    166/12 Huỳnh Văn Nghệ, P. Tân Sơn, TP. HCM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Hotline 24/7</p>
                  <p className="text-sm font-black text-blue-900 mt-1 uppercase tracking-tighter">
                    0792.51.51.51
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email</p>
                  <p className="text-sm font-bold text-slate-700 mt-1 break-all">
                    thanhcongtechco@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Làm việc</p>
                  <p className="text-sm font-bold text-slate-700 mt-1">
                    Thứ 2 - Thứ 7: 08:00 - 17:30
                  </p>
                </div>
              </div>
            </div>

            {/* BẢN ĐỒ TÍCH HỢP (IFRAME) */}
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-video md:aspect-auto md:h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.966965610815!2d106.6348!3d10.8143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752943194a5005%3A0x6739665f8a0a91e3!2zMTY2LzEyIEh14buzbmggVsSDbiBOZ2jhu4csIFBoxrDhu51uZyAxNSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s" 
                className="w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}