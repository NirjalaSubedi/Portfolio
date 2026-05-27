import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Dynamic Active Section Detection
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offset = 80 // Height of sticky navbar
      const targetPosition = targetElement.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#070a13]/80 backdrop-blur-md border-b border-slate-800/40 shadow-lg shadow-purple-950/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* RIGHT SIDE MA DHAKELNA HAMILE ML-AUTO USE GARYA CHHAU */}
        <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${
                activeSection === item.id
                  ? 'text-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Right Side: Hire Me Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex px-4 py-2 text-xs font-semibold text-white tracking-wider uppercase border border-purple-500/30 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 items-center gap-1.5"
          >
            Hire Me
            <ArrowUpRight size={14} className="text-purple-400" />
          </a>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#070a13]/95 border-b border-slate-800/80 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium transition-colors duration-200 ${
                activeSection === item.id ? 'text-purple-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 w-full py-2 text-center text-sm font-semibold text-white tracking-wider uppercase bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-purple-950/20"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
