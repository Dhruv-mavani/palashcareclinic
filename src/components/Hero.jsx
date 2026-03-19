import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Clock, User } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-[#F9FAFB]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/90 via-accent/40 to-primary/90 z-10" />
        <video
          src="/homepagevideo.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="container relative z-20 text-center flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 text-white max-w-5xl mx-auto drop-shadow-2xl" style={{ marginTop: '150px' }}>
            WELCOME TO <br />
            <span className="text-primary italic">PALASH CARE CLINIC</span>
          </h1>

          <p className="text-xl md:text-2xl italic text-white/100 mb-12 max-w-4xl mx-auto font-medium">
            <strong>Dr. Hardik Patel (MD)</strong> provides advanced Internal Medicine and Critical Care services at <strong>Palash Care Clinic</strong>, Vesu. Dedicated to your emergency recovery and long-term wellness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#contact" className="btn-primary text-lg">
              Book Appointment
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-lg border border-white/40 text-white hover:bg-transparent hover:text-primary px-4 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              Contact Us
            </a>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-white/90" style={{ marginTop: '25px' }}>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md border border-white/20">
              <Star size={20} className="text-secondary fill-secondary" />
              <span className="text-sm font-bold uppercase tracking-wider">100+ Patients Treated</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md border border-white/20">
              <Shield size={20} className="text-secondary" />
              <span className="text-sm font-bold uppercase tracking-wider">Critical Care Specialist</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md border border-white/20">
              <User size={20} className="text-secondary" />
              <span className="text-sm font-bold uppercase tracking-wider">MD Physician</span>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  )
}

export default Hero
