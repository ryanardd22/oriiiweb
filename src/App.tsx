import React, { useState, useEffect } from 'react';
import { AgencyPitchBar } from './components/AgencyPitchBar';
import { CampaignHero } from './components/CampaignHero';
import { CampaignGoalsSection } from './components/CampaignGoalsSection';
import { CampaignWorkflowSection } from './components/CampaignWorkflowSection';
import { CampaignDemoSection } from './components/CampaignDemoSection';
import { CampaignEvaluationSection } from './components/CampaignEvaluationSection';
import { CampaignPricingSection } from './components/CampaignPricingSection';
import { SupportingToolsSection } from './components/SupportingToolsSection';
import { WorkSamplesSection } from './components/WorkSamplesSection';
import { CampaignFaqSection } from './components/CampaignFaqSection';
import { CampaignIntakeForm } from './components/CampaignIntakeForm';
import { PhoneChatSimulator } from './components/PhoneChatSimulator';
import { VisualMenuModal } from './components/VisualMenuModal';
import { BrandLogo } from './components/BrandLogo';
import { X, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  // Modal states for live interaction
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatInquiry, setChatInquiry] = useState('');

  // Form pre-fill state
  const [prefilledGoal, setPrefilledGoal] = useState('');
  const [prefilledPlan, setPrefilledPlan] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGoal = (goalTitle: string) => {
    setPrefilledGoal(goalTitle);
    handleNavigate('form-campaign');
  };

  const handleSelectPlan = (planInquiry: string) => {
    setPrefilledPlan(planInquiry);
    handleNavigate('form-campaign');
  };

  const handleOpenLiveSimulator = (inquiry = 'Halo The Daily Bean, saya tertarik dengan promo Paket Coffee Break') => {
    setChatInquiry(inquiry);
    setIsChatOpen(true);
  };

  const handleOrderFromMenu = (itemName: string) => {
    setIsMenuOpen(false);
    setChatInquiry(`Halo, saya ingin memesan menu: ${itemName}`);
    setIsChatOpen(true);
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-[#fafaf9] dark:bg-[#121214] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-slate-900 selection:text-white transition-colors duration-200">
        
        {/* 1. Header Navigation */}
        <AgencyPitchBar
          onOpenConsultation={() => handleNavigate('form-campaign')}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-1 w-full">
          {/* 2. Hero Section */}
          <CampaignHero
            onOpenConsultation={() => handleNavigate('form-campaign')}
            onScrollToDemo={() => handleNavigate('demo-campaign')}
            onScrollToGoals={() => handleNavigate('tujuan-campaign')}
          />

          {/* 3. Pilih Tujuan Campaign */}
          <CampaignGoalsSection onSelectGoal={handleSelectGoal} />

          {/* 4. Bagaimana Campaign Dijalankan (Cara Kerja) */}
          <CampaignWorkflowSection />

          {/* 5. Demo Satu Campaign (Coffee Break Simulation) */}
          <CampaignDemoSection
            onOpenLiveSimulator={() => handleOpenLiveSimulator()}
          />

          {/* 6. Evaluasi Hasil (Metrics & Transparent Margin Calculator) */}
          <CampaignEvaluationSection />

          {/* 7. Layanan dan Harga */}
          <CampaignPricingSection onSelectPlan={handleSelectPlan} />

          {/* 8. Fitur Pendukung Sesuai Kebutuhan */}
          <SupportingToolsSection
            onOpenVisualModal={() => setIsMenuOpen(true)}
            onOpenChatbotSimulator={() => handleOpenLiveSimulator('Halo, saya ingin mengecek jam operasional dan rekomendasi menu kafe')}
          />

          {/* 9. Contoh Hasil Kerja */}
          <WorkSamplesSection
            onOpenVisualModal={() => setIsMenuOpen(true)}
            onOpenChatbotSimulator={() => handleOpenLiveSimulator()}
          />

          {/* 10. Pertanyaan Umum (FAQ) */}
          <CampaignFaqSection />

          {/* 11. Formulir Penutup */}
          <CampaignIntakeForm
            initialGoal={prefilledGoal}
            initialPlan={prefilledPlan}
          />
        </main>

        {/* Minimalist Big-Tech OriginSYS Footer */}
        <footer className="border-t border-stone-200 dark:border-neutral-800 bg-white dark:bg-[#0e0e10] py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="space-y-2">
                <BrandLogo size="md" />
                <p className="text-xs text-stone-500 dark:text-neutral-400 max-w-md leading-relaxed">
                  Layanan terstruktur yang membantu bisnis kafe menyiapkan, menjalankan, dan mengevaluasi campaign penjualan terukur.
                </p>
              </div>

              {/* Navigation links in footer */}
              <div className="flex flex-wrap gap-6 text-xs text-stone-600 dark:text-neutral-400">
                <button
                  onClick={() => handleNavigate('tujuan-campaign')}
                  className="hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  Kebutuhan Anda
                </button>
                <button
                  onClick={() => handleNavigate('cara-kerja')}
                  className="hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  Cara Kerja
                </button>
                <button
                  onClick={() => handleNavigate('demo-campaign')}
                  className="hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  Contoh &amp; Demo
                </button>
                <button
                  onClick={() => handleNavigate('layanan-harga')}
                  className="hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  Layanan &amp; Harga
                </button>
                <button
                  onClick={() => handleNavigate('faq')}
                  className="hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  FAQ
                </button>
              </div>

            </div>

            <div className="pt-6 border-t border-stone-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 dark:text-neutral-500 font-mono">
              <div>
                © {new Date().getFullYear()} Origin Systems. Seluruh hak cipta dilindungi.
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/6285177460854?text=Halo%20Origin%20Systems%2C%20saya%20ingin%20berkonsultasi%20mengenai%20campaign%20penjualan%20kafe."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 dark:hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  WHATSAPP: +62 851-7746-0854
                </a>
                <span>·</span>
                <a
                  href="mailto:ryanard92@gmail.com"
                  className="hover:text-stone-900 dark:hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  EMAIL: ryanard92@gmail.com
                </a>
                <span>·</span>
                <span>PROSES PENAWARAN TRANSPARAN</span>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Chatbot Modal Simulator */}
        {isChatOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
            <div className="relative">
              <button
                onClick={() => {
                  setIsChatOpen(false);
                  setChatInquiry('');
                }}
                className="absolute -top-3 -right-3 z-60 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg border border-neutral-700 cursor-pointer"
                aria-label="Tutup Simulator WhatsApp"
              >
                <X className="w-4 h-4" />
              </button>
              <PhoneChatSimulator
                onClose={() => {
                  setIsChatOpen(false);
                  setChatInquiry('');
                }}
                isModal={true}
                initialInquiry={chatInquiry}
              />
            </div>
          </div>
        )}

        {/* Visual Menu Modal */}
        {isMenuOpen && (
          <VisualMenuModal
            onClose={() => setIsMenuOpen(false)}
            onOrderInChat={handleOrderFromMenu}
          />
        )}

      </div>
    </div>
  );
}
