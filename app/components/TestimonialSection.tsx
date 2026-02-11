'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Bapak Hendra',
    location: 'Cimahi, Bandung',
    rating: 5,
    text: 'Desainnya keren banget! Pas banget sama budget dan lahan yang ada. Tim sangat responsif dan profesional. Puas banget sama hasilnya!',
    project: 'Rumah Minimalis 2 Lantai'
  },
  {
    id: 2,
    name: 'Ibu Sarah',
    location: 'Bandung Barat',
    rating: 5,
    text: 'Awalnya bingung mau desain kayak gimana. Tim Asjad Creative bantu dari nol, kasih saran yang pas. Hasilnya melebihi ekspektasi!',
    project: 'Rumah Tropis Modern'
  },
  {
    id: 3,
    name: 'Bapak Rizki',
    location: 'Lembang, Bandung',
    rating: 5,
    text: 'Fast response, detail, dan sabar banget ngeladenin revisi. Gambar kerjanya lengkap dan detail. Tukang juga mudah ngerti.',
    project: 'Villa Modern'
  },
  {
    id: 4,
    name: 'Ibu Diana',
    location: 'Cimahi',
    rating: 5,
    text: 'Pelayanan memuaskan! Konsultasi gratis yang benar-benar membantu. Desainnya fungsional dan estetik. Recommended banget!',
    project: 'Rumah Scandinavian'
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimoni" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-base md:text-lg text-accent max-w-xl mx-auto">
            Kepuasan klien adalah bukti kualitas kerja kami
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#fafafa] rounded-3xl p-8 md:p-12"
            >
              {/* Quote Mark */}
              <div className="absolute top-1 left-8 md:left-12 text-primary/10 text-[80px] md:text-[100px] leading-none font-serif select-none">
                &ldquo;
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-2 mt-2 relative z-10">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 relative z-10">
                {testimonials[currentIndex].text}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-accent">
                    {testimonials[currentIndex].project} &middot; {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-200 hover:bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
