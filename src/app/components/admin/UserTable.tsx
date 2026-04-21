import { Link } from "react-router";
import type { AuthUser } from "../../services/authService";
import { disabilityLabels } from "../../utils/disability";

export function UserTable({ users }: { users: AuthUser[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left">
        <thead>
          <tr className="border-b border-gray-200 text-sm text-gray-600">
            <th scope="col" className="py-3 pr-4 font-semibold">Name</th>
            <th scope="col" className="px-4 py-3 font-semibold">Email</th>
            <th scope="col" className="px-4 py-3 font-semibold">Category</th>
            <th scope="col" className="px-4 py-3 font-semibold">Location</th>
            <th scope="col" className="py-3 pl-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-100 text-sm">
              <td className="py-4 pr-4 font-semibold text-gray-950">{user.fullName}</td>
              <td className="px-4 py-4 text-gray-700">{user.email}</td>
              <td className="px-4 py-4">
                <span className="rounded-full bg-[#eef5f9] px-3 py-1 font-semibold text-[#1A4F8D]">
                  {user.disabilityCategory ? disabilityLabels[user.disabilityCategory] : "None"}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-700">{user.location || "Not provided"}</td>
              <td className="py-4 pl-4">
                <Link
                  to={`/admin/users/${user.id}`}
                  className="font-semibold text-[#1A4F8D] underline-offset-4 hover:underline"
                >
                  View details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && <p className="py-6 text-center text-gray-600">No users match this filter.</p>}
    </div>
  );
}
