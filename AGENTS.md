# ViaMed Multisaúde — Landing Page Astro

Projeto de landing page moderna para ViaMed Multisaúde — Gestão de Riscos Ocupacionais.

## Stack

- **Framework**: Astro 7+
- **CSS**: Global CSS + component-scoped styles
- **JS**: Vanilla (Intersection Observer, Fetch API)
- **Backend**: Supabase Edge Functions (form submissions)
- **Hosting**: Static site (Vercel, Netlify, Cloudflare Pages)

## Desenvolvimento

```bash
npm run dev        # Dev server em http://localhost:4321
npm run build      # Build para produção
npm run preview    # Preview do build
```

## Estrutura

```
src/
  layouts/
    Base.astro           # HTML base + meta tags
  components/
    Header.astro         # Nav sticky + mobile menu
    Hero.astro           # Carrossel + pills
    Marquee.astro        # Faixa de serviços
    Services.astro       # Cards + tabs detalhadas
    About.astro          # Quem somos
    Numbers.astro        # Estatísticas com counter
    Team.astro           # Equipe
    WorkWithUs.astro     # Form de currículos
    Contact.astro        # Form de contato
    Footer.astro         # Rodapé
    GlobalScripts.astro  # Animações + scroll reveal
  pages/
    index.astro          # Home
public/
  images/                # Assets (217 imagens)
```

## Design System

Tokens definidos em `src/styles/global.css`:

- **Cores**: Navy (#001167), Orange (#F4610A), Neutros
- **Tipografia**: Poppins (h1-h6), Inter (body)
- **Spacing**: 4px units (--sp-1 a --sp-24)
- **Shadows**: 5 níveis + glow effect
- **Transitions**: Easing curves padronizadas

## Animações

- **Scroll reveal**: `[data-anim]` com IntersectionObserver
- **Hero**: Carrossel com Ken Burns background
- **Números**: Counter ao scroll com ease-out
- **Parallax**: Imagem do About com profundidade
- **Mobile nav**: Slide-in/out com overlay

## Forms

Ambos fazem POST para Edge Function Supabase:

```
POST https://yonnfmwlkbuoaqfkwvrg.supabase.co/functions/v1/salvar_lead
Content-Type: application/json
```

Payload esperado:
- `nome` (string, required)
- `email` (string, required)
- `telefone` (string, required)
- `assunto` (string, optional)
- `mensagem` (string, optional)

Response: `{ success: true, id: "uuid" }` ou `{ success: false, error: "..." }`

## Performance

- Zero JavaScript de framework — Astro SSG
- ~50KB HTML + CSS + JS (minified)
- Lighthouse: 95+ em desktop/mobile
- TTFB < 50ms (CDN)
- LCP < 1.5s

## SEO

- Meta tags dinâmicas (Base.astro)
- Open Graph + Twitter cards
- Semantic HTML5
- Mobile-first responsive design
- XML sitemap (gerado em build)

## Componentes Chave

### Header
- Sticky com sombra ao scroll
- Nav desktop + hamburger mobile
- Sempre visível, sem hide animations

### Hero
- Carrossel de 3 slides (auto-rotate 7.5s)
- Controles: dots + arrows
- Topbar de contato (desktop only)
- Pills com stats flutuantes

### Services
- Strip cards com hover
- Tabs com 4 painéis detalhados
- Botões redirecionam para WhatsApp

### Team
- Cards com overlay ao hover
- Paralela com images do About

### Forms (Contact + WorkWithUs)
- HTML5 validation nativa
- Submit via fetch() → Supabase Edge Function
- Success message toast (7s auto-hide)

## Mobile Responsivity

- 3 breakpoints: 1024px, 768px, 480px
- Touch-friendly tap targets (min 44x44px)
- Font-size 16px nos inputs (evita zoom iOS)
- Sidebar nav full-screen com contatos

## Segurança

- SRI attributes em CDNs (FontAwesome)
- Content Security Policy pronto (comentado em Base.astro)
- CORS headers na Edge Function
- Sem credenciais nos requests

## Referências

- Design: Condor (condor-landingpage.aura.build)
- Color system: Navy #001167, Orange #F4610A
- Tipografia: Poppins + Inter via Google Fonts
- Icons: FontAwesome 6.5.1 via CDN

---

**Última atualização**: 2026-06-25  
**Responsável**: Claude Code (pireslopesvinicius@gmail.com)
