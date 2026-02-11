'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'Konsultasi GRATIS',
    description: 'Diskusi ide dan konsep tanpa biaya. Kami dengarkan kebutuhan Anda terlebih dulu sebelum mulai.'
  },
  {
    number: '02',
    title: 'Revisi Tanpa Batas',
    description: 'Tidak puas dengan desain? Revisi terus sampai Anda benar-benar yakin dan puas.'
  },
  {
    number: '03',
    title: 'Desain Sesuai Budget',
    description: 'Kami bantu realisasikan impian Anda sesuai kemampuan finansial, tanpa kompromi kualitas.'
  },
  {
    number: '04',
    title: 'Support Sampai Siap Bangun',
    description: 'Pendampingan penuh dari konsep awal hingga proyek siap eksekusi di lapangan.'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider !mx-0" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Kenapa Pilih
              <br />
              <span className="text-accent">Kami?</span>
            </h2>
            <p className="text-base text-accent max-w-md leading-relaxed mb-8">
              Dengan pengalaman dan dedikasi tinggi, kami berkomitmen memberikan hasil terbaik untuk setiap proyek yang kami tangani.
            </p>
            <a
              href="https://wa.me/6289655160296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5"
            >
              Mulai Sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </a>
          </motion.div>

          {/* Right Side - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {reason.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-accent text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
