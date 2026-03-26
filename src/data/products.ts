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
    id: 'teeburb-capsule',
    name: 'Teeburb Capsule',
    species: ['ruminant'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Systemic Dermatological Support',
    description: 'A herbal capsule formulation for systemic management of skin disorders and maintaining skin health in cattle.',
    benefits: ['Manages skin disorders systemically', 'Blood purifying action', 'Promotes healthy skin'],
    image: 'https://indianherbs.org/cdn/shop/files/TeeburbCaps._400x400.png?v=1706003509'
  },
  {
    id: 'nefroliv',
    name: 'NefroLiv',
    species: ['human'],
    category: 'Renal Health',
    tagline: 'Comprehensive Kidney Support',
    description: 'A potent herbal supplement for human renal health, acting as a reno-protective and diuretic agent.',
    benefits: ['Supports kidney function', 'Natural diuretic action', 'Prevents stone formation'],
    image: 'https://indianherbs.org/cdn/shop/files/nefroliv-01_510a5d30-72e1-46fc-8f2d-b17a40a1a62e_400x400.jpg?v=1768800591'
  },
  {
    id: 'anbioflam-400',
    name: 'Anbioflam-400',
    species: ['ruminant'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Oral Anti-Inflammatory & Anti-Bacterial',
    description: 'Oral anti-inflammatory, anti-bacterial and anti-fungal herbal formulation for cattle and ruminants.',
    benefits: ['Reduces inflammation', 'Anti-bacterial action', 'Anti-fungal properties'],
    image: 'https://indianherbs.org/cdn/shop/files/Anbioflam-400_400x400.png?v=1706772505'
  },
  {
    id: 'pulmoflex',
    name: 'PulmoFlex',
    species: ['human'],
    category: 'Respiratory Health',
    tagline: 'Natural Bronchial & Respiratory Support',
    description: 'Effective herbal management of Bronchial Asthma and Allergic Rhinitis for improved respiratory health.',
    benefits: ['Relieves bronchial asthma', 'Controls allergic rhinitis', 'Improves lung function'],
    image: 'https://indianherbs.org/cdn/shop/files/16_654b1839-a154-4ca3-b027-413faab35106_400x400.jpg?v=1762282752'
  },
  {
    id: 'skinheal-pet-spray',
    name: 'SkinHeal Pet Spray',
    species: ['pet'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Topical Skin and Wound Care for Pets',
    description: 'A versatile herbal spray for pets to treat wounds, skin infections and promote healthy coat recovery.',
    benefits: ['Soothes skin irritation', 'Promotes wound healing', 'Supports coat health'],
    image: 'https://indianherbs.org/cdn/shop/files/skinheal-33_400x400.jpg?v=1763920465'
  },
  {
    id: 'himax-ointment',
    name: 'Himax Ointment',
    species: ['ruminant', 'pet'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Broad Spectrum Dermatological Ointment',
    description: 'A highly effective herbal ointment for various skin conditions, wounds, and fungal infections in animals.',
    benefits: ['Fast wound healing', 'Anti-fungal properties', 'Effective against maggots'],
    image: 'https://indianherbs.org/cdn/shop/files/Himax_400x400.png?v=1706004965'
  },
  {
    id: 'himax-lotion',
    name: 'Himax Lotion',
    species: ['ruminant'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Broad Spectrum Dermatological Lotion',
    description: 'A liquid lotion formulation offering broad spectrum dermatological protection for livestock skin health.',
    benefits: ['Treats skin infections', 'Easy topical application', 'Broad spectrum action'],
    image: 'https://indianherbs.org/cdn/shop/files/HimaxLotion_400x400.png?v=1706693884'
  },
  {
    id: 'optiliv',
    name: 'OptiLiv',
    species: ['human'],
    category: 'Liver Tonic & Growth Promoter',
    tagline: 'Hepato-Protective & Liver Stimulant',
    description: 'A hepatogenic, hepato-protective and hepatic stimulant herbal supplement for optimal liver function in humans.',
    benefits: ['Protects liver cells', 'Stimulates bile secretion', 'Detoxifies and rejuvenates liver'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard_1_d2c40ea1-429d-49af-ae42-f143450187c1_400x400.jpg?v=1768909210'
  },
  {
    id: 'neblon-powder',
    name: 'Neblon Powder',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Effective Anti-Diarrhoeal Powder',
    description: 'A time-tested herbal formulation to control diarrhoea and restore normal gut function in livestock.',
    benefits: ['Controls loose motion fast', 'Restores gut microflora', 'Safe and non-toxic'],
    image: 'https://indianherbs.org/cdn/shop/files/NeblonPowder_400x400.png?v=1706615011'
  },
  {
    id: 'prosaw',
    name: 'ProSaw',
    species: ['human'],
    category: 'Renal Health',
    tagline: 'Herbal Treatment for Prostate Enlargement',
    description: 'A natural herbal supplement for treatment of Prostate Enlargement (BPH) and urinary tract support.',
    benefits: ['Reduces prostate enlargement', 'Improves urinary flow', 'Non-hormonal and safe'],
    image: 'https://indianherbs.org/cdn/shop/files/7_f8d225a9-c468-4d7d-a394-d8ce24a99ba9_400x400.jpg?v=1768800370'
  },
  {
    id: 'cardipro',
    name: 'CardiPro',
    species: ['human'],
    category: 'Nutritional Support',
    tagline: 'Natural Lipid Regulator & Cardio-Protective',
    description: 'A cardio-protective herbal formulation that helps manage blood fat levels and supports overall heart health.',
    benefits: ['Regulates cholesterol', 'Antioxidant support', 'Strengthens heart muscles'],
    image: 'https://indianherbs.org/cdn/shop/files/Copy_of_4_400x400.jpg?v=1762282196'
  },
  {
    id: 'himalayan-batisa',
    name: 'Himalayan Batisa',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Digestive Stimulant and Tonic',
    description: 'A traditional polyherbal digestive stimulant and tonic for improving appetite and digestion in cattle.',
    benefits: ['Stimulates digestive enzymes', 'Improves appetite', 'Enhances nutrient absorption'],
    image: 'https://indianherbs.org/cdn/shop/files/HimalayanBatisa_400x400.jpg?v=1719641190'
  },
  {
    id: 'nephtone-pet-syrup',
    name: 'Nephtone Pet Syrup',
    species: ['pet'],
    category: 'Renal Health',
    tagline: 'Kidney and Liver Tonic for Pets',
    description: 'A comprehensive herbal kidney and liver tonic syrup designed to support renal and hepatic health in pets.',
    benefits: ['Supports kidney function', 'Boosts liver health', 'Helps detoxification'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard5_400x400.jpg?v=1761761972'
  },
  {
    id: 'cofecu-plus',
    name: 'COFECU PLUS',
    species: ['ruminant'],
    category: 'Nutritional Support',
    tagline: 'Essential Trace Mineral Supplement',
    description: 'A vital combination of trace minerals (Copper, Cobalt, Iron & Manganese) for livestock nutritional health.',
    benefits: ['Prevents mineral deficiency', 'Boosts blood formation', 'Enhances immune function'],
    image: 'https://indianherbs.org/cdn/shop/files/CofecuPlus_400x400.png?v=1706760633'
  },
  {
    id: 'prajana-hs',
    name: 'Prajana HS',
    species: ['ruminant'],
    category: 'Reproductive Performance',
    tagline: 'Natural Oestrus Inducer for Optimal Fertility',
    description: 'A research-based herbal solution to improve reproductive efficiency and induce timely heat in livestock.',
    benefits: ['Induces natural heat', 'Improves conception rate', 'Non-hormonal and safe'],
    image: 'https://indianherbs.org/cdn/shop/files/PrajanaHS_400x400.png?v=1706695721'
  },
  {
    id: 'aptimore-pet-syrup',
    name: 'Aptimore Pet Syrup',
    species: ['pet'],
    category: 'Digestive & Gut Health',
    tagline: 'Appetite and Digestive Tonic for Pets',
    description: 'An herbal appetite stimulant and digestive tonic syrup to improve food intake and digestion in pets.',
    benefits: ['Stimulates appetite', 'Improves digestion', 'Enhances nutrient uptake'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard13_400x400.jpg?v=1761761660'
  },
  {
    id: 'galog-powder',
    name: 'Galog Powder',
    species: ['ruminant'],
    category: 'Milk Production Enhancer',
    tagline: 'Natural Milk Yield Optimizer',
    description: 'A polyherbal galactagogue formulation that helps in improving milk production and maintaining udder health.',
    benefits: ['Increases milk yield', 'Improves milk quality', 'Maintains peak lactation'],
    image: 'https://indianherbs.org/cdn/shop/files/GalogPowder_400x400.png?v=1706685373'
  },
  {
    id: 'everest-batisa',
    name: 'Everest Batisa',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Digestive Stimulant and Tonic',
    description: 'A powerful polyherbal digestive stimulant and tonic to promote healthy gut motility in livestock.',
    benefits: ['Improves rumen function', 'Stimulates digestion', 'Reduces digestive disorders'],
    image: 'https://indianherbs.org/cdn/shop/files/EverestBatisa_400x400.jpg?v=1768978655'
  },
  {
    id: 'ovimin-bolus',
    name: 'Ovimin Bolus',
    species: ['ruminant'],
    category: 'Nutritional Support',
    tagline: 'Micromineral Fertility Bolus',
    description: 'A micromineral bolus supplying essential trace elements to support reproductive health in livestock.',
    benefits: ['Boosts fertility', 'Corrects micromineral deficiency', 'Improves conception rates'],
    image: 'https://indianherbs.org/cdn/shop/files/OviminBolus_400x400.png?v=1706767379'
  },
  {
    id: 'skinheal-cream',
    name: 'SkinHeal Cream',
    species: ['ruminant'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Herbal Skin Healing Cream for Animals',
    description: 'An effective herbal cream and spray formulation for skin healing and wound care in ruminants.',
    benefits: ['Heals wounds rapidly', 'Prevents secondary infections', 'Soothes inflamed skin'],
    image: 'https://indianherbs.org/cdn/shop/files/SkinHeal-Cream_400x400.png?v=1706185138'
  },
  {
    id: 'withamla-jit',
    name: 'Withamla Jit',
    species: ['human'],
    category: 'Nutritional Support',
    tagline: 'Vitality & Overall Well-Being Support',
    description: 'A rejuvenating herbal supplement to support vitality, overall well-being and healthy ageing in humans.',
    benefits: ['Boosts vitality', 'Supports healthy ageing', 'Enhances overall well-being'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard1_7c07f181-f86c-4ed4-955e-3f032a2cf24a_400x400.jpg?v=1762282923'
  },
  {
    id: 'gutnor',
    name: 'GutNor',
    species: ['human'],
    category: 'Digestive & Gut Health',
    tagline: 'Anti-Diarrhoeal & Gut Function Stabiliser',
    description: 'A herbal anti-diarrhoeal and gut function stabiliser for effective management of digestive disorders.',
    benefits: ['Stops diarrhoea quickly', 'Restores gut balance', 'Stabilises bowel movements'],
    image: 'https://indianherbs.org/cdn/shop/files/13_4d0d8b79-6168-462f-97de-54af5ad9c759_400x400.jpg?v=1768802098'
  },
  {
    id: 'tiflicon-spray',
    name: 'Tiflicon Spray',
    species: ['pet'],
    category: 'Anti-Parasitic',
    tagline: 'Flea and Tick Spray for Pets',
    description: 'An herbal flea and tick spray with skin and coat conditioning benefits for companion animals.',
    benefits: ['Kills fleas and ticks', 'Conditions skin and coat', 'Long-lasting protection'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard1_da625eff-832a-4f6c-89f2-3a57ede2137d_400x400.jpg?v=1763920610'
  },
  {
    id: 'calmore-gold',
    name: 'Calmore Gold',
    species: ['ruminant'],
    category: 'Milk Production Enhancer',
    tagline: 'Calcium, Phosphorus & Vitamin D3 Supplement',
    description: 'An excellent combination of Calcium, Phosphorus and Vitamin D3 for strong bones and optimal milk production.',
    benefits: ['Prevents milk fever', 'Strengthens bones', 'Supports milk yield'],
    image: 'https://indianherbs.org/cdn/shop/files/CalmoreGoldLiq._3_400x400.png?v=1706766756'
  },
  {
    id: 'utrifit-liquid',
    name: 'Utrifit Liquid',
    species: ['ruminant'],
    category: 'Reproductive Performance',
    tagline: 'Uterine Tonic and Ecbolic',
    description: 'A uterine tonic and ecbolic herbal liquid to support uterine health and post-partum recovery in cattle.',
    benefits: ['Tones uterine muscles', 'Promotes placental expulsion', 'Reduces post-partum complications'],
    image: 'https://indianherbs.org/cdn/shop/files/Utrifit_400x400.png?v=1706002772'
  },
  {
    id: 'gutlyte-gs',
    name: 'Gutlyte-GS',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Anti-Diarrhoeal with Electrolytes',
    description: 'An herbal anti-diarrhoeal supplement with electrolytes to manage diarrhoea and rehydrate livestock.',
    benefits: ['Controls diarrhoea', 'Restores electrolyte balance', 'Prevents dehydration'],
    image: 'https://indianherbs.org/cdn/shop/files/Gutlyte-GS_400x400.png?v=1706688007'
  },
  {
    id: 'mammiflam-cream',
    name: 'Mammiflam Cream',
    species: ['ruminant'],
    category: 'Anti-Inflammatory',
    tagline: 'Herbal Anti-Mastitis Udder Cream',
    description: 'An herbal antimicrobial and anti-inflammatory cream for effective mastitis management and udder care.',
    benefits: ['Reduces udder inflammation', 'Fights mastitis-causing bacteria', 'Soothes teat soreness'],
    image: 'https://indianherbs.org/cdn/shop/files/Mammiflam_400x400.png?v=1706699679'
  },
  {
    id: 'youthen',
    name: 'Youthen',
    species: ['human'],
    category: 'Reproductive Performance',
    tagline: 'Nervine Tonic for Vitality and Youthful Vigour',
    description: 'A nervine tonic herbal supplement to restore vitality, youthful vigour and reproductive wellness in men.',
    benefits: ['Boosts vitality', 'Improves stamina', 'Supports reproductive health'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard1_1efa7249-d2f0-4fb5-be8a-b1be796524b2_400x400.jpg?v=1762282993'
  },
  {
    id: 'anbioflam-pet-syrup',
    name: 'Anbioflam Pet Syrup',
    species: ['pet'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Skin and Inflammation Support for Pets',
    description: 'A herbal syrup formulation for managing skin inflammation and dermatological conditions in companion animals.',
    benefits: ['Reduces skin inflammation', 'Supports skin healing', 'Anti-bacterial action'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard_22_400x400.jpg?v=1768802249'
  },
  {
    id: 'tifliban-coat-cleanser',
    name: 'TifliBan Coat Cleanser',
    species: ['pet'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Herbal Shampoo for Healthy Coat',
    description: 'A herbal flea and tick shampoo that cleanses, conditions and protects the skin and coat of companion animals.',
    benefits: ['Removes fleas and ticks', 'Conditions coat', 'Keeps skin healthy'],
    image: 'https://indianherbs.org/cdn/shop/files/tifliban-29_b03d7fc9-45df-4cb2-ac48-48b2c6a41248_400x400.jpg?v=1763920678'
  },
  {
    id: 'caflon-powder',
    name: 'Caflon Powder',
    species: ['ruminant'],
    category: 'Respiratory Health',
    tagline: 'Herbal Cough Formula for Calves & Cattle',
    description: 'A herbal cough powder formula to manage respiratory conditions and support healthy lung function in calves.',
    benefits: ['Relieves cough', 'Supports respiratory health', 'Promotes growth in calves'],
    image: 'https://indianherbs.org/cdn/shop/files/CaflonPowder_400x400.png?v=1706157164'
  },
  {
    id: 'shilajit-capsules',
    name: 'Shilajit Capsules',
    species: ['human'],
    category: 'Energy & Stamina',
    tagline: 'Pure Shilajit for Strength and Stamina',
    description: 'A potent pure Shilajit extract capsule for enhancing strength, stamina, energy and overall performance.',
    benefits: ['Boosts energy and stamina', 'Enhances physical performance', 'Supports overall vitality'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard1_5f247326-abae-4c78-8dc3-04e836e0eec5_400x400.jpg?v=1762282825'
  },
  {
    id: 'stresscheck-afs',
    name: 'Stresscheck AFS Liq.',
    species: ['ruminant'],
    category: 'Immune Modulator',
    tagline: 'Immunity Booster and Stress Buster',
    description: 'A herbal immunity booster and stress buster liquid to protect livestock from environmental and production stress.',
    benefits: ['Boosts immunity', 'Reduces stress', 'Improves production performance'],
    image: 'https://indianherbs.org/cdn/shop/files/StresscheckAFSLiquid_400x400.png?v=1706762613'
  },
  {
    id: 'proimmu',
    name: 'ProImmu',
    species: ['human'],
    category: 'Immune Modulator',
    tagline: 'Natural Immune Potentiator',
    description: 'A herbal immune potentiator and immune protective supplement to strengthen the body\'s natural defense mechanisms.',
    benefits: ['Potentiates immune response', 'Protects against infections', 'Enhances vaccine efficacy'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard_1_5e6fdc26-ea6e-4d9a-8239-c1019fd7763d_400x400.jpg?v=1768909387'
  },
  {
    id: 'eazmov-plus',
    name: 'EazMov Plus',
    species: ['human'],
    category: 'Joint & Bone Health',
    tagline: 'Anti-Arthritic Joint Nutrition Regulator',
    description: 'An anti-arthritic, joint nutrition regulator and disease process modifier for comprehensive joint health support.',
    benefits: ['Reduces joint inflammation', 'Improves joint mobility', 'Slows disease progression'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard_1_400x400.jpg?v=1762282289'
  },
  {
    id: 'meboliv-pet-syrup',
    name: 'Meboliv Pet Syrup',
    species: ['pet'],
    category: 'Liver Tonic & Growth Promoter',
    tagline: 'Liver and Metabolic Support for Pets',
    description: 'A comprehensive liver and metabolic support syrup with multivitamins for digestive health in pets.',
    benefits: ['Supports liver function', 'Improves metabolism', 'Provides essential vitamins'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard1_400x400.jpg?v=1761761889'
  },
  {
    id: 'immuplus-pet-syrup',
    name: 'Immuplus Pet Syrup',
    species: ['pet'],
    category: 'Immune Modulator',
    tagline: 'Natural Immune Support for Pets',
    description: 'An effective herbal tonic to boost the natural defense mechanism of pets against infections and stress.',
    benefits: ['Enhances vaccine response', 'Fights recurring infections', 'Better recovery from illness'],
    image: 'https://indianherbs.org/cdn/shop/files/Artboard17_400x400.jpg?v=1761761766'
  },
  {
    id: 'fullmin-gold',
    name: 'Fullmin Gold',
    species: ['ruminant'],
    category: 'Nutritional Support',
    tagline: 'Premium Mineral Mixture for Livestock',
    description: 'A premium mineral mixture providing a complete spectrum of macro and micro minerals for livestock health.',
    benefits: ['Prevents mineral deficiency', 'Improves productivity', 'Boosts overall health'],
    image: 'https://indianherbs.org/cdn/shop/files/FullminGold_400x400.png?v=1706769609'
  },
  {
    id: 'galog-strong-bolus',
    name: 'Galog Strong Bolus',
    species: ['ruminant'],
    category: 'Milk Production Enhancer',
    tagline: 'Restoring and Optimising Milk Yield',
    description: 'A polyherbal bolus for restoring, regulating and optimising milk yield throughout the lactation cycle.',
    benefits: ['Restores milk yield', 'Prolongs lactation', 'Improves milk fat content'],
    image: 'https://indianherbs.org/cdn/shop/files/GalogStrongBolus_400x400.png?v=1706686868'
  },
  {
    id: 'zeetuss-syrup',
    name: 'ZeeTuss Syrup',
    species: ['human'],
    category: 'Respiratory Health',
    tagline: 'Herbal Throat Soothing Syrup',
    description: 'A soothing herbal syrup for throat irritation, cough and upper respiratory discomfort in adults and children.',
    benefits: ['Soothes throat irritation', 'Relieves cough', 'Provides fast symptomatic relief'],
    image: 'https://indianherbs.org/cdn/shop/files/Gemini_Generated_Image_6mtopb6mtopb6mto_1_400x400.png?v=1762283114'
  },
  {
    id: 'meboliv-afs-liquid',
    name: 'Meboliv AFS Liquid Conc.',
    species: ['ruminant'],
    category: 'Liver Tonic & Growth Promoter',
    tagline: 'Concentrated Herbal Liver Tonic',
    description: 'A concentrated herbal liver tonic to support liver health, growth and toxin management in livestock.',
    benefits: ['Promotes liver regeneration', 'Enhances growth rate', 'Manages feed toxins'],
    image: 'https://indianherbs.org/cdn/shop/files/Meboliv_2_400x400.png?v=1706767992'
  },
  {
    id: 'replanta-powder',
    name: 'Replanta Powder',
    species: ['ruminant'],
    category: 'Reproductive Performance',
    tagline: 'Uterine Stimulant and Ecbolic',
    description: 'A herbal uterine stimulant and ecbolic powder for expulsion of retained placenta and uterine cleansing.',
    benefits: ['Expels retained placenta', 'Stimulates uterine contractions', 'Prevents post-partum infections'],
    image: 'https://indianherbs.org/cdn/shop/files/Replanta-Powder_400x400.png?v=1706614352'
  },
  {
    id: 'eazmov-cream',
    name: 'EazMov Cream',
    species: ['human'],
    category: 'Joint & Bone Health',
    tagline: 'Topical Anti-Arthritic Joint Cream',
    description: 'A topical anti-arthritic cream for local joint nutrition regulation and pain relief in arthritic conditions.',
    benefits: ['Relieves joint pain', 'Reduces local inflammation', 'Improves joint flexibility'],
    image: 'https://indianherbs.org/cdn/shop/files/eazmov-01_400x400.jpg?v=1763920261'
  },
  {
    id: 'calsorb',
    name: 'CalSorb',
    species: ['human'],
    category: 'Joint & Bone Health',
    tagline: 'Optimising Calcium Absorption for Bone Health',
    description: 'A herbal supplement for optimising absorption and utilisation of dietary Calcium and other minerals for bone health.',
    benefits: ['Enhances calcium absorption', 'Strengthens bones', 'Prevents osteoporosis'],
    image: 'https://indianherbs.org/cdn/shop/files/10_400x400.jpg?v=1762282096'
  },
  {
    id: 'soricure-cream',
    name: 'SoriCure Cream',
    species: ['human'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Herbal Cream for Psoriasis Management',
    description: 'An effective herbal ayurvedic cream for topical management of psoriasis and chronic skin disorders.',
    benefits: ['Manages psoriasis symptoms', 'Reduces skin scaling', 'Soothes inflamed skin'],
    image: 'https://indianherbs.org/cdn/shop/files/soricure-01_400x400.jpg?v=1763920200'
  },
  {
    id: 'd-bloat',
    name: 'D-Bloat',
    species: ['ruminant'],
    category: 'Nutritional Support',
    tagline: 'Microflora-Friendly Anti-Bloat Liquid',
    description: 'A highly effective anti-bloat liquid that is safe for rumen microflora while providing immediate relief from bloat.',
    benefits: ['Provides fast bloat relief', 'Protects rumen microflora', 'Prevents recurrent bloat'],
    image: 'https://indianherbs.org/cdn/shop/files/D-Bloat_400x400.png?v=1706167808'
  },
  {
    id: 'blaze',
    name: 'Blaze',
    species: ['ruminant'],
    category: 'Skincare & Dermatologicals',
    tagline: 'Anti-Dandruff, Anti-Lice Ectoparasite Control',
    description: 'A herbal formulation effective against dandruff, lice and other ectoparasites in cattle and ruminants.',
    benefits: ['Eliminates lice and dandruff', 'Protects against ectoparasites', 'Improves coat condition'],
    image: 'https://indianherbs.org/cdn/shop/files/Blaze_400x400.png?v=1706157643'
  },
  {
    id: 'rumaxon-pro',
    name: 'Rumaxon Pro',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Digestive Stimulant with Probiotics',
    description: 'A digestive stimulant with probiotics and organic minerals for optimal rumen function and gut health.',
    benefits: ['Stimulates rumen motility', 'Boosts probiotic flora', 'Improves feed efficiency'],
    image: 'https://indianherbs.org/cdn/shop/files/RumaxonPro_400x400.png?v=1706771926'
  },
  {
    id: 'rumbion-bolus',
    name: 'Rumbion Bolus',
    species: ['ruminant'],
    category: 'Digestive & Gut Health',
    tagline: 'Herbal Digestive Bolus for Cattle',
    description: 'A convenient herbal digestive bolus for quick relief from indigestion, rumen stasis and digestive disorders.',
    benefits: ['Quick relief from indigestion', 'Restores rumen function', 'Easy bolus administration'],
    image: 'https://indianherbs.org/cdn/shop/files/RumbionBolus_400x400.png?v=1706697567'
  },
  {
    id: 'lactmore-premix-powder',
    name: 'Lactmore Premix Powder',
    species: ['ruminant'],
    category: 'Milk Production Enhancer',
    tagline: 'Polyherbal Galactagogue and Calcium Supplement',
    description: 'A polyherbal galactagogue and calcium premix powder for maximising milk production in dairy cattle.',
    benefits: ['Increases milk output', 'Provides essential calcium', 'Supports udder health'],
    image: 'https://indianherbs.org/cdn/shop/files/LactmorePowder_400x400.png?v=1706763401'
  }
];
