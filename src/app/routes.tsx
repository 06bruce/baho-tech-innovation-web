import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { RequireAuth } from "./guards/RequireAuth";
import { RequireAdmin } from "./guards/RequireAdmin";
import { RequireDisability } from "./guards/RequireDisability";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";

const Home = lazy(() => import("./components/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const TeamMemberProfile = lazy(() => import("./components/TeamMemberProfile").then(m => ({ default: m.TeamMemberProfile })));
const LoginPage = lazy(() => import("./pages/auth/LoginPage").then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import("./pages/auth/RegisterPage").then(m => ({ default: m.RegisterPage })));
const DashboardRedirect = lazy(() => import("./pages/dashboard/DashboardRedirect").then(m => ({ default: m.DashboardRedirect })));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const AdminUsersPage = lazy(() => import("./pages/admin/AdminUsersPage").then(m => ({ default: m.AdminUsersPage })));
const AdminUserDetailsPage = lazy(() => import("./pages/admin/AdminUserDetailsPage").then(m => ({ default: m.AdminUserDetailsPage })));
const AdminSettingsPage = lazy(() => import("./pages/admin/AdminSettingsPage").then(m => ({ default: m.AdminSettingsPage })));
const BlindDashboard = lazy(() => import("./pages/dashboard/BlindDashboard").then(m => ({ default: m.BlindDashboard })));
const DeafDashboard = lazy(() => import("./pages/dashboard/DeafDashboard").then(m => ({ default: m.DeafDashboard })));
const MuteDashboard = lazy(() => import("./pages/dashboard/MuteDashboard").then(m => ({ default: m.MuteDashboard })));
const MobilityDashboard = lazy(() => import("./pages/dashboard/MobilityDashboard").then(m => ({ default: m.MobilityDashboard })));

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
