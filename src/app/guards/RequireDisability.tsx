import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { PageLoader } from "../components/dashboard/PageLoader";
import { type DisabilityCategory, getDashboardPathForDisability } from "../utils/disability";

export function RequireDisability({ category }: { category: DisabilityCategory }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <PageLoader label="Preparing your dashboard" />;

  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (user?.disabilityCategory !== category) {
    return <Navigate to={getDashboardPathForDisability(user?.disabilityCategory)} replace />;
  }

  return <Outlet />;
}
