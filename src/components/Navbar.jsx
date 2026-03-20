import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full max-w-full overflow-x-hidden z-50 py-6 transition-transform duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container px-2 sm:px-4 md:px-8">
        <div className="bg-white/20 backdrop-blur-xl shadow-lg border border-white/20 rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between min-w-0">
          {/* Logo on the far left */}
          <a href="#" className="flex items-center min-w-0">
            <img
              src="/palashcarecliniclogo.png"
              alt="Palash Care Clinic"
              className="h-9 sm:h-12 md:h-14 w-auto max-w-[130px] sm:max-w-none object-contain"
            />
          </a>

          {/* Links in the middle - Desktop Only */}
          <ul className="hidden md:flex lg:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-md font-bold text-[#1F2937] transition-colors hover:text-primary whitespace-nowrap"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA on the far right - Desktop Only */}
          <div className="hidden md:flex items-center shrink-0">
            <a href="#contact" className="btn-primary py-2 px-8 text-sm whitespace-nowrap font-bold">
              Book Appointment
            </a>
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <div className="flex items-center" style={{ display: window.innerWidth >= 768 ? 'none' : 'flex' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1F2937] hover:text-primary transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100 overflow-hidden mt-4 mx-auto w-[calc(100%-16px)] rounded-3xl shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-[#1F2937] hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full py-4 text-center font-bold text-lg rounded-2xl"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
