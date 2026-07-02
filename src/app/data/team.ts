import ceoImage from "../../../images/ceo.png";
import corailImage from "../../../images/corail.png";
import zainabImage from "../../../images/zainab.png";
import marthaImage from "../../../images/martha.png";
import gislaineImage from "../../../images/gislaine.png";
import norahImage from "../../../images/norah.png";



export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  story: string[];
  image: string;
};

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
    slug: "iyizire-corail",
    name: "IYIZIRE Corail",
    role: "Tech Team",
    bio: "Building reliable, secure systems that power accessible digital experiences.",
    story: [
      "Corail designs resilient APIs and data pipelines that keep assistive tools fast and dependable. She specializes in scalable architecture, focusing on fault tolerance, data integrity, and latency reduction for real‑time experiences.",
      "Her work includes building secure authentication flows, optimizing database queries, and creating monitoring systems that proactively detect outages. She believes performance is a form of accessibility—if a service is slow or unreliable, it fails the people who depend on it most.",
      "Corail also advocates for inclusive engineering practices by documenting systems clearly and mentoring junior developers. She sees backend reliability as the foundation that makes every front‑end interaction feel effortless."
    ],
    image: corailImage
  },
  {
    slug: "murungi-martha",
    name: "Murungi Martha",
    role: "Tech Team",
    bio: "Crafting intuitive, accessible interfaces with a focus on performance and usability.",
    story: [
      "Martha builds thoughtful interfaces that meet accessibility standards without sacrificing speed or clarity. She is meticulous about semantic structure, keyboard navigation, and screen‑reader compatibility, treating accessibility requirements as a design opportunity rather than a checklist.",
      "Her day‑to‑day work includes component design, performance tuning, and responsive layouts. She translates complex workflows into clean, intuitive UI flows that help users complete tasks confidently.",
      "Martha works side‑by‑side with designers and researchers to test prototypes with real users, ensuring that each interaction feels natural across devices and assistive technologies."
    ],
    image: marthaImage
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
    role: "Frontend Developer",
    bio: "Delivering responsive, accessible web experiences with strong attention to detail.",
    story: [
      "Gislaine ensures our products feel consistent across devices and are navigable for all users. She focuses on responsive behavior, layout robustness, and interaction states that make accessibility visible and reliable.",
      "Her role covers building reusable UI components, refactoring legacy interfaces, and collaborating with QA to validate accessibility compliance. She takes pride in the details that users might never notice—but would immediately feel if they were missing.",
      "Gislaine’s mindset is simple: if an interface works smoothly for the most vulnerable user, it will work better for everyone."
    ],
    image: gislaineImage

  },
  {
    slug: "johnson-tumwebaze",
    name: "Johnson Tumwebaze",
    role: "Graphic Designer",
    bio: "Creating visual stories and brand assets that communicate with clarity and impact.",
    story: [
      "Johnson develops visual systems that keep Baho Tech recognizable, modern, and accessible. He creates brand assets, iconography, and illustration styles that support clarity and reduce cognitive load.",
      "He collaborates with product teams to ensure visuals enhance, rather than distract from, core user tasks. His work spans marketing campaigns, product graphics, and internal documentation.",
      "Johnson’s approach emphasizes legibility, contrast, and simplicity. He believes strong visual design should help users focus on what matters most."
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=900&fit=crop"
  },
  {
    slug: "mugisha-ineza-nora",
    name: "Mugisha Ineza Nora",
    role: "Embedded Systems Engineer",
    bio: "Designing dependable embedded solutions that connect hardware innovation with accessible technology.",
    story: [
      "Nora develops embedded systems that make assistive hardware more responsive, durable, and practical in everyday environments. She works across prototyping, sensor integration, and device optimization to ensure each system performs reliably in real-world use.",
      "Her work focuses on bridging software intelligence with physical products, helping Baho Tech build solutions that are efficient, safe, and easy to maintain. She pays close attention to power usage, performance stability, and how devices behave under continuous operation.",
      "Nora brings an engineering mindset rooted in precision and long-term reliability. She sees embedded technology as a powerful way to expand access, especially when hardware is designed with users' lived needs in mind from the start."
    ],
    image: norahImage
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
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=900&fit=crop"
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
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=900&fit=crop"
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
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=900&h=900&fit=crop"
  }
];
