import React, { useState, useRef } from 'react';
import { ASSET_PATHS, MAIN_HOTSPOTS, Hotspot } from '../data/mockupData';
import { TypographyOverlay } from './TypographyOverlay';
import { LightingPreset, MockupViewMode } from '../types';
import { Maximize2, MessageCircle, BookOpen, Coffee, ZoomIn, Eye } from 'lucide-react';

interface MockupCanvasProps {
  viewMode: MockupViewMode;
  lighting: LightingPreset;
  showOverlay: boolean;
  showHotspots: boolean;
  scriptScale: number;
  titleText: string;
  subtitleText: string;
  onOpenChat: () => void;
  onOpenMenu: () => void;
  onToggleFullscreen?: () => void;
}

export const MockupCanvas: React.FC<MockupCanvasProps> = ({
  viewMode,
  lighting,
  showOverlay,
  showHotspots,
  scriptScale,
  titleText,
  subtitleText,
  onOpenChat,
  onOpenMenu,
  onToggleFullscreen,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Lighting filter styles that maintain photorealism without neon or sci-fi tropes
  const lightingFilters: Record<LightingPreset, string> = {
    'daylight-natural': 'brightness(1.02) contrast(1.02) saturate(1.03)',
    'morning-warmth': 'brightness(1.03) contrast(1.0) sepia(0.06) saturate(1.08)',
    'clean-neutral': 'brightness(1.04) contrast(1.05) saturate(0.98)',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMagnifierActive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = (x / rect.width) * 100;
    const relY = (y / rect.height) * 100;
    setMagnifierPos({ x, y, relX, relY });
  };

  const currentImage =
    viewMode === 'phone-closeup'
      ? ASSET_PATHS.phoneCloseup
      : viewMode === 'cafe-menu'
      ? ASSET_PATHS.cafeMenu
      : ASSET_PATHS.mainDesk;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-16/10 sm:aspect-16/9 bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 group select-none"
      style={{ minHeight: '440px' }}
      aria-label="Origins AI System Photorealistic Presentation Canvas"
    >
      {/* Photorealistic Presentation Image Base */}
      <img
        src={currentImage}
        alt="Photorealistic high-end mockup of clean minimalist wooden desk with smartphone WhatsApp chat and printed cafe menu"
        className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
        style={{ filter: lightingFilters[lighting] }}
        referrerPolicy="no-referrer"
      />

      {/* Subtle Natural Window Light Vignette (Clean organic daylight, pure monochrome blend) */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/10 mix-blend-soft-light"
        aria-hidden="true"
      />

      {/* Top Left Typography Overlay (as explicitly specified in user prompt) */}
      {showOverlay && (
        <TypographyOverlay
          title={titleText}
          subtitle={subtitleText}
          scale={scriptScale}
          tone="charcoal"
          showShadow={true}
        />
      )}

      {/* Interactive Hotspots on the Desk (visible when showHotspots is true) */}
      {showHotspots &&
        viewMode === 'desk-main' &&
        MAIN_HOTSPOTS.map(spot => {
          const isSelected = activeHotspot?.id === spot.id;
          return (
            <div
              key={spot.id}
              className="absolute z-30 transition-transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            >
              <button
                onClick={() => {
                  setActiveHotspot(spot);
                  if (spot.actionType === 'open-chat') onOpenChat();
                  if (spot.actionType === 'open-menu') onOpenMenu();
                }}
                onMouseEnter={() => setActiveHotspot(spot)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`relative flex items-center justify-center p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
                  isSelected
                    ? 'bg-black text-white scale-110 ring-4 ring-neutral-400'
                    : 'bg-white/90 text-black hover:bg-white hover:scale-105'
                }`}
                aria-label={`Hotspot: ${spot.title}`}
              >
                {spot.icon === 'phone' && <MessageCircle className="w-4 h-4 text-black" />}
                {spot.icon === 'menu' && <BookOpen className="w-4 h-4 text-black" />}
                {spot.icon === 'coffee' && <Coffee className="w-4 h-4 text-black" />}
                {spot.icon === 'typography' && <span className="font-sans text-xs font-bold text-black">Aa</span>}

                {/* Subtle soft pulse ring */}
                <span className="absolute inset-0 rounded-full border border-neutral-400/40 animate-ping opacity-60 pointer-events-none" />
              </button>

              {/* Tooltip Card */}
              {isSelected && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 w-60 p-3.5 bg-black/95 text-white rounded-xl shadow-xl text-left pointer-events-none backdrop-blur-md border border-neutral-700 animate-fade-in z-40">
                  <p className="text-xs font-semibold text-white font-sans">{spot.title}</p>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed font-sans">{spot.subtitle}</p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-2 flex items-center gap-1">
                    Klik untuk membuka interaksi →
                  </p>
                </div>
              )}
            </div>
          );
        })}

      {/* Magnifier / Loupe Tool */}
      {isMagnifierActive && (
        <div
          className="absolute pointer-events-none border-2 border-white rounded-full shadow-2xl z-40 overflow-hidden w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-neutral-100"
          style={{
            left: `${magnifierPos.x}px`,
            top: `${magnifierPos.y}px`,
            backgroundImage: `url(${currentImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${magnifierPos.relX}% ${magnifierPos.relY}%`,
            backgroundSize: '280% 280%',
          }}
        >
          <div className="absolute inset-0 ring-1 ring-black/20 rounded-full" />
          <div className="absolute bottom-1 inset-x-0 text-center">
            <span className="bg-black/90 text-[9px] text-white px-2 py-0.5 rounded-full font-mono">
              2.8x Detail
            </span>
          </div>
        </div>
      )}

      {/* Floating Bottom Quick Bar */}
      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-3 z-20 pointer-events-none">
        {/* Quick action buttons (clickable) */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/90 hover:bg-black text-white text-xs font-semibold shadow-md backdrop-blur-md border border-neutral-700 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-white" />
            <span>Coba Chatbot WhatsApp</span>
          </button>

          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 hover:bg-white text-black text-xs font-semibold shadow-md backdrop-blur-md border border-neutral-300 transition-all hover:scale-105 active:scale-95"
          >
            <BookOpen className="w-3.5 h-3.5 text-black" />
            <span>Lihat Menu Cetak</span>
          </button>
        </div>

        {/* View inspection tools */}
        <div className="flex items-center gap-1.5 pointer-events-auto bg-black/90 backdrop-blur-md p-1 rounded-xl border border-neutral-700 text-white shadow-md">
          <button
            onClick={() => setIsMagnifierActive(!isMagnifierActive)}
            className={`p-1.5 rounded-lg transition-colors ${
              isMagnifierActive ? 'bg-white text-black' : 'hover:bg-neutral-800 text-neutral-300'
            }`}
            title="Kaca Pembesar / Detail Inspector"
            aria-label="Toggle Magnifier Lens"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-300 transition-colors"
              title="Tampilan Layar Penuh"
              aria-label="Fullscreen Mockup"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
