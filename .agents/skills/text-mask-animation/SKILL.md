---
name: text-mask-animation
description: "Instructions and focal point rules for the Text Mask Animation component in buildloom-components-showcase-project."
---

# Text Mask Animation Component Rules & Setup

## Overview
The `text-mask-animation` component provides a scroll-driven SVG text clip mask zoom effect over a video backdrop.

## Key Implementation Rules

1. **SVG Mask Focal Point Alignment**:
   - For `mask.svg`, the central plus sign (`+`) cross icon is located at **`52.35% center`**.
   - Always set `mask-position: 52.35% center` and `-webkit-mask-position: 52.35% center` so the zoom expands outward symmetrically from the plus icon.

2. **CSS `position: sticky` Requirements**:
   - `stickyMask` requires `position: sticky; top: 0; height: 100vh;`.
   - **Crucial**: Do NOT place `overflow-x: hidden` or `overflow: hidden` on root `html`, `body`, or parent layout elements, as this breaks CSS sticky positioning in Chrome/Safari/Firefox.

3. **Cross-Browser CSS Properties**:
   - Always provide both standard and WebKit vendor prefixes:
     - `-webkit-mask-image` and `mask-image`
     - `-webkit-mask-position` and `mask-position`
     - `-webkit-mask-size` and `mask-size`
     - `-webkit-mask-repeat` and `mask-repeat`

4. **Component Location**:
   - Source code: [`text-mask-animation/text-clip-mask-on-scroll-master`](file:///Users/zdkiel/Documents/Code/buildloom-components-showcase-project/text-mask-animation/text-clip-mask-on-scroll-master)
   - Component: `src/components/TextClipMask.jsx`
   - Styles: `src/components/TextClipMask.module.css`
