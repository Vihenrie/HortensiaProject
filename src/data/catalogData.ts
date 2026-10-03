import type { Product } from '../types/catalog';

export const products: Product[] = [
  {
    id: 'cereja-e-avela',
    name: 'Cereja e Avelã',
    categoryLabel: 'Vela Aromática Artesanal',
    category: 'aromatic',
    badge: 'Cera Vegetal Premium',
    description:
      'Uma fragrância doce, envolvente e acolhedora. A suculência da cereja se combina ao toque cremoso e levemente tostado da avelã, criando um aroma marcante na medida certa, com sensação de conforto e delicadeza. Ideal para deixar o ambiente mais aconchegante, charmoso e irresistivelmente perfumado.',
    olfactoryNotes: {
      top: ['Limão', 'Romã', 'Cereja'],
      heart: ['Avelã', 'Peônia', 'Lírio do Vale'],
      base: ['Âmbar', 'Almíscar', 'Baunilha', 'Caramelo'],
    },
    prices: [
      { qty: 1, label: '1 unidade', price: 44.90 },
      { qty: 2, label: 'Combo com 2', price: 79.90 },
      { qty: 3, label: 'Combo com 3', price: 114.90 },
    ],
    image: '/assets/products/cereja-avela.png',
    imageFallbackColor: '#C17C74',
    featured: true,
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    categoryLabel: 'Vela Aromática Artesanal',
    category: 'aromatic',
    badge: 'Cera Vegetal Premium',
    description:
      'Uma fragrância floral, suave e relaxante, que envolve o ambiente com uma sensação imediata de calma e bem-estar. Seu aroma delicado ajuda a desacelerar a rotina, criando uma atmosfera serena, acolhedora e perfeita para momentos de descanso.',
    olfactoryNotes: {
      top: ['Lavanda'],
      heart: ['Rosa', 'Gerânio', 'Sândalo'],
      base: ['Musk', 'Patchouli', 'Fava Tonka'],
    },
    prices: [
      { qty: 1, label: '1 unidade', price: 44.90 },
      { qty: 2, label: 'Combo com 2', price: 79.90 },
      { qty: 3, label: 'Combo com 3', price: 114.90 },
    ],
    image: '/assets/products/lavanda.png',
    imageFallbackColor: '#9B8EA9',
  },
  {
    id: 'bambu',
    name: 'Bambu',
    categoryLabel: 'Vela Aromática Artesanal',
    category: 'aromatic',
    badge: 'Cera Vegetal Premium',
    description:
      'Uma fragrância verde, fresca e revigorante, que traz ao ambiente a leveza da natureza. Suas notas limpas e delicadamente herbais criam uma atmosfera equilibrada, tranquila e acolhedora, ideal para renovar os espaços e transmitir sensação de frescor e bem-estar.',
    olfactoryNotes: {
      top: ['Bambu', 'Bergamota'],
      heart: ['Jacinto', 'Jasmim'],
      base: ['Musk', 'Madeira Aveludada'],
    },
    prices: [
      { qty: 1, label: '1 unidade', price: 44.90 },
      { qty: 2, label: 'Combo com 2', price: 79.90 },
      { qty: 3, label: 'Combo com 3', price: 114.90 },
    ],
    image: '/assets/products/bambu.png',
    imageFallbackColor: '#7D8F7B',
  },
  {
    id: 'flor-de-cerejeira',
    name: 'Flor de Cerejeira',
    categoryLabel: 'Vela Aromática Especial',
    category: 'aromatic',
    badge: 'Copo Pintado à Mão',
    description:
      'Uma fragrância floral, leve e delicadamente adocicada, inspirada na beleza suave das cerejeiras em flor. Seu aroma cria uma atmosfera romântica, serena e acolhedora. O copo, pintado à mão, torna cada vela única e transforma a peça em um detalhe especial para a decoração.',
    olfactoryNotes: {
      top: ['Pêra', 'Maçã', 'Melão', 'Morango'],
      heart: ['Rosa', 'Cassis', 'Ameixa', 'Jasmim', 'Violeta', 'Lírio do Vale'],
      base: ['Musk', 'Sândalo', 'Baunilha'],
    },
    prices: [
      { qty: 1, label: '1 unidade', price: 49.90 },
      { qty: 2, label: 'Combo com 2', price: 89.90 },
      { qty: 3, label: 'Combo com 3', price: 129.90 },
    ],
    image: '/assets/products/flor-cerejeira.png',
    imageFallbackColor: '#D48B6A',
    featured: true,
  },
  {
    id: 'vela-massagem-baunilha-e-roma',
    name: 'Vela de Massagem Baunilha e Romã',
    categoryLabel: 'Vela de Massagem Corporal',
    category: 'massage',
    badge: 'Óleo Corporal Morno',
    description:
      'Uma fragrância envolvente que combina a cremosidade adocicada da baunilha com o toque frutado e levemente vibrante da romã. Ao derreter, transforma-se em um óleo morno e perfumado para massagem, proporcionando uma experiência relaxante, sensorial e acolhedora.',
    olfactoryNotes: {
      top: ['Romã', 'Cedro', 'Rosa'],
      heart: ['Baunilha', 'Floral', 'Rosa', 'Verde', 'Lactônicas'],
      base: [],
    },
    prices: [
      { qty: 1, label: '1 unidade (30g)', price: 24.90 },
      { qty: 2, label: 'Combo com 2', price: 44.90 },
      { qty: 3, label: 'Combo com 3', price: 64.90 },
    ],
    image: '/assets/products/massagem-baunilha.png',
    imageFallbackColor: '#C28E58',
  },
  {
    id: 'lembranças-personalizadas',
    name: 'Lembranças Personalizadas',
    categoryLabel: 'Linha Sob Medida & Eventos',
    category: 'custom',
    badge: 'Sob Encomenda',
    description:
      'Transformamos ideias e momentos especiais em velas feitas sob medida. Personalizamos fragrâncias, cores, rótulos, embalagens e pequenos detalhes para criar lembranças únicas para casamentos, aniversários, eventos corporativos, chás de bebê e presentes especiais.',
    prices: [
      { qty: 1, label: 'Orçamento Personalizado', price: null },
    ],
    image: '/assets/products/personalizados/img1.png',
    imageFallbackColor: '#B86B43',
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
};
