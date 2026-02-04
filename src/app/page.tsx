"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, Building2, UtensilsCrossed, Briefcase, MapPin, Mail } from "lucide-react";

const brands = [
  "RS Medika", "Hotel Grand", "RM Sederhana", "Kantor ABC", "RS Sejahtera",
  "Hotel Horizon", "Kantor XYZ", "Restoran Emas", "RS Utama", "Hotel Premium"
];

const portfolio = [
  { name: "Hotel Grand Malang", category: "Hotel" },
  { name: "RS Medika Sejahtera", category: "Rumah Sakit" },
  { name: "RM Sederhana Pusat", category: "Restoran" },
  { name: "Kantor ABC Corp", category: "Office" },
];

const useCases = [
  {
    id: "rumah-sakit",
    title: "Rumah Sakit",
    icon: Building2,
    description: "Jadwal dokter, informasi layanan, dan arahan pengunjung yang selalu update dan mudah dibaca.",
    benefits: ["Mudah diupdate", "Tahan lama", "Tampilan rapi"],
    imageLabel: "Jadwal Dokter",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "hotel",
    title: "Hotel",
    icon: Building2,
    description: "Info fasilitas, welcome guest, dan promo yang terlihat profesional di area resepsionis dan lift.",
    benefits: ["Tampilan elegan", "Mudah dibaca", "Kesan premium"],
    imageLabel: "Info Fasilitas",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "restoran",
    title: "Restoran",
    icon: UtensilsCrossed,
    description: "Menu dan promo yang menarik perhatian pelanggan dan mudah diganti sesuai kebutuhan.",
    benefits: ["Menu jelas", "Mudah ganti", "Higienis"],
    imageLabel: "Menu Restoran",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
  {
    id: "office",
    title: "Office",
    icon: Briefcase,
    description: "Pengumuman internal, info meeting, dan company values yang tampil profesional.",
    benefits: ["Komunikasi efektif", "Profesional", "Mudah update"],
    imageLabel: "Info Kantor",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
];

const products = [
  {
    id: "full-akrilik",
    name: "Full Acrylic Premium",
    tagline: "Tampilan paling bersih dan solid. Cocok untuk penggunaan jangka panjang.",
    discount: null,
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227212/full_akrilik_vioros.webp",
    benefits: ["Tidak pakai pin — dinding aman", "Mudah ganti isi poster", "Tampilan tetap rapi"],
    details: [
      { label: "Bahan", value: "Acrylic Bening 3 mm Double Layer" },
      { label: "Cetak", value: "Artpaper 260 gsm" },
      { label: "Pemasangan", value: "Baut stainless + skrup" },
    ],
  },
  {
    id: "akrilik-mdf",
    name: "Acrylic + MDF",
    tagline: "Tampilan profesional dengan harga lebih efisien.",
    discount: "Hingga 30% lebih terjangkau",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227216/akrilik_dan_adf_tckz5f.webp",
    benefits: ["Tidak pakai pin — dinding aman", "Mudah ganti isi poster", "Tampilan tetap rapi"],
    details: [
      { label: "Bahan", value: "Depan Acrylic 3 mm, Belakang MDF 3 mm" },
      { label: "Cetak", value: "Artpaper 260 gsm" },
      { label: "Pemasangan", value: "Baut stainless + skrup" },
    ],
  },
  {
    id: "full-pvc",
    name: "Full PVC Economy",
    tagline: "Solusi paling hemat untuk kebutuhan budget-sensitive.",
    discount: "Hingga 50% lebih terjangkau",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227422/fullpvc_mysysq.webp",
    benefits: ["Tidak pakai pin — dinding aman", "Mudah ganti isi poster", "Tampilan tetap rapi"],
    details: [
      { label: "Bahan", value: "PVC Premium 3 mm finishing glossy" },
      { label: "Cetak", value: "Artpaper 260 gsm" },
      { label: "Pemasangan", value: "Double tape 3M" },
    ],
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "98% pengerjaan sesuai deadline. Telat? Ada kompensasi.",
  },
  {
    icon: Gift,
    title: "Free Sample",
    desc: "Lihat kualitas dulu sebelum order.",
  },
  {
    icon: Shield,
    title: "Garansi Lengkap",
    desc: "Rusak atau salah produksi? Diganti.",
  },
  {
    icon: Check,
    title: "Tanpa Biaya Siluman",
    desc: "Harga jelas sejak awal.",
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Manager Operasional",
    company: "Hotel Grand Malang",
    content: "Pengerjaan sangat cepat dan tepat waktu. Frame berkualitas dan pengiriman aman. Sudah 3 kali repeat order.",
    rating: 5,
  },
  {
    name: "Dr. Siti Rahayu",
    role: "Direktur",
    company: "RS Medika Sejahtera",
    content: "Sudah 2 tahun pakai frame dari mereka untuk semua ruang di rumah sakit. Tidak pernah mengecewakan. Recommended!",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    role: "Owner",
    company: "RM Sederhana",
    content: "Free sample sangat membantu. Bisa lihat kualitas dulu sebelum order banyak. Harga juga kompetitif.",
    rating: 5,
  },
];

export default function LandingPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);
  const [activeProduct, setActiveProduct] = useState(products[0]);

  const whatsappLink = "https://wa.me/6281213848845?text=Halo,%20saya%20ingin%20info%20frame%20akrilik";

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                Frame Akrilik <span className="text-blue-300">Profesional</span>
                <br />
                untuk Area Publik
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                Frame akrilik rapi dan tahan lama, dengan pengerjaan tepat waktu, garansi lengkap, dan free sample sebelum order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-blue-500/30"
                >
                  <Phone className="w-5 h-5" />
                  Konsultasi Gratis
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all border border-white/30"
                >
                  <Gift className="w-5 h-5" />
                  Minta Free Sample
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>98% on-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Bebas revisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Tanpa biaya tersembunyi</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Frame Akrilik Premium"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Garansi Lengkap
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Partners - Auto Scrolling */}
      <section className="py-8 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-gray-600 text-sm font-medium">
            Dipercaya oleh Banyak Bisnis untuk Kebutuhan Frame Akrilik
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

      {/* 2. Products */}
      <section id="products" className="pt-8 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pilih Frame Sesuai Kebutuhan & Budget
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Semua varian dibuat rapi, mudah dipasang, dan siap dipakai di area publik. Sudah termasuk kelengkapan pemasangan.
            </p>
          </div>

          {/* Product Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`relative px-4 md:px-6 py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
                  activeProduct.id === product.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {product.name}
                {product.discount && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Promo
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Selected Product Detail */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Discount Badge */}
              {activeProduct.discount && (
                <div className="bg-red-500 text-white text-sm font-semibold text-center py-2 px-4">
                  {activeProduct.discount}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="aspect-square md:aspect-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  {activeProduct.imageUrl ? (
                    <img
                      src={activeProduct.imageUrl}
                      alt={activeProduct.name}
                      className="w-full h-full object-cover object-[30%_center]"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-4xl">🖼️</span>
                      </div>
                      <span className="text-lg text-blue-700 font-semibold">Frame Akrilik</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeProduct.name}</h3>
                    <p className="text-gray-600">{activeProduct.tagline}</p>
                  </div>

                  {/* Manfaat */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Praktis Dipasang, Mudah Diupdate</h4>
                    <div className="space-y-2">
                      {activeProduct.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detail Teknis */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Detail Teknis</h4>
                    <div className="space-y-2">
                      {activeProduct.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-gray-500 min-w-[80px]">{detail.label}:</span>
                          <span className="text-gray-700">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Bingung pilih yang mana? Konsultasikan kebutuhan Anda dengan tim kami. Kami bantu rekomendasikan produk terbaik sesuai budget dan kebutuhan Anda.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* 3. Portfolio - Hasil Pekerjaan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contoh Hasil Nyata yang Sudah Terpasang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hasil konsisten, rapi, dan sesuai spesifikasi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-blue-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-2xl">🖼️</span>
                    </div>
                    <span className="text-xs text-blue-700 font-medium">{item.category}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center truncate">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Use Cases - Interactive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cocok untuk Berbagai Kebutuhan Informasi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Digunakan untuk pengumuman, menu, jadwal, dan informasi penting yang perlu terlihat rapi dan mudah diperbarui.
            </p>
          </div>

          {/* Horizontal Tabs */}
          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <useCase.icon className="w-5 h-5" />
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Content Area - Side by Side Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Single Large Image */}
                <div className="aspect-square md:aspect-auto bg-gray-100 relative overflow-hidden">
                  <img
                    src={activeUseCase.imageUrl}
                    alt={activeUseCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description & Benefits */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeUseCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{activeUseCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activeUseCase.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium"
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

      {/* 5. Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kenapa Banyak yang Repeat Order?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600">Mereka memilih karena ingin hasil aman dan tanpa ribet.</p>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">{testi.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                    <p className="text-xs text-blue-600">{testi.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Siap Pasang Frame Tanpa Ribet?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan free sample dan konsultasi gratis sebelum order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Respon dalam 1 jam</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free sample</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Garansi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="font-bold text-white text-xl mb-3">Frame Akrilik Premium</p>
              <p className="text-sm leading-relaxed">Tepat Waktu | Bergaransi | Berkualitas</p>
            </div>

            {/* Kantor Pusat */}
            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kantor Pusat
              </p>
              <p className="text-sm leading-relaxed">
                Jl. KH. Hasyim Ashari No. 45, RT.004 RW.007, Buaran Indah, Kec. Cipondoh, Kota Tangerang, Banten 15119
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </p>
              <a href="mailto:akrilikexpress@gmail.com" className="text-sm hover:text-white transition-colors">
                akrilikexpress@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="font-semibold text-white mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                +62 812-1384-8845
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs">&copy; 2024 Frame Akrilik Premium. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
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
