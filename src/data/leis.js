// Leis e normas brasileiras citadas no hub, em linguagem simples.
// Os artigos foram resumidos; confira sempre o texto oficial no link.

export const leis = [
  {
    slug: 'cdc',
    nome: 'Código de Defesa do Consumidor',
    sigla: 'CDC',
    numero: 'Lei nº 8.078/1990',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm',
    papel: 'Protege quem compra produtos e serviços, inclusive pela internet. É a principal base legal contra padrões enganosos em contratações, preços e cancelamentos.',
    artigos: [
      { artigo: 'Art. 6º, III', simples: 'O consumidor tem direito a informação adequada e clara sobre o produto, com preço, tributos e riscos.', padroes: ['custos-ocultos', 'misdirection'] },
      { artigo: 'Art. 6º, IV', simples: 'O consumidor deve ser protegido contra publicidade enganosa e métodos comerciais coercitivos ou desleais.', padroes: ['urgencia-falsa', 'misdirection'] },
      { artigo: 'Art. 31', simples: 'A oferta precisa trazer informações corretas, claras e precisas, inclusive sobre preço.', padroes: ['custos-ocultos'] },
      { artigo: 'Art. 37, § 1º', simples: 'É enganosa a informação total ou parcialmente falsa, ou que omite dados, capaz de induzir o consumidor ao erro.', padroes: ['urgencia-falsa'] },
      { artigo: 'Art. 39, III e parágrafo único', simples: 'É abusivo enviar produto ou fornecer serviço sem pedido prévio. O que foi enviado sem pedido é considerado amostra grátis.', padroes: ['pre-selecao', 'contratacao-escondida'] },
      { artigo: 'Art. 42, parágrafo único', simples: 'Quem é cobrado por um valor indevido tem direito a receber de volta o dobro do que pagou.', padroes: ['contratacao-escondida'] },
      { artigo: 'Art. 49', simples: 'Em compras fora do estabelecimento, como na internet, o consumidor pode desistir em até 7 dias.', padroes: ['dificil-cancelar'] },
    ],
  },
  {
    slug: 'lgpd',
    nome: 'Lei Geral de Proteção de Dados Pessoais',
    sigla: 'LGPD',
    numero: 'Lei nº 13.709/2018',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    papel: 'Define como dados pessoais podem ser coletados e usados. É a base contra interfaces que forçam ou escondem o compartilhamento de dados.',
    artigos: [
      { artigo: 'Art. 5º, XII', simples: 'Consentimento é uma manifestação livre, informada e inequívoca. Não existe consentimento presumido.', padroes: ['pre-selecao', 'privacy-zuckering'] },
      { artigo: 'Art. 6º', simples: 'O uso de dados deve seguir princípios como finalidade, necessidade e transparência: coletar só o necessário, para um fim informado.', padroes: ['privacy-zuckering'] },
      { artigo: 'Art. 8º, § 4º', simples: 'O consentimento deve ter finalidade determinada. Autorizações genéricas são nulas.', padroes: ['privacy-zuckering'] },
      { artigo: 'Art. 18', simples: 'O titular pode, entre outros direitos, revogar o consentimento e se opor ao uso dos seus dados.', padroes: ['privacy-zuckering'] },
    ],
  },
  {
    slug: 'decreto-7962',
    nome: 'Decreto do Comércio Eletrônico',
    sigla: 'Decreto 7.962',
    numero: 'Decreto nº 7.962/2013',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm',
    papel: 'Regulamenta o CDC para compras pela internet: o que o site precisa informar e como garantir o atendimento e o arrependimento.',
    artigos: [
      { artigo: 'Art. 2º', simples: 'O site deve informar com destaque o preço e discriminar despesas adicionais, como entrega ou seguro.', padroes: ['custos-ocultos'] },
      { artigo: 'Art. 4º', simples: 'Antes da contratação, o site deve apresentar um resumo do contrato, com destaque para as cláusulas que limitam direitos.', padroes: ['custos-ocultos', 'contratacao-escondida'] },
      { artigo: 'Art. 5º', simples: 'O fornecedor deve informar de forma clara como o consumidor pode exercer o direito de arrependimento.', padroes: ['dificil-cancelar'] },
    ],
  },
  {
    slug: 'decreto-11034',
    nome: 'Decreto do SAC',
    sigla: 'Decreto 11.034',
    numero: 'Decreto nº 11.034/2022',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/D11034.htm',
    papel: 'Regulamenta o atendimento ao consumidor, inclusive o pedido de cancelamento.',
    artigos: [
      { artigo: 'Art. 14, I', simples: 'O cancelamento deve ser aceito por todos os meios disponíveis para a contratação.', padroes: ['dificil-cancelar'] },
      { artigo: 'Art. 14, II', simples: 'O pedido de cancelamento tem efeito imediato, salvo quando houver processamento técnico necessário.', padroes: ['dificil-cancelar'] },
      { artigo: 'Art. 14, IV', simples: 'O consumidor recebe um comprovante do cancelamento, por correspondência ou meio eletrônico.', padroes: ['dificil-cancelar'] },
    ],
  },
];

/** @param {string} slug */
export function getLei(slug) {
  const item = leis.find((l) => l.slug === slug);
  if (!item) throw new Error(`Lei não encontrado: ${slug}`);
  return item;
}
