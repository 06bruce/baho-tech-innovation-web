import { Calendar, UsersRound } from "lucide-react";
import { TranslatedText } from "./TranslatedText";
import meetingA from "../../../images/a.jpeg";
import meetingB from "../../../images/b.jpeg";
import meetingC from "../../../images/c.jpeg";
import meetingD from "../../../images/d.jpeg";
import meetingE from "../../../images/e.jpeg";

const meetingImages = [
  { src: meetingA, alt: "Baho Tech team first meeting photo 1" },
  { src: meetingB, alt: "Baho Tech team first meeting photo 2" },
  { src: meetingC, alt: "Baho Tech team first meeting photo 3" },
  { src: meetingD, alt: "Baho Tech team first meeting photo 4" },
  { src: meetingE, alt: "Baho Tech team first meeting photo 5" },
];

export function NewsCarousel() {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid grid-cols-2 gap-2 bg-[#0B1F33] p-3 sm:grid-cols-3">
          {meetingImages.map((image, index) => (
            <div
              key={image.src}
              className={index === 0 ? "col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2" : "aspect-square overflow-hidden rounded-xl"}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
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
  );
}
