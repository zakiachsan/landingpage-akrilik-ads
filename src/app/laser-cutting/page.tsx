"use client";

import { useState } from "react";
import {
  Phone, Check, Clock, Shield, Gift, Star, Building2,
  UtensilsCrossed, Briefcase, MapPin, Mail, ArrowRight,
  ChevronDown, XCircle, CheckCircle, MessageCircle, Package,
} from "lucide-react";

const useCases = [
  {
    id: "display-box",
    title: "Display Box",
    icon: Building2,
    description: "Box akrilik presisi untuk display koleksi, figure, dan produk premium dengan hasil laser cutting super rapi.",
    benefits: ["Presisi tinggi", "Edge bening", "Custom size"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_hotel_hz2mkg.webp",
  },
  {
    id: "dekorasi",
    title: "Dekorasi & Ornamen",
    icon: Building2,
    description: "Ornamen dan dekorasi akrilik dengan detail presisi untuk interior rumah, kantor, dan event.",
    benefits: ["Detail halus", "Custom desain", "Finishing rapi"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203324/Akrilik_frame_rumah_sakit_nhm1sx.webp",
  },
  {
    id: "signage",
    title: "Signage Toko",
    icon: UtensilsCrossed,
    description: "Huruf timbul dan signage dengan laser cutting presisi untuk branding toko dan bisnis.",
    benefits: ["Huruf presisi", "Logo detail", "Tahan lama"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203326/Akrilik_frame_restoran_ddxrj2.webp",
  },
  {
    id: "industri",
    title: "Kebutuhan Industri",
    icon: Briefcase,
    description: "Komponen dan part akrilik untuk kebutuhan industri, prototype, dan produksi massal.",
    benefits: ["Toleransi ketat", "Volume besar", "Konsisten"],
    imageUrl: "https://res.cloudinary.com/dicwfbdgz/image/upload/v1770203325/Akrilik_frame_kantor_dr1ual.webp",
  },
];

const products = [
  {
    id: "cutting-presisi",
    name: "Laser Cutting Presisi",
    tagline: "Potong dengan akurasi 0.1mm",
    description: "Teknologi laser CO2 dengan akurasi tinggi. Hasil potongan halus tanpa gerigi, edge bening seperti kaca.",
    imageUrl: "/products/frame-dinding.jpg",
    sizes: ["2mm", "3mm", "5mm", "8mm", "10mm"],
    popular: true,
    label: "Unggulan",
  },
  {
    id: "engraving",
    name: "Laser Engraving",
    tagline: "Ukir detail pada permukaan akrilik",
    description: "Engraving teks, logo, dan gambar pada akrilik dengan detail presisi. Cocok untuk personalisasi.",
    imageUrl: "/products/frame-pen.jpg",
    sizes: ["Surface", "Deep", "Multi-depth"],
    label: "Best Seller",
  },
  {
    id: "bending",
    name: "Heating & Bending",
    tagline: "Tekuk akrilik dengan sudut presisi",
    description: "Proses pemanasan dan tekuk akrilik dengan sudut yang tepat untuk display box dan rak.",
    imageUrl: "/products/frame-magnet.jpg",
    sizes: ["90°", "45°", "Custom angle"],
    label: "Favorit",
  },
  {
    id: "polishing",
    name: "Edge Polishing",
    tagline: "Tepi mengkilap seperti kaca",
    description: "Polish tepi akrilik agar halus dan mengkilap. Hasil premium tanpa visible cut marks.",
    imageUrl: "/products/frame-bingkai.jpg",
    sizes: ["Standard", "Premium", "Mirror"],
  },
  {
    id: "assembly",
    name: "Assembly & Bonding",
    tagline: "Rakit jadi produk siap pakai",
    description: "Layanan assembly dan pengeleman akrilik menjadi produk jadi seperti box, display, atau case.",
    imageUrl: "/products/frame-standing-meja.jpg",
    sizes: ["Box", "Display", "Custom"],
  },
  {
    id: "custom-project",
    name: "Custom Project",
    tagline: "Wujudkan ide unik Anda",
    description: "Konsultasi dan pengerjaan project custom dari desain hingga produk jadi sesuai kebutuhan.",
    imageUrl: "/products/frame-standing-lantai.jpg",
    sizes: ["Prototype", "Small batch", "Mass production"],
  },
];

const whyUs = [
  { icon: Clock, title: "Teknologi Terbaru", desc: "Menggunakan mesin laser CO2 terbaru dengan presisi hingga 0.1mm untuk hasil super rapi." },
  { icon: Check, title: "Hasil Super Rapi", desc: "Tepi potongan halus tanpa gerigi. Edge bening seperti kaca tanpa perlu polish tambahan." },
  { icon: Gift, title: "Proses Cepat", desc: "Order selesai dalam 1-3 hari kerja. Untuk volume besar, tetap on-time dan konsisten." },
  { icon: Shield, title: "Garansi Presisi", desc: "Tidak sesuai spesifikasi? Kami kerjakan ulang tanpa biaya tambahan." },
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

const painPoints = [
  { text: "Hasil cutting manual bergerigi dan tidak presisi" },
  { text: "Vendor lain prosesnya lama dan sering telat" },
  { text: "Tepi potongan buram dan perlu polish manual" },
  { text: "Ukuran tidak konsisten untuk order quantity besar" },
];

const beforeAfterItems = [
  { before: "Cutting manual, tepi bergerigi dan kasar", after: "Laser cutting presisi, tepi halus seperti kaca" },
  { before: "Proses lama, sering telat dari deadline", after: "Proses cepat 1-3 hari, on-time guarantee" },
  { before: "Ukuran tidak konsisten antar piece", after: "Presisi 0.1mm, setiap piece identik" },
  { before: "Perlu polish manual yang menambah biaya", after: "Edge langsung bening tanpa polish tambahan" },
];

const offerItems = [
  { icon: Package, text: "Laser cutting presisi dengan teknologi terbaru" },
  { icon: Phone, text: "Konsultasi gratis via WhatsApp" },
  { icon: Gift, text: "Free sample potongan untuk cek kualitas" },
  { icon: Shield, text: "Garansi presisi dan hasil" },
  { icon: Check, text: "Pengiriman aman ke seluruh Indonesia" },
];

const faqs = [
  { question: "Seberapa presisi hasil laser cutting?", answer: "Mesin laser kami memiliki presisi hingga 0.1mm. Setiap potongan konsisten dan identik, cocok untuk produksi massal yang membutuhkan toleransi ketat." },
  { question: "Berapa lama proses cutting?", answer: "Proses standar 1-3 hari kerja tergantung kompleksitas dan jumlah. Untuk order urgent, kami bisa proses lebih cepat dengan koordinasi yang baik." },
  { question: "Material akrilik apa saja yang bisa di-cutting?", answer: "Kami bisa cutting berbagai ketebalan akrilik dari 2mm hingga 20mm, baik akrilik bening, warna, maupun mirror. Konsultasikan kebutuhan spesifik Anda." },
  { question: "Apakah bisa cutting bentuk kompleks?", answer: "Bisa! Laser cutting bisa memotong bentuk kompleks yang tidak mungkin dengan cutting manual. Kirimkan file desain Anda dalam format AI, CDR, atau DXF." },
  { question: "Bagaimana dengan order dalam jumlah besar?", answer: "Kami siap melayani order volume besar dengan harga spesial. Kualitas tetap konsisten meski ribuan piece karena dikerjakan dengan mesin laser." },
];

export default function LaserCuttingPage() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/6281211059138?text=Halo,%20saya%20butuh%20jasa%20laser%20cutting%20akrilik";

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.15),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <p className="text-amber-400 font-medium text-sm">AKRILIK DISPLAY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                Jasa Laser Cutting Akrilik{" "}
                <span className="text-amber-400">Hasil Super Rapi</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                Menggunakan teknologi laser terbaru untuk hasil potong yang presisi hingga detail terkecil. Cocok untuk kebutuhan industri, dekorasi, hingga signage toko.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Phone className="h-4 w-4" />
                  Pesan Sekarang
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Gift className="h-4 w-4" />
                  Minta Sample
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-slate-400 pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Presisi 0.1mm
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Edge super halus
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Proses cepat
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
                  <img
                    src="https://res.cloudinary.com/dicwfbdgz/image/upload/v1770227078/ladingpage_agdll2.webp"
                    alt="Laser Cutting Akrilik"
                    className="w-full h-full object-cover object-[30%_center]"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium text-amber-400 shadow-lg">
                  Super Presisi
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
            Kenapa Hasil Laser Cutting Sering{" "}
            <span className="text-red-500">Tidak Memuaskan?</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Masalah ini sering terjadi saat order laser cutting akrilik:
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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-500 transition-colors"
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
              Layanan Laser Cutting Lengkap
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Dari cutting presisi hingga assembly produk jadi, semua kebutuhan akrilik Anda kami layani.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group relative rounded-xl border bg-white overflow-hidden transition-all hover:shadow-md ${
                  product.popular ? "border-amber-200 ring-1 ring-amber-100" : "border-slate-200"
                }`}
              >
                {(product.popular || product.label) && (
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
                    {product.popular && (
                      <span className="rounded-md bg-amber-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                        UNGGULAN
                      </span>
                    )}
                    {product.label && (
                      <span className="rounded-md bg-slate-700 px-2 py-0.5 text-[11px] font-semibold text-white">
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
                  <p className="text-sm text-amber-600 mt-0.5">{product.tagline}</p>
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
              Punya project custom? Konsultasikan kebutuhan spesifik Anda dengan tim kami.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
            >
              <Phone className="h-4 w-4" />
              Konsultasi Kebutuhan Anda
            </a>
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Cocok untuk Berbagai Kebutuhan
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Dari display box hingga kebutuhan industri, laser cutting akrilik kami siap memenuhi kebutuhan Anda.
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
                        className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
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
              Perbedaan nyata antara cutting biasa dan laser cutting presisi
            </p>
          </div>

          <div className="space-y-3">
            {beforeAfterItems.map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wider mb-1">Cutting Biasa</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-1">Laser Cutting</p>
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
              Kenapa Pilih Laser Cutting Kami?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 mb-4">
                  <item.icon className="h-5 w-5 text-amber-600" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700 mb-3">
              <MessageCircle className="h-3.5 w-3.5" />
              Dipercaya berbagai industri
            </div>
            <p className="text-slate-500 text-sm">Hasil laser cutting presisi yang memuaskan berbagai kebutuhan.</p>
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
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-sm font-semibold text-amber-600">
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
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-amber-50 flex-shrink-0">
                  <item.icon className="h-4 w-4 text-amber-600" />
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
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
            Butuh Jasa Laser Cutting Presisi?
          </h2>
          <p className="text-slate-500 mb-2">
            Kirim desain Anda &bull; Kami berikan penawaran dalam 1 jam
          </p>
          <p className="text-xs font-medium text-amber-600 mb-6">
            Free sample potongan tersedia
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
          >
            <Phone className="h-4 w-4" />
            Hubungi via WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              Respon 1 jam
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Free konsultasi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-amber-500" />
              Garansi presisi
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
              <p className="text-xs leading-relaxed">Ahlinya Jasa Laser Cutting Akrilik</p>
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
