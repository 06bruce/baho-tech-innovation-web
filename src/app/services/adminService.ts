import { apiRequest } from "./apiClient";
import type { AuthUser } from "./authService";
import type { DisabilityCategory } from "../utils/disability";

export type AdminStats = {
  totalUsers: number;
  usersByDisability: Record<DisabilityCategory, number>;
  recentRegistrations: AuthUser[];
};

export const adminService = {
  getOverview(token: string) {
    return apiRequest<{ ok: boolean; stats: AdminStats }>("/admin/stats", {
      method: "GET",
      authToken: token,
    });
  },

  getUsers(token: string, filters: { search?: string; disability?: string } = {}) {
    return apiRequest<{ ok: boolean; users: AuthUser[] }>("/admin/users", {
      method: "GET",
      authToken: token,
      query: filters,
    });
  },

  getUser(token: string, id: string | number) {
    return apiRequest<{ ok: boolean; user: AuthUser; access: { dashboardPath: string; services: string[] } }>(
      `/admin/users/${id}`,
      {
        method: "GET",
        authToken: token,
      }
    );
  },
};
