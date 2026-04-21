import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { TeamMemberProfile } from "./components/TeamMemberProfile";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { RequireAuth } from "./guards/RequireAuth";
import { RequireAdmin } from "./guards/RequireAdmin";
import { RequireDisability } from "./guards/RequireDisability";
import { DashboardRedirect } from "./pages/dashboard/DashboardRedirect";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminUsersPage } from "./pages/admin/AdminUsersPage";
import { AdminUserDetailsPage } from "./pages/admin/AdminUserDetailsPage";
import { AdminSettingsPage } from "./pages/admin/AdminSettingsPage";
import { BlindDashboard } from "./pages/dashboard/BlindDashboard";
import { DeafDashboard } from "./pages/dashboard/DeafDashboard";
import { MuteDashboard } from "./pages/dashboard/MuteDashboard";
import { MobilityDashboard } from "./pages/dashboard/MobilityDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "team/:slug", Component: TeamMemberProfile },
      { path: "contact", Component: Contact },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "signup", Component: RegisterPage },
    ],
  },
  {
    Component: RequireAuth,
    children: [
      {
        Component: DashboardLayout,
        children: [
          { path: "/dashboard", Component: DashboardRedirect },
          {
            Component: RequireAdmin,
            children: [
              { path: "/admin/dashboard", Component: AdminDashboard },
              { path: "/admin/users", Component: AdminUsersPage },
              { path: "/admin/users/:id", Component: AdminUserDetailsPage },
              { path: "/admin/settings", Component: AdminSettingsPage },
            ],
          },
          {
            Component: () => <RequireDisability category="blind" />,
            children: [{ path: "/dashboard/blind", Component: BlindDashboard }],
          },
          {
            Component: () => <RequireDisability category="deaf" />,
            children: [{ path: "/dashboard/deaf", Component: DeafDashboard }],
          },
          {
            Component: () => <RequireDisability category="mute" />,
            children: [{ path: "/dashboard/mute", Component: MuteDashboard }],
          },
          {
            Component: () => <RequireDisability category="mobility" />,
            children: [{ path: "/dashboard/mobility", Component: MobilityDashboard }],
          },
        ],
      },
    ],
  },
]);
