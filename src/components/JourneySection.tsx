import { useEffect, useRef, useState } from "react";
import { galleryImages, serviceCards } from "../data/content";

const JOURNEY_IMAGE = "https://ik.imagekit.io/csosdjgqgq/digi_bank_o6dEGMFCKA.png";
const FALLBACK_JOURNEY_IMAGE = "/public/images/digi_bank.png";

const GALLERY_VISIBLE_COUNT = 5;
const GALLERY_SLIDE_INTERVAL = 2000;
const GALLERY_SLIDE_DURATION = 600;

export function JourneySection() {
  const [galleryStart, setGalleryStart] = useState(0);
  const [gallerySliding, setGallerySliding] = useState(false);
  const [galleryStep, setGalleryStep] = useState(0);
  const galleryTrackRef = useRef<HTMLDivElement>(null);

  // measure exact pixel distance between two gallery items (handles responsive widths)
  useEffect(() => {
    const measure = () => {
      const track = galleryTrackRef.current;
      if (!track || track.children.length < 2) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      setGalleryStep(second.offsetLeft - first.offsetLeft);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [galleryStart]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGallerySliding(true);

      window.setTimeout(() => {
        setGalleryStart((prev) => (prev + 1) % galleryImages.length);
        setGallerySliding(false);
      }, GALLERY_SLIDE_DURATION);
    }, GALLERY_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // render one extra image beyond the visible 5 so it's already mounted to slide in from the right
  const galleryTrackImages = Array.from(
    { length: GALLERY_VISIBLE_COUNT + 1 },
    (_, index) => {
      return galleryImages[(galleryStart + index) % galleryImages.length];
    },
  );

  return (
    <section id="brand-soul" className="bg-bg px-6 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1392px]">
        <h2 className="max-w-[855px] font-[family-name:var(--font-altone)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[120%] text-primary">
          My journey didn&apos;t start with a business plan It started with
          questions
        </h2>

        <div className="mt-12 flex flex-col gap-6 md:ml-auto md:max-w-[450px]">
          <p className="font-[family-name:var(--font-altone)] text-xl font-medium leading-[120%] text-muted-dark">
            Why do some brands connect deeply while others don&apos;t?
          </p>
          <p className="font-[family-name:var(--font-altone)] text-xl font-medium leading-[120%] text-muted-dark">
            Why do some founders feel aligned, while others burn out chasing
            trends?
          </p>
        </div>

        <div className="h-[350px] overflow-hidden rounded-lg md:h-[500px] mt-22">
          <img
            src={JOURNEY_IMAGE}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_JOURNEY_IMAGE;
            }}
          />
        </div>
        <p className="mx-auto mt-20 max-w-[500px] text-center font-[family-name:var(--font-altone)] text-xl font-light leading-[120%] text-muted">
          What began as a small digital agency slowly evolved into a place where
          we didn&apos;t just design websites or logos…{" "}
          <span className="text-xxl font-semibold text-muted">
            we understood people.
          </span>
        </p>

        <div className="mx-auto mt-10 max-w-[1392px] overflow-hidden">
          <div
            ref={galleryTrackRef}
            className="flex gap-4 md:gap-8"
            style={{
              transform:
                gallerySliding && galleryStep
                  ? `translateX(-${galleryStep}px)`
                  : "translateX(0)",
              transition: gallerySliding
                ? `transform ${GALLERY_SLIDE_DURATION}ms ease`
                : "none",
            }}
          >
            {galleryTrackImages.map((src, i) => (
              <div
                key={`${src}-${galleryStart}-${i}`}
                className="h-[200px] w-[140px] shrink-0 overflow-hidden rounded-lg md:h-[240px] md:w-[204px]"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <h3 className="mx-auto mt-6 max-w-[800px] text-center font-[family-name:var(--font-altone)] text-[clamp(1.75rem,3vw,2.5rem)] font-medium capitalize leading-[120%] text-primary">
          the Brand Soul Philosophy.
        </h3>

        <div className="mx-auto mt-16 grid max-w-[1392px] grid-cols-3 items-end justify-center gap-3 sm:gap-4 md:flex md:gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className={`w-full md:w-[240px] ${
                card.offset ? "-translate-y-3 md:-translate-y-5" : ""
              }`}
            >
              <div className="h-[140px] overflow-hidden rounded-lg shadow-[0_6px_16px_rgba(0,0,0,0.12)] sm:h-[180px] md:h-[300px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = card.fallback;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-[698px] font-[family-name:var(--font-altone)] text-xl font-light leading-[120%] text-muted">
          Because every brand, just like every human, has a soul. When you find
          it, align with it, and express it with integrity —
          <span className="text-xxl font-semibold text-muted">
            it creates movement.
          </span>
        </p>
      </div>
    </section>
  );
}
