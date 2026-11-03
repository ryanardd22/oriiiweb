import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Receipt,
  Scale,
  Calculator,
  Info,
} from 'lucide-react';

export const CampaignEvaluationSection: React.FC = () => {
  // Interactive Calculator State with sensible defaults
  const [targetOrders, setTargetOrders] = useState(30);
  const [avgTicket, setAvgTicket] = useState(120000); // Rp 120.000 per pesanan
  const [cogsPercent, setCogsPercent] = useState(38); // 38% HPP bahan baku
  const [channelCost, setChannelCost] = useState(250000); // Biaya distribusi / media
  const [serviceFeeEstimate, setServiceFeeEstimate] = useState(900000); // Estimasi alokasi fee

  // Financial Calculations
  const grossRecordedSales = targetOrders * avgTicket;
  const totalCogs = Math.round((grossRecordedSales * cogsPercent) / 100);
  const totalCampaignCosts = channelCost + serviceFeeEstimate;
  const contributionMargin = grossRecordedSales - totalCogs;
  const netAfterCampaign = contributionMargin - totalCampaignCosts;

  const evaluationMetrics = [
    {
      title: 'Pertanyaan Pelanggan Relevan',
      desc: 'Berapa banyak calon pembeli yang merespons penawaran dan bertanya tentang menu atau paket.',
      icon: <HelpCircle className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Trafik & Minat',
    },
    {
      title: 'Pesanan Terkonfirmasi',
      desc: 'Jumlah pesanan yang jadwal, kuantitas, dan ketersediaan stoknya telah diverifikasi oleh kasir.',
      icon: <CheckCircle2 className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Konversi Alur',
    },
    {
      title: 'Transaksi Terbayar',
      desc: 'Pesanan yang dana pembayarannya telah masuk secara sah ke rekening atau kasir kafe.',
      icon: <DollarSign className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Realisasi Kas',
    },
    {
      title: 'Penjualan Tertelusuri',
      desc: 'Nominal omzet transaksi yang berasal spesifik dari kode, tautan, atau alur campaign yang diuji.',
      icon: <TrendingUp className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Atribusi Penjualan',
    },
    {
      title: 'Diskon, HPP & Biaya Distribusi',
      desc: 'Seluruh pengeluaran riil: potongan harga yang diberikan, biaya bahan baku makanan, dan biaya kanal.',
      icon: <Receipt className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Beban Langsung',
    },
    {
      title: 'Fee Layanan Origin Systems',
      desc: 'Biaya jasa penyiapan materi visual, konfigurasi WhatsApp, dan pendampingan eksekusi campaign.',
      icon: <Scale className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
      tag: 'Fee Jasa',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fafaf9] dark:bg-[#121214] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Transparansi Akuntansi Campaign</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Lihat hasil penjualan dan biaya yang menyertainya.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Menjalankan campaign bukan sekadar melihat angka kotor di mesin kasir. Kami membantu kafe Anda memeriksa apakah margin yang tersisa sepadan dengan energi dan biaya yang dikeluarkan.
          </p>
        </div>

        {/* Core Principles Statement Box */}
        <div className="mb-12 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 shadow-xs flex items-start gap-3.5 text-xs sm:text-sm text-stone-700 dark:text-neutral-300">
          <Info className="w-5 h-5 text-slate-800 dark:text-slate-200 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <strong className="text-stone-900 dark:text-white font-semibold block">
              Prinsip Evaluasi Objektif:
            </strong>
            <p>
              Penjualan yang tercatat selama campaign belum tentu seluruhnya merupakan penjualan tambahan. Evaluasi dilakukan dengan data dan periode pembanding yang tersedia (misalnya membandingkan hari Selasa saat campaign dengan rata-rata 4 hari Selasa sebelumnya).
            </p>
          </div>
        </div>

        {/* 6 Key Tracking Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {evaluationMetrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-stone-200 dark:border-neutral-800 space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-neutral-400">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Simulation Calculator with Open Assumptions */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-neutral-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Kalkulator Simulasi Margin</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white mt-1">
                Simulasi Pembagian Komponen Biaya &amp; Margin
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-neutral-400 max-w-sm">
              Asumsi terbuka untuk membantu Anda menimbang kelayakan biaya sebelum menyetujui penawaran campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Target Orders */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-stone-700 dark:text-neutral-300">Target Pesanan Terjual:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">{targetOrders} Pesanan</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={targetOrders}
                  onChange={e => setTargetOrders(Number(e.target.value))}
                  className="w-full accent-slate-800 dark:accent-slate-300 cursor-pointer"
                />
              </div>

              {/* Average Order Value */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-stone-700 dark:text-neutral-300">Nilai Rata-rata per Pesanan:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">
                    Rp {avgTicket.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="350000"
                  step="10000"
                  value={avgTicket}
                  onChange={e => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-slate-800 dark:accent-slate-300 cursor-pointer"
                />
              </div>

              {/* COGS / HPP */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-stone-700 dark:text-neutral-300">Estimasi HPP Bahan Baku:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">{cogsPercent}%</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="55"
                  step="1"
                  value={cogsPercent}
                  onChange={e => setCogsPercent(Number(e.target.value))}
                  className="w-full accent-slate-800 dark:accent-slate-300 cursor-pointer"
                />
                <p className="text-[11px] text-stone-500">Persentase rata-rata biaya bahan makanan/minuman kafe.</p>
              </div>

              {/* Channel / Media Cost */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-stone-700 dark:text-neutral-300">Biaya Distribusi / Kanal:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">
                    Rp {channelCost.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="50000"
                  value={channelCost}
                  onChange={e => setChannelCost(Number(e.target.value))}
                  className="w-full accent-slate-800 dark:accent-slate-300 cursor-pointer"
                />
              </div>

            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-6 bg-stone-50 dark:bg-neutral-800/80 p-6 rounded-2xl border border-stone-200 dark:border-neutral-700 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-neutral-400 font-semibold">
                Rincian Estimasi Finansial Campaign
              </h4>

              <div className="space-y-2 text-xs sm:text-sm">
                
                {/* Omzet Penjualan (Tercatat) */}
                <div className="flex justify-between items-center py-1.5 border-b border-stone-200 dark:border-neutral-700">
                  <span className="text-stone-700 dark:text-neutral-300 font-medium">
                    Omzet Penjualan Tercatat (Gross):
                  </span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">
                    Rp {grossRecordedSales.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* HPP */}
                <div className="flex justify-between items-center py-1 text-stone-600 dark:text-neutral-400">
                  <span>- Biaya Bahan Makanan ({cogsPercent}% HPP):</span>
                  <span className="font-mono text-stone-500">
                    - Rp {totalCogs.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Margin Kontribusi */}
                <div className="flex justify-between items-center py-1.5 border-b border-stone-200 dark:border-neutral-700 font-medium text-stone-800 dark:text-neutral-200">
                  <span>Margin Kontribusi Produk:</span>
                  <span className="font-mono font-semibold">
                    Rp {contributionMargin.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Biaya Distribusi */}
                <div className="flex justify-between items-center py-1 text-stone-600 dark:text-neutral-400 text-xs">
                  <span>- Biaya Distribusi / Kanal:</span>
                  <span className="font-mono text-stone-500">
                    - Rp {channelCost.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Estimasi Fee Layanan */}
                <div className="flex justify-between items-center py-1 text-stone-600 dark:text-neutral-400 text-xs">
                  <span>- Estimasi Fee Layanan Campaign:</span>
                  <span className="font-mono text-stone-500">
                    - Rp {serviceFeeEstimate.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Hasil Bersih Setelah Biaya Terkait */}
                <div className="pt-3 border-t-2 border-stone-300 dark:border-neutral-600 flex justify-between items-center">
                  <div>
                    <span className="block text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                      Hasil Setelah Biaya Campaign:
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Margin bersih sebelum biaya tetap kafe
                    </span>
                  </div>
                  <span className={`font-mono text-base sm:text-lg font-bold ${
                    netAfterCampaign >= 0 ? 'text-slate-900 dark:text-white font-extrabold' : 'text-stone-500'
                  }`}>
                    Rp {netAfterCampaign.toLocaleString('id-ID')}
                  </span>
                </div>

              </div>

              {/* Transparency Notice on Calculation */}
              <div className="pt-3 text-[11px] text-stone-500 dark:text-neutral-400 border-t border-stone-200 dark:border-neutral-700 leading-relaxed">
                Catatan: Omzet penjualan bukanlah laba bersih. Hasil di atas adalah simulasi pembagian komponen biaya dan kontribusi margin, bukan garansi angka pendapatan.
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
