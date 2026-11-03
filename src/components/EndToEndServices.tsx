import React from 'react';
import { Camera, Bot, RefreshCw, Zap, Users, ArrowRight, Check } from 'lucide-react';

interface EndToEndServicesProps {
  onOpenChat: () => void;
}

export const EndToEndServices: React.FC<EndToEndServicesProps> = ({ onOpenChat }) => {
  const steps = [
    {
      step: '01',
      title: 'Produksi Visual Premium',
      tag: 'Aset Visual & Branding',
      icon: Camera,
      description:
        'Pembuatan logo vektor, motion graphics promosi, dan 20 aset foto produk AI fotorealistik per bulan tanpa biaya sewa studio.',
      highlight: 'Hemat jutaan rupiah biaya fotografer & studio',
    },
    {
      step: '02',
      title: 'Setup AI Chatbot WhatsApp',
      tag: 'Otomasi Admin 24/7',
      icon: Bot,
      description:
        'Perakitan sistem admin cerdas yang siap menjawab FAQ, memproses reservasi, dan merekap order pelanggan otomatis 24/7.',
      highlight: 'Respon instan < 1 detik tanpa jeda antrean',
    },
    {
      step: '03',
      title: 'Maintenance & Optimasi Sistem',
      tag: 'Pembaruan Berkala',
      icon: RefreshCw,
      description:
        'Penyesuaian memori AI untuk promo baru, pembaruan katalog bulanan, dan laporan penghematan waktu karyawan Anda.',
      highlight: 'Sistem selalu up-to-date setiap bulan',
    },
    {
      step: '04',
      title: "Fitur 'Panic Button' (Flash Sale)",
      tag: 'Trafik Instan Meja',
      icon: Zap,
      description:
        'Toko sedang sepi? Ketik satu kode rahasia dari HP Anda, dan bot otomatis menyebar broadcast promo ke database pelanggan untuk mendatangkan pembeli detik itu juga.',
      highlight: 'Kirim broadcast dalam 1 ketukan kode',
    },
    {
      step: '05',
      title: 'Bot SOP & Training Internal',
      tag: 'Efisiensi SDM & Onboarding',
      icon: Users,
      description:
        'Asisten AI khusus karyawan. Staf baru bisa bertanya langsung soal takaran resep, SOP closing, dan operasional ke bot tanpa perlu mengganggu waktu sibuk Anda.',
      highlight: 'Onboarding pegawai baru tanpa repetisi',
    },
  ];

  return (
    <section id="end-to-end" className="py-12 border-t border-neutral-200 dark:border-neutral-800 space-y-10">
      {/* Section Header with Big-Tech Clean Sans-Serif */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase">
          <span>Origins System</span>
          <span aria-hidden="true">·</span>
          <span>Sistem Otomasi Komprehensif</span>
          <span aria-hidden="true">·</span>
          <span>5 Langkah Terpadu</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white tracking-tight">
          Layanan End-to-End: Alur Otomasi Lengkap Bisnis Anda
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          Bukan sekadar bot kaku atau gambar lepas. Kami membangun ekosistem otomasi menyeluruh dari daya pikat visual di meja hingga ke manajemen staf internal outlet Anda.
        </p>
      </div>

      {/* 5-Step Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, index) => {
          const IconComponent = item.icon;
          const isSpanCard = index === 3;
          return (
            <div
              key={item.step}
              className={`bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group ${
                isSpanCard ? 'md:col-span-1 lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Step Index & Clean Minimalist Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Benefit Line */}
              <div className="mt-6 pt-3.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span className="font-medium text-black dark:text-white font-mono text-[11px]">
                  {item.highlight}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
            Integrasi Tanpa Hambatan
          </p>
          <p className="text-sm font-medium text-black dark:text-white leading-relaxed">
            Seluruh 5 pilar layanan langsung aktif dalam 7 hari kerja tanpa perlu mengganti nomor WhatsApp bisnis Anda.
          </p>
        </div>
        <button
          onClick={onOpenChat}
          className="whitespace-nowrap px-4 py-2.5 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 shrink-0"
        >
          <span>Konsultasi Kebutuhan Anda</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
