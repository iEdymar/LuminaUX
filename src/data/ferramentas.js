// Checklists, árvore de decisão e textos-modelo das ferramentas.

export const checklists = [
  {
    slug: 'rapido',
    nome: 'Revisão rápida de tela',
    descricao: 'Dez perguntas para qualquer tela que pede uma decisão do usuário.',
    itens: [
      { id: 'u1', texto: 'Todo prazo, contador ou aviso de estoque na tela é verdadeiro e verificável?', ficha: 'urgencia-falsa' },
      { id: 'u2', texto: 'Todas as caixas de aceite e os itens adicionais vêm desmarcados?', ficha: 'pre-selecao' },
      { id: 'u3', texto: 'O preço total, com taxas, frete e juros, aparece desde o primeiro preço exibido?', ficha: 'custos-ocultos' },
      { id: 'u4', texto: 'A opção de recusar tem o mesmo peso visual da opção de aceitar?', ficha: 'misdirection' },
      { id: 'u5', texto: 'O texto da recusa é neutro, sem culpar ou constranger o usuário?', ficha: 'misdirection' },
      { id: 'u6', texto: 'Cancelar ou sair exige o mesmo esforço e o mesmo canal que contratar ou entrar?', ficha: 'dificil-cancelar' },
      { id: 'u7', texto: 'Nada é contratado ou cobrado sem uma confirmação explícita, com preço e recorrência visíveis?', ficha: 'contratacao-escondida' },
      { id: 'u8', texto: 'A tela pede só os dados necessários e explica para que eles serão usados?', ficha: 'privacy-zuckering' },
      { id: 'u9', texto: 'Recusar uma permissão de dados é tão fácil quanto aceitar?', ficha: 'privacy-zuckering' },
      { id: 'u10', texto: 'Cada botão diz exatamente o que acontece ao clicar, como “Assinar e pagar R$ 19,90”?', ficha: 'contratacao-escondida' },
    ],
  },
  {
    slug: 'checkout',
    nome: 'Contratação e checkout',
    descricao: 'Para fluxos de compra, assinatura ou contratação de crédito, em fintechs e e-commerces.',
    itens: [
      { id: 'c1', texto: 'O frete e as taxas são calculados antes do cadastro e do pagamento?', ficha: 'custos-ocultos' },
      { id: 'c2', texto: 'Seguros, garantias e serviços adicionais aparecem desmarcados, com o preço ao lado?', ficha: 'pre-selecao' },
      { id: 'c3', texto: 'Uma assinatura, quando oferecida, tem um aceite separado da compra?', ficha: 'contratacao-escondida' },
      { id: 'c4', texto: 'Em crédito, o valor total, os juros e o Custo Efetivo Total aparecem com o mesmo destaque da parcela?', ficha: 'custos-ocultos' },
      { id: 'c5', texto: 'Há um resumo com preço, recorrência e condições antes da confirmação final?', ficha: 'contratacao-escondida' },
      { id: 'c6', texto: 'Fidelidade e multa de cancelamento aparecem junto do preço?', ficha: 'custos-ocultos' },
      { id: 'c7', texto: 'A pessoa pode salvar o carrinho ou a cotação para decidir depois, sem perder a oferta real?', ficha: 'urgencia-falsa' },
      { id: 'c8', texto: 'O passo de pagamento está livre de contadores e mensagens de pressão?', ficha: 'urgencia-falsa' },
    ],
  },
];

// Árvore de decisão: do que a pessoa vê na tela até a ficha.
export const arvore = {
  pergunta: 'O que mais chamou a sua atenção na tela?',
  opcoes: [
    {
      texto: 'Algo apressa a decisão: um contador, um “últimas unidades”, um “pessoas vendo agora”.',
      confirmar: 'Esse prazo ou esse estoque continuaria o mesmo se você recarregasse a página amanhã?',
      sim: { texto: 'Se o aviso é real e verificável, é informação, não manipulação. Confira se ele não está no passo de pagamento.', ficha: null },
      nao: { texto: 'É provável que seja urgência ou escassez falsa.', ficha: 'urgencia-falsa' },
    },
    {
      texto: 'Uma opção já vem marcada: um seguro, uma newsletter, um compartilhamento de dados.',
      confirmar: 'A opção marcada favorece o usuário, como uma configuração de privacidade mais protetora?',
      sim: { texto: 'Um padrão que protege o usuário é uma boa prática. Garanta que ele consiga mudar a escolha.', ficha: null },
      nao: { texto: 'É provável que seja uma pré-seleção enganosa.', ficha: 'pre-selecao' },
    },
    {
      texto: 'O preço muda ao longo do fluxo: aparecem taxas, frete, juros ou multa no fim.',
      confirmar: 'O valor total já estava visível, com o mesmo destaque, desde o primeiro preço?',
      sim: { texto: 'Se o total estava claro desde o início, não há custo oculto.', ficha: null },
      nao: { texto: 'É provável que sejam custos ocultos.', ficha: 'custos-ocultos' },
    },
    {
      texto: 'Sair é mais difícil do que entrar: cancelar, recusar ou pedir reembolso dá trabalho.',
      confirmar: 'Cancelar leva o mesmo número de passos, pelo mesmo canal, que contratar?',
      sim: { texto: 'Se a saída é tão simples quanto a entrada, o fluxo respeita a simetria.', ficha: null },
      nao: { texto: 'É provável que seja um fluxo difícil de cancelar.', ficha: 'dificil-cancelar' },
    },
    {
      texto: 'Uma opção chama toda a atenção e a outra quase some, ou o “não” constrange.',
      confirmar: 'Aceitar e recusar têm o mesmo peso visual e textos neutros?',
      sim: { texto: 'Se as opções são equivalentes, a hierarquia é honesta.', ficha: null },
      nao: { texto: 'É provável que seja misdirection.', ficha: 'misdirection' },
    },
    {
      texto: 'Algo é contratado ou cobrado junto com outra ação, como ao finalizar uma compra.',
      confirmar: 'A pessoa deu um aceite separado e explícito, vendo preço e recorrência?',
      sim: { texto: 'Com aceite separado e informado, a contratação é legítima.', ficha: null },
      nao: { texto: 'É provável que seja contratação escondida.', ficha: 'contratacao-escondida' },
    },
    {
      texto: 'A tela pede ou libera mais dados do que parece necessário.',
      confirmar: 'Recusar é tão fácil quanto aceitar, e a finalidade de cada dado está explicada?',
      sim: { texto: 'Com finalidade clara e recusa fácil, o pedido respeita o consentimento.', ficha: null },
      nao: { texto: 'É provável que seja Privacy Zuckering.', ficha: 'privacy-zuckering' },
    },
  ],
};
