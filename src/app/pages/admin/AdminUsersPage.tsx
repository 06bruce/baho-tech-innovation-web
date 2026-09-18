import { useEffect, useMemo, useState } from "react";
import { Filter, Pencil, Plus, Search, ShieldCheck, Trash2 } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { UserTable } from "../../components/admin/UserTable";
import { useAuth } from "../../hooks/useAuth";
import { adminService } from "../../services/adminService";
import type { AuthUser } from "../../services/authService";
import { disabilityCategories, disabilityLabels } from "../../utils/disability";

type AdminAccount = {
  id: string;
  fullName: string;
  email: string;
  role: "admin";
  status: "active" | "pending";
};

const starterAdminAccounts: AdminAccount[] = [
  { id: "admin-1", fullName: "System Admin", email: "admin@bahotech.com", role: "admin", status: "active" },
  { id: "admin-2", fullName: "Operations Lead", email: "ops@bahotech.com", role: "admin", status: "active" },
  { id: "admin-3", fullName: "Support Admin", email: "support@bahotech.com", role: "admin", status: "pending" },
];

export function AdminUsersPage() {
  const { token } = useAuth();
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [search, setSearch] = useState("");
  const [disability, setDisability] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [adminAccounts, setAdminAccounts] = useState<AdminAccount[]>(starterAdminAccounts);
  const [editingAdminId, setEditingAdminId] = useState<string | null>(null);
  const [adminForm, setAdminForm] = useState({ fullName: "", email: "", status: "active" as "active" | "pending" });

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

  const adminCountLabel = useMemo(() => `${adminAccounts.length} admin account${adminAccounts.length === 1 ? "" : "s"}`, [adminAccounts.length]);

  function resetAdminForm() {
    setEditingAdminId(null);
    setAdminForm({ fullName: "", email: "", status: "active" });
  }

  function handleAdminSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = adminForm.fullName.trim();
    const trimmedEmail = adminForm.email.trim();

    if (!trimmedName || !trimmedEmail) return;

    if (editingAdminId) {
      setAdminAccounts((current) =>
        current.map((admin) =>
          admin.id === editingAdminId ? { ...admin, fullName: trimmedName, email: trimmedEmail, status: adminForm.status } : admin
        )
      );
    } else {
      setAdminAccounts((current) => [
        {
          id: `admin-${Date.now()}`,
          fullName: trimmedName,
          email: trimmedEmail,
          role: "admin",
          status: adminForm.status,
        },
        ...current,
      ]);
    }

    resetAdminForm();
  }

  function handleEditAdmin(admin: AdminAccount) {
    setEditingAdminId(admin.id);
    setAdminForm({ fullName: admin.fullName, email: admin.email, status: admin.status });
  }

  function handleDeleteAdmin(adminId: string) {
    setAdminAccounts((current) => current.filter((admin) => admin.id !== adminId));
    if (editingAdminId === adminId) resetAdminForm();
  }

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#1A4F8D]">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">Future use</span>
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-950">Admin access management</h2>
            <p className="mt-1 text-gray-600">Reserved for managing other administrators. This section is live for CRUD actions and ready for backend wiring.</p>
          </div>
          <div className="rounded-full bg-[#eef5f9] px-4 py-2 text-sm font-semibold text-[#1A4F8D]">{adminCountLabel}</div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={handleAdminSubmit} className="rounded-2xl border border-[#d8e4ec] bg-[#F5F7FA] p-5">
            <h3 className="text-lg font-semibold text-gray-950">{editingAdminId ? "Edit admin" : "Add admin"}</h3>
            <div className="mt-4 space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Full name
                <input
                  value={adminForm.fullName}
                  onChange={(event) => setAdminForm((current) => ({ ...current, fullName: event.target.value }))}
                  placeholder="Jane Admin"
                  className="mt-1 h-11 w-full rounded-xl border border-gray-300 bg-white px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Email address
                <input
                  type="email"
                  value={adminForm.email}
                  onChange={(event) => setAdminForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="admin@example.com"
                  className="mt-1 h-11 w-full rounded-xl border border-gray-300 bg-white px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Status
                <select
                  value={adminForm.status}
                  onChange={(event) => setAdminForm((current) => ({ ...current, status: event.target.value as "active" | "pending" }))}
                  className="mt-1 h-11 w-full rounded-xl border border-gray-300 bg-white px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-4 py-2.5 font-semibold text-white hover:bg-[#1C5B78]">
                {editingAdminId ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                {editingAdminId ? "Save changes" : "Add admin"}
              </button>
              {editingAdminId && (
                <button type="button" onClick={resetAdminForm} className="rounded-full border border-[#d8e4ec] px-4 py-2.5 font-semibold text-gray-700 hover:bg-[#eef5f9]">
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-[#d8e4ec] bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-950">Other admins</h3>
              <span className="rounded-full bg-[#eef5f9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A4F8D]">Live</span>
            </div>

            <div className="space-y-3">
              {adminAccounts.map((admin) => (
                <div key={admin.id} className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-[#F5F7FA] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-gray-950">{admin.fullName}</p>
                    <p className="text-sm text-gray-600">{admin.email}</p>
                    <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${admin.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {admin.status}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button type="button" onClick={() => handleEditAdmin(admin)} className="inline-flex items-center gap-2 rounded-full border border-[#d8e4ec] px-3 py-2 text-sm font-semibold text-[#1A4F8D] hover:bg-[#eef5f9]">
                      <Pencil className="h-4 w-4" /> Edit
                    </button>
                    <button type="button" onClick={() => handleDeleteAdmin(admin.id)} className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
