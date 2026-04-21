import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { PageLoader } from "../../components/dashboard/PageLoader";
import { getDashboardPathForDisability } from "../../utils/disability";

export function DashboardRedirect() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <PageLoader label="Opening your workspace" />;

  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to={getDashboardPathForDisability(user?.disabilityCategory)} replace />;
}
