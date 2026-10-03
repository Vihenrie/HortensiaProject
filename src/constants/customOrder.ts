export const EVENT_TYPES: string[] = [
  'Casamento',
  'Aniversário',
  'Chá de Bebê',
  'Chá Revelação',
  'Corporativo / Brinde',
  'Batizado',
  'Formatura',
  'Outro',
];

export const FRAGRANCES: string[] = [
  'Cereja e Avelã',
  'Lavanda',
  'Bambu',
  'Flor de Cerejeira',
  'Baunilha e Romã',
  'Deixar a critério do Ateliê',
  'Quero criar uma fragrância exclusiva',
];

export interface CustomItem {
  num: string;
  title: string;
  desc: string;
}

export const CUSTOM_ITEMS: CustomItem[] = [
  {
    num: '01',
    title: 'Fragrâncias Exclusivas',
    desc: 'Seleção ou desenvolvimento de acordes olfativos sob medida para a ocasião.',
  },
  {
    num: '02',
    title: 'Cores & Recipientes',
    desc: 'Tons da cera e escolha entre copos de vidro, latas ou formatos artesanais.',
  },
  {
    num: '03',
    title: 'Rótulos & Identidade Visual',
    desc: 'Aplicação de monogramas, nomes, datas e identidade visual do evento.',
  },
  {
    num: '04',
    title: 'Embalagens & Laços',
    desc: 'Caixas personalizadas, saquinhos de algodão cru e fitas de linho.',
  },
  {
    num: '05',
    title: 'Papelaria Afetiva',
    desc: 'Tags e cartões com mensagens de agradecimento dedicadas.',
  },
  {
    num: '06',
    title: 'Acabamentos Botânicos',
    desc: 'Toques delicados com pétalas desidratadas e elementos naturais.',
  },
];
