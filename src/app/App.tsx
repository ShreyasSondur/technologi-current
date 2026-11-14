import { MessageCircle, Menu, X, Globe, ShoppingCart, Check, Sparkles, Film, Palette, Monitor, Search, PhoneCall } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

import { CustomCursor } from '@/app/components/CustomCursor';

import { TTTTInteractive } from '@/app/components/TTTTInteractive';
import clocktowerImage from '@/assets/clocktower.png';
import palmImage from '@/assets/palm.png';


// SVG Icons for buttons
import logoImage from '@/assets/cf2efb8d84b173b37e2e50c31e24a8466857a35d.png';

// Exact 3D and graphic icons matching user uploaded design
import globeIconImg from '@/assets/icons/user_globe.png';
import whatsappIconImg from '@/assets/icons/user_whatsapp.png';
import phoneIconImg from '@/assets/icons/user_phone.png';
import searchIconImg from '@/assets/icons/user_search.png';
import videoIconImg from '@/assets/icons/user_clapper.png';
import starsIconImg from '@/assets/icons/user_stars.png';

// Work section logos
import workTopgearImg from '@/assets/icons/work_topgear.png';
import workD24Img from '@/assets/icons/work_d24.png';
import workSrgroupImg from '@/assets/icons/work_srgroup.png';


const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const GlobeGraphic = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="appGlobeSphere" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stopColor="#bae6fd" />
        <stop offset="35%" stopColor="#38bdf8" />
        <stop offset="75%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </radialGradient>
      <radialGradient id="appGlobeGlow" cx="30%" cy="25%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
        <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="44" fill="url(#appGlobeSphere)" />
    <circle cx="50" cy="50" r="44" stroke="#e0f2fe" strokeWidth="2.2" strokeOpacity="0.8" />
    <ellipse cx="50" cy="50" rx="44" ry="14" stroke="#e0f2fe" strokeWidth="2" strokeOpacity="0.75" />
    <ellipse cx="50" cy="30" rx="38" ry="10" stroke="#e0f2fe" strokeWidth="1.8" strokeOpacity="0.6" />
    <ellipse cx="50" cy="70" rx="38" ry="10" stroke="#e0f2fe" strokeWidth="1.8" strokeOpacity="0.6" />
    <ellipse cx="50" cy="50" rx="20" ry="44" stroke="#e0f2fe" strokeWidth="2" strokeOpacity="0.75" />
    <line x1="50" y1="6" x2="50" y2="94" stroke="#e0f2fe" strokeWidth="2" strokeOpacity="0.75" />
    <ellipse cx="38" cy="28" rx="22" ry="14" fill="url(#appGlobeGlow)" transform="rotate(-20 38 28)" />
    <g transform="translate(50, 68)">
      <circle cx="0" cy="0" r="13" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="0" cy="0" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="1.2" />
      <circle cx="0" cy="0" r="3.5" fill="#38bdf8" />
      <circle cx="-1.2" cy="-1.2" r="1.2" fill="#ffffff" />
    </g>
  </svg>
);

const SpeechBubbleGraphic = () => (
  <svg width="84" height="84" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 16C30.5 16 15 31.2 15 50C15 57.2 17.3 64 21.2 69.5L17 84L32.2 79.8C37.5 82.5 43.5 84 50 84C69.5 84 85 68.8 85 50C85 31.2 69.5 16 50 16Z"
      stroke="#bbf7d0"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneHandsetGraphic = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="appPhoneGradient" x1="80%" y1="10%" x2="20%" y2="90%">
        <stop offset="0%" stopColor="#ff7597" />
        <stop offset="45%" stopColor="#e11d48" />
        <stop offset="85%" stopColor="#9f1239" />
        <stop offset="100%" stopColor="#700926" />
      </linearGradient>
      <linearGradient id="appPhoneGloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M72.5 24.2C70.1 21.8 66.2 21.8 63.7 24.3L56.5 31.5C54.1 33.9 54.1 37.8 56.6 40.2L60.8 44.4C58.2 49.3 53.8 54.1 48.6 57.1L44.2 52.7C41.8 50.3 37.9 50.3 35.5 52.7L28.3 59.9C25.8 62.4 25.8 66.3 28.3 68.7L32.2 72.6C36.8 77.2 44.2 78.4 51.5 74.9C60.8 70.5 73.5 58.2 77.5 48.5C80.8 40.8 79.1 33.2 74.3 28.4L72.5 24.2Z"
      fill="url(#appPhoneGradient)"
    />
    <path
      d="M70 27L64 33C62.5 34.5 62.5 36.5 64 38L66.5 40.5C64 45.5 59.5 50.5 54 53.5L51.5 51C50 49.5 48 49.5 46.5 51L40.5 57"
      stroke="url(#appPhoneGloss)"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const MagnifyingGlassGraphic = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="appGlassLens" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#bae6fd" />
        <stop offset="45%" stopColor="#38bdf8" />
        <stop offset="90%" stopColor="#0284c7" />
      </radialGradient>
      <linearGradient id="appMetalRim" x1="20%" y1="20%" x2="80%" y2="80%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="50%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="appHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="40%" stopColor="#6b21a8" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
      <linearGradient id="appRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>
    <rect x="58" y="58" width="14" height="34" rx="7" transform="rotate(-45 58 58)" fill="url(#appHandleGrad)" />
    <rect x="59.5" y="59.5" width="4" height="30" rx="2" transform="rotate(-45 58 58)" fill="#d8b4fe" opacity="0.6" />
    <rect x="53" y="53" width="14" height="6" rx="3" transform="rotate(-45 53 53)" fill="url(#appRingGrad)" />
    <circle cx="42" cy="42" r="28" stroke="url(#appMetalRim)" strokeWidth="5" />
    <circle cx="42" cy="42" r="25.5" fill="url(#appGlassLens)" fillOpacity="0.9" />
    <path
      d="M23 40C23 29.5066 31.5066 21 42 21C44.5 21 46.8 21.5 49 22.4C44 23 35 27 30 33C25.5 38.5 24 45 24 48C23.3 45.5 23 42.8 23 40Z"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <circle cx="28" cy="28" r="2.5" fill="#ffffff" fillOpacity="0.9" />
  </svg>
);

const VideoClapperGraphic = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="38" width="64" height="46" rx="10" fill="#1e293b" />
    <polygon points="45,50 45,72 63,61" fill="#ea580c" />
    <path d="M18 48C18 42.4772 22.4772 38 28 38H72C77.5228 38 82 42.4772 82 48V56L18 64V48Z" fill="#ffffff" fillOpacity="0.15" />
    <g transform="translate(18, 36) rotate(-14) translate(-18, -36)">
      <rect x="18" y="24" width="64" height="13" rx="4" fill="#0f172a" />
      <polygon points="26,24 33,24 28,37 21,37" fill="#ffffff" />
      <polygon points="42,24 49,24 44,37 37,37" fill="#ffffff" />
      <polygon points="58,24 65,24 60,37 53,37" fill="#ffffff" />
      <polygon points="74,24 81,24 76,37 69,37" fill="#ffffff" />
    </g>
  </svg>
);

const SparklesGraphic = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="appStarGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="35%" stopColor="#fef08a" />
        <stop offset="70%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <radialGradient id="appStarGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#fde047" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="30" fill="url(#appStarGlow)" />
    <path
      d="M50 15C50 34.33 34.33 50 15 50C34.33 50 50 65.67 50 85C50 65.67 65.67 50 85 50C65.67 50 50 34.33 50 15Z"
      fill="url(#appStarGold)"
    />
    <path
      d="M50 15C50 34.33 34.33 50 15 50C25 50 40 45 45 35C48 28 50 20 50 15Z"
      fill="#ffffff"
      fillOpacity="0.45"
    />
    <path
      d="M26 18C26 23.5 20.5 28 15 28C20.5 28 26 32.5 26 38C26 32.5 31.5 28 37 28C31.5 28 26 23.5 26 18Z"
      fill="url(#appStarGold)"
    />
    <path
      d="M24 66C24 71 19 75 14 75C19 75 24 79 24 84C24 79 29 75 34 75C29 75 24 71 24 66Z"
      fill="url(#appStarGold)"
    />
  </svg>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWorkCard, setActiveWorkCard] = useState<number | null>(null);

  // Mobile Viewport Scroll Trigger for Work Cards
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setActiveWorkCard(null);
        return;
      }
      const cards = document.querySelectorAll('.work-card');
      const viewportCenter = window.innerHeight / 2;
      let closestIndex: number | null = null;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIndex = idx;
          }
        }
      });

      const threshold = window.innerHeight * 0.42;
      if (closestIndex !== null && minDistance < threshold) {
        setActiveWorkCard(closestIndex);
      } else {
        setActiveWorkCard(null);
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

  const workCardsData = [
    {
      id: "topgear",
      name: "TOPGEAR HQ",
      tag: "AUTOMOTIVE & E-COMMERCE",
      siteUrl: "https://www.topgearhq.in/",
      cardClass: "work-card-topgear border-purple-500/30",
      logo: workTopgearImg,
      logoClass: "max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-xl select-none",
      bgDefault: "bg-gradient-to-b from-[#180b2a] via-[#3d1462] to-[#6a1a9f]",
      sparkleColor: "text-purple-200",
      tagColor: "text-purple-200",
      subtextColor: "text-purple-200/80",
      iconBoxClass: "bg-purple-600/35 border-purple-400/30 text-white",
      buttonClass: "bg-gradient-to-r from-[#9810FA] to-[#E60076] hover:brightness-110 shadow-purple-900/50",
      inquireLink: "https://www.topgearhq.in/",
      solutions: [
        { icon: Globe, text: "Website design and development" },
        { icon: ShoppingCart, text: "Cart management" },
        { icon: MessageCircle, text: "WhatsApp inquiry" },
      ],
    },
    {
      id: "d24",
      name: "D24 STUDIO",
      tag: "CREATIVE & 3D MEDIA",
      siteUrl: "https://www.d24.studio/",
      cardClass: "work-card-d24 border-orange-500/30",
      logo: workD24Img,
      logoClass: "max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,100,50,0.5)] select-none",
      bgDefault: "bg-gradient-to-b from-[#24130d] via-[#522313] to-[#9b3d17]",
      sparkleColor: "text-orange-300",
      tagColor: "text-orange-200",
      subtextColor: "text-orange-200/80",
      iconBoxClass: "bg-orange-600/35 border-orange-400/30 text-orange-200",
      buttonClass: "bg-gradient-to-r from-[#EA580C] to-[#E60076] hover:brightness-110 shadow-orange-950/50",
      inquireLink: "https://www.d24.studio/",
      solutions: [
        { icon: Film, text: "3D Anamorphic videos" },
        { icon: Palette, text: "Brand identity & visual motion" },
        { icon: Sparkles, text: "Marketing video production" },
      ],
    },
    {
      id: "srgroup",
      name: "SR GROUP",
      tag: "CORPORATE & ENTERPRISE",
      siteUrl: "https://srgroupind.com/",
      cardClass: "work-card-srgroup border-blue-500/30",
      logo: workSrgroupImg,
      logoClass: "max-h-20 sm:max-h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] select-none",
      bgDefault: "bg-gradient-to-b from-[#07172c] via-[#0b2d5d] to-[#0d489b]",
      sparkleColor: "text-blue-300",
      tagColor: "text-blue-200",
      subtextColor: "text-blue-200/80",
      iconBoxClass: "bg-blue-600/35 border-blue-400/30 text-blue-200",
      buttonClass: "bg-gradient-to-r from-[#1673ff] to-[#06B6D4] hover:brightness-110 shadow-blue-950/50",
      inquireLink: "https://srgroupind.com/",
      solutions: [
        { icon: Monitor, text: "High-converting corporate website" },
        { icon: Search, text: "Google Business optimization" },
        { icon: PhoneCall, text: "Direct WhatsApp & call routing" },
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="relative w-full min-h-screen bg-white custom-cursor-page">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar - Slush Style */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center cursor-pointer flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] aspect-[7.5/1]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logoImage} alt="TechnoLOGI Logo" className="w-full h-full object-contain" />
            </motion.button>

            {/* Center Navigation Links */}
            <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Solution', id: 'solution' },
                { label: 'Services', id: 'services' },
                { label: 'Work', id: 'work' }
              ].map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Now Button */}
              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon />
                Call Now
              </motion.a>

              {/* WhatsApp Us Button */}
              <motion.a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold rounded-full transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-gray-50"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Solution', id: 'solution' },
              { label: 'Services', id: 'services' },
              { label: 'Work', id: 'work' }
            ].map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all duration-300 text-center"
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918792359555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us on WhatsApp!
        </span>
      </a>

      {/* Hero Section with Updated Content */}
      <section
        id="home"
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden min-h-screen flex items-center"
      >
        {/* Hero Section Images and Content */}
        <div className="max-w-7xl mx-auto relative z-20 w-full flex items-center justify-between">
          {/* Left Image: Clocktower */}
          <div className="hidden md:block absolute left-0 bottom-0 z-10 h-full flex items-end">
            <img src={clocktowerImage} alt="Clocktower" className="h-[420px] md:h-[520px] lg:h-[600px] xl:h-[700px] object-contain select-none pointer-events-none" draggable="false" />
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center mb-8 sm:mb-12 md:mb-16 relative z-20">
            {/* Main Headline - Split into two parts */}
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black mb-4 sm:mb-6 md:mb-8 leading-[1.1] px-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-[#D7001F] drop-shadow-lg">
                Turning Business
              </span>
              <span className="block text-[#D7001F] drop-shadow-lg">
                Websites
              </span>
            </motion.h1>

            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black mb-6 sm:mb-8 md:mb-12 leading-[1.1] px-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-[#009343] drop-shadow-lg">
                Into Customer
              </span>
              <span className="block text-[#009343] drop-shadow-lg">
                Enquiries
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Through high-converting websites with WhatsApp and call integration, plus marketing and eye-catching 3D videos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/918792359555"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black flex items-center justify-center gap-4 sm:gap-5 transform hover:scale-110 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                WHATSAPP US NOW
              </motion.a>
              <motion.a
                href="tel:+918792359555"
                className="bg-gradient-to-r from-[#D7001F] to-[#E60076] hover:from-[#B8001A] hover:to-[#C6005C] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black flex items-center justify-center gap-4 sm:gap-5 transform hover:scale-110 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 CALL US
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image: Palm Trees */}
          <div className="hidden md:block absolute right-0 bottom-0 z-10 h-full flex items-end">
            <img src={palmImage} alt="Palm Trees" className="h-[320px] md:h-[420px] lg:h-[500px] xl:h-[600px] object-contain select-none pointer-events-none" draggable="false" />
          </div>
        </div>
      </section>

      {/* Our Simple Solution Section */}
      <section id="solution" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#E60076]">
                OUR SIMPLE SOLUTION
              </span>
            </h2>
          </motion.div>

          {/* Solution Description */}
          <motion.div
            className="bg-gradient-to-br from-[#FFE89A] via-[#FFD4A3] to-[#FFC1A8] rounded-3xl sm:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-2xl mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-6 sm:mb-8">
              We set up a complete <span className="text-[#E60076] font-black">Business Enquiry System</span> that helps customers notice you and contact you easily:
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { emoji: "🌐", text: "Fast, professional website with WhatsApp and call enquiry buttons" },
                { emoji: "🔍", text: "Google Business optimization so customers can find you easily" },
                { emoji: "🎬", text: "Marketing videos to explain your business and attract attention" },
                { emoji: "✨", text: "Eye-catching 3D anamorphic videos that make people stop, watch, and remember your brand" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section - Slush Style */}
      <section id="services" className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5BA3FF] to-[#9810FA]">
                WHAT WE DO
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 px-4">
              Everything you need to grow your business online
            </p>
          </motion.div>

          {/* Services Grid - Bento Style Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Card 1: Fast Websites (Blue) */}
            <motion.div
              className="service-card bg-[#5BA3FF] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-white tracking-tight leading-tight">
                  FAST<br />WEBSITES
                </h3>
              </div>
              <div className="flex justify-center pb-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={globeIconImg}
                    alt="Fast Websites"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-md select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: WhatsApp Integration (Green) */}
            <motion.div
              className="service-card bg-[#25D366] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center pt-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={whatsappIconImg}
                    alt="WhatsApp Integration"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-gray-950 tracking-tight leading-tight">
                  WHATSAPP<br />INTEGRATION
                </h3>
              </div>
            </motion.div>

            {/* Card 3: Call Buttons (Hot Magenta/Pink) */}
            <motion.div
              className="service-card bg-[#E60076] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-white tracking-tight leading-tight">
                  CALL<br />BUTTONS
                </h3>
              </div>
              <div className="flex justify-center pb-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={phoneIconImg}
                    alt="Call Buttons"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 4: Google Business (Yellow) */}
            <motion.div
              className="service-card bg-[#FFD520] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center pt-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={searchIconImg}
                    alt="Google Business"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-gray-950 tracking-tight leading-tight">
                  GOOGLE<br />BUSINESS
                </h3>
              </div>
            </motion.div>

            {/* Card 5: Marketing Videos (Orange) */}
            <motion.div
              className="service-card bg-[#FF6B35] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-white tracking-tight leading-tight">
                  MARKETING<br />VIDEOS
                </h3>
              </div>
              <div className="flex justify-center pb-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={videoIconImg}
                    alt="Marketing Videos"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 6: 3D Videos (Lavender) */}
            <motion.div
              className="service-card bg-[#E4B3FF] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 min-h-[320px] sm:min-h-[350px] md:min-h-[370px] flex flex-col justify-between shadow-xl cursor-pointer"
              initial="initial"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center pt-2">
                <motion.div
                  className="service-icon-wrapper"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.12 }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  <img
                    src={starsIconImg}
                    alt="3D Videos"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md select-none pointer-events-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black italic text-gray-950 tracking-tight leading-tight">
                  3D<br />VIDEOS
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Images & Video Gallery Section */}
      <section id="work" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#F5F3FF] via-white to-[#FFDFE0] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] via-[#E60076] to-[#9810FA]">
                OUR WORK
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 px-4">
              See what we create for businesses like yours
            </p>
          </motion.div>

          {/* Work Cards Grid with Interactive Solutions on Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-6xl mx-auto">
            {workCardsData.map((card, index) => {
              const isActive = activeWorkCard === index;
              return (
                <motion.div
                  key={card.id}
                  className={`work-card ${card.cardClass} ${isActive ? 'is-active' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => window.open(card.siteUrl, '_blank', 'noopener,noreferrer')}
                >
                  {/* Default State */}
                  <div className={`work-card-default ${card.bgDefault}`}>
                    <div />
                    <div className="flex items-center justify-center py-12 px-6">
                      <img
                        src={card.logo}
                        alt={card.name}
                        className={card.logoClass}
                        draggable="false"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                          {card.name}
                        </h3>
                        <p className={`text-[11px] font-semibold ${card.subtextColor} tracking-widest uppercase mt-0.5`}>
                          HOVER TO VIEW SOLUTIONS
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center ${card.sparkleColor} shadow-inner`}>
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Hover State (Delivered Solutions) */}
                  <div className="work-card-hover">
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between gap-2 pb-2">
                      <div className="work-badge">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="text-[11px] font-black tracking-wider text-white uppercase">
                          DELIVERED SOLUTIONS
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider ${card.tagColor} uppercase truncate`}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Solutions Capsules Stack */}
                    <div className="space-y-3 my-auto py-2">
                      {card.solutions.map((sol, sIdx) => {
                        const SolIcon = sol.icon;
                        return (
                          <div key={sIdx} className="work-capsule">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-10 h-10 rounded-xl ${card.iconBoxClass} flex items-center justify-center flex-shrink-0 shadow-inner`}>
                                <SolIcon className="w-5 h-5" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                                {sol.text}
                              </span>
                            </div>
                            <div className="w-5 h-5 rounded-full border border-teal-400/90 bg-teal-400/10 flex items-center justify-center text-teal-300 flex-shrink-0 ml-2">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {card.name}
                      </h3>
                      <a
                        href={card.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${card.buttonClass} text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-all`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Website <span className="text-sm font-bold">↗</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative S Container / TTTT Interactive */}
          <motion.div
            className="relative h-[520px] sm:h-[580px] md:h-[520px] lg:h-[620px] mb-12 sm:mb-16 md:mb-20 overflow-hidden rounded-[32px] sm:rounded-[38px] md:rounded-[48px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <TTTTInteractive />
          </motion.div>

          {/* Video Showcase Section */}
          <motion.div
            className="bg-gradient-to-br from-[#FFD520] via-[#FF6B35] to-[#E60076] rounded-3xl sm:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-6 sm:mb-8 leading-tight">
                  STUNNING 3D ANAMORPHIC VIDEOS
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  Eye-catching videos that make people stop scrolling and start engaging with your brand.
                </p>
                <motion.a
                  href="https://wa.me/918792359555"
                  className="inline-flex items-center gap-3 sm:gap-4 bg-white text-[#E60076] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-black shadow-xl"
                  whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  GET YOUR VIDEO
                </motion.a>
              </div>

              {/* Right: Video Placeholder */}
              <motion.div
                className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/95 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-0 h-0 border-t-[16px] sm:border-t-[20px] border-t-transparent border-l-[28px] sm:border-l-[32px] border-l-[#E60076] border-b-[16px] sm:border-b-[20px] border-b-transparent ml-2"></div>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg md:text-xl font-black">WATCH SAMPLE VIDEO</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-[200px] sm:w-[240px] md:w-[260px] aspect-[7.5/1]">
              <img src={logoImage} alt="TechnoLOGI Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <p className="text-gray-400 text-lg">© {new Date().getFullYear()} TechnoLOGI. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Contact@technologi.in</p>
        </div>
      </motion.footer>
    </div>
  );
}