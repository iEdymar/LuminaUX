# LuminaUX

Site do TCC de Edimar Sousa (Design Digital, UFC Quixadá): um hub para profissionais de design reconhecerem,
evitarem e questionarem padrões enganosos em interfaces digitais.

Feito com [Astro](https://astro.build) 5, gera um site estático (só HTML, CSS e um pouco de JavaScript).

## Rodar no seu computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
npm install      # instala as dependências (uma vez)
npm run dev      # abre em http://localhost:4321 e atualiza enquanto você edita
npm run build    # gera o site final na pasta dist/
```

## Onde editar o conteúdo

Todo o texto fica em `src/data/`. Não é preciso mexer no código das páginas para trocar conteúdo.

| Arquivo | O que tem |
| --- | --- |
| `site.js` | Nome do hub, links do rodapé, data de atualização. Troque o nome aqui e ele muda no site todo. |
| `padroes.js` | As 7 fichas do acervo (sinais, exemplo, como evitar, leis, palavras de busca). |
| `principios.js` | Os 8 princípios de design ético. |
| `casos.js` | Os 9 casos de empresas punidas. |
| `leis.js` | Artigos do CDC, LGPD e decretos, em linguagem simples. |
| `ferramentas.js` | Perguntas do checklist e da árvore de decisão. |
| `biblioteca.js` | Referências e glossário. |
| `pesquisa.js` | Números do questionário (25 respostas). |

As telas de exemplo das três fichas completas estão em `src/components/TelaFicha.astro`, e a tela da página inicial
em `src/components/TelaHome.astro`.

## Publicar

### Opção recomendada: Vercel + GitHub (atualiza sozinho a cada mudança)

1. Crie um repositório no GitHub e envie esta pasta (sem `node_modules` e `dist`, que já estão no `.gitignore`).
2. Entre em [vercel.com](https://vercel.com) com a conta do GitHub e clique em **Add New → Project**.
3. Escolha o repositório. A Vercel reconhece o Astro sozinha (comando `npm run build`, pasta `dist`).
4. Clique em **Deploy**. Em cerca de um minuto o site fica no ar num endereço `.vercel.app`.

Depois disso, cada alteração enviada ao GitHub (inclusive editando um arquivo de `src/data/` pelo próprio site do
GitHub) publica uma nova versão automaticamente.

### Opção mais rápida: Netlify Drop (sem GitHub)

1. Rode `npm run build` (ou use a pasta `dist` já gerada que veio junto).
2. Abra [app.netlify.com/drop](https://app.netlify.com/drop) e arraste a pasta `dist` para a página.
3. O site fica no ar na hora. Para atualizar, gere o build de novo e arraste outra vez.

## Sistema visual

- **Cores:** azul `#0131CD` (fundos), branco `#EFEFEF` (textos), verde neon `#B9FC01` (destaques e marcações).
  Derivados: azul-fundo `#0127A4` (rodapé e superfícies) e suave `#C9D3F5` (texto secundário). Todas as
  combinações usadas passam no contraste AA.
- **Fontes:** Poppins (títulos) e Inter (textos), servidas pelo próprio site, sem depender do Google Fonts.
- **Elemento central:** a camada de inspeção. Marcações em neon apontam, nas telas de exemplo, onde está o padrão
  enganoso e onde está a alternativa ética, como numa revisão de design.
- **Acessibilidade:** navegação por teclado com foco visível, link para pular ao conteúdo, alvos de toque de 44 px,
  respeito à preferência de movimento reduzido. Verificado com axe em todas as páginas.

## Pendências de conteúdo

- Trocar as telas fictícias pelos prints reais do benchmark, quando estiver pronto.
- Confirmar se a multa da 123 Milhas foi aplicada e o desfecho do caso Meta na ANPD.
- Completar as referências marcadas como pendentes (DPAF 2026, Shadows in the Interface 2024).
