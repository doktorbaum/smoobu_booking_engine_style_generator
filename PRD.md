# Product Requirements Document
## Smoobu Booking Engine Style Generator

**Version:** 0.1 (Draft)
**Author:** Jonas Baum
**Date:** 2026-03-11
**Status:** Draft – pending review

---

## 1. Overview

### 1.1 Product Summary

The Smoobu Booking Engine Style Generator is a visual CSS editor that allows Smoobu customers to create a custom look and feel for their embedded booking engine — without writing a single line of code. Users configure styles through a clean visual interface, see their changes reflected in a live preview of their actual booking engine, and copy the generated CSS with one click to paste directly into the Smoobu settings.

### 1.2 Design Philosophy

The tool's interface is inspired by **Dieter Rams' principles of good design**: functional, unobtrusive, precise, and built on a rigorous grid. Visual decoration is reduced to zero. Every element earns its place. Typography is used as the primary hierarchy signal. The interface itself demonstrates that good design is as little design as possible.

---

## 2. Goals & Success Criteria

### 2.1 Primary Goals

- Reduce the time it takes a Smoobu customer to style their booking engine from hours to minutes
- Make CSS customization accessible to non-technical users
- Produce valid, clean CSS that works reliably inside the Smoobu iframe

### 2.2 Non-Goals (v1)

- Account creation, authentication, or persistent theme storage
- Multi-language support (English only)
- Direct API integration with Smoobu (CSS is always copied manually)
- Mobile-optimized editor interface (desktop-first)

### 2.3 Success Metrics

- A user can go from blank slate to copied CSS in under 5 minutes
- Generated CSS renders correctly in the Smoobu booking engine iframe with no manual edits required
- The tool requires zero explanatory onboarding text to use

---

## 3. Users & Context

### 3.1 Primary User

**Smoobu customers** managing short-term rental properties who want their booking engine to match their website's visual identity. They range from non-technical vacation rental owners to small agency operators.

**Key characteristics:**
- Not developers; may not know what CSS is
- Want visual control, not code control
- Work on desktop/laptop

### 3.2 Initial Rollout

- **Phase 1:** Internal Smoobu tool (used by Smoobu team to assist customers)
- **Phase 2:** Public tool hosted on a Smoobu subdomain (e.g., `styles.smoobu.com`)

---

## 4. Core User Flow

```
1. User arrives at the tool
        ↓
2. User pastes their booking engine iframe code into an input field
        ↓
3. The live preview renders their actual booking engine inside the tool
        ↓
4. User selects a pre-defined template as a starting point (optional)
        ↓
5. User adjusts individual style controls in the left panel
        ↓
6. Changes appear in the preview iframe in real time (CSS injected into iframe)
        ↓
7. User clicks "Copy CSS" — the full generated CSS is copied to clipboard
        ↓
8. User pastes CSS into Smoobu: Kernfunktionen → Buchungssystem → Einstellungen → CSS
```

---

## 5. Features & Requirements

### 5.1 Iframe Setup

| # | Requirement |
|---|---|
| F-01 | On first load, display a prominent input field asking the user to paste their booking engine iframe embed code |
| F-02 | Parse and render the pasted iframe using the `BookingToolIframe.initialize()` script |
| F-03 | Store the iframe URL/ID in browser session state so the user doesn't need to re-paste on every visit |
| F-04 | Allow the user to change/reset their iframe at any time |

### 5.2 Pre-Defined Templates

Three starting templates are available. Selecting a template instantly applies its CSS variable values to all controls.

| Template | Description |
|----------|-------------|
| **Minimal** | Off-white background, black text, no border colors, subtle grey borders, 4px radius, default neutral palette |
| **Modern** | High-contrast, bold primary color (#3b4aff default), white cards, sharp corners (2px radius), strong borders |
| **Warm** | Earthy tones, amber/terracotta primary button, rounded corners (12px), warm grey text and borders |

- Selecting a template does not lock any controls; everything remains individually editable after selection
- The current template is visually indicated (underline or dot, not a heavy highlight)

### 5.3 Style Controls

All controls map directly to Smoobu CSS custom properties (`:root` variables) or direct selectors. Changes are applied to the live preview in real time.

#### 5.3.1 Colors

| Control | CSS Variable | Description |
|---------|-------------|-------------|
| Primary button color | `--button-color-primary` | Background of CTA buttons ("Verfügbarkeit prüfen", "Jetzt buchen!") |
| Secondary button color | `--button-color-secondary` | Text color on primary buttons; background of secondary buttons |
| Headline color | `--font-color-headlines` | Property name, page title |
| Body text color | `--font-color-black` | General readable text |
| Label color | `--font-color-label` | Form labels (Anreise, Abreise, Gäste) |
| Icon color | `--font-color-icons` | Font Awesome icons |
| Error color | `--font-color-error` | Validation error messages |
| Border color | `--border-color-default` | Default border on inputs and containers |
| Card border color | `--border-color-container` | Border on apartment cards |
| Input border color | `--border-color-input` | Border on form inputs |
| Background (body) | Direct: `body { background }` | Page/iframe background |
| Card background | Direct: `.apartmentInfoBox { background }` | Background of apartment cards |

All color inputs use a color picker with a hex input field alongside it.

#### 5.3.2 Shape

| Control | CSS Variable | Description |
|---------|-------------|-------------|
| Corner rounding | `--border-radius` | Applied to all borders, inputs, buttons, and cards |
| Border width | `--border-width` | Thickness of all borders |

Corner rounding is controlled by a **labeled slider** (0px – 24px) with a live numeric display. Common presets (Sharp: 0, Subtle: 4px, Rounded: 8px, Pill: 24px) are shown as small clickable chips below the slider.

#### 5.3.3 Typography

| Control | Output | Description |
|---------|--------|-------------|
| Font family | `@import` + `body { font-family }` | Curated list of ~12 Google Fonts (e.g., Inter, Roboto, Lato, Playfair Display, Source Sans Pro, Merriweather, Montserrat, Nunito, Open Sans, Raleway, DM Sans, Crimson Text) |

Font is selected via a dropdown. A preview of the font name is rendered in the font itself.

#### 5.3.4 Visibility

| Control | Output | Description |
|---------|--------|-------------|
| Hide header | `header.background-color { display: none !important }` | Toggle to hide the booking engine header bar |
| Hide "Back to properties" button | `.navbar-brand { display: none !important }` | Toggle to hide the back-navigation button |

Shown as simple labeled toggles (on/off).

### 5.4 Live Preview

- The user's actual booking engine renders in an iframe inside the tool
- CSS is injected into the iframe's `<head>` on every change, within ~100ms of any control interaction
- The preview panel is as large as possible — ideally ≥ 60% of the viewport width
- A toggle allows switching between **desktop** and **mobile** preview width
- A subtle label or badge in the corner reads "Live Preview" to make clear this is their real booking engine

**CSS injection method:** After the iframe loads, inject a `<style>` tag into `iframe.contentDocument.head` with the generated CSS. On each control change, update the `<style>` tag's content.

> Note: Cross-origin iframe restrictions may apply. If `booking.smoobu.com` and the tool are on different origins, `contentDocument` access will be blocked. This is a key technical risk — see Section 8.

### 5.5 CSS Output

- A **"Copy CSS"** button is always visible in the UI (pinned to the top or bottom of the control panel)
- Clicking it copies the full generated CSS to clipboard
- After copying, the button briefly shows a checkmark/confirmation state ("Copied!")
- The generated CSS is also shown in a read-only code block (monospaced, syntax-highlighted) that the user can scroll and read

**CSS output format:**

```css
/* Generated by Smoobu Style Generator */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

:root {
  --button-color-primary: #3b4aff;
  --button-color-secondary: #ffffff;
  --font-color-headlines: #1a1a1a;
  --font-color-black: #333333;
  --font-color-label: #9a9a9a;
  --font-color-icons: #9a9a9a;
  --font-color-error: #f45b69;
  --border-color-default: #ced4da;
  --border-color-container: #ced4da;
  --border-color-input: #ced4da;
  --border-radius: 5px;
  --border-width: 1px;
}

body {
  font-family: 'Inter', sans-serif;
  background: transparent;
}

/* Only include overrides that differ from Smoobu defaults */
```

Only variables that differ from Smoobu's defaults are output, keeping the CSS minimal.

---

## 6. UI Layout

### 6.1 Overall Structure

```
┌─────────────────────────────────────────────────────────────┐
│  SMOOBU STYLE GENERATOR                    [Copy CSS]       │
├───────────────────────┬─────────────────────────────────────┤
│                       │                                     │
│   CONTROLS            │   LIVE PREVIEW                      │
│                       │                                     │
│   Templates           │   [ Desktop | Mobile ]              │
│   ○ Minimal           │                                     │
│   ○ Modern            │   ┌─────────────────────────────┐   │
│   ● Warm              │   │                             │   │
│                       │   │   [Smoobu Booking Engine]   │   │
│   ─────────────────   │   │                             │   │
│                       │   │                             │   │
│   Colors              │   └─────────────────────────────┘   │
│   Primary Button  ●   │                                     │
│   Secondary       ●   │   CSS Output                        │
│   Headlines       ●   │   ┌─────────────────────────────┐   │
│   Body text       ●   │   │ :root {                     │   │
│   Labels          ●   │   │   --button-color-primary:…  │   │
│   Borders         ●   │   │ }                           │   │
│   Card bg         ●   │   └─────────────────────────────┘   │
│                       │                                     │
│   Shape               │                                     │
│   Rounding [──●──]    │                                     │
│   Border width [─●─]  │                                     │
│                       │                                     │
│   Typography          │                                     │
│   Font [Inter ▾]      │                                     │
│                       │                                     │
│   Visibility          │                                     │
│   Header      [ON ]   │                                     │
│   Back button [OFF]   │                                     │
└───────────────────────┴─────────────────────────────────────┘
```

### 6.2 Design Principles (Dieter Rams)

- **Layout:** Strict 8px grid. Two-column: narrow control panel (~320px), wide preview (remaining viewport)
- **Typography:** One typeface for the UI itself (Inter or similar neutral grotesque). Clear size scale: labels at 11px uppercase tracked, values at 14px, section titles at 12px uppercase
- **Color palette for UI:** White, #f5f5f5, #e0e0e0, #1a1a1a. No decorative color.
- **Controls:** Color pickers are compact (24×24px swatch + hex field). Sliders are thin with a precise dot thumb. No gradient fills, no shadows, no rounded panels.
- **Spacing:** Generous. Each section breathes. Controls are not cramped.
- **Iconography:** None, or only where functionally necessary (copy icon next to "Copy CSS")

---

## 7. Technical Architecture

### 7.1 Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS or lightweight framework (TBD) |
| Hosting | Supabase (static hosting or Supabase Edge Functions) |
| Fonts | Google Fonts API |
| No backend | The tool is fully client-side; no data is sent to a server |

### 7.2 Key Modules

- **IframeManager** – handles parsing the pasted embed code, rendering the iframe, and injecting the `<style>` tag
- **StyleState** – holds the current values of all controls; triggers CSS regeneration on any change
- **CSSGenerator** – converts StyleState into valid CSS string output
- **TemplateLibrary** – defines the three templates as named StyleState presets
- **ClipboardManager** – handles the copy-to-clipboard action with feedback state

### 7.3 CSS Injection Strategy

**Primary approach:** Inject a `<style id="smoobu-custom">` tag into `iframe.contentDocument.head`. On each style change, update `styleTag.textContent`.

**Fallback (if cross-origin blocked):** Display a live CSS code panel only (no visual injection). The user can preview by pasting into Smoobu directly. Show a clear explanation of why preview is unavailable.

> This is the highest-risk technical item in v1. Must be validated against the actual Smoobu iframe origin early in development.

---

## 8. Risks & Open Questions

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Cross-origin iframe blocks live preview CSS injection | Medium | High | Tool and booking engine will both be on smoobu.com subdomains — coordinate with Smoobu to enable cross-subdomain access (e.g. `document.domain` or `postMessage` API); fallback: proxy approach |
| Smoobu CSS architecture changes break selectors | Low | Medium | Document selectors used; pin CSS reference version |
| Google Fonts blocked in iframe | Low | Low | Fall back to system font stack |
| User pastes malformed iframe code | Medium | Low | Parse and validate; show helpful error message |

> **Note on CSS delivery:** Smoobu's custom CSS field (Kernfunktionen → Buchungssystem → Einstellungen → CSS) injects user CSS inline into the iframe server-side. The generated CSS from this tool is pasted there and works without any cross-origin concerns. The cross-origin risk above applies only to the **live preview** feature inside this tool, which needs to inject CSS into the iframe via JavaScript in real time.

---

## 9. Out of Scope (v1)

- User accounts or saved themes
- Multi-language UI
- Export as a file (download .css)
- Undo/redo history
- Advanced controls: datepicker colors, amenity icon colors, price styling
- Responsive editor (mobile editor layout)
- Direct Smoobu API integration

---

## 10. Open Decisions

- [ ] Coordinate with Smoobu team on live preview CSS injection approach (cross-subdomain access or proxy)
- [ ] Confirm final hosting URL (e.g., `styles.smoobu.com`)
- [ ] Confirm tech stack (vanilla JS vs. React/Svelte)
- [ ] Define the 3 template color palettes precisely
- [ ] Decide whether to show "Smoobu defaults" as a reset option

---

*End of PRD v0.1*
