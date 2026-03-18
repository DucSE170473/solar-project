import { useState } from 'react'

// Dữ liệu dự án thực tế tập trung vào mảng Thép của TTB CORP
const projectData = [
  {
    id: 1,
    name: 'Nhà Máy Sản Xuất Linh Kiện TTB-01',
    type: 'Nhà xưởng tiền chế',
    location: 'KCN Sóng Thần, Bình Dương',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
    size: '5.000m2'
  },
  {
    id: 2,
    name: 'Trung Tâm Logistics & Kho Vận Thông Minh',
    type: 'Kho bãi & Logistics',
    location: 'Bến Lức, Long An',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
    size: '12.000m2'
  },
  {
    id: 3,
    name: 'Showroom Ô Tô & Trưng Bày Hệ Thép',
    type: 'Showroom & Dân dụng',
    location: 'Quận 7, TP. HCM',
    img: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=800',
    size: '3.000m2'
  },
  {
    id: 4,
    name: 'Tổ Hợp Nhà Xưởng Cho Thuê TTB-Central',
    type: 'Nhà xưởng tiền chế',
    location: 'KCN VSIP II, Bình Dương',
    img: 'https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=800',
    size: '8.500m2'
  },
  {
    id: 5,
    name: 'Cầu Trục & Kết Cấu Thép Hạng Nặng',
    type: 'Gia công cấu kiện',
    location: 'Nhà máy TTB CORP, TP. HCM',
    img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800',
    size: 'Theo thiết kế'
  },
  {
    id: 6,
    name: 'Mái Che Sân Vận Động Nhịp Lớn',
    type: 'Showroom & Dân dụng',
    location: 'TP. Thủ Đức, TP. HCM',
    img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800',
    size: '4.200m2'
  },
]

export function Projects() {
  const [filter, setFilter] = useState('Tất cả')

  // Các hạng mục chuyên sâu về thép
  const categories = ['Tất cả', 'Nhà xưởng tiền chế', 'Kho bãi & Logistics', 'Showroom & Dân dụng', 'Gia công cấu kiện']

  const filtered = filter === 'Tất cả'
    ? projectData
    : projectData.filter(p => p.type === filter)

  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header của Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 border-l-4 border-blue-900 pl-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Hồ sơ năng lực</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Dự án <span className="text-blue-900">Kết cấu thép</span> tiêu biểu
            </h2>
            <p className="text-slate-500 font-medium">
              Minh chứng cho chất lượng và tiến độ từ đội ngũ kỹ sư TTB CORP.
            </p>
          </div>

          {/* Tab chọn nhanh (Filter) - Tối ưu giao diện mượt hơn */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-105'
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lưới dự án (Grid) */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Vùng ảnh */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-lg bg-blue-900/90 px-3 py-1.5 text-[10px] font-black uppercase text-white backdrop-blur-md">
                    {item.type}
                  </span>
                  <span className="rounded-lg bg-amber-500 px-3 py-1.5 text-[10px] font-black uppercase text-slate-900">
                    {item.size}
                  </span>
                </div>
              </div>

              {/* Vùng nội dung */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-800 transition-colors leading-tight">
                  {item.name}
                </h3>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center text-sm font-bold text-slate-500">
                    <div className="mr-2 p-1.5 bg-blue-50 rounded-lg text-blue-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    {item.location}
                  </div>

                  <button className="group/btn flex items-center gap-1 text-[11px] font-black text-blue-900 uppercase tracking-widest hover:underline">
                    Xem dự án
                    <svg className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}