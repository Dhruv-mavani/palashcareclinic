import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Heart, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-soft pt-24 pb-12 border-t border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8 min-w-0">
              <img
                src="/palashcarecliniclogo.png"
                alt="Palash Care Clinic"
                loading="lazy"
                className="h-12 sm:h-16 md:h-20 w-auto max-w-[140px] sm:max-w-none object-contain"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-bold tracking-tight text-main leading-none">Palash Care <span className="text-primary italic">Clinic</span></span>
                <span className="text-xs uppercase tracking-[0.25em] text-muted font-bold mt-1">Premium Healthcare</span>
              </div>
            </div>
            <p className="text-muted max-w-sm mb-10 leading-relaxed">
              Providing advanced Internal Medicine and Critical Care services to the community. Your recovery and long-term wellness are our absolute priority.
            </p>
            <div className="flex gap-4">
              <a href="https://maps.app.goo.gl/TrN8m8YWbdSqkc9o8" aria-label="Find us on Google Maps" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all bg-white shadow-sm">
                <MapPin size={24} />
              </a>

              <a href="https://www.instagram.com/clinicpalashcare" aria-label="Follow us on Instagram" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all bg-white shadow-sm">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-main font-bold mb-8 uppercase text-sm tracking-widest">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted hover:text-primary text-sm font-bold transition-all">Diabetes Management</a></li>
              <li><a href="#services" className="text-muted hover:text-primary text-sm font-bold transition-all">Hypertension Care</a></li>
              <li><a href="#services" className="text-muted hover:text-primary text-sm font-bold transition-all">Critical Care & ICU</a></li>
              <li><a href="#services" className="text-muted hover:text-primary text-sm font-bold transition-all">Infectious Diseases</a></li>
              <li><a href="#services" className="text-muted hover:text-primary text-sm font-bold transition-all">Respiratory Health</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-main font-bold mb-8 uppercase text-sm tracking-widest">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-muted hover:text-primary text-sm font-bold transition-all">Patient Forms</a></li>
              <li><a href="#faq" className="text-muted hover:text-primary text-sm font-bold transition-all">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted font-bold">
          <p>© {new Date().getFullYear()} Palash Care Clinic. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Made with <Heart size={14} className="text-red fill-red" /> for You.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
