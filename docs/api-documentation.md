# CifraManager - Documentação da API

## Visão Geral

Esta documentação descreve as funcionalidades e endpoints da aplicação CifraManager.

## Estrutura de Pastas

```
app/
├── page.tsx              # Página inicial
├── layout.tsx            # Layout principal
├── test/                 # Páginas de teste
│   └── page.tsx         # Busca de artista
├── revelacao/           # Páginas do Grupo Revelação
├── zeca-pagodinho/      # Páginas do Zeca Pagodinho
└── api/                 # Endpoints da API
    └── songs/           # API de músicas
```

## Funcionalidades Implementadas

### 1. Página de Busca de Artista (`/test`)

**Rota**: `/test`  
**Método**: GET  
**Descrição**: Interface minimalista estilo Google para busca de artistas específicos

**Características**:

- Design Google-style com barra de busca flutuante
- Tipografia elegante com logo "CifraManager"
- Ícones SVG integrados (busca, limpeza, envio)
- Estados visuais dinâmicos (foco, hover, disabled)
- Transições CSS suaves e animações
- Preview de resultados em tempo real
- Design totalmente responsivo

**Estados**:

- `artist`: String - nome do artista digitado
- `isFocused`: Boolean - controla estados visuais de foco
- Validação automática de campo vazio
- Estados de hover e transições dinâmicas

**Eventos**:

- `onChange`: Atualiza estado do artista
- `onSubmit`: Processa busca (extensível para API calls)

### 2. Páginas de Artistas

#### Grupo Revelação (`/revelacao`)

**Rota**: `/revelacao`  
**Descrição**: Listagem de músicas do Grupo Revelação

**Músicas disponíveis**:

- A Pureza da Flor
- Amor Sem Fim
- Baixa Essa Guarda
- Compasso do Amor
- Conselho
- Coração Radiante
- Deixa Acontecer
- Deixa Alagar
- Essência da Paixão
- Fala Baixinho (Shiii)
- Grades do Coração
- Novos Tempos
- Ô Queiroz
- Preciso Te Amar
- Primeira Estrela
- Só Depois
- Tá Escrito
- Talvez
- Trilha do Amor
- Velocidade da Luz

#### Zeca Pagodinho (`/zeca-pagodinho`)

**Rota**: `/zeca-pagodinho`  
**Descrição**: Listagem de músicas do Zeca Pagodinho

**Músicas disponíveis**:

- Água da minha sede
- Ainda é tempo de ser feliz
- Camarão que dorme a onda Leva
- Coração em desalinho
- Deixa a Vida Me Levar
- E outras...

## Componentes UI

### Interface Minimalista (v2.0+)

- **Barra de busca flutuante**: Design pill-shaped com sombras dinâmicas
- **SVG Icons**: Ícones integrados para busca, limpeza e envio
- **Estados visuais**: Transições suaves e feedback visual
- **Tipografia hierárquica**: Logo grande com pesos variados

### Card Components (v1.0 - Legado)

- `Card`: Container principal
- `CardHeader`: Cabeçalho do card
- `CardTitle`: Título do card
- `CardDescription`: Descrição do card
- `CardContent`: Conteúdo do card

### Outros Componentes

- `Sidebar`: Navegação lateral
- `HeroSection`: Seção hero da página inicial
- `CifraDisplay`: Exibição de cifras

## Tecnologias

### Frontend

- **Next.js 14**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **React Hooks**: Gerenciamento de estado

### Ferramentas de Desenvolvimento

- **ESLint**: Linting de código
- **PostCSS**: Processamento CSS
- **PNPM**: Gerenciador de pacotes

## Estrutura de Dados

### Artista

```typescript
interface Artist {
  name: string;
  songs: Song[];
}
```

### Música

```typescript
interface Song {
  title: string;
  artist: string;
  chords: string;
  lyrics: string;
  file?: string;
}
```

## Rotas Disponíveis

| Rota                     | Descrição         | Status |
| ------------------------ | ----------------- | ------ |
| `/`                      | Página inicial    | ✅     |
| `/test`                  | Busca de artista  | ✅     |
| `/revelacao`             | Grupo Revelação   | ✅     |
| `/revelacao/[song]`      | Música específica | ✅     |
| `/zeca-pagodinho`        | Zeca Pagodinho    | ✅     |
| `/zeca-pagodinho/[song]` | Música específica | ✅     |
| `/api/songs`             | API de músicas    | 🚧     |

**Legenda**: ✅ Implementado | 🚧 Em desenvolvimento | ❌ Não implementado

## Guias de Uso

### Para Desenvolvedores

1. **Adicionar nova página de artista**:

   ```bash
   mkdir app/[artist-name]
   touch app/[artist-name]/page.tsx
   ```

2. **Adicionar nova música**:

   - Criar arquivo `.txt` com a cifra
   - Criar pasta com slug da música
   - Adicionar `page.tsx` na pasta

3. **Estender funcionalidade de busca**:
   - Modificar `handleSubmit` em `/test/page.tsx`
   - Adicionar chamadas de API
   - Implementar navegação automática

### Para Usuários

1. **Buscar artista**: Acesse `/test` e digite o nome
2. **Navegar por músicas**: Use os links de artistas
3. **Visualizar cifras**: Clique em músicas específicas

## Próximos Passos

### Funcionalidades Planejadas

- [ ] API REST completa
- [ ] Sistema de favoritos
- [ ] Busca avançada
- [ ] Player de áudio
- [ ] Sistema de tags
- [ ] Comentários e avaliações

### Melhorias Técnicas

- [ ] Testes automatizados
- [ ] Documentação interativa (Storybook)
- [ ] PWA (Progressive Web App)
- [ ] SEO otimizado
- [ ] Performance monitoring

## Contribuição

### Setup do Ambiente

```bash
# Clone o repositório
git clone [repository-url]
cd cifra-manager

# Instale dependências
pnpm install

# Execute em desenvolvimento
pnpm dev
```

### Padrões de Código

- Use TypeScript para todos os componentes
- Siga convenções do Tailwind CSS
- Mantenha componentes pequenos e reutilizáveis
- Documente funções complexas

### Pull Requests

1. Crie branch feature/[nome-da-funcionalidade]
2. Implemente mudanças com testes
3. Atualize documentação
4. Submeta PR com descrição detalhada

## Changelog da Interface

### v2.0.0 - Interface Google-Style (Junho 2025)

**Página de Busca (`/test`)**:

- ✨ **Nova**: Interface minimalista inspirada no Google
- ✨ **Nova**: Barra de busca flutuante com formato pill
- ✨ **Nova**: Logo "CifraManager" com tipografia elegante
- ✨ **Nova**: Ícones SVG integrados (busca, limpeza, envio)
- ✨ **Nova**: Estados visuais dinâmicos com transições suaves
- ✨ **Nova**: Sombras responsivas ao foco e hover
- 🔄 **Mudança**: Removidos componentes Card tradicionais
- 🔄 **Mudança**: Estado `isFocused` adicionado para controle visual
- 🔄 **Mudança**: Background alterado de gray-50 para white puro
- ⚡ **Melhoria**: Performance otimizada com CSS transitions
- ♿ **Acessibilidade**: Navegação por teclado aprimorada

### v1.0.0 - Interface Card-Based (Original)

**Página de Busca (`/test`)**:

- 📦 **Original**: Design baseado em Card components
- 📦 **Original**: Layout centralizado com cartão elevado
- 📦 **Original**: Formulário tradicional com labels
- 📦 **Original**: Botão de busca padrão
- 📦 **Original**: Background gray-50
