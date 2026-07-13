import { NavBar } from "./NavBar";

const HERO_BG = "https://ik.imagekit.io/csosdjgqgq/hero_image_NZFZcJUVi.jpg";
// const HERO_BG =  'public/images/hero_image.jpg'

export function Hero() {
  return (
    <header className="relative h-[min(880px,100svh)] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale brightness-90"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 px-6 pt-5 md:px-6">
        <NavBar />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-32 pt-16">
        <h1 className="max-w-[721px] text-center font-[family-name:var(--font-altone)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[120%] text-[#f5f5f5]">
          Hi, I&apos;m <span className="text-yellow-500">Alkesh Gupta</span> — a
          Founder, Creator, and Soul Alchemist.
        </h1>
      </div>
    </header>
  );
}
