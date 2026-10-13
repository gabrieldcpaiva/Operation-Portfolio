## 2025-10-06 - Replace interactive div elements with semantic buttons
**Learning:** Found custom interactive `<div>` elements with `onclick` handlers but lacking keyboard accessibility and screen-reader support. Using `<div>` for interactive elements bypasses default browser accessibility features.
**Action:** Replace `<div>` elements acting as buttons with semantic `<button type="button">` elements. Add `aria-label` for screen readers and `focus-visible` utility classes for explicit keyboard focus states.
## 2024-05-25 - Standardized Focus States
**Learning:** Custom interactive elements often miss focus states which are essential for keyboard navigation.
**Action:** Always add standardized `:focus-visible` states using `outline: 2px solid var(--color-gold)` in CSS or `focus-visible:ring-2 focus-visible:ring-gold` in Tailwind to ensure accessibility and maintain the design system consistency.
## 2025-10-06 - Explicit Required Field Indicators and Autocomplete
**Learning:** Found forms with required fields but no visual indicators, relying solely on placeholder text or implicit understanding. Missing `autocomplete` attributes on standard fields (like name/email) forces unnecessary cognitive load. Adding explicit `*` indicators and `autocomplete` benefits all users, specifically addressing common cognitive and physical accessibility needs.
**Action:** Always include a visual required indicator (e.g., `<span aria-hidden="true">*</span>`) for `required` fields and explicitly add `autocomplete` attributes to standard form inputs.
## 2024-05-24 - Absolute Positioning in Forms
**Learning:** When adding `absolute` positioned elements (like character counters or validation icons) inside form fields, always ensure the immediate wrapper `div` has `relative` positioning. Failing to do so causes the absolute element to position relative to the entire form or nearest positioned ancestor, which can lead to overlapping text or out-of-bounds UI elements on different screen sizes.
**Action:** Before implementing an absolute positioned micro-interaction, trace up the DOM tree to verify the correct parent acts as the relative positioning boundary.
