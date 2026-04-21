import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Mail, MapPin, Route, UserRound } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { adminService } from "../../services/adminService";
import type { AuthUser } from "../../services/authService";
import { disabilityLabels } from "../../utils/disability";

type UserAccess = {
  dashboardPath: string;
  services: string[];
};

export function AdminUserDetailsPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [access, setAccess] = useState<UserAccess | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token || !id) return;

    let isActive = true;
    setIsLoading(true);
    setError("");

    adminService
      .getUser(token, id)
      .then((response) => {
        if (!isActive) return;
        setUser(response.user);
        setAccess(response.access);
      })
      .catch((apiError) => {
        if (isActive) setError(apiError instanceof Error ? apiError.message : "Could not load user details.");
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [id, token]);

  if (isLoading) return <FormAlert tone="info">Loading user details...</FormAlert>;
  if (error) return <FormAlert tone="error">{error}</FormAlert>;
  if (!user) return <FormAlert tone="error">User not found.</FormAlert>;

  return (
    <section className="space-y-6">
      <Link to="/admin/users" className="inline-flex items-center gap-2 font-semibold text-[#1A4F8D] hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to users
      </Link>

      <div className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 border-b border-gray-100 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-950">{user.fullName}</h2>
            <p className="mt-1 text-gray-600">Registered on {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          <span className="w-fit rounded-full bg-[#eef5f9] px-4 py-2 font-semibold text-[#1A4F8D]">
            {user.disabilityCategory ? disabilityLabels[user.disabilityCategory] : "No category"}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InfoRow icon={<Mail className="h-5 w-5" />} label="Email" value={user.email} />
          <InfoRow icon={<UserRound className="h-5 w-5" />} label="Role" value={user.role} />
          <InfoRow icon={<MapPin className="h-5 w-5" />} label="Location" value={user.location || "Not provided"} />
          <InfoRow icon={<Route className="h-5 w-5" />} label="Dashboard" value={access?.dashboardPath || "Not assigned"} />
        </div>

        <div className="mt-6 rounded-2xl bg-[#F5F7FA] p-5">
          <p className="mb-3 font-semibold text-gray-950">Allowed services</p>
          <div className="flex flex-wrap gap-2">
            {(access?.services ?? []).map((service) => (
              <span key={service} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-700">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F5F7FA] p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#1A4F8D]">{icon}</div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">{label}</p>
      <p className="mt-1 font-semibold text-gray-950">{value}</p>
    </div>
  );
}
