import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight, Activity, Heart, Shield, Sparkle, Star } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Diabetes Management',
      description: 'Comprehensive care for Type 1, Type 2, and Gestational Diabetes with personalized treatment plans.',
      icon: <Activity className="text-primary" size={40} />
    },
    {
      title: 'Hypertension & Heart Care',
      description: 'Expert management of high blood pressure and preventive cardiac health assessments.',
      icon: <Heart className="text-primary" size={40} />
    },
    {
      title: 'Critical Care & ICU',
      description: 'Advanced life-saving treatment for emergencies, backed by Lilavati Hospital expertise.',
      icon: <Shield className="text-primary" size={40} />
    },
    {
      title: 'Infectious Diseases',
      description: 'Comprehensive treatment for seasonal fevers, Pneumonia, and complex viral infections.',
      icon: <Activity className="text-primary" size={40} />
    },
    {
      title: 'Respiratory Health',
      description: 'Specialized care for Asthma, COPD, and other chronic lung conditions for better breathing.',
      icon: <CheckCircle2 className="text-primary" size={40} />
    },
    {
      title: 'Neurological Care',
      description: 'Acute management and recovery support for conditions like Brain Haemorrhage and stroke.',
      icon: <Sparkle className="text-primary" size={40} />
    }
  ]

  return (
    <section id="services" className="bg-soft py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-main mb-4">
            Specialized Medical <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-lg text-muted">
            Expert healthcare and critical care management tailored for your recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-main">{service.title}</h3>
              <p className="text-muted mb-6 flex-grow">
                {service.description}
              </p>
              <a href="#contact" className="btn-primary w-half py-3 mb-4 text-sm mt-auto">
                Book Appointment <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
