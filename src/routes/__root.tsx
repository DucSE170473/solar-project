import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router'
import SolarFooter from '../components/Footer'
import SolarHeader from '../components/Header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      // SEO Tiêu đề: Nhấn mạnh Công nghệ & Thương hiệu
      {
        title: 'Zonprosolar - Thành Công TTCo Group | Pin Mặt Trời Bán Dẫn Siêu Nhẹ',
      },
      // SEO Mô tả: Tập trung vào các đặc tính đột phá 8.1kg và không khung đỡ
      {
        name: 'description',
        content: 'Zonprosolar Việt Nam cung cấp giải pháp pin năng lượng mặt trời bán dẫn siêu nhẹ 8.1kg, siêu dẻo, không dùng khung đỡ. Giải pháp tối ưu cho mái tôn xưởng từ Thành Công TTCo Group.',
      },
      // Open Graph cho Facebook/Zalo
      {
        property: 'og:title',
        content: 'Zonprosolar - Công Nghệ Pin Mặt Trời Siêu Nhẹ 2025',
      },
      {
        property: 'og:description',
        content: 'Pin mặt trời linh hoạt ZP-DB7A (200W/225W) - Dán trực tiếp, không xuyên thấu mái, thi công siêu tốc.',
      },
      {
        property: 'og:image',
        content: '/assets/og-image-zonpro.jpg', // Ảnh đại diện khi chia sẻ link
      },
      {
        name: 'keywords',
        content: 'pin mặt trời bán dẫn, zonprosolar, thành công ttco, pin siêu nhẹ 8.1kg, pin năng lượng mặt trời dẻo, ZP-DB7A, điện mặt trời mái xưởng',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon-zonpro.ico' },
      // Font chữ Montserrat/Roboto như bạn ưu tiên trong thiết kế
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap' },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="antialiased font-['Montserrat',sans-serif] selection:bg-emerald-500 selection:text-white">
      {/* Tự động cuộn lên đầu trang khi chuyển route */}
      <ScrollRestoration />

      {/* Header công nghệ xanh */}
      <SolarHeader />

      {/* Main Content Area */}
      <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
        <Outlet />
      </main>

      {/* Footer hệ sinh thái TTCO */}
      <SolarFooter />

      {/* Nút Hotline nhanh trôi nổi (Floating) cho Mobile */}
      <a
        href="tel:0792515151"
        className="fixed bottom-6 right-6 z-[90] md:hidden bg-emerald-500 text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  )
}