import { motion } from "framer-motion";

export const CalculatorIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="7" y="5" width="10" height="3" rx="1" fill="currentColor"/>
    <circle cx="8" cy="11" r="1" fill="currentColor"/>
    <circle cx="12" cy="11" r="1" fill="currentColor"/>
    <circle cx="16" cy="11" r="1" fill="currentColor"/>
    <circle cx="8" cy="14" r="1" fill="currentColor"/>
    <circle cx="12" cy="14" r="1" fill="currentColor"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
    <circle cx="8" cy="17" r="1" fill="currentColor"/>
    <circle cx="12" cy="17" r="1" fill="currentColor"/>
    <circle cx="16" cy="17" r="1" fill="currentColor"/>
  </svg>
);

export const MoneyIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 6 C9 6 9 9 12 9 C15 9 15 12 12 12 C9 12 9 15 12 15 M12 5 L12 6 M12 15 L12 16" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ChartUpIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17 L7 13 L11 17 L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7 L21 7 L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GraduationCapIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3 L2 8 L12 13 L22 8 L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M6 10 L6 14 C6 16 9 17 12 17 C15 17 18 16 18 14 L18 10" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 9 L20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CoinIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="10" y="13" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">Rp</text>
  </svg>
);

// Komponen floating accounting elements
export const FloatingAccountingElements = ({ count = 20 }: { count?: number }) => {
  const icons = [CalculatorIcon, MoneyIcon, ChartUpIcon, GraduationCapIcon, CoinIcon];
  const colors = ["#f4a7c7", "#e6b3cc", "#f8c8dc", "#ffd4e5", "#d4af37"];
  
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const Icon = icons[i % icons.length];
        const color = colors[i % colors.length];
        const duration = 15 + (i % 10) * 2;
        const delay = (i % 5) * -3;
        const x = (i % 10) * 10;
        const size = 24 + (i % 3) * 8;
        
        return (
          <motion.div
            key={i}
            className="fixed pointer-events-none z-0 opacity-20"
            style={{
              left: `${x}%`,
              top: '-10%',
              color: color,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 360],
              opacity: [0, 0.3, 0.2, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon className={`w-${size / 4} h-${size / 4}`} style={{ width: size, height: size }} />
          </motion.div>
        );
      })}
    </>
  );
};
