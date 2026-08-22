import { useParams, Link } from "react-router";
import { teamMembers } from "../data/team";

export function TeamMemberProfile() {
  const { slug } = useParams();
  const member = teamMembers.find((person) => person.slug === slug);

  if (!member) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Team Member Not Found</h1>
          <p className="text-gray-600 mb-6">
            The profile you are looking for does not exist.
          </p>
          <Link to="/about#team" className="text-[#1A4F8D] hover:text-[#1C5B78]">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link to="/about#team" className="text-sm text-[#1A4F8D] hover:text-[#1C5B78]">
            ← Back to Team
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Team Profile</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-12 items-start">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full border-2 border-[#FEC629]/60"></div>
            <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full border-2 border-[#1A4F8D]/30"></div>
          <div className="rounded-[28px] overflow-hidden shadow-xl border border-gray-200 bg-transparent flex items-center justify-center min-h-[300px]">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-gray-400">Role</div>
              <div className="text-lg text-[#1A4F8D] mt-1">{member.role}</div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              {member.name}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{member.bio}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed italic">
              {member.story.map((paragraph, index) => (
                <p
                  key={index}
                  className="border-l-4 border-l-[#1A4F8D] pl-5"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Focus</div>
                <div className="text-gray-800">Accessibility-first product thinking</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Location</div>
                <div className="text-gray-800">Kigali, Rwanda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
