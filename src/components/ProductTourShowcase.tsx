import React, { useState, useRef } from 'react';
import { ASSET_PATHS, MAIN_HOTSPOTS, Hotspot } from '../data/mockupData';
import { LightingPreset } from '../types';
import { PhoneChatSimulator } from './PhoneChatSimulator';
import {
  MessageCircle,
  BookOpen,
  ZoomIn,
  Maximize2,
  Zap,
  Users,
  Sun,
  Layout,
  Smartphone,
  Image as ImageIcon,
  Check,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ProductTourShowcaseProps {
  onOpenChatModal: () => void;
  onOpenMenuModal: () => void;
  onClaimPackage: (packageName: string) => void;
  onToggleFullscreen?: () => void;
}

export type ProductTourTab = 'desk' | 'visual-menu' | 'whatsapp-inline' | 'growth-engine';

export const ProductTourShowcase: React.FC<ProductTourShowcaseProps> = ({
  onOpenChatModal,
  onOpenMenuModal,
  onClaimPackage,
  onToggleFullscreen,
}) => {
  const [activeTab, setActiveTab] = useState<ProductTourTab>('desk');
  const [lighting, setLighting] = useState<LightingPreset>('daylight-natural');
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const [panicSent, setPanicSent] = useState(false);
  const [sopStaffQuery, setSopStaffQuery] = useState('');
  const [sopStaffAnswer, setSopStaffAnswer] = useState<string | null>(null);
  const [isSopLoading, setIsSopLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Lighting filters maintaining photorealism
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

  const handlePanicTrigger = () => {
    setPanicSent(true);
    setTimeout(() => {
      setPanicSent(false);
    }, 4500);
  };

  const handleSopAsk = (q: string) => {
    setSopStaffQuery(q);
    setIsSopLoading(true);
    setSopStaffAnswer(null);

    setTimeout(() => {
      setIsSopLoading(false);
      if (q.toLowerCase().includes('resep') || q.toLowerCase().includes('avocado')) {
        setSopStaffAnswer(
          'SOP Menu Avocado Toast: 1 slice sourdough bakar 2.5 menit (golden crisp). 80g hass avocado dihancurkan kasar + 1 sdt lemon juice & sejumput sea salt. Top dengan 1 poached egg (rebus 3 menit 20 detik, soft runny center), watermelon radish iris tipis, & drizzle 5ml olive oil extra virgin.'
        );
      } else if (q.toLowerCase().includes('closing')) {
        setSopStaffAnswer(
          'SOP Closing Shift Barista: 1) Backflush mesin espresso dengan cleaner Pulycaff. 2) Bersihkan steam wand & rendam air panas. 3) Kunci grinder dan simpan sisa biji kopi di wadah kedap udara. 4) Rekap transaksi POS & kirim foto kas closing ke grup WhatsApp manajemen.'
        );
      } else {
        setSopStaffAnswer(
          'SOP Pelayanan Meja: Sambut tamu dalam 10 detik dengan senyum & buku menu cetak Linen 300gsm. Infokan barcode pemesanan cepat via WhatsApp atau catat pesanan di POS tablet.'
        );
      }
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Apple-Style Segmented Navigation Tab Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
            Product Tour
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <span className="text-xs font-medium text-black dark:text-white">
            Eksplorasi Fitur Origins
          </span>
        </div>

        {/* 4 Apple-style Tabs */}
        <div className="inline-flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('desk')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'desk'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>01. Meja Kerja F&B</span>
          </button>

          <button
            onClick={() => setActiveTab('visual-menu')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'visual-menu'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>02. Visual & Menu Cetak</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp-inline')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'whatsapp-inline'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>03. Simulator Chatbot WA</span>
          </button>

          <button
            onClick={() => setActiveTab('growth-engine')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'growth-engine'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>04. Fitur Pertumbuhan</span>
          </button>
        </div>
      </div>

      {/* Main Tour Canvas Area */}
      {activeTab === 'desk' && (
        <div className="space-y-4">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full aspect-16/10 sm:aspect-16/9 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group select-none"
            style={{ minHeight: '440px' }}
          >
            <img
              src={ASSET_PATHS.mainDesk}
              alt="Meja Kerja Minimalis F&B Origins AI"
              className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
              style={{ filter: lightingFilters[lighting] }}
              referrerPolicy="no-referrer"
            />

            {/* Subtle natural daylight vignette */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/15 via-transparent to-white/10 mix-blend-soft-light"
              aria-hidden="true"
            />

            {/* Clean Minimalist Overlay Label */}
            <div className="absolute top-5 left-5 z-20 pointer-events-none">
              <div className="bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-700 text-white space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-neutral-300">
                    Live Setup • Meja F&B
                  </span>
                </div>
                <p className="text-xs font-medium text-white">
                  Pencahayaan Daylight Alami & Integrasi Asisten Digital
                </p>
              </div>
            </div>

            {/* Interactive Hotspots */}
            {MAIN_HOTSPOTS.map(spot => {
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
                      if (spot.actionType === 'open-chat') setActiveTab('whatsapp-inline');
                      if (spot.actionType === 'open-menu') onOpenMenuModal();
                    }}
                    onMouseEnter={() => setActiveHotspot(spot)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    className={`relative flex items-center justify-center p-2.5 rounded-full backdrop-blur-md transition-all duration-200 shadow-md ${
                      isSelected
                        ? 'bg-black text-white scale-110 ring-2 ring-white'
                        : 'bg-white/95 text-black hover:bg-white hover:scale-105'
                    }`}
                    aria-label={`Hotspot: ${spot.title}`}
                  >
                    {spot.icon === 'phone' && <MessageCircle className="w-4 h-4 text-black" />}
                    {spot.icon === 'menu' && <BookOpen className="w-4 h-4 text-black" />}
                    {spot.icon === 'coffee' && <span className="font-mono text-xs font-bold text-black">☕</span>}
                    {spot.icon === 'typography' && <span className="font-sans text-xs font-bold text-black">Aa</span>}
                  </button>

                  {/* Tooltip */}
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3 bg-black/95 text-white rounded-xl shadow-xl text-left pointer-events-none backdrop-blur-md border border-neutral-700 z-40">
                      <p className="text-xs font-semibold text-white">{spot.title}</p>
                      <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{spot.subtitle}</p>
                      <p className="text-[11px] text-neutral-400 font-mono mt-2">
                        Klik untuk eksplorasi →
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
                  backgroundImage: `url(${ASSET_PATHS.mainDesk})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: `${magnifierPos.relX}% ${magnifierPos.relY}%`,
                  backgroundSize: '280% 280%',
                }}
              >
                <div className="absolute inset-0 ring-1 ring-black/20 rounded-full" />
                <div className="absolute bottom-1.5 inset-x-0 text-center">
                  <span className="bg-black/90 text-[10px] text-white px-2 py-0.5 rounded-full font-mono">
                    2.8x Detail Lensa
                  </span>
                </div>
              </div>
            )}

            {/* Floating Quick Action Controls Bar */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-3 z-20 pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={() => setActiveTab('whatsapp-inline')}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-md border border-neutral-700"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>Buka Simulator WA</span>
                </button>
                <button
                  onClick={onOpenMenuModal}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-100 transition-colors shadow-md border border-neutral-300"
                >
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                  <span>Inspeksi Menu Cetak</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 pointer-events-auto bg-black/90 backdrop-blur-md p-1 rounded-xl border border-neutral-700 text-white shadow-md">
                <button
                  onClick={() => setIsMagnifierActive(!isMagnifierActive)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isMagnifierActive ? 'bg-white text-black' : 'hover:bg-neutral-800 text-neutral-300'
                  }`}
                  title="Kaca Pembesar / Detail Lensa"
                  aria-label="Toggle Magnifier Lens"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {onToggleFullscreen && (
                  <button
                    onClick={onToggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Layar Penuh"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Daylight Presets Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-50 dark:bg-neutral-900/60 p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <Sun className="w-4 h-4 text-black dark:text-white" />
              <span>Simulasi Nuansa Cahaya Alami:</span>
            </div>
            <div className="flex gap-1.5">
              {(
                [
                  ['daylight-natural', 'Pagi Alami'],
                  ['morning-warmth', 'Hangat Lembut'],
                  ['clean-neutral', 'Studio Bersih'],
                ] as [LightingPreset, string][]
              ).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setLighting(val)}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors font-medium ${
                    lighting === val
                      ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Visual & Menu Cetak Detail */}
      {activeTab === 'visual-menu' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-16/10 relative group">
            <img
              src={ASSET_PATHS.cafeMenu}
              alt="Buku Menu Cetak & Fotografi Kuliner"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300 font-semibold">
                  Fotografi Resolusi Tinggi
                </span>
                <p className="text-white text-base font-semibold">
                  Avocado & Organic Poached Egg Sourdough Toast
                </p>
                <p className="text-xs text-neutral-300 max-w-md">
                  Pencahayaan natural window tanpa pantulan buatan, membangkitkan selera makan tamu cafe Anda.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                  Spesifikasi Standar Fisik
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                  Karakter Visual & Kualitas Cetak
                </h3>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <div className="flex items-start gap-2.5 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-black dark:text-white">Linen Textured Matte 300gsm:</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Kertas bertekstur elegan bebas sidik jari & tahan cipratan minyak ringan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-black dark:text-white">20 Aset AI Fotorealistik Tiap Bulan:</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Update foto musiman untuk promo bulanan tanpa biaya kru studio & lighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-black dark:text-white">Sinkronisasi Katalog Chatbot:</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Setiap hidangan di menu langsung terkoneksi dengan database AI WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <button
                onClick={onOpenMenuModal}
                className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Buka Preview Buku Menu Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Simulator WhatsApp Inline (Interactive live demo) */}
      {activeTab === 'whatsapp-inline' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            {/* Inline Phone Simulator Wrapper */}
            <div className="w-full max-w-sm h-[620px] rounded-[36px] overflow-hidden border-[7px] border-neutral-900 shadow-2xl bg-neutral-100">
              <PhoneChatSimulator isModal={false} />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                <span>Otomasi 24 Jam</span>
                <span>·</span>
                <span>WhatsApp Cloud API</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
                Uji Coba Langsung di Samping Ini
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Ketik langsung di layar smartphone virtual di sebelah kiri. Sistem secara otomatis memproses pesanan, menghitung pajak restoran 10%, dan menjawab pertanyaan menu tanpa menunggu balasan manual.
              </p>
            </div>

            {/* Quick Testing Prompts */}
            <div className="bg-neutral-50 dark:bg-neutral-900/60 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Contoh Skenario yang Dapat Dicoba:
              </span>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-neutral-700 dark:text-neutral-300">
                    "Pesan Avocado Toast + Latte"
                  </span>
                  <span className="text-[11px] text-neutral-500 font-sans">
                    Otomatis buat rincian pesanan & kalkulasi
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-neutral-700 dark:text-neutral-300">
                    "Ada menu vegetarian?"
                  </span>
                  <span className="text-[11px] text-neutral-500 font-sans">
                    Filter hidangan & info alergen
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-neutral-700 dark:text-neutral-300">
                    "Info promo paket growth"
                  </span>
                  <span className="text-[11px] text-neutral-500 font-sans">
                    Penjelasan investasi & aktivasi
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenChatModal}
                className="px-4 py-2.5 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded-xl text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Buka Versi Modal Penuh</span>
              </button>
              <button
                onClick={() => onClaimPackage('Paket Growth (Promo)')}
                className="px-4 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl text-xs font-semibold transition-colors"
              >
                Konsultasi Integrasi WhatsApp Bisnis →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Fitur Pertumbuhan (Panic Button & Bot SOP) */}
      {activeTab === 'growth-engine' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Panic Button Simulator Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Fitur Step 04
                    </span>
                    <h4 className="text-lg font-bold text-black dark:text-white tracking-tight">
                      Panic Button: Flash Sale Instan
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-500 uppercase">
                  Trafik Detik Itu Juga
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Toko atau cafe sedang lengang pada jam 14:00? Ketik kode rahasia dari smartphone pemilik, dan bot secara serentak mengirim penawaran flash sale ke database tamu untuk memenuhi meja kosong.
              </p>

              {/* Interactive Demo Box */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Simulasi Perintah Pemilik:</span>
                  <span className="text-black dark:text-white font-semibold">/FLASH50</span>
                </div>

                <button
                  onClick={handlePanicTrigger}
                  disabled={panicSent}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    panicSent
                      ? 'bg-neutral-800 text-white cursor-default'
                      : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-98 shadow-sm'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>
                    {panicSent ? 'Broadcast Terkirim ke 850 Pelanggan!' : 'Simulasikan Tekan Panic Button'}
                  </span>
                </button>

                {panicSent && (
                  <div className="p-3 bg-neutral-900 text-white rounded-xl text-xs space-y-1 animate-fade-in font-sans border border-neutral-700">
                    <p className="font-semibold text-neutral-200 font-mono text-[11px]">
                      Pesan WhatsApp Otomatis ke Pelanggan:
                    </p>
                    <p className="text-neutral-300 text-xs italic">
                      "⚡ Flash Sale 2 Jam Saja! Tunjukkan pesan ini di The Daily Bean & nikmati Buy 1 Get 1 Free untuk seluruh menu pastry & latte hangat. Kuota 30 meja pertama!"
                    </p>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
              ✓ Termasuk dalam Paket Growth & Paket Pro
            </p>
          </div>

          {/* Bot SOP & Training Internal Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Fitur Step 05
                    </span>
                    <h4 className="text-lg font-bold text-black dark:text-white tracking-tight">
                      Bot SOP & Training Karyawan
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-500 uppercase">
                  Onboarding Instan
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Asisten khusus staf Anda. Karyawan baru bisa langsung bertanya takaran gramatur resep, langkah closing shift, atau tata tertib tanpa mengganggu waktu istirahat pemilik outlet.
              </p>

              {/* Interactive Demo Chips */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-500 uppercase font-semibold">
                  Coba Pertanyaan Staf:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => handleSopAsk('Berapa takaran gramatur resep Avocado Toast?')}
                    className="px-2.5 py-1 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    Resep Avocado Toast
                  </button>
                  <button
                    onClick={() => handleSopAsk('Apa saja ceklis closing shift barista?')}
                    className="px-2.5 py-1 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    Ceklis Closing Shift
                  </button>
                  <button
                    onClick={() => handleSopAsk('Bagaimana SOP menyambut tamu pertama kali?')}
                    className="px-2.5 py-1 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    Sambut Tamu
                  </button>
                </div>

                {isSopLoading && (
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-xs text-neutral-500 font-mono animate-pulse">
                    Mencari jawaban dalam dokumen SOP outlet...
                  </div>
                )}

                {sopStaffAnswer && !isSopLoading && (
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-xs space-y-1 border border-neutral-200 dark:border-neutral-700 animate-fade-in font-sans">
                    <p className="font-semibold text-black dark:text-white font-mono text-[11px]">
                      Jawaban AI Internal untuk Staf:
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-xs leading-relaxed">
                      {sopStaffAnswer}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
              ✓ Menghemat hingga 40 jam pelatihan bulanan
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
