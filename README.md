# CifraManager - Organize suas Cifras

CifraManager é uma aplicação web moderna para gerenciar suas cifras de violão e ukulele. Este projeto foi desenvolvido com [Next.js](https://nextjs.org) e bootstrapped com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Funcionalidades

### Página Inicial com Busca Flutuante

A página inicial apresenta uma experiência moderna com **animação de hero** e **barra de busca flutuante** que aparece após a animação:

#### Características:

- **Hero Animation**: Seção principal com animação de opacidade após 3 segundos
- **Floating Search Bar**: Barra de busca que aparece de forma elegante após 4 segundos
- **Auto-completion**: Busca em tempo real com auto-completar para artistas e músicas
- **Navegação por teclado**: Setas, Enter e Escape para navegação completa
- **Design Glass-morphism**: Interface moderna com efeito de vidro e desfoque
- **Busca inteligente**: Procura em todos os artistas e músicas da aplicação
- **Indicadores visuais**: Badges coloridas distinguindo artistas de músicas
- **Responsive**: Funciona perfeitamente em todos os tamanhos de tela

### Página de Busca de Artista (`/test`)

A página de teste oferece uma interface avançada para busca de artistas com **exibição instantânea de resultados** e **busca avançada integrada**:

#### Características:

- **Interface Google-style**: Design minimalista inspirado no Google Search
- **Exibição de Resultados**: Mostra o primeiro resultado diretamente na página
- **Busca Avançada**: Widget Google Custom Search Engine integrado
- **Busca Inteligente**: Usa Google Custom Search API com fallbacks automáticos
- **Estados de Loading**: Animações de carregamento e feedback visual
- **Barra de busca flutuante**: Input estilo pill com ícones SVG e sombras dinâmicas
- **Atalhos de teclado**: Ctrl+Enter (ou Cmd+Enter) para busca rápida
- **Botões de ação**: "Abrir Cifra" e "Ver Mais Resultados"
- **Design responsivo**: Interface adaptável para mobile e desktop
- **Acessibilidade aprimorada**: Navegação por teclado e estados visuais claros

#### Como usar:

1. Navegue para `/test`
2. Digite o nome do artista na barra de busca (ex: "Grupo Revelação", "Zeca Pagodinho")
3. **Busca Simples**: Clique em "Buscar no Google" ou use Ctrl+Enter para ver o primeiro resultado
4. **Busca Avançada**: Clique em "Busca Avançada" para usar o widget Google CSE integrado
5. Veja resultados exibidos instantaneamente na página
6. Clique em "Abrir Cifra" para ir direto à música ou "Ver Mais Resultados" para busca completa

#### Estratégias de Busca:

1. **Google Custom Search API** (preferencial - requer configuração)
2. **Scraping direto do CifraClub** (fallback automático)
3. **Redirecionamento Google** (fallback final)

#### Tecnologias utilizadas:

- React Hooks (useState) para gerenciamento de estado
- Next.js API Routes para busca server-side
- Google Custom Search API (opcional)
- Fetch API para requisições assíncronas
- SVG icons para interface limpa
- CSS transitions e loading states
- Tailwind CSS para estilização responsiva
- TypeScript para tipagem e segurança

#### Configuração Opcional:

Para melhores resultados, configure as variáveis de ambiente:

**Para API de busca:**

```bash
# .env.local
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_CX=your_custom_search_engine_id_here
```

**Para widget Google CSE:**

1. Siga o guia em `docs/google-cse-setup.md`
2. Configure seu CX ID diretamente no código ou via variável de ambiente
3. O widget será carregado automaticamente ao clicar em "Busca Avançada"

```bash
# .env.local
GOOGLE_API_KEY=your_api_key
GOOGLE_CX=your_search_engine_id
```

#### Estrutura do componente:

```tsx
// Localização: app/test/page.tsx + app/api/search/route.ts
// Estado: artist (string), isFocused (boolean), searchResult (SearchResult | null), isLoading (boolean)
// Função: handleSubmit - busca e exibe primeiro resultado
// Interface: Barra flutuante + card de resultado + botões de ação + loading states
```

## 🎨 Recent Updates (v2.0.0)

### Enhanced Tab Block Detection & Highlighting 🎸

**Revolutionary guitar tab recognition with comprehensive notation support**

- **🎯 Advanced Pattern Recognition**: Detects all real-world guitar tab notation including hammer-ons, pull-offs, slides, bends, muted strings, and strumming patterns
- **🔍 Smart Block Identification**: Automatically identifies 6-line guitar tab blocks with gap tolerance for empty lines
- **✨ Visual Highlighting**: Clear red background highlighting for tab blocks with context lines
- **🎵 Complex Notation Support**: Handles multi-digit frets (10, 12, 15), special techniques (h, p, b, r, /, \), and arrows (↓↑)
- **🚀 Performance Optimized**: Fast regex-based detection with column-safe processing
- **♿ Context Aware**: Highlights lines above and below tab blocks for better visual context

#### Supported Tab Notation:

| Symbol        | Technique     | Example                |
| ------------- | ------------- | ---------------------- |
| `0-9, 10, 12` | Fret numbers  | `E\|--3--5--7--12--\|` |
| `x`           | Muted strings | `A\|--x--x--x--x--\|`  |
| `h`           | Hammer-on     | `E\|--3h5--\|`         |
| `p`           | Pull-off      | `E\|--5p3--\|`         |
| `b`           | Bend          | `G\|--7b9--\|`         |
| `r`           | Release       | `G\|--9r7--\|`         |
| `/\`          | Slides        | `E\|--3/5\3--\|`       |
| `~`           | Vibrato       | `E\|--3~~~--\|`        |
| `↓↑`          | Strumming     | Below tab blocks       |

#### Algorithm Features:

- **Minimum 6 Lines**: Only highlights complete guitar tab blocks (standard tuning)
- **Gap Tolerance**: Allows up to 2 empty lines within tab blocks
- **False Positive Prevention**: Excludes arrow-only strumming patterns
- **Edge Case Handling**: Works with tabs at file start/end and irregular formatting
- **Build Safe**: Enhanced algorithm maintains clean build process

### Artist Page Redesign

**Major architectural improvement with enhanced UI/UX**

- **🔄 Reusable Component Architecture**: All artist pages now use a single, maintainable `ArtistPage` component
- **🔍 Real-time Search**: Instant song filtering as you type
- **🎵 Modern UI Design**: Professional layout with numbered song entries, metadata display, and enhanced visual hierarchy
- **⚡ Performance Optimized**: 84% code reduction across artist pages with better loading states
- **♿ Accessibility Enhanced**: Improved screen reader support and keyboard navigation
- **📱 Fully Responsive**: Mobile-first design that works on all devices

#### New Artist Page Features:

- Artist descriptions and metadata (song count, last updated)
- Real-time search with result counter
- Professional loading states with animated spinners
- Enhanced song cards with hover effects and visual indicators
- Empty state handling with helpful messages
- Clear and intuitive search interface

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Documentação

Para informações mais detalhadas sobre funcionalidades específicas, consulte:

### 📋 Documentação Principal

- [`docs/test-page-v2.md`](docs/test-page-v2.md) - Documentação técnica atualizada da página de busca (UI Google-style)
- [`docs/ui-comparison.md`](docs/ui-comparison.md) - Comparação detalhada entre v1.0 e v2.0 da interface
- [`docs/test-page.md`](docs/test-page.md) - Documentação técnica original da página de busca
- [`docs/api-documentation.md`](docs/api-documentation.md) - Documentação completa da API e funcionalidades

### 🎸 Detecção de Tablatura

- [`docs/tab-block-detection-algorithm.md`](docs/tab-block-detection-algorithm.md) - Algoritmo completo de detecção de tablatura
- [`docs/tab-detection-quick-reference.md`](docs/tab-detection-quick-reference.md) - Guia rápido para desenvolvedores
- [`docs/cifra-display-api-documentation.md`](docs/cifra-display-api-documentation.md) - API do componente CifraDisplay
- [`docs/tab-detection-development-guide.md`](docs/tab-detection-development-guide.md) - Guia de desenvolvimento avançado

### 🔍 Console Logging & Debug

- [`docs/console-logging-documentation.md`](docs/console-logging-documentation.md) - Documentação completa do sistema de logs para Artist + Song Search
- [`docs/console-logging-quick-reference.md`](docs/console-logging-quick-reference.md) - Guia rápido para debugging com console logs
- [`docs/debug-cheat-sheet.md`](docs/debug-cheat-sheet.md) - Cheat sheet para desenvolvedores com comandos de debug e troubleshooting

### 🚀 Guias de Desenvolvimento

- **Para desenvolvedores**: Consulte `docs/test-page-v2.md` para implementação
- **Para debugging**: Use `docs/console-logging-quick-reference.md` para rastreamento de problemas
- **Para designers**: Consulte `docs/ui-comparison.md` para decisões de design
- **Para usuários**: A interface é autoexplicativa, mas veja exemplos na documentação

## Estrutura do Projeto

```
cifra-manager/
├── app/                  # Páginas e rotas do Next.js
│   ├── test/            # Página de busca de artista
│   ├── revelacao/       # Páginas do Grupo Revelação
│   ├── zeca-pagodinho/  # Páginas do Zeca Pagodinho
│   └── api/             # Endpoints da API
├── components/          # Componentes React reutilizáveis
│   └── ui/              # Componentes de interface
├── docs/                # Documentação técnica
├── lib/                 # Utilitários e helpers
└── public/              # Arquivos estáticos
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
