import { createFileRoute } from '@tanstack/react-router'
import Contact from '../components/Contact' // Đảm bảo đường dẫn này đúng với vị trí file của bạn

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  // Kết nối component Contact vào đây
  return <Contact />
}