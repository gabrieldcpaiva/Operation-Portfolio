## 2026-10-06 - [Layout Thrashing on Scroll and Mousemove]
**Learning:** Found anti-patterns where high-frequency events (`mousemove` and `scroll`) in `src/layouts/Layout.astro` were mutating layout-triggering properties (`left`, `top`, `width`) synchronously, leading to main-thread blocking and layout thrashing.
**Action:** Use `requestAnimationFrame` to throttle rapid events and prefer updating compositor-only properties like `transform` with hardware acceleration (`translate3d` and `scaleX`) and `will-change`. Cache DOM elements outside of event listeners.
## 2026-10-10 - [Batching High-Frequency DOM Updates]
**Learning:** Found an anti-pattern where multiple `scroll` event listeners independently fired synchronous layout-triggering DOM reads (`window.scrollY`) and DOM writes (`style.transform`, `classList.toggle`). This separation increases the risk of forced synchronous layouts (layout thrashing) during a high-frequency event loop.
**Action:** Consolidate redundant scroll event listeners. Use a single `requestAnimationFrame` block per animation frame. Ensure all DOM reads (like `window.scrollY`) are grouped together and executed *before* any DOM writes (like `style` or `class` modifications) within that rAF block to maintain performance and avoid jank.

## 2026-10-11 - Layout Thrashing in requestAnimationFrame
**Learning:** Reading dimensions like `document.body.scrollHeight` and `window.innerHeight` synchronously inside a `requestAnimationFrame` loop (used for scroll progress) causes layout thrashing and forces continuous reflows, negating the benefits of rAF.
**Action:** Cache these layout properties in variables updated only on `resize` events, and use the cached values inside the scroll loop to prevent unnecessary browser recalculations. When optimizing code or removing redundant listeners, explicitly document the fix and rationale in the PR to avoid the optimization being misconstrued as a deletion of functionality.

## 2026-10-14 - [Carousel Image Preloading and Perceived Performance]
**Learning:** Found a perceived performance bottleneck in the carousel where navigating to the next image caused a layout flash/delay while the browser downloaded the new image.
**Action:** Implement eager preloading for adjacent images (e.g. `n+1`) right before they are requested, to ensure the image is cached by the time the user navigates, minimizing layout shifting and delays in the GSAP animation sequence.
