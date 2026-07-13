import { ScrollLineFill } from './ui/LineRevealText'
import { bharatSections } from '../data/content'

export function BharatMissionSection() {
  return (
    <section id="bharat" className="relative bg-bg py-16 md:py-24">
      <div className="space-y-16 md:space-y-24">
        {bharatSections.map((section, i) => (
          <ScrollLineFill key={i} text={section.text} />
        ))}
      </div>

      <a
        href="#join"
        className="absolute right-6 top-12 z-10 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-dark text-center font-[family-name:var(--font-altone)] text-base font-medium leading-none text-[#f5f5f5] shadow-lg transition-transform hover:scale-105 md:right-[115px] md:top-[46px]"
      >
        Join
        <br />
        Mission
      </a>
    </section>
  )
}
