import { useState } from 'react'

// Dữ liệu dự án thực tế theo lĩnh vực của Thành Công Group
const projectData = [
  {
    id: 1,
    name: 'Nhà Máy Thép Tiền Chế TTC-01',
    type: 'Kết cấu thép',
    location: 'KCN Sóng Thần, Bình Dương',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    id: 2,
    name: 'Hệ Thống PCCC Tổ Hợp Văn Phòng',
    type: 'PCCC',
    location: 'Quận 1, TP. HCM',
    img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800',
  },
  {
    id: 3,
    name: 'Điện Mặt Trời Áp Mái Nhà Xưởng',
    type: 'Solar',
    location: 'Bến Lức, Long An',
    img: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=800',
  },
  {
    id: 4,
    name: 'Trung Tâm Logistics & Kho Vận',
    type: 'Kết cấu thép',
    location: 'Biên Hòa, Đồng Nai',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
  },
]

export function Projects() {
  const [filter, setFilter] = useState('Tất cả')
  const categories = ['Tất cả', 'Kết cấu thép', 'PCCC', 'Solar']

  const filtered = filter === 'Tất cả' 
    ? projectData 
    : projectData.filter(p => p.type === filter)

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header của Section */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b pb-8 md:flex-row">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900 uppercase tracking-tighter">
              Dự Án Thực Hiện
            </h1>
            <p className="mt-2 text-slate-500">
              Chất lượng khẳng định qua từng công trình trọng điểm.
            </p>
          </div>

          {/* Tab chọn nhanh (Filter) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-md px-4 py-2 text-sm font-bold transition-all ${
                  filter === cat
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lưới dự án (Grid) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Vùng ảnh */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded bg-blue-600/90 px-3 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Vùng nội dung */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {item.name}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <svg className="mr-1.5 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {item.location}
                  </div>
                  <button className="text-xs font-bold text-blue-800 underline uppercase tracking-wider">
                    Chi tiết
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