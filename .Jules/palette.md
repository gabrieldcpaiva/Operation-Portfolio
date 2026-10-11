## 2026-10-09 - Tailwind sr-only Focus Specificity Bug
**Learning:** When using Tailwind CSS `sr-only` and `focus:not-sr-only` for skip links, the `not-sr-only` utility (which sets `padding: 0`) overwrites the base padding utilities (e.g., `px-6 py-3`) due to its pseudo-class specificity. This results in the skip link losing padding when focused by screen readers or keyboard users.
**Action:** When implementing visually hidden focusable elements, explicitly declare the padding for the focus state (e.g., `focus:px-6 focus:py-3`) to ensure the padding is restored when `not-sr-only` is active.
