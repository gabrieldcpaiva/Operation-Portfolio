// Collection data — replaces the hardcoded array in the old App.jsx
// Each collection has a display name (shortened if needed), mood color, and images

export interface CollectionImage {
  id: string;
  title: string;
  url: string;
  orientation: 'portrait' | 'landscape';
}

export interface Collection {
  id: string;
  name: string;
  shortName?: string; // Used if name is too long to fit
  moodColor: string;  // Ambient glow color for this collection
  images: CollectionImage[];
}

const BASE = '/portfolio_images';

export const collections: Collection[] = [
  {
    id: 'diamond-day',
    name: 'Just Another Diamond Day',
    moodColor: 'rgba(196, 166, 122, 0.3)',
    images: [
      { id: 'jadd_01', title: 'Diamond Day 01', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_001.png`, orientation: 'portrait' },
      { id: 'jadd_02', title: 'Diamond Day 02', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_002.jpg`, orientation: 'landscape' },
      { id: 'jadd_03', title: 'Diamond Day 03', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_003.png`, orientation: 'landscape' },
      { id: 'jadd_04', title: 'Diamond Day 04', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_004.png`, orientation: 'landscape' },
      { id: 'jadd_05', title: 'Diamond Day 05', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_005.png`, orientation: 'landscape' },
      { id: 'jadd_06', title: 'Diamond Day 06', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_006.png`, orientation: 'landscape' },
      { id: 'jadd_07', title: 'Diamond Day 07', url: `${BASE}/01_Just_Another_Diamond_Day/Just_Another_Diamond_Day_007.png`, orientation: 'landscape' },
    ],
  },
  {
    id: 'born-of-sand',
    name: 'After Salgado: Born of Sand and Code',
    shortName: 'Born of Sand and Code',
    moodColor: 'rgba(180, 140, 80, 0.3)',
    images: [
      { id: 'as_01', title: 'Salgado Vision 01', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_01.png`, orientation: 'portrait' },
      { id: 'as_02', title: 'Salgado Vision 02', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_02.png`, orientation: 'portrait' },
      { id: 'as_03', title: 'Salgado Vision 03', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_03.png`, orientation: 'portrait' },
      { id: 'as_04', title: 'Salgado Vision 04', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_04.png`, orientation: 'portrait' },
      { id: 'as_05', title: 'Salgado Vision 05', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_05.png`, orientation: 'portrait' },
      { id: 'as_06', title: 'Salgado Vision 06', url: `${BASE}/02_After_Salgado_Born_of_Sand_and_Dust/After_Salgado_06.png`, orientation: 'portrait' },
    ],
  },
  {
    id: 'landscapes',
    name: 'Landscapes That Outlast Us',
    moodColor: 'rgba(80, 120, 160, 0.25)',
    images: [
      { id: 'land_01', title: 'Primal Horizon 01', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_001.png`, orientation: 'landscape' },
      { id: 'land_02', title: 'Primal Horizon 02', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_002.png`, orientation: 'landscape' },
      { id: 'land_03', title: 'Primal Horizon 03', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_003.png`, orientation: 'landscape' },
      { id: 'land_04', title: 'Primal Horizon 04', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_004.png`, orientation: 'landscape' },
      { id: 'land_05', title: 'Primal Horizon 05', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_005.png`, orientation: 'landscape' },
      { id: 'land_06', title: 'Primal Horizon 06', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_006.png`, orientation: 'landscape' },
      { id: 'land_07', title: 'Primal Horizon 07', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_007.png`, orientation: 'landscape' },
      { id: 'land_08', title: 'Primal Horizon 08', url: `${BASE}/03_Landscapes_That_Outlast_Us/Landscapes_That_Outlast_Us_008.png`, orientation: 'landscape' },
    ],
  },
  {
    id: 'cyberpunk-nights',
    name: 'Cyberpunk Nights',
    moodColor: 'rgba(200, 40, 120, 0.25)',
    images: [
      { id: 'cn_01', title: 'Neon Haze 01', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_01.png`, orientation: 'landscape' },
      { id: 'cn_02', title: 'Neon Haze 02', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_02.png`, orientation: 'landscape' },
      { id: 'cn_03', title: 'Neon Haze 03', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_03.png`, orientation: 'landscape' },
      { id: 'cn_04', title: 'Neon Haze 04', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_004.png`, orientation: 'portrait' },
      { id: 'cn_05', title: 'Neon Haze 05', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_05.jpeg`, orientation: 'landscape' },
      { id: 'cn_06', title: 'Neon Haze 06', url: `${BASE}/04_Cyberpunk_Nights/Cyberpunk_Nights_006.png`, orientation: 'landscape' },
    ],
  },
  {
    id: 'haute-couture',
    name: 'Haute Couture',
    moodColor: 'rgba(196, 166, 122, 0.35)',
    images: [
      { id: 'hc_01', title: 'Atelier 01', url: `${BASE}/05_Haute_Couture/Haute_Couture_001.png`, orientation: 'portrait' },
      { id: 'hc_02', title: 'Atelier 02', url: `${BASE}/05_Haute_Couture/Haute_Couture_002.png`, orientation: 'landscape' },
      { id: 'hc_03', title: 'Atelier 03', url: `${BASE}/05_Haute_Couture/Haute_Couture_003.png`, orientation: 'landscape' },
      { id: 'hc_04', title: 'Atelier 04', url: `${BASE}/05_Haute_Couture/Haute_Couture_004.png`, orientation: 'landscape' },
      { id: 'hc_05', title: 'Atelier 05', url: `${BASE}/05_Haute_Couture/Haute_Couture_005.png`, orientation: 'landscape' },
      { id: 'hc_06', title: 'Atelier 06', url: `${BASE}/05_Haute_Couture/Haute_Couture_007.png`, orientation: 'landscape' },
      { id: 'hc_07', title: 'Atelier 07', url: `${BASE}/05_Haute_Couture/Haute_Couture_008.png`, orientation: 'portrait' },
      { id: 'hc_08', title: 'Atelier 08', url: `${BASE}/05_Haute_Couture/Haute_Couture_009.png`, orientation: 'portrait' },
    ],
  },
  {
    id: 'hyper-chic-editorial',
    name: 'Hyper Chic Editorial',
    moodColor: 'rgba(220, 220, 220, 0.15)',
    images: [
      { id: 'hyp_01', title: 'Editorial 01', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_01.png`, orientation: 'landscape' },
      { id: 'hyp_02', title: 'Editorial 02', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_02.png`, orientation: 'landscape' },
      { id: 'hyp_03', title: 'Editorial 03', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_03.png`, orientation: 'landscape' },
      { id: 'hyp_04', title: 'Editorial 04', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_04.png`, orientation: 'portrait' },
      { id: 'hyp_05', title: 'Editorial 05', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_05.png`, orientation: 'portrait' },
      { id: 'hyp_06', title: 'Editorial 06', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_06.png`, orientation: 'portrait' },
      { id: 'hyp_07', title: 'Editorial 07', url: `${BASE}/06_Hyper_Chic_Editorial/Hyper_Chic_07.png`, orientation: 'portrait' },
    ],
  },
  {
    id: 'etheralphabet-visions',
    name: 'Etheralphabet Visions',
    moodColor: 'rgba(120, 80, 200, 0.25)',
    images: [
      { id: 'ev_01', title: 'Etheralphabet 01', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_001.png`, orientation: 'landscape' },
      { id: 'ev_02', title: 'Etheralphabet 02', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_002.png`, orientation: 'landscape' },
      { id: 'ev_03', title: 'Etheralphabet 03', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_003.jpeg`, orientation: 'landscape' },
      { id: 'ev_04', title: 'Etheralphabet 04', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_006.png`, orientation: 'landscape' },
      { id: 'ev_05', title: 'Etheralphabet 05', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_007.png`, orientation: 'landscape' },
      { id: 'ev_06', title: 'Etheralphabet 06', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_008.png`, orientation: 'landscape' },
      { id: 'ev_07', title: 'Etheralphabet 07', url: `${BASE}/07_Etheralphabet_Visions/Etheralphabet_Visions_009.png`, orientation: 'landscape' },
    ],
  },
];

// Helper: get display name (shortName if name is too long, else name)
export function getDisplayName(col: Collection): string {
  return col.name.length > 25 && col.shortName ? col.shortName : col.name;
}
