import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { ASSET_PATHS } from '../data/mockupData';

interface CampaignHeroProps {
  onOpenConsultation: () => void;
  onScrollToDemo: () => void;
  onScrollToGoals: () => void;
}

export const CampaignHero: React.FC<CampaignHeroProps> = ({
  onOpenConsultation,
  onScrollToDemo,
  onScrollToGoals,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-black text-white select-none pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-900"
    >
      {/* Background Image: High-end photorealistic desk mockup with deep cinematic grade */}
      <img
        src={ASSET_PATHS.mainDesk}
        alt="Origin Systems Cinematic Presentation"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />

      {/* Dark Filmic Vignette & Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />

      {/* Top spacer balancing the bottom scroll cue */}
      <div className="hidden sm:block h-2" aria-hidden="true" />

      {/* Hero Center Content: Grand, Wide, High-Impact Big-Tech Typography */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-6 my-auto py-6">
        
        {/* Subtle Eyebrow - Strictly plain tracking uppercase, no pill, no green dot */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] sm:tracking-[0.45em] text-neutral-400 uppercase font-semibold">
          ORIGIN SYSTEMS · EKSEKUSI CAMPAIGN PENJUALAN F&amp;B
        </p>

        {/* Archer-Style Grand Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[0.08em] sm:tracking-[0.12em] uppercase leading-[1.14] max-w-4xl">
          Ingin Menambah Pesanan
          <span className="block mt-2 text-stone-200">Di Hari yang Biasanya Sepi?</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans tracking-wide max-w-2xl leading-relaxed">
          Origin Systems membantu menyiapkan dan menjalankan satu campaign: penawaran, visual promosi, jalur pemesanan WhatsApp, dan pencatatan hasil. Mulai dari satu outlet dan periode yang disepakati.
        </p>

        {/* Clean Minimalist CTA Row with Navy / Crisp White Styling */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 sm:pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Bahas Campaign Kafe Saya</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] rounded-xl transition-all active:scale-95 cursor-pointer"
          >
            Lihat Contoh Alurnya
          </button>
        </div>

        {/* Supporting Context Text */}
        <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-normal pt-2 max-w-xl">
          Untuk kafe yang sudah beroperasi dan ingin menguji cara meningkatkan penjualan dengan biaya yang terkontrol.
        </p>

      </div>

      {/* Bottom Scroll Cue - comfortably separated at the bottom of the viewport */}
      <div className="relative z-10 pt-4 pb-2">
        <button
          onClick={onScrollToGoals}
          className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};
