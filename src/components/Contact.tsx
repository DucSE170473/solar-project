import { Mail, Phone, MapPin, Send, Clock, Globe, Zap } from "lucide-react"
import { useRef } from "react"

export default function SolarContact() {
    // Refs duy trì hiệu suất cao, không gây re-render
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formData = {
            name: nameRef.current?.value,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }

        console.log("Dữ liệu gửi đi:", formData)
        alert("Cảm ơn bạn! Đội ngũ kỹ thuật Zonprosolar sẽ liên hệ tư vấn giải pháp pin bán dẫn trong vòng 24h.")

        if (e.currentTarget instanceof HTMLFormElement) {
            e.currentTarget.reset();
        }
    }

    return (
        <section className="py-10 md:py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* HEADER BANNER: Phong cách Năng lượng sạch */}
                <div className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group mb-16 shadow-[0_20px_50px_rgba(16,185,129,0.15)] bg-emerald-950">
                    {/* Background Pattern Năng lượng */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="solar-3.jpg" // Thay bằng ảnh cánh đồng pin mặt trời
                            alt="Zonprosolar Energy"
                            className="w-full h-full object-cover mix-blend-overlay scale-105 group-hover:scale-110 transition-transform duration-[3s]"
                        />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-950 via-emerald-900/60 to-transparent"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        {/* Vế trái: Nội dung văn bản (Giữ nguyên cấu trúc của bạn) */}
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-12 md:w-20 bg-emerald-400"></div>
                                <span className="text-emerald-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                                    Đồng hành cùng TTCO Technology
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-8xl font-black leading-[0.95] tracking-tighter uppercase text-white text-nowrap">
                                Khởi tạo <br />
                                <span className="relative inline-block text-emerald-400 italic mt-2">
                                    Sáng xanh
                                    <span className="absolute -bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-white/5"></span>
                                    <span className="absolute -bottom-2 left-0 w-2/3 h-[4px] md:h-[6px] bg-emerald-500 rounded-full"></span>
                                </span>
                            </h1>

                            <p className="text-emerald-100/70 font-medium text-xs md:text-lg mt-2 max-w-md leading-relaxed border-l-2 border-emerald-500/30 pl-4">
                                Giải pháp pin mặt trời bán dẫn siêu nhẹ 8.1kg. <br className="hidden md:block" />
                                Tiết kiệm chi phí - Bảo vệ mái công trình.
                            </p>
                        </div>

                        {/* Vế phải: Khu vực 2 mã QR - Thiết kế theo phong cách Solar Tech */}
                        <div className="flex flex-row gap-4 md:gap-6 bg-emerald-950/20 backdrop-blur-xl p-5 md:p-7 rounded-[3rem] border border-emerald-500/10 shadow-[0_20px_50px_rgba(16,185,129,0.1)] relative group overflow-hidden">
                            {/* Hiệu ứng tia sáng chạy ngang qua nền */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none"></div>

                            {/* QR Công ty (Zalo OA) */}
                            <div className="flex flex-col items-center gap-4 group/qr relative z-10">
                                <div className="relative p-2.5 bg-white rounded-[1.5rem] shadow-xl transition-all duration-500 group-hover/qr:scale-110 group-hover/qr:-rotate-2 border-2 border-transparent">
                                    <img
                                        src="/solar-qr.jpg"
                                        alt="QR Zalo Công ty"
                                        className="w-20 h-20 md:w-28 md:h-28 object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-[8px] md:text-[9px] font-black text-emerald-500/50 uppercase tracking-[0.2em]">Zalo Official</p>
                                    <p className="text-[10px] md:text-xs font-bold text-white uppercase mt-1 tracking-widest">TTCO Solar</p>
                                </div>
                            </div>

                            {/* Thanh ngăn cách công nghệ */}
                            <div className="w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent self-stretch my-2"></div>

                            {/* QR Sếp (Hotline Lãnh đạo) */}
                            <div className="flex flex-col items-center gap-4 group/qr relative z-10">
                                <div className="relative p-2.5 bg-white rounded-[1.5rem] shadow-xl transition-all duration-500 group-hover/qr:scale-110 group-hover/qr:rotate-2 border-2 border-emerald-400">
                                    <img
                                        src="/tuan.jpg"
                                        alt="QR Zalo Mr. Tuấn"
                                        className="w-20 h-20 md:w-28 md:h-28 object-contain"
                                    />
                                    {/* Badge Hotline nổi bật */}
                                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full animate-pulse">
                                        <Zap size={10} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-[8px] md:text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em]">Hotline 24/7</p>
                                    <p className="text-[10px] md:text-xs font-bold text-white uppercase mt-1 tracking-widest">Mr. Tuấn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Sun Element */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-[60px] animate-pulse"></div>
                </div>

                {/* GRID CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">

                    {/* CỘT 1: FORM TƯ VẤN (Giao diện hiện đại, tối giản) */}
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm order-2 lg:order-1 relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                            <Globe size={24} />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                            Yêu cầu tư vấn kỹ thuật
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group space-y-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Danh tính</label>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Số điện thoại</label>
                                    <input
                                        ref={phoneRef}
                                        type="tel"
                                        placeholder="0792.51.51.51"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Địa chỉ Email</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="thanhcongtechco@gmail.com"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-sm"
                                    required
                                />
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Diện tích lắp đặt (Dự kiến)</label>
                                <textarea
                                    ref={messageRef}
                                    rows={4}
                                    placeholder="Ví dụ: Lắp đặt 500m2 mái tôn xưởng mỏng tại Bình Dương..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-sm resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-4 transition-all duration-300 hover:bg-emerald-700 hover:-translate-y-1 shadow-xl shadow-emerald-100 group">
                                <span className="tracking-widest uppercase text-sm">Gửi thông tin tư vấn</span>
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* CỘT 2: THÔNG TIN CHI TIẾT */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <MapPin size={22} />, label: "Văn phòng TP. HCM", content: "166 Huỳnh Văn Nghệ, P. Tân Sơn, Q. Tân Bình" },
                                { icon: <Phone size={22} />, label: "Hotline Tư vấn 24/7", content: "0792.51.51.51", highlight: true },
                                { icon: <Mail size={22} />, label: "Hỗ trợ kỹ thuật", content: "thanhcongtechco@gmail.com" },
                                { icon: <Clock size={22} />, label: "Thời gian làm việc", content: "Thứ 2 - Thứ 7 (08:00 - 17:30)" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-emerald-200 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                                    <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">{item.label}</p>
                                        <p className={`text-sm font-bold mt-2 leading-snug ${item.highlight ? 'text-emerald-600 text-lg' : 'text-slate-700'}`}>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* MAP - Bo góc mượt mà */}
                        <div className="rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner h-[300px] md:h-[350px] relative">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-emerald-100 shadow-sm text-[10px] font-bold text-emerald-700 flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                                Trụ sở Thành Công TTCo Group
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.948218652614!2d106.6375!3d10.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294336021a81%3A0x6b14d2e1329c298!2s166%20Hu%E1%BB%B3nh%20V%C4%83n%20Ngh%E1%BB%87!5e0!3m2!1svi!2svn!4v1620000000000!5m2!1svi!2svn"
                                className="w-full h-full border-0 contrast-[1.1] saturate-[1.2]"
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