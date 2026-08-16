# 🌟 Buildloom Components Showcase & Design System Library

> A world-class showcase application built with the **Slush Light Mode** design system ("inflatable sticker universe on pastel paper"). Features **282 interactive web animation component labs** across **13 category accordion dropdowns** plus **6 standalone top-level labs**, real-time search filtering, and URL slug routing.

---

## 📖 Official Buildloom Documentation & Resources
- **Vite Template Documentation**: [https://buildloom.github.io/docs/index.html](https://buildloom.github.io/docs/index.html)

---

## 🚀 Quick Start & How to Run Locally

### Option 1: Run Full Showcase (Dashboard + All 282 Component Servers)

To launch the Master Showcase Dashboard along with all 282 component lab servers in one command:

```bash
npm start
# OR
./start.sh
# OR
bash start.sh
```

Once running, open your browser and navigate to:
👉 **`http://localhost:8080/`**

---

### Option 2: Run Master Dashboard Only

If you only want to work on or view the Showcase Dashboard UI:

```bash
cd dashboard
npm run dev -- --port 8080
```

Then visit **`http://localhost:8080/`**.

---

### Option 3: Run an Individual Component Lab

To run any single component lab directly:

```bash
# Example: Run Physics Component #160 directly
cd "Physics Effects/9/works-main"
npx vite --port 5330
```

---

## 🎨 Slush Design System Palette

- **Sky Wash (`#dceeff`)**: Hero pastel ground.
- **Paper White (`#ffffff`)**: Card & top bar surfaces.
- **Carbon (`#000000`)**: Hand-cut 2px outlines & primary text.
- **Sticker Accents**:
  - Electric Blue (`#4da2ff`)
  - Mint Pop (`#55db9c`)
  - Sunburst (`#ffd731`)
  - Ember (`#fb4903`)
  - Lavender (`#e9ccff`)
  - Voltage Violet (`#5c4ade`)
- **Typography**: Display in `Antonio` / `Space Grotesk`, UI in `Outfit` (1600px pill buttons).

---

## 📂 Component Directory Structure (282 Components)

```
buildloom-components-showcase-project/
├── dashboard/                              # Master Slush Showcase Dashboard (Port 8080)
├── text-mask-animation/                    # Standalone Lab #1 (Port 3000)
├── staggered-grid-animation/               # Standalone Lab #2 (Port 5173)
├── flower-image-animation/                 # Standalone Lab #3 (Port 5174)
├── pixel-image-animation/                  # Standalone Lab #4 (Port 4321)
├── buildloom portfolio/                   # Standalone Lab #5: 3D Interactive Portfolio (Port 5176)
├── buildloom-vite-template/                     # Standalone Lab #6: Vite Template Architecture (Port 1111)
├── 3D Animation/                           # 23 Components (Ports 5180–5198, 3001, 5177–5179)
├── Background Animations/                  # 11 Components (Ports 5199–5209)
├── Grid Animations/                        # 10 Components (Ports 5210–5218, 5175)
├── Hero Animations/                        # 26 Components (Ports 5219–5244)
├── Hover Effects/                          # 21 Components (Ports 5245–5265)
├── Mouse Effects/                          # 21 Components (Ports 5266–5286)
├── Navigation Menus/                       # 21 Components (Ports 5287–5307)
├── Page Transitions/                       # 14 Components (Ports 5308–5321)
├── Physics Effects/                        # 10 Components (Ports 5322–5331)
├── Sliders/                                # 23 Components (Ports 5332–5354)
├── SVG Animations/                         # 11 Components (Ports 5355–5365)
├── Webgl & ThreeJS Effects/                # 19 Components (Ports 5366–5384)
├── Scroll Animation/                       # 61 Components (Ports 5385–5445)
└── Scroll Animation 2/                     # 5 Components (Ports 5446–5450)
```

---

## 🌐 Complete Component Registry Table (282 Components)

| # | Name | Category | Port Range | Tech Stack |
|---|---|---|---|---|
| **1–6** | Standalone Labs | Top-Level Labs | `3000, 5173, 5174, 4321, 5176, 1111` | Next.js, Vite, Three.js, Gulp, GSAP |
| **7–29** | 23 3D Animation Labs | 3D Animation | `5180–5198, 3001, 5177–5179` | Three.js, R3F, WebGL |
| **30–40** | 11 Background Animation Labs | Background Animations | `5199–5209` | WebGL, Canvas, GLSL |
| **41–50** | 10 Grid Animation Labs | Grid Animations | `5210–5218, 5175` | GSAP, ScrollTrigger |
| **51–76** | 26 Hero Animation Labs | Hero Animations | `5219–5244` | GSAP, Canvas, Vite |
| **77–97** | 21 Hover Effect Labs | Hover Effects | `5245–5265` | GSAP, Canvas, WebGL |
| **98–118** | 21 Mouse Effect Labs | Mouse Effects | `5266–5286` | Three.js, Canvas, GSAP |
| **119–139** | 21 Navigation Menu Labs | Navigation Menus | `5287–5307` | GSAP, SVG, Canvas |
| **140–153** | 14 Page Transition Labs | Page Transitions | `5308–5321` | Barba.js, Next.js, GSAP |
| **154–163** | 10 Physics Effect Labs | Physics Effects | `5322–5331` | Matter.js, Rapier, R3F |
| **164–186** | 23 Slider Labs | Sliders | `5332–5354` | HTML5, GSAP, Swiper |
| **187–197** | 11 SVG Animation Labs | SVG Animations | `5355–5365` | HTML5, SVG, GSAP |
| **198–216** | 19 WebGL & ThreeJS Labs | WebGL & ThreeJS Effects | `5366–5384` | Three.js, WebGL, GLSL |
| **217–282** | 66 Scroll Animation Labs | Scroll Animations | `5385–5450` | GSAP, ScrollTrigger, Lenis |
