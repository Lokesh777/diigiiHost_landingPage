import { Suspense, lazy } from "react";

import { Hero } from "./components/Hero";

const JourneySection = lazy(() =>
  import("./components/JourneySection").then((module) => ({
    default: module.JourneySection,
  }))
);

const StrongerSoulSection = lazy(() =>
  import("./components/StrongerSoulSection").then((module) => ({
    default: module.StrongerSoulSection,
  }))
);

const BrandsSection = lazy(() =>
  import("./components/BrandsSection").then((module) => ({
    default: module.BrandsSection,
  }))
);

const SoulBehindSection = lazy(() =>
  import("./components/SoulBehindSection").then((module) => ({
    default: module.SoulBehindSection,
  }))
);

const ManifestoSection = lazy(() =>
  import("./components/ManifestoSection").then((module) => ({
    default: module.ManifestoSection,
  }))
);

const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection").then((module) => ({
    default: module.TestimonialsSection,
  }))
);

const BharatMissionSection = lazy(() =>
  import("./components/BharatMissionSection").then((module) => ({
    default: module.BharatMissionSection,
  }))
);

const ClosingQuote = lazy(() =>
  import("./components/ClosingQuote").then((module) => ({
    default: module.ClosingQuote,
  }))
);

const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({
    default: module.Footer,
  }))
);

const SectionDivider = lazy(() =>
  import("./components/ui/LineRevealText").then((module) => ({
    default: module.SectionDivider,
  }))
);

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-bg">
      <Hero />

      <Suspense
        fallback={
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        }
      >
        <JourneySection />
        <StrongerSoulSection />
        <BrandsSection />
        <SoulBehindSection />
        <ManifestoSection />

        <div className="px-6 py-8">
          <SectionDivider />
        </div>

        <TestimonialsSection />

        <div className="px-6 py-8">
          <SectionDivider />
        </div>

        <BharatMissionSection />

        <div className="px-6 py-8">
          <SectionDivider />
        </div>

        <ClosingQuote />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;