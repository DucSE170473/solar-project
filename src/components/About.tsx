export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 text-center bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-blue-900 transition-all duration-500">
            <p className="text-5xl font-black text-amber-600 group-hover:text-white transition-colors">10+</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-2 group-hover:text-blue-200 transition-colors">Năm kinh nghiệm</p>
          </div>
          <div className="p-10 text-center bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-blue-900 transition-all duration-500 mt-12">
            <p className="text-5xl font-black text-amber-600 group-hover:text-white transition-colors">500+</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-2 group-hover:text-blue-200 transition-colors">Dự án hoàn thành</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <span className="text-blue-700 font-bold uppercase tracking-[0.3em] text-xs">Về Thành Công Group</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Uy tín khẳng định qua <br/> chất lượng công trình</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Chúng tôi không chỉ thi công, chúng tôi cung cấp giải pháp. Với đội ngũ kỹ sư tâm huyết, Thành Công Group cam kết tối ưu hóa chi phí và tiến độ cho mọi khách hàng.
          </p>
          <div className="grid gap-4 pt-4">
            {['Quy trình sản xuất chuẩn ISO', 'Đảm bảo tuyệt đối tiến độ thi công', 'Hệ thống thiết bị hiện đại'].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold text-slate-800">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}