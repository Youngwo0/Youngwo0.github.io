# Almost Surely Design System

## 1. Atmosphere & Identity

Almost Surely should feel like a compact research archive laid out on a collaborative whiteboard: serious and readable, but brighter, more open, and less terminal-like. Reference cues come from Miro-style collaboration surfaces: white canvas, near-black text, blue interaction color, and restrained paper-like panels. The signature landing phrase is "Market, Measure, Model." set as a calm editorial thesis, supported by soft blue and cool off-white surfaces. Avoid dark SaaS gradients, muddy teal/brown palettes, heavy institutional gloom, and traffic-light color blocking.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/canvas | `--body-bg` | `#f6f7fb` | `#1b1c21` | Page surround and sidebar-adjacent canvas |
| Surface/main | `--main-bg` | `#fffefa` | `#202127` | Main reading surface |
| Surface/panel | `--ef-panel-bg` | `#ffffff` | `#282933` | Cards, panels, code headers |
| Surface/subtle | `--ef-panel-subtle` | `rgba(255, 255, 255, 0.72)` | `rgba(255, 255, 255, 0.055)` | Translucent landing panels and signal rows |
| Surface/hero | `--ef-hero-bg` | `linear-gradient(135deg, #ffffff 0%, #f8fbff 42%, #fff8d7 100%)` | `linear-gradient(135deg, #242630 0%, #1d1e24 58%, #2a2730 100%)` | Home hero collaborative research field |
| Surface/ambient | `--ef-ambient` | `rgba(91, 118, 254, 0.15)` | `rgba(141, 160, 255, 0.16)` | Soft blue depth behind hero |
| Surface/ambient warm | `--ef-ambient-warm` | `rgba(255, 216, 244, 0.42)` | `rgba(255, 198, 198, 0.12)` | Rose depth used only as a secondary hero glow |
| Surface/ambient teal | `--ef-ambient-teal` | `rgba(195, 250, 245, 0.36)` | `rgba(18, 58, 58, 0.22)` | Teal depth used only as a tertiary hero glow |
| Surface/inner ring | `--ef-inner-ring` | `rgba(255, 255, 255, 0.58)` | `rgba(255, 255, 255, 0.06)` | Subtle ring highlight on collaborative panels |
| Surface/paper | `--ef-surface-paper` | `#ffffff` | `#282933` | Default reusable panel fill |
| Surface/mist | `--ef-surface-mist` | `#eef5ff` | `#242b3d` | Home board rows and signal panels |
| Surface/line | `--ef-surface-line` | `#f7f9fd` | `#222631` | Subtle alternating panel surface |
| Surface/category header | `--ef-category-header-bg` | `#f7f9fd` | `#2c303b` | Category card headers |
| Surface/archive row | `--ef-archive-row-bg` | `#f7f9fd` | `transparent` | Archive alternating rows; dark mode avoids filled black blocks |
| Surface/math | `--ef-math-bg` | `#f1f5ff` | `#242a3e` | Display math blocks |
| Surface/code | `--ef-code-bg` | `#f7f8fc` | `#242632` | Code block overrides |
| Text/primary | `--text-color` | `#24262d` | `#eceef5` | Body text |
| Text/heading | `--heading-color` | `#17181d` | `#ffffff` | Headings and title text |
| Text/muted | `--text-muted-color` | `#626777` | `#aeb3c2` | Metadata, captions, secondary copy |
| Border/default | `--main-border-color` | `#e0e2e8` | `#3a3d48` | Dividers and ordinary borders |
| Border/strong | `--ef-border-strong` | `#c7cad5` | `#53596a` | Focused panels and table headers |
| Accent/primary | `--ef-accent` | `#4f67e8` | `#8da0ff` | Links, rules, active nav |
| Accent/strong | `--ef-accent-strong` | `#2a41b6` | `#c3ceff` | Hover states and emphasis |
| Accent/warm | `--ef-accent-warm` | `#746019` | `#ffe38a` | Metadata, field labels, yellow panels |
| Accent/rose | `--ef-accent-rose` | `#9d3c78` | `#ffb8e4` | Rare model/cadence emphasis |
| Accent/on color | `--ef-on-accent` | `#ffffff` | `#ffffff` | Text on filled action color |
| Focus | `--ef-focus-ring` | `#5b76fe` | `#b6c2ff` | Keyboard focus outline |

### Rules

- Blue is the primary action color. Home board panels should stay in a neutral paper and soft-blue range; avoid green/yellow/red panel sequences.
- The default view should read as a light collaborative canvas even when the system prefers dark mode; explicit dark mode is available through the sidebar toggle and persists as a user choice.
- The design uses white and cool off-white surfaces with ring borders; shadows are subtle and never the primary separator.
- Display math and code receive their own surfaces so formulas, prose, tables, and snippets are visually distinct.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | `clamp(2rem, 3.2vw, 3.25rem)` | 700 | 1.18 | 0 | Home hero |
| H1 | `2rem` | 700 | 1.25 | 0 | Post titles |
| H2 | `1.55rem` | 700 | 1.35 | 0 | Post sections |
| H3 | `1.25rem` | 700 | 1.45 | 0 | Subsections, cards |
| Body/lg | `1.08rem` | 400 | 1.85 | 0 | Article body |
| Body | `1rem` | 400 | 1.75 | 0 | UI body and lists |
| Body/sm | `0.9rem` | 400 | 1.6 | 0 | Preview excerpts |
| Caption | `0.78rem` | 600 | 1.45 | 0.04em | Metadata |
| Overline | `0.72rem` | 700 | 1.35 | 0.08em | Section labels |

### Font Stack

- Serif: `"Literata", "Noto Serif KR", Georgia, "Times New Roman", serif`
- Home sans: `"Pretendard", "IBM Plex Sans KR", "Inter", "Source Sans Pro", "Microsoft Yahei", sans-serif`
- Sans: `"IBM Plex Sans KR", "Inter", "Source Sans Pro", "Microsoft Yahei", sans-serif`
- Mono: `"JetBrains Mono", "SFMono-Regular", "Cascadia Code", "Liberation Mono", Menlo, Consolas, monospace`

### Rules

- Literata gives Latin text a research-journal tone; Noto Serif KR carries Korean long-form reading with matching weight.
- Pretendard is used for the home/landing page to make Korean hero copy, cards, and post previews feel cleaner and more product-like.
- IBM Plex Sans KR keeps navigation, tags, metadata, and controls more technical than decorative.
- JetBrains Mono is reserved for code, counters, formulas labels, and compact numerical metadata.
- Korean body copy can use the serif stack in posts, but compact UI chrome stays sans-serif.
- Avoid negative letter spacing for Korean display text; keep tracking at `0` or positive metadata tracking.
- Paragraphs should stay near 65-75 Korean/Latin mixed characters where the layout allows it.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| `--ef-space-1` | `0.25rem` | Tight inline spacing |
| `--ef-space-2` | `0.5rem` | Tags, icon gaps |
| `--ef-space-3` | `0.75rem` | Compact block spacing |
| `--ef-space-4` | `1rem` | Default component spacing |
| `--ef-space-5` | `1.25rem` | Card padding |
| `--ef-space-6` | `1.5rem` | Section inner spacing |
| `--ef-space-8` | `2rem` | Major component gaps |
| `--ef-space-10` | `2.5rem` | Home section rhythm |
| `--ef-space-12` | `3rem` | Post section rhythm |

### Grid

- Main layout follows Chirpy's sidebar/content/panel grid.
- Home content uses responsive grid tracks with a minimum card width of 220-260px.
- Mobile layout should collapse to a single column without horizontal scroll; display math and tables may scroll inside their own wrappers.

### Rules

- Full-width article text should not stretch visually just because the content column is wide.
- Category pillars can be card-like, but repeated cards must differ from featured article cards in hierarchy.

## 5. Components

### Home Hero

- **Structure**: Eyebrow, "Market, Measure, Model." title, Korean lead, and low-pressure action links on one uncluttered collaborative field. Do not add a Focus/Method/Cadence signal card or a second nested mini-board inside the hero; those read as decorative metadata rather than useful navigation.
- **Variants**: Default only.
- **Spacing**: Uses `--ef-space-6` to `--ef-space-12`; mobile collapses to a single column without horizontal scroll.
- **States**: Links use hover, active, and focus states.
- **Accessibility**: Real links with visible focus rings.
- **Motion**: Hover uses `transform`, border, and color only.

### Research Pillar

- **Structure**: Label/number, noun title, description, CTA. Pillars sit in their own section after the hero, not inside the hero container.
- **Variants**: Market, Measure, Model via content only.
- **Spacing**: `--ef-space-4` and `--ef-space-5`.
- **States**: Hover shifts by 2px and adds a soft ring/shadow; surfaces use neutral paper and soft-blue panels rather than green/yellow/red blocks.
- **Accessibility**: Entire block is a link with readable text.

### Article Card

- **Structure**: Category metadata, title, excerpt.
- **Variants**: Featured card and recent-list preview.
- **Spacing**: Featured cards are compact; recent previews are list-like and lower elevation.
- **States**: Title links underline on hover.
- **Accessibility**: Semantic `article` where possible.

### Math Block

- **Structure**: MathJax display container inside article body.
- **Variants**: Inline and display.
- **Spacing**: Display blocks use dedicated math surface and horizontal scroll.
- **States**: None.
- **Accessibility**: Preserve MathJax DOM; never replace formulas with images.

### Code Block

- **Structure**: Chirpy code header plus Rouge highlight.
- **Variants**: Inline code and block code.
- **Spacing**: Code blocks use compact, scrollable cool-neutral surfaces.
- **States**: Copy button retains focus/hover states.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | `140ms` | `ease-out` | Button and tag hover |
| Standard | `220ms` | `ease-in-out` | Card elevation and border changes |
| Emphasis | `360ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Optional page-level transitions |

### Rules

- Animate `transform`, `opacity`, and color only.
- Every interactive element must have a visible focus state.
- Respect `prefers-reduced-motion`.

## 7. Depth & Surface

### Strategy

Mixed, with a strict hierarchy: tonal shifts and borders first, very subtle shadows only for home hero and interactive article cards.

| Level | Value | Usage |
|-------|-------|-------|
| Border/default | `1px solid var(--main-border-color)` | Panels, cards, tables |
| Border/strong | `1px solid var(--ef-border-strong)` | Focused or active surfaces |
| Shadow/subtle | `0 1px 2px var(--ef-shadow)` | Resting cards |
| Shadow/lifted | `0 12px 32px var(--ef-shadow-strong)` | Hovered hero/pillar emphasis |

Math and code surfaces should feel inset into the article, not floating above it.
