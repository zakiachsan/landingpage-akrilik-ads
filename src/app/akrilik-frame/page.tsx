"use client";

import { useState } from "react";
import {
  Phone, Check, Clock, Shield, Gift, Star, Building2,
  UtensilsCrossed, Briefcase, MapPin, Mail, ArrowRight,
  ChevronDown, XCircle, CheckCircle, MessageCircle, Package,
} from "lucide-react";

const useCases = [
  {
    id: "showroom",
    title: "Showroom",
    icon: Building2,
    description: "Display brosur dan katalog produk di showroom mobil, properti, atau elektronik dengan tampilan premium.",
    benefits: ["Tampilan premium", "Multi pocket", "Easy access"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "retail",
    title: "Retail Store",
    icon: Building2,
    description: "Frame display untuk produk branded di toko retail, boutique, dan counter mall.",
    benefits: ["Brand image", "Eye-catching", "Durable"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "hotel",
    title: "Hotel & Lobby",
    icon: UtensilsCrossed,
    description: "Brochure holder dan display informasi untuk area resepsionis dan lobby hotel.",
    benefits: ["Elegan", "Informatif", "Profesional"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
  {
    id: "office",
    title: "Corporate Office",
    icon: Briefcase,
    description: "Frame untuk sertifikat, penghargaan, dan dokumen penting di kantor.",
    benefits: ["Rapi", "Prestisius", "Tahan lama"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
];

const products = [
  {
    id: "frame-dinding",
    name: "Frame Dinding",
    tagline: "Wall mount untuk sertifikat & izin usaha",
    description: "Frame akrilik premium dipasang di dinding dengan baut stainless. Cocok untuk sertifikat halal, izin usaha, penghargaan.",
    imageUrl: "/products/frame-dinding.jpg",
    sizes: ["A2", "A3", "A4", "A5", "A6"],
    popular: true,
    label: "Paling Populer",
  },
  {
    id: "brochure-holder",
    name: "Brochure Holder",
    tagline: "Display brosur elegan multi pocket",
    description: "Tempat brosur akrilik dengan desain minimalis. Tersedia single dan multi pocket untuk berbagai kebutuhan.",
    imageUrl: "/products/frame-pen.jpg",
    sizes: ["A4 Single", "A4 Double", "A5 Triple"],
    label: "Best Seller",
  },
  {
    id: "display-stand",
    name: "Display Stand",
    tagline: "Standing display untuk produk branded",
    description: "Standing display akrilik untuk showcase produk. Cocok untuk showroom, retail, dan pameran.",
    imageUrl: "/products/frame-magnet.jpg",
    sizes: ["A4 Desktop", "A3 Floor", "Custom"],
    label: "Favorit",
  },
  {
    id: "menu-holder",
    name: "Menu Holder",
    tagline: "Tent card untuk restoran & cafe",
    description: "Menu holder akrilik untuk meja restoran. Desain tent card yang stabil dan elegan.",
    imageUrl: "/products/frame-bingkai.jpg",
    sizes: ["A5", "A6", "Custom"],
  },
  {
    id: "poster-frame",
    name: "Poster Frame",
    tagline: "Frame poster dengan sistem magnet",
    description: "Frame akrilik untuk poster dengan sistem magnet. Mudah ganti konten tanpa baut.",
    imageUrl: "/products/frame-standing-meja.jpg",
    sizes: ["A3", "A2", "A1"],
  },
  {
    id: "certificate-frame",
    name: "Certificate Frame",
    tagline: "Frame sertifikat dengan kaki/gantung",
    description: "Frame untuk sertifikat, izin usaha, dan dokumen penting. Tersedia model kaki dan gantung.",
    imageUrl: "/products/frame-standing-lantai.jpg",
    sizes: ["A4", "A3", "Custom"],
  },
];

const whyUs = [
  { icon: Clock, title: "Harga Terbaik", desc: "Langsung dari workshop tanpa perantara. Harga kompetitif untuk kualitas premium." },
  { icon: Gift, title: "Free Sample", desc: "Lihat dan rasakan kualitas material sebelum order dalam jumlah banyak." },
  { icon: Shield, title: "Anti Kuning", desc: "Material akrilik premium yang tidak mudah kuning meski bertahun-tahun." },
  { icon: Check, title: "Mudah Dipasang", desc: "Sudah termasuk perlengkapan pasang. Bisa install sendiri dalam 5 menit." },
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

const painPoints = [
  { text: "Frame akrilik murah cepat menguning dan kusam dalam hitungan bulan" },
  { text: "Tampilan tidak premium, tidak sesuai dengan brand image produk" },
  { text: "Mudah retak dan pecah, tidak tahan lama" },
  { text: "Finishing kasar, tepi tajam dan berbahaya" },
];

const beforeAfterItems = [
  { before: "Frame murah cepat kuning dan kusam", after: "Akrilik premium tetap bening kristal bertahun-tahun" },
  { before: "Tampilan murahan tidak sesuai brand", after: "Tampilan premium meningkatkan brand image" },
  { before: "Mudah retak dan pecah", after: "Material tebal dan kuat, tahan lama" },
  { before: "Tepi tajam dan kasar", after: "Finishing halus, poles mengkilap seperti kaca" },
];

const offerItems = [
  { icon: Package, text: "Frame akrilik premium material berkualitas tinggi" },
  { icon: Phone, text: "Konsultasi gratis via WhatsApp" },
  { icon: Gift, text: "Free sample untuk lihat kualitas" },
  { icon: Shield, text: "Garansi material tidak kuning" },
  { icon: Check, text: "Perlengkapan pasang lengkap" },
];

const faqs = [
  { question: "Apa bedanya akrilik premium dengan akrilik biasa?", answer: "Akrilik premium memiliki kejernihan lebih tinggi (92% light transmission), tidak mudah kuning, dan lebih tahan gores. Akrilik biasa cenderung cepat kusam dan kuning dalam 6-12 bulan." },
  { question: "Berapa lama pengerjaan frame?", answer: "Pengerjaan standar 3-5 hari kerja. Untuk pesanan urgent atau custom kompleks, kami bisa koordinasikan timeline yang sesuai." },
  { question: "Apakah bisa custom ukuran?", answer: "Bisa! Kami menerima pesanan custom ukuran sesuai kebutuhan Anda. Konsultasikan ukuran yang Anda butuhkan via WhatsApp." },
  { question: "Apakah ada minimum order?", answer: "Tidak ada minimum order. Anda bisa pesan mulai dari 1 pcs. Untuk order dalam jumlah banyak, tersedia harga spesial." },
  { question: "Bagaimana cara pemasangan?", answer: "Setiap frame sudah termasuk perlengkapan pasang lengkap (baut, fisher, spacer). Kami juga sediakan video tutorial pemasangan yang mudah diikuti." },
];

export default function AkrilikFramePage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20tertarik%20akrilik%20frame%20berkualitas";

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <p className="text-blue-400 font-medium text-sm">AKRILIK DISPLAY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                Akrilik Frame{" "}
                <span className="text-blue-400">Berkualitas Premium</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                Dapatkan akrilik frame dengan harga terbaik tanpa perantara. Material akrilik premium yang bening kristal, tidak cepat kuning, dan mudah dipasang.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-300">Custom Plakat</span>
                <span className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-300">Laser Cutting</span>
                <span className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-300">Display Produk</span>
                <span className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-300">Signage</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Pesan Sekarang
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-slate-400 pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Bening kristal
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Anti kuning
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Mudah dipasang
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Akrilik Frame Berkualitas"
                    className="w-full h-full object-cover object-[30%_center]"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium text-blue-400 shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Kenapa Banyak Frame Akrilik{" "}
            <span className="text-red-500">Cepat Rusak & Kuning?</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Masalah ini sering terjadi saat beli frame akrilik murah:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4"
              >
                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Lihat Solusinya <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* 3. Products */}
      <section id="products" className="py-16 md:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Koleksi Frame Akrilik Premium
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Berbagai pilihan frame akrilik berkualitas untuk display dan dekorasi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group relative rounded-xl border bg-white overflow-hidden transition-all hover:shadow-md ${
                  product.popular ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"
                }`}
              >
                {(product.popular || product.label) && (
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
                    {product.popular && (
                      <span className="rounded-md bg-blue-600 px-2 py-0.5 text-[11px] font-semibold text-white">
                        TERLARIS
                      </span>
                    )}
                    {product.label && (
                      <span className="rounded-md bg-amber-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                        {product.label}
                      </span>
                    )}
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-sm text-blue-600 mt-0.5">{product.tagline}</p>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{product.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.sizes.map((size, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Bingung pilih yang mana? Kami bantu rekomendasikan sesuai kebutuhan Anda.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              <Phone className="h-4 w-4" />
              Tanya Harga & Stok
            </a>
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Cocok untuk Berbagai Kebutuhan Display
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Frame akrilik kami digunakan di berbagai industri untuk tampilan yang profesional.
            </p>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 px-6 -mx-6 scrollbar-hide">
            <div className="flex gap-2 mx-auto">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeUseCase.id === useCase.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <useCase.icon className="h-4 w-4" />
                  {useCase.title}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto bg-slate-100 overflow-hidden">
                  <img
                    src={activeUseCase.imageUrl}
                    alt={activeUseCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{activeUseCase.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{activeUseCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activeUseCase.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                      >
                        <Check className="h-3 w-3" />
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

      {/* 5. Before vs After */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Sebelum vs Sesudah
            </h2>
            <p className="text-slate-500">
              Perbedaan nyata antara akrilik murah dan akrilik premium
            </p>
          </div>

          <div className="space-y-3">
            {beforeAfterItems.map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wider mb-1">Akrilik Murah</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-1">Akrilik Premium</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Keunggulan Frame Akrilik Kami
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 mb-4">
                  <item.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Apa Kata Pelanggan?
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 mb-3">
              <MessageCircle className="h-3.5 w-3.5" />
              Dipercaya brand-brand premium
            </div>
            <p className="text-slate-500 text-sm">Mereka memilih karena kualitas material yang terjamin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{testi.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                    {testi.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{testi.name}</p>
                    <p className="text-xs text-slate-500">{testi.role}, {testi.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Offer Stack */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Yang Akan Anda Dapatkan
          </h2>
          <p className="text-slate-500 mb-8">
            Setiap pesanan dari kami sudah termasuk:
          </p>

          <div className="space-y-2.5 text-left mb-8">
            {offerItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50 flex-shrink-0">
                  <item.icon className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700 flex-1">{item.text}</span>
                <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              </div>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
          >
            <Phone className="h-4 w-4" />
            Pesan Sekarang
          </a>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-slate-500 text-sm">
              Belum yakin? Mungkin jawabannya ada di sini.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-sm font-medium text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-3.5 pt-0">
                    <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Butuh Frame Akrilik Berkualitas?
          </h2>
          <p className="text-slate-500 mb-2">
            Tanpa komitmen &bull; Harga terbaik
          </p>
          <p className="text-xs font-medium text-amber-600 mb-6">
            Free sample tersedia untuk cek kualitas
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
          >
            <Phone className="h-4 w-4" />
            Hubungi via WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-blue-500" />
              Respon cepat
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Harga terbaik
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-blue-500" />
              Garansi kualitas
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold text-white mb-2">Akrilik Display</p>
              <p className="text-xs leading-relaxed">Frame Akrilik Berkualitas Premium</p>
            </div>
            <div>
              <p className="text-xs font-medium text-white mb-2 inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Lokasi Workshop
              </p>
              <p className="text-xs leading-relaxed">
                Jl. KH. Hasyim Ashari No. 45, Tangerang, Banten 15119
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-white mb-2 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                Email
              </p>
              <a href="mailto:akrilikexpress@gmail.com" className="text-xs hover:text-white transition-colors break-all">
                akrilikexpress@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-white mb-2 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                WhatsApp
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">
                +62 812-1105-9138
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-[11px] text-slate-500">&copy; 2024 Akrilik Display. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
        aria-label="Chat via WhatsApp"
      >
        <Phone className="h-5 w-5" />
        <span className="absolute right-full mr-3 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat WhatsApp
        </span>
      </a>
    </main>
  );
}
