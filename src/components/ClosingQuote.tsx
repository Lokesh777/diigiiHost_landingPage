const CLOSING_BG = 'https://ik.imagekit.io/csosdjgqgq/myStories_01_WYb1nLJ_1.png'
const FALLBACK_CLOSING_BG = '/public/images/myStories_01.png'

export function ClosingQuote() {
  return (
    <section className="bg-bg px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl shadow-[0_4px_4px_4px_rgba(199,160,8,0.25)]">
        <img
          src={CLOSING_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_CLOSING_BG;
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-6 px-8 py-20 md:min-h-[600px]">
          <p className="max-w-[661px] text-center font-[family-name:var(--font-kaushan)] text-[clamp(1.5rem,3vw,2.25rem)] capitalize leading-[140%] text-[#f5f5f5] opacity-80">
            This is not my story, It&apos;s a reminder, 
            that every
            founder&apos;s story can have a soul.
          </p>
          <p className="font-[family-name:var(--font-altone)] text-xl font-medium text-gold-gradient">
            - Alkesh Gupta
          </p>
        </div>
      </div>
    </section>
  )
}
