import React from 'react';
import markBlack from '../assets/images/origin_system_mark_black.png';
import markWhite from '../assets/images/origin_system_mark_white.png';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconHeightClass =
    size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : size === 'xl' ? 'h-12' : 'h-8';
  
  const textClass =
    size === 'sm'
      ? 'text-sm tracking-tight'
      : size === 'lg'
      ? 'text-xl tracking-tight'
      : size === 'xl'
      ? 'text-2xl tracking-tight'
      : 'text-base sm:text-lg tracking-tight';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 32-bit Transparent Mark */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src={markBlack}
          alt="Origin Systems Mark"
          className={`${iconHeightClass} w-auto object-contain dark:hidden block`}
          loading="eager"
          decoding="async"
        />
        <img
          src={markWhite}
          alt="Origin Systems Mark"
          className={`${iconHeightClass} w-auto object-contain hidden dark:block`}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Origin Systems Typography */}
      {showText && (
        <span className={`font-bold font-readable text-neutral-900 dark:text-neutral-100 flex items-center tracking-tight ${textClass}`}>
          Origin
          <span className="font-semibold text-slate-800 dark:text-slate-200 ml-1">Systems</span>
        </span>
      )}
    </div>
  );
};
