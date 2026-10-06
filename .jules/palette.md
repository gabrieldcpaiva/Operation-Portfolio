## 2025-10-06 - Replace interactive div elements with semantic buttons
**Learning:** Found custom interactive `<div>` elements with `onclick` handlers but lacking keyboard accessibility and screen-reader support. Using `<div>` for interactive elements bypasses default browser accessibility features.
**Action:** Replace `<div>` elements acting as buttons with semantic `<button type="button">` elements. Add `aria-label` for screen readers and `focus-visible` utility classes for explicit keyboard focus states.
