import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const sections = [
  {
    letter: 'E',
    badge: 'Exceptional',
    subtext: 'Design & performance that exceed standards',
    bgColor: '#f58a27',
    textColor: '#000000',
    subtextColor: 'rgba(0, 0, 0, 0.8)',
  },
  {
    letter: 'R',
    badge: 'Reliable',
    subtext: 'Dependable 24/7 delivery & dedicated support',
    bgColor: '#1673ff',
    textColor: '#000000',
    subtextColor: 'rgba(255, 255, 255, 0.95)',
  },
  {
    letter: 'I',
    badge: 'Innovative',
    subtext: 'Modern interactive & future-ready tech',
    bgColor: '#c4c4c4',
    textColor: '#000000',
    subtextColor: '#111827',
  },
  {
    letter: 'P',
    badge: 'Professional',
    subtext: 'Highest standards for ambitious businesses',
    bgColor: '#f5e6d3',
    textColor: '#30220a',
    subtextColor: '#3D2800',
  },
];

export function TTTTInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile scroll-driven expansion: expands the band currently in the center of the mobile frame
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 || !containerRef.current) {
        setMobileActiveIndex(null);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      if (rect.bottom > 120 && rect.top < window.innerHeight - 120) {
        const sectionHeight = rect.height / sections.length;
        let closestIdx: number | null = null;
        let minDistance = Infinity;

        sections.forEach((_, idx) => {
          const secCenter = rect.top + sectionHeight * idx + sectionHeight / 2;
          const dist = Math.abs(secCenter - viewportCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        });

        setMobileActiveIndex(closestIdx);
      } else {
        setMobileActiveIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row w-full h-full rounded-[32px] sm:rounded-[38px] md:rounded-[48px] overflow-hidden shadow-2xl"
    >
      {sections.map((section, index) => {
        const isHovered = hoveredIndex === index;
        const isMobileActive = mobileActiveIndex === index;
        const isActive = isHovered || isMobileActive;
        const isAnyActive = hoveredIndex !== null || mobileActiveIndex !== null;

        let flexValue = 1;
        if (isAnyActive) {
          flexValue = isActive ? 2.3 : 0.65;
        }

        return (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ backgroundColor: section.bgColor }}
            animate={{ flex: flexValue }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (window.innerWidth < 1024) {
                setMobileActiveIndex(mobileActiveIndex === index ? null : index);
              }
            }}
          >
            {/* Big Letter */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                scale: isActive ? 1.12 : 1,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="tttt-letter font-black select-none"
                style={{ color: section.textColor }}
              >
                {section.letter}
              </span>
            </motion.div>

            {/* Badge & Subtext */}
            <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-10 pointer-events-none flex flex-col gap-1.5">
              <motion.div
                className="bg-white rounded-2xl px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 shadow-md md:shadow-lg flex items-center justify-center select-none w-fit"
                animate={{
                  scale: isActive ? 1.05 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-gray-950 tracking-wide whitespace-nowrap">
                  {section.badge}
                </span>
              </motion.div>

              <motion.p
                className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide max-w-[220px] leading-tight select-none"
                style={{ color: section.subtextColor }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 8,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {section.subtext}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
