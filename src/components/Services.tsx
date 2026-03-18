import { Factory, DraftingCompass, Building2, ShieldCheck, ArrowUpRight } from "lucide-react"

const steelServices = [
  {
    title: "Tư vấn & Thiết kế",
    icon: <DraftingCompass size={32} />,
    desc: "Tính toán kết cấu tối ưu bằng phần mềm chuyên dụng (Tekla, SAP2000), đảm bảo an toàn và tiết kiệm chi phí vật tư.",
    accent: "bg-blue-50 text-blue-700"
  },
  {
    title: "Gia công Sản xuất",
    icon: <Factory size={32} />,
    desc: "Sản xuất cấu kiện thép tại xưởng với quy trình kiểm soát chất lượng nghiêm ngặt, đạt chuẩn độ bền cao cho mọi môi trường.",
    accent: "bg-amber-50 text-amber-700"
  },
  {
    title: "Lắp dựng Trọn gói",
    icon: <Building2 size={32} />,
    desc: "Đội ngũ kỹ sư và công nhân lành nghề triển khai lắp dựng tại công trường nhanh chóng, đảm bảo tuyệt đối an toàn lao động.",
    accent: "bg-green-50 text-green-700"
  },
  {
    title: "Bảo trì & Nâng cấp",
    icon: <ShieldCheck size={32} />,
    desc: "Dịch vụ bảo dưỡng định kỳ và cải tạo nhà xưởng, giúp kéo dài tuổi thọ công trình và tối ưu hóa công năng sử dụng.",
    accent: "bg-red-50 text-red-700"
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tiêu đề Section - Cập nhật Công ty Cổ Phần Thành Công TTB CORP */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Công ty Cổ Phần Thành Công
            </span>
            <span className="text-blue-900 font-black uppercase tracking-[0.2em] text-xl">
              TTB CORP
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Giải pháp <span className="text-blue-800">Kết cấu thép</span> Toàn diện
          </h2>

          <div className="w-24 h-2 bg-blue-900 mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* Lưới dịch vụ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steelServices.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon với hiệu ứng nền */}
              <div className={`w-20 h-20 ${item.accent} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>

              {/* Nội dung */}
              <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-blue-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-loose mb-6">
                {item.desc}
              </p>

              {/* Nút Xem thêm nhỏ */}
              <button className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-700 transition-colors">
                Chi tiết <ArrowUpRight size={14} />
              </button>

              {/* Hiệu ứng đường kẻ khi hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-800 transition-all duration-500 group-hover:w-full rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Thông tin thêm cho mảng kết cấu thép */}
        <div className="mt-20 p-8 rounded-3xl bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Bạn đang cần báo giá khung kèo thép?</h4>
            <p className="text-blue-100 opacity-80 text-sm">Chúng tôi hỗ trợ bóc tách bản vẽ và báo giá sơ bộ trong vòng 24h.</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-black transition-all flex items-center gap-2 shrink-0">
            NHẬN BÁO GIÁ NGAY
          </button>
        </div>
      </div>
    </section>
  )
}