import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { useRef } from "react"

export default function Contact() {
    // 1. Khởi tạo Refs để lấy dữ liệu mà không gây re-render (Chống lag 100%)
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Lấy giá trị trực tiếp từ các ô input
        const formData = {
            name: nameRef.current?.value,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }

        console.log("Dữ liệu gửi đi:", formData)
        alert("Cảm ơn bạn! Thành Công Group sẽ liên hệ lại sớm nhất.")
        
        // Reset form sau khi gửi thành công
        if (e.currentTarget instanceof HTMLFormElement) {
            e.currentTarget.reset();
        }
    }

    return (
        <section className="py-10 md:py-20 bg-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* HEADER BANNER: Giữ nguyên vẻ sang trọng trên mọi thiết bị */}
                <div className="relative p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden group mb-12 shadow-xl">
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                        <img
                            src="/public/steel-5.jpg" 
                            alt="TTB Corp Background"
                            className="w-full h-full object-cover brightness-50"
                        />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[2px] w-8 md:w-16 bg-amber-500"></div>
                            <span className="text-[#3333CC] font-extrabold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[11px]">
                                Kết nối cùng TTB CORP
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-8xl font-black leading-tight md:leading-[0.9] tracking-tighter uppercase text-white drop-shadow-2xl">
                            Liên hệ <br />
                            <span className="relative inline-block text-[#4D4DFF] mt-2">
                                với chúng tôi
                                <span className="absolute -bottom-2 left-0 w-full h-[4px] md:h-[8px] bg-white/10"></span>
                                <span className="absolute -bottom-2 left-0 w-1/3 h-[4px] md:h-[8px] bg-amber-500"></span>
                            </span>
                        </h1>

                        <p className="text-slate-300 font-medium text-[10px] md:text-sm mt-4 max-w-[250px] md:max-w-md uppercase tracking-[0.15em] leading-relaxed opacity-80">
                            Giải pháp kết cấu thép & PCCC <br /> tiêu chuẩn quốc tế cho doanh nghiệp.
                        </p>
                    </div>
                </div>

                {/* GRID CONTENT: Tự động chuyển đổi từ 1 cột (Mobile) sang 2 cột (Laptop) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* CỘT 1: FORM TƯ VẤN (Sử dụng Refs - Gõ phím cực mượt) */}
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 order-2 lg:order-1">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                            Gửi yêu cầu tư vấn
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">Họ và tên</label>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-black font-semibold focus:bg-white focus:ring-4 focus:ring-[#3333CC]/10 focus:border-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">Số điện thoại</label>
                                    <input
                                        ref={phoneRef}
                                        type="tel"
                                        placeholder="0792.51.51.51"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-black font-semibold focus:bg-white focus:ring-4 focus:ring-[#3333CC]/10 focus:border-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">Email liên hệ</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="thanhcong@email.com"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-black font-semibold focus:bg-white focus:ring-4 focus:ring-[#3333CC]/10 focus:border-[#3333CC] outline-none transition-all placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-[#3333CC] tracking-widest ml-1">Chi tiết dự án</label>
                                <textarea
                                    ref={messageRef}
                                    rows={4}
                                    placeholder="Mô tả ngắn gọn yêu cầu của bạn..."
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-black font-semibold focus:bg-white focus:ring-4 focus:ring-[#3333CC]/10 focus:border-[#3333CC] outline-none transition-all placeholder:text-slate-400 resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-[#3333CC] to-[#4D4DFF] text-white py-5 rounded-[1.25rem] font-black flex items-center justify-center gap-4 transition-all duration-500 hover:from-amber-500 hover:to-amber-600 hover:-translate-y-1 shadow-lg group">
                                <span className="tracking-widest">GỬI YÊU CẦU NGAY</span>
                                <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/40 transition-colors">
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </button>
                        </form>
                    </div>

                    {/* CỘT 2: THÔNG TIN LIÊN HỆ & BẢN ĐỒ */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { icon: <MapPin size={24} />, label: "Địa chỉ trụ sở", content: "166/12 Huỳnh Văn Nghệ, P. Tân Sơn, TP. HCM" },
                                { icon: <Phone size={24} />, label: "Hotline hỗ trợ", content: "0792.51.51.51", highlight: true },
                                { icon: <Mail size={24} />, label: "Email công ty", content: "thanhcongtechco@gmail.com" },
                                { icon: <Clock size={24} />, label: "Giờ làm việc", content: "Thứ 2 - Thứ 7: 08:00 - 17:30" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#3333CC]/20 transition-all group">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#3333CC] flex items-center justify-center shrink-0 group-hover:bg-[#3333CC] group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{item.label}</p>
                                        <p className={`text-sm font-bold mt-1 leading-snug ${item.highlight ? 'text-[#3333CC] font-black text-base' : 'text-slate-700'}`}>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* BẢN ĐỒ: Bo góc cực lớn đồng nhất với thiết kế */}
                        <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/3] md:h-[400px]">
                            <iframe
                               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.966965610815!2d106.6348!3d10.8143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752943194a5005%3A0x6739665f8a0a91e3!2zMTY2LzEyIEh14buzbmggVsSDbiBOZ2jhu4csIFBoxrDhu51uZyAxNSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                                className="w-full h-full border-0 grayscale-[0.3] contrast-125"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}