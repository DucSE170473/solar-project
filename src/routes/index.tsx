import { createFileRoute } from '@tanstack/react-router'
// Import các component chuyên nghiệp đã thiết kế
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { Projects } from '../components/Projects'
import CTA from '../components/CTA'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* 1. Phần giới thiệu đầu trang - Tạo ấn tượng mạnh */}
      <Hero />

      {/* 2. Phần giới thiệu năng lực - Xây dựng niềm tin */}
      <About />

      {/* 3. Phần dịch vụ - Tập trung vào Kết cấu thép */}
      <div className="bg-slate-50">
        <Services />
      </div>

      {/* 4. Phần dự án - Minh chứng thực tế */}
      <Projects />

      {/* 5. Phần kêu gọi hành động - Chốt đơn/Báo giá */}
      <CTA />
    </main>
  )
}