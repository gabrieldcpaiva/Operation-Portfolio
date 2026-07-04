# RISKS — Portfolio v2

## 1. Custom domain not connected

The live Netlify site exists, but `theflowyway.com` has not yet been pointed to it.

Risk:

- Visitors using the real domain may still see the old site.

Mitigation:

- Add `theflowyway.com` as a custom domain in Netlify.
- Update DNS if needed.
- Verify HTTPS and redirects.

## 2. Code not committed to the portfolio repo yet

The current working project lives in:

`/Users/gabrielpaiva/.hermes/profiles/hermes-designer/workspace/theflowyway-v2`

Risk:

- Work is live on Netlify but not safely versioned in GitHub.

Mitigation:

- Move or copy this project into the proper GitHub repo.
- Commit on a clean branch.
- Push to GitHub.
- Link Netlify to that repo.

## 3. Image weight/performance

The portfolio uses high-quality images directly from the reference set.

Risk:

- Mobile users may download heavier assets than ideal.

Mitigation:

- Add responsive image generation.
- Convert selected images to AVIF/WebP.
- Keep originals archived.

## 4. Visual QA still needed

The site has been checked locally and deployed, but not deeply QA’d across devices.

Risk:

- Layout quirks may appear on real phones/tablets.

Mitigation:

- Test iPhone Safari.
- Test Android Chrome.
- Test desktop Safari/Chrome.
- Check reduced motion mode.

## 5. Animation complexity

GSAP + Lenis are powerful but add runtime JS.

Risk:

- Over-animation could fight the cozy, clean experience.

Mitigation:

- Keep motion slow, sparse, and purposeful.
- Respect `prefers-reduced-motion`.
- Remove any animation that feels clever instead of beautiful.
