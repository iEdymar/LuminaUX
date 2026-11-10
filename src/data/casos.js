// Casos de empresas punidas ou obrigadas a mudar interfaces. Fonte: fichas revisadas no TCC.

export const casos = [
  {
    slug: 'amazon',
    empresa: 'Amazon',
    periodo: '2023–2025',
    orgao: 'Federal Trade Commission (FTC), EUA',
    resumo: 'Assinaturas do Prime sem consentimento claro e um cancelamento em quatro páginas.',
    penalidadeCurta: 'US$ 2,5 bilhões',
    aconteceu:
      'A FTC processou a Amazon em junho de 2023. Segundo a acusação, no checkout de compras comuns a empresa destacava a assinatura do Prime e dificultava a recusa, levando milhões de pessoas a assinar sem perceber. O botão de recusa usava textos como “Não, não quero frete grátis”. Para cancelar, o usuário passava pelo fluxo que a própria empresa chamava internamente de “Ilíada”: quatro páginas, seis cliques e quinze opções.',
    penalidade:
      'Acordo de US$ 2,5 bilhões em setembro de 2025: US$ 1 bilhão de multa civil e US$ 1,5 bilhão em reembolsos. A Amazon também se comprometeu a oferecer um botão claro para recusar o Prime, mostrar os termos da assinatura e permitir o cancelamento pelo mesmo meio usado para assinar.',
    padroes: ['contratacao-escondida', 'misdirection', 'dificil-cancelar'],
    licoes: [
      'As mudanças exigidas pela FTC funcionam como um checklist pronto de um fluxo de assinatura ético.',
      'Se entrar leva um clique e sair leva quinze opções, a assimetria já é a evidência.',
      'Texto de recusa que culpa o usuário foi citado na decisão: microcopy também pode gerar punição.',
    ],
    fontes: [
      { nome: 'FTC (25/09/2025)', url: 'https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon' },
      { nome: 'Axios', url: 'https://axios.com/2025/09/25/amazon-prime-ftc-settlement' },
    ],
  },
  {
    slug: 'epic-games',
    empresa: 'Epic Games',
    periodo: '2022',
    orgao: 'Federal Trade Commission (FTC), EUA',
    resumo: 'Compras acidentais no Fortnite e chat de voz ativado por padrão para crianças.',
    penalidadeCurta: 'US$ 520 milhões',
    aconteceu:
      'A FTC acusou a Epic de duas práticas no Fortnite. Na privacidade, coletou dados de menores de 13 anos sem consentimento dos pais e deixou o chat de voz e texto ativado por padrão. Nas compras, usou uma configuração de botões confusa que levava jogadores a comprar itens sem querer, com um único toque, e bloqueou o acesso ao conteúdo já comprado de quem contestou cobranças no banco.',
    penalidade:
      'US$ 520 milhões: US$ 275 milhões de multa civil por violar a COPPA, a lei de privacidade infantil dos EUA, e US$ 245 milhões em reembolsos aos consumidores.',
    padroes: ['pre-selecao', 'misdirection', 'contratacao-escondida'],
    licoes: [
      'Um toque não é consentimento: compras precisam de uma confirmação que o usuário entenda.',
      'O que vem ativado por padrão é uma decisão de design e precisa proteger o usuário.',
      'Punir quem reclama transforma um erro de interface num problema legal muito maior.',
    ],
    fontes: [
      { nome: 'NPR (19/12/2022)', url: 'https://www.npr.org/2022/12/19/1144119348/fortnite-epic-games-ftc-child-privacy-dark-patterns-deceptive-design' },
      { nome: 'TechCrunch', url: 'https://techcrunch.com/2022/12/19/ftc-fines-fortnite-maker-epic-games-520m-over-childrens-privacy-charges' },
    ],
  },
  {
    slug: 'adobe',
    empresa: 'Adobe',
    periodo: '2024–2026',
    orgao: 'Departamento de Justiça dos EUA, a pedido da FTC',
    resumo: 'Multa de cancelamento escondida no plano “anual, pago mensalmente”.',
    penalidadeCurta: 'US$ 150 milhões',
    aconteceu:
      'Em junho de 2024, o governo dos EUA processou a Adobe e dois de seus executivos. Segundo a acusação, o plano mais destacado do Creative Cloud era apresentado pelo preço mensal, enquanto a fidelidade de 12 meses e a multa por cancelamento antecipado, de 50% dos meses restantes, ficavam em letras pequenas ou atrás de links. Ao tentar cancelar, o usuário enfrentava várias páginas e ofertas de retenção.',
    penalidade:
      'Acordo de US$ 150 milhões anunciado em março de 2026: US$ 75 milhões em dinheiro e US$ 75 milhões em serviços gratuitos. O acordo depende de aprovação judicial, e a Adobe nega irregularidades.',
    padroes: ['custos-ocultos', 'misdirection', 'dificil-cancelar'],
    licoes: [
      'Preço que mostra só a parte boa é custo oculto, mesmo que os termos estejam em algum link.',
      'Executivos foram processados pessoalmente: decisões de interface podem gerar responsabilidade individual.',
      'Retenção não é proibida; o que gera punição é a retenção que impede a saída.',
    ],
    fontes: [
      { nome: 'Engadget (03/2026)', url: 'https://www.engadget.com/big-tech/adobe-agrees-to-pay-settlement-for-making-its-subscriptions-hard-to-cancel-210336635.html' },
      { nome: 'PetaPixel (17/06/2024)', url: 'https://petapixel.com/2024/06/17/justice-department-sues-adobe-for-hidden-fees-and-difficult-cancellations' },
    ],
  },
  {
    slug: 'meta',
    empresa: 'Meta',
    periodo: '2024',
    orgao: 'Autoridade Nacional de Proteção de Dados (ANPD), Brasil',
    resumo: 'Uso de posts públicos para treinar IA, com obstáculos para quem quisesse se opor.',
    penalidadeCurta: 'Suspensão e multa diária de R$ 50 mil',
    aconteceu:
      'Em junho de 2024, a Meta atualizou sua política de privacidade para usar posts, fotos e legendas públicos do Facebook e do Instagram no treinamento de IA generativa. Em 2 de julho de 2024, a ANPD suspendeu preventivamente a política no Brasil. Segundo a autoridade, a empresa não informou adequadamente os usuários e criou “obstáculos excessivos e não justificados” para quem quisesse se opor.',
    penalidade:
      'Suspensão preventiva da política, com multa diária de R$ 50 mil em caso de descumprimento. As conclusões eram preliminares.',
    padroes: ['privacy-zuckering'],
    licoes: [
      'Recusar precisa ser tão fácil quanto aceitar, também em privacidade.',
      'Mudar uma política sem avisar onde o usuário está não é transparência.',
      'A LGPD já dá base para questionar interfaces que dificultam o exercício de um direito.',
    ],
    fontes: [
      { nome: 'Teletime (02/07/2024)', url: 'https://teletime.com.br/02/07/2024/anpd-determina-suspensao-da-nova-politica-de-privacidade-da-meta/' },
      { nome: 'Voto da ANPD (PDF)', url: 'https://static.poder360.com.br/2024/07/voto-anpd-meta-IA.pdf' },
    ],
  },
  {
    slug: 'claro',
    empresa: 'Claro',
    periodo: '2026',
    orgao: 'Procon-MPMG, Minas Gerais',
    resumo: 'Cobrança de serviços digitais não contratados, com dificuldade para cancelar.',
    penalidadeCurta: 'R$ 6,7 milhões',
    aconteceu:
      'O Procon do Ministério Público de Minas Gerais concluiu que a Claro incluía nas faturas cobranças de serviços digitais e aplicativos que os clientes não tinham contratado de forma prévia e expressa, de R$ 20 a R$ 50 por mês. Os consumidores relataram dificuldade para cancelar, e os canais de atendimento afirmavam que os próprios clientes tinham feito as contratações.',
    penalidade: 'Multa de R$ 6,7 milhões, em decisão de 31/08/2026. A empresa ainda pode recorrer.',
    padroes: ['contratacao-escondida', 'dificil-cancelar'],
    licoes: [
      'Se a empresa não consegue provar que o usuário aceitou, o consentimento não existe.',
      'Uma área clara de “serviços ativos” no app previne o problema e reduz reclamações.',
      'Cobranças pequenas e recorrentes se acumulam em multas milionárias.',
    ],
    fontes: [
      { nome: 'MPMG (02/09/2026)', url: 'https://www.mpmg.mp.br/portal/menu/comunicacao/noticias/procon-mpmg-multa-claro-em-r-6-7-milhoes-por-cobranca-de-servicos-nao-contratados.shtml' },
    ],
  },
  {
    slug: 'c6-bank',
    empresa: 'C6 Bank',
    periodo: '2020–2021',
    orgao: 'Procon-SP e Senacon',
    resumo: 'Empréstimos consignados depositados sem pedido dos clientes.',
    penalidadeCurta: 'Mais de R$ 7 milhões',
    aconteceu:
      'Clientes receberam em conta empréstimos consignados que não tinham pedido nem autorizado, com desconto das parcelas, e não conseguiam resolver o problema com o banco. Entre agosto e novembro de 2020, as reclamações cresceram mais de 1.900%. No fim de 2020, a Senacon bloqueou as operações de consignado do banco.',
    penalidade: 'Multa de mais de R$ 7 milhões aplicada pelo Procon-SP, noticiada em janeiro de 2021, e bloqueio do consignado pela Senacon.',
    padroes: ['contratacao-escondida'],
    licoes: [
      'Em produtos financeiros, uma confirmação a mais é atrito que protege o usuário e a empresa.',
      'O crescimento de reclamações é um sinal de padrão enganoso, e é o dado que os órgãos acompanham.',
      'A consequência pode ir além da multa: aqui, o produto inteiro foi bloqueado.',
    ],
    fontes: [
      { nome: 'Forbes Brasil (01/2021)', url: 'https://forbes.com.br/negocios/2021/01/procon-multa-c6-bank-por-credito-sem-autorizacao-de-clientes/' },
      { nome: 'Tecnoblog (12/2020)', url: 'https://tecnoblog.net/comunidade/t/c6-bank-e-barrado-pela-senacon-de-vender-emprestimo-consignado/25669' },
    ],
  },
  {
    slug: '123-milhas',
    empresa: '123 Milhas',
    periodo: '2023',
    orgao: 'Senacon, Procons estaduais e MP-SP',
    resumo: 'Pacotes suspensos e reembolso oferecido só em vouchers fracionados.',
    penalidadeCurta: 'Multa de até R$ 13 milhões avaliada',
    aconteceu:
      'Em agosto de 2023, a 123 Milhas suspendeu os pacotes da linha Promo com embarque de setembro a dezembro. Em vez de devolver o dinheiro, ofereceu apenas vouchers, divididos em vários cupons e com uso de um por compra. A Senacon cobrou explicações e defendeu o reembolso em dinheiro, e o Ministério Público de São Paulo abriu inquérito. No fim de agosto, a empresa pediu recuperação judicial.',
    penalidade: 'A Senacon avaliou abrir processo e aplicar multa de até R$ 13 milhões.',
    padroes: ['dificil-cancelar'],
    licoes: [
      'O voucher pode ser uma opção, nunca a única saída.',
      'A etapa de reembolso também é design: é onde a confiança do usuário se confirma ou se perde.',
      'Produto com risco alto exige transparência proporcional antes da compra.',
    ],
    fontes: [
      { nome: 'InfoMoney (28/08/2023)', url: 'https://www.infomoney.com.br/?p=2226631' },
      { nome: 'Migalhas', url: 'https://www.migalhas.com.br/quentes/392182/senacon-notifica-e-da-dois-dias-para-123-milhas-prestar-esclarecimento' },
    ],
  },
  {
    slug: 'robinhood',
    empresa: 'Robinhood',
    periodo: '2020–2024',
    orgao: 'SEC, FINRA e Massachusetts, EUA',
    resumo: 'Fonte de receita omitida e gamificação para estimular operações de risco.',
    penalidadeCurta: 'Mais de US$ 140 milhões em três processos',
    aconteceu:
      'A SEC acusou a corretora de enganar clientes sobre sua principal fonte de receita, o pagamento por fluxo de ordens. A FINRA apontou informações falsas ou enganosas e a aprovação de clientes sem perfil para operar opções. Massachusetts acusou a empresa de usar gamificação, como confetes na tela e notificações, para estimular investidores inexperientes a negociar com frequência.',
    penalidade:
      'US$ 65 milhões à SEC (2020); US$ 70 milhões à FINRA (2021), a maior penalidade da história da FINRA; e US$ 7,5 milhões a Massachusetts (2024).',
    padroes: ['misdirection'],
    licoes: [
      '“Gratuito” exige explicar quem paga a conta.',
      'Celebração visual numa decisão financeira é um empurrão, não um feedback neutro.',
      'Em produtos financeiros, a interface precisa adequar a ferramenta ao nível de experiência do usuário.',
    ],
    fontes: [
      { nome: 'InvestmentNews (2021)', url: 'https://www.investmentnews.com/fintech/robinhood-to-pay-record-70-million-in-finra-settlement/208325' },
      { nome: 'Insurance Journal (2024)', url: 'https://www.insurancejournal.com/news/east/2024/01/19/756246.htm' },
    ],
  },
  {
    slug: 'hoteis-cma',
    empresa: 'Sites de reserva de hotel',
    periodo: '2019',
    orgao: 'Competition and Markets Authority (CMA), Reino Unido',
    resumo: 'Mensagens de pressão, hotéis esgotados nos resultados e taxas fora do preço.',
    penalidadeCurta: 'Compromissos formais de mudança, sem multa',
    aconteceu:
      'Após uma investigação, a CMA obteve compromissos de Expedia, Booking.com, Agoda, Hotels.com, ebookers e trivago para mudar suas práticas de venda. As mudanças atingiram mensagens de pressão sobre disponibilidade e popularidade, hotéis esgotados exibidos para apressar a reserva, descontos comparados a preços irrelevantes, taxas obrigatórias fora do preço inicial e rankings influenciados por comissão sem aviso.',
    penalidade:
      'Não houve multa. As empresas assumiram compromissos formais e tiveram até 1º de setembro de 2019 para mudar as interfaces. A CMA não concluiu que houve violação da lei.',
    padroes: ['urgencia-falsa', 'custos-ocultos'],
    licoes: [
      'Urgência só é ética quando é verdadeira e verificável.',
      'Mesmo sem multa, a intervenção obrigou um setor inteiro a mudar suas interfaces.',
    ],
    fontes: [
      { nome: 'CMA (06/02/2019)', url: 'https://www.gov.uk/government/news/hotel-booking-sites-to-make-major-changes-after-cma-probe' },
      { nome: 'Página do caso na CMA', url: 'https://www.gov.uk/cma-cases/online-hotel-booking' },
    ],
  },
];

/** @param {string} slug */
export function getCaso(slug) {
  const item = casos.find((c) => c.slug === slug);
  if (!item) throw new Error(`Caso não encontrado: ${slug}`);
  return item;
}
