import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, User, ChevronDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/60 z-10" />
        <video
          src="/homepagevideo.mp4"
          className="w-full h-full object-cover opacity-60"
          autoPlay loop muted playsInline
        />
      </div>



      {/* Main Content Container */}
      <div className="container relative z-20 px-4 pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          /* THE FIX: flex-col and items-center forces all children to center */
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
        >
          {/* 1. Top Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
              Surat's Premier Medical Care
            </span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.1] mb-8 text-white tracking-tighter"
          >
            <span className="block font-thin opacity-80 text-3xl md:text-5xl mb-2">Welcome to</span>
            <span className="block font-serif italic bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Palash Care Clinic
            </span>
          </motion.h1>

          {/* 3. Subtext - Force center with w-full and text-center */}
          <motion.p
            variants={itemVariants}
            className="text-center text-lg md:text-xl text-slate-300 mb-12 max-w-2xl w-full font-light leading-relaxed tracking-wide"
          >
            Experience the pinnacle of <span className="text-white font-medium">Internal Medicine</span> and <span className="text-white font-medium">Critical Care</span>. Led by Dr. Hardik Patel, we redefine wellness through precision and empathy.
          </motion.p>

          {/* 4. Centered Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row sm:flex-row items-center justify-center gap-6 w-full"
          >
            <a
              href="#contact"
              className="btn-primary p-3 mb-4 group px-10 py-5 bg-white text-slate-950 font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              Book Appointment <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="btn-secondary p-3 mb-4 px-10 py-5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>

          {/* 5. Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            {[
              { icon: Star, text: "100+ Recovered Patients", label: "Excellence" },
              { icon: Shield, text: "Critical Care Specialist", label: "Expertise" },
              { icon: User, text: "MD Physician (Internal)", label: "Precision" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
              >
                <stat.icon size={22} className="text-slate-400 mb-3" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">{stat.label}</span>
                <span className="text-sm font-semibold text-white/90">{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
        <ChevronDown size={20} className="text-white animate-bounce" />
      </div>
    </section>
  )
}

export default Hero