import React from 'react';
import { MockupConfig, MockupViewMode, LightingPreset } from '../types';
import { Sun, Layers, Smartphone, Image, LayoutGrid } from 'lucide-react';

interface PresentationToolbarProps {
  config: MockupConfig;
  onChangeConfig: (updater: (prev: MockupConfig) => MockupConfig) => void;
  onReset: () => void;
}

export const PresentationToolbar: React.FC<PresentationToolbarProps> = ({
  config,
  onChangeConfig,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4 transition-colors">
      {/* View angle & mode selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white font-mono">
            Sudut Pandang Mockup:
          </span>
        </div>

        <div className="flex flex-wrap gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
          <button
            onClick={() => onChangeConfig(prev => ({ ...prev, viewMode: 'desk-main' }))}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              config.viewMode === 'desk-main'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Meja Minimalis (Utama)
          </button>
          <button
            onClick={() => onChangeConfig(prev => ({ ...prev, viewMode: 'phone-closeup' }))}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              config.viewMode === 'phone-closeup'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Detail Smartphone
          </button>
          <button
            onClick={() => onChangeConfig(prev => ({ ...prev, viewMode: 'cafe-menu' }))}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              config.viewMode === 'cafe-menu'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            Menu Cetak & Foto Makanan
          </button>
          <button
            onClick={() => onChangeConfig(prev => ({ ...prev, viewMode: 'dual-split' }))}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              config.viewMode === 'dual-split'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Tampilan Komparasi
          </button>
        </div>
      </div>

      {/* Lighting Presets */}
      <div className="pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-black dark:text-white" />
            <span className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white font-mono">
              Nuansa Cahaya Alami:
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
            {(
              [
                ['daylight-natural', 'Pagi Alami'],
                ['morning-warmth', 'Hangat Lembut'],
                ['clean-neutral', 'Studio Bersih'],
              ] as [LightingPreset, string][]
            ).map(([val, label]) => (
              <button
                key={val}
                onClick={() => onChangeConfig(prev => ({ ...prev, lighting: val }))}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                  config.lighting === val
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
