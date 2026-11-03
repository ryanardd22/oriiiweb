import React from 'react';
import { WORKFLOW_STEPS } from '../data/campaignData';
import { Calculator, Share2, MessageSquare, FileText, ShieldCheck } from 'lucide-react';

export const CampaignWorkflowSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calculator className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 1:
        return <Share2 className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 2:
        return <MessageSquare className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 3:
        return <FileText className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      default:
        return <FileText className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
    }
  };

  return (
    <section id="cara-kerja" className="py-20 sm:py-28 bg-[#fafaf9] dark:bg-[#121214] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Metodologi 4 Bagian Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Bagaimana Satu Campaign Dijalankan Bersama Origin Systems
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Dari perhitungan angka penawaran bersama pemilik kafe hingga pencatatan transaksi yang masuk akal dan dapat dipertanggungjawabkan.
          </p>
        </div>

        {/* 4 Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-stone-200 dark:border-neutral-800 flex flex-col justify-between shadow-xs hover:border-slate-500/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xl font-bold font-mono text-slate-800 dark:text-slate-200">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 dark:text-neutral-400 mt-1">
                    {step.summary}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
                  {step.details}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-stone-100 dark:border-neutral-800 space-y-1.5">
                  <p className="text-[11px] font-mono text-stone-400 dark:text-neutral-500 uppercase tracking-wider font-semibold">
                    Cakupan Output:
                  </p>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-stone-600 dark:text-neutral-400 flex items-start gap-1.5">
                      <span className="text-slate-700 dark:text-slate-300 font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Batas Tanggung Jawab & Transparansi Kolaborasi */}
        <div className="mt-12 sm:mt-16 bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-neutral-800 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-white mb-4">
            <ShieldCheck className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            <span>Batas Tanggung Jawab &amp; Prinsip Kolaborasi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200/60 dark:border-neutral-700/60">
              <span className="text-slate-500 font-bold mt-0.5">›</span>
              <div>
                <strong className="text-stone-900 dark:text-white font-semibold">Penetapan Proposal Tertulis:</strong> Kanal, kuantitas materi visual, jenis aktivitas distribusi, penanggung jawab, dan jadwal pelaksanaan disepakati di dalam proposal sebelum campaign dimulai.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200/60 dark:border-neutral-700/60">
              <span className="text-slate-500 font-bold mt-0.5">›</span>
              <div>
                <strong className="text-stone-900 dark:text-white font-semibold">Aktivitas Tambahan:</strong> Pengelolaan iklan berbayar langsung, outreach door-to-door kantor, dan kerja sama komunitas tidak otomatis termasuk ke dalam paket standar.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200/60 dark:border-neutral-700/60">
              <span className="text-slate-500 font-bold mt-0.5">›</span>
              <div>
                <strong className="text-stone-900 dark:text-white font-semibold">Biaya Pihak Ketiga:</strong> Anggaran belanja media (ad spend), cetak kertas fisik, atau kuota pesan WhatsApp berbayar terpisah sepenuhnya dari fee jasa Origin Systems.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200/60 dark:border-neutral-700/60">
              <span className="text-slate-500 font-bold mt-0.5">›</span>
              <div>
                <strong className="text-stone-900 dark:text-white font-semibold">Tanggung Jawab Kafe:</strong> Kualitas rasa produk, ketersediaan bahan, kecepatan pelayanan di kafe, dan pemenuhan pesanan fisik tetap menjadi kendali penuh tim operasional kafe Anda.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
