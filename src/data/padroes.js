// As 7 fichas do Acervo de padrões.
// "completa: true" = ficha com todas as seções e exemplo visual (as três fichas das jornadas).

export const padroes = [
  {
    slug: 'urgencia-falsa',
    tecnico: 'False Urgency / Fake Scarcity',
    comum: 'Criar urgência ou escassez falsa',
    categoria: 'Interferência na interface',
    completa: true,
    questionario: 18,
    resumo:
      'A interface inventa pressa ou escassez para apressar a decisão: um contador que reinicia, um “só restam 2” sem estoque real, um “12 pessoas estão vendo” sem contexto.',
    sinais: [
      'Contador regressivo que volta ao início quando a página é recarregada.',
      '“Últimas unidades” ou “só restam 2” sempre na tela, independentemente do estoque.',
      '“X pessoas estão vendo isto agora” sem dizer de onde vem o número.',
      'Oferta que “acaba hoje” todos os dias.',
    ],
    exemplo:
      'Uma tela de oferta mostra “Oferta termina em 09:58” e “Só restam 2 unidades!”. Ao recarregar a página, o contador volta para 10:00 e o estoque continua em 2.',
    evitar: [
      'Mostre prazo e estoque só quando forem reais e verificáveis.',
      'Prefira a data final da oferta (“válido até 30/11”) a um contador que pressiona.',
      'Dê contexto à prova social: “3 pessoas buscaram estas datas hoje”.',
      'Permita salvar o carrinho ou a cotação para decidir depois.',
    ],
    porque:
      'Quando algo parece estar acabando, damos mais valor a ele e pensamos menos antes de agir. A pressa empurra a decisão para o pensamento rápido e automático (o Sistema 1, de Kahneman), e a aversão à perda faz o medo de perder a oferta pesar mais do que a dúvida sobre precisar dela.',
    amenizar: [
      'Se a gestão quer manter a urgência, ligue o contador a um prazo real e fixo, que não reinicia.',
      'Tire a pressão do passo de pagamento: o contador pode ficar na vitrine, não no checkout.',
      'Não exiba itens esgotados só para apressar quem ainda está escolhendo.',
    ],
    principios: ['respeito-ao-tempo'],
    casos: ['hoteis-cma'],
    leis: [
      { lei: 'cdc', artigo: 'Art. 6º, IV', texto: 'Proteção contra publicidade enganosa e métodos comerciais coercitivos ou desleais.' },
      { lei: 'cdc', artigo: 'Art. 37, § 1º', texto: 'É enganosa a informação total ou parcialmente falsa, capaz de induzir o consumidor ao erro.' },
    ],
    checklist: 'u1',
    palavras: ['contador', 'cronômetro', 'timer', 'relógio', 'oferta acaba', 'acaba hoje', 'últimas unidades', 'só restam', 'restam', 'estoque', 'pessoas vendo', 'pessoas estão vendo', 'pressa', 'urgência', 'escassez', 'fomo', 'promoção relâmpago', 'tempo limitado'],
    fontes: ['Brignull (2023)', 'Mathur et al. (2019)', 'CMA (2019)'],
  },
  {
    slug: 'pre-selecao',
    tecnico: 'Pre-Selection',
    comum: 'Deixar opções pré-marcadas',
    categoria: 'Interferência na interface',
    completa: true,
    questionario: 15,
    resumo:
      'A interface decide pelo usuário marcando de antemão a opção que interessa à empresa, como um seguro no checkout ou o compartilhamento de dados, e conta que ele não vai perceber.',
    sinais: [
      'Seguro, garantia estendida ou “proteção” já marcados no carrinho.',
      'Caixa de newsletter ou de compartilhamento de dados que vem marcada.',
      'Doação, gorjeta ou plano mais caro selecionados por padrão.',
      'Configurações de privacidade abertas no primeiro acesso.',
    ],
    exemplo:
      'No checkout de um e-commerce, a linha “Proteção estendida por 12 meses + R$ 49,90” aparece com a caixa já marcada, logo acima do botão de pagar.',
    evitar: [
      'Deixe caixas de aceite e itens adicionais sempre desmarcados.',
      'Ofereça o adicional com o benefício e o preço explicados, e um botão para incluir.',
      'Quando houver uma opção padrão, escolha a que mais protege o usuário.',
    ],
    porque:
      'É o efeito padrão: a maioria das pessoas mantém o que já vem marcado, por inércia ou por entender que aquilo é o recomendado. Thaler e Sunstein mostram que o padrão é uma das ferramentas mais fortes da arquitetura de escolha, e por isso precisa favorecer quem decide.',
    amenizar: [
      'Se o adicional precisa aparecer, mostre o valor dele com destaque e deixe a remoção a um clique.',
      'Liste o adicional no resumo do pedido, separado do produto, antes do pagamento.',
    ],
    principios: ['consentimento-informado', 'autonomia'],
    casos: ['epic-games'],
    leis: [
      { lei: 'cdc', artigo: 'Art. 39, III e parágrafo único', texto: 'É abusivo fornecer produto ou serviço sem solicitação prévia; o que foi enviado sem pedido equipara-se a amostra grátis.' },
      { lei: 'lgpd', artigo: 'Art. 5º, XII, e art. 8º', texto: 'Consentimento é uma manifestação livre, informada e inequívoca; não pode ser presumido.' },
    ],
    checklist: 'u2',
    palavras: ['pré-marcado', 'pré marcado', 'pre selecionado', 'pré-selecionado', 'caixinha marcada', 'checkbox', 'marcado', 'seguro', 'garantia', 'garantia estendida', 'proteção', 'newsletter', 'padrão', 'default', 'opt-out', 'doação', 'gorjeta', 'opção já marcada'],
    fontes: ['Brignull (2023)', 'Thaler e Sunstein (2009)', 'Gray et al. (2018)'],
  },
  {
    slug: 'custos-ocultos',
    tecnico: 'Hidden Costs',
    comum: 'Esconder custos até o fim',
    categoria: 'Ocultação',
    completa: true,
    questionario: 13,
    resumo:
      'O preço exibido no começo não é o preço pago no fim. Taxas, juros, frete ou multas aparecem só nas últimas etapas, quando a pessoa já investiu tempo e tende a seguir em frente.',
    sinais: [
      'Taxa de serviço ou de conveniência que surge só no último passo.',
      'Frete revelado depois do cadastro.',
      'Parcela em destaque e valor total, juros ou CET em letras pequenas.',
      'Fidelidade e multa de cancelamento escondidas atrás de um link.',
    ],
    exemplo:
      'Um app de crédito anuncia “R$ 5.000 na sua conta hoje, em 12x de R$ 520”. O valor total de R$ 6.240, os juros e o Custo Efetivo Total só aparecem em um link “ver condições”, depois da confirmação.',
    evitar: [
      'Mostre o preço total, com taxas obrigatórias, desde o primeiro preço exibido.',
      'Em crédito, mostre lado a lado o que a pessoa recebe e o que ela paga no total.',
      'Calcule o frete antes do cadastro.',
      'Mostre fidelidade e multa junto do preço, não só na hora de cancelar.',
    ],
    porque:
      'O primeiro preço vira uma âncora: tudo o que aparece depois é comparado a ele. Além disso, quem já preencheu dados e escolheu opções sente que desistir desperdiça o esforço feito (o efeito do custo afundado) e tende a aceitar o valor final.',
    amenizar: [
      'Se a taxa não pode entrar no preço, mostre-a na primeira tela, ao lado do preço, com uma explicação curta.',
      'Leve o valor total para o resumo antes da confirmação, com o mesmo tamanho da parcela.',
    ],
    principios: ['transparencia'],
    casos: ['adobe', 'hoteis-cma'],
    leis: [
      { lei: 'cdc', artigo: 'Art. 6º, III, e art. 31', texto: 'Direito à informação adequada e clara sobre o produto, inclusive preço, tributos e riscos.' },
      { lei: 'decreto-7962', artigo: 'Art. 2º', texto: 'Sites de comércio eletrônico devem discriminar no preço as despesas adicionais, como entrega ou seguro.' },
    ],
    checklist: 'u3',
    palavras: ['taxa', 'taxas', 'taxa de serviço', 'taxa de conveniência', 'frete', 'preço final', 'valor total', 'custo escondido', 'custo oculto', 'juros', 'cet', 'parcela', 'multa', 'fidelidade', 'letras miúdas', 'drip pricing', 'esconder taxa', 'empréstimo', 'crédito'],
    fontes: ['Brignull (2023)', 'FTC (2022)', 'Mathur et al. (2019)'],
  },
  {
    slug: 'dificil-cancelar',
    tecnico: 'Hard to Cancel',
    tecnicoAntigo: 'Roach Motel',
    comum: 'Dificultar o cancelamento ou a saída',
    categoria: 'Obstrução',
    completa: false,
    questionario: 16,
    questionarioNota: 'e 16 de 25 viram etapas desnecessárias',
    resumo:
      'Entrar é fácil e sair é difícil. Assinar leva um clique; cancelar exige telefonemas, várias telas de retenção ou um caminho escondido nos menus.',
    sinais: [
      'Assinatura em um clique e cancelamento só por telefone ou chat.',
      'Várias telas de “tem certeza?” e ofertas antes de conseguir cancelar.',
      'Opção de cancelar escondida em menus de configurações.',
      'Reembolso oferecido só em crédito ou voucher.',
    ],
    exemplo:
      'A FTC descreveu o fluxo de cancelamento do Amazon Prime, que a própria empresa chamava de “Ilíada”: quatro páginas, seis cliques e quinze opções.',
    evitar: [
      'Permita cancelar pelo mesmo canal usado para contratar.',
      'Faça no máximo uma oferta de retenção, recusável em um clique.',
      'Faça o cancelamento valer na hora e envie um comprovante.',
    ],
    porque:
      'Cada passo a mais faz uma parte das pessoas desistir no meio do caminho. Thaler e Sunstein chamam esse atrito colocado contra o interesse do usuário de sludge.',
    amenizar: [
      'Se houver retenção, use uma tela só, com “Continuar cancelamento” no mesmo destaque da oferta.',
    ],
    principios: ['reversibilidade', 'simetria'],
    casos: ['amazon', 'adobe', 'claro', '123-milhas'],
    leis: [
      { lei: 'decreto-11034', artigo: 'Art. 14', texto: 'O cancelamento deve ser aceito por todos os meios disponíveis para a contratação, com efeitos imediatos e comprovante.' },
      { lei: 'cdc', artigo: 'Art. 49', texto: 'Direito de arrependimento em até 7 dias para compras feitas fora do estabelecimento, como na internet.' },
    ],
    checklist: 'u6',
    palavras: ['cancelar', 'cancelamento', 'assinatura', 'sair', 'excluir conta', 'desistir', 'reembolso', 'estorno', 'voucher', 'labirinto', 'ligar para cancelar', 'retenção', 'roach motel', 'obstrução', 'etapas', 'muitas etapas', 'difícil sair'],
    fontes: ['Brignull (2023)', 'FTC (2022)', 'Sunstein (2021)'],
  },
  {
    slug: 'misdirection',
    tecnico: 'Misdirection',
    comum: 'Desviar a atenção para a opção que interessa à empresa',
    categoria: 'Interferência na interface',
    completa: false,
    questionario: 12,
    questionarioNota: 'e 8 de 25 viram opções importantes menos visíveis',
    resumo:
      'O visual conduz o olhar para a escolha que a empresa quer e apaga a alternativa: um botão grande e colorido para aceitar, um link cinza para recusar, um texto que culpa quem diz não.',
    sinais: [
      '“Aceitar” em botão colorido e “recusar” em link pequeno e cinza.',
      'Texto de recusa que constrange: “Não, prefiro pagar mais caro”.',
      'Opção gratuita ou mais barata escondida entre os planos.',
      'Botão de fechar quase invisível.',
    ],
    exemplo:
      'Segundo a FTC, o checkout da Amazon destacava a assinatura do Prime, e a opção de recusa trazia textos como “Não, não quero frete grátis”.',
    evitar: [
      'Dê o mesmo peso visual, em tamanho e legibilidade, a ações opostas.',
      'Escreva a recusa com texto neutro: “Continuar sem o Prime”.',
      'Mostre todas as opções, inclusive a mais barata.',
    ],
    porque:
      'Lemos primeiro o que a hierarquia visual destaca e, com pressa, clicamos no que parece ser o caminho principal. O texto que culpa (confirmshaming) acrescenta um custo emocional a quem recusa.',
    amenizar: [
      'Se a opção principal precisa de destaque, mantenha a alternativa legível, clicável e com texto neutro.',
    ],
    principios: ['simetria', 'transparencia'],
    casos: ['amazon', 'adobe', 'epic-games'],
    leis: [
      { lei: 'cdc', artigo: 'Art. 6º, III e IV', texto: 'Direito à informação clara e proteção contra métodos comerciais desleais.' },
    ],
    checklist: 'u4',
    palavras: ['botão destacado', 'recusar escondido', 'link cinza', 'confirmshaming', 'culpa', 'não quero economizar', 'hierarquia', 'fechar', 'x pequeno', 'plano', 'aceitar', 'recusar', 'desviar', 'destaque', 'misdirection', 'cookies'],
    fontes: ['Brignull (2023)', 'Gray et al. (2018)', 'EDPB (2023)'],
  },
  {
    slug: 'contratacao-escondida',
    tecnico: 'Sneaking / Hidden Subscription',
    comum: 'Contratar ou cobrar sem consentimento claro',
    categoria: 'Ocultação',
    completa: false,
    questionario: null,
    questionarioNota: 'Não estava entre as opções do questionário; entra pelos casos reais.',
    resumo:
      'A pessoa sai de um fluxo com um serviço contratado ou uma cobrança recorrente que não pediu de forma clara: uma assinatura embutida na compra, um teste grátis que vira cobrança, um adicional que aparece na fatura.',
    sinais: [
      'Assinatura embutida no botão de finalizar a compra.',
      'Teste grátis que vira cobrança sem aviso antes da renovação.',
      'Serviço adicional que aparece na fatura sem ter sido pedido.',
      'Botão “Continuar” que também contrata alguma coisa.',
    ],
    exemplo:
      'Nos casos da Amazon, da Claro e do C6 Bank, clientes passaram a pagar por assinaturas, serviços ou empréstimos que não tinham contratado de forma expressa.',
    evitar: [
      'Peça um aceite separado e explícito para cada contratação.',
      'Escreva no botão a ação real: “Assinar por R$ 14,90 por mês”.',
      'Avise antes de um teste grátis virar cobrança.',
      'Mostre no app os serviços ativos, com a opção de cancelar ao lado.',
    ],
    porque:
      'Quem está concentrado em terminar uma tarefa presta pouca atenção ao resto da tela. Um item a mais no meio do fluxo passa despercebido.',
    amenizar: [
      'Se a oferta precisa estar no fluxo, coloque-a numa etapa própria, com o valor visível e a recusa a um clique.',
    ],
    principios: ['consentimento-informado', 'transparencia'],
    casos: ['amazon', 'c6-bank', 'claro', 'epic-games'],
    leis: [
      { lei: 'cdc', artigo: 'Art. 39, III', texto: 'É abusivo fornecer serviço sem solicitação prévia do consumidor.' },
      { lei: 'cdc', artigo: 'Art. 42, parágrafo único', texto: 'Quem é cobrado indevidamente tem direito à devolução em dobro do que pagou.' },
    ],
    checklist: 'u7',
    palavras: ['assinatura escondida', 'cobrança indevida', 'teste grátis', 'trial', 'renovação automática', 'serviço não contratado', 'fatura', 'cobrança', 'consignado', 'crédito sem pedir', 'empréstimo sem pedir', 'sneaking', 'contratar sem querer', 'compra acidental'],
    fontes: ['Brignull (2023)', 'FTC (2022)'],
  },
  {
    slug: 'privacy-zuckering',
    tecnico: 'Privacy Zuckering',
    comum: 'Levar o usuário a compartilhar mais dados do que pretendia',
    categoria: 'Ação forçada',
    completa: false,
    questionario: null,
    questionarioNota: 'Citado em uma resposta aberta do questionário (pedir dados demais no cadastro).',
    resumo:
      'A interface torna o compartilhamento de dados o caminho mais fácil e a recusa o mais difícil: configurações abertas por padrão, permissões genéricas no aceite dos termos e caminhos longos para se opor.',
    sinais: [
      'Privacidade aberta por padrão no primeiro acesso.',
      'Recusar o uso de dados exige várias telas; aceitar, um clique.',
      'Permissões de dados embutidas no aceite dos termos de uso.',
      'Mudança no uso dos dados sem aviso direto ao usuário.',
    ],
    exemplo:
      'Em 2024, a ANPD suspendeu a política da Meta que usava posts públicos para treinar IA, apontando falta de informação adequada e “obstáculos excessivos” para quem quisesse se opor.',
    evitar: [
      'Configure a privacidade no nível mais protetor por padrão.',
      'Peça cada permissão no momento em que ela for necessária, com a finalidade explicada.',
      'Torne recusar tão fácil quanto aceitar.',
      'Avise mudanças no uso dos dados onde o usuário está.',
    ],
    porque:
      'Ler políticas e ajustar configurações dá trabalho, e o usuário quer apenas usar o serviço. Com muitos pedidos de consentimento, as pessoas passam a aceitar no automático (a fadiga de consentimento).',
    amenizar: [
      'Se a coleta é necessária, explique por quê e permita revogar depois, num lugar fácil de achar.',
    ],
    principios: ['consentimento-informado', 'prevencao-de-danos'],
    casos: ['meta'],
    leis: [
      { lei: 'lgpd', artigo: 'Art. 6º', texto: 'Princípios de finalidade, necessidade e transparência no uso de dados pessoais.' },
      { lei: 'lgpd', artigo: 'Art. 8º, § 4º', texto: 'O consentimento deve ter finalidade determinada; autorizações genéricas são nulas.' },
      { lei: 'lgpd', artigo: 'Art. 18', texto: 'O titular pode revogar o consentimento e se opor ao tratamento dos seus dados.' },
    ],
    checklist: 'u8',
    palavras: ['dados', 'dados pessoais', 'privacidade', 'cookies', 'permissão', 'compartilhar', 'rastrear', 'rastreamento', 'consentimento', 'lgpd', 'termos', 'termos de uso', 'cadastro', 'dados demais', 'localização', 'opt-out', 'ia', 'treinar ia'],
    fontes: ['Brignull (2023)', 'EDPB (2023)', 'Cavoukian (2009)'],
  },
];

export const categorias = ['Interferência na interface', 'Ocultação', 'Obstrução', 'Ação forçada'];

/** @param {string} slug */
export function getPadrao(slug) {
  const item = padroes.find((p) => p.slug === slug);
  if (!item) throw new Error(`Padrão não encontrado: ${slug}`);
  return item;
}
