import { apiRequest } from "./apiClient";
import type { DisabilityCategory } from "../utils/disability";

export type UserRole = "admin" | "user";

export type AuthUser = {
  id: number;
  fullName: string;
  email: string;
  role: UserRole;
  disabilityCategory: DisabilityCategory | null;
  preferredLanguage?: string;
  preferredTheme?: "light" | "dark";
  accessibilityPreferences?: Record<string, unknown>;
  phone?: string | null;
  location?: string | null;
  createdAt: string;
};

export type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  disabilityCategory: DisabilityCategory;
  preferredLanguage?: string;
  preferredTheme?: "light" | "dark";
  phone?: string;
  location?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

type AuthResponse = {
  ok: boolean;
  token: string;
  user: AuthUser;
};

type RegisterResponse = {
  ok: boolean;
  message: string;
  user: AuthUser;
};

type ProfileResponse = {
  ok: boolean;
  user: AuthUser;
};

export const authService = {
  register(payload: RegisterPayload) {
    return apiRequest<RegisterResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  login(payload: LoginPayload) {
    return apiRequest<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  getProfile(token: string) {
    return apiRequest<ProfileResponse>("/auth/me", {
      method: "GET",
      authToken: token,
    });
  },

  logout(token: string) {
    return apiRequest<{ ok: boolean }>("/auth/logout", {
      method: "POST",
      authToken: token,
    });
  },
};
