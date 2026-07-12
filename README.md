# Saskia Kordic — Website

Plain HTML/CSS/JS.

## Structure

- `index.html` — the homepage
- `impressum.html` — legal notice (placeholder content, see below)
- `datenschutz.html` — privacy policy (placeholder content, see below)
- `styles/style.css` — all styling
- `scripts/main.js` — the footer year and the contact form
- `assets/images/` — photos and the signature logo

Each HTML file is a complete, self-contained page. Edit it directly, no
build step, no generated files.

## Opening it locally

Double-click `index.html`, or in this folder run:

```
open website/index.html
```

## Known gaps

- The contact form does not send anywhere yet. It needs a form backend
  (e.g. [Formspree](https://formspree.io) or Netlify Forms) or a mailto
  fallback once you decide how you want to receive messages.
- The testimonials section in `index.html` has two placeholder quotes
  clearly marked `[Platzhalter]`. Replace both the quote text and the
  name/role with real client testimonials before this goes live.
- `impressum.html` and `datenschutz.html` only have placeholder
  structure, no real legal text. This is legally required content
  under German law and needs your real business details, Claude can't
  write binding legal text. A generator like e-recht24.de is a common
  way to produce a correct one.
