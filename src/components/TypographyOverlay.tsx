import React from 'react';

interface TypographyOverlayProps {
  title?: string;
  subtitle?: string;
  scale?: number;
  tone?: 'espresso' | 'charcoal' | 'white';
  showShadow?: boolean;
}

export const TypographyOverlay: React.FC<TypographyOverlayProps> = ({
  title = 'Origins AI System',
  subtitle = 'Layanan Visual & Chatbot',
  scale = 1.0,
  tone = 'espresso',
  showShadow = true,
}) => {
  // Color presets tailored for strict monochrome black and white
  const colorMap = {
    espresso: {
      title: 'text-black',
      subtitle: 'text-neutral-700',
      accent: 'border-neutral-400',
      shadow: 'drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]',
      scrim: 'bg-white/60 backdrop-blur-[2px] shadow-sm border border-neutral-200',
    },
    charcoal: {
      title: 'text-black',
      subtitle: 'text-neutral-800',
      accent: 'border-neutral-500',
      shadow: 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]',
      scrim: 'bg-white/60 backdrop-blur-[2px] shadow-sm border border-neutral-200',
    },
    white: {
      title: 'text-white',
      subtitle: 'text-neutral-200',
      accent: 'border-white/50',
      shadow: 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]',
      scrim: 'bg-black/60 backdrop-blur-[2px] shadow-sm border border-neutral-700',
    },
  };

  const currentTheme = colorMap[tone];

  return (
    <div
      className={`absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 z-20 pointer-events-none select-none max-w-[85%] sm:max-w-md p-4 sm:p-5 rounded-2xl transition-all duration-300 ${currentTheme.scrim}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
      aria-label={`${title} - ${subtitle}`}
    >
      {/* Main Title: Flowing, elegant cursive script font resembling Lucky Rose */}
      <h1
        className={`font-script-title tracking-normal leading-[1.05] ${currentTheme.title} ${showShadow ? currentTheme.shadow : ''} text-4xl sm:text-5xl md:text-6xl font-normal transition-colors`}
        style={{
          fontFamily: "'Alex Brush', 'Dancing Script', cursive, sans-serif",
          textRendering: 'optimizeLegibility',
        }}
      >
        {title}
      </h1>

      {/* Subtitle: Clean, classic serif font resembling Times New Roman */}
      <div className="mt-1 sm:mt-1.5 flex items-center gap-2.5">
        <div className={`h-[1px] w-6 sm:w-8 border-t ${currentTheme.accent}`} aria-hidden="true" />
        <p
          className={`font-classic-serif tracking-widest text-xs sm:text-sm md:text-base uppercase font-medium ${currentTheme.subtitle} ${showShadow ? currentTheme.shadow : ''} transition-colors`}
          style={{
            fontFamily: "'Times New Roman', 'Playfair Display', Georgia, serif",
            letterSpacing: '0.14em',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
