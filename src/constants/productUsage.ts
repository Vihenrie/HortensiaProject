export interface UsageSpec {
  burnTime: string;
  weight: string;
  wick: string;
  usage: string;
}

export const USAGE_INFO: Record<string, UsageSpec> = {
  aromatic: {
    burnTime: '30 a 40 horas',
    weight: '180 g',
    wick: '100% Algodão',
    usage:
      'Na primeira queima, deixe a vela acesa por pelo menos 2 horas até formar uma piscina líquida completa até a borda do vidro. Isso evita a formação de túnel e prolonga a vida da vela. Apare o pavio em 5 mm antes de cada novo acendimento.',
  },
  massage: {
    burnTime: '~8 horas',
    weight: '30 g',
    wick: '100% Algodão',
    usage:
      'Acenda a vela e deixe queimar por alguns minutos até derreter uma quantidade confortável de óleo. Apague a chama, aguarde cerca de 30 segundos para a temperatura ficar morna e agradável e despeje delicadamente sobre a pele para a massagem.',
  },
  custom: {
    burnTime: 'Conforme modelo',
    weight: 'Personalizado',
    wick: '100% Algodão',
    usage:
      'Instruções de uso detalhadas acompanham cada lembrança personalizada. Entre em contato para personalizar todos os detalhes.',
  },
};
