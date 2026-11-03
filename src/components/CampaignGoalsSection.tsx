import React from 'react';
import { CAMPAIGN_GOALS, CampaignGoal } from '../data/campaignData';
import { RefreshCw, CalendarClock, Users, Sparkles, ArrowRight, BarChart2 } from 'lucide-react';

interface CampaignGoalsSectionProps {
  onSelectGoal: (goalTitle: string) => void;
}

export const CampaignGoalsSection: React.FC<CampaignGoalsSectionProps> = ({
  onSelectGoal,
}) => {
  const getGoalIcon = (code: CampaignGoal['code']) => {
    switch (code) {
      case 'retention':
        return <RefreshCw className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 'slow-days':
        return <CalendarClock className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 'group-orders':
        return <Users className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 'menu-launch':
        return <Sparkles className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
    }
  };

  return (
    <section id="tujuan-campaign" className="py-20 sm:py-28 bg-white dark:bg-[#151518] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Fokus Satu Tujuan yang Terukur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Pilih Tujuan Campaign untuk Kafe Anda
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Setiap kafe memiliki prioritas yang berbeda pada periode tertentu. Pilih satu fokus yang ingin Anda uji terlebih dahulu, lalu kami susunkan penawaran dan alur pemesanannya.
          </p>
        </div>

        {/* 4 Campaign Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAMPAIGN_GOALS.map((goal, idx) => (
            <div
              key={goal.id}
              className="rounded-2xl p-6 sm:p-8 bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 hover:border-slate-500 dark:hover:border-slate-500 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Header card */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 shadow-2xs">
                    {getGoalIcon(goal.code)}
                  </div>
                  <span className="text-xs font-mono text-stone-400 dark:text-neutral-500 font-semibold">
                    TUJUAN 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight">
                    {goal.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-300 mt-0.5">
                    {goal.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
                  {goal.description}
                </p>

                {/* Measurable Results */}
                <div className="pt-2 border-t border-stone-200/80 dark:border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 dark:text-neutral-200 mb-2">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    <span>Ukuran Hasil yang Diperiksa:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {goal.metrics.map((metric, mIdx) => (
                      <li
                        key={mIdx}
                        className="text-xs text-stone-600 dark:text-neutral-400 flex items-center gap-2"
                      >
                        <span className="text-slate-500 dark:text-slate-400 font-bold">›</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-stone-200 dark:border-neutral-800">
                <button
                  onClick={() => onSelectGoal(goal.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-stone-900 dark:text-white bg-white dark:bg-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-700 border border-stone-300 dark:border-neutral-700 transition-colors shadow-2xs cursor-pointer group"
                >
                  <span>Pilih Tujuan Ini &amp; Bahas Alurnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-slate-700 dark:text-slate-300" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note on problem assumptions */}
        <div className="mt-8 text-center text-xs text-stone-500 dark:text-neutral-500 max-w-xl mx-auto">
          Catatan: Origin Systems tidak mengasumsikan kafe Anda memiliki masalah tertentu. Kami menyusun strategi berdasarkan tujuan yang Anda tetapkan dan data operasional yang disepakati.
        </div>

      </div>
    </section>
  );
};
