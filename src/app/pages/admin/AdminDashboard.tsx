import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Search, Users, Accessibility, Activity, Filter } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { adminService, type AdminStats } from "../../services/adminService";
import type { AuthUser } from "../../services/authService";
import { UserTable } from "../../components/admin/UserTable";
import { disabilityCategories, disabilityLabels } from "../../utils/disability";
import { StatCard } from "../../components/dashboard/StatCard";
import { FormAlert } from "../../components/auth/FormAlert";

export function AdminDashboard() {
  const { token } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [search, setSearch] = useState("");
  const [disability, setDisability] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    let isActive = true;
    setIsLoading(true);
    setError("");

    Promise.all([
      adminService.getOverview(token),
      adminService.getUsers(token, { search, disability }),
    ])
      .then(([overviewResponse, usersResponse]) => {
        if (!isActive) return;
        setStats(overviewResponse.stats);
        setUsers(usersResponse.users);
      })
      .catch((apiError) => {
        if (!isActive) return;
        setError(apiError instanceof Error ? apiError.message : "Could not load admin dashboard.");
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [disability, search, token]);

  const newestUser = useMemo(() => stats?.recentRegistrations[0], [stats]);

  if (isLoading && !stats) {
    return <FormAlert tone="info">Loading admin data...</FormAlert>;
  }

  return (
    <section className="space-y-8">
      {error && <FormAlert tone="error">{error}</FormAlert>}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total registered users" value={stats?.totalUsers ?? 0} icon={<Users className="h-5 w-5" />} />
        <StatCard
          label="Blind solution users"
          value={stats?.usersByDisability.blind ?? 0}
          icon={<Accessibility className="h-5 w-5" />}
        />
        <StatCard
          label="Recent registrations"
          value={stats?.recentRegistrations.length ?? 0}
          icon={<CalendarDays className="h-5 w-5" />}
        />
        <StatCard
          label="Latest signup"
          value={newestUser?.disabilityCategory ? disabilityLabels[newestUser.disabilityCategory] : "None"}
          icon={<Activity className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-950">Users by disability category</h2>
              <p className="mt-1 text-gray-600">Distribution across the assistive service flows.</p>
            </div>
          </div>
          <div className="space-y-4">
            {disabilityCategories.map((category) => {
              const count = stats?.usersByDisability[category] ?? 0;
              const percentage = stats?.totalUsers ? Math.round((count / stats.totalUsers) * 100) : 0;
              return (
                <div key={category}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-800">{disabilityLabels[category]}</span>
                    <span className="text-gray-600">{count} users</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-[#1A4F8D]" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-950">Recent registrations</h2>
          <div className="mt-5 space-y-4">
            {(stats?.recentRegistrations ?? []).map((user) => (
              <article key={user.id} className="rounded-2xl bg-[#F5F7FA] p-4">
                <p className="font-semibold text-gray-950">{user.fullName}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="mt-2 text-sm font-semibold text-[#1A4F8D]">
                  {user.disabilityCategory ? disabilityLabels[user.disabilityCategory] : "No category"}
                </p>
              </article>
            ))}
            {stats?.recentRegistrations.length === 0 && <p className="text-gray-600">No user registrations yet.</p>}
          </div>
        </section>
      </div>

      <section id="users" className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-950">User management</h2>
            <p className="mt-1 text-gray-600">Search and filter users without leaving the dashboard.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
            <label className="relative">
              <span className="sr-only">Search users</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name or email"
                className="h-11 w-full rounded-full border border-gray-300 bg-white pl-11 pr-4 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
              />
            </label>
            <label className="relative">
              <span className="sr-only">Filter by disability</span>
              <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <select
                value={disability}
                onChange={(event) => setDisability(event.target.value)}
                className="h-11 w-full rounded-full border border-gray-300 bg-white pl-11 pr-4 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
              >
                <option value="">All categories</option>
                {disabilityCategories.map((category) => (
                  <option key={category} value={category}>
                    {disabilityLabels[category]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <UserTable users={users} />
      </section>
    </section>
  );
}
