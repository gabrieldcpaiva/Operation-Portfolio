## 2026-10-06 - [Layout Thrashing on Scroll and Mousemove]
**Learning:** Found anti-patterns where high-frequency events (`mousemove` and `scroll`) in `src/layouts/Layout.astro` were mutating layout-triggering properties (`left`, `top`, `width`) synchronously, leading to main-thread blocking and layout thrashing.
**Action:** Use `requestAnimationFrame` to throttle rapid events and prefer updating compositor-only properties like `transform` with hardware acceleration (`translate3d` and `scaleX`) and `will-change`. Cache DOM elements outside of event listeners.

## 2026-10-06 - [Layout Thrashing on Scroll]
**Learning:** Found anti-patterns where reading `scrollHeight` alongside GSAP animations inside `scroll` event handler caused synchronous layout recalculation, leading to main-thread blocking and layout thrashing. Furthermore, multiple scroll handlers were triggering redundant work.
**Action:** Cache layout properties (`scrollHeight` and `innerHeight`) outside of scroll handlers and update them using `resize` events and `ResizeObserver`. Combine multiple scroll handlers into a single `requestAnimationFrame` throttled loop to minimize reflow and repaint cycles. State tracking should also be used to prevent redundant DOM updates (like toggling class names when not changed).
