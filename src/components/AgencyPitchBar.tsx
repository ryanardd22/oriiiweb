import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface AgencyPitchBarProps {
  onOpenConsultation: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const AgencyPitchBar: React.FC<AgencyPitchBarProps> = ({
  onOpenConsultation,
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'tujuan-campaign', label: 'Kebutuhan Anda' },
    { id: 'cara-kerja', label: 'Cara Kerja' },
    { id: 'demo-campaign', label: 'Contoh & Demo' },
    { id: 'layanan-harga', label: 'Layanan & Harga' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fafaf9]/90 dark:bg-black/85 backdrop-blur-md border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Origin Systems Brand Logo */}
        <a
          href="#hero"
          onClick={e => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="flex items-center gap-3 group shrink-0 focus:outline-hidden focus:ring-2 focus:ring-slate-500 rounded-lg p-1"
          aria-label="Kembali ke beranda Origin Systems"
        >
          <BrandLogo size="md" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-normal text-stone-700 dark:text-neutral-300">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors duration-150 py-1 cursor-pointer ${
                  isActive
                    ? 'text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white'
                    : 'hover:text-slate-900 dark:hover:text-white text-stone-600 dark:text-neutral-400'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Theme Switcher & Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-neutral-400 hover:bg-stone-200/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-stone-800" />
            )}
          </button>

          {/* Deep Navy CTA button */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <span>Bahas Campaign Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-lg text-stone-800 dark:text-neutral-200 hover:bg-stone-200/60 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 dark:border-neutral-800 bg-[#fafaf9] dark:bg-black px-4 pt-3 pb-5 space-y-3 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left px-3 py-2 text-sm font-medium text-stone-700 dark:text-neutral-200 hover:bg-stone-100 dark:hover:bg-neutral-800/80 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-200 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-black rounded-xl shadow-xs"
            >
              <span>Bahas Campaign Saya</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
