# Página de Busca de Artista - Documentação Técnica

## Visão Geral

A página de teste (`/test`) é uma funcionalidade desenvolvida para permitir que usuários busquem artistas específicos através de uma interface simples e intuitiva.

## Localização do Arquivo

```
app/test/page.tsx
```

## Arquitetura do Componente

### Imports

```tsx
"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
```

### Estado do Componente

- `artist`: String que armazena o nome do artista digitado pelo usuário

### Funções Principais

#### `handleSubmit(e: React.FormEvent)`

- **Propósito**: Processa o envio do formulário
- **Parâmetros**: Evento de formulário React
- **Comportamento**:
  - Previne o comportamento padrão do formulário
  - Registra o artista no console
  - Ponto de extensão para funcionalidades futuras

## Interface do Usuário

### Estrutura Visual

```
┌─────────────────────────┐
│     Buscar Artista      │
│   (Título principal)    │
├─────────────────────────┤
│ Digite o nome do artista│
│ que você está procurando│
├─────────────────────────┤
│ Nome do Artista         │
│ [________________]      │
│ Ex: Grupo Revelação...  │
├─────────────────────────┤
│       [Buscar]          │
├─────────────────────────┤
│ Artista: [Nome digitado]│
└─────────────────────────┘
```

### Componentes UI Utilizados

- **Card**: Container principal com sombra e bordas arredondadas
- **CardHeader**: Seção do título e descrição
- **CardTitle**: Título principal da página
- **CardDescription**: Texto explicativo
- **CardContent**: Conteúdo principal do formulário

### Estilos e Classes CSS

#### Container Principal

```css
min-h-screen bg-gray-50 py-12 px-4
```

#### Card Wrapper

```css
max-w-md mx-auto
```

#### Input Field

```css
w-full px-4 py-3 border border-gray-300 rounded-lg
focus:ring-2 focus:ring-blue-500 focus:border-blue-500
transition-colors duration-200 text-gray-900 placeholder-gray-500
```

#### Submit Button

```css
w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400
disabled:cursor-not-allowed text-white font-medium py-3 px-4
rounded-lg transition-colors duration-200 focus:ring-2
focus:ring-blue-500 focus:ring-offset-2
```

## Funcionalidades

### Validação

- **Campo obrigatório**: Input marcado como `required`
- **Validação em tempo real**: Botão desabilitado quando campo está vazio
- **Trimming**: Espaços em branco são removidos para validação

### Interatividade

- **Estados de foco**: Anéis visuais quando elementos estão focados
- **Feedback visual**: Preview do artista digitado em tempo real
- **Estados de hover**: Mudanças de cor nos botões
- **Transições suaves**: Animações CSS para melhor UX

### Acessibilidade

- **Labels semânticos**: Associação correta entre labels e inputs
- **Estados de foco visíveis**: Indicadores claros de navegação por teclado
- **Contraste adequado**: Cores que atendem padrões de acessibilidade
- **Estrutura semântica**: HTML bem estruturado

## Pontos de Extensão

### 1. Integração com API

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch(`/api/artists/${encodeURIComponent(artist)}`);
    const data = await response.json();
    // Processar dados do artista
  } catch (error) {
    // Tratamento de erro
  }
};
```

### 2. Navegação Automática

```tsx
import { useRouter } from "next/navigation";

const router = useRouter();
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  router.push(`/artists/${encodeURIComponent(artist)}`);
};
```

### 3. Estado de Loading

```tsx
const [isLoading, setIsLoading] = useState(false);

// No botão:
disabled={!artist.trim() || isLoading}
```

### 4. Histórico de Buscas

```tsx
const [searchHistory, setSearchHistory] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSearchHistory((prev) => [artist, ...prev.slice(0, 4)]);
};
```

## Requisitos Técnicos

### Dependências

- React 18+
- Next.js 14+
- TypeScript
- Tailwind CSS
- Componentes UI customizados

### Compatibilidade

- **Navegadores**: Modernos (Chrome 90+, Firefox 88+, Safari 14+)
- **Dispositivos**: Desktop, tablet e mobile
- **Resolução**: Responsivo para todas as telas

## Testing

### Casos de Teste Sugeridos

1. **Teste de entrada vazia**: Verificar se botão está desabilitado
2. **Teste de entrada válida**: Verificar se preview aparece
3. **Teste de envio**: Verificar se console.log é executado
4. **Teste de responsividade**: Verificar em diferentes tamanhos
5. **Teste de acessibilidade**: Navegação por teclado

### Exemplo de Teste

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TestPage from "../page";

test("deve desabilitar botão quando input está vazio", () => {
  render(<TestPage />);
  const button = screen.getByRole("button", { name: /buscar/i });
  expect(button).toBeDisabled();
});
```

## Melhorias Futuras

1. **Autocomplete**: Sugestões de artistas baseadas em histórico
2. **Validação avançada**: Caracteres especiais e comprimento
3. **Internacionalização**: Suporte a múltiplos idiomas
4. **Persistência**: Salvar buscas no localStorage
5. **Analytics**: Tracking de buscas mais populares

## Manutenção

### Estrutura de Commits

- `feat: adicionar funcionalidade X`
- `fix: corrigir problema Y`
- `style: ajustar CSS Z`
- `docs: atualizar documentação`

### Code Review Checklist

- [ ] Acessibilidade verificada
- [ ] Responsividade testada
- [ ] TypeScript sem erros
- [ ] Performance adequada
- [ ] Documentação atualizada
