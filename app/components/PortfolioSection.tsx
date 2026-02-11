'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Ganti src dengan path foto/video asli nanti
// Untuk video, set type: 'video' dan src ke file video
const portfolioItems = [
  {
    id: 1,
    title: 'Rumah Minimalis Modern 2 Lantai',
    type: 'image' as const,
    src: '/images/porto1.jpeg',
    description: 'Desain rumah 2 lantai dengan konsep minimalis modern di lahan 10x15m.',
  },
  {
    id: 2,
    title: 'Rumah Modern dengan Garasi',
    type: 'image' as const,
    src: '/images/porto2.jpeg',
    description: 'Desain rumah modern 2 lantai dengan garasi luas dan fasad putih elegan.',
  },
  {
    id: 3,
    title: 'Rumah Minimalis Single Story',
    type: 'image' as const,
    src: '/images/porto3.jpeg',
    description: 'Rumah modern 1 lantai dengan kombinasi warna hangat dan desain terbuka.',
  },
  {
    id: 4,
    title: 'Sketsa Desain Arsitektur',
    type: 'image' as const,
    src: '/images/porto4.jpeg',
    description: 'Sketsa detail desain rumah tradisional dengan sentuhan modern dan material kayu.',
  },
  {
    id: 5,
    title: 'Visualisasi 3D Bird Eye View',
    type: 'image' as const,
    src: '/images/porto5.jpeg',
    description: 'Render 3D perspektif atas rumah modern dengan taman dan area parkir.',
  },
  {
    id: 6,
    title: 'Koleksi Desain Rumah Modern',
    type: 'image' as const,
    src: '/images/porto6.jpeg',
    description: 'Berbagai variasi desain rumah minimalis dengan berbagai sudut pandang.',
  },
  {
    id: 7,
    title: 'Site Plan & Denah Parkir',
    type: 'image' as const,
    src: '/images/porto7.jpeg',
    description: 'Perencanaan tapak dengan denah parkir dan layout jalan yang efisien.',
  },
  {
    id: 8,
    title: 'Rumah Modern 2 Lantai Abu-Abu',
    type: 'image' as const,
    src: '/images/porto8.jpeg',
    description: 'Desain rumah 2 lantai dengan fasad abu-abu modern dan balkon luas.',
  },
  {
    id: 9,
    title: 'Denah Lantai Rumah',
    type: 'image' as const,
    src: '/images/porto9.jpeg',
    description: 'Layout denah ruangan dengan pembagian ruang yang fungsional dan efisien.',
  },
  {
    id: 10,
    title: 'Rumah Modern Minimalis View Depan',
    type: 'image' as const,
    src: '/images/porto10.jpeg',
    description: 'Tampak depan rumah modern dengan carport dan desain fasad clean.',
  },
  {
    id: 11,
    title: 'Rumah Eco-Friendly Panel Surya',
    type: 'image' as const,
    src: '/images/porto11.jpeg',
    description: 'Desain rumah hemat energi dengan solar panel dan halaman belakang luas.',
  },
  
  {
    id: 12,
    title: 'Rumah Ramah Lingkungan View Samping',
    type: 'image' as const,
    src: '/images/porto12.jpeg',
    description: 'Perspektif samping rumah modern dengan atap solar panel dan taman hijau.',
  },
  {
    id: 13,
    title: 'Rumah Minimalis 2 Lantai Hitam',
    type: 'image' as const,
    src: '/images/porto13.jpeg',
    description: 'Desain rumah 2 lantai dengan warna gelap modern dan balkon minimalis.',
  },
  {
    id: 14,
    title: 'Rumah Tradisional Jawa Modern',
    type: 'image' as const,
    src: '/images/porto14.jpeg',
    description: 'Rumah kayu bergaya Jawa dengan sentuhan modern dan atap tradisional.',
  },

  // Contoh video — ganti src dengan file video asli
  // {
  //   id: 7,
  //   title: 'Video Walkthrough Rumah Modern',
  //   type: 'video' as const,
  //   src: '/videos/walkthrough.mp4',
  //   description: 'Video walkthrough interior rumah modern.',
  // },
];

type PortfolioItem = (typeof portfolioItems)[number];

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Hasil Karya Kami
          </h2>
          <div className="section-divider" />
          <p className="text-base md:text-lg text-accent max-w-xl mx-auto">
            Lihat foto dan video project yang telah kami kerjakan
          </p>
        </motion.div>

        {/* Portfolio Grid — semua langsung ditampilkan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.src}
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Media */}
              <div className="relative aspect-video bg-black">
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-accent leading-relaxed mb-8">
                  {selectedItem.description}
                </p>
                <a
                  href="https://wa.me/6289655160296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Bikin Desain Seperti Ini
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
