'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-gradient-to-r from-soo-blue to-soo-dark-blue text-white shadow-lg">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            SOO
          </Link>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:opacity-80 transition-opacity ${
                    isActive(link.href) ? 'border-b-2 border-white' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
