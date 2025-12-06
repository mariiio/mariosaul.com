# mariosaul.com

Personal portfolio site with retro 8-bit Super Mario Bros theme.

## Tech Stack

- Gatsby 5, React 18, JavaScript (no TypeScript)
- CSS Modules + PostCSS (stage 0)
- nes.css for retro UI components
- React Context for state (sound/music settings)

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm run format` - Prettier

## Code Style

- No semicolons (Prettier)
- No prop-types validation
- Functional components with hooks
- Arrow functions without parens for single params

## Project Structure

- `src/components/` - React components (layout.js, hero.js, etc.)
- `src/styles/` - CSS Modules (*.module.css) and global.css
- `src/context/settings.js` - Sound/music settings context
- `src/hooks/use-sfx.js` - Sound effects hook
- `src/pages/` - Gatsby pages (index.js, 404.js)
- `src/images/` - PNG/JPG assets
- `src/sounds/` - Audio files (MP3/WAV)

## Patterns

**CSS Modules import:**
```js
import * as styles from "../styles/component.module.css"
<div className={styles.className}>
```

**Settings context:**
```js
const { soundEnabled, toggleSound } = useSettings()
```

**Sound effects:**
```js
const { playClick, playCoin } = useSfx()
```

## App Structure

Pages wrap content with `SettingsProvider` > `Layout` > `Block` components:
```js
<SettingsProvider>
  <Layout>
    <Block background="clouds">{/* sections */}</Block>
  </Layout>
</SettingsProvider>
```

## nes.css Classes

Retro UI via class names: `nes-btn`, `nes-container`, `nes-icon`, `nes-select`, `nes-badge`

## Animations

Scroll-triggered via IntersectionObserver + CSS classes:
- `.unanimatedSection` - Initial hidden state
- `.animateSection` - Fade in + slide up

## Naming

- Files: lowercase (`hero.js`, `hero.module.css`)
- Components: PascalCase exports (`export function Hero()`)
- CSS classes: camelCase in modules (`styles.gameBar`)

## Key Files

- `gatsby-config.js` - Site config, plugins, PWA manifest
- `src/context/settings.js` - localStorage-backed settings
- `src/hooks/use-sfx.js` - Audio caching and playback
- `src/styles/global.css` - CSS variables, animations, utility classes
