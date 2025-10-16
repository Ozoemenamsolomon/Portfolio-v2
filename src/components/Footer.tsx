import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-soo-dark-blue text-white mt-auto">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">Solomon Obinna Ozoemenam</p>
            <p className="text-sm opacity-80">Software Developer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Ozoemenamsolomon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/solomon-ozoemenam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Solomon Obinna Ozoemenam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
