# 🏠 Asjad Creative - Website Jasa Desain Rumah

Website company profile profesional untuk jasa desain rumah dengan desain minimalis, elegan, dan modern.

## 🎨 Design System

### Warna

- **Primary:** `#111111` (Hitam)
- **Secondary:** `#333333` (Abu-abu gelap)
- **Background:** `#ffffff` (Putih)
- **Accent:** `#888888` (Abu-abu)

### Typography

- Font: **Poppins** (300, 400, 500, 600, 700)
- Style: Minimalis, clean, modern

## 🏗️ Struktur Website

### 1. **Hero Section**

- Judul besar dan menarik perhatian
- Subheading yang jelas
- 2 CTA buttons (Konsultasi Gratis & Lihat Portfolio)
- Scroll indicator
- Background pattern & animasi smooth

### 2. **Services Section**

Menampilkan 5 layanan utama:

- ✔️ Denah rapi & fungsional
- ✔️ Tampilan rumah estetik & modern
- ✔️ Gambar kerja siap bangun
- ✔️ Bisa 3D & revisi
- ✔️ Desain sesuai lahan & budget

### 3. **Why Choose Us Section**

4 alasan memilih Asjad Creative:

- 💬 Konsultasi GRATIS
- 🔄 Revisi Tanpa Batas
- 💸 Desain Sesuai Budget
- 🤝 Support Sampai Siap Bangun

### 4. **Portfolio Section** 🔥

- Grid layout dengan hover effect
- Filter berdasarkan kategori
- Modal untuk detail portfolio
- Dummy data dengan gambar dari Unsplash
- CTA untuk setiap portfolio item

### 5. **Testimonial Section**

- Carousel testimonial
- Rating bintang
- Informasi project
- Navigation dots & arrows

### 6. **CTA Section**

- Background hitam dengan pattern
- Animated circles
- Button WhatsApp prominent
- Trust indicators

### 7. **Contact Section**

- Informasi kontak lengkap:
  - WhatsApp: +62 896-5516-0296
  - Alamat: Komp. Permata Cimahi, Jln. Zamrud 9 No.19, Bandung Barat
  - Email: info@asjadcreative.com
- Google Maps embed
- Social media links
- Footer

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS 4
- **Animation:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment ke Vercel

1. Push code ke GitHub
2. Login ke [Vercel](https://vercel.com)
3. Import repository
4. Deploy otomatis!

Atau via CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Kustomisasi

### Update Portfolio

Edit file `app/components/PortfolioSection.tsx`:

```typescript
const portfolioItems = [
  {
    id: 1,
    title: "Judul Project",
    category: "Kategori",
    image: "URL_GAMBAR",
    description: "Deskripsi project",
  },
  // Tambah portfolio lainnya...
];
```

### Update Testimoni

Edit file `app/components/TestimonialSection.tsx`:

```typescript
const testimonials = [
  {
    id: 1,
    name: "Nama Klien",
    location: "Lokasi",
    rating: 5,
    text: "Testimoni...",
    project: "Nama Project",
  },
  // Tambah testimoni lainnya...
];
```

### Update Kontak

Edit file `app/components/ContactSection.tsx` untuk mengubah:

- Nomor WhatsApp
- Alamat
- Email
- Google Maps embed

## 🎯 Fitur Utama

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Smooth animations dengan Framer Motion
- ✅ SEO optimized
- ✅ Fast page load
- ✅ Modern UI/UX
- ✅ WhatsApp integration
- ✅ Portfolio modal
- ✅ Testimonial carousel
- ✅ Google Maps integration

## 📱 WhatsApp Integration

Semua CTA button sudah terhubung langsung ke WhatsApp:

```
https://wa.me/6289655160296
```

## 🎨 Tips untuk Portfolio Real

1. **Update Portfolio dengan Project Real:**
   - Upload foto-foto hasil desain ke hosting image
   - Atau simpan di folder `/public`
   - Update array `portfolioItems`

2. **Tambahkan Testimoni Real:**
   - Kumpulkan testimoni dari klien
   - Update array `testimonials`

3. **Update Google Maps:**
   - Buka Google Maps
   - Cari lokasi kantor
   - Klik "Share" > "Embed a map"
   - Copy iframe code
   - Paste ke `ContactSection.tsx`

4. **Tambahkan Analytics:**
   - Google Analytics
   - Facebook Pixel (opsional)

## 📸 Screenshot Portfolio

Untuk portfolio yang lebih menarik, upload foto dengan:

- **Format:** JPG/PNG (optimized)
- **Dimensi:** 800x600px atau lebih
- **Aspect Ratio:** 4:3
- **File size:** < 500KB per image

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

- WhatsApp: +62 896-5516-0296
- Email: info@asjadcreative.com

---

**Built with ❤️ for Asjad Creative**

_Website ini siap untuk production! Tinggal update portfolio & testimoni dengan data real, lalu deploy ke Vercel._ 🚀
