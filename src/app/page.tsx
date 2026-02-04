"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Check, Clock, Shield, Gift, Star, ChevronDown, ChevronUp, MapPin } from "lucide-react";

const features = [
  { icon: Clock, title: "95% On-Time", desc: "Garansi tepat waktu atau uang kembali" },
  { icon: Gift, title: "Free Sample", desc: "Lihat kualitas sebelum memutuskan" },
  { icon: Shield, title: "Garansi Rusak", desc: "Rusak diganti, tanpa biaya tambahan" },
];

const products = [
  {
    name: "Full Akrilik Premium",
    material: "Akrilik bening premium grade A",
    includes: ["4 pcs baut stainless", "4 pcs skrup", "Kotak packaging"],
    price: "Rp 450.000",
    recommended: true,
  },
  {
    name: "Depan Akrilik + MDF",
    material: "Depan akrilik, belakang MDF solid",
    includes: ["4 pcs baut stainless", "4 pcs skrup", "Kotak packaging"],
    price: "Rp 350.000",
    recommended: false,
  },
  {
    name: "Full PVC Economy",
    material: "PVC premium dengan double tape",
    includes: ["4 pcs double tape 3M", "Kotak packaging"],
    price: "Rp 250.000",
    recommended: false,
  },
];

const useCases = [
  { title: "Rumah Sakit", desc: "Frame informasi di lift & ruang tunggu", location: "Lift & Lobby" },
  { title: "Hotel", desc: "Pengumuman hotel & informasi fasilitas", location: "Lift & Resepsionis" },
  { title: "Rumah Makan", desc: "Foto menu & promo di dinding", location: "Dinding restoran" },
  { title: "Kantor", desc: "Frame informasi & pengumuman internal", location: "Lift & Ruang meeting" },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Manager Operasional - Hotel Grand Malang",
    content: "Pengerjaan sangat cepat dan tepat waktu. Frame berkualitas dan pengiriman aman. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Siti Rahayu",
    role: "Direktur - RS Medika Sejahtera",
    content: "Sudah 2 tahun pakai frame dari mereka untuk semua ruang di rumah sakit kami. Tidak pernah mengecewakan.",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    role: "Owner - RM Sederhana",
    content: "Free sample sangat membantu. Bisa lihat kualitas dulu sebelum order banyak. Terima kasih!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Waktu pengerjaan 3-5 hari kerja untuk order standar. Untuk order besar (100+ pcs) bisa 7-10 hari kerja. Kami garansi tepat waktu atau uang kembali 50%.",
  },
  {
    question: "Bisa lihat sample dulu?",
    answer: "Ya! Kami menyediakan free sample untuk setiap varian produk. Anda bisa lihat kualitas bahan dan finishing sebelum memutuskan order.",
  },
  {
    question: "Bagaimana sistem garansinya?",
    answer: "Garansi on-time: Kalau terlambat, uang kembali 50%. Garansi produk: Rusak saat pengiriman atau cacat produksi, kami ganti baru tanpa biaya.",
  },
  {
    question: "Apakah ada minimum order?",
    answer: "Tidak ada minimum order! Anda bisa order 1 pcs saja. Namun untuk harga lebih hemat, kami rekomendasikan order minimal 10 pcs.",
  },
  {
    question: "Bisa revisi desain?",
    answer: "Bebas revisi desain sampai Anda puas. Tidak ada biaya tambahan untuk revisi desain.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                500+ Frame Terkirim
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Frame Akrilik Premium<br />
                <span className="text-orange-400">Tepat Waktu</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Jangan risau frame telat lagi! Frame akrilik berkualitas untuk rumah sakit, hotel, 
                rumah makan & kantor. <strong>Free sample & bergaransi.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Lihat Harga & Pesan
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all border border-white/30"
                >
                  Lihat Produk
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Free Sample</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Garansi On-Time</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg border-4 border-blue-500/30 flex items-center justify-center">
                      <span className="text-6xl font-bold text-blue-800/50">Frame</span>
                    </div>
                    <p className="mt-4 text-gray-500">Poster Frame Akrilik</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
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

      {/* Features Bar */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Pernah Mengalami Masalah Ini?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="font-bold text-red-800 mb-2">Frame Telat</h3>
                <p className="text-red-600 text-sm">Event sudah dekat tapi frame belum jadi, bikin panik!</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">😞</div>
                <h3 className="font-bold text-red-800 mb-2">Salah Produk</h3>
                <p className="text-red-600 text-sm">Pesanan datang tidak sesuai spek, harus reorder!</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="font-bold text-red-800 mb-2">Biaya Siluman</h3>
                <p className="text-red-600 text-sm">Harga tiba-tiba naik di tengah proyek!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Solusi Frame Berkualitas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              3 varian frame dengan bahan berkualitas. Setiap pembelian sudah termasuk aksesoris lengkap.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all hover:shadow-xl ${
                  product.recommended ? "border-orange-500 relative" : "border-transparent"
                }`}
              >
                {product.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Paling Populer
                  </div>
                )}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded border-2 border-blue-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-800/50 text-center px-2">{product.name}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.material}</p>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 text-sm mb-2">Termasuk:</p>
                  <ul className="space-y-1">
                    {product.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                  <p className="text-sm text-gray-500">per pcs (ukuran A3)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Digunakan Oleh</h2>
            <p className="text-gray-600">Frame kami digunakan di berbagai tempat</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{useCase.desc}</p>
                <p className="text-xs text-blue-600 font-semibold">{useCase.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-600">Testimoni dari customer kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kenapa Pilih Kami?</h2>
            <p className="text-blue-200">Komitmen kami untuk kepuasan customer</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <Clock className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">95% On-Time</h3>
              <p className="text-blue-200 text-sm">Garansi tepat waktu atau uang kembali 50%</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <Gift className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Free Sample</h3>
              <p className="text-blue-200 text-sm">Lihat kualitas sebelum memutuskan order</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <Shield className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Garansi Lengkap</h3>
              <p className="text-blue-200 text-sm">Rusak diganti, tanpa biaya tambahan</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <Check className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">No Hidden Cost</h3>
              <p className="text-blue-200 text-sm">Apa yang disepakati, itu yang berlaku</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dapatkan Free Sample Sekarang!</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Lihat kualitas frame kami sebelum memutuskan. Gratis! Hubungi kami via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20minta%20free%20sample%20frame%20akrilik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg transition-all hover:bg-gray-100 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </div>
          <p className="mt-6 text-orange-100 text-sm">
            Response cepat dalam 1 jam kerja. No spam, we promise!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Frame Akrilik Premium. All rights reserved.</p>
          <p className="mt-2 text-sm">Tepat Waktu | Bergaransi | Berkualitas</p>
        </div>
      </footer>
    </main>
  );
}
