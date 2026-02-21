"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, Scissors, Box, Layers, MapPin, Mail } from "lucide-react";

const brands = [
  "Interior Designer", "Toko Dekorasi", "Event Organizer", "Signage Maker", "Kontraktor",
  "Advertising Agency", "Display Vendor", "Gift Shop", "Property Developer", "Studio Foto"
];

const portfolio = [
  { name: "Display Sepatu Premium", category: "Retail" },
  { name: "Photo Frame Custom", category: "Personal" },
  { name: "Food Tray Restoran", category: "F&B" },
  { name: "Signage Toko", category: "Commercial" },
];

const useCases = [
  {
    id: "display-produk",
    title: "Display Produk",
    icon: Box,
    description: "Cutting presisi untuk display sepatu, perhiasan, kosmetik, dan produk retail lainnya. Hasil bersih tanpa goresan.",
    benefits: ["Presisi tinggi", "Hasil halus", "Custom ukuran"],
    imageLabel: "Display Produk",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "photo-frame",
    title: "Photo Frame",
    icon: Layers,
    description: "Potongan akrilik untuk frame foto berbagai ukuran. Tepi halus dan aman, siap rakit atau dijual.",
    benefits: ["Tepi halus", "Anti gores", "Multi ukuran"],
    imageLabel: "Photo Frame",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
  {
    id: "food-tray",
    title: "Food Tray",
    icon: Box,
    description: "Cutting akrilik food grade untuk nampan makanan, display kue, dan perlengkapan F&B lainnya.",
    benefits: ["Food grade", "Mudah dibersihkan", "Tahan lama"],
    imageLabel: "Food Tray",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
  {
    id: "signage",
    title: "Signage & Papan Nama",
    icon: Scissors,
    description: "Potongan akrilik untuk papan nama, nomor rumah, dan signage dengan finishing premium.",
    benefits: ["Presisi detail", "Finishing rapi", "Custom desain"],
    imageLabel: "Signage",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
];

const services = [
  {
    id: "cutting-lurus",
    name: "Cutting Lurus",
    tagline: "Potongan straight dengan presisi tinggi",
    description: "Cutting lurus untuk lembaran akrilik berbagai ketebalan. Hasil potongan halus tanpa gerigi.",
    sizes: ["2mm", "3mm", "5mm", "8mm", "10mm"],
    popular: true,
  },
  {
    id: "cutting-bentuk",
    name: "Cutting Bentuk",
    tagline: "Custom shape sesuai desain Anda",
    description: "Cutting bentuk custom seperti lingkaran, segitiga, atau bentuk kompleks sesuai file desain.",
    sizes: ["Lingkaran", "Oval", "Custom Shape"],
  },
  {
    id: "cutting-huruf",
    name: "Cutting Huruf & Logo",
    tagline: "Presisi untuk branding dan signage",
    description: "Cutting huruf dan logo dengan detail presisi. Cocok untuk papan nama dan signage bisnis.",
    sizes: ["Huruf Timbul", "Logo Custom", "Nomor"],
  },
  {
    id: "cutting-lubang",
    name: "Cutting dengan Lubang",
    tagline: "Termasuk drilling untuk pemasangan",
    description: "Cutting akrilik lengkap dengan lubang untuk baut atau mounting. Siap pasang langsung.",
    sizes: ["2 Lubang", "4 Lubang", "Custom"],
  },
  {
    id: "polish-edge",
    name: "Polish & Finishing",
    tagline: "Tepi halus seperti kaca",
    description: "Layanan polish tepi akrilik agar halus mengkilap. Aman dipegang tanpa tajam.",
    sizes: ["Polish Standar", "Polish Premium"],
  },
  {
    id: "bending",
    name: "Bending Akrilik",
    tagline: "Tekuk sesuai sudut yang diinginkan",
    description: "Layanan bending/tekuk akrilik dengan sudut presisi. Cocok untuk display dan rak.",
    sizes: ["90 Derajat", "Custom Angle"],
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Proses Cepat",
    desc: "Cutting selesai dalam 1-3 hari kerja. Order banyak? Tetap on time.",
  },
  {
    icon: Scissors,
    title: "Hasil Super Halus",
    desc: "Mesin presisi tinggi, tepi potongan bersih tanpa gerigi.",
  },
  {
    icon: Shield,
    title: "Garansi Potong Ulang",
    desc: "Ukuran tidak sesuai? Kami potong ulang tanpa biaya tambahan.",
  },
  {
    icon: Check,
    title: "Harga Transparan",
    desc: "Hitung harga langsung. Tanpa biaya tersembunyi.",
  },
];

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Owner",
    company: "Toko Display Jakarta",
    content: "Sudah 2 tahun langganan cutting di sini. Hasilnya selalu presisi dan tepat waktu. Sangat recommended!",
    rating: 5,
  },
  {
    name: "Rina Susanti",
    role: "Interior Designer",
    company: "Studio Kreasi",
    content: "Cutting bentuk custom yang kompleks pun hasilnya rapi. Tim-nya juga helpful banget kasih saran material.",
    rating: 5,
  },
  {
    name: "Budi Hartono",
    role: "Manager Produksi",
    company: "CV Signage Pro",
    content: "Partner terbaik untuk cutting huruf dan logo. Kualitas konsisten meski order dalam jumlah besar.",
    rating: 5,
  },
];

export default function CuttingAkrilikPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20butuh%20jasa%20cutting%20akrilik";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Cutting Focus */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-red-200 font-semibold mb-2">SOLUSI CUTTING AKRILIK</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Cutting Akrilik</span>
                <br />
                <span className="text-red-200">Order Tanpa Ribet</span>
              </h1>
              <p className="text-lg md:text-xl text-red-100 leading-relaxed mb-8">
                Butuh potongan akrilik cepat untuk proyek Anda? Kami melayani jasa cutting custom dengan hasil halus dan ukuran akurat sesuai permintaan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-red-700 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
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
                  Minta Sample Potongan
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Hasil halus & presisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Proses 1-3 hari</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Custom ukuran</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Cutting Akrilik Custom"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Presisi Tinggi
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
            Dipercaya oleh Berbagai Industri untuk Kebutuhan Cutting Akrilik
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
              Layanan Cutting Lengkap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai jenis cutting akrilik dengan hasil presisi dan finishing premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? "border-red-500 relative" : "border-transparent"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    TERLARIS
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Scissors className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{service.name}</h3>
                  <p className="text-red-600 text-sm font-medium mb-3">{service.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-700 text-xs mb-2 uppercase tracking-wide">Opsi Tersedia:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.sizes.map((size, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-xs border border-red-100"
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
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Konsultasi Kebutuhan Cutting
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contoh Hasil Cutting Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hasil konsisten, presisi, dan sesuai spesifikasi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-red-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center mb-2">
                      <Scissors className="w-8 h-8 text-red-600" />
                    </div>
                    <span className="text-xs text-red-700 font-medium">{item.category}</span>
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
              Dari display produk hingga signage bisnis, cutting akrilik kami siap memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
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
                        className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-sm font-medium"
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
              Kenapa Pilih Jasa Cutting Kami?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-gray-600">Hasil cutting presisi yang memuaskan berbagai bisnis.</p>
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
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-red-600">{testi.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                    <p className="text-xs text-red-600">{testi.company}</p>
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
            Siap Order Cutting Akrilik?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kirim ukuran dan desain Anda, kami berikan harga terbaik dalam 1 jam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-red-500/30"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Respon cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free konsultasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500" />
              <span>Garansi hasil</span>
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
              <p className="text-sm leading-relaxed">Solusi Cutting Akrilik Profesional</p>
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
