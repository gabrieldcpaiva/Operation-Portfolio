## 2025-10-06 - Replace interactive div elements with semantic buttons
**Learning:** Found custom interactive `<div>` elements with `onclick` handlers but lacking keyboard accessibility and screen-reader support. Using `<div>` for interactive elements bypasses default browser accessibility features.
**Action:** Replace `<div>` elements acting as buttons with semantic `<button type="button">` elements. Add `aria-label` for screen readers and `focus-visible` utility classes for explicit keyboard focus states.
## 2024-05-25 - Standardized Focus States
**Learning:** Custom interactive elements often miss focus states which are essential for keyboard navigation.
**Action:** Always add standardized `:focus-visible` states using `outline: 2px solid var(--color-gold)` in CSS or `focus-visible:ring-2 focus-visible:ring-gold` in Tailwind to ensure accessibility and maintain the design system consistency.
