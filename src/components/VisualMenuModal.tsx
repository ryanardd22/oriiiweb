import React from 'react';
import { X, MessageSquare, Utensils, Check } from 'lucide-react';
import { CAFE_MENU_ITEMS } from '../utils/chatbotEngine';
import { ASSET_PATHS } from '../data/mockupData';

interface VisualMenuModalProps {
  onClose: () => void;
  onOrderInChat: (itemName: string) => void;
}

export const VisualMenuModal: React.FC<VisualMenuModalProps> = ({
  onClose,
  onOrderInChat,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col transition-colors">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-black/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold font-mono">
                Origins AI • Layanan Desain Visual F&B
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
              The Daily Bean & Mourne — Artisanal Printed Menu
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Menu & Food Photography Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 group">
              <img
                src={ASSET_PATHS.cafeMenu}
                alt="Printed Cafe Menu Spread with Avocado Poached Egg and Croissants"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-mono">
                  Visual Asset Specimen
                </span>
                <p className="text-sm font-medium font-sans">
                  Artisanal Breakfast & Brunch Food Photography Spread
                </p>
              </div>
            </div>

            {/* Menu Editorial Text & Details */}
            <div className="space-y-4">
              <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                  Menu Specification
                </span>
                <h3 className="text-lg font-bold text-black dark:text-white mt-0.5">
                  Desain Menu Cetak Bertaraf Fine-Casual
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed font-sans">
                  Didesain dengan rasio ruang bernapas yang lega, tipografi editorial yang jernih, dan fotografi kuliner berdaya pikat tinggi yang terbukti meningkatkan rata-rata nilai pesanan meja hingga +28%.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Kertas Linen Textured Matte Premium 300gsm (Tahan percikan air)</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Sinkronisasi otomatis dengan katalog WhatsApp Bot Origins AI</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Pencahayaan foto natural daylight tanpa kilatan artifisial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Dishes List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-black dark:text-white flex items-center gap-2">
                <Utensils className="w-4 h-4 text-black dark:text-white" /> Sajian Unggulan dalam Menu
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                Terhubung dengan WhatsApp Ordering
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAFE_MENU_ITEMS.map(item => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-2xs hover:border-black dark:hover:border-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h5 className="font-semibold text-black dark:text-white text-sm font-sans">{item.name}</h5>
                      <span className="font-mono text-xs font-bold text-black dark:text-white">
                        {item.formattedPrice}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed font-sans">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2 text-[10px] text-neutral-500 font-mono">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span key={i} className="bg-neutral-100 dark:bg-neutral-700/80 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-200">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onOrderInChat(`Pesan ${item.name}`);
                      onClose();
                    }}
                    className="mt-3 w-full py-2 px-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Pesan Lewat WhatsApp Bot
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
            Origins AI System memadukan seni visual cetak dengan otomasi digital percakapan.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
};
