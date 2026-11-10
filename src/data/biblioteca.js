// Referências e glossário da Biblioteca.

export const referencias = [
  {
    grupo: 'Padrões enganosos',
    itens: [
      { autor: 'Brignull, H. (2023)', titulo: 'Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You', nota: 'O livro de quem criou o termo dark patterns, com a taxonomia atual e casos.', url: 'https://www.deceptive.design/' },
      { autor: 'Gray, C. M. et al. (2018)', titulo: 'The Dark (Patterns) Side of UX Design', nota: 'Organiza os padrões em cinco estratégias e discute o designer como agente ético.' },
      { autor: 'Mathur, A. et al. (2019)', titulo: 'Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites', nota: 'Encontrou padrões enganosos em mais de mil sites de compras, com urgência e escassez entre os mais comuns.' },
      { autor: 'Mathur, A.; Mayer, J.; Kshirsagar, M. (2021)', titulo: 'What Makes a Dark Pattern… Dark?', nota: 'Propõe atributos e lentes normativas para dizer quando um design é manipulador.', url: 'https://arxiv.org/abs/2101.04843v1' },
      { autor: 'Ahuja, S.; Kumar, J. (2022)', titulo: 'Conceptualizations of User Autonomy within the Normative Evaluation of Dark Patterns', nota: 'Analisa 151 dark patterns sob quatro dimensões de autonomia.' },
      { autor: 'Nelissen, L.; Funk, M. (2022)', titulo: 'Rationalizing Dark Patterns', nota: 'Mostra como profissionais justificam o uso de padrões enganosos em UX de privacidade.' },
    ],
  },
  {
    grupo: 'Ética do design',
    itens: [
      { autor: 'Papanek, V. (1971)', titulo: 'Design for the Real World', nota: 'Clássico sobre a responsabilidade social e moral do designer.' },
      { autor: 'Monteiro, M. (2019)', titulo: 'Ruined by Design', nota: 'Defende o designer como guardião dos direitos de quem usa o que ele projeta.' },
      { autor: 'Friedman, B.; Kahn, P.; Borning, A. (2006)', titulo: 'Value Sensitive Design and Information Systems', nota: 'Como considerar valores humanos, como autonomia e consentimento, desde o projeto.' },
      { autor: 'Berdichevsky, D.; Neuenschwander, E. (1999)', titulo: 'Toward an Ethics of Persuasive Technology', nota: 'Princípios éticos para tecnologias feitas para persuadir.' },
      { autor: 'Yablonski, J. (2019)', titulo: 'Humane by Design', nota: 'Princípios para produtos digitais que respeitam o tempo e a atenção das pessoas.', url: 'https://humanebydesign.com/' },
    ],
  },
  {
    grupo: 'Comportamento e decisão',
    itens: [
      { autor: 'Thaler, R. H.; Sunstein, C. R. (2009)', titulo: 'Nudge', nota: 'Apresenta a arquitetura de escolha e o poder das opções padrão.' },
      { autor: 'Sunstein, C. R. (2021)', titulo: 'Sludge', nota: 'Sobre o atrito que dificulta o que as pessoas querem fazer.' },
      { autor: 'Kahneman, D. (2011)', titulo: 'Rápido e Devagar', nota: 'Os dois sistemas de pensamento que os padrões enganosos exploram.' },
      { autor: 'Nielsen, J. (1994)', titulo: '10 Usability Heuristics for User Interface Design', nota: 'Inclui visibilidade do status do sistema e controle e liberdade do usuário.' },
    ],
  },
  {
    grupo: 'Privacidade',
    itens: [
      { autor: 'Cavoukian, A. (2009)', titulo: 'Privacy by Design: the 7 Foundational Principles', nota: 'Privacidade como configuração padrão, incorporada desde o projeto.' },
      { autor: 'Langheinrich, M. (2001)', titulo: 'Privacy by Design: Principles of Privacy-Aware Ubiquitous Systems', nota: 'Princípios como aviso, escolha, consentimento e recurso.' },
    ],
  },
  {
    grupo: 'Órgãos reguladores',
    itens: [
      { autor: 'FTC (2022)', titulo: 'Bringing Dark Patterns to Light', nota: 'Relatório da comissão de comércio dos EUA com categorias e recomendações.', url: 'https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf' },
      { autor: 'EDPB (2023)', titulo: 'Guidelines 03/2022 on Deceptive Design Patterns', nota: 'Diretrizes europeias sobre padrões enganosos em privacidade.', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en' },
      { autor: 'CMA e ICO (2023)', titulo: 'Harmful Design in Digital Markets', nota: 'Documento britânico sobre design prejudicial e boas práticas de arquitetura de escolha.' },
      { autor: 'OECD (2022)', titulo: 'Dark Commercial Patterns', nota: 'Panorama internacional com definição e respostas possíveis.', url: 'https://www.oecd.org/en/publications/2022/10/dark-commercial-patterns_9f6169cd.html' },
    ],
  },
];

export const glossario = [
  { termo: 'Padrão enganoso (deceptive pattern)', def: 'Escolha de interface que leva a pessoa a fazer algo que ela não faria se estivesse bem informada, em benefício de quem criou a interface. É o termo que Brignull adotou no lugar de dark pattern.' },
  { termo: 'Dark pattern', def: 'Nome original dos padrões enganosos, criado por Harry Brignull em 2010 e ainda muito usado na literatura.' },
  { termo: 'Arquitetura de escolha', def: 'A forma como as opções são apresentadas: ordem, destaque, padrão e textos. Ela sempre influencia a decisão, por isso precisa ser feita com cuidado.' },
  { termo: 'Nudge', def: 'Um empurrão na arquitetura de escolha que muda o comportamento sem proibir opções. É legítimo quando é transparente, fácil de recusar e ajuda quem decide.' },
  { termo: 'Sludge', def: 'Atrito colocado contra o interesse do usuário, como etapas extras para cancelar.' },
  { termo: 'Efeito padrão (default)', def: 'Tendência de manter a opção que já vem selecionada.' },
  { termo: 'Opt-in e opt-out', def: 'No opt-in, a pessoa escolhe ativamente participar. No opt-out, ela já está dentro e precisa agir para sair.' },
  { termo: 'Confirmshaming', def: 'Texto que culpa ou constrange quem recusa, como “Não, prefiro pagar mais caro”.' },
  { termo: 'Drip pricing', def: 'Preço revelado aos poucos, com taxas que surgem ao longo do fluxo.' },
  { termo: 'Roach motel', def: 'Nome antigo de Hard to Cancel: fácil de entrar, difícil de sair.' },
  { termo: 'Sistema 1 e Sistema 2', def: 'Os dois modos de pensamento descritos por Kahneman: o rápido e automático, e o lento e deliberado. Padrões enganosos tentam manter a decisão no Sistema 1.' },
  { termo: 'Aversão à perda', def: 'Perder pesa mais do que ganhar a mesma coisa. É o que torna a escassez falsa tão eficaz.' },
  { termo: 'Ancoragem', def: 'O primeiro número visto vira referência para julgar os seguintes.' },
  { termo: 'Custo afundado', def: 'Tendência de continuar algo porque já se investiu tempo ou esforço nele.' },
  { termo: 'Fadiga de consentimento', def: 'Cansaço causado por pedidos constantes de permissão, que leva a aceitar sem ler.' },
];
