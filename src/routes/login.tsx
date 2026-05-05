import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})

function LoginComponent() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      // Sau khi login xong thì đẩy về trang chủ hoặc trang dự án
      navigate({ to: '/projects' })
    } catch (error) {
      console.error("Lỗi đăng nhập:", error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="p-10 bg-white shadow-2xl rounded-[2rem] border border-slate-100 text-center">
        <h1 className="text-2xl font-black uppercase text-slate-900 mb-6">Hệ thống quản trị</h1>
        <button 
          onClick={handleLogin}
          className="flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="google" />
          Đăng nhập bằng Google
        </button>
      </div>
    </div>
  )
}