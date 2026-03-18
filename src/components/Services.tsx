import { Factory, DraftingCompass, Building2, Briefcase } from "lucide-react"

const services = [
  { title: "Tư vấn Xây dựng", icon: <DraftingCompass />, desc: "Lập dự án và quản lý chi phí tối ưu." },
  { title: "Kết cấu Thép", icon: <Factory />, desc: "Thiết kế, sản xuất khung thép tiền chế." },
  { title: "Thi công Trọn gói", icon: <Building2 />, desc: "Tổng thầu thi công từ móng đến hoàn thiện." },
  { title: "Tư vấn Kinh doanh", icon: <Briefcase />, desc: "Chiến lược vận hành hiệu quả cho doanh nghiệp." },
]

export default function Services() {
  return (
    <section className="py-24 bg-white/30">
      <div className="page-wrap">
        <div className="text-center mb-16">
          <h2 className="display-title text-4xl mb-4 text-sea-ink">Dịch vụ cốt lõi</h2>
          <div className="w-20 h-1 bg-lagoon mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div key={index} className="feature-card p-8 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-sand rounded-2xl flex items-center justify-center text-lagoon-deep mb-6 group-hover:bg-lagoon group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-sea-ink">{item.title}</h3>
              <p className="text-sm text-sea-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}