---
name: master-showcase-dashboard
description: "Instructions, Slush design system tokens, category accordion dropdowns, real-time search, and copywriting rules for the Master Component Showcase Dashboard in buildloom-components-showcase-project."
---

# Master Component Showcase Dashboard (Slush Style Reference)

## Overview
The **Master Component Showcase Dashboard** (`dashboard/`) is a web application built according to the **Slush** design system ("inflatable sticker universe on pastel paper"). It unifies **282 unique component animation effects** (6 top-level standalone labs: Kinetic Focal Mask, Perspective Grid, Botanical Grid, WebGL Shader, Buildloom 3D Portfolio, and Buildloom Vite Template + 276 category components nested inside 13 collapsible category accordion dropdowns) with real-time search filtering, URL slug routing, and official documentation links.

## Official Resources & Links
- **Vite Template Documentation**: `https://buildloom.github.io/docs/index.html`

## Recent Integration Updates (August 2026)
- **2 Buildloom Resources Added**:
  - `buildloom portfolio/code`: Registered as Top-Level Standalone Lab #5 (`Buildloom 3D Interactive Portfolio` on Port `5176`).
  - `buildloom-vite-template`: Registered as Top-Level Standalone Lab #6 (`Buildloom Vite Template & Dev Architecture` on Port `1111`).
- **Docs Button Added**: Added `📖 Docs ★` button in top bar pointing to `https://buildloom.github.io/docs/index.html`.
- **6 Standalone Top-Level Labs**: Ports `3000`, `5173`, `5174`, `4321`, `5176`, `1111`.

## Slush Design System Tokens
- **Sky Wash**: `#dceeff` (Hero pastel ground)
- **Paper White**: `#ffffff` (Card & top bar surfaces)
- **Carbon**: `#000000` (Hand-cut 2px outlines & primary text)
- **Concrete Gray**: `#cccccc` (Secondary section ground)
- **Soft Mist**: `#e9e9e9` (Subtle surface tints)
- **Sticker Accents**:
  - Electric Blue: `#4da2ff` (3D ribbon & star accents `★`)
  - Mint Pop: `#55db9c` (`282 Sticker Labs` badge fill)
  - Sunburst: `#ffd731` (Logo icon fill)
  - Ember: `#fb4903` (Active tech tag fill)
  - Lavender: `#e9ccff` (Soft card hover fill)
  - Voltage Violet: `#5c4ade` (QR download card fill)
- **Typography**:
  - Display: `Antonio` / `Space Grotesk` (800 weight, crushed line-height `0.75`–`0.80`, sculptural uppercase presence)
  - UI / Body: `Outfit` (500/700 weight, 1600px pill buttons)
- **Radii**: 20px soft cards, 1600px pill buttons, 40px elevated cards, 0px box shadows.

## Launch Commands
- 1-Line Quick Start: `npm start` or `./start.sh`
- Dashboard: `npm run dev -- --port 8080` (in `dashboard/`)
