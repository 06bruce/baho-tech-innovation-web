import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { PageLoader } from "../components/dashboard/PageLoader";
import { getDashboardPathForDisability } from "../utils/disability";

export function RequireAdmin() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <PageLoader label="Checking admin access" />;

  if (user?.role !== "admin") {
    return <Navigate to={getDashboardPathForDisability(user?.disabilityCategory)} replace />;
  }

  return <Outlet />;
}
