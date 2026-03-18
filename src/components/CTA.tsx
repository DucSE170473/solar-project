import { ArrowRight, Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-blue-900 px-8 py-16 md:px-16 text-center text-white">
          {/* Trang trí nền */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase">
              Bắt đầu dự án công nghiệp của bạn ngay hôm nay
            </h2>
            <p className="text-blue-100 text-lg opacity-90">
              Liên hệ hotline để nhận tư vấn giải pháp tối ưu và khảo sát mặt bằng miễn phí 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:0792515151" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl">
                <Phone size={20} /> 0792.51.51.51
              </a>
              <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all">
                GỬI YÊU CẦU <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}