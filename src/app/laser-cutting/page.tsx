"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, Zap, Box, Sparkles, MapPin, Mail } from "lucide-react";

const brands = [
  "Industri Manufaktur", "Dekorasi Interior", "Signage Maker", "Model & Prototype", "Display Toko",
  "Kerajinan Custom", "Souvenir Maker", "Event Organizer", "Arsitektur", "Advertising"
];

const portfolio = [
  { name: "Display Box Premium", category: "Retail" },
  { name: "Koleksi Figure Case", category: "Hobby" },
  { name: "Dekorasi Ruangan", category: "Interior" },
  { name: "Prototype Industri", category: "Manufacturing" },
];

const useCases = [
  {
    id: "display-box",
    title: "Display Box",
    icon: Box,
    description: "Box akrilik presisi untuk display koleksi, figure, dan produk premium dengan hasil laser cutting super rapi.",
    benefits: ["Presisi tinggi", "Edge bening", "Custom size"],
    imageLabel: "Display Box",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "dekorasi",
    title: "Dekorasi & Ornamen",
    icon: Sparkles,
    description: "Ornamen dan dekorasi akrilik dengan detail presisi untuk interior rumah, kantor, dan event.",
    benefits: ["Detail halus", "Custom desain", "Finishing rapi"],
    imageLabel: "Decoration",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
  {
    id: "signage",
    title: "Signage Toko",
    icon: Zap,
    description: "Huruf timbul dan signage dengan laser cutting presisi untuk branding toko dan bisnis.",
    benefits: ["Huruf presisi", "Logo detail", "Tahan lama"],
    imageLabel: "Signage",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "industri",
    title: "Kebutuhan Industri",
    icon: Box,
    description: "Komponen dan part akrilik untuk kebutuhan industri, prototype, dan produksi massal.",
    benefits: ["Toleransi ketat", "Volume besar", "Konsisten"],
    imageLabel: "Industrial",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
];

const services = [
  {
    id: "cutting-presisi",
    name: "Laser Cutting Presisi",
    tagline: "Potong dengan akurasi 0.1mm",
    description: "Teknologi laser CO2 dengan akurasi tinggi. Hasil potongan halus tanpa gerigi, edge bening seperti kaca.",
    features: ["Akurasi 0.1mm", "Edge polish", "Bebas gerigi"],
    popular: true,
  },
  {
    id: "engraving",
    name: "Laser Engraving",
    tagline: "Ukir detail pada permukaan akrilik",
    description: "Engraving teks, logo, dan gambar pada akrilik dengan detail presisi. Cocok untuk personalisasi.",
    features: ["Detail halus", "Custom desain", "Multi depth"],
  },
  {
    id: "bending",
    name: "Heating & Bending",
    tagline: "Tekuk akrilik dengan sudut presisi",
    description: "Proses pemanasan dan tekuk akrilik dengan sudut yang tepat untuk display box dan rak.",
    features: ["Sudut presisi", "Tidak retak", "Clean bend"],
  },
  {
    id: "polishing",
    name: "Edge Polishing",
    tagline: "Tepi mengkilap seperti kaca",
    description: "Polish tepi akrilik agar halus dan mengkilap. Hasil premium tanpa visible cut marks.",
    features: ["Mirror finish", "Smooth edge", "Premium look"],
  },
  {
    id: "assembly",
    name: "Assembly & Bonding",
    tagline: "Rakit jadi produk siap pakai",
    description: "Layanan assembly dan pengeleman akrilik menjadi produk jadi seperti box, display, atau case.",
    features: ["Lem khusus", "Joint kuat", "Siap pakai"],
  },
  {
    id: "custom-project",
    name: "Custom Project",
    tagline: "Wujudkan ide unik Anda",
    description: "Konsultasi dan pengerjaan project custom dari desain hingga produk jadi sesuai kebutuhan.",
    features: ["Konsultasi free", "Prototype", "Volume order"],
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Teknologi Laser Terbaru",
    desc: "Menggunakan mesin laser CO2 terbaru dengan presisi hingga 0.1mm untuk hasil super rapi.",
  },
  {
    icon: Check,
    title: "Hasil Super Rapi",
    desc: "Tepi potongan halus tanpa gerigi. Edge bening seperti kaca tanpa perlu polish tambahan.",
  },
  {
    icon: Clock,
    title: "Proses Cepat",
    desc: "Order selesai dalam 1-3 hari kerja. Untuk volume besar, tetap on-time dan konsisten.",
  },
  {
    icon: Shield,
    title: "Garansi Presisi",
    desc: "Tidak sesuai spesifikasi? Kami kerjakan ulang tanpa biaya tambahan.",
  },
];

const testimonials = [
  {
    name: "Hendro Santoso",
    role: "Owner",
    company: "Hobby Store Jakarta",
    content: "Display box untuk figure koleksi hasilnya presisi banget. Edge-nya bening seperti kaca. Pelanggan saya sangat puas!",
    rating: 5,
  },
  {
    name: "Indra Wijaya",
    role: "Production Manager",
    company: "PT Signage Indo",
    content: "Partner terbaik untuk cutting huruf dan logo. Kualitas konsisten meski order ribuan piece. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rina Permata",
    role: "Interior Designer",
    company: "Design Studio RP",
    content: "Custom ornamen dekorasi dengan detail presisi. Hasil laser cutting-nya sangat rapi, cocok untuk project premium.",
    rating: 5,
  },
];

export default function LaserCuttingPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20butuh%20jasa%20laser%20cutting%20akrilik";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Laser Cutting Focus */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-semibold mb-2">AKRILIK DISPLAY</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-slate-300">Ahlinya</span>
                <br />
                <span className="text-white">Jasa Laser Cutting Akrilik</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">
                Hasil Super Rapi
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Menggunakan teknologi laser terbaru untuk hasil potong yang presisi hingga detail terkecil. Cocok untuk kebutuhan industri, dekorasi, hingga signage toko.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Pesan Sekarang
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all border border-white/30"
                >
                  <Gift className="w-5 h-5" />
                  Minta Sample
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Presisi 0.1mm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Edge super halus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Proses cepat</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Laser Cutting Akrilik"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Super Presisi
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
            Dipercaya oleh Berbagai Industri untuk Kebutuhan Laser Cutting
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

      {/* Services */}
      <section id="services" className="pt-8 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Laser Cutting Lengkap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari cutting presisi hingga assembly produk jadi, semua kebutuhan akrilik Anda kami layani.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? "border-amber-500 relative" : "border-transparent"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    UNGGULAN
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{service.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-3">{service.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-700 text-xs mb-2 uppercase tracking-wide">Keunggulan:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center gap-1 bg-white text-gray-700 px-2 py-1 rounded text-xs border border-slate-200"
                        >
                          <Check className="w-3 h-3 text-green-500" />
                          {feature}
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
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Konsultasi Kebutuhan Anda
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contoh Hasil Laser Cutting Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hasil presisi untuk berbagai kebutuhan industri dan retail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-amber-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-slate-500/20 rounded-lg flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-slate-600" />
                    </div>
                    <span className="text-xs text-slate-700 font-medium">{item.category}</span>
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
              Dari display box hingga kebutuhan industri, laser cutting akrilik kami siap memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-slate-800 text-white shadow-lg"
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
                        className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-sm font-medium"
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
              Kenapa Pilih Laser Cutting Kami?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Pelanggan?
            </h2>
            <p className="text-gray-600">Hasil laser cutting presisi yang memuaskan berbagai industri.</p>
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
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-slate-600">{testi.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                    <p className="text-xs text-amber-600">{testi.company}</p>
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
            Butuh Jasa Laser Cutting Presisi?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kirim desain Anda, kami berikan penawaran harga dalam 1 jam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Respon 1 jam</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free konsultasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Garansi presisi</span>
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
              <p className="text-sm leading-relaxed">Ahlinya Jasa Laser Cutting Akrilik</p>
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
                +62 812-1105-9138
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
