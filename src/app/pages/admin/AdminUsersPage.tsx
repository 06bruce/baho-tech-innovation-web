import { useEffect, useState } from "react";
import { Filter, Search } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { UserTable } from "../../components/admin/UserTable";
import { useAuth } from "../../hooks/useAuth";
import { adminService } from "../../services/adminService";
import type { AuthUser } from "../../services/authService";
import { disabilityCategories, disabilityLabels } from "../../utils/disability";

export function AdminUsersPage() {
  const { token } = useAuth();
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

    adminService
      .getUsers(token, { search, disability })
      .then((response) => {
        if (isActive) setUsers(response.users);
      })
      .catch((apiError) => {
        if (isActive) setError(apiError instanceof Error ? apiError.message : "Could not load users.");
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [disability, search, token]);

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950">Users</h2>
          <p className="mt-1 text-gray-600">Search, filter, and open detailed user records.</p>
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

      {error && <div className="mb-5"><FormAlert tone="error">{error}</FormAlert></div>}
      {isLoading ? <FormAlert tone="info">Loading users...</FormAlert> : <UserTable users={users} />}
    </section>
  );
}
