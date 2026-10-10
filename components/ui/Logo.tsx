import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${className}`}
      aria-label="S W Development - Página Inicial"
    >
      {/* Precision geometric emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-[#0F1117] border border-slate-700/80 group-hover:border-blue-500/60 transition-colors duration-200 shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-60" />
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors"
        >
          {/* S glyph */}
          <path
            d="M6 8.5C6 7.12 7.12 6 8.5 6H13C14.1 6 15 6.9 15 8C15 9.1 14.1 10 13 10H8.5C7.12 10 6 11.12 6 12.5C6 13.88 7.12 15 8.5 15H13C14.66 15 16 16.34 16 18C16 19.66 14.66 21 13 21H8.5C7.12 21 6 19.88 6 18.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* W glyph */}
          <path
            d="M13 7L15.5 17L18.5 9.5L21.5 17L24 7"
            stroke="#F8FAFC"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors">
              S W
            </span>
            <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/50 font-mono tracking-wider">
              DEV
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 -mt-0.5">
            Systems LTDA
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
