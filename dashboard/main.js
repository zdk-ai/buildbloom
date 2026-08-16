// 14 Standard Showcase Categories for Future Expansion
const CATEGORIES = [
  { id: '3d-animation', name: '3D Animation', icon: '🧊', isDropdown: true },
  { id: 'background-animations', name: 'Background Animations', icon: '🌌', isDropdown: true },
  { id: 'grid-animations', name: 'Grid Animations', icon: '📐', isDropdown: true },
  { id: 'hero-animations', name: 'Hero Animations', icon: '⚡', isDropdown: true },
  { id: 'hover-effects', name: 'Hover Effects', icon: '✨', isDropdown: true },
  { id: 'mouse-effects', name: 'Mouse Effects', icon: '🖱️', isDropdown: true },
  { id: 'navigation-menus', name: 'Navigation Menus', icon: '🧭', isDropdown: true },
  { id: 'page-transitions', name: 'Page Transitions', icon: '🎬', isDropdown: true },
  { id: 'physics-effects', name: 'Physics Effects', icon: '🧲', isDropdown: true },
  { id: 'sliders', name: 'Sliders', icon: '🎚️', isDropdown: true },
  { id: 'svg-animations', name: 'SVG Animations', icon: '🖋️', isDropdown: true },
  { id: 'webgl-threejs-effects', name: 'WebGL & ThreeJS Effects', icon: '🔮', isDropdown: true },
  { id: 'scroll-animations', name: 'Scroll Animations', icon: '📜', isDropdown: true }
];

const COMPONENTS = [
  // Standalone Top-Level Labs (4 Unique Components)
  {
    id: 'text-mask',
    slug: 'kinetic-focal-mask',
    name: '1. Kinetic Focal Mask',
    subtitle: 'Scroll-Driven SVG Lens Zoom & Crosshair Focus',
    tech: ['Next.js', 'Lenis', 'Framer Motion'],
    port: 3000,
    path: '/',
    category: null
  },
  {
    id: 'staggered-grid',
    slug: 'perspective-grid-distortion',
    name: '2. Perspective Grid Distortion',
    subtitle: '3D Staggered Depth Scroll & Halcyon Viewport Matrix',
    tech: ['Vite', 'GSAP', 'Lenis'],
    port: 5173,
    path: '/',
    category: null
  },
  {
    id: 'flower-image',
    slug: 'botanical-grid-expansion',
    name: '3. Botanical Grid Expansion',
    subtitle: 'Sticky Scroll Floral Zoom & Viewport Reveal',
    tech: ['Vite', 'React', 'Framer Motion'],
    port: 5174,
    path: '/',
    category: null
  },
  {
    id: 'pixel-image',
    slug: 'webgl-shader-displacement',
    name: '4. WebGL Shader Displacement',
    subtitle: 'Three.js Fragment Pixelation & Dynamic Viewport Scroll',
    tech: ['Astro', 'Three.js', 'GSAP'],
    port: 4321,
    path: '/',
    category: null
  },
  {
    id: 'buildloom-3d-portfolio',
    slug: 'buildloom-3d-portfolio',
    name: '5. Buildloom 3D Interactive Portfolio',
    subtitle: '3D Planet & GSAP Portfolio Showcase',
    tech: ['Three.js', 'WebGL', 'GSAP', 'HTML5'],
    port: 5176,
    path: '/',
    category: null
  },
  {
    id: 'buildloom-vite-template',
    slug: 'buildloom-vite-template',
    name: '6. Buildloom Vite Template & Framework',
    subtitle: 'Vite & Gulp Interactive Component Architecture',
    tech: ['Vite', 'SCSS', 'Gulp', 'JavaScript'],
    port: 1111,
    path: '/',
    category: null
  },

  // 3D Animation Collapsible Dropdown Category (23 Components)
  {
    id: '3d-font-grid',
    slug: 'threejs-kinetic-font-grid',
    name: '5. Three.js Kinetic Font Grid',
    subtitle: 'WebGL Spatial Typography & Interactive Character Grid',
    tech: ['Vite', 'Three.js', 'GSAP'],
    port: 5180,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-html-canvas',
    slug: 'html-to-canvas-3d-viewport',
    name: '6. HTML-to-Canvas 3D Viewport',
    subtitle: 'Realtime DOM Element Spatial Transformation & Shader Mesh',
    tech: ['Vite', 'Three.js', 'HTML5'],
    port: 5181,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-cinematic-scroll',
    slug: 'cinematic-3d-scroll-scenes',
    name: '7. Cinematic 3D Scroll Scenes',
    subtitle: 'Camera Path Animation & Multi-Layer Depth Progression',
    tech: ['Vite', 'R3F', 'Three.js'],
    port: 5182,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-delphi-scene',
    slug: 'delphi-3d-spatial-scene',
    name: '8. Delphi 3D Spatial Scene',
    subtitle: 'Interactive Product Environment & Floating Geometry',
    tech: ['Vite', 'React', 'Three.js'],
    port: 5183,
    path: '/',
    category: '3d-animation'
  },
  {
    id: 'shoe-gallery',
    slug: 'spatial-sneaker-showcase',
    name: '9. Spatial Sneaker Showcase',
    subtitle: 'Interactive 3D Product Finder & Dynamic Attribute Filters',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    port: 3001,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-video-projection',
    slug: 'webgl-video-projection',
    name: '10. WebGL Interactive Video Projection',
    subtitle: 'Texture Distortion & Kinetic Video Surface Mapping',
    tech: ['Vite', 'WebGL', 'GSAP'],
    port: 5184,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-image-carousel',
    slug: '3d-kinetic-image-carousel',
    name: '11. 3D Kinetic Image Carousel',
    subtitle: 'Cylindrical Viewport Rotation & Drag Parallax',
    tech: ['Vite', 'GSAP', 'SplitText'],
    port: 5185,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-creative-404',
    slug: 'interactive-3d-404-room',
    name: '12. Interactive 3D 404 Room',
    subtitle: 'First-Person Spatial Navigation & Object Interactivity',
    tech: ['Next.js', 'Three.js', 'React'],
    port: 5186,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-dithering-shader',
    slug: '3d-dithering-shader-surface',
    name: '13. 3D Dithering Shader Surface',
    subtitle: 'Retro Pixel Matrix & Post-Processing Noise Mesh',
    tech: ['React', 'Three.js', 'GLSL'],
    port: 5187,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-styling-canvas',
    slug: 'interactive-canvas-styling-3d',
    name: '14. Interactive Canvas Styling 3D',
    subtitle: 'Procedural Geometry & Cursor Raycasting Waves',
    tech: ['Vite', 'Three.js', 'Canvas'],
    port: 5188,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-threepipe-device',
    slug: 'threepipe-3d-device-mockup',
    name: '15. Threepipe 3D Device Mockup',
    subtitle: 'GLTF Hardware Model Rendering & Interactive Camera Panning',
    tech: ['Vite', 'Threepipe', 'Three.js'],
    port: 5189,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-helmet-scroll',
    slug: '3d-helmet-tubular-scroll',
    name: '16. 3D Helmet Tubular Scroll',
    subtitle: 'Curved Viewport Tunnel & Dynamic Image Strip',
    tech: ['Next.js', 'GSAP', 'ScrollTrigger'],
    port: 5190,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-earth-scroll',
    slug: '3d-globe-earth-scroll',
    name: '17. 3D Globe Earth Interactive Scroll',
    subtitle: 'Photorealistic Planet Rotation & Atmosphere Shader',
    tech: ['Next.js', 'Three.js', 'Framer'],
    port: 5191,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-repetition-image',
    slug: '3d-repetition-image-effect',
    name: '18. 3D Repetition Image Effect',
    subtitle: 'Cascading Image Matrix & Perspective Echo',
    tech: ['Vite', 'GSAP', 'CSS3D'],
    port: 5192,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-r3f-assets',
    slug: 'r3f-3d-asset-viewer',
    name: '19. React Three Fiber 3D Asset Viewer',
    subtitle: 'Interactive Model Inspector & PBR Material Lighting',
    tech: ['React', 'R3F', 'Three.js'],
    port: 5193,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-living-words',
    slug: 'living-words-3d-typography',
    name: '20. Living Words 3D Typography',
    subtitle: 'Dynamic Text Displacement & Particle Morphing',
    tech: ['Vite', 'Three.js', 'Canvas'],
    port: 5194,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-mesh-tunnel',
    slug: '3d-scroll-mesh-tunnel',
    name: '21. 3D Scroll Mesh Tunnel',
    subtitle: 'Endless Geometric Pipeline & Viewport Velocity Zoom',
    tech: ['Vite', 'Three.js', 'GSAP'],
    port: 5195,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-circular-ring',
    slug: '3d-circular-image-ring',
    name: '22. 3D Circular Image Ring',
    subtitle: 'Orbiting Spherical Card Layout & Proximity Zoom',
    tech: ['Vite', 'GSAP', 'CSS3D'],
    port: 5196,
    path: '/',
    category: '3d-animation'
  },
  {
    id: 'hover-trail',
    slug: 'cursor-displacement-trail',
    name: '23. Cursor Displacement Trail',
    subtitle: 'Velocity-Driven Hover Distortion & Interactive Image Trail',
    tech: ['Vite', 'GSAP', 'Canvas'],
    port: 5177,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-video-tunnel',
    slug: '3d-video-mask-tunnel',
    name: '24. 3D Video Mask Tunnel',
    subtitle: 'Motion Video Clip Portal & Curved Geometry Wave',
    tech: ['Vite', 'Three.js', 'VideoGL'],
    port: 5197,
    path: '/',
    category: '3d-animation'
  },
  {
    id: 'showcase-scroll',
    slug: 'sticky-card-expansion-matrix',
    name: '25. Sticky Card Expansion Matrix',
    subtitle: 'Sticky Viewport Scroll Expansion & Dynamic Card Morph',
    tech: ['Vite', 'GSAP', 'ScrollTrigger'],
    port: 5178,
    path: '/',
    category: '3d-animation'
  },
  {
    id: 'editorial-scroll',
    slug: 'voyeur-verite-editorial-scroll',
    name: '26. Voyeur Vérité Editorial Scroll',
    subtitle: 'Kinetic Landing Page Parallax & Hero Outro Reveal',
    tech: ['Vite', 'GSAP', 'Lenis'],
    port: 5179,
    path: '/',
    category: '3d-animation'
  },
  {
    id: '3d-spiral-gallery',
    slug: '3d-spiral-gallery-scroll',
    name: '27. 3D Spiral Gallery Scroll',
    subtitle: 'Helical Image Array & Infinite Vertical Helix Rotation',
    tech: ['Vite', 'GSAP', 'Three.js'],
    port: 5198,
    path: '/',
    category: '3d-animation'
  },

  // Background Animations Collapsible Dropdown Category (11 Components)
  {
    id: 'bg-1',
    slug: 'kinetic-raycast-shader-flow',
    name: '28. Kinetic Raycast Shader Flow',
    subtitle: 'Dynamic Color Flow & Raycast Vector Distortion',
    tech: ['HTML5', 'WebGL', 'Canvas'],
    port: 5199,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-2',
    slug: 'threejs-interactive-shape-burst',
    name: '29. Three.js Interactive Shape Burst',
    subtitle: 'Cursor Click Geometry Emitter & Particle Burst',
    tech: ['Three.js', 'Canvas', 'GSAP'],
    port: 5200,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-3',
    slug: 'vector-gradient-mesh-flow',
    name: '30. Vector Gradient Mesh Flow',
    subtitle: 'Fluid Multi-Color Ambient Mesh Warp',
    tech: ['HTML5', 'WebGL', 'Canvas'],
    port: 5201,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-4',
    slug: 'kinetic-gradient-blinds',
    name: '31. Kinetic Gradient Blinds',
    subtitle: 'Slatted Blinds Perspective & Color Transition',
    tech: ['HTML5', 'Canvas', 'WebGL'],
    port: 5202,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-5',
    slug: 'interactive-webgl-waves-surface',
    name: '32. Interactive WebGL Waves Surface',
    subtitle: 'Sine Wave Ripple Mesh & Heightfield Displacement',
    tech: ['HTML5', 'Canvas', 'WebGL'],
    port: 5203,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-6',
    slug: 'metallic-liquid-chrome-bg',
    name: '33. Metallic Liquid Chrome Background',
    subtitle: 'Specular Reflection & Fluid Chrome Distortion',
    tech: ['HTML5', 'WebGL', 'ShaderGL'],
    port: 5204,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-7',
    slug: 'cosmic-galaxy-starfield-tunnel',
    name: '34. Cosmic Galaxy Starfield Tunnel',
    subtitle: 'Orbital Particle Field & Velocity Warp Speed',
    tech: ['HTML5', 'Three.js', 'Canvas'],
    port: 5205,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-8',
    slug: 'dithered-noise-shader-matrix',
    name: '35. Dithered Noise Shader Matrix',
    subtitle: 'Retro Halftone Pixelation & Grain Noise Field',
    tech: ['HTML5', 'WebGL', 'ShaderGL'],
    port: 5206,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-9',
    slug: 'procedural-attribute-shader-mesh',
    name: '36. Procedural Attribute Shader Mesh',
    subtitle: 'Vertex Normal Noise & Procedural Color Wave',
    tech: ['HTML5', 'GLSL', 'WebGL'],
    port: 5207,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-10',
    slug: 'cursor-velocity-ripple-field',
    name: '37. Cursor Velocity Ripple Field',
    subtitle: 'Mouse Proximity Water Ripple & Surface Echo',
    tech: ['HTML5', 'Canvas', 'GSAP'],
    port: 5208,
    path: '/',
    category: 'background-animations'
  },
  {
    id: 'bg-11',
    slug: 'pixelated-liquid-shader-field',
    name: '38. Pixelated Liquid Shader Field',
    subtitle: 'React Three Fiber Pixel Liquid Simulation',
    tech: ['Vite', 'React', 'Three.js'],
    port: 5209,
    path: '/',
    category: 'background-animations'
  },

  // Grid Animations Collapsible Dropdown Category (10 Components)
  {
    id: 'grid-1',
    slug: 'grid-layout-transition',
    name: '39. Grid Layout Transition Matrix',
    subtitle: 'Responsive Dynamic Layout Transition & Card Morph',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5210,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-2',
    slug: 'spotify-visualiser-grid',
    name: '40. Spotify Audio Visualizer Grid',
    subtitle: 'Interactive Shader Canvas & Audio Frequency Wave',
    tech: ['Three.js', 'WebGL', 'GLSL'],
    port: 5211,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-3',
    slug: 'elastic-grid-scroll',
    name: '41. Elastic Grid Scroll Distortion',
    subtitle: 'Spring Physics & Rubberband Scroll Expansion',
    tech: ['HTML5', 'GSAP', 'Lenis'],
    port: 5212,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-4',
    slug: 'ecommerce-product-grid-preview',
    name: '42. E-Commerce Product Grid Preview',
    subtitle: 'Interactive Grid Tile Expansion & Detail Panel',
    tech: ['HTML5', 'Vite', 'Sass'],
    port: 5213,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-5',
    slug: 'repeating-image-grid-transition',
    name: '43. Repeating Image Grid Transition',
    subtitle: 'Infinite Tile Echo & Perspective Shift Matrix',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5214,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-6',
    slug: 'interactive-cart-grid-animation',
    name: '44. Interactive Cart Grid Animation',
    subtitle: 'Morphing Product Grid & Animated Cart Tray',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5215,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-7',
    slug: 'onscroll-layout-formations',
    name: '45. On-Scroll Layout Grid Formations',
    subtitle: 'Scroll-Triggered Tile Assembly & Formations',
    tech: ['HTML5', 'GSAP', 'ScrollTrigger'],
    port: 5216,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'hover-grid',
    slug: 'interactive-surface-grid',
    name: '46. Interactive Surface Grid',
    subtitle: 'Cursor Proximity Distortion & Video Background Matrix',
    tech: ['HTML5', 'GSAP', 'ImagesLoaded'],
    port: 5175,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-9',
    slug: 'makeway-grid-displacement',
    name: '47. MakeWay Proximity Grid Displacement',
    subtitle: 'Cursor Proximity Repulsion & Grid Tile Shift',
    tech: ['HTML5', 'Canvas', 'GSAP'],
    port: 5217,
    path: '/',
    category: 'grid-animations'
  },
  {
    id: 'grid-10',
    slug: 'grid-flow-velocity-effect',
    name: '48. Grid Flow Velocity Wave Effect',
    subtitle: 'Velocity-Driven Grid Wave & Dynamic Parallax',
    tech: ['HTML5', 'WebGL', 'Canvas'],
    port: 5218,
    path: '/',
    category: 'grid-animations'
  },

  // Hero Animations Collapsible Dropdown Category (26 Components)
  {
    id: 'hero-1',
    slug: 'aurela-kinetic-preloader-hero',
    name: '49. Aurela Kinetic Preloader Hero',
    subtitle: 'Full-Bleed Preloader Screen & Kinetic Hero Zoom',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5219,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-2',
    slug: 'editorial-fashion-hero-reveal',
    name: '50. Editorial Fashion Hero Reveal',
    subtitle: 'High-Fashion Typography & Staggered Image Reveal',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5220,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-3',
    slug: 'kinetic-timeline-hero-transition',
    name: '51. Kinetic Timeline Hero Transition',
    subtitle: 'Dynamic Timeline Progression & Hero Outro Slide',
    tech: ['HTML5', 'GSAP', 'Lenis'],
    port: 5221,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-4',
    slug: 'spatial-studio-hero-outro',
    name: '52. Spatial Studio Hero Outro',
    subtitle: 'Studio Perspective Camera Fly-Through & Outro Shrink',
    tech: ['HTML5', 'WebGL', 'GSAP'],
    port: 5222,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-5',
    slug: 'counter-preloader-hero-sequence',
    name: '53. Counter Preloader Hero Sequence',
    subtitle: 'Percentage Counter Preloader & Hero Content Unfold',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5223,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-6',
    slug: 'awwwards-page-reveal-matrix',
    name: '54. Awwwards Page Reveal Matrix',
    subtitle: 'Award-Winning Site Curtain Drop & Header Split',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5224,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-7',
    slug: 'capsule-1v1-preloader-hero',
    name: '55. Capsule 1v1 Preloader Hero',
    subtitle: 'Interactive Capsule Preloader & Hero Headline Scale',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5225,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-8',
    slug: 'howard-editorial-typography-hero',
    name: '56. Howard Editorial Typography Hero',
    subtitle: 'Bold Serif Type Reveal & Multi-Layer Image Stack',
    tech: ['HTML5', 'GSAP', 'SplitText'],
    port: 5226,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-9',
    slug: 'kinetic-hero-outro-parallax',
    name: '57. Kinetic Hero Outro Parallax',
    subtitle: 'Parallax Layer Shift & Dynamic Hero Section Outro',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5227,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-10',
    slug: 'nullspace-studio-hero-reveal',
    name: '58. Nullspace Studio Hero Reveal',
    subtitle: 'Minimalist Dark Surface & 3D Spatial Geometry Drop',
    tech: ['HTML5', 'GSAP', 'WebGL'],
    port: 5228,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-11',
    slug: 'astral-image-entrance-hero',
    name: '59. Astral Image Entrance Hero',
    subtitle: 'Staggered Grid Image Entrance & Celestial Mask',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5229,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-12',
    slug: 'repetitive-typography-hero-wave',
    name: '60. Repetitive Typography Hero Wave',
    subtitle: 'Infinite Kinetic Marquee & Text Repetition Wave',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5230,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-13',
    slug: 'samurai-japanese-spatial-hero',
    name: '61. Samurai Japanese Spatial Hero',
    subtitle: 'Three.js Japanese Scene & Camera Parallax Pan',
    tech: ['HTML5', 'Three.js', 'GSAP'],
    port: 5231,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-14',
    slug: 'novamotion-image-grid-hero',
    name: '62. NovaMotion Image Grid Hero',
    subtitle: 'Hover Motion Grid Transition & Dynamic Image Zoom',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5232,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-15',
    slug: 'intro-image-trail-hero',
    name: '63. Intro Image Trail Hero',
    subtitle: 'Cursor-Following Image Trail & Kinetic Intro Blast',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5233,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-16',
    slug: 'circular-text-orbit-hero',
    name: '64. Circular Text Orbit Hero',
    subtitle: 'Rotating SVG Text Ring & Center Product Focal Point',
    tech: ['HTML5', 'GSAP', 'SVG'],
    port: 5234,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-17',
    slug: 'camille-mormal-rebuild-hero',
    name: '65. Camille Mormal Rebuild Hero',
    subtitle: 'Minimal Editorial Image Mask & Smooth Scroll Outro',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5235,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-18',
    slug: 'combat-spatial-hero-outro',
    name: '66. Combat Spatial Hero Outro',
    subtitle: 'Action Motion Parallax & Aggressive Type Entrance',
    tech: ['HTML5', 'GSAP', 'WebGL'],
    port: 5236,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-19',
    slug: 'bykin-arc-landing-page-hero',
    name: '67. By-Kin Arc Landing Page Hero',
    subtitle: 'Curved Arc Layout Reveal & Architectural Header Shift',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5237,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-20',
    slug: 'cinematic-loader-entrance-hero',
    name: '68. Cinematic Loader Entrance Hero',
    subtitle: '3D Camera Zoom Preloader & Spatial City Entrance',
    tech: ['HTML5', 'Three.js', 'GSAP'],
    port: 5238,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-21',
    slug: 'gallery-of-fame-awwwards-hero',
    name: '69. Gallery of Fame Awwwards Hero',
    subtitle: 'Exhibition Wall Parallax & Interactive Frame Zoom',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5239,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-22',
    slug: 'steelworks-architectural-hero',
    name: '70. Steelworks Architectural Hero',
    subtitle: 'Monolithic Industrial Type & Steel Frame Expand',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5240,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-23',
    slug: 'kinetic-landing-page-reveal',
    name: '71. Kinetic Landing Page Reveal',
    subtitle: 'Staggered Card Curtain Lift & Split Headline Transition',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5241,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-24',
    slug: 'nite-riot-landing-page-reveal',
    name: '72. Nite Riot Landing Page Reveal',
    subtitle: 'Cyberpunk Neon Entrance & Particle Blast Transition',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5242,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-25',
    slug: 'webgl-loader-entrance-hero',
    name: '73. WebGL Loader Entrance Hero',
    subtitle: 'Fragment Shader Preloader & Fluid Hero Unfold',
    tech: ['HTML5', 'WebGL', 'Three.js'],
    port: 5243,
    path: '/',
    category: 'hero-animations'
  },
  {
    id: 'hero-26',
    slug: 'outfit-archive-landing-reveal',
    name: '74. Outfit Archive Landing Reveal',
    subtitle: 'Editorial Archive Grid Reveal & Kinetic Outro Morph',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5244,
    path: '/',
    category: 'hero-animations'
  },

  // Hover Effects Collapsible Dropdown Category (21 Components)
  {
    id: 'hover-1',
    slug: 'mouse-scale-image-gallery',
    name: '75. Mouse Scale Image Gallery',
    subtitle: 'Cursor Scale Image Magnification & Hover Gallery',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5245,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-2',
    slug: 'text-dispersion-effect',
    name: '76. Text Dispersion Effect',
    subtitle: 'Particle Text Scattering & Mouse Displacement',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5246,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-3',
    slug: 'pixelated-image-reveal',
    name: '77. Pixelated Image Reveal',
    subtitle: 'Grid Tile Pixelation & Cursor Distortion Reveal',
    tech: ['HTML5', 'WebGL', 'Vite'],
    port: 5247,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-4',
    slug: 'menu-with-marquee-hover',
    name: '78. Menu with Marquee Hover',
    subtitle: 'Dynamic Marquee Banner & Interactive Hover Slide',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5248,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-5',
    slug: '3d-letters-menu-hover',
    name: '79. 3D Letters Menu Hover',
    subtitle: 'Spatial Letter Rotation & Multi-Plane Depth Shift',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5249,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-6',
    slug: 'distributed-letters-animation-layout',
    name: '80. Distributed Letters Animation Layout',
    subtitle: 'Staggered Typography Assembly & Kinetic Word Morph',
    tech: ['HTML5', 'GSAP', 'SplitText'],
    port: 5250,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-7',
    slug: 'repetition-hover-effect',
    name: '81. Repetition Hover Effect',
    subtitle: 'Cascading Image Echo & Micro-Interaction Parallax',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5251,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-8',
    slug: 'inline-menu-layout-page-animation',
    name: '82. Inline Menu Layout Page Animation',
    subtitle: 'Horizontal Menu Expansion & Smooth Page Transition',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5252,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-9',
    slug: 'gooey-text-hover-effect',
    name: '83. Gooey Text Hover Effect',
    subtitle: 'SVG Liquid Blob Filter & Kinetic Text Morph',
    tech: ['HTML5', 'SVG', 'GSAP'],
    port: 5253,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-10',
    slug: 'threejs-texture-transition-hover',
    name: '84. ThreeJS Texture Transition Hover',
    subtitle: 'Shader Image Transition & Fragment Ripple Surface',
    tech: ['Three.js', 'WebGL', 'GLSL'],
    port: 5254,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-11',
    slug: 'rapid-image-hover-menu',
    name: '85. Rapid Image Hover Menu',
    subtitle: 'Rapid Image Sequence Trail & Dynamic Hover Preview',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5255,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-12',
    slug: 'kinetic-hover-card-matrix',
    name: '86. Kinetic Hover Card Matrix',
    subtitle: 'Multi-Tile Depth Rotation & Interactive Border Light',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5256,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-13',
    slug: 'interactive-ascii-logo',
    name: '87. Interactive ASCII Logo',
    subtitle: 'Retro Character Matrix & Dynamic ASCII Shader Wave',
    tech: ['HTML5', 'Canvas', 'JS'],
    port: 5257,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-14',
    slug: 'cappen-fluid-simulation',
    name: '88. Cappen Fluid Simulation',
    subtitle: 'Realtime WebGL Fluid Dynamics & Color Ripple',
    tech: ['HTML5', 'WebGL', 'GLSL'],
    port: 5258,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-15',
    slug: 'griflan-hover-effect',
    name: '89. Griflan Hover Effect',
    subtitle: 'Distortion Mesh & Interactive Image Zoom',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5259,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-16',
    slug: 'text-hover-kinetic-animation',
    name: '90. Text Hover Kinetic Animation',
    subtitle: 'Variable Font Weight Shift & Multi-Line Hover',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5260,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-17',
    slug: 'turbulent-inversion-lens-hover',
    name: '91. Turbulent Inversion Lens Hover',
    subtitle: 'Refraction Lens Distortion & Inverse Color Magnifier',
    tech: ['HTML5', 'Canvas', 'GSAP'],
    port: 5261,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-18',
    slug: 'interactive-team-section-hover',
    name: '92. Interactive Team Section Hover',
    subtitle: 'Profile Card Expansion & Dynamic Bio Reveal',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5262,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-19',
    slug: 'spencer-gabor-magnetic-cards',
    name: '93. Spencer Gabor Magnetic Cards',
    subtitle: 'Cursor Magnetic Pull & Playful Card Skew',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5263,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-20',
    slug: 'kinetic-grid-tile-hover',
    name: '94. Kinetic Grid Tile Hover',
    subtitle: 'Tile Elevation & Interactive Border Shadow Pulse',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5264,
    path: '/',
    category: 'hover-effects'
  },
  {
    id: 'hover-21',
    slug: 'zentry-hover-animation-lab',
    name: '95. Zentry Hover Animation Lab',
    subtitle: 'Gaming-Grade Multi-Layer Depth Card Hover',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5265,
    path: '/',
    category: 'hover-effects'
  },

  // Mouse Effects Collapsible Dropdown Category (21 Components)
  {
    id: 'mouse-1',
    slug: 'mouse-image-distortion',
    name: '96. Mouse Image Distortion',
    subtitle: 'WebGL Fluid Distortion & Dynamic Mouse Ripple',
    tech: ['HTML5', 'Three.js', 'GLSL'],
    port: 5266,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-2',
    slug: 'split-vignette-cursor-effect',
    name: '97. Split Vignette Cursor Effect',
    subtitle: 'Dual Viewport Vignette & Cursor Tracking Mask',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5267,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-3',
    slug: 'cursor-hover-mask',
    name: '98. Cursor Hover Mask',
    subtitle: 'SVG Mask Lens & Dynamic Text Spotlight',
    tech: ['HTML5', 'GSAP', 'SVG'],
    port: 5268,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-4',
    slug: 'skeleton-fluid-reveal',
    name: '99. Skeleton Fluid Reveal',
    subtitle: 'Three.js 3D Skeleton Model & Fluid Cursor Wipe',
    tech: ['Three.js', 'WebGL', 'GSAP'],
    port: 5269,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-5',
    slug: 'interactive-fluid-particle-surface',
    name: '100. Interactive Fluid Particle Surface',
    subtitle: 'WebGL Physics Particle Attractor & Fluid Mesh',
    tech: ['HTML5', 'WebGL', 'Canvas'],
    port: 5270,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-6',
    slug: 'paint-reveal-canvas',
    name: '101. Paint Reveal Canvas',
    subtitle: 'Brushstroke Eraser Mask & Image Reveal',
    tech: ['HTML5', 'Canvas', 'GSAP'],
    port: 5271,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-7',
    slug: 'rainbow-brush-cursor-trail',
    name: '102. Rainbow Brush Cursor Trail',
    subtitle: 'Multi-Color Particle Emitter & Ribbon Brush',
    tech: ['HTML5', 'Canvas', 'JS'],
    port: 5272,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-8',
    slug: 'cursor-pixel-trailing',
    name: '103. Cursor Pixel Trailing',
    subtitle: 'Retro Halftone Pixel Trail & Mouse Speed Scale',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5273,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-9',
    slug: 'image-trail-velocity-effect',
    name: '104. Image Trail Velocity Effect',
    subtitle: 'Velocity-Aware Image Spawning & Fade Outro',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5274,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-10',
    slug: 'rotating-image-motion-trail',
    name: '105. Rotating Image Motion Trail',
    subtitle: 'Angled Image Stamp Trail & Inertial Spin',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5275,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-11',
    slug: 'kinetic-cursor-trail-matrix',
    name: '106. Kinetic Cursor Trail Matrix',
    subtitle: 'Multi-Point Particle Spring & Proximity Force',
    tech: ['Vite', 'Canvas', 'GSAP'],
    port: 5276,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-12',
    slug: 'the-spirit-cursor-canvas',
    name: '107. The Spirit Cursor Canvas',
    subtitle: 'Ethereal Smoke Trail & Mouse Velocity Glow',
    tech: ['HTML5', 'Canvas', 'WebGL'],
    port: 5277,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-13',
    slug: 'canvas-ribbon-cursor',
    name: '108. Canvas Ribbon Cursor',
    subtitle: 'Smooth Elastic Ribbon Cursor & Spring Physics',
    tech: ['HTML5', 'Canvas', 'JS'],
    port: 5278,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-14',
    slug: 'satisfying-curly-cursor',
    name: '109. Satisfying Curly Cursor',
    subtitle: 'Ultra-Lightweight Procedural Curly Ribbon',
    tech: ['HTML5', 'Canvas', 'JS'],
    port: 5279,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-15',
    slug: 'shooting-star-particle-cursor',
    name: '110. Shooting Star Particle Cursor',
    subtitle: 'Celestial Starburst Emitter & Gravity Fall',
    tech: ['HTML5', 'Canvas', 'GSAP'],
    port: 5280,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-16',
    slug: 'advanced-image-cursor-trail',
    name: '111. Advanced Image Cursor Trail',
    subtitle: 'Editorial Photo Trail & Speed Interpolation',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5281,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-17',
    slug: 'text-trail-mousemove-effect',
    name: '112. Text Trail Mousemove Effect',
    subtitle: 'Floating Character Echo & Mouse Proximity Push',
    tech: ['HTML5', 'GSAP', 'JS'],
    port: 5282,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-18',
    slug: 'moblinks-interactive-logo-cursor',
    name: '113. Moblinks Interactive Logo Cursor',
    subtitle: 'Vector Logo Distortion & Magnetic Spring Tracking',
    tech: ['HTML5', 'SVG', 'GSAP'],
    port: 5283,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-19',
    slug: 'gsap-kinetic-cursor-interaction',
    name: '114. GSAP Kinetic Cursor Interaction',
    subtitle: 'Dynamic Follower Dot & Hover Element Magnification',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5284,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-20',
    slug: 'lukebaffait-animated-cursor',
    name: '115. LukeBaffait Animated Cursor',
    subtitle: 'Custom Ring Follower & Fluid State Transitions',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5285,
    path: '/',
    category: 'mouse-effects'
  },
  {
    id: 'mouse-21',
    slug: 'fluid-shader-mouse-displacement',
    name: '116. Fluid Shader Mouse Displacement',
    subtitle: 'Navier-Stokes Fluid Simulation Shader Surface',
    tech: ['HTML5', 'WebGL', 'GLSL'],
    port: 5286,
    path: '/',
    category: 'mouse-effects'
  },

  // Navigation Menus Collapsible Dropdown Category (21 Components)
  {
    id: 'nav-1',
    slug: 'kinetic-fullscreen-overlay-menu',
    name: '117. Kinetic Fullscreen Overlay Menu',
    subtitle: 'Curtain Unfold Overlay & Staggered Link Entrance',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5287,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-2',
    slug: 'staggered-link-slide-menu',
    name: '118. Staggered Link Slide Menu',
    subtitle: 'Side Drawer Push & Kinetic Link Wave',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5288,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-3',
    slug: 'curved-perspective-navigation',
    name: '119. Curved Perspective Navigation',
    subtitle: 'SVG Path Morph Drawer & Curved Border Reveal',
    tech: ['HTML5', 'SVG', 'GSAP'],
    port: 5289,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-4',
    slug: 'morphing-panel-nav-menu',
    name: '120. Morphing Panel Nav Menu',
    subtitle: 'Elastic Panel Morph & Interactive Preview Image',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5290,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-5',
    slug: 'sliding-stairs-menu',
    name: '121. Sliding Stairs Menu',
    subtitle: 'Cascading Staircase Columns & Fullscreen Transition',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5291,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-6',
    slug: 'minimalist-accordion-nav',
    name: '122. Minimalist Accordion Nav',
    subtitle: 'Clean Architectural Accordion Expansion',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5292,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-7',
    slug: 'purity-of-noise-nav-menu',
    name: '123. Purity of Noise Nav Menu',
    subtitle: 'Grain Noise Texture Background & Typography Nav',
    tech: ['HTML5', 'WebGL', 'GSAP'],
    port: 5293,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-8',
    slug: 'pocket-collection-navigation',
    name: '124. Pocket Collection Navigation',
    subtitle: 'Categorized Grid Drawer & Interactive Hover Thumbnails',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5294,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-9',
    slug: 'jelly-bouncy-studio-nav',
    name: '125. Jelly Bouncy Studio Nav',
    subtitle: 'Bouncy Spring Physics & Playful Button Stretch',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5295,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-10',
    slug: 'orbit-studio-navigation',
    name: '126. Orbit Studio Navigation',
    subtitle: 'Circular Radial Ring Links & Center Content Focus',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5296,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-11',
    slug: 'prism-colourful-practice-nav',
    name: '127. Prism Colourful Practice Nav',
    subtitle: 'Vibrant Multi-Color Panel Slide & Header Shift',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5297,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-12',
    slug: 'xhatch-motion-studio-nav',
    name: '128. XHatch Motion Studio Nav',
    subtitle: 'Crosshatch Line Pattern Reveal & Kinetic Menu',
    tech: ['HTML5', 'SVG', 'GSAP'],
    port: 5298,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-13',
    slug: 'spatial-radial-nav-menu',
    name: '129. Spatial Radial Nav Menu',
    subtitle: '3D Spherical Orbit Dock & Smooth Hover Elevation',
    tech: ['HTML5', 'Three.js', 'GSAP'],
    port: 5299,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-14',
    slug: 'studio-split-navigation',
    name: '130. Studio Split Navigation',
    subtitle: 'Dual Screen Split Door & Editorial Typography',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5300,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-15',
    slug: 'akaru-menu-rebuild',
    name: '131. Akaru Menu Rebuild',
    subtitle: 'Award-Winning Akaru Studio Fullscreen Menu Rebuild',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5301,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-16',
    slug: 'noir-mode-dark-nav-menu',
    name: '132. Noir Mode Dark Nav Menu',
    subtitle: 'Sleek Dark Mode Dropdown & Neon Accent Line',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5302,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-17',
    slug: 'interactive-floating-nav-dock',
    name: '133. Interactive Floating Nav Dock',
    subtitle: 'Mac-Style Magnification Dock & Pill Hover Feedback',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5303,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-18',
    slug: 'fullscreen-card-overlay-menu',
    name: '134. Fullscreen Card Overlay Menu',
    subtitle: 'Floating Card Grid Stack & Smooth Link Zoom',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5304,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-19',
    slug: 'perspective-cube-nav-menu',
    name: '135. Perspective Cube Nav Menu',
    subtitle: '3D Cube Rotation Navigation & Face Shift',
    tech: ['HTML5', 'GSAP', 'CSS3D'],
    port: 5305,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-20',
    slug: 'agency-kinetic-navigation',
    name: '136. Agency Kinetic Navigation',
    subtitle: 'High-Impact Agency Header & Staggered Menu Reveal',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5306,
    path: '/',
    category: 'navigation-menus'
  },
  {
    id: 'nav-21',
    slug: 'modernist-curtain-nav-menu',
    name: '137. Modernist Curtain Nav Menu',
    subtitle: 'Architectural Vertical Curtain Slide & Minimal Type',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5307,
    path: '/',
    category: 'navigation-menus'
  },

  // Page Transitions Collapsible Dropdown Category (14 Components)
  {
    id: 'pt-1',
    slug: 'vanilla-async-page-transition',
    name: '138. Vanilla Async Page Transition',
    subtitle: 'Asynchronous Page Slide & Viewport Fade Wave',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5308,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-2',
    slug: 'detroit-paris-infinite-slider',
    name: '139. Detroit Paris Infinite Slider',
    subtitle: 'Full-Bleed Editorial Slider & Dynamic Page Shift',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5309,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-3',
    slug: 'clip-path-layers-animation',
    name: '140. Clip-Path Layers Animation',
    subtitle: 'Staggered Clip-Path Unfold & Multi-Layer Revealer',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5310,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-4',
    slug: 'webgl-pixel-shader-transition',
    name: '141. WebGL Pixel Shader Transition',
    subtitle: 'Fragment Pixelation Wipe & Dynamic Texture Morph',
    tech: ['Three.js', 'WebGL', 'GLSL'],
    port: 5311,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-5',
    slug: 'svg-stroke-path-page-transition',
    name: '142. SVG Stroke Path Page Transition',
    subtitle: 'Morphing Path Curtain & Vector Stroke Reveal',
    tech: ['HTML5', 'SVG', 'GSAP'],
    port: 5312,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-6',
    slug: 'slice-revealer-page-transition',
    name: '143. Slice Revealer Page Transition',
    subtitle: 'Multi-Bar Slicing Reveal & Staggered Viewport Wave',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5313,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-7',
    slug: 'minimal-kinetic-curtain-slide',
    name: '144. Minimal Kinetic Curtain Slide',
    subtitle: 'Architectural Fullscreen Curtain Lift & Fade',
    tech: ['HTML5', 'GSAP', 'CSS3'],
    port: 5314,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-8',
    slug: 'barbajs-webgl-page-transition',
    name: '145. Barba.js WebGL Page Transition',
    subtitle: 'Router-Integrated WebGL Mesh Morph & Page Wipe',
    tech: ['Barba.js', 'GSAP', 'Three.js'],
    port: 5315,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-9',
    slug: 'waabi-studio-page-transition',
    name: '146. Waabi Studio Page Transition',
    subtitle: 'Next.js App Router Spatial Slide & Header Morph',
    tech: ['Next.js', 'Framer Motion', 'React'],
    port: 5316,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-10',
    slug: 'kinetic-type-page-transition',
    name: '147. Kinetic Type Page Transition',
    subtitle: 'Dynamic Typography Wipe & Staggered Letter Shift',
    tech: ['HTML5', 'GSAP', 'ImagesLoaded'],
    port: 5317,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-11',
    slug: 'fullscreen-slide-curtain-transition',
    name: '148. Fullscreen Slide Curtain Transition',
    subtitle: 'Vertical Slide Curtain & Staggered Content Push',
    tech: ['HTML5', 'GSAP', 'Vite'],
    port: 5318,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-12',
    slug: 'block-reveal-page-transition',
    name: '149. Block Reveal Page Transition',
    subtitle: 'Next.js Matrix Block Unfold & Page Reveal',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    port: 5319,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-13',
    slug: 'nextjs-spatial-viewport-transition',
    name: '150. Next.js Spatial Viewport Transition',
    subtitle: 'Lenis Smooth Scroll & Viewport Scale Outro',
    tech: ['Next.js', 'GSAP', 'Lenis'],
    port: 5320,
    path: '/',
    category: 'page-transitions'
  },
  {
    id: 'pt-14',
    slug: 'svg-morphing-mask-page-transition',
    name: '151. SVG Morphing Mask Page Transition',
    subtitle: 'Bezier Curve Path Wipe & Dynamic Portal Scale',
    tech: ['Next.js', 'Framer Motion', 'SVG'],
    port: 5321,
    path: '/',
    category: 'page-transitions'
  },

  // Physics Effects Collapsible Dropdown Category (10 Components)
  {
    id: 'pe-1',
    slug: 'interactive-sticky-cursor',
    name: '152. Interactive Sticky Cursor',
    subtitle: 'Magnetic Element Magnetism & Elastic Spring Tracking',
    tech: ['Next.js', 'Framer Motion', 'React'],
    port: 5322,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-2',
    slug: 'svg-bezier-curve-elastic-rope',
    name: '153. SVG Bezier Curve Elastic Rope',
    subtitle: 'Dynamic String Vibration & Elastic Bezier Physics',
    tech: ['Next.js', 'Framer Motion', 'SVG'],
    port: 5323,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-3',
    slug: 'magnetic-spring-physics-button',
    name: '154. Magnetic Spring Physics Button',
    subtitle: 'Cursor Magnetic Repulsion & Spring Tension Feedback',
    tech: ['Next.js', 'GSAP', 'Framer'],
    port: 5324,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-4',
    slug: 'flip-physics-fluid-triangle',
    name: '155. FLIP Physics Fluid Triangle',
    subtitle: 'Triangle FLIP Fluid Simulation & Velocity Ripples',
    tech: ['HTML5', 'Canvas', 'WebGL'],
    port: 5325,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-5',
    slug: 'heavy-gravity-inertial-card',
    name: '156. Heavy Gravity Inertial Card',
    subtitle: 'Mass Inertia Tilt & Heavy Gravity Spring Oscillation',
    tech: ['HTML5', 'GSAP', 'Canvas'],
    port: 5326,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-6',
    slug: 'orbital-particle-gravity-attractor',
    name: '157. Orbital Particle Gravity Attractor',
    subtitle: 'Multi-Body Gravitational Pull & Swarm Dynamics',
    tech: ['HTML5', 'Three.js', 'Canvas'],
    port: 5327,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-7',
    slug: 'liquid-surface-physics-mesh',
    name: '158. Liquid Surface Physics Mesh',
    subtitle: 'Fluid Surface Heightfield & Water Ripple Displacement',
    tech: ['HTML5', 'WebGL', 'GLSL'],
    port: 5328,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-8',
    slug: 'circle-packing-physics-simulation',
    name: '159. 2D Circle Packing Physics Simulation',
    subtitle: 'Collision Detection & Rigid Body Sphere Packing',
    tech: ['HTML5', 'Matter.js', 'Canvas'],
    port: 5329,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-9',
    slug: 'interactive-water-fluid-simulator',
    name: '160. Interactive Water Fluid Simulator',
    subtitle: 'Navier-Stokes Fluid Dynamics & Particle Water Flow',
    tech: ['HTML5', 'Canvas', 'WebGL'],
    port: 5330,
    path: '/',
    category: 'physics-effects'
  },
  {
    id: 'pe-10',
    slug: 'r3f-rapier-ball-of-glass',
    name: '161. R3F Rapier Ball of Glass',
    subtitle: 'Rapier Physics Engine Ball-of-Glass & Refraction Mesh',
    tech: ['Next.js', 'R3F', 'Rapier'],
    port: 5331,
    path: '/',
    category: 'physics-effects'
  }
,

  {
    id: 'sliders-sliders-1',
    slug: 'component-demo',
    name: '162. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5332,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-2',
    slug: 'atelier-nova-slider',
    name: '163. Atelier Nova Slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5333,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-3',
    slug: 'stacked-cards-nature',
    name: '164. Stacked Cards Nature',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5334,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-4',
    slug: 'webgl-slider-pack',
    name: '165. WebGL Slider Pack',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5335,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-5',
    slug: 'project-showcase-scramble-only',
    name: '166. Project Showcase - Scramble Only',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5336,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-6',
    slug: 'component-demo',
    name: '167. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5337,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-7',
    slug: 'webgl-slideshow-experimentation',
    name: '168. WebGL slideshow experimentation',
    subtitle: 'Interactive Sliders Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5338,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-8',
    slug: 'home-page',
    name: '169. Home Page',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5339,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-9',
    slug: 'curved-threejs-slider',
    name: '170. Curved threejs slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5340,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-10',
    slug: 'three-slider-preloader',
    name: '171. Three Slider Preloader',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5341,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-11',
    slug: 'webgl-carousel-codrops',
    name: '172. WebGL Carousel | Codrops',
    subtitle: 'Interactive Sliders Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5342,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-12',
    slug: 'crossroads-slideshow',
    name: '173. Crossroads Slideshow |',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5343,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-13',
    slug: 'shapes-slideshow',
    name: '174. Shapes Slideshow',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5344,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-14',
    slug: 'ripple-displacement-slider',
    name: '175. Ripple Displacement Slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5345,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-15',
    slug: 'component-demo',
    name: '176. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5346,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-16',
    slug: 'component-demo',
    name: '177. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5347,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-17',
    slug: 'component-demo',
    name: '178. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5348,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-18',
    slug: 'voku-image-slider',
    name: '179. Voku Image Slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5349,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-19',
    slug: 'modular-carousel',
    name: '180. Modular Carousel',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5350,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-20',
    slug: 'threejs-infinite-slider',
    name: '181. ThreeJS Infinite Slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5351,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-21',
    slug: 'overlapping-swiper-master',
    name: '182. Overlapping Swiper Master',
    subtitle: 'Interactive Sliders Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5352,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-22',
    slug: 'detroitparis-infinite-slider',
    name: '183. DetroitParis Infinite Slider',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5353,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'sliders-sliders-23',
    slug: 'component-demo',
    name: '184. Component Demo',
    subtitle: 'Interactive Sliders Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5354,
    path: '/',
    category: 'sliders'
  },
  {
    id: 'svg-animations-svg-animations-1',
    slug: 'svg-shape-overlays',
    name: '185. Svg Shape Overlays',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5355,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-2',
    slug: 'morphsvgcomplex-paths',
    name: '186. Morphsvgcomplex Paths',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5356,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-3',
    slug: 'on-scroll-svg-filter-animations-on-text',
    name: '187. On-Scroll SVG Filter Animations on Text |',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5357,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-4',
    slug: 'on-scroll-filter-effects',
    name: '188. On-Scroll Filter Effects |',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5358,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-5',
    slug: 'on-scroll-path-animations',
    name: '189. On-Scroll Path Animations |',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5359,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-6',
    slug: 'sketch-019-image-motion-effect-with-svg-filter-demo',
    name: '190. Sketch 019: Image Motion Effect with SVG Filter Demo |',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5360,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-7',
    slug: 'component-demo',
    name: '191. Component Demo',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5361,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-8',
    slug: 'morphing-background-shapes',
    name: '192. Morphing Background Shapes',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5362,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-9',
    slug: 'canvas-particles',
    name: '193. Canvas Particles',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5363,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-10',
    slug: 'underwater-navigation',
    name: '194. Underwater Navigation |',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5364,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'svg-animations-svg-animations-11',
    slug: 'ashleybrookecs-smudge-revealer',
    name: '195. Ashleybrookecs Smudge Revealer',
    subtitle: 'Interactive SVG Animations Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5365,
    path: '/',
    category: 'svg-animations'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-1',
    slug: 'clair-obscur-expedition-33-webgpu-gommage-effect',
    name: '196. Clair Obscur: Expedition 33 WebGPU Gommage Effect |',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5366,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-2',
    slug: 'webgl-mouseover-effects-master',
    name: '197. Webgl Mouseover Effects Master',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5367,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-3',
    slug: 'gooey-hover-effects-on-images-with-three-js',
    name: '198. Gooey Hover Effects on Images with Three.js |',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5368,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-4',
    slug: 'stickyimageeffect-master',
    name: '199. Stickyimageeffect Master',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5369,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-5',
    slug: 'tutorial-grid-main',
    name: '200. Tutorial Grid Main',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5370,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-6',
    slug: 'image-reveal-effect-with-r3f-glsl',
    name: '201. Image Reveal Effect with R3F & GLSL',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5371,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-7',
    slug: 'vfx-js-text-shadow-effect',
    name: '202. Vfx Js Text Shadow Effect',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5372,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-8',
    slug: 'pixel-distortion-with-three-js',
    name: '203. Pixel Distortion with Three.js',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5373,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-9',
    slug: 'interactive-particles-codrops',
    name: '204. Interactive Particles | Codrops',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5374,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-10',
    slug: 'codrops-sdf-lens-blur',
    name: '205. Codrops SDF Lens Blur',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5375,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-11',
    slug: 'creative-webgl-blobs',
    name: '206. Creative WebGL Blobs',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5376,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-12',
    slug: 'the-substance-master',
    name: '207. The Substance Master',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5377,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-13',
    slug: 'morphing-effect-with-canvas2d',
    name: '208. Morphing Effect with Canvas2D |',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5378,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-14',
    slug: 'text-hover-effect-using-shaders',
    name: '209. Text Hover Effect Using Shaders',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5379,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-15',
    slug: 'home-page',
    name: '210. Home Page',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5380,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-16',
    slug: 'home-page',
    name: '211. Home Page',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5381,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-17',
    slug: 'component-demo',
    name: '212. Component Demo',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5382,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-18',
    slug: 'image-distortion',
    name: '213. Image Distortion',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5383,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'webgl-threejs-effects-webgl-&-threejs-effects-19',
    slug: 'vite-app',
    name: '214. Vite App',
    subtitle: 'Interactive WebGL & ThreeJS Effects Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5384,
    path: '/',
    category: 'webgl-threejs-effects'
  },
  {
    id: 'scroll-animations-scroll-animation-1',
    slug: 'document',
    name: '215. Document',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5385,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2',
    slug: 'on-scroll-text-animations-with-svg-clip-path',
    name: '216. On-Scroll Text Animations with SVG Clip-Path |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5386,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-3',
    slug: 'responsive-and-accessible-webgl-text-with-three-js-and-troika',
    name: '217. Responsive and Accessible WebGL Text With Three.js and Troika',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5387,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-4',
    slug: 'fullscreen-clip-path-transitions',
    name: '218. Fullscreen Clip-path Transitions',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5388,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-5',
    slug: 'on-scroll-3d-grid-animations',
    name: '219. On-Scroll 3D Grid Animations |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5389,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-6',
    slug: 'staggered-3d-grid-animations',
    name: '220. Staggered (3D) Grid Animations |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5390,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-7',
    slug: 'crt-like-effect-with-vfx-js',
    name: '221. Crt Like Effect With Vfx Js',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5391,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-8',
    slug: 'text-clip-mask-on-scroll-master',
    name: '222. Text Clip Mask On Scroll Master',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5392,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-9',
    slug: '01-horizontal-blinds',
    name: '223. 01-Horizontal-Blinds',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5393,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-10',
    slug: 'telescope-zoom-animation-on-scroll',
    name: '224. Telescope Zoom Animation on Scroll |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5394,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-11',
    slug: 'gsap-threejs-master',
    name: '225. Gsap Threejs Master',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Astro", "GSAP", "Three.js"],
    port: 5395,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-12',
    slug: 'webgl-progressive-blur',
    name: '226. WebGL Progressive Blur |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5396,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-13',
    slug: 'pixel-scan-effect-with-vfx-js',
    name: '227. Pixel Scan Effect With Vfx Js',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5397,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-14',
    slug: 'vfx-js-scroll-animation',
    name: '228. Vfx Js Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5398,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-15',
    slug: 'containeranimation-splittext',
    name: '229. Containeranimation Splittext',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5399,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-16',
    slug: 'sticky-grid-scroll',
    name: '230. Sticky Grid Scroll |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5400,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-18',
    slug: '3d-stack-motion-effect',
    name: '231. 3D Stack Motion Effect |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5401,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-19',
    slug: 'connected-grid-layout-animation',
    name: '232. Connected Grid Layout Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5402,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-20',
    slug: 'infinite-loop-scrolling',
    name: '233. Infinite Loop Scrolling |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5403,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-21',
    slug: 'on-scroll-image-layout-animations',
    name: '234. On-Scroll Image Layout Animations |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5404,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-22',
    slug: 'on-scroll-pixelated-image-loading-effect',
    name: '235. On-Scroll Pixelated Image Loading Effect |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5405,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-23',
    slug: 'text-repetition-scroll-effect',
    name: '236. Text Repetition Scroll Effect',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5406,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-24',
    slug: 'animated-continuous-sections-with-gsap-observer',
    name: '237. Animated Continuous Sections With Gsap Observer',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5407,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-25',
    slug: 'background-shift-with-css-blend-modes',
    name: '238. Background Shift with CSS Blend Modes',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5408,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-26',
    slug: '3d-folded-layout',
    name: '239. 3D Folded Layout',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5409,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-27',
    slug: 'animating-svg-text-on-a-path',
    name: '240. Animating SVG Text on a Path |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "SVG", "GSAP"],
    port: 5410,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-28',
    slug: 'fullscreen-scrolling-slideshow',
    name: '241. Fullscreen Scrolling Slideshow |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5411,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-29',
    slug: 'gsap-pinned-image-mask-reveal-on-scroll',
    name: '242. Gsap Pinned Image Mask Reveal On Scroll',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5412,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-30',
    slug: 'one-element-scroll',
    name: '243. One Element Scroll |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5413,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-31',
    slug: 'dual-wave-text-animation',
    name: '244. Dual Wave Text Animation |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5414,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-32',
    slug: 'component-demo',
    name: '245. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5415,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-33',
    slug: 'component-demo',
    name: '246. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5416,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-34',
    slug: 'buildloom',
    name: '247. BUILDLOOM',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5417,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-35',
    slug: 'component-demo',
    name: '248. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5418,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-36',
    slug: 'ingamana-scroll-animation-nextjs',
    name: '249. Ingamana Scroll Animation Nextjs',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5419,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-37',
    slug: 'ascii-image-reveal-effect',
    name: '250. ASCII Image Reveal Effect',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5420,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-38',
    slug: 'maximatherapy-sticky-cards',
    name: '251. MaximaTherapy Sticky Cards',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5421,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-39',
    slug: 'component-demo',
    name: '252. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5422,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-40',
    slug: 'component-demo',
    name: '253. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5423,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-41',
    slug: 'scrolltrigger-clip-mask-animation',
    name: '254. ScrollTrigger Clip-mask Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5424,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-42',
    slug: 'orchestra-3d-scroll-animation',
    name: '255. Orchestra 3D Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5425,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-43',
    slug: 'orkenworld-scroll-animation',
    name: '256. OrkenWorld Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5426,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-44',
    slug: 'lusion-3d-cards',
    name: '257. Lusion 3D Cards',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5427,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-45',
    slug: 'kvs-studio-scroll-powered-image-reveal',
    name: '258. KVS Studio Scroll-Powered Image Reveal',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5428,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-46',
    slug: 'scroll-wave-image-gallery',
    name: '259. Scroll Wave Image Gallery',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5429,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-47',
    slug: 'senseitech-scroll-animation',
    name: '260. SenseiTech Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5430,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-48',
    slug: 'lottie-scroll-animation',
    name: '261. Lottie Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5431,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-49',
    slug: 'the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-lenis-gsap',
    name: '262. The Never Ending Story: Building a Seamless Infinite Scroll Experience with Lenis + GSAP',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5432,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-51',
    slug: 'clayboan-scroll-animation',
    name: '263. Clayboan Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5433,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-52',
    slug: 'heurebleue-scroll-animation',
    name: '264. HeureBleue Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5434,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-53',
    slug: 'mask-reveal-animation-on-scroll',
    name: '265. Mask Reveal Animation On Scroll',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5435,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-56',
    slug: 'fall-master',
    name: '266. Fall Master',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5436,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-57',
    slug: 'pixel-image-master',
    name: '267. Pixel Image Master',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5437,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-59',
    slug: 'lemon-bureau',
    name: '268. Lemon Bureau',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5438,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-61',
    slug: 'component-demo',
    name: '269. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5439,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-62',
    slug: 'component-demo',
    name: '270. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5440,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-63',
    slug: 'voyeurverite-scroll-animation',
    name: '271. VoyeurVerite Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5441,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-64',
    slug: 'voltlites-scroll-animation',
    name: '272. Voltlites Scroll Animation',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5442,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-65',
    slug: 'clip-path-slider',
    name: '273. Clip-Path Slider',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5443,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-66',
    slug: 'component-demo',
    name: '274. Component Demo',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5444,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-67',
    slug: 'glitchandgrit-infinite-slider',
    name: '275. GlitchAndGrit Infinite Slider',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Swiper"],
    port: 5445,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2-17',
    slug: 'expanding-image-animation-within-typography',
    name: '276. Expanding Image Animation within Typography |',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5446,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2-50',
    slug: 'hypnotic-image-gallery-using-gsap-flip',
    name: '277. Hypnotic Image Gallery Using GSAP Flip',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["HTML5", "GSAP", "Vite"],
    port: 5447,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2-54',
    slug: 'code',
    name: '278. Code',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5448,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2-58',
    slug: 'abstract-cards-main',
    name: '279. Abstract Cards Main',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Next.js", "React", "Framer"],
    port: 5449,
    path: '/',
    category: 'scroll-animations'
  },
  {
    id: 'scroll-animations-scroll-animation-2-60',
    slug: 'deadspace',
    name: '280. Deadspace',
    subtitle: 'Interactive Scroll Animations Lab',
    tech: ["Three.js", "WebGL", "GLSL"],
    port: 5450,
    path: '/',
    category: 'scroll-animations'
  }
];

let activeComponentIndex = 0;
let isSidebarOpen = true;
let searchQuery = '';

// Accordion collapsed state per category (default: open)
const categoryCollapsedState = {
  '3d-animation': false,
  'background-animations': false,
  'grid-animations': false,
  'hero-animations': false,
  'hover-effects': false,
  'mouse-effects': false,
  'navigation-menus': false,
  'page-transitions': false,
  'physics-effects': false,
  'sliders': false,
  'svg-animations': false,
  'webgl-threejs-effects': false,
  'scroll-animations': false
};

const appContainer = document.getElementById('app');
const navContainer = document.getElementById('component-nav');
const activeTitle = document.getElementById('active-title');
const activeBadge = document.getElementById('active-badge');
const iframe = document.getElementById('stage-iframe');
const btnRefresh = document.getElementById('btn-refresh');
const btnFullscreen = document.getElementById('btn-fullscreen');
const btnSidebarCollapse = document.getElementById('btn-sidebar-collapse');
const btnMenuToggle = document.getElementById('btn-menu-toggle');
const searchInput = document.getElementById('slush-search-input');

function createNavItemElement(comp, index) {
  const btn = document.createElement('button');
  btn.className = `nav-item ${index === activeComponentIndex ? 'active' : ''}`;
  btn.setAttribute('data-slug', comp.slug);
  btn.innerHTML = `
    <div class="nav-item-title">${comp.name}</div>
    <div class="nav-item-subtitle">${comp.subtitle}</div>
    <div class="nav-item-tech">
      ${comp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
  `;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    switchComponent(index);
  });
  return btn;
}

function matchesSearch(comp) {
  if (!searchQuery) return true;
  const q = searchQuery.toLowerCase();
  return (
    comp.name.toLowerCase().includes(q) ||
    comp.subtitle.toLowerCase().includes(q) ||
    comp.tech.some(t => t.toLowerCase().includes(q)) ||
    comp.slug.toLowerCase().includes(q)
  );
}

function renderNav() {
  navContainer.innerHTML = '';

  // Render standalone components (category === null)
  const standaloneComps = COMPONENTS.map((comp, idx) => ({ comp, idx }))
    .filter(item => item.comp.category === null && matchesSearch(item.comp));
    
  standaloneComps.forEach(({ comp, idx }) => {
    navContainer.appendChild(createNavItemElement(comp, idx));
  });

  // Render category accordions
  CATEGORIES.forEach(cat => {
    const categoryComps = COMPONENTS.map((comp, idx) => ({ comp, idx }))
      .filter(item => item.comp.category === cat.id && matchesSearch(item.comp));
      
    if (categoryComps.length === 0) return; // Skip empty categories

    // Auto-expand category if active search query is present
    const isCollapsed = searchQuery ? false : !!categoryCollapsedState[cat.id];

    const categoryGroup = document.createElement('div');
    categoryGroup.className = `category-group ${isCollapsed ? 'collapsed' : ''}`;

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <div class="category-title-group">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-title">${cat.name}</span>
        <span class="category-badge">${categoryComps.length}</span>
      </div>
      <span class="category-arrow">▼</span>
    `;

    header.addEventListener('click', () => {
      categoryCollapsedState[cat.id] = !categoryCollapsedState[cat.id];
      renderNav();
    });

    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'category-children';

    categoryComps.forEach(({ comp, idx }) => {
      childrenContainer.appendChild(createNavItemElement(comp, idx));
    });

    categoryGroup.appendChild(header);
    categoryGroup.appendChild(childrenContainer);
    navContainer.appendChild(categoryGroup);
  });
}

function switchComponent(index, updateHash = true) {
  if (index < 0 || index >= COMPONENTS.length) index = 0;
  activeComponentIndex = index;

  const comp = COMPONENTS[index];

  // If active component is inside a collapsed category, auto-expand that category
  if (comp.category && categoryCollapsedState[comp.category]) {
    categoryCollapsedState[comp.category] = false;
  }

  renderNav();
  
  activeTitle.innerHTML = `${comp.name} <span>★</span>`;
  activeBadge.textContent = comp.tech.join(' • ');
  
  // Set iframe source
  const targetUrl = `http://localhost:${comp.port}${comp.path}`;
  iframe.src = targetUrl;

  // Update URL hash slug
  if (updateHash) {
    window.location.hash = `/${comp.slug}`;
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash) {
    const foundIndex = COMPONENTS.findIndex(c => c.slug === hash || c.id === hash);
    if (foundIndex !== -1 && foundIndex !== activeComponentIndex) {
      switchComponent(foundIndex, false);
      return;
    }
  }
  if (!hash && activeComponentIndex !== 0) {
    switchComponent(0, false);
  }
}

function toggleSidebar(open) {
  if (open === undefined) {
    isSidebarOpen = !isSidebarOpen;
  } else {
    isSidebarOpen = open;
  }
  
  if (isSidebarOpen) {
    appContainer.classList.remove('sidebar-collapsed');
  } else {
    appContainer.classList.add('sidebar-collapsed');
  }
}

btnSidebarCollapse.addEventListener('click', () => toggleSidebar(false));
btnMenuToggle.addEventListener('click', () => toggleSidebar());

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderNav();
  });
}

btnRefresh.addEventListener('click', () => {
  iframe.src = iframe.src;
});

btnFullscreen.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  }
});

window.addEventListener('hashchange', handleHashChange);

// Initialize component based on initial URL hash slug or default to first
const initialHash = window.location.hash.replace(/^#\/?/, '');
const initialIndex = COMPONENTS.findIndex(c => c.slug === initialHash || c.id === initialHash);
if (initialIndex !== -1) {
  switchComponent(initialIndex, false);
} else {
  switchComponent(0, true);
}
