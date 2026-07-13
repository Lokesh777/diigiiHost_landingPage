import { LineRevealText } from './ui/LineRevealText'
import { manifestoBlocks } from '../data/content'

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-[1441px] px-6">
        <h2 className="text-center font-[family-name:var(--font-altone)] text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[120%] text-[#f5f5f5]">
          The Brand Soul Manifesto
        </h2>

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          {manifestoBlocks.map((block, i) => {
            // when text sits on the right, the image sits on the left — and vice versa
            const imageOnLeft = block.align === 'right'

            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-8 md:items-center md:gap-16 ${
                  imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full max-w-[350px] shrink-0 overflow-hidden rounded-lg shadow-[4px_4px_0_rgba(255,255,255,0.25)] md:w-[350px]">
                  <img
                    src={block.image}
                    alt=""
                    className="aspect-[350/400] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className={`w-full ${
                    block.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  <LineRevealText
                    text={block.text}
                    variant="light"
                    fontSize="md"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}