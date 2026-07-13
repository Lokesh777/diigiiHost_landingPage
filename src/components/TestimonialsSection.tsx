import { useRef, useState } from 'react'
import { testimonials } from '../data/content'

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    dragStart.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - dragStart.current.x) * 1.5
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <section className="relative bg-bg py-16 md:py-24">
      <h2 className="text-center font-[family-name:var(--font-altone)] text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[120%] text-dark">
        What People Say
      </h2>

      <div className="relative mt-12">
        <div
          ref={scrollRef}
          className={`hide-scrollbar flex gap-[115px] overflow-x-auto px-6 pb-4 pt-4 md:px-[calc((100%-1392px)/2+24px)] ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`flex w-[300px] shrink-0 flex-col gap-10 ${
                t.featured ? 'gap-16' : ''
              }`}
            >
              <blockquote
                className={`font-[family-name:var(--font-altone)] text-xl capitalize leading-[120%] text-dark opacity-80 ${
                  t.featured ? 'font-medium' : 'font-normal'
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-start gap-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-altone)] text-xl font-semibold capitalize leading-[120%] text-primary opacity-80">
                    {t.name}
                  </p>
                  <p className="font-[family-name:var(--font-altone)] text-base font-medium capitalize leading-[120%] text-dark opacity-80">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute right-8 top-4 hidden h-20 w-20 items-center justify-center rounded-full bg-[rgba(30,30,30,0.9)] md:flex">
          <span className="font-[family-name:var(--font-altone)] text-base font-medium text-[#f5f5f5]">
            Drag
          </span>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-full border border-muted px-2.5 py-2.5">
        <div className="flex -space-x-2.5">
          {testimonials.slice(0, 4).map((t, i) => (
            <img
              key={i}
              src={t.avatar}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-bg object-cover"
            />
          ))}
        </div>
        <span className="px-2 font-[family-name:var(--font-altone)] text-xl font-medium text-muted">
          More
        </span>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary"
          aria-label="View more testimonials"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="1.6"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
      </div>
    </section>
  )
}
