import React, { useState, useEffect, useRef } from 'react';
import { ASSET_PATHS } from '../data/mockupData';
import { PhoneChatSimulator } from './PhoneChatSimulator';
import {
  ArrowDown,
  BookOpen,
  Check,
  Zap,
  Users,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

interface InteractiveScrollExperienceProps {
  onOpenChatModal: () => void;
  onOpenMenuModal: () => void;
  onClaimPackage: (packageName: string) => void;
}

export const InteractiveScrollExperience: React.FC<InteractiveScrollExperienceProps> = ({
  onOpenChatModal,
  onOpenMenuModal,
  onClaimPackage,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [panicActive, setPanicActive] = useState(false);
  const [sopQuery, setSopQuery] = useState('');
  const [sopResult, setSopResult] = useState<string | null>(null);
  const [isSopLoading, setIsSopLoading] = useState(false);

  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handlePanicClick = () => {
    setPanicActive(true);
    setTimeout(() => setPanicActive(false), 5000);
  };

  const handleSopAsk = (question: string) => {
    setSopQuery(question);
    setIsSopLoading(true);
    setSopResult(null);

    setTimeout(() => {
      setIsSopLoading(false);
      if (question.includes('Resep') || question.includes('Avocado')) {
        setSopResult(
          'Gramatur Avocado Toast: 1 lembar sourdough panggang 2.5 menit (crisp). 80g hass avocado tumbuk kasar + 1 sdt lemon juice & sejumput sea salt. Top dengan 1 poached egg (rebus 3 menit 20 detik, soft runny yolk), irisan tipis watermelon radish, & 5ml extra virgin olive oil.'
        );
      } else if (question.includes('Closing')) {
        setSopResult(
          'Ceklis Closing Barista: 1) Backflush espresso group head dengan cleaner Pulycaff. 2) Bersihkan steam wand & rendam air panas. 3) Kunci hopper grinder dan simpan sisa beans di wadah kedap. 4) Rekap POS harian & kirim laporan kas closing ke grup WhatsApp manajemen.'
        );
      } else {
        setSopResult(
          'SOP Pelayanan Meja: Sambut tamu dalam 10 detik dengan buku menu Linen 300gsm. Infokan nomor WhatsApp pemesanan cepat atau catat pesanan langsung di POS.'
        );
      }
    }, 500);
  };

  const stepsData = [
    {
      id: 'visual-production',
      number: '01',
      title: 'PRODUKSI VISUAL & BUKU MENU CETAK',
      subtitle: 'Standar Editorial Fine-Casual & Fotografi Kuliner Alami',
      desc: 'Pembuatan logo vektor, motion graphics promosi, dan 20 aset foto produk beresolusi tinggi per bulan tanpa biaya sewa studio atau fotografer lepas.',
    },
    {
      id: 'chatbot-wa',
      number: '02',
      title: 'SETUP AI CHATBOT WHATSAPP 24/7',
      subtitle: 'Respon Instan < 1 Detik, Rekap Order & Hitung Pajak Otomatis',
      desc: 'Perakitan sistem admin cerdas yang siap menjawab pertanyaan menu, memproses pesanan meja, dan menghitung rincian tagihan secara otomatis sepanjang waktu.',
    },
    {
      id: 'panic-button',
      number: '03',
      title: 'PANIC BUTTON: FLASH SALE INSTAN',
      subtitle: 'Datangkan Pembeli Detik Itu Juga Saat Toko Lengang',
      desc: 'Outlet sedang sepi di jam tanggung? Cukup kirim satu kode rahasia dari smartphone Anda, bot otomatis menyebarkan penawaran broadcast promo ke database pelanggan.',
    },
    {
      id: 'sop-assistant',
      number: '04',
      title: 'BOT SOP & TRAINING INTERNAL',
      subtitle: 'Onboarding Staf & Barista Mandiri Tanpa Repetisi',
      desc: 'Asisten AI khusus karyawan internal. Staf baru bisa langsung bertanya gramatur resep, SOP closing shift, dan tata tertib operasional tanpa mengganggu waktu istirahat pemilik.',
    },
  ];

  return (
    <section id="story-scroll" className="relative space-y-28 pt-16 sm:pt-24 pb-16 scroll-mt-24">
      {/* Step Navigation Pill Indicator (Archer Style, Minimalist Mono) */}
      <div className="sticky top-24 z-30 flex items-center justify-center pointer-events-none">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-6 pointer-events-auto text-xs font-mono tracking-wider">
          {stepsData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveStep(idx);
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 transition-colors ${
                activeStep === idx
                  ? 'text-black dark:text-white font-bold'
                  : 'text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <span>{s.number}</span>
              <span className="hidden md:inline uppercase text-[10px] tracking-widest">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* STEP 1: Visual & Printed Menu */}
      <div
        id="visual-production"
        onMouseEnter={() => setActiveStep(0)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-16/10 bg-neutral-900 group">
            <img
              src={ASSET_PATHS.cafeMenu}
              alt="Buku Menu Cetak & Fotografi Kuliner"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                  Spesimen Aset Fisik
                </span>
                <p className="text-white text-lg sm:text-xl font-bold tracking-tight">
                  Avocado Sourdough & Specialty Brunch Spread
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mt-1">
                  Pencahayaan jendela alami tanpa kilatan blitz artifisial, menghasilkan estetika fotorealistis yang menggugah selera.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                01 / SISTEM PRODUKSI VISUAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight uppercase leading-snug">
                Buku Menu Cetak & Fotografi Kuliner
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {stepsData[0].desc}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3 py-2 border-b border-neutral-100 dark:border-neutral-800">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-black dark:text-white">Linen Textured Matte 300gsm:</span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Kertas bertekstur premium bebas noda sidik jari & tahan percikan minyak/air.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2 border-b border-neutral-100 dark:border-neutral-800">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-black dark:text-white">20 Aset Visual Tiap Bulan:</span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Pembaruan foto hidangan musiman untuk media sosial dan promosi meja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-black dark:text-white">Sinkronisasi Database Chatbot:</span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Seluruh item menu langsung terintegrasi dengan pemesanan otomatis WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenMenuModal}
              className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Inspeksi Buku Menu Lengkap</span>
            </button>
          </div>
        </div>
      </div>

      {/* STEP 2: Live WhatsApp Simulator (Interactive in-place) */}
      <div
        id="chatbot-wa"
        onMouseEnter={() => setActiveStep(1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            {/* Inline Interactive Smartphone Shell */}
            <div className="w-full max-w-sm h-[640px] rounded-[38px] overflow-hidden border-[8px] border-neutral-900 shadow-2xl bg-neutral-100">
              <PhoneChatSimulator isModal={false} />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                02 / ASISTEN LAYANAN CERDAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight uppercase leading-snug">
                AI Chatbot WhatsApp 24/7
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Coba langsung di smartphone virtual di samping. Tamu cafe Anda dapat memesan makanan, mengecek menu vegetarian, hingga menerima kalkulasi struk otomatis dalam hitungan detik.
              </p>
            </div>

            {/* Quick Testing Instructions */}
            <div className="bg-neutral-50 dark:bg-neutral-900/60 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                Uji Respon Otomatis:
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-neutral-800 dark:text-neutral-200">
                    "Pesan Avocado Toast + Latte"
                  </span>
                  <span className="text-neutral-500">Kalkulasi tagihan + pajak 10%</span>
                </div>
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-neutral-800 dark:text-neutral-200">
                    "Ada rekomendasi menu?"
                  </span>
                  <span className="text-neutral-500">Kurasi menu artisanal favorit</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenChatModal}
                className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Buka Mode Simulator Layar Penuh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 3: Panic Button Flash Sale */}
      <div
        id="panic-sale"
        onMouseEnter={() => setActiveStep(2)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                03 / PENGGERAK TRAFIK INSTAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight uppercase leading-snug">
                Fitur 'Panic Button' Flash Sale
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {stepsData[2].desc}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Cukup ketik kode rahasia dari WhatsApp pribadi pemilik (tanpa buka dashboard rumit).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Broadcast otomatis terdistribusi dengan kuota meja terbatas untuk memicu urgensi.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Mencegah pemborosan bahan baku makanan segar dengan penjualan cepat di jam sepi.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Simulasi Kontrol Pemilik
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded border border-neutral-700 text-neutral-300">
                  Kode: /FLASH50
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-neutral-300 font-sans">
                  Klik tombol di bawah untuk menyimulasikan penyebaran promo saat jam lengang:
                </p>

                <button
                  onClick={handlePanicClick}
                  disabled={panicActive}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    panicActive
                      ? 'bg-neutral-800 text-neutral-400 cursor-default'
                      : 'bg-white text-black hover:bg-neutral-200 active:scale-98 shadow-md'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>
                    {panicActive ? 'Broadcast Terkirim ke 850 Kontak Pelanggan!' : 'Simulasikan Tekan Panic Button'}
                  </span>
                </button>
              </div>

              {panicActive && (
                <div className="p-4 bg-black rounded-2xl border border-neutral-800 space-y-1.5 animate-fade-in font-sans">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                    Notifikasi WhatsApp Otomatis ke Pelanggan:
                  </span>
                  <p className="text-xs text-neutral-200 leading-relaxed italic">
                    "⚡ Flash Sale 2 Jam Saja! Tunjukkan pesan ini di The Daily Bean & dapatkan Buy 1 Get 1 Free untuk seluruh menu pastry & kopi hangat. Kuota 30 meja pertama!"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* STEP 4: Bot SOP & Training Internal */}
      <div
        id="sop-bot"
        onMouseEnter={() => setActiveStep(3)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                04 / EFISIENSI OPERASIONAL STAF
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight uppercase leading-snug">
                Bot SOP & Training Karyawan
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {stepsData[3].desc}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Jawaban presisi untuk takaran gramatur resep dapur & barista.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Ceklis closing shift terstruktur tanpa ada inventaris yang terlewat.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                <span>Menghemat hingga 40 jam waktu training onboarding pegawai baru setiap bulan.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                  Simulasi Tanya Bot SOP
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Akses Khusus Karyawan
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-neutral-500 font-sans">
                  Pilih pertanyaan yang sering diajukan staf:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleSopAsk('Gramatur Resep Avocado Toast')}
                    className="px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors font-medium text-black dark:text-white"
                  >
                    Resep Avocado Toast
                  </button>
                  <button
                    onClick={() => handleSopAsk('Ceklis Closing Shift Barista')}
                    className="px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors font-medium text-black dark:text-white"
                  >
                    Ceklis Closing Barista
                  </button>
                  <button
                    onClick={() => handleSopAsk('SOP Sambut Tamu Meja')}
                    className="px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors font-medium text-black dark:text-white"
                  >
                    Sambut Tamu Meja
                  </button>
                </div>
              </div>

              {isSopLoading && (
                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-xs text-neutral-500 font-mono animate-pulse">
                  Mengakses dokumen SOP internal...
                </div>
              )}

              {sopResult && !isSopLoading && (
                <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl text-xs space-y-1.5 border border-neutral-200 dark:border-neutral-700 animate-fade-in font-sans">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Panduan Terverifikasi:
                  </p>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs leading-relaxed">
                    {sopResult}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
