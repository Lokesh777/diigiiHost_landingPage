const BG = 'public/images/alkesh_gupta.jpg'
const PORTRAIT = 'public/images/alkesh_gupta.jpg'

export function SoulBehindSection() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${BG})` }}
      />

      <div className="relative z-10 px-6 py-16 md:py-20">
        <h2 className="max-w-[323px] font-[family-name:var(--font-altone)] text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[120%] text-[#f5f5f5]">
          The Soul Behind
          <br />
          the Brand
        </h2>

        <div className="mx-auto mt-4 flex max-w-[392px] flex-col items-center">
        <div className="w-full aspect-[376/499] overflow-hidden rounded-3xl border border-yellow-500">
            {/* <img
              src={PORTRAIT}
              alt="Alkesh Gupta"
              className="aspect-[476/699] w-full object-cover"
            /> */}
          </div>
          <p className="mt-4 font-[family-name:var(--font-dancing)] text-[40px] font-semibold text-signature-gradient">
            Alkesh Gupta
          </p>
        </div>
      </div>
    </section>
  )
}
