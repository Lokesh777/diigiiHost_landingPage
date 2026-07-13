import { useState } from 'react'
import { brands } from '../data/content'

export function BrandsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section id="work" className="bg-bg px-0 py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 text-center">
        <h2 className="font-[family-name:var(--font-altone)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[120%] text-primary">
          Brands That Carry My Soul
        </h2>
        <p className="mx-auto mt-2 max-w-[580px] font-[family-name:var(--font-altone)] text-base leading-[120%] text-muted">
          Over the years, I&apos;ve had the privilege of shaping brands that
          became more than businesses — they became movements
        </p>
      </div>

      <div className="mt-10">
        {brands.map((brand, index) => {
          const isActive = hoveredIndex === index || (hoveredIndex === 0 && index === 0)

          return (
            <article
              key={brand.name}
              className="group border-y border-primary/50 py-10 transition-colors duration-300 hover:bg-white/40"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 md:flex-row md:items-center md:gap-0 md:px-[200px]">
                {/* Image Column — width collapses to 0 when inactive, so it takes no horizontal space */}
                <div
                  className={`h-[196px] shrink-0 overflow-hidden rounded-sm transition-all duration-500 ease-out ${
                    isActive
                      ? 'w-[316px] opacity-100 md:mr-[77px]'
                      : 'w-0 opacity-0 md:mr-0'
                  }`}
                >
                  <div className="h-[196px] w-[316px] shadow-[4px_4px_0_2px_#052C27]">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className="flex w-full max-w-[600px] flex-col gap-7 text-center md:text-left">
                  <h3 className="font-[family-name:var(--font-anton)] text-[clamp(2.5rem,5vw,4rem)] capitalize leading-none text-primary opacity-80">
                    {brand.name}
                  </h3>

                  <p className="font-[family-name:var(--font-altone)] text-xl font-medium leading-relaxed text-muted opacity-80">
                    {brand.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}