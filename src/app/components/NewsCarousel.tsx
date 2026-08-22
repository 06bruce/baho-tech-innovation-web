import { Calendar, UsersRound } from "lucide-react";
import { TranslatedText } from "./TranslatedText";
import meetingA from "../../../images/a.jpeg";
import meetingB from "../../../images/b.jpeg";
import meetingC from "../../../images/c.jpeg";
import meetingD from "../../../images/d.jpeg";
import meetingE from "../../../images/e.jpeg";
import hsImage1 from "../../../images/meeting 2.jpeg";
import hsImage2 from "../../../images/meeting2.jpeg";
import hsImage3 from "../../../images/meeting3.jpeg";

const meetingImages = [
  { src: meetingA, alt: "Baho Tech team first meeting photo 1" },
  { src: meetingB, alt: "Baho Tech team first meeting photo 2" },
  { src: meetingC, alt: "Baho Tech team first meeting photo 3" },
  { src: meetingD, alt: "Baho Tech team first meeting photo 4" },
  { src: meetingE, alt: "Baho Tech team first meeting photo 5" },
];

const hsImages = [
  { src: hsImage1, alt: "High School Coding Cohort 1" },
  { src: hsImage2, alt: "High School Coding Cohort 2" },
  { src: hsImage3, alt: "High School Coding Cohort 3" },
];

export function NewsCarousel() {
  return (
    <div className="flex flex-col gap-8">
      {/* Article 1: High School Cohort */}
      <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-2 bg-[#0B1F33] p-3 sm:grid-cols-4 sm:grid-rows-2 h-[350px] sm:h-[400px]">
            {hsImages.map((image, index) => (
              <div
                key={image.alt}
                className={(index === 0 ? "col-span-2 row-span-2" : "col-span-1 sm:col-span-2 row-span-1") + " overflow-hidden rounded-xl min-h-0"}
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-200/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-900">
                <UsersRound className="h-4 w-4" aria-hidden="true" />
                <TranslatedText text="Cohort Graduation" />
              </span>
              <span className="inline-flex items-center text-sm text-gray-500">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                <TranslatedText text="Recent update" />
              </span>
            </div>

            <TranslatedText text="🚀 Our First High School Coding Cohort Has Graduated!" as="h3" className="text-2xl font-semibold text-gray-900 md:text-3xl" />
            <TranslatedText
              text="From their first lines of code to building their final projects, our students have come a long way. The final showcase was the perfect way to close the track, where they presented to guest software engineers and founders. We're incredibly proud and hope this is just the beginning. 🚀"
              as="p"
              className="mt-4 text-base leading-7 text-gray-600"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Coding basics", "Final projects", "Mentorship"].map((item) => (
                <TranslatedText key={item} text={item} as="span" className="rounded-xl bg-[#F5F7FA] px-3 py-2 text-center text-sm font-semibold text-[#1A4F8D]" />
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Article 2: First Meeting */}
      <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-2 bg-[#0B1F33] p-3 sm:grid-cols-4 sm:grid-rows-2 h-[350px] sm:h-[400px]">
            {meetingImages.map((image, index) => (
              <div
                key={image.alt}
                className={(index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1") + " overflow-hidden rounded-xl min-h-0"}
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-200/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-900">
                <UsersRound className="h-4 w-4" aria-hidden="true" />
                <TranslatedText text="Team Update" />
              </span>
              <span className="inline-flex items-center text-sm text-gray-500">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                <TranslatedText text="First meeting" />
              </span>
            </div>

            <TranslatedText text="Baho Tech Team First Meeting" as="h3" className="text-2xl font-semibold text-gray-900 md:text-3xl" />
            <TranslatedText
              text="The Baho Tech team held its first meeting to align on our mission, product roadmap, and the assistive technology work ahead. The conversation focused on building practical tools for accessibility, starting with SBS, Talka, and the upcoming Sense AI experience."
              as="p"
              className="mt-4 text-base leading-7 text-gray-600"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Shared mission", "Product planning", "Team alignment"].map((item) => (
                <TranslatedText key={item} text={item} as="span" className="rounded-xl bg-[#F5F7FA] px-3 py-2 text-center text-sm font-semibold text-[#1A4F8D]" />
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
