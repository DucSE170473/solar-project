import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles.css'

// 1. Import AuthProvider
import { AuthProvider } from './contexts/AuthContext'
// 2. Import useAuth để truyền context vào router (nếu cần bảo vệ route ở tầng router)
import { useAuth } from './hooks/useAuth'

// Khởi tạo router
const router = createRouter({ 
  routeTree,
  context: {
    auth: undefined! // Chúng ta sẽ truyền auth context vào đây sau
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Tạo một component bọc để kết nối Router với Auth Context
function App() {
  // Ở đây chúng ta bọc AuthProvider bên ngoài RouterProvider
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  )
}

function InnerApp() {
  const auth = useAuth() // Bây giờ dùng được vì đã nằm trong AuthProvider
  
  return <RouterProvider router={router} context={{ auth }} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)