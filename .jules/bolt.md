## 2026-10-06 - [Layout Thrashing on Scroll and Mousemove]
**Learning:** Found anti-patterns where high-frequency events (`mousemove` and `scroll`) in `src/layouts/Layout.astro` were mutating layout-triggering properties (`left`, `top`, `width`) synchronously, leading to main-thread blocking and layout thrashing.
**Action:** Use `requestAnimationFrame` to throttle rapid events and prefer updating compositor-only properties like `transform` with hardware acceleration (`translate3d` and `scaleX`) and `will-change`. Cache DOM elements outside of event listeners.
## 2026-10-10 - [Batching High-Frequency DOM Updates]
**Learning:** Found an anti-pattern where multiple `scroll` event listeners independently fired synchronous layout-triggering DOM reads (`window.scrollY`) and DOM writes (`style.transform`, `classList.toggle`). This separation increases the risk of forced synchronous layouts (layout thrashing) during a high-frequency event loop.
**Action:** Consolidate redundant scroll event listeners. Use a single `requestAnimationFrame` block per animation frame. Ensure all DOM reads (like `window.scrollY`) are grouped together and executed *before* any DOM writes (like `style` or `class` modifications) within that rAF block to maintain performance and avoid jank.
## 2026-10-11 - [Deduplication vs Pruning Hazards]
**Learning:** Found an anti-pattern where an over-aggressive deletion to remove a redundant scroll event listener inadvertently removed a critical variable declaration (`const nav`), causing a scoping bug that would fail linters and crash at runtime if the element didn't exist globally.
**Action:** When removing duplicate functional blocks, manually verify that any shared variable declarations remain intact and available for the remaining usages.
