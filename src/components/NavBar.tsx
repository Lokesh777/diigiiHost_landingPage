import { navLinks } from '../data/content'

export function NavBar() {
  return (
    <nav className="mx-auto flex w-full max-w-[1392px] items-center justify-between gap-4 rounded-full bg-primary px-8 py-2.5 md:px-8 md:py-2.5">
        <img
          src="/logo.png"
          alt="Alkesh Gupta"
          className="h-5 w-auto"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling?.classList.remove('hidden')
          }}
          width={100}
          height={100}
        />

      <ul className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-[family-name:var(--font-altone)] text-base font-small text-[#f5f5f5] transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="shrink-0 rounded-full bg-[#fafafa] px-6 py-1.5 font-[family-name:var(--font-altone)] text-base font-semibold text-primary shadow-[0_4px_4px_rgba(199,160,8,0.25)] transition-transform hover:scale-[1.02]"
      >
        Work With Me
      </a>
    </nav>
  )
}
