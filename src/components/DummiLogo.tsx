"use client";

interface LogoProps {
  className?: string;
}

export default function DummiLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="60" cy="60" r="58" fill="url(#bgGrad)" stroke="#F59E0B" strokeWidth="3" />
      
      {/* Body / Chubby figure */}
      {/* Dress / body */}
      <ellipse cx="60" cy="78" rx="28" ry="24" fill="#F97316" />
      <ellipse cx="60" cy="78" rx="28" ry="24" fill="url(#dressGrad)" />
      
      {/* Arms */}
      <ellipse cx="34" cy="72" rx="8" ry="12" fill="#FDBA74" transform="rotate(-15 34 72)" />
      <ellipse cx="86" cy="72" rx="8" ry="12" fill="#FDBA74" transform="rotate(15 86 72)" />
      
      {/* Neck */}
      <rect x="52" y="46" width="16" height="14" rx="6" fill="#FDBA74" />
      
      {/* Head */}
      <ellipse cx="60" cy="38" rx="24" ry="22" fill="#FDBA74" />
      
      {/* Hair */}
      <ellipse cx="60" cy="26" rx="26" ry="16" fill="#1E293B" />
      <ellipse cx="40" cy="34" rx="8" ry="14" fill="#1E293B" />
      <ellipse cx="80" cy="34" rx="8" ry="14" fill="#1E293B" />
      {/* Hair bun on top */}
      <circle cx="60" cy="16" r="10" fill="#1E293B" />
      <circle cx="60" cy="16" r="6" fill="#F59E0B" />
      
      {/* Face */}
      {/* Eyes */}
      <ellipse cx="50" cy="38" rx="4" ry="4.5" fill="#1E293B" />
      <ellipse cx="70" cy="38" rx="4" ry="4.5" fill="#1E293B" />
      {/* Eye shine */}
      <circle cx="51.5" cy="36.5" r="1.5" fill="white" />
      <circle cx="71.5" cy="36.5" r="1.5" fill="white" />
      
      {/* Blush */}
      <ellipse cx="44" cy="44" rx="6" ry="4" fill="#FCA5A5" opacity="0.6" />
      <ellipse cx="76" cy="44" rx="6" ry="4" fill="#FCA5A5" opacity="0.6" />
      
      {/* Smile */}
      <path d="M50 46 Q60 56 70 46" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      
      {/* Bindi */}
      <circle cx="60" cy="32" r="2" fill="#DC2626" />
      
      {/* Nose */}
      <circle cx="60" cy="42" r="2" fill="#F59E0B" opacity="0.5" />
      
      {/* Earrings */}
      <circle cx="36" cy="42" r="3" fill="#F59E0B" />
      <circle cx="84" cy="42" r="3" fill="#F59E0B" />
      
      {/* Necklace */}
      <path d="M46 52 Q60 58 74 52" stroke="#F59E0B" strokeWidth="2" fill="none" />
      <circle cx="60" cy="56" r="3" fill="#F59E0B" />
      
      {/* Biryani pot in hand */}
      <ellipse cx="30" cy="78" rx="10" ry="8" fill="#92400E" />
      <ellipse cx="30" cy="76" rx="10" ry="3" fill="#B45309" />
      {/* Steam from pot */}
      <path d="M26 70 Q28 65 26 60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <path d="M30 68 Q32 63 30 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 70 Q36 65 34 60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      
      {/* Text "DUMMI" on dress */}
      <text x="60" y="84" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="white">
        DUMMI
      </text>

      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="120" y2="120">
          <stop stopColor="#FFF7ED" />
          <stop offset="1" stopColor="#FFEDD5" />
        </linearGradient>
        <linearGradient id="dressGrad" x1="32" y1="54" x2="88" y2="102">
          <stop stopColor="#FB923C" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
