import { CheckCircle2, Award, Building2 } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Họa tiết chìm tạo độ sâu cho nền */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 -skew-x-12 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative">
        
        {/* Khối Hình ảnh & Thông số (Bên trái) */}
        <div className="relative">
          {/* Ảnh 1: Xưởng gia công thép - Thể hiện năng lực sản xuất */}
          <div className="relative z-10 w-4/5 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800" 
              alt="Nhà máy kết cấu thép TTB" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ảnh 2: Công trình hoàn thiện - Thể hiện thành quả */}
          <div className="absolute -bottom-10 -right-4 z-20 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800" 
              alt="Dự án thực tế TTB CORP" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge nổi bật - Chữ ký thương hiệu */}
          <div className="absolute top-10 -left-10 z-30 bg-[#1e3a8a] text-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
            <Award size={32} className="text-amber-400 mb-2" />
            <p className="text-2xl font-black">TOP 10</p>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Nhà thầu uy tín</p>
          </div>
        </div>

        {/* Nội dung (Bên phải) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#1e3a8a]"></div>
              <span className="text-[#1e3a8a] font-black uppercase tracking-[0.4em] text-[10px]">
                Hành trình vươn tầm
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Uy tín khẳng định qua <br /> 
              <span className="text-[#1e3a8a] italic">chất lượng công trình</span>
            </h2>
            
            <p className="text-[#1e3a8a] text-xl font-black border-l-4 border-amber-500 pl-4">
              Công ty Cổ Phần Thành Công TTB CORP
            </p>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Với hơn một thập kỷ tận tâm, chúng tôi không chỉ xây dựng những khung thép vững chãi, mà còn xây dựng **niềm tin tuyệt đối** cho chủ đầu tư thông qua giải pháp tối ưu công năng và chi phí.
            </p>
          </div>

          {/* Các đặc điểm - Style chuyên nghiệp */}
          <div className="grid gap-6">
            {[
              { title: 'Quy trình sản xuất chuẩn ISO', desc: 'Kiểm soát chặt chẽ từ phôi thép đầu vào.' },
              { title: 'Tiến độ thi công thần tốc', desc: 'Cam kết bàn giao đúng hạn hoặc sớm hơn.' }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all duration-300">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chỉ số kinh nghiệm - Style tinh tế hơn */}
          <div className="pt-8 border-t border-slate-200 flex gap-12">
            <div>
              <p className="text-4xl font-black text-[#1e3a8a]">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#1e3a8a]">500+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Dự án thép</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}