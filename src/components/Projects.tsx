import { useState } from 'react'
import { MapPin, Zap, Maximize2, Plus, Lock } from 'lucide-react' // Thêm icon
import { useAuth } from '../hooks/useAuth' 

const projectData = [
  {
    id: 1,
    name: 'Hệ Thống Điện Mặt Trời Mái Nhà Xưởng Mỏng',
    type: 'Mái tôn công nghiệp',
    location: 'KCN Tân Bình, TP. HCM',
    img: 'prj-1.jpg',
    capacity: '500 kWp',
    feature: 'Không khoan đục mái'
  },
  {
    id: 2,
    name: 'Ứng Dụng Pin Dẻo Trên Bề Mặt Mái Vòm Cong',
    type: 'Bề mặt cong phức tạp',
    location: 'Trung tâm Triển lãm, Đà Nẵng',
    img: 'prj-2.jpg',
    capacity: '150 kWp',
    feature: 'Uốn cong 30 độ'
  },
  {
    id: 3,
    name: 'Giải Pháp Năng Lượng Cho Xe RV & Du Thuyền',
    type: 'Giao thông vận tải',
    location: 'Cảng du thuyền Tuần Châu',
    img: 'prj-3.jpg',
    capacity: '2 kWp',
    feature: 'Siêu nhẹ 8.1kg'
  },
  {
    id: 4,
    name: 'Lắp Đặt Pin Mặt Trời Trên Mái Ngói Dân Dụng',
    type: 'Mái ngói & Biệt thự',
    location: 'Khu biệt thự Vinhome, Hà Nội',
    img: 'prj-4.webp',
    capacity: '15 kWp',
    feature: 'Thẩm mỹ cao'
  },
  {
    id: 5,
    name: 'Hệ Thống Điện Mặt Trời Cho Trạm Sạc Xe Điện',
    type: 'Tiện ích công cộng',
    location: 'Quận 2, TP. HCM',
    img: 'prj-5.png',
    capacity: '50 kWp',
    feature: 'Tích hợp thông minh'
  },
  {
    id: 6,
    name: 'Dự Án Pin Mặt Trời Tích Hợp Mặt Dựng Tòa Nhà',
    type: 'Bề mặt cong phức tạp',
    location: 'Tòa nhà Văn phòng, Bình Dương',
    img: 'prj-6.webp',
    capacity: '80 kWp',
    feature: 'Chống nóng & Phát điện'
  },
]

export function SolarProjects() {
  const [filter, setFilter] = useState('Tất cả')
  const { user, role } = useAuth() // Lấy thông tin user và role từ Context

  // Kiểm tra quyền: admin và marketing được phép chỉnh sửa
  const canEdit = user && (role === 'admin' || role === 'marketing')

  const categories = ['Tất cả', 'Mái tôn công nghiệp', 'Bề mặt cong phức tạp', 'Mái ngói & Biệt thự', 'Giao thông vận tải']

  const filtered = filter === 'Tất cả'
    ? projectData
    : projectData.filter(p => p.type === filter)

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-10 md:mb-16 flex flex-col items-start justify-between gap-6 md:gap-8 border-l-4 border-emerald-500 pl-4 md:pl-6 md:flex-row md:items-end">
          <div className="space-y-1 md:space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              {user ? `Xin chào, ${user.displayName}` : 'Ứng dụng thực tế'}
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-[0.85] tracking-tighter uppercase text-slate-900">
              <span className="block text-lg md:text-2xl lg:text-3xl font-light tracking-[0.2em] text-slate-400 mb-1 italic">
                Pin mặt trời ở mọi nơi
              </span>
              Dự án <br className="hidden md:block" /> tiêu biểu
            </h2>
          </div>

          <div className="flex flex-col gap-4 items-end">
             {/* NÚT THÊM DỰ ÁN: Chỉ hiển thị cho Admin/Marketing */}
             {canEdit && (
              <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl">
                <Plus size={16} /> Thêm dự án mới
              </button>
            )}

            {/* Filter */}
            <div className="flex w-full overflow-x-auto pb-4 no-scrollbar md:w-auto md:flex-wrap md:pb-0 gap-2 scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap rounded-xl px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 shrink-0 ${
                    filter === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                    : 'bg-slate-50 text-slate-500 hover:bg-emerald-50 border border-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-slate-50 hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative"
            >
              {/* Nút chỉnh sửa nhanh cho Admin (nếu cần) */}
              {canEdit && (
                <button className="absolute top-4 right-4 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-md text-slate-600 hover:text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Lock size={14} className="mb-0.5" />
                   <span className="text-[8px] font-bold block">EDIT</span>
                </button>
              )}

              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="w-fit rounded-full bg-emerald-600/90 px-4 py-1.5 text-[9px] font-black uppercase text-white backdrop-blur-md">
                    {item.type}
                  </span>
                  <span className="w-fit rounded-full bg-white/90 px-4 py-1.5 text-[9px] font-black uppercase text-emerald-700 backdrop-blur-md border border-emerald-100 shadow-sm">
                    {item.feature}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-2 text-emerald-500 mb-3">
                    <Zap size={16} fill="currentColor" />
                    <span className="text-xs font-black uppercase tracking-widest">Công suất: {item.capacity}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight line-clamp-2 mb-6">
                  {item.name}
                </h3>

                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center text-xs font-bold text-slate-500">
                    <MapPin size={16} className="mr-2 text-emerald-500" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                  <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}