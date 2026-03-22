export default function Timeline() {
  const milestones = [
    { year: '2014', title: 'Thành Lập', desc: 'Khởi đầu với xưởng cơ khí nhỏ tại TP. HCM, tập trung vào gia công cấu kiện thép cơ bản.' },
    { year: '2017', title: 'Mở Rộng Quy Mô', desc: 'Đầu tư dây chuyền sản xuất tự động, bắt đầu tham gia các dự án nhà xưởng quy mô lớn.' },
    { year: '2020', title: 'Đột Phá Công Nghệ', desc: 'Áp dụng giải pháp thiết kế Tekla và ISO 9001 vào quy trình sản xuất.' },
    { year: '2024', title: 'Vươn Tầm Quốc Tế', desc: 'Trở thành đối tác chiến lược của nhiều tập đoàn đa quốc gia tại các KCN trọng điểm.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Lịch sử <span className="text-[var(--brand-primary)]">phát triển</span>
          </h2>
          <div className="w-20 h-1.5 bg-[var(--brand-accent)] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((ms, index) => (
              <div key={ms.year} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-[var(--brand-primary)] border-4 border-white shadow-[0_0_0_4px_rgba(30,58,138,0.1)] z-10 -translate-x-1/2 md:-translate-y-1/2 hidden md:block"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:px-12">
                  <div className={`p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 w-full relative group ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <span className="text-4xl md:text-5xl font-black text-[var(--brand-primary)]/10 group-hover:text-[var(--brand-primary)]/20 transition-colors absolute top-4 right-8">
                      {ms.year}
                    </span>
                    <h3 className="text-xl font-black text-[var(--brand-primary)] mb-2 uppercase">{ms.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{ms.desc}</p>
                  </div>
                </div>

                {/* Spacer for MD */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
