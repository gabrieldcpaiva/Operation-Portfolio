## 2023-10-07 - Standardized Focus Visible Pattern
**Learning:** Keyboard accessibility (focus rings) was missing from several custom UI components like arrows, thumbnail strips, and ghost links, which relied exclusively on hover states.
**Action:** Always verify components that are interactive via pointer events (e.g. `hover`) have an equivalent, explicitly styled `:focus-visible` state. In this project, standardizing on a 2px solid gold (`var(--color-gold)`) ring/outline provides the best contrast and consistency.
