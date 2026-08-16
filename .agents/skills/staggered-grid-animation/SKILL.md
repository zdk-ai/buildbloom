---
name: staggered-grid-animation
description: "Instructions and rules for the Staggered (3D) Grid Animation component in buildloom-components-showcase-project."
---

# Staggered (3D) Grid Animation Rules & Setup

## Overview
The `staggered-grid-animation` component provides a 3D scroll-driven grid distortion animation with GSAP ScrollTrigger and Lenis smooth scrolling.

## Key Rules & Learnings

1. **Navbar Removal**:
   - The `<div class="frame">` element containing header links (Article, All Demos, GitHub) is hidden via `display: none;` or omitted in `index.html`.

2. **Full Grid Section (`HALCYON`) Layout**:
   - The `.grid--full` container must have `width: 100vw; max-width: none;` in `css/base.css` to prevent inheriting `.grid`'s max-width constraint (`400px`).
   - `.grid--full .grid__item` elements must have an explicit square aspect-ratio (`aspect-ratio: 1; width: 100%;`) so that GSAP column translation animations (`yPercent: 450`) render images across the full viewport width instead of shrinking into tiny dots.

3. **User Images & Copywriting**:
   - Uses the 21 user image assets in `images/` (`ditther-1.png` to `ditther-21.png`), copied to `Staggered3DGridAnimations-main/img/`.
   - Uses exact reference copywriting: `Staggered (3D) Grid Animations`, `#scroll #3d #grid`, Japanese marquee names (`Sora Takahashi 空 高橋 ...`), `Halcyon`, and `MADE BY @CODROPS`.

4. **Technical Architecture**:
   - Project Location: [`staggered-grid-animation/Staggered3DGridAnimations-main`](file:///Users/zdkiel/Documents/Code/buildloom-components-showcase-project/staggered-grid-animation/Staggered3DGridAnimations-main)
   - Entry point: `index.html`
   - Styles: `css/base.css`
   - Script: `js/index.js`
