import { useEffect, useState } from "react";
import { Calendar, UsersRound } from "lucide-react";
import { TranslatedText } from "./TranslatedText";
import { contentService, type ContentItem } from "../services/contentService";
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

const fallbackNews: ContentItem[] = [
  {
    id: "fallback-news-1",
    type: "news",
    slug: "cohort-graduation",
    title: "🚀 Our First High School Coding Cohort Has Graduated!",
    name: "",
    role: "",
    bio: "",
    description: "From their first lines of code to building their final projects, our students have come a long way. The final showcase was the perfect way to close the track, where they presented to guest software engineers and founders. We're incredibly proud and hope this is just the beginning. 🚀",
    content: "From their first lines of code to building their final projects, our students have come a long way. The final showcase was the perfect way to close the track, where they presented to guest software engineers and founders. We're incredibly proud and hope this is just the beginning. 🚀",
    image: hsImage1,
    imageAlt: "High School Coding Cohort 1",
    tags: ["Coding basics", "Final projects", "Mentorship"],
    link: "",
    location: "",
    isPublished: true,
    sortOrder: 0,
    story: [],
    metadata: {},
    createdAt: null,
    updatedAt: null,
  },
  {
    id: "fallback-news-2",
    type: "news",
    slug: "team-first-meeting",
    title: "Baho Tech Team First Meeting",
    name: "",
    role: "",
    bio: "",
    description: "The Baho Tech team held its first meeting to align on our mission, product roadmap, and the assistive technology work ahead. The conversation focused on building practical tools for accessibility, starting with SBS, Talka, and the upcoming Sense AI experience.",
    content: "The Baho Tech team held its first meeting to align on our mission, product roadmap, and the assistive technology work ahead. The conversation focused on building practical tools for accessibility, starting with SBS, Talka, and the upcoming Sense AI experience.",
    image: meetingA,
    imageAlt: "Baho Tech team first meeting photo 1",
    tags: ["Shared mission", "Product planning", "Team alignment"],
    link: "",
    location: "",
    isPublished: true,
    sortOrder: 1,
    story: [],
    metadata: {},
    createdAt: null,
    updatedAt: null,
  },
];

function buildNewsCards(items: ContentItem[]) {
  const list = items.length ? items : fallbackNews;
  return list.slice(0, 2);
}

function getGallery(item: ContentItem, fallbackGallery: { src: string; alt: string }[]) {
  const gallery = item.metadata.gallery;
  if (!Array.isArray(gallery)) return fallbackGallery;

  const images = gallery.filter(
    (image): image is { src: string; alt: string } =>
      Boolean(image) && typeof image === "object" && typeof image.src === "string" && typeof image.alt === "string"
  );

  return images.length ? images : fallbackGallery;
}

export function NewsCarousel() {
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    let isActive = true;

    contentService
      .listPublic("news")
      .then((response) => {
        if (!isActive) return;
        setItems(response.items);
      })
      .catch(() => {
        if (!isActive) return;
        setItems([]);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const cards = buildNewsCards(items);

  return (
    <div className="flex flex-col gap-8">
      {cards.map((item, index) => {
        const isFirstCard = index === 0;
        const fallbackGallery = isFirstCard ? hsImages : meetingImages;
        const gallery = getGallery(item, fallbackGallery);
        const galleryGridClass = gallery.length <= 3 ? "sm:grid-cols-3" : "sm:grid-cols-4";
        const badgeText = isFirstCard ? "Cohort Graduation" : "Team Update";
        const subText = isFirstCard ? "Recent update" : "First meeting";
        const tagList = item.tags.length ? item.tags : (isFirstCard ? ["Coding basics", "Final projects", "Mentorship"] : ["Shared mission", "Product planning", "Team alignment"]);

        return (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`grid h-[350px] grid-cols-2 gap-2 bg-[#0B1F33] p-3 sm:h-[400px] sm:grid-rows-2 ${galleryGridClass}`}>
                {gallery.map((image, imageIndex) => (
                  <div
                    key={`${item.id}-${image.alt || imageIndex}`}
                    className={(imageIndex === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1") + " overflow-hidden rounded-xl min-h-0"}
                  >
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${isFirstCard ? "bg-blue-200/50 text-blue-900" : "bg-green-200/50 text-green-900"}`}>
                    <UsersRound className="h-4 w-4" aria-hidden="true" />
                    <TranslatedText text={badgeText} />
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                    <TranslatedText text={subText} />
                  </span>
                </div>

                <TranslatedText text={item.title || "News update"} as="h3" className="text-2xl font-semibold text-gray-900 md:text-3xl" />
                <TranslatedText
                  text={item.description || item.content || "Latest update from Baho Tech."}
                  as="p"
                  className="mt-4 text-base leading-7 text-gray-600"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {tagList.map((tag) => (
                    <TranslatedText key={`${item.id}-${tag}`} text={tag} as="span" className="rounded-xl bg-[#F5F7FA] px-3 py-2 text-center text-sm font-semibold text-[#1A4F8D]" />
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
