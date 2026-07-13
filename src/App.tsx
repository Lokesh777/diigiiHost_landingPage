import { Hero } from './components/Hero'
import { JourneySection } from './components/JourneySection'
import { StrongerSoulSection } from './components/StrongerSoulSection'
import { BrandsSection } from './components/BrandsSection'
import { SoulBehindSection } from './components/SoulBehindSection'
import { ManifestoSection } from './components/ManifestoSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { BharatMissionSection } from './components/BharatMissionSection'
import { ClosingQuote } from './components/ClosingQuote'
import { Footer } from './components/Footer'
import { SectionDivider } from './components/ui/LineRevealText'

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-bg">
      <Hero />
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
    </div>
  )
}

export default App
