import React from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronRight, ExternalLink } from 'lucide-react'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Shreya Tomar',
      review: 'I am truly grateful to Dr. Hardik Patel for his exceptional care, compassion and sincerity during my treatment. I received instant care, proper guidance and timely treatment. The follow ups were very through and I experienced steady relief and recovery. Highly grateful and highly recommended.',
      rating: 5
    },
    {
      name: 'Neha Vasava',
      review: 'My friend is admitted with high bp and because of that he has haemorrhage on brain.he was very critical and he was on ve dilator.brain surgery was done under dr hardik guidance.there was a tough time dr hardik has guidedand given us a hope. Finally after 26 days of hospital journey hewasdischrge from the hospital.tha KS a lot dr.hardik for all your support and guidance.',
      rating: 5
    },
    {
      name: 'Neetu Gamit',
      review: 'Dr hardik Patel he is magician.how can I express but I can say his knowledge and experience its unbelievable.i have pregnency and after delivery i critical and not able to service but he did lot of efforts finally I am going to back my home.really thankful from dr hardik Patel and entire team.',
      rating: 5
    },
    {
      name: 'Janak Kapadia',
      review: 'My daughter has dengue and dr Hardik patel has been treated by well to her.he is very cooperative caring and treated very well....im totally satisfied by his treatment and my daughter is now ok.',
      rating: 5
    }
  ]

  return (
    <section id="reviews" className="relative py-32 overflow-hidden bg-soft">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Minimalist Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-main mb-4 tracking-tight">
              Patient <span className="text-primary italic">Experiences</span>
            </h2>
            <p className="text-muted text-lg max-w-6xl mx-auto">
              We focus on providing exceptional care. Here is what our community has to say.
            </p>
          </motion.div>
        </div>

        {/* Symmetrical 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 md:p-10 rounded-3xl flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-main font-medium text-lg md:text-xl leading-relaxed mb-8 flex-grow">
                {review.review}
              </p>

              {/* Author Info with a subtle top border for separation */}
              <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-main">{review.name}</h4>
                    <span className="text-muted text-sm font-medium">Verified Patient</span>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/place/Palash+Care+Clinic/@21.1408269,72.7800883,17z/data=!4m8!3m7!1s0x3be05273376a3b1f:0x489826cdf00b235b!8m2!3d21.1408219!4d72.7826632!9m1!1b1!16s%2Fg%2F11f2b5wndt?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-black rounded-2xl transition-all border border-primary/20 hover:border-primary/40 flex items-center gap-3 whitespace-nowrap shadow-sm hover:shadow-md"
                >
                  View on Maps <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials