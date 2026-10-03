import React from 'react';

interface StoryCardItem {
  num: string;
  color: string;
  bgColor: string;
  title: string;
  description: string;
}

const STORY_ITEMS: StoryCardItem[] = [
  {
    num: '01',
    color: 'var(--color-sage)',
    bgColor: 'var(--color-sage-pale)',
    title: 'Ingredientes Puros',
    description:
      'Usamos apenas cera 100% vegetal (soja ou coco), pavio de algodão sem chumbo e fragrâncias importadas. Sem parafina, sem compromissos com a sua saúde ou a do ambiente.',
  },
  {
    num: '02',
    color: 'var(--color-gold-dark)',
    bgColor: '#FAF0DC',
    title: 'Feita com Intenção',
    description:
      'Cada vela é produzida manualmente, derramada pote a pote com atenção a cada detalhe. Não existe linha de montagem aqui. Existe dedicação e amor em cada peça.',
  },
  {
    num: '03',
    color: 'var(--color-terracotta)',
    bgColor: '#FDF0E8',
    title: 'Aromas que Acolhem',
    description:
      'Nossas pirâmides olfativas são composições cuidadosas que evoluem com o tempo — da primeira faísca até a última gota de cera. São memórias em forma de cheiro.',
  },
];

export const StoryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
      {STORY_ITEMS.map((item) => (
        <div
          key={item.num}
          className="bg-white/70 rounded-3xl p-8 lg:p-10 border border-white/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className="w-full mb-6 pb-5 border-b"
            style={{ borderColor: `${item.color}30` }}
          >
            <span
              className="font-display italic leading-none select-none"
              style={{ fontSize: '5rem', color: item.color, opacity: 0.35, lineHeight: 1 }}
            >
              {item.num}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-espresso)] mb-4 font-normal">
            {item.title}
          </h3>
          <p className="font-sans text-base sm:text-lg text-[var(--color-charcoal)] leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
