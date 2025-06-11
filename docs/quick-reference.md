# CifraManager - Quick Reference

## 🚀 Desenvolvimento

### Executar o projeto

```bash
pnpm dev
```

### Estrutura de rotas

- `/` - Página inicial
- `/test` - Busca de artista (Google-style UI)
- `/revelacao` - Músicas do Grupo Revelação
- `/zeca-pagodinho` - Músicas do Zeca Pagodinho

## 🎨 Interface v2.0 - Busca de Artista

### Estados do componente

```tsx
const [artist, setArtist] = useState("");
const [isFocused, setIsFocused] = useState(false);
```

### Classes CSS principais

```css
/* Container */
min-h-screen bg-white flex flex-col items-center justify-center

/* Barra de busca */
rounded-full border transition-all duration-200
shadow-md hover:shadow-lg

/* Input */
w-full py-4 pl-12 pr-16 text-lg bg-transparent
```

### Ícones SVG usados

- 🔍 **Busca**: `M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`
- ❌ **Limpar**: `M6 18L18 6M6 6l12 12`
- ➡️ **Enviar**: `M13 7l5 5-5 5M6 12h12`

## 📱 Responsividade

### Breakpoints

- **Mobile**: Padding lateral automático
- **Tablet**: max-w-2xl
- **Desktop**: Centralizado com espaçamento

### Características mobile

- Tamanhos de toque adequados (min 44px)
- Tipografia escalável
- Estados visuais claros

## ⚡ Performance

### Otimizações implementadas

- CSS transitions hardware-accelerated
- Estados condicionais para re-renders mínimos
- SVG icons inline (sem requests extras)

### Métricas alvo

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🛠️ Extensões Comuns

### Adicionar autocomplete

```tsx
const [suggestions, setSuggestions] = useState<string[]>([]);
```

### Loading state

```tsx
const [isSearching, setIsSearching] = useState(false);
```

### Histórico de buscas

```tsx
const [recentSearches, setRecentSearches] = useState<string[]>([]);
```

## 🔧 Debugging

### Estados visuais

- **Normal**: `shadow-md border-gray-200`
- **Focused**: `shadow-lg border-gray-300`
- **Hover**: `hover:shadow-lg`

### Console logs úteis

```tsx
console.log("Artist:", artist);
console.log("Is Focused:", isFocused);
```

## 📋 Checklist de Deploy

- [ ] Performance testada
- [ ] Responsividade verificada
- [ ] Acessibilidade validada
- [ ] Cross-browser testado
- [ ] Documentação atualizada

## 🎯 Links Úteis

- [Documentação Técnica](docs/test-page-v2.md)
- [Comparação de Versões](docs/ui-comparison.md)
- [API Documentation](docs/api-documentation.md)

---

_Atualizado: Junho 2025 | Versão: 2.0_
