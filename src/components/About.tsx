export default function About() {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="page-wrap grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="island-shell p-8 text-center mt-8 border border-slate-100 shadow-sm rounded-2xl">
            <p className="text-4xl font-black text-yellow-600">10+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Năm kinh nghiệm</p>
          </div>
          <div className="island-shell p-8 text-center border border-slate-100 shadow-sm rounded-2xl">
            <p className="text-4xl font-black text-yellow-600">500+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Dự án</p>
          </div>
        </div>
        
        <div>
          <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Về TTB-Corp</span>
          <h2 className="text-4xl font-black mt-4 mb-6 text-slate-900 leading-tight">Uy tín khẳng định qua từng công trình</h2>
          <p className="text-slate-600 mb-8 leading-loose">
            Chúng tôi không chỉ xây dựng nhà xưởng, chúng tôi xây dựng niềm tin. Với quy trình kiểm soát chất lượng khắt khe và đội ngũ kỹ sư tâm huyết.
          </p>
          <ul className="space-y-4 font-bold text-slate-800">
            <li className="flex items-center gap-3 text-sm">✓ Quy trình sản xuất chuẩn ISO</li>
            <li className="flex items-center gap-3 text-sm">✓ Đảm bảo tiến độ thi công</li>
            <li className="flex items-center gap-3 text-sm">✓ Chi phí cạnh tranh nhất thị trường</li>
          </ul>
        </div>
      </div>
    </section>
  )
}