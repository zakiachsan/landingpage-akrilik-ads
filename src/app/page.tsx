"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, ChevronRight, MapPin, Building2, UtensilsCrossed, Briefcase } from "lucide-react";

const brands = [
  "RS Medika", "Hotel Grand", "RM Sederhana", "Kantor ABC", "RS Sejahtera", 
  "Hotel Horizon", "Kantor XYZ", "Restoran Emas", "RS Utama", "Hotel Premium"
];

const useCases = [
  {
    id: "rumah-sakit",
    title: "Rumah Sakit",
    icon: Building2,
    image: "/frame-rumah-sakit.jpg",
    description: "Frame informasi di lift dan ruang tunggu untuk pengumuman jadwal dokter, informasi layanan, dan arahan pengunjung.",
    benefits: ["Mudah update informasi", "Tahan lama", "Tampilan profesional"],
  },
  {
    id: "hotel",
    title: "Hotel",
    icon: Building2,
    image: "/frame-hotel.jpg",
    description: "Pengumuman hotel dan informasi fasilitas di lift dan resepsionis untuk memberikan kenyamanan tamu.",
    benefits: ["Tampilan elegan", "Mudah dibaca", "Terlihat premium"],
  },
  {
    id: "restoran",
    title: "Restoran",
    icon: UtensilsCrossed,
    image: "/frame-restoran.jpg",
    description: "Foto menu dan promo menarik yang ditempel di dinding untuk menarik perhatian pelanggan.",
    benefits: ["Menu terlihat jelas", "Mudah ganti promo", "Higienis"],
  },
  {
    id: "office",
    title: "Office",
    icon: Briefcase,
    image: "/frame-office.jpg",
    description: "Frame informasi dan pengumuman internal di lift dan ruang meeting untuk komunikasi karyawan.",
    benefits: ["Komunikasi efektif", "Profesional", "Mudah update"],
  },
];

const products = [
  {
    name: "Full Akrilik Premium",
    tagline: "Terbaik untuk tampilan premium",
    material: "Akrilik bening premium grade A",
    includes: ["4 pcs baut stainless", "4 pcs skrup", "Kotak packaging"],
    price: "Rp 450.000",
    image: "/produk-full-akrilik.jpg",
  },
  {
    name: "Depan Akrilik + MDF",
    tagline: "Paling populer & terjangkau",
    material: "Depan akrilik, belakang MDF solid",
    includes: ["4 pcs baut stainless", "4 pcs skrup", "Kotak packaging"],
    price: "Rp 350.000",
    image: "/produk-mdf.jpg",
    popular: true,
  },
  {
    name: "Full PVC Economy",
    tagline: "Solusi hemat budget",
    material: "PVC premium dengan double tape",
    includes: ["4 pcs double tape 3M", "Kotak packaging"],
    price: "Rp 250.000",
    image: "/produk-pvc.jpg",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "95% On-Time Delivery",
    desc: "Garansi tepat waktu atau uang kembali 50%. Kami paham deadline Anda penting.",
  },
  {
    icon: Gift,
    title: "Free Sample",
    desc: "Lihat kualitas bahan sebelum memutuskan order. Gratis tanpa biaya.",
  },
  {
    icon: Shield,
    title: "Garansi Lengkap",
    desc: "Rusak saat pengiriman atau cacat produksi? Kami ganti baru tanpa biaya.",
  },
  {
    icon: Check,
    title: "No Hidden Cost",
    desc: "Transparan dari awal. Apa yang disepakati, itu yang berlaku. Tidak ada biaya tambahan.",
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

  const whatsappLink = "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20info%20frame%20akrilik";

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                500+ Frame Terkirim ke Seluruh Indonesia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Frame Akrilik <span className="text-blue-300">Premium</span>
                <br />
                untuk Bisnis Anda
              </h1>
              <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                Frame berkualitas untuk rumah sakit, hotel, restoran, dan kantor. 
                <strong className="text-white"> Tepat waktu, bergaransi, free sample.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-blue-500/30"
                >
                  <Phone className="w-5 h-5" />
                  Konsultasi Gratis
                </a>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all border border-white/30"
                >
                  Lihat Produk
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span>Free Sample</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span>Garansi On-Time</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-lg border-2 border-blue-500/40 flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-800">Frame<br/>Akrilik</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">4.9/5</span>
                </div>
                <p className="text-sm text-gray-500">Dari 100+ review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Partners - Auto Scrolling */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider font-semibold">
            Dipercaya oleh Brand Terkemuka
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

      {/* 3. Use Cases - Interactive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Digunakan di Berbagai Tempat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Frame akrilik kami telah digunakan oleh berbagai bisnis. Pilih untuk melihat detailnya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Options */}
            <div className="space-y-3">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    activeUseCase.id === useCase.id
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeUseCase.id === useCase.id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      <useCase.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{useCase.title}</h3>
                      <p className="text-sm text-gray-500">Klik untuk detail</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${
                      activeUseCase.id === useCase.id ? "rotate-90 text-blue-500" : "text-gray-400"
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Active Detail */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
                <activeUseCase.icon className="w-24 h-24 text-blue-500/50" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeUseCase.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{activeUseCase.description}</p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-700 text-sm">Keunggulan:</p>
                <div className="flex flex-wrap gap-2">
                  {activeUseCase.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Check className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pilihan Produk
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tersedia 3 varian frame dengan bahan berkualitas. Semua sudah termasuk kelengkapan pemasangan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl ${
                  product.popular ? "border-blue-500 relative" : "border-transparent"
                }`}
              >
                {product.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    PALING POPULER
                  </div>
                )}
                <div className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${product.popular ? "pt-8" : ""}`}>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded border-2 border-blue-500/40 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-800 text-center px-2">{product.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-sm font-semibold mb-1">{product.tagline}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.material}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-gray-700 text-sm mb-2">Termasuk:</p>
                    <ul className="space-y-1">
                      {product.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-3xl font-bold text-blue-600">{product.price}</p>
                    <p className="text-sm text-gray-500">per pcs (ukuran A3)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kenapa Harus Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keunggulan kami dibandingkan kompetitor lain
            </p>
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
            <p className="text-gray-600">Testimoni dari customer kami</p>
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap untuk Memesan?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan free sample dan konsultasi gratis. Kami siap membantu kebutuhan frame akrilik Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all hover:bg-gray-100 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Hubungi Kami via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Response dalam 1 jam</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garansi terbaik</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Free sample</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-white text-lg mb-2">Frame Akrilik Premium</p>
          <p className="text-sm">Tepat Waktu | Bergaransi | Berkualitas</p>
          <p className="mt-4 text-xs">&copy; 2024 Frame Akrilik Premium. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
