#!/bin/bash
set -e

echo "=== Buildloom Showcase Server Launcher ==="
echo "Cleaning up any stale processes on target ports..."

for port in 3000 3001 4321 8080 $(seq 5173 5450); do
  pid=$(lsof -ti:$port 2>/dev/null || true)
  if [ -n "$pid" ]; then
    echo "Terminating process on port $port (PID: $pid)..."
    kill -9 $pid 2>/dev/null || true
  fi
done

export BROWSER=none
export CI=true

echo "Starting 282 Component Servers + Showcase Dashboard..."

# 4 Standalone Top-Level Component Labs (Outside Categories)
(cd "text-mask-animation/text-clip-mask-on-scroll-master" && npm run dev -- -p 3000) &
(cd "staggered-grid-animation/Staggered3DGridAnimations-main" && npm run dev -- --port 5173) &
(cd "flower-image-animation/sticky-grid-scroll-main" && npm run dev -- --port 5174) &
(cd "pixel-image-animation/gsap-threejs-master" && npm run dev -- --port 4321) &
(cd "buildloom portfolio/code" && npx vite --port 5176) &
(cd "buildloom-vite-template" && npm run dev -- --port 1111) &

# 23 3D Animation Component Labs
(cd "3D Animation/1/threejs-font-grid" && npm run dev -- --port 5180) &
(cd "3D Animation/2/three-html-to-canvas-main" && npm run dev -- --port 5181) &
(cd "3D Animation/3/cinematic-scroll-animations-main" && npm run dev -- --port 5182) &
(cd "3D Animation/4/delphi-main" && npm run dev -- --port 5183) &
(cd "3D Animation/5/shoe-finder-main" && npm run dev -- -p 3001) &
(cd "3D Animation/6/video-projection-main" && npm run dev -- --port 5184) &
(cd "3D Animation/7/3DCarousel-main" && npm run dev -- --port 5185) &
(cd "3D Animation/8/creative-404-main" && npm run dev -- -p 5186) &
(cd "3D Animation/9/dithering-shader-main" && npm run dev -- --port 5187) &
(cd "3D Animation/10/Interactive-Styling-Canvas-main" && npm run dev -- --port 5188) &
(cd "3D Animation/11/threepipe-device-mockup-codrops-master" && npm run dev -- --port 5189) &
(cd "3D Animation/12/helmet-main" && npm run dev -- -p 5190) &
(cd "3D Animation/13/3d-earth-scroll-main" && npm run dev -- -p 5191) &
(cd "3D Animation/14/repetition-image-animation" && npm run dev -- --port 5192) &
(cd "3D Animation/15/f" && npm run dev -- --port 5193) &
(cd "3D Animation/16/living-words" && npm run dev -- --port 5194) &
(cd "3D Animation/17/code" && npm run dev -- --port 5195) &
(cd "3D Animation/18/Circular Image Layout" && npm run dev -- --port 5196) &
(cd "3D Animation/19/files" && npx vite --port 5177) &
(cd "3D Animation/20/files" && npm run dev -- --port 5197) &
(cd "3D Animation/21/fiels" && npx vite --port 5178) &
(cd "3D Animation/22/files" && npx vite --port 5179) &
(cd "3D Animation/23/code" && npm run dev -- --port 5198) &

# 11 Background Animation Component Labs
(cd "Background Animations/1/files" && npx vite --port 5199) &
(cd "Background Animations/2/files" && npx vite --port 5200) &
(cd "Background Animations/3/files" && npx vite --port 5201) &
(cd "Background Animations/4/files" && npx vite --port 5202) &
(cd "Background Animations/5/files" && npx vite --port 5203) &
(cd "Background Animations/6/files" && npx vite --port 5204) &
(cd "Background Animations/7/files" && npx vite --port 5205) &
(cd "Background Animations/8/files" && npx vite --port 5206) &
(cd "Background Animations/9/files" && npx vite --port 5207) &
(cd "Background Animations/10/files" && npx vite --port 5208) &
(cd "Background Animations/11/pixel-liquid-bg" && npm run dev -- --port 5209) &

# 10 Grid Animation Component Labs
(cd "Grid Animations/1/grid-layout-transition-main" && npx vite --port 5210) &
(cd "Grid Animations/2/spotify-visualiser-main" && npm run dev -- --port 5211) &
(cd "Grid Animations/3/ElasticGridScroll-main" && npx vite --port 5212) &
(cd "Grid Animations/4/grid-to-preview-main" && npm run dev -- --port 5213) &
(cd "Grid Animations/5/RepeatingImageTransition-main" && npx vite --port 5214) &
(cd "Grid Animations/6/add-to-cart-main" && npm run dev -- --port 5215) &
(cd "Grid Animations/7/OnScrollLayoutFormations-main" && npx vite --port 5216) &
(cd "Grid Animations/8/HoverGrid-main" && npx vite --port 5175) &
(cd "Grid Animations/9/MakeWayGridEffect-main" && npx vite --port 5217) &
(cd "Grid Animations/10/GridFlowEffect-main" && npx vite --port 5218) &

# 26 Hero Animation Component Labs
(cd "Hero Animations/1/files" && npx vite --port 5219) &
(cd "Hero Animations/2/files" && npx vite --port 5220) &
(cd "Hero Animations/3/files" && npx vite --port 5221) &
(cd "Hero Animations/4/files" && npx vite --port 5222) &
(cd "Hero Animations/5/files" && npx vite --port 5223) &
(cd "Hero Animations/6/files" && npx vite --port 5224) &
(cd "Hero Animations/7/files" && npx vite --port 5225) &
(cd "Hero Animations/8/files" && npx vite --port 5226) &
(cd "Hero Animations/9/files" && npx vite --port 5227) &
(cd "Hero Animations/10/files" && npx vite --port 5228) &
(cd "Hero Animations/11/EntranceAnimationForImages-main" && npx vite --port 5229) &
(cd "Hero Animations/12/RepetitiveTypography-main" && npx vite --port 5230) &
(cd "Hero Animations/13/Samurai-main" && npx vite --port 5231) &
(cd "Hero Animations/14/IntroGridMotionTransition-main" && npx vite --port 5232) &
(cd "Hero Animations/15/IntroTrailEffect-main" && npx vite --port 5233) &
(cd "Hero Animations/16/CircularTextEffect-main" && npx vite --port 5234) &
(cd "Hero Animations/17/files" && npx vite --port 5235) &
(cd "Hero Animations/18/files" && npx vite --port 5236) &
(cd "Hero Animations/19/files" && npx vite --port 5237) &
(cd "Hero Animations/20/cinematic-loader-entrance" && npx vite --port 5238) &
(cd "Hero Animations/21/files" && npx vite --port 5239) &
(cd "Hero Animations/22/files" && npx vite --port 5240) &
(cd "Hero Animations/23/files" && npx vite --port 5241) &
(cd "Hero Animations/24/code" && npx vite --port 5242) &
(cd "Hero Animations/25/Loader-main" && npx vite --port 5243) &
(cd "Hero Animations/26/files" && npx vite --port 5244) &

# 21 Hover Effects Component Labs
(cd "Hover Effects/1/files" && npx vite --port 5245) &
(cd "Hover Effects/2/files" && npx vite --port 5246) &
(cd "Hover Effects/3/files" && npx vite --port 5247) &
(cd "Hover Effects/4/files" && npx vite --port 5248) &
(cd "Hover Effects/5/3DLettersMenuHover-main" && npx vite --port 5249) &
(cd "Hover Effects/6/LettersAnimationLayout-main" && npx vite --port 5250) &
(cd "Hover Effects/7/RepetitionHoverEffect-main" && npx vite --port 5251) &
(cd "Hover Effects/8/files" && npx vite --port 5252) &
(cd "Hover Effects/9/GooeyTextHoverEffect-master" && npx vite --port 5253) &
(cd "Hover Effects/10/threejs-texture-transition-hover-effect" && npx vite --port 5254) &
(cd "Hover Effects/11/RapidImageHoverMenu-master" && npx vite --port 5255) &
(cd "Hover Effects/12/files" && npx vite --port 5256) &
(cd "Hover Effects/13/artefakt-interactive-ascii-logo" && npx vite --port 5257) &
(cd "Hover Effects/14/cappen-fluid-simulation" && npx vite --port 5258) &
(cd "Hover Effects/15/griflan-hover-effect" && npx vite --port 5259) &
(cd "Hover Effects/16/files" && npx vite --port 5260) &
(cd "Hover Effects/17/files" && npx vite --port 5261) &
(cd "Hover Effects/18/files" && npx vite --port 5262) &
(cd "Hover Effects/19/code" && npx vite --port 5263) &
(cd "Hover Effects/20/files" && npx vite --port 5264) &
(cd "Hover Effects/21/zentry-hover-animation" && npx vite --port 5265) &

# 21 Mouse Effects Component Labs
(cd "Mouse Effects/1/files" && npx vite --port 5266) &
(cd "Mouse Effects/2/files" && npx vite --port 5267) &
(cd "Mouse Effects/3/files" && npx vite --port 5268) &
(cd "Mouse Effects/4/three-skull-main" && npx vite --port 5269) &
(cd "Mouse Effects/5/dist" && npx vite --port 5270) &
(cd "Mouse Effects/6/files" && npx vite --port 5271) &
(cd "Mouse Effects/7/files" && npx vite --port 5272) &
(cd "Mouse Effects/8/files" && npx vite --port 5273) &
(cd "Mouse Effects/9/files" && npx vite --port 5274) &
(cd "Mouse Effects/10/files" && npx vite --port 5275) &
(cd "Mouse Effects/11/cursor-trail-main" && npx vite --port 5276) &
(cd "Mouse Effects/12/The-Spirit-master" && npx vite --port 5277) &
(cd "Mouse Effects/13/canvas-cursor" && npx vite --port 5278) &
(cd "Mouse Effects/14/satisfying-curly-cursor-3kb-of-vanilla-js-on-canvas" && npx vite --port 5279) &
(cd "Mouse Effects/15/shooting-star" && npx vite --port 5280) &
(cd "Mouse Effects/16/gsap-hero-section-with-advanced-image-cursor-trail-effects" && npx vite --port 5281) &
(cd "Mouse Effects/17/text-trail-effect-on-mousemove" && npx vite --port 5282) &
(cd "Mouse Effects/18/files" && npx vite --port 5283) &
(cd "Mouse Effects/19/files" && npx vite --port 5284) &
(cd "Mouse Effects/20/files" && npx vite --port 5285) &
(cd "Mouse Effects/21/fluid-shader-main" && npm run dev -- -p 5286) &

# 21 Navigation Menus Component Labs
(cd "Navigation Menus/1/files" && npx vite --port 5287) &
(cd "Navigation Menus/2/files" && npx vite --port 5288) &
(cd "Navigation Menus/3/files" && npx vite --port 5289) &
(cd "Navigation Menus/4/files" && npx vite --port 5290) &
(cd "Navigation Menus/5/files" && npx vite --port 5291) &
(cd "Navigation Menus/6/files" && npx vite --port 5292) &
(cd "Navigation Menus/7/files" && npx vite --port 5293) &
(cd "Navigation Menus/8/files" && npx vite --port 5294) &
(cd "Navigation Menus/9/files" && npx vite --port 5295) &
(cd "Navigation Menus/10/files" && npx vite --port 5296) &
(cd "Navigation Menus/11/files" && npx vite --port 5297) &
(cd "Navigation Menus/12/files" && npx vite --port 5298) &
(cd "Navigation Menus/13/files" && npx vite --port 5299) &
(cd "Navigation Menus/14/files" && npx vite --port 5300) &
(cd "Navigation Menus/15/files" && npx vite --port 5301) &
(cd "Navigation Menus/16/files" && npx vite --port 5302) &
(cd "Navigation Menus/17/files" && npx vite --port 5303) &
(cd "Navigation Menus/18/files" && npx vite --port 5304) &
(cd "Navigation Menus/19/files" && npx vite --port 5305) &
(cd "Navigation Menus/20/files" && npx vite --port 5306) &
(cd "Navigation Menus/21/files" && npx vite --port 5307) &

# 14 Page Transitions Component Labs
(cd "Page Transitions/1/demo-main" && npx vite --port 5308) &
(cd "Page Transitions/2/files" && npx vite --port 5309) &
(cd "Page Transitions/3/LayersAnimation-main" && npx vite --port 5310) &
(cd "Page Transitions/4/PixelTransition-main" && npx vite --port 5311) &
(cd "Page Transitions/5/SVG-Page-transition-main" && npx vite --port 5312) &
(cd "Page Transitions/6/SliceRevealer-master" && npx vite --port 5313) &
(cd "Page Transitions/7/files" && npx vite --port 5314) &
(cd "Page Transitions/8/barbajs-page-transition-main" && npm run dev -- --port 5315) &
(cd "Page Transitions/9/pagetransition-waabi-main" && npm run dev -- -p 5316) &
(cd "Page Transitions/10/KineticTypePageTransition-main" && npx vite --port 5317) &
(cd "Page Transitions/11/files" && npx vite --port 5318) &
(cd "Page Transitions/12/block-reveal-page-transition" && npm run dev -- -p 5319) &
(cd "Page Transitions/13/files" && npm run dev -- -p 5320) &
(cd "Page Transitions/14/svg-page-transition-master" && npm run dev -- -p 5321) &

# 10 Physics Effects Component Labs
(cd "Physics Effects/1/sticky-cursor-main" && npm run dev -- -p 5322) &
(cd "Physics Effects/2/svg-bezier-curve-master" && npm run dev -- -p 5323) &
(cd "Physics Effects/3/magnetic-button-main" && npm run dev -- -p 5324) &
(cd "Physics Effects/4/fluid-triangle-main" && npx vite --port 5325) &
(cd "Physics Effects/5/files" && npx vite --port 5326) &
(cd "Physics Effects/6/files" && npx vite --port 5327) &
(cd "Physics Effects/7/files" && npx vite --port 5328) &
(cd "Physics Effects/8/sphere-packing" && npx vite --port 5329) &
(cd "Physics Effects/9/works-main" && npx vite --port 5330) &
(cd "Physics Effects/10/r3f-rapier-ball-of-glass-main" && npm run dev -- -p 5331) &

(cd "Sliders/1/files" && npx vite --port 5332) &
(cd "Sliders/2/files" && npx vite --port 5333) &
(cd "Sliders/3/files" && npx vite --port 5334) &
(cd "Sliders/4/files" && npx vite --port 5335) &
(cd "Sliders/5/files" && npx vite --port 5336) &
(cd "Sliders/6/files" && npx vite --port 5337) &
(cd "Sliders/7/files" && npx vite --port 5338) &
(cd "Sliders/8/files" && npx vite --port 5339) &
(cd "Sliders/9/files" && npx vite --port 5340) &
(cd "Sliders/10/files" && npx vite --port 5341) &
(cd "Sliders/11/webgl-carousel-main" && npx vite --port 5342) &
(cd "Sliders/12/CrossroadsSlideshow-master" && npx vite --port 5343) &
(cd "Sliders/13/ShapesSlideshow-main" && npx vite --port 5344) &
(cd "Sliders/14/ripple-displacement-slider" && npx vite --port 5345) &
(cd "Sliders/15/files" && npx vite --port 5346) &
(cd "Sliders/16/files" && npx vite --port 5347) &
(cd "Sliders/17/files" && npx vite --port 5348) &
(cd "Sliders/18/files" && npx vite --port 5349) &
(cd "Sliders/19/modular-slider" && npx vite --port 5350) &
(cd "Sliders/20/files" && npx vite --port 5351) &
(cd "Sliders/21/overlapping-swiper-master" && npm run dev -- -p 5352) &
(cd "Sliders/22/files" && npx vite --port 5353) &
(cd "Sliders/23/Circular-Gallery-main" && npx vite --port 5354) &
(cd "SVG Animations/1/svg-shape-overlays" && npx vite --port 5355) &
(cd "SVG Animations/2/morphsvgcomplex-paths" && npx vite --port 5356) &
(cd "SVG Animations/3/OnScrollSVGFilterText-main" && npx vite --port 5357) &
(cd "SVG Animations/4/OnScrollFilter-main" && npx vite --port 5358) &
(cd "SVG Animations/5/OnScrollPathAnimations-main" && npx vite --port 5359) &
(cd "SVG Animations/6/files" && npx vite --port 5360) &
(cd "SVG Animations/7/files" && npx vite --port 5361) &
(cd "SVG Animations/8/MorphingBackgroundShapes-master" && npx vite --port 5362) &
(cd "SVG Animations/9/canvas-particles" && npx vite --port 5363) &
(cd "SVG Animations/10/underwater-navigation-master" && npx vite --port 5364) &
(cd "SVG Animations/11/ashleybrookecs-smudge-revealer" && npx vite --port 5365) &
(cd "Webgl & ThreeJS Effects/1/WebGPU-clair-obscur-gommage-codrops-master" && npx vite --port 5366) &
(cd "Webgl & ThreeJS Effects/2/webgl-mouseover-effects-master" && npx vite --port 5367) &
(cd "Webgl & ThreeJS Effects/3/gooey-hover-codrops-master" && npx vite --port 5368) &
(cd "Webgl & ThreeJS Effects/4/StickyImageEffect-master" && npx vite --port 5369) &
(cd "Webgl & ThreeJS Effects/5/tutorial-grid-main" && npx vite --port 5370) &
(cd "Webgl & ThreeJS Effects/6/r3f-image-reveal-effect-main" && npx vite --port 5371) &
(cd "Webgl & ThreeJS Effects/7/vfx-js-text-shadow-effect" && npx vite --port 5372) &
(cd "Webgl & ThreeJS Effects/8/DistortedPixels-master" && npx vite --port 5373) &
(cd "Webgl & ThreeJS Effects/9/interactive-particles-master" && npx vite --port 5374) &
(cd "Webgl & ThreeJS Effects/10/sdf-lensblur-master" && npx vite --port 5375) &
(cd "Webgl & ThreeJS Effects/11/WebGLBlobs-main" && npx vite --port 5376) &
(cd "Webgl & ThreeJS Effects/12/the-substance-master" && npx vite --port 5377) &
(cd "Webgl & ThreeJS Effects/13/morphing-2d-demo-main" && npx vite --port 5378) &
(cd "Webgl & ThreeJS Effects/14/files" && npx vite --port 5379) &
(cd "Webgl & ThreeJS Effects/15/files" && npx vite --port 5380) &
(cd "Webgl & ThreeJS Effects/16/dist" && npx vite --port 5381) &
(cd "Webgl & ThreeJS Effects/17/Ironhill-section-rebuild-main" && npx vite --port 5382) &
(cd "Webgl & ThreeJS Effects/18/image-distortion-main" && npx vite --port 5383) &
(cd "Webgl & ThreeJS Effects/19/code" && npx vite --port 5384) &
(cd "Scroll Animation/1/rgb-split-distortion-scroll-effect-main" && npx vite --port 5385) &
(cd "Scroll Animation/2/TextClipScroll-main" && npx vite --port 5386) &
(cd "Scroll Animation/3/text-demo-main" && npx vite --port 5387) &
(cd "Scroll Animation/4/FullscreenClipEffect-main" && npx vite --port 5388) &
(cd "Scroll Animation/5/Scroll3DGrid-main" && npx vite --port 5389) &
(cd "Scroll Animation/6/Staggered3DGridAnimations-main" && npx vite --port 5390) &
(cd "Scroll Animation/7/crt-like-effect-with-vfx-js" && npx vite --port 5391) &
(cd "Scroll Animation/8/text-clip-mask-on-scroll-master" && npm run dev -- -p 5392) &
(cd "Scroll Animation/9/Scroll-Transition-main" && npx vite --port 5393) &
(cd "Scroll Animation/10/telescope-zoom-main" && npx vite --port 5394) &
(cd "Scroll Animation/11/gsap-threejs-master" && npm run dev -- --port 5395) &
(cd "Scroll Animation/12/webgl-progressive-blur-main" && npx vite --port 5396) &
(cd "Scroll Animation/13/pixel-scan-effect-with-vfx-js" && npx vite --port 5397) &
(cd "Scroll Animation/14/vfx-js-scroll-animation" && npx vite --port 5398) &
(cd "Scroll Animation/15/containeranimation-splittext" && npx vite --port 5399) &
(cd "Scroll Animation/16/sticky-grid-scroll-main" && npx vite --port 5400) &
(cd "Scroll Animation/18/3DStackMotion-main" && npx vite --port 5401) &
(cd "Scroll Animation/19/ConnectedGrid-main" && npx vite --port 5402) &
(cd "Scroll Animation/20/LoopScrolling-main" && npx vite --port 5403) &
(cd "Scroll Animation/21/ScrollBasedLayoutAnimations-main" && npx vite --port 5404) &
(cd "Scroll Animation/22/ImagePixelLoading-main" && npx vite --port 5405) &
(cd "Scroll Animation/23/TextRepetitionEffect-main" && npx vite --port 5406) &
(cd "Scroll Animation/24/animated-continuous-sections-with-gsap-observer" && npx vite --port 5407) &
(cd "Scroll Animation/25/BackgroundShift-main" && npx vite --port 5408) &
(cd "Scroll Animation/26/FoldingDOM-master" && npx vite --port 5409) &
(cd "Scroll Animation/27/AnimateSVGTextPath-master" && npx vite --port 5410) &
(cd "Scroll Animation/28/FullscreenScroll-main" && npx vite --port 5411) &
(cd "Scroll Animation/29/gsap-pinned-image-mask-reveal-on-scroll" && npx vite --port 5412) &
(cd "Scroll Animation/30/OneElementScroll-main" && npx vite --port 5413) &
(cd "Scroll Animation/31/tutorial-text-animation-main" && npx vite --port 5414) &
(cd "Scroll Animation/32/files" && npx vite --port 5415) &
(cd "Scroll Animation/33/files" && npx vite --port 5416) &
(cd "Scroll Animation/34/dist" && npx vite --port 5417) &
(cd "Scroll Animation/35/files" && npx vite --port 5418) &
(cd "Scroll Animation/36/ingamana-scroll-animation-nextjs" && npm run dev -- -p 5419) &
(cd "Scroll Animation/37/ascii-image-reveal-effect" && npx vite --port 5420) &
(cd "Scroll Animation/38/maximatherapy-sticky-cards" && npx vite --port 5421) &
(cd "Scroll Animation/39/files" && npx vite --port 5422) &
(cd "Scroll Animation/40/files" && npx vite --port 5423) &
(cd "Scroll Animation/41/files" && npx vite --port 5424) &
(cd "Scroll Animation/42/files" && npx vite --port 5425) &
(cd "Scroll Animation/43/files" && npx vite --port 5426) &
(cd "Scroll Animation/44/code" && npx vite --port 5427) &
(cd "Scroll Animation/45/files" && npx vite --port 5428) &
(cd "Scroll Animation/46/code" && npx vite --port 5429) &
(cd "Scroll Animation/47/code" && npx vite --port 5430) &
(cd "Scroll Animation/48/code" && npx vite --port 5431) &
(cd "Scroll Animation/49/infinite-scroll-with-parallax-main" && npx vite --port 5432) &
(cd "Scroll Animation/51/code" && npx vite --port 5433) &
(cd "Scroll Animation/52/code" && npx vite --port 5434) &
(cd "Scroll Animation/53/files" && npx vite --port 5435) &
(cd "Scroll Animation/56/fall-master" && npm run dev -- -p 5436) &
(cd "Scroll Animation/57/pixel-image-master" && npm run dev -- -p 5437) &
(cd "Scroll Animation/59/lemon-bureau" && npx vite --port 5438) &
(cd "Scroll Animation/61/files" && npx vite --port 5439) &
(cd "Scroll Animation/62/Show-case-effect-main" && npx vite --port 5440) &
(cd "Scroll Animation/63/files" && npx vite --port 5441) &
(cd "Scroll Animation/64/files" && npx vite --port 5442) &
(cd "Scroll Animation/65/files" && npx vite --port 5443) &
(cd "Scroll Animation/66/files" && npx vite --port 5444) &
(cd "Scroll Animation/67/glitchandgrit-infinite-slider" && npx vite --port 5445) &
(cd "Scroll Animation 2/17/ImageExpansionTypography-main" && npx vite --port 5446) &
(cd "Scroll Animation 2/50/files" && npx vite --port 5447) &
(cd "Scroll Animation 2/54/code" && npm run dev -- -p 5448) &
(cd "Scroll Animation 2/58/abstract-cards-main" && npm run dev -- -p 5449) &
(cd "Scroll Animation 2/60/deadspace" && npx vite --port 5450) &

# Master Showcase Dashboard
(cd "dashboard" && npm run dev -- --port 8080) &

echo "All 282 component servers launched!"
echo "Master Showcase Dashboard available at: http://localhost:8080/"

wait
