"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Gift, Star, Award, Building2, Users, MapPin, Mail } from "lucide-react";

const brands = [
  "Nanotech Indonesia", "Bank Mandiri", "Telkom Indonesia", "Pertamina", "PLN",
  "Unilever", "Astra", "Garuda Indonesia", "BUMN Event", "Corporate Summit"
];

const portfolio = [
  { name: "Nanotech Indonesia Global", category: "Corporate" },
  { name: "Annual Award Ceremony", category: "Event" },
  { name: "Kantor Pusat Bank XYZ", category: "Office" },
  { name: "Signage Gedung Premium", category: "Signage" },
];

const useCases = [
  {
    id: "event",
    title: "Event & Award",
    icon: Award,
    description: "Plakat penghargaan untuk ceremony, annual award, dan acara corporate dengan finishing premium.",
    benefits: ["Desain eksklusif", "Finishing mewah", "Custom branding"],
    imageLabel: "Event Award",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "kantor",
    title: "Kantor & Lobby",
    icon: Building2,
    description: "Signage direktori, name desk, dan papan informasi untuk kantor dengan tampilan profesional.",
    benefits: ["Tampilan elegan", "Mudah dibaca", "Tahan lama"],
    imageLabel: "Office Signage",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
  {
    id: "direktori",
    title: "Direktori Gedung",
    icon: Users,
    description: "Papan direktori lantai, arah ruangan, dan informasi gedung yang informatif dan mudah dimengerti.",
    benefits: ["Informatif", "Desain bersih", "Multi bahasa"],
    imageLabel: "Directory",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "branding",
    title: "Logo & Branding",
    icon: Building2,
    description: "Logo timbul dan branding untuk dinding kantor, resepsionis, dan area publik dengan kesan premium.",
    benefits: ["3D effect", "Premium look", "Custom color"],
    imageLabel: "Logo Branding",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
];

const products = [
  {
    id: "plakat-award",
    name: "Plakat Award",
    tagline: "Penghargaan eksklusif untuk acara spesial",
    description: "Plakat akrilik premium untuk award ceremony. Bisa custom desain, logo, dan nama penerima.",
    sizes: ["15x20cm", "20x25cm", "25x30cm", "Custom"],
    popular: true,
  },
  {
    id: "name-desk",
    name: "Name Desk",
    tagline: "Papan nama meja eksekutif",
    description: "Name desk akrilik untuk meja kerja direktur dan eksekutif. Tampilan elegan dan profesional.",
    sizes: ["20x6cm", "25x8cm", "30x10cm"],
  },
  {
    id: "door-sign",
    name: "Door Sign",
    tagline: "Papan nama ruangan premium",
    description: "Signage pintu untuk ruang meeting, direktur, atau departemen dengan desain modern.",
    sizes: ["15x5cm", "20x8cm", "25x10cm"],
  },
  {
    id: "direktori-lantai",
    name: "Direktori Lantai",
    tagline: "Papan informasi arah gedung",
    description: "Direktori dengan informasi lantai, ruangan, dan arah. Desain bersih dan mudah dibaca.",
    sizes: ["40x60cm", "50x70cm", "60x90cm"],
  },
  {
    id: "logo-dinding",
    name: "Logo Dinding",
    tagline: "Logo timbul untuk branding",
    description: "Logo akrilik 3D untuk dinding lobby, resepsionis, atau ruang meeting. Kesan premium.",
    sizes: ["50cm", "80cm", "100cm", "Custom"],
  },
  {
    id: "standing-sign",
    name: "Standing Sign",
    tagline: "Signage berdiri untuk event",
    description: "Standing sign untuk event, pameran, atau lobby. Mudah dipindah dan eye-catching.",
    sizes: ["A3 Standing", "A2 Standing", "Custom"],
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "Pengerjaan profesional dengan deadline yang dijamin. Telat? Ada kompensasi.",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    desc: "Material akrilik terbaik dengan finishing detail presisi tinggi.",
  },
  {
    icon: Shield,
    title: "Garansi Lengkap",
    desc: "Garansi produk dan pengerjaan ulang jika tidak sesuai spesifikasi.",
  },
  {
    icon: Check,
    title: "Custom Desain",
    desc: "Tim desain siap bantu wujudkan ide Anda dengan hasil maksimal.",
  },
];

const testimonials = [
  {
    name: "Diana Putri",
    role: "HR Manager",
    company: "PT Teknologi Global",
    content: "Plakat award untuk ceremony tahunan kami sangat memuaskan. Finishing premium dan tepat waktu. Pasti repeat order!",
    rating: 5,
  },
  {
    name: "Rudi Hermawan",
    role: "General Affairs",
    company: "Bank Nasional Indonesia",
    content: "Signage direktori kantor pusat kami dikerjakan dengan detail. Hasil rapi dan sesuai corporate identity.",
    rating: 5,
  },
  {
    name: "Santi Wijaya",
    role: "Event Coordinator",
    company: "EO Premium Events",
    content: "Partner terbaik untuk plakat event. Bisa custom desain kompleks dan selalu on time meski deadline mepet.",
    rating: 5,
  },
];

export default function PlakatAkrilikPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20butuh%20plakat%20akrilik%20custom";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Plakat Focus */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-amber-200 font-semibold mb-2">VENDOR PLAKAT AKRILIK</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Plakat Akrilik</span>
                <br />
                <span className="text-amber-200">Custom untuk Event & Kantor</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-100 leading-relaxed mb-8">
                Plakat custom kualitas premium. Pengerjaan profesional, detail presisi, dan siap kirim tepat waktu untuk event dan kebutuhan kantor Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-amber-700 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
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
                  Lihat Katalog
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Kualitas premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Detail presisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>Tepat waktu</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Plakat Akrilik Premium"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-amber-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
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
            Dipercaya oleh Perusahaan dan Event Organizer Ternama
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
              Produk Plakat & Signage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan plakat dan signage akrilik premium untuk event dan kebutuhan kantor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  product.popular ? "border-amber-500 relative" : "border-transparent"
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    BEST SELLER
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-700 text-xs mb-2 uppercase tracking-wide">Ukuran Tersedia:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-xs border border-amber-100"
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
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Tanya Harga & Custom
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Portfolio Hasil Kerja Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai project plakat dan signage yang sudah kami kerjakan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-amber-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-lg flex items-center justify-center mb-2">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <span className="text-xs text-amber-700 font-medium">{item.category}</span>
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
              Solusi untuk Berbagai Kebutuhan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari award ceremony hingga signage kantor, plakat akrilik kami siap memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-500/30"
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
              Kenapa Pilih Kami sebagai Vendor?
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
      <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimoni Klien Kami
            </h2>
            <p className="text-gray-600">Dipercaya oleh berbagai perusahaan dan event organizer.</p>
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
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-600">{testi.name[0]}</span>
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
            Butuh Plakat untuk Event atau Kantor?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-amber-500/30"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Respon cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free desain</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" />
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
              <p className="text-sm leading-relaxed">Vendor Plakat Akrilik Profesional</p>
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
