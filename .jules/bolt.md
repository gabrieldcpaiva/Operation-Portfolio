## 2026-10-06 - [Layout Thrashing on Scroll and Mousemove]
**Learning:** Found anti-patterns where high-frequency events (`mousemove` and `scroll`) in `src/layouts/Layout.astro` were mutating layout-triggering properties (`left`, `top`, `width`) synchronously, leading to main-thread blocking and layout thrashing.
**Action:** Use `requestAnimationFrame` to throttle rapid events and prefer updating compositor-only properties like `transform` with hardware acceleration (`translate3d` and `scaleX`) and `will-change`. Cache DOM elements outside of event listeners.
