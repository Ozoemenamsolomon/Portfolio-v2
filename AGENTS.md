# AGENTS.md — Instructions for AI Coding Agents

## Repository Overview

This is a single-file portfolio website for Solomon Obinna Ozoemenam, a Frankfurt-based DevOps & Automation Engineer. The entire site lives in **`index.html`** — there is no build step, no framework, and no separate CSS or JS files.

## Tech Stack

| Concern | Tool |
|---|---|
| Markup | Plain HTML5 |
| Styling | [Tailwind CSS v4 browser build](https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4) (CDN) |
| Custom theme | `@theme` block inside `<style type="text/tailwindcss">` at the top of `<head>` |
| Fonts | JetBrains Mono via Google Fonts |
| Interactivity | Vanilla JavaScript (inline `<script>` at the bottom of the file) |
| Internationalisation | Custom i18n via `data-i18n` attributes + a `translations` object in the inline script |

## Coding Conventions

### Styling
- **Always use Tailwind utility classes** for all styling changes. Only fall back to custom CSS (inside the `<style>` block) when Tailwind cannot express the rule (e.g. scrollbar styles, `@keyframes`).
- The custom Tailwind theme exposes two design tokens:
  - `bg-dark-bg` / `text-dark-bg` → `#030712`
  - `text-accent` / `border-accent` / `bg-accent` → `#22d3ee` (cyan)
- Responsive prefixes follow the standard Tailwind breakpoints (`sm:`, `md:`, `lg:`, etc.).
- Use arbitrary value syntax (`h-[811px]`, `bg-[#hex]`) when a precise value is needed.

### Internationalisation (i18n)
- Every user-visible text string must have a corresponding `data-i18n="<key>"` attribute on its element.
- Add the key/value pair to **both** the `en` and `de` objects inside the `translations` constant in the inline `<script>`.
- Keep keys namespaced by section, e.g. `hero.cta`, `booking.title`.

### Links & External Resources
- External links must always include `target="_blank"` and `rel="noopener noreferrer"`.
- The Google Calendar appointment scheduling URL is:  
  `https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pg1YXQcWOZ6lPDAuxfpmvF4aFYW5DLnOu5qRXONzgYG8488VOpU_B0R5ZZvDTVHttagZ9cGm9?gv=true`

### Sections & Structure
- Sections are separated by `border-t border-gray-800` and use `py-20 px-6` for consistent spacing.
- The page order (top → bottom): Header/Nav → Hero → About → Skills → Philosophy → Booking → Footer.
- Anchor IDs follow kebab-case (e.g. `id="booking"`).

## What NOT to Do
- Do **not** add a build tool, bundler, or package manager — the site is intentionally dependency-free.
- Do **not** extract CSS or JavaScript into separate files.
- Do **not** add inline `style=""` attributes; use Tailwind classes instead.
- Do **not** remove or skip `data-i18n` keys from both language objects when editing text.
