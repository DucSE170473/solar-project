import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="page-wrap grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="rise-in">
          <span className="island-kicker mb-4 inline-block text-lagoon">
            Giải pháp thép tiền chế số 1
          </span>
          <h1 className="display-title text-5xl lg:text-7xl mb-6 leading-tight">
            Vững nền tảng <br />
            <span className="text-lagoon">Sáng tương lai</span>
          </h1>
          <p className="text-lg text-sea-ink-soft mb-10 max-w-lg">
            TTB-Corp chuyên tư vấn, thiết kế và thi công kết cấu thép nhà xưởng đạt chuẩn quốc tế. Chúng tôi đồng hành cùng sự phát triển của doanh nghiệp bạn.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lagoon hover:bg-lagoon-deep text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center gap-2">
              Bắt đầu dự án <ArrowRight size={20} />
            </button>
            <button className="island-shell px-8 py-4 rounded-xl font-bold text-sea-ink">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
        
        <div className="relative hidden lg:block rise-in" style={{ animationDelay: '200ms' }}>
          <div className="island-shell p-4 rotate-2 transform transition hover:rotate-0 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000" 
              alt="Steel Structure" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}