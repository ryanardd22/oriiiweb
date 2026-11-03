import React from 'react';
import { PRICING_PLANS } from '../data/campaignData';
import { Check, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

interface CampaignPricingSectionProps {
  onSelectPlan: (planTitle: string) => void;
}

export const CampaignPricingSection: React.FC<CampaignPricingSectionProps> = ({
  onSelectPlan,
}) => {
  const campaignPlan = PRICING_PLANS[0];
  const standardPlans = PRICING_PLANS.slice(1);

  return (
    <section id="layanan-harga" className="py-20 sm:py-28 bg-white dark:bg-[#151518] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Struktur Layanan &amp; Biaya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Layanan dan Harga yang Transparan
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Pilih antara fokus mengeksekusi satu campaign penjualan terukur atau pendampingan operasional visual dan otomasi WhatsApp berkala.
          </p>
        </div>

        {/* SECTION A: CAMPAIGN PENJUALAN (Highlighted standalone banner) */}
        <div className="mb-14 rounded-3xl p-6 sm:p-10 bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fokus Penjualan Proyek</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {campaignPlan.name}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {campaignPlan.headline} {campaignPlan.description}
              </p>

              {/* Scope Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-200">
                {campaignPlan.scopeList.map((scope, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-stone-400 pt-2">
                Biaya dihitung spesifik berdasarkan cakupan kanal, jumlah materi visual, dan kompleksitas alur pemesanan yang disepakati bersama owner kafe.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-stone-400 uppercase">Estimasi Biaya:</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {campaignPlan.priceDisplay}
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  {campaignPlan.billingPeriod}
                </p>
              </div>

              <button
                onClick={() => onSelectPlan(campaignPlan.inquirySubject)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-black bg-white hover:bg-stone-200 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{campaignPlan.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION B, C, D: Standard Monthly & Project Packages */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-6">
            Paket Visual dan Otomasi Berkala
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {standardPlans.map(plan => {
              const isGrowth = plan.id === 'plan-growth';
              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                    isGrowth
                      ? 'bg-stone-50 dark:bg-neutral-900 border-2 border-slate-900 dark:border-white shadow-md'
                      : 'bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 shadow-xs'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white dark:bg-white dark:text-black shadow-xs">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-stone-900 dark:text-white">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-neutral-400 mt-1">
                        {plan.headline}
                      </p>
                    </div>

                    <div className="py-2 border-y border-stone-200 dark:border-neutral-800">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white font-mono">
                          {plan.priceDisplay}
                        </span>
                        <span className="text-xs text-stone-500 font-normal">
                          / {plan.billingPeriod}
                        </span>
                      </div>
                      {plan.setupFee && (
                        <p className="text-[11px] text-stone-700 dark:text-neutral-300 mt-1 font-medium">
                          {plan.setupFee}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-stone-600 dark:text-neutral-300 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Scope items */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-neutral-500 uppercase font-semibold">
                        Cakupan Layanan:
                      </p>
                      <ul className="space-y-1.5">
                        {plan.scopeList.map((scope, sIdx) => (
                          <li
                            key={sIdx}
                            className="text-xs text-stone-700 dark:text-neutral-300 flex items-start gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="pt-2 border-t border-stone-100 dark:border-neutral-800 space-y-1">
                        {plan.limitations.map((limit, lIdx) => (
                          <div
                            key={lIdx}
                            className="text-[11px] text-stone-500 dark:text-neutral-400 flex items-start gap-1.5"
                          >
                            <span className="text-stone-400">✕</span>
                            <span>{limit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Plan CTA */}
                  <div className="pt-6 mt-6 border-t border-stone-200 dark:border-neutral-800">
                    <button
                      onClick={() => onSelectPlan(plan.inquirySubject)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isGrowth
                          ? 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xs'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
                      }`}
                    >
                      {plan.ctaLabel}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Catatan Transparansi Dekat Harga */}
        <div className="rounded-2xl p-6 bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 text-xs text-stone-600 dark:text-neutral-400 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white">
            <ShieldAlert className="w-4 h-4 text-slate-800 dark:text-slate-200" />
            <span>Ketentuan Transparansi Penawaran &amp; Batasan Teknis</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1 text-[11px] leading-relaxed">
            <p>• <strong>Status Penawaran:</strong> Angka biaya di atas merupakan usulan penawaran standar yang ditinjau dan disesuaikan dalam proposal sebelum disepakati.</p>
            <p>• <strong>Biaya Pihak Ketiga:</strong> Biaya kuota pesan WhatsApp campaign berbayar, belanja iklan, cetak fisik menu, dan fotografer tidak termasuk.</p>
            <p>• <strong>Cakupan Terukur:</strong> Kuota konsep visual, batasan revisi, pembaruan katalog, dan jam operasional dukungan dicantumkan tertulis.</p>
            <p>• <strong>Integrasi POS Kustom:</strong> Integrasi printer Bluetooth kasir, multi-nomor telepon, atau sistem POS baru ditawarkan sebagai proyek terpisah.</p>
            <p>• <strong>Pajak &amp; Faktur:</strong> Pajak pertambahan nilai mengikuti dokumen resmi penawaran dan invoice final.</p>
            <p>• <strong>Tanpa Klaim Unlimited:</strong> Kami tidak menawarkan penggunaan tanpa batas yang belum dihitung kapasitas riilnya.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
