import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { sanityClient } from '../config/sanity'
import SolarPageHeader from '../components/PageHeader'
import { Loader2, BatteryCharging, Zap, ShieldCheck, Plus } from 'lucide-react'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductsPage() {
  const { user } = useAuth()
  const isAdmin = user?.email === 'thanhcongttco@gmail.com'
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(createdAt desc)`
        const data = await sanityClient.fetch(query)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <main className="min-h-screen bg-zinc-50 font-sans pb-24">
      <SolarPageHeader
        title="Sản Phẩm Pin Solar"
        subtitle="Giải pháp năng lượng thông minh, hiệu suất cao, linh hoạt cho mọi công trình."
        breadcrumb="Sản phẩm"
        bgImage="prj-7.avif" // Use a relevant background image
      />

      <div className="-mt-12 md:-mt-20 relative z-20 max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-[2.5rem] shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-100">
            <div className="flex items-center gap-5 md:justify-center pb-6 md:pb-0">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <BatteryCharging size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">Hiệu suất</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Lên đến 23%</p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center py-6 md:py-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">Siêu nhẹ</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Chỉ từ 8.1kg</p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-950 leading-none">Bảo hành</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Lên đến 25 năm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-end mb-12">
        <div className="space-y-2">
          <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">Danh mục</span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter">Sản phẩm <span className="text-emerald-500 italic">Tiêu biểu</span></h2>
        </div>

        {isAdmin && (
          <Link
            to="/admin/add-product"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg hover:-translate-y-1 active:scale-95"
          >
            <Plus size={20} />
            Quản lý sản phẩm
          </Link>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-10 h-10 animate-spin text-emerald-600 mb-4" />
            <p className="text-zinc-500 font-medium">Đang tải danh sách sản phẩm...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-zinc-100 shadow-sm">
            <p className="text-zinc-500 font-medium">Chưa có sản phẩm nào được đăng.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-zinc-100 group hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                      No Image
                    </div>
                  )}
                  {product.power && (
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                      {product.power}
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-zinc-900 mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6 flex-1 line-clamp-3">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="w-full block text-center bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    Nhận Báo Giá
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
