import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'

type LineRevealTextProps = {
  text: string
  className?: string
  variant?: 'light' | 'dark'
  fontSize?: 'sm' | 'md' | 'lg'
}

export function LineRevealText({
  text,
  className,
  variant = 'dark',
  fontSize = 'lg',
}: LineRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.3'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
  )

  const sizeClasses = {
    sm: 'text-[clamp(1.5rem,3vw,2.5rem)]',
    md: 'text-[clamp(2rem,4vw,4rem)]',
    lg: 'text-[clamp(2.5rem,5vw,4rem)]',
  }

  return (
    <div ref={ref} className={clsx('relative w-full', className)}>
      <p
        className={clsx(
          'font-[family-name:var(--font-altone)] font-medium capitalize leading-none opacity-50',
          sizeClasses[fontSize],
          variant === 'light' ? 'text-[#f5f5f5]' : 'text-[#d9d9d9]',
        )}
        aria-hidden
      >
        {text}
      </p>
      <motion.p
        className={clsx(
          'absolute inset-0 font-[family-name:var(--font-altone)] font-medium capitalize leading-none',
          sizeClasses[fontSize],
          variant === 'light' ? 'text-[#b1b1b1]' : 'text-primary',
        )}
        style={{ clipPath }}
      >
        {text}
      </motion.p>
    </div>
  )
}

type ScrollLineFillProps = {
  text: string
  className?: string
}

export function ScrollLineFill({ text, className }: ScrollLineFillProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const start = windowH * 0.85
      const end = windowH * 0.15
      const p = 1 - (rect.top - end) / (start - end)
      setProgress(Math.max(0, Math.min(1, p)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const words = text.split(' ')

  return (
    <div ref={ref} className={clsx('relative text-center px-6', className)}>
      <p
        className="font-[family-name:var(--font-anton)] text-[clamp(2rem,5vw,4rem)] leading-[120%] capitalize text-[#d9d9d9] opacity-80"
        aria-hidden
      >
        {text}
      </p>
      <p className="absolute inset-x-6 top-0 font-[family-name:var(--font-anton)] text-[clamp(2rem,5vw,4rem)] leading-[120%] capitalize opacity-80">
        {words.map((word, i) => (
          <span
            key={i}
            className={clsx(
              i < Math.floor(progress * words.length)
                ? 'text-primary'
                : 'text-transparent',
            )}
          >
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  )
}

export function SectionDivider() {
  return (
    <hr className="mx-auto w-full max-w-[1400px] border-0 border-t border-[#5c5c5c]/50" />
  )
}
