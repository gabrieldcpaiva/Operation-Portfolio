import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Mail,
  ChevronDown,
  Linkedin,
  Twitter,
  ExternalLink,
  Sparkles,
  Loader2,
  Camera,
  Layers,
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// MASTER_BACKGROUND_URL: The Nano Banana Masterpiece
const MASTER_BACKGROUND_URL = "/portfolio_images/Background%20-%20NON-NEGOTIABLE.jpeg";
const apiKey = "";

// Internal Component: Horizontal Carousel
const CategoryCarousel = ({ category, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const currentItem = items[currentIndex];

  return (
    <div className="w-full mb-24 md:mb-48">
      {/* Header */}
      <div className="px-8 md:px-16 mb-12 md:mb-16 relative">
        <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-[#050505] to-transparent -z-10 opacity-60"></div>
        <h2 className="text-4xl md:text-7xl font-light italic tracking-tighter text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-none break-words">{category}</h2>
        <div className="w-16 md:w-24 h-[1px] bg-[#c4a67a] mt-6 md:mt-8 opacity-40"></div>
      </div>

      {/* --- DESKTOP CAROUSEL (HIDDEN ON MOBILE) --- */}
      <div className="hidden md:flex relative w-full h-[80vh] group items-center justify-center">

        {/* Navigation Arrows (Split & Floating) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full text-white/30 hover:text-[#c4a67a] transition-all hover:scale-125 active:scale-90"
        >
          <ChevronLeft size={64} className="thick-arrow" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full text-white/30 hover:text-[#c4a67a] transition-all hover:scale-125 active:scale-90"
        >
          <ChevronRight size={64} className="thick-arrow" />
        </button>

        {/* Main Image (Floating in Space with Lift & Shadow) */}
        <div
          className="relative z-10 max-h-full max-w-[80%] group/image"
        >
          <div className="artifact-lift animate-fade-in">
            <img
              key={currentItem.id}
              src={currentItem.url}
              alt={currentItem.title}
              className={`w-auto h-auto object-contain transition-all duration-700 ease-out opacity-0 ${currentItem.orientation === 'portrait' ? 'max-h-[70vh]' : 'max-h-[80vh]'}`}
              onLoad={(e) => e.target.classList.remove('opacity-0')}
            />
          </div>

          {/* Floating Info (Bottom Left of Image) */}
          <div className={`absolute ${currentItem.orientation === 'portrait' ? '-bottom-12 ml-4' : '-bottom-24'} left-0 text-left pointer-events-none transition-all duration-700 opacity-80 group-hover/image:opacity-100 group-hover/image:-translate-y-4`}>
            <div className="bg-black/20 backdrop-blur-sm p-4 inline-block">
              <span className="text-[10px] text-[#c4a67a] uppercase tracking-[0.4em] font-bold mb-1 block drop-shadow-md">
                {items.length > 1 ? `${currentIndex + 1} / ${items.length}` : 'Singleton'}
              </span>
              <h3 className="text-5xl font-light italic text-[#f2f2f2] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] leading-tight">{currentItem.title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VERTICAL COLUMN (HIDDEN ON DESKTOP) --- */}
      <div className="md:hidden flex flex-col w-full space-y-24 px-8 pb-16">
        {items.map((item, index) => (
          <div key={item.id} className="relative w-full flex flex-col items-center">
            <div className="w-full flex justify-center artifact-lift pointer-events-none">
              <img
                src={item.url}
                alt={item.title}
                className="w-full max-w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                loading="lazy"
              />
            </div>

            {/* Tag / Title Below Image */}
            <div className="w-full text-left mt-8">
              <span className="text-[10px] text-[#c4a67a] uppercase tracking-[0.4em] font-bold mb-2 block drop-shadow-md">
                {items.length > 1 ? `${index + 1} / ${items.length}` : 'Singleton'}
              </span>
              <h3 className="text-3xl font-light italic text-[#f2f2f2] leading-tight drop-shadow-md">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ title, subtitle, imageUrl, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block bg-[#0a0a0a]/40 border border-white/5 p-8 transition-all hover:border-[#c4a67a]/40 hover:-translate-y-2">
    <div className="aspect-[4/5] mb-8 overflow-hidden bg-zinc-900 flex items-center justify-center">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
      ) : (
        <ShoppingBag size={48} strokeWidth={1} className="text-zinc-800" />
      )}
    </div>
    <span className="text-[9px] uppercase tracking-[0.4em] text-[#c4a67a] font-bold block mb-2">{subtitle}</span>
    <h4 className="text-2xl font-light italic text-white/90">{title}</h4>
    <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-black text-zinc-500 group-hover:text-white transition-colors">
      <span>View Artifact</span>
      <ExternalLink size={10} />
    </div>
  </a>
);



const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [sceneInput, setSceneInput] = useState("");
  const [sceneOutput, setSceneOutput] = useState("");
  const [isArchitecting, setIsArchitecting] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    setIsLoaded(true);

    const handleScroll = () => setScrolled(window.scrollY > 100);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const callGemini = async (prompt, systemInstruction) => {
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
          })
        });
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
      } catch (error) {
        if (i === 4) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  const handleSceneArchitecture = async () => {
    if (!sceneInput.trim()) return;
    setIsArchitecting(true);
    try {
      const instruction = "Act as a world-class Cinematographer. Output precise technical camera/lighting specs based on the vibe. Keep it under 40 words. Voice: Dry humor, high authority.";
      const result = await callGemini(`Vibe: ${sceneInput}`, instruction);
      setSceneOutput(result);
    } catch (e) {
      setSceneOutput("Signal lost in the haze.");
    } finally {
      setIsArchitecting(false);
    }
  };

  // --- DYNAMIC ARTIFACTS: Mapping the reorganized folder structure ---
  const [artifacts, setArtifacts] = useState([
    // 01 Just Another Diamond Day
    { id: "jadd_01", title: "Diamond Day 01", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_001.png", orientation: "portrait" },
    { id: "jadd_02", title: "Diamond Day 02", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_002.jpg", orientation: "landscape" },
    { id: "jadd_03", title: "Diamond Day 03", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_003.png", orientation: "landscape" },
    { id: "jadd_04", title: "Diamond Day 04", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_004.png", orientation: "landscape" },
    { id: "jadd_05", title: "Diamond Day 05", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_005.png", orientation: "landscape" },
    { id: "jadd_06", title: "Diamond Day 06", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_006.png", orientation: "landscape" },
    { id: "jadd_07", title: "Diamond Day 07", category: "Just Another Diamond Day", url: "/portfolio_images/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_007.png", orientation: "landscape" },

    // 02 After Salgado: Born of Sand and Code
    { id: "as_01", title: "Salgado Vision 01", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_01.png", orientation: "portrait" },
    { id: "as_02", title: "Salgado Vision 02", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_02.png", orientation: "portrait" },
    { id: "as_03", title: "Salgado Vision 03", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_03.png", orientation: "portrait" },
    { id: "as_04", title: "Salgado Vision 04", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_04.png", orientation: "portrait" },
    { id: "as_05", title: "Salgado Vision 05", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_05.png", orientation: "portrait" },
    { id: "as_06", title: "Salgado Vision 06", category: "After Salgado: Born of Sand and Code", url: "/portfolio_images/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_06.png", orientation: "portrait" },

    // 03 Landscapes That Outlast Us
    { id: "land_01", title: "Primal Horizon 01", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_001.png", orientation: "landscape" },
    { id: "land_02", title: "Primal Horizon 02", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_002.png", orientation: "landscape" },
    { id: "land_03", title: "Primal Horizon 03", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_003.png", orientation: "landscape" },
    { id: "land_04", title: "Primal Horizon 04", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_004.png", orientation: "landscape" },
    { id: "land_05", title: "Primal Horizon 05", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_005.png", orientation: "landscape" },
    { id: "land_06", title: "Primal Horizon 06", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_006.png", orientation: "landscape" },
    { id: "land_07", title: "Primal Horizon 07", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_007.png", orientation: "landscape" },
    { id: "land_08", title: "Primal Horizon 08", category: "Landscapes That Outlast Us", url: "/portfolio_images/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_008.png", orientation: "landscape" },

    // 04 Cyberpunk Nights
    { id: "cn_01", title: "Neon Haze 01", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_01.png", orientation: "landscape" },
    { id: "cn_02", title: "Neon Haze 02", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_02.png", orientation: "landscape" },
    { id: "cn_03", title: "Neon Haze 03", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_03.png", orientation: "landscape" },
    { id: "cn_04", title: "Neon Haze 04", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_004.png", orientation: "portrait" },
    { id: "cn_05", title: "Neon Haze 05", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_05.jpeg", orientation: "landscape" },
    { id: "cn_06", title: "Neon Haze 06", category: "Cyberpunk Nights", url: "/portfolio_images/04_Cyberpunk_Nights/Cyberpunk_Nights_006.png", orientation: "landscape" },

    // 05 Haute Couture
    { id: "hc_01", title: "Atelier 01", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_001.png", orientation: "portrait" },
    { id: "hc_02", title: "Atelier 02", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_002.png", orientation: "landscape" },
    { id: "hc_03", title: "Atelier 03", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_003.png", orientation: "landscape" },
    { id: "hc_04", title: "Atelier 04", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_004.png", orientation: "landscape" },
    { id: "hc_05", title: "Atelier 05", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_005.png", orientation: "landscape" },
    { id: "hc_06", title: "Atelier 06", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_007.png", orientation: "landscape" },
    { id: "hc_07", title: "Atelier 07", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_008.png", orientation: "portrait" },
    { id: "hc_08", title: "Atelier 08", category: "Haute Couture", url: "/portfolio_images/05_Haute_Couture/Haute_Couture_009.png", orientation: "portrait" },

    // 06 Hyper Chic Editorial
    { id: "hyp_01", title: "Editorial 01", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_01.png", orientation: "landscape" },
    { id: "hyp_02", title: "Editorial 02", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_02.png", orientation: "landscape" },
    { id: "hyp_03", title: "Editorial 03", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_03.png", orientation: "landscape" },
    { id: "hyp_04", title: "Editorial 04", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_04.png", orientation: "portrait" },
    { id: "hyp_05", title: "Editorial 05", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_05.png", orientation: "portrait" },
    { id: "hyp_06", title: "Editorial 06", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_06.png", orientation: "portrait" },
    { id: "hyp_07", title: "Editorial 07", category: "Hyper Chic Editorial", url: "/portfolio_images/06_Hyper_Chic_Editorial/Hyper_Chic_07.png", orientation: "portrait" },

    // 07 Etheralphabet Visions
    { id: "ev_01", title: "Etheralphabet 01", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_001.png", orientation: "landscape" },
    { id: "ev_02", title: "Etheralphabet 02", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_002.png", orientation: "landscape" },
    { id: "ev_03", title: "Etheralphabet 03", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_003.jpeg", orientation: "landscape" },
    { id: "ev_04", title: "Etheralphabet 04", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_006.png", orientation: "landscape" },
    { id: "ev_05", title: "Etheralphabet 05", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_007.png", orientation: "landscape" },
    { id: "ev_06", title: "Etheralphabet 06", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_008.png", orientation: "landscape" },
    { id: "ev_07", title: "Etheralphabet 07", category: "Etheralphabet Visions", url: "/portfolio_images/07_Etheralphabet_Visions/Etheralphabet_Visions_009.png", orientation: "landscape" },

    // 08 Charity Campaign: Tender Whimsy
    { id: "cc_01", title: "Tender Whimsy: Campaign 01", category: "Tender Whimsy: Charity Campaign", url: "/coloring-pages/01_logo_inspired.png", orientation: "landscape" },
    { id: "cc_02", title: "Tender Whimsy: Campaign 02", category: "Tender Whimsy: Charity Campaign", url: "/coloring-pages/02_shapes_pattern.png", orientation: "portrait" },
    { id: "cc_03", title: "Tender Whimsy: Campaign 03", category: "Tender Whimsy: Charity Campaign", url: "/coloring-pages/03_train.png", orientation: "landscape" },
    { id: "cc_04", title: "Tender Whimsy: Campaign 04", category: "Tender Whimsy: Charity Campaign", url: "/coloring-pages/04_christmas_scene.png", orientation: "landscape" },
    { id: "cc_05", title: "Tender Whimsy: Campaign 05", category: "Tender Whimsy: Charity Campaign", url: "/coloring-pages/05_mixed_icons.png", orientation: "landscape" }
  ]);

  const groupedArtifacts = artifacts.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#050505] text-[#f2f2f2] antialiased overflow-x-hidden selection:bg-[#c4a67a] selection:text-black" style={{ fontFamily: '"Cormorant Garamond", serif' }}>

      {/* --- MASTER BACKDROP --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={MASTER_BACKGROUND_URL} alt="The Lens" className="w-full h-full object-cover grayscale-[0.05] contrast-[1.1] brightness-[0.8]" />
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
        <div
          className="cursor-backlight"
          style={{ transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)` }}
        ></div>
      </div>

      {/* --- GHOST NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] px-8 md:px-16 py-10 flex justify-between items-center transition-all duration-1000 ${scrolled ? 'opacity-80 bg-black/40 backdrop-blur-xl' : 'opacity-100'}`}>
        <div className={`transition-all duration-1000 flex flex-col items-center ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl font-bold tracking-[0.4em] uppercase text-[#c4a67a]">G.P.</h1>
        </div>
        <div className="flex gap-24 items-center">
          <a href="#work" className="ghost-nav-link">Works</a>
          <a href="#crate" className="ghost-nav-link crate-cta">Unlock the Black Box</a>
          <a href="#inquiries" className="ghost-nav-link">Inquiries</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-8 md:px-6 -translate-y-12">
        <div className="z-10 space-y-8 md:space-y-12 w-full">
          <div className={`transition-all duration-[3s] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-light italic leading-none tracking-tighter text-white/80 select-none mix-blend-overlay drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">Gabriel Paiva</h1>
          </div>
          <div className={`mt-2 transition-all duration-[3s] delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              <p className="text-[11px] md:text-sm tracking-[0.8em] uppercase text-[#c4a67a] font-black opacity-90" style={{ fontFamily: '"Playfair Display", serif' }}>
                Archetype AI // Myths Cannot Be Framed, Only Created
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 opacity-20 cursor-pointer group" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[8px] uppercase tracking-[1.5em] text-[#c4a67a]">Explore</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#c4a67a] via-[#c4a67a]/40 to-transparent"></div>
        </div>
      </header>

      {/* --- GALLERY SECTIONS --- */}
      <main id="work" className="relative z-10 space-y-24 md:space-y-96">
        {Object.entries(groupedArtifacts).map(([category, items]) => (
          <section key={category} className="fade-in-section w-full">
            <div className="px-8 md:px-16 mb-8 md:mb-32 hidden md:block">
              <h2 className="text-4xl md:text-6xl font-light italic text-white/40 tracking-tighter" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                {category}
              </h2>
              <div className="w-12 h-[1px] bg-[#c4a67a]/40 mt-6"></div>
            </div>
            {category === "Tender Whimsy: Charity Campaign" && (
              <div className="px-8 md:px-16 mb-16 md:mb-32">
                <div className="p-8 md:p-16 border border-[#c4a67a]/20 bg-[#0a0a0a]/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4a67a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <h3 className="text-[#c4a67a] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 md:mb-8">Case Study: Grassroots Christmas</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                    <div>
                      <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">The Project</span>
                      <p className="text-white/80 font-light italic text-xl md:text-2xl leading-relaxed">
                        A purposeful grassroots Christmas charity campaign centered around compassion.
                      </p>
                    </div>
                    <div>
                      <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">The Impact</span>
                      <p className="text-white/80 font-light italic text-xl md:text-2xl leading-relaxed">
                        Mobilized over R$18,000 in funded resources in just 10 days to directly feed families in need.
                      </p>
                    </div>
                    <div>
                      <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">The Deliverables</span>
                      <p className="text-white/80 font-light italic text-xl md:text-2xl leading-relaxed">
                        Built a 75+ asset design system. Featured custom iconography and accessible coloration tailored for an autistic child.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 md:mt-16 pt-8 border-t border-[#c4a67a]/20">
                    <p className="text-[#c4a67a]/60 text-xs italic tracking-widest uppercase">
                      * Created with absolute love and respect for a brave mother and her son.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <CategoryCarousel category={category} items={items} />
          </section>
        ))}
      </main>

      {/* --- INQUIRIES --- */}
      <section id="inquiries" className="relative z-10 py-32 md:py-64 px-8 md:px-12 flex flex-col items-center">
        <div className="max-w-2xl w-full relative">
          <div className={`absolute inset-[-100px] bg-[#c4a67a]/30 blur-[120px] rounded-full transition-all duration-[2s] pointer-events-none ${formActive ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}></div>
          <div className="relative z-10 space-y-16 md:space-y-24">
            <div className="space-y-6 text-center">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-light italic tracking-tighter text-[#c4a67a] leading-none text-white/90 drop-shadow-2xl">Inquiries</h2>
              <div className="w-24 md:w-32 h-[1px] bg-[#c4a67a]/40 mx-auto"></div>
              <p className="text-[10px] md:text-[11px] text-white uppercase tracking-[0.5em] md:tracking-[0.7em] font-black mt-8 italic bg-black/40 inline-block px-6 md:px-8 py-2 border border-white/5">Handcrafted aesthetics. Zero fluff.</p>
            </div>

            <form action="mailto:gabrieldcpaiva@gmail.com" method="post" encType="text/plain" className="space-y-8 md:space-y-12 bg-transparent p-10 md:p-24 text-left relative"
              onFocus={() => setFormActive(true)}
              onBlur={() => setFormActive(false)}>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl rounded-[3rem] -z-10"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c4a67a]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c4a67a]/20 to-transparent"></div>

              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">Name</label>
                <input type="text" name="name" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 p-4 focus:border-[#c4a67a] outline-none transition-all text-2xl font-light italic text-[#f2f2f2] placeholder:text-white/10" />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">Email</label>
                <input type="email" name="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/10 p-4 focus:border-[#c4a67a] outline-none transition-all text-2xl font-light italic text-[#f2f2f2] placeholder:text-white/10" />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">What is your wildest idea?</label>
                <textarea name="message" placeholder="Tell me everything..." rows="5" className="w-full bg-transparent border-b border-white/10 p-4 focus:border-[#c4a67a] outline-none transition-all text-2xl font-light italic text-[#f2f2f2] resize-none placeholder:text-white/10"></textarea>
              </div>
              <button type="submit" className="w-full py-6 mt-12 border border-[#c4a67a]/30 text-[#c4a67a] font-bold uppercase text-xs tracking-[0.6em] hover:bg-white hover:text-black hover:border-white transition-all duration-700 bg-transparent rounded-full shadow-2xl">Send It</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- THE TODDLER TOOLKIT: PREMIUM SUPPLY CARD --- */}
      <section id="crate" className="w-full max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32 flex justify-center items-center relative z-10">

        {/* Glow behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#c4a67a]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        {/* The Card Container */}
        <div className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row overflow-hidden group transition-all duration-700 hover:shadow-[0_40px_80px_rgba(196,166,122,0.1)] hover:-translate-y-2">

          {/* Left: Image (Thumbnail size) */}
          <div className="relative w-full md:w-2/5 aspect-[4/5] md:aspect-auto bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="/The_Toddler_Toolkit/cover.png"
              alt="The Toddler Toolkit - Cover"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* Cheeky overlay tag */}
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c4a67a] font-bold">V1.0 Exclusive</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-3/5 p-8 md:p-20 flex flex-col justify-center relative">

            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-2 block mt-4 md:mt-0">Supply Drop</span>
              <h2 className="text-3xl md:text-4xl font-light italic text-white/90 leading-tight" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                The Toddler Toolkit
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 pr-4">
              A definitive collection of <strong>Robotic Motion Blueprints</strong> and <strong>Scene Hierarchies</strong>.
              Designed for visual architects who demand cinematic precision without the guesswork.
              Stop playing with prompts; start engineering scenes.
            </p>

            {/* List of Features (Compact) */}
            <ul className="mb-10 space-y-2 text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#c4a67a] rounded-full"></span>
                <span>8K Lighting Rigs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#c4a67a] rounded-full"></span>
                <span>Motion Physics Logic</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#c4a67a] rounded-full"></span>
                <span>Identity Consistency</span>
              </li>
            </ul>

            {/* Action Area */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-auto border-t border-white/5 md:border-none pt-8 md:pt-0">
              <a
                href="https://flowybiz.gumroad.com/l/the_toddler_kit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center border border-[#c4a67a]/40 text-[#c4a67a] hover:bg-[#c4a67a] hover:text-black rounded-full px-10 py-5 text-[12px] md:text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500"
              >
                Get It
              </a>
              <span className="text-[11px] md:text-[9px] text-zinc-600 font-mono tracking-widest text-center w-full md:w-auto">$XX // LIMITED</span>
            </div>

          </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-48 px-12 border-t border-white/5 flex flex-col items-center gap-24">
        <div className="w-32 h-[1px] bg-white opacity-20"></div>
        <div className="flex flex-wrap justify-center gap-16 text-zinc-600">
          <a href="https://x.com/gabrieldcpaiva" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-2 duration-700"><Twitter size={22} strokeWidth={1} /></a>
          <a href="https://medium.com/@gabrielpaiva_53557" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-2 duration-700 font-bold text-[10px] uppercase tracking-widest border-b border-transparent hover:border-white">Medium</a>
          <a href="https://www.instagram.com/gabriel_in_scotland?igsh=MThpNmNuOWhsamF5aQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-2 duration-700"><Instagram size={22} strokeWidth={1} /></a>
          <a href="https://flowybiz.gumroad.com/l/the_toddler_kit" target="_blank" rel="noopener noreferrer" id="deploy-control" className="hover:text-[#c4a67a] transition-all transform hover:-translate-y-2 duration-700 flex items-center gap-4 group">
            <ShoppingBag size={20} strokeWidth={1} />
            <span className="text-[9px] uppercase tracking-[0.4em] font-black italic">The Crate</span>
          </a>
          <a href="https://www.linkedin.com/in/gabrieldcpaiva" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-2 duration-700"><Linkedin size={22} strokeWidth={1} /></a>
          <a href="mailto:gabrieldcpaiva@gmail.com" className="hover:text-white transition-all transform hover:-translate-y-2 duration-700"><Mail size={22} strokeWidth={1} /></a>
        </div>
        <div className="text-[10px] uppercase tracking-[2.5em] text-zinc-800 font-black pl-[2.5em]">
          © Gabriel Paiva 2026 · <span className="text-zinc-700 font-medium">Handcrafted</span>
        </div>
      </footer>
    </div>
  );
};

export default App;