import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [today, setToday] = useState(-1);

  useEffect(() => {
    // Get current day (0 = Sunday, 1 = Monday, etc.)
    setToday(new Date().getDay());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const whatsappMessage = `*New Appointment Request - Palash Care Clinic*%0A%0A*Name:* ${fname} ${lname}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919979748486?text=${whatsappMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  // Map 0-6 (Sun-Sat) to our schedule array indexes
  const scheduleMapping = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 3, 6: 4 };
  const todayScheduleIndex = scheduleMapping[today] !== undefined ? scheduleMapping[today] : -1;

  return (
    <section id="contact" className="bg-slate-50 py-32 relative overflow-hidden font-sans">
      {/* Animated Floating Particles */}
      <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[15%] left-[5%] text-accent/40">
        <Sparkles size={40} strokeWidth={1} />
      </motion.div>
      <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] right-[5%] text-primary/40">
        <Sparkles size={60} strokeWidth={1} />
      </motion.div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section - Now centered at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-32" style={{ marginBottom: "70px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold mb-6 text-slate-900 leading-[1.1] tracking-tight">
            Let's Start Your <br />
            <span className="text-primary italic drop-shadow-sm">Recovery Journey.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Info & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: 'Visit Our Clinic',
                  desc: 'G-35, Grand Plaza Opp. fire Station',
                  subDesc: 'L. P. Savani School Circle, VIP Rd, Vesu, Gujarat 395007',
                  action: 'Get Directions',
                  href: "https://maps.app.goo.gl/hyt2fsHK5DPoQ7su7",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                {
                  icon: <Phone size={24} />,
                  title: 'Call Directly',
                  desc: '9979748486',
                  subDesc: 'Available during operating hours',
                  action: 'Call Now',
                  href: "tel:9979748486",
                  target: "_self"
                }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block relative z-30 group bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex-shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {item.icon}
                    </div>
                    <div className="flex flex-col flex-grow text-left">
                      <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">{item.title}</h3>
                      <p className="text-slate-900 font-extrabold text-xl leading-tight">{item.desc}</p>
                      <p className="text-slate-500 text-sm mt-1">{item.subDesc}</p>
                      <div className="flex items-center gap-1 mt-3 text-primary font-semibold text-sm opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                        {item.action} <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours Card with Dynamic Today Highlight */}
            <motion.div whileHover={{ y: -5 }} className="p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-slate-800">
              <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md border border-primary/30">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Visit Hours</h3>
                    <p className="text-slate-400 text-sm">Open 6 days a week</p>
                  </div>
                </div>
                {todayScheduleIndex === -1 && <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-xs font-bold rounded-full border border-rose-500/30">Closed Today</span>}
              </div>

              <div className="space-y-4 relative z-10">
                {[
                  { day: 'Monday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Tuesday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Wednesday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Thursday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Friday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Saturday', hours: '11:30 AM – 8:30 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((item, index) => {
                  const isToday = index === todayScheduleIndex;
                  return (
                    <div key={item.day} className={`flex justify-between items-center text-sm border-b pb-3 last:border-0 last:pb-0 transition-all duration-300 ${isToday ? 'border-primary/40 scale-[1.02] transform origin-left' : 'border-white/5 hover:border-white/20'}`}>
                      <span className={`font-medium flex items-center gap-2 ${isToday ? 'text-primary font-bold' : 'text-slate-400'}`}>
                        {item.day} {isToday && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
                      </span>
                      <span className={`font-bold tracking-tight px-3 py-1 rounded-lg transition-colors ${isToday ? 'bg-primary/20 text-white border border-primary/30 shadow-[0_0_15px_rgba(153,27,27,0.2)]' : 'text-white bg-white/5'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form with Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 mt-0 lg:mt-28 bg-white/80 backdrop-blur-xl p-6 md:p-12 lg:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-primary/5 border border-white"
          >
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-black mb-3 text-slate-900 tracking-tight">
                Get in touch<span className="text-primary italic"> with us.</span>
              </h3>
              <p className="text-slate-500 text-lg">Leave your details and we'll reach out to you.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" onSubmit={handleSubmit}>

              {/* First Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="block px-6 py-4 w-full text-slate-900 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="fname"
                  className="absolute text-[12px] uppercase tracking-[0.15em] text-slate-400 font-bold top-1/2 -translate-y-1/2 left-6 pointer-events-none transition-opacity duration-200 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="block px-6 py-4 w-full text-slate-900 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="lname"
                  className="absolute text-[12px] uppercase tracking-[0.15em] text-slate-400 font-bold top-1/2 -translate-y-1/2 left-6 pointer-events-none transition-opacity duration-200 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  Last Name
                </label>
              </div>

              {/* Phone Number */}
              <div className="relative group md:col-span-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block px-6 py-4 w-full text-slate-900 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute text-[12px] uppercase tracking-[0.15em] text-slate-400 font-bold top-1/2 -translate-y-1/2 left-6 pointer-events-none transition-opacity duration-200 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  Phone Number
                </label>
              </div>

              {/* Service Required (Select) - FIXED OVERLAP */}
              <div className="relative group md:col-span-1">
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  aria-label="Select the service you require"
                  className="block px-6 py-4 w-full text-slate-900 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23991B1B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_1.5rem_center] bg-no-repeat invalid:text-slate-400"
                >
                  {/* This acts as the unselectable placeholder */}
                  <option value="" disabled hidden>SERVICE REQUIRED</option>
                  <option value="General Physician Consultation">General Physician Consultation</option>
                  <option value="Critical Care Management">Critical Care Management</option>
                  <option value="Diabetes / Hypertension Care">Diabetes / Hypertension Care</option>
                  <option value="Viral Fever / Dengue Treatment">Viral Fever / Dengue Treatment</option>
                  <option value="Emergencies & Others">Emergencies & Others</option>
                </select>
              </div>

              {/* Message / Symptoms */}
              <div className="relative group md:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block px-6 py-4 w-full text-slate-900 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 peer transition-all resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-[12px] uppercase tracking-[0.15em] text-slate-400 font-bold top-5 left-6 pointer-events-none transition-opacity duration-200 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  Message or Symptoms
                </label>
              </div>

              {/* Submit Button Area */}
              <div className="md:col-span-2 mt-2">
                <button
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full font-bold rounded-2xl py-5 text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl overflow-hidden relative group/btn ${isSubmitted ? 'bg-emerald-500 text-white shadow-emerald-500/30' : 'bg-primary text-white shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/50 hover:-translate-y-1 active:translate-y-0'}`}
                >
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-[shine_1s_ease-in-out]"></div>

                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full z-10" />
                  ) : isSubmitted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex gap-2 items-center z-10">
                      <CheckCircle2 size={24} /> Request Sent!
                    </motion.div>
                  ) : (
                    <div className="flex gap-2 items-center z-10" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                      Submit Request <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Location / Map Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-slate-900 rounded-[3rem] transform rotate-1 scale-[0.98] -z-10 opacity-10"></div>
          <div className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.15)_0%,transparent_60%)] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-4 flex flex-col justify-center">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8 border border-primary/30">
                  <MapPin size={32} />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Find Us In <br /><span className="text-primary italic">Vesu, Surat.</span></h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">Conveniently located with plenty of parking. We look forward to welcoming you to our modern facility.</p>
                <a href="https://maps.app.goo.gl/hyt2fsHK5DPoQ7su7" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl py-4 px-8 w-fit flex items-center gap-3 transition-all duration-300 backdrop-blur-sm border border-white/10 group">
                  Get Directions <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="lg:col-span-8 h-[400px] md:h-[450px] relative group rounded-[2rem] overflow-hidden">


                <div className="w-full h-full border border-slate-700 shadow-2xl bg-slate-800 transition-transform duration-700">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2906897649905!2d72.78008827482567!3d21.140826883920905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05273376a3b1f%3A0x489826cdf00b235b!2sPalash%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1773899829337!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Tailwind config requires this custom animation for the button shine */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shine {
          100% { left: 125%; }
        }
      `}} />
    </section>
  )
}

export default Contact;