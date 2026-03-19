import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Smile, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative bg-white py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center py-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-main leading-tight">
              Led by <span className="text-primary italic">Expert</span>
              <br /> Hands
            </h2>
            <p className="text-muted text-lg mb-6 leading-relaxed italic">
              <strong>Palash Care Clinic</strong> is led by <strong>Dr. Hardik Patel, MD</strong>. A highly regarded <strong>Consultant Physician & Intensivist</strong>, Dr. Patel brings specialized expertise in Internal Medicine and Critical Care, backed by advanced training from the prestigious <strong>Lilavati Hospital, Mumbai</strong>.
            </p>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              We are dedicated to providing comprehensive healthcare and specialized treatment for complex medical conditions. From managing chronic illnesses like Diabetes and Hypertension to providing life-saving Critical Care for emergencies like Pneumonia and Brain Haemorrhage, our clinic combines clinical excellence with compassionate patient recovery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-soft border border-gray-100 transition-all hover:bg-white hover:shadow-lg">
                <div className="min-w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-main text-sm mb-1 uppercase tracking-wider">Critical Care</h4>
                  <p className="text-muted text-xs font-semibold">ICU Specialist.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-soft border border-gray-100 transition-all hover:bg-white hover:shadow-lg">
                <div className="min-w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-main text-sm mb-1 uppercase tracking-wider">MD Physician</h4>
                  <p className="text-muted text-xs font-semibold">Lilavati Trained.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Column - Matches Text Height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-soft shadow-2xl bg-soft">
              <img
                src="/drhardik.png"
                alt="Dr. Hardik Patel"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
