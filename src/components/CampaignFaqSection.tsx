import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/campaignData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const CampaignFaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (idx: number) => {
    setOpenIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fafaf9] dark:bg-[#121214] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Pertanyaan Umum Mengenai Layanan Origin Systems
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Jawaban lugas dan realistis seputar cakupan kerja, biaya, dan operasional campaign kafe.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors shadow-2xs overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-stone-50 dark:hover:bg-neutral-800/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 dark:text-white leading-snug">
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-lg text-stone-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-slate-900 dark:text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-stone-100 dark:border-neutral-800/80 animate-fade-in">
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed pt-3">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
