import { authService } from "./authService";
import type { AuthUser } from "./authService";
import { apiRequest } from "./apiClient";

export const userService = {
  getCurrentUser: authService.getProfile,
  getDashboardAccess(token: string) {
    return apiRequest<{ ok: boolean; access: { dashboardPath: string; allowedDisabilityCategory: string | null; services: string[] } }>(
      "/users/dashboard-access",
      {
        method: "GET",
        authToken: token,
      }
    );
  },
  updatePreferences(
    token: string,
    payload: {
      preferredLanguage?: string;
      preferredTheme?: "light" | "dark";
      accessibilityPreferences?: Record<string, unknown>;
    }
  ) {
    return apiRequest<{ ok: boolean; user: AuthUser }>("/users/preferences", {
      method: "PATCH",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
