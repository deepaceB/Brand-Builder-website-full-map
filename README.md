# Brand Builder Website

Static multi-page marketing website for [Brand Builder](https://brandbuilder.com.np) — a software studio based in Pokhara, Nepal.

Built on the **Wise design language** re-skinned with Brand Builder's navy/orange palette (`#274074` / `#FF6600`) and Poppins + Inter typography.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, services, products, stats, ethos, CTA |
| `portfolio.html` | Project portfolio — products + website/UI samples |
| `team.html` | Full team roster (executive, lead, junior, board) |
| `blog.html` | Blog — 30 posts with category filter + subscribe |

---

## Project structure

```
Brand-Builder-website/
├── index.html
├── blog.html
├── portfolio.html
├── team.html
│
├── css/
│   ├── style.css        # Design tokens, typography, component rules (imports layout + responsive)
│   ├── layout.css       # Nav, containers, bands, grids, footer
│   └── responsive.css   # Mobile/tablet breakpoints
│
├── js/
│   ├── main.js          # Hero converter, mobile nav, blog filter, subscribe, scroll reveal
│   └── utils.js         # Year stamp, team avatar initials
│
├── images/
│   ├── logo.png         # Brand Builder logo (nav + footer)
│   ├── favicon.png      # Browser tab icon
│   ├── akaran.png       # Client logos (Trusted By section)
│   ├── meditouch.png
│   ├── cura-health.png
│   ├── veda.png
│   ├── krofile.png
│   ├── dynamic-earthworks.png
│   ├── hero/            # Drop hero images here
│   ├── portfolio/       # Drop portfolio screenshots here
│   ├── team/            # Drop team member photos here
│   └── blog/            # Drop blog post images here
│
├── assets/
│   ├── fonts/           # Custom fonts (currently uses Google Fonts CDN)
│   └── icons/           # Custom SVG icons
│
├── README.md
├── .gitignore
└── LICENSE
```

---

## Getting started

No build step required — it's pure HTML/CSS/JS.

```bash
# Clone and serve locally
git clone <your-repo-url>
cd Brand-Builder-website
python3 -m http.server 8000
# open http://localhost:8000
```

Or just open `index.html` directly in a browser (note: cross-page links work via a local server, not `file://`).

---

## Design system

### Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#274074` | Headings, dark bands, primary buttons, footer |
| `--navy-deep` | `#1c3059` | Footer depth |
| `--orange` | `#FF6600` | Accent: logo, converter arrow, stat figures, badges |
| `--orange-deep` | `#b34700` | Accent text on light backgrounds (contrast-safe) |
| `--orange-light` | `#ffb380` | Accent text on dark backgrounds |
| `--surface` | `#f5f5f5` | Soft band fills, card backgrounds |

### Typography
| Role | Font | Size | Weight |
|------|------|------|--------|
| H1 | Poppins | clamp(44px → 60px) | 700 |
| H2 | Poppins | clamp(30px → 42px) | 600 |
| H3 | Poppins | clamp(24px → 30px) | 600 |
| Body | Inter | 17px | 400 |
| Eyebrow | Inter | 13px | 600 |

---

## Deployment

Drop the entire folder onto any static host:

- **Netlify** — drag the folder into the Netlify dashboard
- **Vercel** — `vercel --prod` from the project root
- **GitHub Pages** — push to a repo, enable Pages from the `main` branch root
- **Nginx / Apache** — serve the folder as the document root

No server-side code, no dependencies, no build step.

---

## Adding client logos

Put new logos in `images/` and add a `.logo` chip to the `#story` section in `index.html`:

```html
<div class="logo">
  <img src="images/your-client.png" alt="Client Name" />
</div>
```

Recommended: transparent PNG or SVG, ~120px tall. Logos sit on white chips.

---

## License

MIT — see `LICENSE`.
