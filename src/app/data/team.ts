export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  story: string[];
  image: string;
};

import ceoImage from "../../../images/ceo.png";
import zainabImage from "../../../images/zainab.png";
import gislaineImage from "../../../images/gislaine.png";
import valentinImage from "../../../images/b.jpeg";
import rogersImage from "../../../images/c.jpeg";
import bruceImage from "../../../images/d.jpeg";

export const teamMembers: TeamMember[] = [
  {
    slug: "nancy-teta-kwizera",
    name: "Nancy Teta Kwizera",
    role: "CEO & Founder",
    bio: "Leading Baho Tech with a vision for inclusive, accessible technology that empowers everyone.",
    story: [
      "Nancy founded Baho Tech to make accessibility a default, not an afterthought. Her journey began with community-based projects where she saw firsthand how small design choices could either open doors or create barriers. That experience shaped a leadership style grounded in listening, research, and measurable impact.",
      "As CEO, she guides product strategy with a clear principle: every feature must improve daily life for people with disabilities. She brings teams together across design, engineering, and advocacy to create solutions that are technically solid and socially meaningful. Her work balances innovation with responsibility, ensuring privacy, dignity, and usability remain core priorities.",
      "Nancy also champions partnerships with schools, local organizations, and global accessibility groups. Through these collaborations, Baho Tech learns from real users and builds tools that fit the realities of their environments. Her long‑term vision is a digital ecosystem where accessibility is the standard—not the exception."
    ],
    image: ceoImage
  },
  {
    slug: "zainab-elmukshfi",
    name: "Zainab Elmukshfi",
    role: "UI/UX Designer",
    bio: "Designing human-centered experiences that are inclusive, clear, and elegant.",
    story: [
      "Zainab leads research and design systems that prioritize accessibility from the first sketch. She runs user interviews and usability studies with diverse participants, then translates those insights into inclusive patterns and design guidelines.",
      "She oversees Baho Tech’s design system, ensuring components meet color‑contrast standards, touch targets, and readability requirements. Her goal is a cohesive visual language that remains flexible across products.",
      "Zainab’s design philosophy blends clarity with warmth—interfaces should be visually elegant, but also predictable and welcoming. She believes good design is defined by how confidently people can use it."
    ],
    image: zainabImage
  },
  {
    slug: "mahoro-gislaine",
    name: "Mahoro Gislaine",
    role: "Tech Team",
    bio: "Delivering responsive, accessible web experiences with strong attention to detail.",
    story: [
      "Gislaine ensures our products feel consistent across devices and are navigable for all users. She focuses on responsive behavior, layout robustness, and interaction states that make accessibility visible and reliable.",
      "Her role covers building reusable UI components, refactoring legacy interfaces, and collaborating with QA to validate accessibility compliance. She takes pride in the details that users might never notice—but would immediately feel if they were missing.",
      "Gislaine’s mindset is simple: if an interface works smoothly for the most vulnerable user, it will work better for everyone."
    ],
    image: gislaineImage

  },
  {
    slug: "mugisha-valentin",
    name: "Mugisha Valentin",
    role: "CFO",
    bio: "Guiding Baho Tech's financial strategy with a focus on sustainable growth and operational discipline.",
    story: [
      "Valentin leads financial planning and resource strategy to keep Baho Tech growing on a strong foundation. He manages budgeting, forecasting, and investment priorities to ensure the company can scale responsibly while staying focused on impact.",
      "He works closely with leadership to align financial decisions with product development, hiring, and long-term business goals. His approach emphasizes clarity, accountability, and making smart choices that support both innovation and stability.",
      "Valentin believes sound financial stewardship creates room for bold ideas to succeed. By building healthy systems behind the scenes, he helps the team deliver accessible technology with confidence and consistency."
    ],
    image: valentinImage
  },
  {
    slug: "muganwa-rogers",
    name: "Muganwa Rogers",
    role: "Operations Manager",
    bio: "Keeping teams, workflows, and delivery aligned so ideas move smoothly from planning to execution.",
    story: [
      "Rogers coordinates day-to-day operations to help Baho Tech move with focus and consistency. He supports cross-team planning, timelines, and process improvements that reduce friction and keep important work on track.",
      "His role connects strategy with execution, making sure communication stays clear across departments and that operational systems support the team's pace of growth. He pays attention to the details that help projects stay organized, measurable, and dependable.",
      "Rogers values structure that empowers people rather than slowing them down. He sees strong operations as the quiet engine behind great products, partnerships, and customer experiences."
    ],
    image: rogersImage
  },
  {
    slug: "nshuti-shyaka-bruce",
    name: "Nshuti Shyaka Bruce",
    role: "DevOps & Backend Engineer",
    bio: "Building the infrastructure and backend systems that keep products secure, scalable, and continuously available.",
    story: [
      "Bruce works across backend engineering and DevOps to ensure Baho Tech's platforms are reliable from code to deployment. He designs services, automates delivery pipelines, and strengthens infrastructure so releases can move quickly without sacrificing stability.",
      "His focus includes cloud operations, deployment workflows, observability, and backend performance. He helps the team maintain resilient environments where products can scale smoothly and issues can be detected before they affect users.",
      "Bruce approaches systems engineering with a strong reliability mindset. For him, good infrastructure is invisible at its best: secure, efficient, and always ready to support the people who depend on it."
    ],
    image: bruceImage
  }
];
