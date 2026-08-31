import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: "How can I book a consultation with Dr. Hardik Patel?",
        answer: "You can book an appointment by calling our clinic directly or using the 'Book Appointment' button on our website. We offer both routine consultations and emergency evaluations."
    },
    {
        question: "What medical conditions does Dr. Hardik Patel specialize in?",
        answer: "Dr. Hardik Patel is a Consultant Physician & Intensivist specializing in Internal Medicine and Critical Care. He manages conditions like Diabetes, Hypertension, Infectious Diseases, and provides specialized ICU care."
    },
    {
        question: "Does the clinic handle medical emergencies?",
        answer: "Yes, as a Critical Care specialist, Dr. Patel is equipped to handle acute medical emergencies. For life-threatening situations, we provide immediate stabilization and guidance for hospital admission if required."
    },
    {
        question: "Is Dr. Hardik Patel affiliated with any hospitals?",
        answer: "Dr. Hardik Patel has extensive experience and training from Lilavati Hospital, Mumbai, and is affiliated with several leading hospitals in the city for advanced inpatient and ICU care."
    },
    {
        question: "What should I bring for my first consultation?",
        answer: "Please bring your previous medical records, current prescriptions, latest blood report findings, and any relevant imaging (X-rays/CT scans) to help Dr. Patel provide a comprehensive evaluation."
    }
];

const FaqItem = ({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}) => {
    return (
        <div className={`mb-4 transition-all duration-500 ${isOpen ? 'scale-[1.01]' : 'scale-100'}`}>
            <button
                onClick={onClick}
                className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen
                    ? 'bg-white shadow-xl shadow-primary/5 border-primary/20'
                    : 'bg-white/50 backdrop-blur-md border-white hover:border-primary/10 hover:bg-white/80'
                    }`}
            >
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-primary/5 text-primary'
                        }`}>
                        <HelpCircle size={20} />
                    </div>
                    <span className={`font-bold text-base md:text-lg tracking-tight ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                        {question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`${isOpen ? 'text-primary' : 'text-slate-400'}`}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 md:p-8 pt-2 pb-6 text-slate-500 leading-relaxed text-base md:text-lg ml-0 md:ml-14">
                            <div className="h-px w-12 bg-primary/10 mb-4"></div>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden font-sans">
            {/* Background Decor Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 border border-primary/20 shadow-sm"
                    >
                        <Sparkles size={14} className="animate-pulse" /> FAQs
                    </motion.div>

                    <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        Everything You<span className="text-primary"> Need to know.</span>
                    </h2>

                    <p className="text-slate-500 text-lg max-w-6xl mx-auto leading-relaxed">
                        Find answers to frequently asked questions about our medical services, consultations, and what to expect during your visit.
                    </p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* Bottom Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] text-center relative overflow-hidden border border-slate-800 shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4">
                        <div className="text-left">
                            <h4 className="text-white text-2xl md:text-4xl font-bold mb-1 tracking-tight">Still have questions?</h4>
                            <p className="text-slate-400 font-medium">Our friendly team is ready to help you.</p>
                        </div>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl flex items-center gap-2 hover:bg-primary/5 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg group"
                        >
                            <MessageCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                            Get in Touch
                        </a>
                    </div>
                    {/* Subtle Glow inside the CTA */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;