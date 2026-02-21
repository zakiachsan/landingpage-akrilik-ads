"use client";

import { useState } from "react";
import { Phone, Check, Clock, Shield, Star, Frame, Layers, Sparkles, MapPin, Mail } from "lucide-react";

const brands = [
  "Honda Dealer", "Peugeot Showroom", "Prestige Auto", "Luxury Boutique", "Premium Gallery",
  "Corporate Office", "Hotel Lobby", "Fashion Store", "Car Dealership", "Exhibition Center"
];

const portfolio = [
  { name: "Showroom Honda", category: "Automotive" },
  { name: "Galeri Seni Premium", category: "Gallery" },
  { name: "Brochure Display Hotel", category: "Hospitality" },
  { name: "Product Display Retail", category: "Retail" },
];

const useCases = [
  {
    id: "display-produk",
    title: "Display Produk",
    icon: Layers,
    description: "Frame akrilik untuk display brosur, katalog, dan informasi produk di showroom dan toko retail.",
    benefits: ["Tampilan rapi", "Multi slot", "Easy access"],
    imageLabel: "Product Display",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "brochure-holder",
    title: "Brochure Holder",
    icon: Frame,
    description: "Tempat brosur akrilik yang elegan untuk resepsionis, lobby, dan area tunggu.",
    benefits: ["Desain bersih", "Tahan lama", "Multi pocket"],
    imageLabel: "Brochure Holder",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
  {
    id: "photo-frame",
    title: "Photo Frame",
    icon: Sparkles,
    description: "Frame foto akrilik kristal untuk koleksi pribadi, hadiah, atau dekorasi ruangan.",
    benefits: ["Bening kristal", "Anti kuning", "Elegan"],
    imageLabel: "Photo Frame",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "signage",
    title: "Signage Display",
    icon: Frame,
    description: "Standing frame untuk signage, menu, dan informasi dengan tampilan profesional.",
    benefits: ["Eye-catching", "Mudah ganti", "Stabil"],
    imageLabel: "Signage",
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
];

const products = [
  {
    id: "frame-photo",
    name: "Frame Foto Akrilik",
    tagline: "Bening kristal untuk foto berharga",
    description: "Frame foto akrilik premium dengan material bening kristal. Tidak mudah kuning dan mudah dipasang.",
    sizes: ["3R", "4R", "5R", "6R", "A4", "A3"],
    popular: true,
  },
  {
    id: "brochure-holder",
    name: "Brochure Holder",
    tagline: "Display brosur elegan multi pocket",
    description: "Tempat brosur akrilik dengan desain minimalis. Tersedia single dan multi pocket.",
    sizes: ["A4 Single", "A4 Double", "A5 Triple", "Custom"],
  },
  {
    id: "display-stand",
    name: "Display Stand",
    tagline: "Standing display untuk produk branded",
    description: "Standing display akrilik untuk showcase produk. Cocok untuk showroom dan retail.",
    sizes: ["A4 Desktop", "A3 Floor", "Custom Size"],
  },
  {
    id: "menu-holder",
    name: "Menu Holder",
    tagline: "Tent card untuk restoran & cafe",
    description: "Menu holder akrilik untuk meja restoran. Desain tent card yang stabil dan elegan.",
    sizes: ["A5", "A6", "Custom"],
  },
  {
    id: "poster-frame",
    name: "Poster Frame",
    tagline: "Frame poster dengan sistem magnet",
    description: "Frame akrilik untuk poster dengan sistem magnet. Mudah ganti konten tanpa baut.",
    sizes: ["A3", "A2", "A1", "Custom"],
  },
  {
    id: "certificate-frame",
    name: "Certificate Frame",
    tagline: "Frame sertifikat dengan kaki/gantung",
    description: "Frame untuk sertifikat, izin usaha, dan dokumen penting. Tersedia model kaki dan gantung.",
    sizes: ["A4", "A3", "Custom"],
  },
];

const features = [
  {
    title: "Custom Plakat",
    desc: "Desain custom sesuai kebutuhan brand Anda",
  },
  {
    title: "Laser Cutting",
    desc: "Potongan presisi dengan teknologi laser",
  },
  {
    title: "Display Produk",
    desc: "Showcase produk dengan tampilan premium",
  },
  {
    title: "Signage",
    desc: "Papan informasi dan branding profesional",
  },
];

const whyUs = [
  {
    icon: Sparkles,
    title: "Material Premium",
    desc: "Akrilik bening kristal yang tidak cepat kuning. Tampilan tetap jernih bertahun-tahun.",
  },
  {
    icon: Clock,
    title: "Harga Terbaik",
    desc: "Dapatkan harga terbaik tanpa perantara. Langsung dari workshop ke Anda.",
  },
  {
    icon: Shield,
    title: "Garansi Kualitas",
    desc: "Garansi material dan pengerjaan. Rusak? Kami ganti.",
  },
  {
    icon: Check,
    title: "Mudah Dipasang",
    desc: "Desain user-friendly. Pasang sendiri tanpa perlu teknisi.",
  },
];

const testimonials = [
  {
    name: "Michael Tanoto",
    role: "Marketing Manager",
    company: "Honda Authorized Dealer",
    content: "Display frame untuk brosur di showroom kami sangat memuaskan. Tampilan premium dan sesuai brand image Honda.",
    rating: 5,
  },
  {
    name: "Lisa Anggraini",
    role: "Interior Designer",
    company: "Premium Interiors",
    content: "Material akrilik berkualitas tinggi. Sudah 2 tahun pakai dan masih bening seperti baru. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Kurniawan",
    role: "Owner",
    company: "Galeri Foto Jakarta",
    content: "Frame foto akrilik yang elegan. Pelanggan galeri kami sangat puas dengan hasil frame-nya.",
    rating: 5,
  },
];

export default function AkrilikFramePage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20butuh%20akrilik%20frame%20berkualitas";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Frame Focus */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-gray-300 font-semibold mb-2">AKRILIK DISPLAY</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Akrilik Frame</span>
                <br />
                <span className="text-gray-300">Berkualitas</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Dapatkan akrilik frame dengan harga terbaik tanpa perantara. Material akrilik premium yang bening kristal, tidak cepat kuning, dan mudah dipasang.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                {features.map((feature, idx) => (
                  <span key={idx} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    {feature.title}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
                >
                  Pesan Sekarang
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Akrilik Frame Berkualitas"
                    className="w-full h-full object-cover object-[30%_center] rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
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
            Dipercaya oleh Brand-Brand Premium
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
              Koleksi Frame Akrilik
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan frame akrilik premium untuk kebutuhan display dan dekorasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  product.popular ? "border-gray-800 relative" : "border-transparent"
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    BEST SELLER
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <Frame className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-700 text-xs mb-2 uppercase tracking-wide">Ukuran Tersedia:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
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
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all"
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
              Frame akrilik kami sudah terpasang di berbagai lokasi premium.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-2 border-2 border-gray-100 group-hover:border-gray-400 transition-all overflow-hidden">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 mx-auto bg-gray-500/20 rounded-lg flex items-center justify-center mb-2">
                      <Frame className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">{item.category}</span>
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
              Dari display produk hingga foto pribadi, frame akrilik kami siap memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeUseCase.id === useCase.id
                    ? "bg-gray-800 text-white shadow-lg"
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
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium"
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
              Keunggulan Frame Akrilik Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Pelanggan?
            </h2>
            <p className="text-gray-600">Dipercaya oleh berbagai brand dan bisnis premium.</p>
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
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-600">{testi.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testi.name}</p>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                    <p className="text-xs text-gray-600">{testi.company}</p>
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
            Butuh Frame Akrilik Berkualitas?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi dan penawaran harga terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Pesan Sekarang
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>Respon cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Harga terbaik</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-500" />
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
              <p className="text-sm leading-relaxed">Frame Akrilik Berkualitas Premium</p>
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
