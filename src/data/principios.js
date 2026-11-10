// Os 8 princípios de design ético (texto da pesquisa do Edimar, organizado para o hub).

export const principios = [
  {
    slug: 'autonomia',
    nome: 'Autonomia do usuário',
    frase: 'Quem decide é o usuário, não a interface.',
    texto: [
      'Respeitar a autonomia é preservar a capacidade da pessoa de definir seus objetivos e agir sem ser coagida, enganada ou manipulada. Uma interface respeita a autonomia quando garante quatro condições:',
    ],
    lista: [
      ['Agência', 'poder refletir antes de decidir.'],
      ['Liberdade de escolha', 'ter opções reais e acessíveis.'],
      ['Controle', 'determinar o que o sistema faz.'],
      ['Independência', 'decidir sem compulsões ou pressões externas.'],
    ],
    textoFinal: [
      'É o princípio mais presente na literatura sobre dark patterns. Ahuja e Kumar (2022) analisaram 151 dark patterns e identificaram 25 estratégias que violam essas quatro dimensões. Dark patterns ferem a autonomia quando restringem alternativas, escondem consequências ou induzem decisões que a pessoa não tomaria se estivesse bem informada.',
    ],
    pratica: [
      'Mostre todas as alternativas relevantes, inclusive a de não fazer nada.',
      'Não use culpa ou constrangimento para empurrar uma escolha.',
      'Não penalize quem recusa.',
      'Evite fluxos que levam à ação por padrão.',
    ],
    combate: 'todas',
    base: 'Ahuja e Kumar (2022); Gray et al. (2018).',
  },
  {
    slug: 'transparencia',
    nome: 'Transparência',
    frase: 'As regras do jogo ficam visíveis antes, durante e depois da decisão.',
    texto: [
      'Informações que pesam na decisão, como preço total, cobranças recorrentes, renovação automática, taxas e uso de dados, aparecem no campo de visão e na linguagem do usuário, e não em notas de rodapé ou textos de baixo contraste. Persuadir de forma legítima pressupõe fatos completos. O usuário nunca deve ser surpreendido por uma ação do sistema ou por um custo que não pôde prever, como propõem a heurística de visibilidade do status do sistema, de Nielsen, e o princípio do design honesto, de Dieter Rams.',
      'O framework DPAF (2026) divide a transparência em quatro dimensões:',
    ],
    lista: [
      ['Informacional', 'revelar custos, consequências e uso de dados no momento da decisão.'],
      ['Visual', 'fazer a hierarquia da tela refletir o peso da consequência.'],
      ['Linguística', 'evitar duplas negações, linguagem manipuladora e confirmshaming.'],
      ['Procedural', 'garantir passos simétricos entre ações opostas.'],
    ],
    pratica: [
      'O preço da primeira tela é o preço pago no fim; taxas e impostos aparecem desde o início.',
      'Avisos importantes ficam no ponto de decisão, não em letras miúdas.',
      'Use linguagem simples, sem dupla negação nem termos jurídicos obscuros.',
      'Escreva no botão a ação literal: “Assinar e pagar R$ 19,90” em vez de “Continuar”.',
      'Evite rótulos que constrangem a recusa, como “Não, não quero economizar”.',
    ],
    combate: ['custos-ocultos', 'contratacao-escondida', 'misdirection'],
    base: 'Nielsen (1994); Rams, “bom design é honesto”; DPAF (2026).',
  },
  {
    slug: 'consentimento-informado',
    nome: 'Consentimento informado',
    frase: 'Aceitar só vale quando a pessoa entende o que está aceitando.',
    texto: [
      'O consentimento não pode ser presumido, embutido em caixas pré-marcadas ou obtido por meio de interfaces assimétricas. No Value Sensitive Design, Friedman e colegas definem cinco critérios para que ele seja válido:',
    ],
    lista: [
      ['Divulgação', 'explicar com honestidade os benefícios e os riscos.'],
      ['Compreensão', 'a pessoa de fato entende o que leu.'],
      ['Voluntariedade', 'a decisão não é forçada por bloqueio de tela ou coação.'],
      ['Competência', 'a pessoa tem condições de decidir.'],
      ['Concordância expressa', 'o aceite é uma ação clara, e não um silêncio.'],
    ],
    textoFinal: [
      'Soma-se a eles a distração mínima: não cansar o usuário com pop-ups e fluxos exaustivos até que ele aceite no piloto automático. O consentimento também é contínuo e pode ser revogado a qualquer momento. Langheinrich inclui aviso, escolha e consentimento entre seus princípios de design para privacidade, e Cavoukian, no Privacy by Design, defende a privacidade como configuração padrão.',
    ],
    pratica: [
      'Peça cada permissão no momento em que ela for necessária, e não todas de uma vez.',
      'Deixe as caixas de aceite sempre desmarcadas: silêncio não é consentimento.',
      'Separe o aceite dos termos de uso das permissões de dados e de publicidade.',
      'Explique a finalidade, quem recebe os dados e por quanto tempo.',
      'Permita recusar sem perder as funções essenciais.',
    ],
    combate: ['pre-selecao', 'privacy-zuckering', 'contratacao-escondida'],
    base: 'Friedman, Kahn e Borning (2006); Langheinrich (2001); Cavoukian (2009).',
  },
  {
    slug: 'simetria',
    nome: 'Simetria de escolha',
    frase: 'Ações opostas têm o mesmo peso e exigem o mesmo esforço.',
    texto: [
      '“Aceitar” e “Recusar”, “Assinar” e “Cancelar”, “Compartilhar” e “Não compartilhar” precisam ter peso visual, número de cliques e facilidade de acesso equivalentes. Quando o “sim” é um botão colorido e o “não” é um link cinza camuflado ou uma jornada de dez etapas, a interface deixa de ser neutra. Na economia comportamental, esse atrito colocado contra o interesse do usuário tem nome: sludge (Thaler e Sunstein). O DPAF (2026) usa a simetria da arquitetura de escolha, a equidade visual entre ações e a clareza linguística como critérios de auditoria.',
      'A simetria trata do momento da decisão. O que acontece depois dela é tema da reversibilidade.',
    ],
    pratica: [
      'Dê o mesmo destaque visual, em tamanho e legibilidade, a ações opostas.',
      'Nunca esconda o botão de recusa.',
      'Cancelar não pode exigir mais passos do que contratar.',
      'Teste os fluxos com usuários para medir o esforço e o número de cliques.',
    ],
    combate: ['misdirection', 'dificil-cancelar'],
    base: 'Thaler (2018); Sunstein (2021); DPAF (2026); Shadows in the Interface (2024).',
  },
  {
    slug: 'reversibilidade',
    nome: 'Reversibilidade',
    frase: 'Toda decisão pode ser desfeita, sem punição.',
    texto: [
      'Enquanto a simetria trata do momento da escolha, a reversibilidade trata do depois. O usuário precisa conseguir desfazer uma ação, mudar de ideia ou interromper um processo sem penalidades desproporcionais. Isso vale para cancelar, pedir estorno, revogar um consentimento e excluir dados. Langheinrich chama esse princípio de recurso (recourse): oferecer caminhos de correção, contestação e cancelamento. Nielsen o descreve como controle e liberdade do usuário: sempre uma “saída de emergência” clara.',
      'A regra é de espelhamento: a porta de saída é tão larga, visível e rápida quanto a porta de entrada.',
    ],
    pratica: [
      'Ofereça o cancelamento no mesmo canal da contratação.',
      'Permita revogar o consentimento a qualquer momento.',
      'Envie um comprovante de cancelamento ou de revogação.',
      'Ofereça a opção de desfazer em ações comuns.',
      'Evite penalidades desproporcionais para quem desiste.',
    ],
    combate: ['dificil-cancelar'],
    base: 'Langheinrich (2001); Nielsen (1994); Friedman, Kahn e Borning (2006).',
  },
  {
    slug: 'respeito-ao-tempo',
    nome: 'Respeito ao tempo e à atenção',
    frase: 'A interface não cria pressa para apressar a decisão.',
    texto: [
      'Contadores regressivos, alertas de “últimos itens” e notificações insistentes criam uma ansiedade artificial que transforma uma decisão consciente em impulso. O framework Humane by Design, de Jon Yablonski, defende interfaces finitas, que respeitam o tempo e a atenção das pessoas. Tristan Harris, do Center for Humane Technology, chama atenção para o “sequestro da atenção” por produtos digitais. Mathur et al. (2019) encontraram mensagens de urgência e escassez entre os padrões mais comuns em sites de compras.',
    ],
    pratica: [
      'Use urgência e escassez só quando forem reais: o contador termina quando a oferta termina, e o “últimos itens” reflete o estoque de verdade. Se o tempo zera e a oferta continua, a interface está mentindo.',
      'Permita salvar o carrinho, a cotação ou o progresso para decidir depois.',
      'Não repita pedidos que o usuário já recusou.',
      'Não use recompensas visuais, como confetes e sons, para estimular decisões de risco.',
    ],
    combate: ['urgencia-falsa'],
    base: 'Yablonski (Humane by Design); Harris (Center for Humane Technology); Mathur et al. (2019).',
  },
  {
    slug: 'prevencao-de-danos',
    nome: 'Prevenção de danos',
    frase: 'Antes de lançar, pergunte o que pode dar errado para quem usa.',
    texto: [
      'Interfaces devem ser projetadas para prever e reduzir impactos negativos, e não apenas para aumentar conversão e engajamento. Os danos podem ser financeiros, como assinaturas indesejadas e taxas ocultas; de privacidade, como coleta excessiva de dados; ou psicológicos, como ansiedade, culpa e pressão para agir. Exercícios como o Consequence Scanning ajudam a mapear riscos previsíveis antes do lançamento, com atenção especial a públicos vulneráveis, como crianças, idosos e pessoas em dificuldade financeira.',
      'Aqui o atrito pode ser um aliado. Uma confirmação a mais protege o usuário em ações destrutivas ou de alto risco, desde que nunca seja usada para dificultar uma saída.',
    ],
    pratica: [
      'Avalie os riscos antes de lançar uma funcionalidade.',
      'Use atrito positivo, como uma confirmação ou a digitação da senha, em ações destrutivas ou de alto risco financeiro, como excluir a conta ou contratar um empréstimo.',
      'Não explore vulnerabilidades cognitivas ou emocionais.',
      'Acompanhe sinais de dano: arrependimento, reclamações e cancelamentos.',
    ],
    combate: ['privacy-zuckering', 'contratacao-escondida'],
    base: 'Friedman, Kahn e Borning (2006); Shadows in the Interface (2024); Doteveryone (Consequence Scanning).',
  },
  {
    slug: 'responsabilidade',
    nome: 'Responsabilidade do designer',
    frase: 'Quem desenha a escolha também responde por ela.',
    texto: [
      'Designers não são executores passivos do modelo de negócio. Desenhar a arquitetura de uma escolha é um ato de poder que influencia comportamentos. Gray et al. (2018) mostram que dark patterns são decisões éticas embutidas no processo de design, e Nelissen e Funk (2022) mostram como a pressão por metas pode normalizar práticas manipulativas entre profissionais. Monteiro (2019) descreve o designer como um guardião (gatekeeper) dos direitos do usuário, que avalia os efeitos previsíveis do que cria e recusa artifícios manipulativos. Berdichevsky e Neuenschwander (1999) já defendiam que quem cria tecnologia persuasiva responde pelos resultados previsíveis do seu uso.',
    ],
    pratica: [
      'Inclua critérios éticos desde o início do projeto, e não só na revisão final.',
      'Documente os trade-offs entre conversão e bem-estar do usuário.',
      'Faça uma revisão ética antes de cada lançamento.',
      'Crie indicadores de saúde do usuário, além de retenção e receita.',
    ],
    combate: 'todas',
    base: 'Gray et al. (2018); Nelissen e Funk (2022); Monteiro (2019); Berdichevsky e Neuenschwander (1999).',
  },
];

/** @param {string} slug */
export function getPrincipio(slug) {
  const item = principios.find((p) => p.slug === slug);
  if (!item) throw new Error(`Princípio não encontrado: ${slug}`);
  return item;
}
