// Dados do questionário com profissionais de design (25 respostas, set.–out. 2026).

export const pesquisa = {
  total: 25,
  praticasVistas: [
    { label: 'Mensagens de urgência ou escassez', n: 18, ficha: 'urgencia-falsa' },
    { label: 'Dificultar ou prolongar o cancelamento', n: 16, ficha: 'dificil-cancelar' },
    { label: 'Etapas ou ações desnecessárias', n: 16, ficha: 'dificil-cancelar' },
    { label: 'Opções pré-selecionadas que favorecem a empresa', n: 15, ficha: 'pre-selecao' },
    { label: 'Taxas e condições escondidas até o fim', n: 13, ficha: 'custos-ocultos' },
    { label: 'Uma opção destacada e as outras apagadas', n: 12, ficha: 'misdirection' },
    { label: 'Linguagem ambígua ou confusa', n: 8, ficha: 'misdirection' },
    { label: 'Uma opção importante menos visível', n: 8, ficha: 'misdirection' },
  ],
  destaques: [
    { n: 9, texto: 'não dominam o tema, mas reconhecem as práticas quando elas são descritas' },
    { n: 20, texto: 'apontam riscos legais como a evidência mais útil para convencer a gestão' },
    { n: 10, texto: 'têm dificuldade de convencer stakeholders' },
  ],
};
