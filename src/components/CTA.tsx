import { Mail, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 bg-yellow-500">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
          BẮT ĐẦU DỰ ÁN CỦA BẠN VỚI CHUYÊN GIA
        </h2>
        <p className="text-slate-800 text-lg mb-10 font-medium">
          Liên hệ ngay để nhận tư vấn giải pháp tối ưu chi phí và khảo sát mặt bằng miễn phí.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Số điện thoại hoặc Email của bạn" 
            className="px-6 py-4 rounded-md w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <button className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
            GỬI YÊU CẦU <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}