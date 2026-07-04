# DECISIONS — Portfolio v2

## Direction

Selected **Path A — Cinematic Archive**.

Why:

- It best matches Gabriel's visual work.
- It preserves the candle-glow feeling.
- It feels premium without becoming corporate SaaS sludge.
- It lets each collection carry a distinct mood.

## Aesthetic north star

**“Cozy to look at.”**

Meaning:

- Warm.
- Inviting.
- Cinematic.
- Calm but powerful.
- Not cold, not generic, not agency-template polished.

## Hero image

Use `Background - NON-NEGOTIABLE.jpeg` as the hero backdrop.

Reason:

- It is Gabriel's whisky/prismatic glass masterpiece.
- The light was manually carved through crystal.
- It deserves to introduce the portfolio.

## Salgado naming

Shorten the second gallery title when needed:

- Long/original: `After Salgado: Born of Sand and Code`
- Display short title: `Born of Sand and Code`

Reason:

- Large titles can break layout, especially mobile.
- The shortened name preserves the mythic tone.

## Stack

- Astro
- Tailwind
- GSAP + ScrollTrigger
- Lenis
- Netlify

Reason:

- Fast static output.
- High visual control.
- Low runtime complexity.
- Strong animation tools.
- Easy Netlify deployment.

## Mobile

Mobile is first-class, not an afterthought.

Implementation choice:

- Desktop: cinematic central stage.
- Mobile: horizontal snap slider.

Reason:

- The old site missed mobile friendliness.
- This version must be usable from the start.

## Warm darkness over dead black

Decision:

- Replace the near-pure black feeling with warm obsidian / espresso darkness.

Reason:

- Pure black made the hero, footer, and form feel too crushed during live device testing.
- Gabriel's target is cozy cinematic darkness, not a void.
- The visual metaphor is candlelit archive / whisky prism / museum shadow.

## Mobile collection layout

Decision:

- Mobile collection sections should not inherit desktop `min-h-screen` vertical centering.

Reason:

- Live iPhone screenshots showed awkward dead space between collection title and image.
- Mobile now uses compact block layout with title, counter, then swipe slider.
