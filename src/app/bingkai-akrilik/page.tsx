"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, Frame, Image, Sparkles, MapPin, Mail } from "lucide-react";

const brands = [
  "Studio Foto Premium", "Galeri Seni Jakarta", "Interior Designer", "Wedding Organizer", "Home Decor Shop",
  "Photo Studio", "Art Gallery", "Decorator", "Gift Shop", "Frame Store"
];

const portfolio = [
  { name: "Koleksi Foto Keluarga", category: "Personal" },
  { name: "Galeri Lukisan", category: "Art Gallery" },
  { name: "Dekorasi Lobby Hotel", category: "Commercial" },
  { name: "Wedding Photo Display", category: "Event" },
];

const useCases = [
  {
    id: "foto-keluarga",
    title: "Foto Keluarga",
    icon: Image,
    description: "Bingkai akrilik elegan untuk foto keluarga, momen spesial, dan kenangan berharga yang dipajang di rumah.",
    benefits: ["Tampilan mewah", "Tahan lama", "Mudah dibersihkan"],
    imageLabel: "Foto Keluarga",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "dekorasi-dinding",
    title: "Dekorasi Dinding",
    icon: Frame,
    description: "Bingkai premium untuk dekorasi dinding ruang tamu, kamar, atau koridor dengan kesan mewah dan elegan.",
    benefits: ["Kesan premium", "Anti pudar", "Finishing halus"],
    imageLabel: "Wall Decor",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
  {
    id: "sertifikat",
    title: "Sertifikat & Penghargaan",
    icon: Sparkles,
    description: "Bingkai untuk sertifikat, ijazah, dan penghargaan yang memberikan kesan profesional dan rapi.",
    benefits: ["Profesional", "Terlindungi", "Prestisius"],
    imageLabel: "Certificate",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "lukisan-art",
    title: "Lukisan & Art Print",
    icon: Frame,
    description: "Bingkai akrilik untuk lukisan dan art print dengan perlindungan UV dan tampilan gallery-quality.",
    benefits: ["UV protection", "Gallery quality", "Borderless look"],
    imageLabel: "Art Frame",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
];

const products = [
  {
    id: "bingkai-dinding",
    name: "Bingkai Dinding",
    tagline: "Wall mount dengan baut stainless",
    description: "Bingkai akrilik premium dipasang di dinding dengan spacer dan baut stainless. Memberikan efek floating elegan.",
    sizes: ["4R", "5R", "6R", "8R", "A4", "A3"],
    popular: true,
  },
  {
    id: "bingkai-magnet",
    name: "Bingkai Magnet",
    tagline: "Sistem magnet mudah ganti foto",
    description: "Bingkai dengan sistem magnet yang memudahkan ganti foto tanpa buka baut. Tampilan bersih tanpa visible hardware.",
    sizes: ["4R", "5R", "6R", "8R"],
  },
  {
    id: "bingkai-meja",
    name: "Bingkai Meja",
    tagline: "Standing frame dengan kaki akrilik",
    description: "Bingkai dengan kaki akrilik untuk ditaruh di meja, rak, atau console. Stabil dan elegan.",
    sizes: ["3R", "4R", "5R", "6R"],
  },
  {
    id: "bingkai-floating",
    name: "Bingkai Floating",
    tagline: "Efek melayang di dinding",
    description: "Bingkai dengan efek floating/melayang. Foto terlihat seperti mengambang di dinding. Very Instagram-worthy!",
    sizes: ["5R", "6R", "8R", "A4"],
  },
  {
    id: "bingkai-collage",
    name: "Bingkai Collage",
    tagline: "Multi foto dalam satu frame",
    description: "Bingkai dengan multiple openings untuk beberapa foto sekaligus. Cocok untuk koleksi foto atau timeline.",
    sizes: ["3 Foto", "4 Foto", "6 Foto", "Custom"],
  },
  {
    id: "bingkai-poster",
    name: "Bingkai Poster",
    tagline: "Ukuran besar untuk poster & art",
    description: "Bingkai ukuran besar untuk poster, art print, atau foto berukuran jumbo dengan perlindungan UV.",
    sizes: ["A3", "A2", "A1", "Custom"],
  },
];

const whyUs = [
  {
    icon: Sparkles,
    title: "Tidak Mudah Kuning",
    desc: "Material akrilik terbaik yang tetap jernih bertahun-tahun. Tidak seperti akrilik murah yang cepat kuning.",
  },
  {
    icon: Shield,
    title: "Kesan Mewah",
    desc: "Memberikan kesan mewah dan elegan untuk setiap dekorasi dinding Anda. Premium look guaranteed.",
  },
  {
    icon: Check,
    title: "Finishing Halus",
    desc: "Tepi halus dan poles mengkilap. Aman dipegang dan tidak melukai tangan.",
  },
  {
    icon: Clock,
    title: "Mudah Dipasang",
    desc: "Sudah termasuk perlengkapan pasang. Petunjuk jelas, bisa pasang sendiri dalam 5 menit.",
  },
];

const testimonials = [
  {
    name: "Anita Kusuma",
    role: "Ibu Rumah Tangga",
    company: "Jakarta Selatan",
    content: "Bingkai akrilik-nya bagus banget! Foto keluarga jadi terlihat lebih premium. Sudah 2 tahun dan masih jernih.",
    rating: 5,
  },
  {
    name: "Reza Firmansyah",
    role: "Photographer",
    company: "Studio Foto RZ",
    content: "Untuk klien wedding, saya selalu rekomendasikan bingkai ini. Hasilnya elegan dan tahan lama. Klien puas!",
    rating: 5,
  },
  {
    name: "Maya Indah",
    role: "Interior Designer",
    company: "Design Studio Maya",
    content: "Material premium dan finishing-nya sangat bagus. Cocok untuk project interior rumah mewah klien saya.",
    rating: 5,
  },
];

export default function BingkaiAkrilikPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  const whatsappLink = "https://wa.me/6281387003339?text=Halo,%20saya%20tertarik%20bingkai%20akrilik%20premium";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Bingkai Focus */}
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-rose-200 font-semibold mb-2">AKRILIK DISPLAY</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Bingkai Akrilik</span>
                <br />
                <span className="text-rose-200">Kualitas Premium</span>
              </h1>
              <p className="text-lg md:text-xl text-rose-100 leading-relaxed mb-8">
                Menggunakan material akrilik terbaik yang tidak mudah kuning. Memberikan kesan mewah dan elegan untuk setiap dekorasi dinding Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-700 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Konsultasi Sekarang
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all border border-white/30"
                >
                  <Gift className="w-5 h-5" />
                  Lihat Katalog
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Anti kuning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Kesan mewah</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Finishing halus</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Bingkai Akrilik Premium"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-rose-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-8 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-gray-600 text-sm font-medium">
            Dipercaya oleh Studio Foto dan Interior Designer
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-8 px-8 py-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <span className="text-gray-600 font-semibold whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="pt-8 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Koleksi Bingkai Akrilik
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan bingkai akrilik premium untuk foto, sertifikat, dan dekorasi dinding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  product.popular ? "border-rose-500 relative" : "border-transparent"
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    BEST SELLER
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                    <Frame className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-rose-600 text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="bg-rose-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-700 text-xs mb-2 uppercase tracking-wide">Ukuran Tersedia:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-xs border border-rose-100"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Tanya Harga & Stok
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contoh Hasil Terpasang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bingkai akrilik kami mempercantik berbagai ruangan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-rose-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-rose-500/20 rounded-lg flex items-center justify-center mb-2">
                      <Image className="w-8 h-8 text-rose-600" />
                    </div>
                    <span className="text-xs text-rose-700 font-medium">{item.category}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center truncate">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cocok untuk Berbagai Kebutuhan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari foto keluarga hingga dekorasi profesional, bingkai akrilik kami siap memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <useCase.icon className="w-5 h-5" />
                {useCase.title}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto bg-gray-100 relative overflow-hidden">
                  <img
                    src={activeUseCase.imageUrl}
                    alt={activeUseCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeUseCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{activeUseCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activeUseCase.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-rose-100 text-rose-700 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        <Check className="w-4 h-4" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Keunggulan Bingkai Akrilik Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Pelanggan?
            </h2>
            <p className="text-gray-600">Bingkai akrilik yang mempercantik banyak rumah dan ruangan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testi.content}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-rose-600">{testi.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                    <p className="text-xs text-rose-600">{testi.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Percantik Dinding Anda dengan Bingkai Premium
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi dan penawaran harga terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-rose-500/30"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500" />
              <span>Respon cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free konsultasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-rose-500" />
              <span>Garansi kualitas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white text-xl mb-3">Akrilik Display</p>
              <p className="text-sm leading-relaxed">Bingkai Akrilik Kualitas Premium</p>
            </div>

            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lokasi Workshop
              </p>
              <p className="text-sm leading-relaxed">
                Jl. KH. Hasyim Ashari No. 45, Tangerang, Banten 15119
              </p>
            </div>

            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </p>
              <a href="mailto:akrilikexpress@gmail.com" className="text-sm hover:text-white transition-colors">
                akrilikexpress@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                +62 813-8700-3339
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs">&copy; 2024 Akrilik Display. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Chat via WhatsApp"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat WhatsApp
        </span>
      </a>
    </main>
  );
}
