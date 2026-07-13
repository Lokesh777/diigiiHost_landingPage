import { footerNav } from '../data/content'

export function Footer() {
  return (
    <footer id="contact" className="bg-dark px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <p className="max-w-[294px] font-[family-name:var(--font-altone)] text-2xl leading-[1.2] text-gold-gradient-footer">
            Maybe it&apos;s time we build something together.
          </p>

          <nav className="flex flex-wrap gap-16 md:gap-20">
            <ul className="flex flex-col gap-5">
              {footerNav.main.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-altone)] text-xl lowercase text-[#f5f5f5] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {footerNav.work.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-altone)] text-xl lowercase text-[#f5f5f5] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {footerNav.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`font-[family-name:var(--font-altone)] text-xl text-[#f5f5f5] transition-opacity hover:opacity-70 ${
                      link.label === 'x' ? 'uppercase' : 'lowercase'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <img
            src="/images/logo-light.svg"
            alt="Alkesh Gupta"
            className="h-14 w-auto"
            onError={(e) => {
              e.currentTarget.outerHTML =
                '<span class="font-[family-name:var(--font-altone)] text-3xl font-semibold text-gold-gradient-footer">Alkesh Gupta</span>'
            }}
          />
          <p className="font-[family-name:var(--font-altone)] text-base text-[#f5f5f5]">
            Copyright © 2026 Alkesh Gupta. All Rights Reserved. Powered By :
            DIIGIIHOST
          </p>
        </div>
      </div>
    </footer>
  )
}
