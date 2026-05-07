import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { uploadImageToCloudinary } from '../services/uploadService'
import { sanityClient } from '../config/sanity'
import { Loader2, UploadCloud, PlusCircle, AlertCircle, Trash2, Edit2, X } from 'lucide-react'

export const Route = createFileRoute('/admin/add-product')({
  component: AddProductPage,
})

function AddProductPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  // Form State
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [power, setPower] = useState('') // Công suất
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [currentImageUrl, setCurrentImageUrl] = useState('') // Ảnh hiện tại khi sửa

  // App State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  // List & Edit State
  const [products, setProducts] = useState<any[]>([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [editId, setEditId] = useState<string | null>(null)

  // Phân quyền: chỉ thanhcongttco@gmail.com mới được phép
  useEffect(() => {
    if (!loading && (!user || user.email !== 'thanhcongttco@gmail.com')) {
      navigate({ to: '/' })
    }
  }, [user, loading, navigate])

  // Lấy danh sách sản phẩm
  useEffect(() => {
    if (!loading && user && user.email === 'thanhcongttco@gmail.com') {
      fetchProducts()
    }
  }, [user, loading])

  const fetchProducts = async () => {
    setLoadingProducts(true)
    try {
      const query = `*[_type == "product"] | order(createdAt desc)`
      const data = await sanityClient.fetch(query)
      setProducts(data)
    } catch (err) {
      console.error("Lỗi khi lấy sản phẩm:", err)
    } finally {
      setLoadingProducts(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    )
  }

  // Double check in render to prevent UI flash
  if (!user || user.email !== 'thanhcongttco@gmail.com') {
    return null;
  }

  const handleResetForm = () => {
    setEditId(null)
    setTitle('')
    setDescription('')
    setPrice('')
    setPower('')
    setImageFile(null)
    setCurrentImageUrl('')
    const fileInput = document.getElementById('image') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    setError('')

    try {
      let imageUrl = currentImageUrl

      // 1. Upload ảnh lên Cloudinary nếu có chọn ảnh mới
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile)
      } else if (!editId) {
        throw new Error('Vui lòng chọn ảnh sản phẩm')
      }

      // 2. Lưu data vào Sanity (Tạo mới hoặc Cập nhật)
      if (editId) {
        await sanityClient.patch(editId).set({
          title,
          description,
          price: parseFloat(price) || 0,
          power,
          imageUrl,
        }).commit()
        setMessage('Cập nhật sản phẩm thành công!')
      } else {
        const newProduct = {
          _type: 'product',
          title,
          description,
          price: parseFloat(price) || 0,
          power,
          imageUrl,
          createdAt: new Date().toISOString()
        }
        await sanityClient.create(newProduct)
        setMessage('Đăng sản phẩm thành công!')
      }

      handleResetForm()
      fetchProducts()

    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Có lỗi xảy ra khi lưu sản phẩm')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (product: any) => {
    setEditId(product._id)
    setTitle(product.title)
    setDescription(product.description)
    setPrice(product.price?.toString() || '')
    setPower(product.power || '')
    setCurrentImageUrl(product.imageUrl || '')
    setMessage('')
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này? Thao tác này không thể hoàn tác.")) return;

    try {
      await sanityClient.delete(id)
      setMessage('Đã xóa sản phẩm!')
      if (editId === id) handleResetForm() // Reset form nếu đang sửa sản phẩm bị xóa
      fetchProducts()
    } catch (err) {
      console.error(err)
      setError("Lỗi khi xóa sản phẩm")
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-24 font-sans">

      {/* FORM THÊM / SỬA SẢN PHẨM */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-[2rem] shadow-xl border border-zinc-100 p-8 md:p-12 relative overflow-hidden">

          {editId && (
            <div className="absolute top-0 left-0 w-full bg-amber-500 text-white text-center text-xs font-bold py-1 uppercase tracking-widest">
              Đang trong chế độ chỉnh sửa
            </div>
          )}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 mt-2">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${editId ? 'bg-amber-500' : 'bg-emerald-600'}`}>
                {editId ? <Edit2 size={24} /> : <PlusCircle size={24} />}
              </div>
              <div>
                <h1 className="text-2xl font-black text-zinc-900 uppercase">
                  {editId ? 'Cập Nhật Sản Phẩm' : 'Đăng Sản Phẩm Mới'}
                </h1>
                <p className="text-zinc-500 font-medium text-sm">Quản trị viên: {user.email}</p>
              </div>
            </div>

            {editId && (
              <button
                onClick={handleResetForm}
                className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-red-500 bg-zinc-100 px-4 py-2 rounded-lg transition-colors"
              >
                <X size={16} /> Hủy sửa
              </button>
            )}
          </div>

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl flex items-center gap-3">
              <AlertCircle size={20} />
              <span className="font-semibold">{message}</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3">
              <AlertCircle size={20} />
              <span className="font-semibold">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-bold text-zinc-700">Tên sản phẩm (Pin Solar)</label>
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  placeholder="VD: Pin mặt trời dẻo ZP-DB7A"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="power" className="text-sm font-bold text-zinc-700">Công suất</label>
                <input
                  id="power"
                  type="text"
                  required
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  placeholder="VD: 200W"
                />
              </div>
            </div>



            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-bold text-zinc-700">Mô tả chi tiết</label>
              <textarea
                id="description"
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium resize-none"
                placeholder="Nhập mô tả về sản phẩm, ưu điểm, ứng dụng..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-bold text-zinc-700">Ảnh sản phẩm</label>

              {currentImageUrl && (
                <div className="mb-4">
                  <p className="text-xs text-amber-600 font-bold mb-2">Ảnh hiện tại:</p>
                  <img src={currentImageUrl} alt="Current" className="h-32 rounded-lg border border-zinc-200 shadow-sm object-cover" />
                </div>
              )}

              <div className="border-2 border-dashed border-zinc-200 rounded-xl p-6 flex flex-col items-center justify-center bg-zinc-50 hover:bg-zinc-100 transition-colors">
                <UploadCloud className="text-zinc-400 w-10 h-10 mb-2" />
                <p className="text-sm text-zinc-500 font-medium mb-4">
                  {editId ? 'Click để chọn ảnh MỚI (để trống nếu giữ ảnh cũ)' : 'Click để chọn ảnh từ máy tính của bạn'}
                </p>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  required={!editId}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImageFile(e.target.files[0])
                    }
                  }}
                  className="text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-all cursor-pointer"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:cursor-not-allowed ${editId ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-700'}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Đang xử lý...
                </>
              ) : (
                editId ? 'Cập Nhật Thay Đổi' : 'Đăng Sản Phẩm Lên Web'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* DANH SÁCH SẢN PHẨM (CRUD) */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-xl border border-zinc-100 p-8 md:p-12">
          <h2 className="text-2xl font-black text-zinc-900 uppercase mb-8 border-l-4 border-emerald-500 pl-4">Danh Sách Đã Đăng</h2>

          {loadingProducts ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-10 h-10 animate-spin text-emerald-600 mb-4" />
              <p className="text-zinc-500 font-medium">Đang tải sản phẩm...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-zinc-500 font-medium">Chưa có sản phẩm nào trong hệ thống.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-100">
                    <th className="py-4 px-4 font-bold text-zinc-600 uppercase text-xs tracking-wider">Ảnh</th>
                    <th className="py-4 px-4 font-bold text-zinc-600 uppercase text-xs tracking-wider">Tên Pin</th>
                    <th className="py-4 px-4 font-bold text-zinc-600 uppercase text-xs tracking-wider">Công Suất</th>
                    <th className="py-4 px-4 font-bold text-zinc-600 uppercase text-xs tracking-wider text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                      <td className="py-4 px-4">
                        <img
                          src={product.imageUrl || 'https://via.placeholder.com/50'}
                          alt="Thumbnail"
                          className="w-12 h-12 object-cover rounded-lg shadow-sm"
                        />
                      </td>
                      <td className="py-4 px-4 font-bold text-zinc-800">{product.title}</td>
                      <td className="py-4 px-4 text-zinc-600 font-medium">{product.power || 'N/A'}</td>
                      <td className="py-4 px-4 text-emerald-600 font-bold">
                        {product.price ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) : '0 ₫'}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                            title="Sửa"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="p-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                            title="Xóa"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
