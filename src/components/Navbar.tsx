import { useState } from 'react'
import MassaLogo from './MassaLogo'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Build', href: '#build' },
  { label: 'Explore', href: '#explore' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__brand" aria-label="Massa home">
          <MassaLogo className="navbar__logo-img" />
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#get-started" className="navbar__cta">Get started</a>
          <button
            className="navbar__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="navbar__mobile-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#get-started" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
          Get started
        </a>
      </div>
    </header>
  )
}

export default Navbar


