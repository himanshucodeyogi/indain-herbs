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
    id: 'liv-52-vet',
    name: 'Liv.52 Vet',
    species: ['poultry', 'ruminant', 'aqua', 'pet'],
    category: 'Liver Care',
    tagline: 'The Gold Standard in Liver Health',
    description: 'The world\'s most researched liver tonic that protects the liver against toxins and improves appetite.',
    benefits: ['Protects against mycotoxins', 'Improves digestion', 'Faster recovery from illness'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nefrosave',
    name: 'NefroSave',
    species: ['poultry'],
    category: 'Kidney Care',
    tagline: 'Comprehensive Renal Support',
    description: 'A potent herbal formulation designed to support kidney function and maintain electrolyte balance.',
    benefits: ['Prevents visceral gout', 'Diuretic action', 'Supports renal health'],
    image: 'https://images.unsplash.com/photo-1599403213059-86927d264379?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'himax-ointment',
    name: 'Himax Ointment',
    species: ['ruminant', 'pet'],
    category: 'Dermatological',
    tagline: 'Broad-Spectrum Antiseptic Ointment',
    description: 'A highly effective herbal ointment for various skin conditions, wounds, and fungal infections in animals.',
    benefits: ['Fast wound healing', 'Anti-fungal properties', 'Effective against maggots'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nebion',
    name: 'Neblon',
    species: ['ruminant'],
    category: 'Digestive Health',
    tagline: 'Effective Anti-Diarrhoeal Powder',
    description: 'A time-tested herbal formulation to control diarrhoea and restore normal gut function in livestock.',
    benefits: ['Controls loose motion fast', 'Restores gut microflora', 'Safe and non-toxic'],
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'skinheal-pet',
    name: 'SkinHeal Pet',
    species: ['pet'],
    category: 'Skin Care',
    tagline: 'Herbal Wound Healing Spray',
    description: 'A versatile spray for pets to treat wounds, skin infections, and keep pests away naturally.',
    benefits: ['Soothes skin irritation', 'Promotes hair regrowth', 'Natural insect repellent'],
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nefroliv-human',
    name: 'NefroLiv',
    species: ['human'],
    category: 'Renal Care',
    tagline: 'Comprehensive Kidney Support',
    description: 'A potent herbal supplement designed for human renal health, acting as a reno-protective and diuretic agent.',
    benefits: ['Supports kidney function', 'Natural diuretic', 'Prevents stone formation'],
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'galog-powder',
    name: 'Galog Powder',
    species: ['ruminant'],
    category: 'Lactation support',
    tagline: 'Natural Milk Yield Optimizer',
    description: 'A polyherbal formulation that helps in improving milk production and maintaining udder health.',
    benefits: ['Increases milk yield', 'Improves milk quality', 'Maintains peak lactation'],
    image: 'https://images.unsplash.com/photo-1527153857715-3908f2bac5e8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'immuplus-pet',
    name: 'ImmuPlus Pet',
    species: ['pet'],
    category: 'Immunity',
    tagline: 'Natural Immune Potentiator',
    description: 'An effective herbal tonic to boost the natural defense mechanism of pets against infections and stress.',
    benefits: ['Enhances vaccine response', 'Fights recurring infections', 'Better recovery from illness'],
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cardipro',
    name: 'CardiPro',
    species: ['human'],
    category: 'Cardiac Health',
    tagline: 'Natural Lipid Regulator',
    description: 'A cardio-protective herbal formulation that helps manage blood fat levels and supports overall heart health.',
    benefits: ['Regulates cholesterol', 'Antioxidant support', 'Strengthens heart muscles'],
    image: 'https://images.unsplash.com/photo-1505751172107-573966a04271?auto=format&fit=crop&q=80&w=600'
  }
];
