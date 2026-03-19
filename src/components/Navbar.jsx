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
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-transform duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container">
        <div className="bg-white/20 backdrop-blur-xl shadow-lg border border-white/20 rounded-full px-8 py-4 flex items-center justify-between transition-all duration-500 hover:shadow-xl w-full">
          {/* Logo on the far left */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img src="/palashcarecliniclogo.png" alt="Palash Care Clinic" className="h-15 w-auto object-contain transition-transform group-hover:scale-110" />
          </a>

          {/* Links in the middle */}
          <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
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

          {/* CTA on the far right */}
          <div className="hidden md:flex items-center shrink-0">
            <a href="#contact" className="btn-primary py-2 px-8 text-sm whitespace-nowrap">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
