import type { ReactNode } from 'react';
import { Navigate } from '@tanstack/react-router'; // Hoặc react-router-dom tùy bạn cài gì
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

export const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { user, role, loading } = useAuth();
  
  if (loading) return <div>Đang tải...</div>;

  if (!user) {
    return <Navigate to={"/login" as any} />;
  }

  if (!allowedRoles.includes(role)) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-red-500 font-bold">Truy cập bị từ chối</h2>
        <p>Bạn không có quyền xem trang này.</p>
      </div>
    );
  }
  
  return <>{children}</>;
};