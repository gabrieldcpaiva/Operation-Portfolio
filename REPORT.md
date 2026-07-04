# REPORT — Portfolio v2

**Saved:** 2026-07-03 19:43:08 -03  
**Project:** The Flowy Way / Gabriel Paiva Portfolio  
**Live URL:** https://exquisite-salmiakki-8b41ba.netlify.app  
**Workspace:** `/Users/gabrielpaiva/.hermes/profiles/hermes-designer/workspace/theflowyway-v2`

## What we built

A new cinematic portfolio direction based on **Path A — Cinematic Archive**.

Core feel:

- Warm, cozy, candle-lit.
- Editorial but not corporate.
- Cinematic scroll, not cluttered.
- Gallery-first, image-first, mood-first.

## Implemented

- Astro 7 static site.
- Tailwind 4 styling.
- GSAP + ScrollTrigger cinematic reveals.
- Lenis smooth scroll.
- Self-hosted fonts:
  - Cormorant Garamond
  - Playfair Display
  - JetBrains Mono
- Whisky/prismatic glass image used as hero backdrop:
  - `/public/portfolio_images/Background - NON-NEGOTIABLE.jpeg`
- 7 portfolio image collections.
- Per-collection mood colours.
- Cursor candle glow.
- Hover-to-enlarge gallery image treatment.
- Mobile-first horizontal gallery slider.
- `prefers-reduced-motion` safety.
- Netlify deploy config.
- Production deploy.

## Important bug fixed

The first photo of each gallery was disappearing.

Cause:

- The original image had inline `opacity: 0` plus a load handler.
- GSAP also animated opacity.
- Those two systems fought each other.

Fix:

- Removed inline opacity/load hack from the stage image.
- Replaced the GSAP image reveal with `fromTo(..., immediateRender: false)`.
- Updated carousel transitions to use GSAP fade instead of direct style mutation.

## Verification

- `npm run build` passed locally.
- Netlify production deploy passed.
- Production URL is live:
  - https://exquisite-salmiakki-8b41ba.netlify.app

## Not done yet

- Custom domain `theflowyway.com` is not pointed at this Netlify site yet.
- Site is not committed/pushed to the GitHub portfolio repo yet.
- Visual QA on multiple real devices is still needed.
- Image optimisation and art-direction can be improved.
- Closure docs are written in this workspace, not yet pushed anywhere.

## Live QA polish pass — 2026-07-03

Deploy ID: `6a48445e2c3578a3f99fdf77`

Fixed after Gabriel's live device testing:

- Hero was too dark → whisky/prismatic image is now brighter and less crushed.
- Background was too dead-black → moved to warm obsidian/espresso darkness.
- Added mild candle-breath ambient animation.
- Footer was too faint → links and copyright are now more readable.
- Form was too dark → added subtle glass/candle panel treatment.
- Mobile collections had awkward vertical dead space → mobile now uses compact non-centered section layout.
- Gallery metadata did not fully update → desktop carousel now updates image, alt, active thumb, number, and title.
- Mobile gallery slides now show per-image count and title.

Verification:

- `npm run build` passed.
- Ad-hoc verification script passed all targeted checks.
- Production URL returned HTTP 200.
- Production CSS contains warm palette, candle animation, and mobile spacing fix.

## Contact form fix — 2026-07-03

Deploy ID: `6a4847a31d5a1fc410d7de37`

Fixed:

- The submit button no longer depends on unconfigured Netlify form notifications.
- The form now opens the visitor's email app addressed to `gabriel@theflowyway.com`.
- The generated email includes name, email, and message body.
- Added helper copy so users know the button opens their email app.

Verification:

- `npm run build` passed.
- Ad-hoc verification script confirmed the `mailto:` target, encoded subject/body, and helper copy.
- Netlify production deploy passed.
- Production URL returned HTTP 200.
- Production HTML contains the inlined `mailto:gabriel@theflowyway.com` handler.

## Domain launch — 2026-07-04

Production site: `operation-portfolio-gabriel`  
Site ID: `04e342a5-67bc-461d-a9e1-919f8e9dbb63`  
Production deploy ID: `6a489075724ad568800d8315`

Approach:

- Did **not** edit DNS.
- Confirmed `theflowyway.com` already pointed to the existing Netlify project.
- Created a safe draft deploy first:
  - `6a4890047c5c2f86636d8c3f--operation-portfolio-gabriel.netlify.app`
- Verified the draft contained Astro assets, title, and contact mailto.
- Promoted/deployed the same build to production.

Verification:

- `https://theflowyway.com` returned HTTP 200.
- `https://www.theflowyway.com` returned HTTP 200 and resolved to `https://theflowyway.com/`.
- Both production URLs contain Astro assets.
- Both production URLs contain `mailto:gabriel@theflowyway.com`.
- Both production URLs contain title `Gabriel Paiva // Operations`.

## GitHub save — 2026-07-04

Repository: `gabrieldcpaiva/Operation-Portfolio`  
Branch: `main`  
Source launch commit: `2e51510`

Approach:

- Preserved existing Git history.
- Replaced the old React/Vite app source with the approved Astro portfolio source.
- Kept existing public portfolio image assets and unrelated public downloads intact.
- Added Astro config, TypeScript config, lockfile, favicon assets, and closure docs.
- Removed obsolete React/Vite entry/config/test files.

Verification:

- `npm ci` completed with 0 vulnerabilities.
- `npm run build` passed from the GitHub repo checkout.
- Built `dist/index.html` contains Astro assets.
- Built `dist/index.html` contains `mailto:gabriel@theflowyway.com`.
- Built `dist/index.html` contains title `Gabriel Paiva // Operations`.
- Pushed `main` to GitHub at commit `2e51510`.
- Netlify Git-triggered production deploy became ready at commit `2e51510`.
- `https://theflowyway.com` returned HTTP 200 after the GitHub push.
