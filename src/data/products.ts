export interface Product {
  id: string;
  name: string;
  species: string[];
  category: string;
  description: string;
  benefits: string[];
  tagline: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'animon',
    name: 'Animon',
    species: ['ruminant'],
    category: 'Nutritional Supplement',
    tagline: 'Precision Mineral & Vitamin Supplement',
    description: 'A scientifically formulated blend of chelated minerals and vitamins to enhance productivity and immunity in dairy cattle.',
    benefits: ['Improves conception rate', 'Boosts milk production', 'Enhances immunity'],
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'biocholin',
    name: 'BioCholine',
    species: ['poultry', 'swine'],
    category: 'Metabolic Health',
    tagline: 'Natural Choline Replacer',
    description: 'A research-backed herbal alternative to synthetic Choline Chloride, ensuring better fat metabolism and liver health.',
    benefits: ['Better FCR', 'Prevents Fatty Liver Syndrome', 'Stable at high temperatures'],
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'herbal-methionine',
    name: 'Herbal Methionine',
    species: ['poultry'],
    category: 'Amino Acid',
    tagline: 'Sustainable Amino Acid Alternative',
    description: 'A phytogenic alternative to synthetic DL-Methionine, optimized for better bioavailability and performance.',
    benefits: ['Optimizes growth', 'Environmentally friendly', 'Natural protein synthesis'],
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nefroliv-human',
    name: 'NefroLiv',
    species: ['human'],
    category: 'Renal Care',
    tagline: 'Comprehensive Kidney Support',
    description: 'A potent herbal supplement designed for human renal health, acting as a reno-protective and diuretic agent.',
    benefits: ['Supports kidney function', 'Natural diuretic', 'Prevents stone formation'],
    image: 'https://indianherbs.org/cdn/shop/products/NefroLiv_Capsules_Front_1024x1024.jpg'
  },
  {
    id: 'himax-ointment',
    name: 'Himax Ointment',
    species: ['ruminant', 'pet'],
    category: 'Dermatological',
    tagline: 'Broad-Spectrum Antiseptic Ointment',
    description: 'A highly effective herbal ointment for various skin conditions, wounds, and fungal infections in animals.',
    benefits: ['Fast wound healing', 'Anti-fungal properties', 'Effective against maggots'],
    image: 'https://shakehands.co.in/media/catalog/product/h/i/himax_ointment_50g_1.jpg'
  },
  {
    id: 'teeburb-capsule',
    name: 'Teeburb Capsule',
    species: ['human'],
    category: 'Skin Care',
    tagline: 'Systemic Dermatological Support',
    description: 'Herbal capsule for systemic management of various skin disorders and maintaining skin health from within.',
    benefits: ['Blood purifier', 'Fights skin infections', 'Natural glow'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/XW/XG/XN/22276255/teeburb-capsule-500x500.jpg'
  },
  {
    id: 'galog-powder',
    name: 'Galog Powder',
    species: ['ruminant'],
    category: 'Lactation support',
    tagline: 'Natural Milk Yield Optimizer',
    description: 'A polyherbal formulation that helps in improving milk production and maintaining udder health.',
    benefits: ['Increases milk yield', 'Improves milk quality', 'Maintains peak lactation'],
    image: 'https://indianherbs.org/cdn/shop/files/Galog_Powder_Front_1024x1024.jpg'
  },
  {
    id: 'immuplus-pet',
    name: 'ImmuPlus Pet',
    species: ['pet'],
    category: 'Immunity',
    tagline: 'Natural Immune Potentiator',
    description: 'An effective herbal tonic to boost the natural defense mechanism of pets against infections and stress.',
    benefits: ['Enhances vaccine response', 'Fights recurring infections', 'Better recovery from illness'],
    image: 'https://indianherbs.org/cdn/shop/products/ImmuPlus_Pet_Syrup_100ml_Front_1024x1024.jpg'
  },
  {
    id: 'nebion',
    name: 'Neblon',
    species: ['ruminant'],
    category: 'Digestive Health',
    tagline: 'Effective Anti-Diarrhoeal Powder',
    description: 'A time-tested herbal formulation to control diarrhoea and restore normal gut function in livestock.',
    benefits: ['Controls loose motion fast', 'Restores gut microflora', 'Safe and non-toxic'],
    image: 'https://indianherbs.org/cdn/shop/products/Neblon_Powder_100g_Front_1024x1024.jpg'
  },
  {
    id: 'skinheal-pet',
    name: 'SkinHeal Pet',
    species: ['pet'],
    category: 'Skin Care',
    tagline: 'Herbal Wound Healing Spray',
    description: 'A versatile spray for pets to treat wounds, skin infections, and keep pests away naturally.',
    benefits: ['Soothes skin irritation', 'Promotes hair regrowth', 'Natural insect repellent'],
    image: 'https://indianherbs.org/cdn/shop/products/SkinHeal_Pet_Spray_Front_1024x1024.jpg'
  },
  {
    id: 'cardipro',
    name: 'CardiPro',
    species: ['human'],
    category: 'Cardiac Health',
    tagline: 'Natural Lipid Regulator',
    description: 'A cardio-protective herbal formulation that helps manage blood fat levels and supports overall heart health.',
    benefits: ['Regulates cholesterol', 'Antioxidant support', 'Strengthens heart muscles'],
    image: 'https://indianherbs.org/cdn/shop/products/CardiPro_Capsules_Front_1024x1024.jpg'
  },
  {
    id: 'prajana-hs',
    name: 'Prajana HS',
    species: ['ruminant'],
    category: 'Fertility',
    tagline: 'Natural Oestrus Inducer',
    description: 'A research-based herbal solution to improve reproductive efficiency and induce timely heat in livestock.',
    benefits: ['Induces natural heat', 'Improves conception rate', 'Non-hormonal and safe'],
    image: 'https://indianherbs.org/cdn/shop/products/Prajana_HS_Capsules_Front_1024x1024.jpg'
  }
];
