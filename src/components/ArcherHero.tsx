import React from 'react';
import { ASSET_PATHS } from '../data/mockupData';
import { ArrowDown, MessageCircle } from 'lucide-react';

interface ArcherHeroProps {
  onScrollToStory: () => void;
  onOpenChat: () => void;
}

export const ArcherHero: React.FC<ArcherHeroProps> = ({
  onScrollToStory,
  onOpenChat,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-black select-none pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image: High-end photorealistic desk mockup with deep cinematic grade */}
      <img
        src={ASSET_PATHS.mainDesk}
        alt="Origin System Cinematic Presentation"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-65 scale-105 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />

      {/* Dark Filmic Vignette & Scrim (Inspired by Archer reference) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />

      {/* Top spacer balancing the bottom scroll cue */}
      <div className="hidden sm:block h-2" aria-hidden="true" />

      {/* Hero Center Content: Grand, Wide, High-Impact Big-Tech Typography */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center space-y-6 my-auto py-4">
        {/* Subtle Eyebrow (No pill badge, strictly plain tracking uppercase) */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] sm:tracking-[0.45em] text-neutral-400 uppercase font-semibold">
          ORIGIN SYSTEM · DUAL CORE AUTOMATION
        </p>

        {/* Archer-Style Grand Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[0.14em] sm:tracking-[0.18em] uppercase leading-[1.15] max-w-5xl">
          BUILDING THE FUTURE
          <span className="block mt-2">OF F&amp;B AUTOMATION</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans tracking-wide max-w-2xl leading-relaxed">
          Ubah cara bisnis kuliner Anda memikat tamu dan memproses pesanan. Dari keindahan sentuhan fisik menu berstandar editorial hingga asisten WhatsApp cerdas yang siap melayani pelanggan Anda 24/7.
        </p>

        {/* Clean Minimalist CTA Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 sm:pt-6">
          <button
            onClick={onOpenChat}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Uji Coba WhatsApp</span>
          </button>

          <button
            onClick={onScrollToStory}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/40 hover:border-white text-white text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-all active:scale-95 cursor-pointer"
          >
            Eksplorasi Fitur
          </button>
        </div>
      </div>

      {/* Bottom Scroll Cue - comfortably separated at the bottom of the viewport */}
      <div className="relative z-10 pt-4 pb-2">
        <button
          onClick={onScrollToStory}
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
