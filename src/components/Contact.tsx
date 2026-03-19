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

                <div className="relative p-10 rounded-3xl overflow-hidden group">
                    {/* 1. Lớp ảnh nền chìm phía sau (Background Overlay) */}
                    <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <img
                            src="/public/steel-5.jpg" // Hãy thay bằng đường dẫn ảnh thật của bạn (ví dụ: cận cảnh mối nối thép, bản vẽ kỹ thuật...)
                            alt="TTB Corp Connection Background"
                            className="w-full h-full object-cover brightness-75" // grayscale giúp ảnh hòa vào nền, không bị phô
                        />
                    </div>

                    {/* 2. Lớp phủ gradient nhẹ để đảm bảo chữ luôn rõ ràng */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                    {/* 3. Nội dung chữ (giữ nguyên z-10 để nổi lên trên cùng) */}
                    <div className="relative z-10 flex flex-col gap-3">
                        {/* Phần 1: Dòng định danh nhỏ, chuyên nghiệp */}
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-amber-500"></div>
                            <span className="text-[#3333CC] font-black uppercase tracking-[0.4em] text-[10px]">
                                Kết nối cùng TTB CORP
                            </span>
                        </div>

                        {/* Phần 2: Tiêu đề chính khổng lồ, sắc nét */}
                        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase text-slate-900 shadow-sm">
                            Liên hệ <br />
                            <span className="relative inline-block text-[#3333CC] mt-2">
                                với chúng tôi
                                {/* Hiệu ứng gạch chân dạng khối kỹ thuật */}
                                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#3333CC]/10"></span>
                                <span className="absolute -bottom-2 left-0 w-1/4 h-[6px] bg-amber-500"></span>
                            </span>
                        </h1>

                        {/* Phần 3: Mô tả ngắn (Optional) */}
                        <p className="text-slate-400 font-medium text-sm mt-4 max-w-xs uppercase tracking-widest leading-relaxed">
                            Giải pháp kết cấu thép & PCCC <br /> tiêu chuẩn quốc tế.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* CỘT 1: FORM NHẬN THÔNG BÁO / TƯ VẤN */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
                        <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                            Gửi yêu cầu tư vấn
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                {/* Họ và tên */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 text-black font-semibold focus:bg-white focus:ring-2 focus:ring-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                {/* Số điện thoại */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="0792.51.51.51"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 text-black font-semibold focus:bg-white focus:ring-2 focus:ring-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="nguyenvana@email.com"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 text-black font-semibold focus:bg-white focus:ring-2 focus:ring-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Lời nhắn */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">
                                    Lời nhắn chi tiết dự án
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Ví dụ: Cần báo giá nhà xưởng 1000m2 tại Bình Dương..."
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 text-black font-semibold focus:bg-white focus:ring-2 focus:ring-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                ></textarea>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#3333CC] to-[#4D4DFF] text-white  py-5 
  rounded-2xl 
  font-black 
  flex items-center justify-center gap-3 
  transition-all duration-500 
  hover:from-amber-500 hover:to-amber-600 
  hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.5)] 
  hover:-translate-y-1 
  active:scale-95
  group
">
                                {/* Chữ được bọc để dễ kiểm soát hiệu ứng hover */}
                                <span className="relative z-10">GỬI YÊU CẦU TƯ VẤN</span>

                                <div className="bg-white/20 p-1.5 rounded-lg group-hover:bg-white/40 transition-colors">
                                    <Send
                                        size={18}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                    />
                                </div>
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