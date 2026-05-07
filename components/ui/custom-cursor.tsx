"use client";

import { useEffect, useRef } from "react";

import { useHasMounted } from "@/hooks/use-has-mounted";

type CursorParticle = {
  color: string;
  life: number;
  maxLife: number;
  size: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "input:not([type='hidden'])",
  "textarea",
  "select",
  "label",
  "[role='button']",
  "[data-cursor='interactive']",
  "[data-cursor='card']"
].join(",");

const STRONG_BURST_SELECTOR = "[data-cursor-burst='strong'], button";
const CARD_SELECTOR = "[data-cursor='card']";
const PARTICLE_COLORS = ["#00E676", "#14B8A6", "#A7F3D0"];
const BASE_ROTATION = 14;
const FOLLOW_LERP = 0.62;
const MAX_PARTICLES = 16;
const TRAIL_INTERVAL_MS = 88;
const TRAIL_SPEED_THRESHOLD = 2.8;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function CustomCursor() {
  const hasMounted = useHasMounted();
  const rootRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<CursorParticle[]>([]);
  const lastFrameRef = useRef(0);
  const lastTrailRef = useRef(0);
  const targetRef = useRef({ x: -120, y: -120 });
  const currentRef = useRef({ x: -120, y: -120 });
  const previousRef = useRef({ x: -120, y: -120 });
  const stateRef = useRef({
    activeScale: 1,
    glow: 0.72,
    isEnabled: false,
    isInteractive: false,
    isPressed: false,
    isVisible: false
  });

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const root = rootRef.current;
    const arrow = arrowRef.current;
    const halo = haloRef.current;
    const canvas = canvasRef.current;
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!root || !arrow || !halo || !canvas || !finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const state = stateRef.current;
    state.isEnabled = true;
    document.documentElement.classList.add("has-custom-cursor");

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pushParticle = (particle: CursorParticle) => {
      particlesRef.current.push(particle);

      if (particlesRef.current.length > MAX_PARTICLES) {
        particlesRef.current.splice(0, particlesRef.current.length - MAX_PARTICLES);
      }
    };

    const spawnTrail = (x: number, y: number, vx: number, vy: number) => {
      pushParticle({
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]!,
        life: 4.6,
        maxLife: 4.6,
        size: 0.58 + Math.random() * 0.28,
        vx: -vx * (0.018 + Math.random() * 0.012) + (Math.random() - 0.5) * 0.18,
        vy: -vy * (0.018 + Math.random() * 0.012) + (Math.random() - 0.5) * 0.18,
        x,
        y
      });
    };

    const spawnBurst = (x: number, y: number, isStrong: boolean) => {
      const count = isStrong ? 5 : 3;

      for (let index = 0; index < count; index += 1) {
        const angle = (Math.PI * 2 * index) / count + (Math.random() - 0.5) * 0.3;
        const life = isStrong ? 8 + Math.random() * 3 : 5.8 + Math.random() * 2.2;
        const speed = (isStrong ? 1.45 : 1.05) + Math.random() * (isStrong ? 0.72 : 0.5);

        pushParticle({
          color: PARTICLE_COLORS[index % PARTICLE_COLORS.length]!,
          life,
          maxLife: life,
          size: isStrong ? 0.86 + Math.random() * 0.42 : 0.68 + Math.random() * 0.36,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          x,
          y
        });
      }
    };

    const updateVariant = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      const isInteractive = Boolean(element?.closest(INTERACTIVE_SELECTOR));
      const isCard = Boolean(element?.closest(CARD_SELECTOR));

      state.isInteractive = isInteractive;
      state.activeScale = isInteractive ? 1.05 : isCard ? 1.02 : 1;
      state.glow = isInteractive ? 0.76 : isCard ? 0.62 : 0.52;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      if (!state.isVisible) {
        currentRef.current.x = event.clientX;
        currentRef.current.y = event.clientY;
        previousRef.current.x = event.clientX;
        previousRef.current.y = event.clientY;
      }

      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      state.isVisible = true;

      updateVariant(event.target);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      const element = event.target instanceof HTMLElement ? event.target : null;
      const isStrong = Boolean(element?.closest(STRONG_BURST_SELECTOR));

      state.isPressed = true;
      spawnBurst(event.clientX, event.clientY, isStrong);
    };

    const onPointerUp = () => {
      state.isPressed = false;
    };

    const onPointerLeaveWindow = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        state.isVisible = false;
      }
    };

    const onWindowBlur = () => {
      state.isVisible = false;
      state.isPressed = false;
    };

    const renderParticles = (delta: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = "lighter";

      const activeParticles: CursorParticle[] = [];

      for (const particle of particlesRef.current) {
        const decay = delta * 0.06;
        particle.life -= decay;

        if (particle.life <= 0) {
          continue;
        }

        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vx *= 0.985;
        particle.vy *= 0.982;
        particle.vy += 0.006 * delta;

        const alpha = particle.life / particle.maxLife;

        context.globalAlpha = alpha * 0.2;
        context.strokeStyle = particle.color;
        context.lineWidth = particle.size * 2.1;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(particle.x - particle.vx * 1.45, particle.y - particle.vy * 1.45);
        context.stroke();

        context.globalAlpha = alpha * 0.74;
        context.lineWidth = particle.size;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(particle.x - particle.vx * 0.92, particle.y - particle.vy * 0.92);
        context.stroke();

        activeParticles.push(particle);
      }

      particlesRef.current = activeParticles;
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
    };

    const animate = (timestamp: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = timestamp;
      }

      const delta = Math.min((timestamp - lastFrameRef.current) / 16.6667, 1.5);
      lastFrameRef.current = timestamp;

      const current = currentRef.current;
      const previous = previousRef.current;
      const target = targetRef.current;
      const follow = 1 - Math.pow(1 - FOLLOW_LERP, delta);

      current.x += (target.x - current.x) * follow;
      current.y += (target.y - current.y) * follow;

      if (Math.abs(target.x - current.x) < 0.02) {
        current.x = target.x;
      }

      if (Math.abs(target.y - current.y) < 0.02) {
        current.y = target.y;
      }

      const vx = current.x - previous.x;
      const vy = current.y - previous.y;
      const speed = Math.hypot(vx, vy);

      previous.x = current.x;
      previous.y = current.y;

      if (speed > TRAIL_SPEED_THRESHOLD && timestamp - lastTrailRef.current > TRAIL_INTERVAL_MS) {
        spawnTrail(current.x, current.y, vx, vy);
        lastTrailRef.current = timestamp;
      }

      const tilt = clamp(vx * 0.85, -7, 7);
      const scale = state.isPressed
        ? state.isInteractive
          ? 1
          : 0.96
        : state.activeScale;
      const haloScale = state.isPressed ? state.glow + 0.12 : state.glow;
      const opacity = state.isVisible ? 1 : 0;

      root.style.opacity = `${opacity}`;
      root.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      arrow.style.transform = `translate3d(-5px, -2px, 0) rotate(${BASE_ROTATION + tilt}deg) scale(${scale})`;
      halo.style.opacity = state.isVisible ? `${0.18 + state.glow * 0.18}` : "0";
      halo.style.transform = `translate3d(-11px, -10px, 0) scale(${haloScale})`;

      renderParticles(delta);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("mouseout", onPointerLeaveWindow);
    window.addEventListener("blur", onWindowBlur);

    return () => {
      state.isEnabled = false;
      document.documentElement.classList.remove("has-custom-cursor");

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("mouseout", onPointerLeaveWindow);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, [hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[96] hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      />

      <div
        ref={rootRef}
        aria-hidden="true"
        data-cursor-root
        className="pointer-events-none fixed left-0 top-0 z-[97] hidden opacity-0 transition-opacity duration-150 will-change-transform [@media(hover:hover)_and_(pointer:fine)]:block"
        style={{ willChange: "transform, opacity" }}
      >
        <div
          ref={haloRef}
          className="absolute left-0 top-0 h-6 w-6 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.26)_0%,rgba(20,184,166,0.12)_42%,rgba(167,243,208,0)_74%)] blur-[5px] transition-opacity duration-150 will-change-transform"
          style={{ willChange: "transform, opacity" }}
        />

        <div
          ref={arrowRef}
          className="absolute left-0 top-0 origin-[12px_9px] will-change-transform"
        >
          <svg width="18" height="26" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cursor-fill" x1="3" y1="4" x2="29" y2="43" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(248,250,252,0.96)" />
                <stop offset="0.18" stopColor="rgba(167,243,208,0.72)" />
                <stop offset="0.52" stopColor="rgba(11,31,24,0.62)" />
                <stop offset="1" stopColor="rgba(4,17,13,0.92)" />
              </linearGradient>
              <linearGradient id="cursor-edge" x1="6" y1="5" x2="28" y2="41" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--cursor-highlight)" />
                <stop offset="0.4" stopColor="var(--cursor-primary)" />
                <stop offset="1" stopColor="var(--cursor-accent)" />
              </linearGradient>
              <filter id="cursor-glow" x="-20" y="-20" width="84" height="88" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor="var(--cursor-primary)" floodOpacity="0.42" />
                <feDropShadow dx="0" dy="0" stdDeviation="4.8" floodColor="var(--cursor-accent)" floodOpacity="0.16" />
                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="var(--cursor-shadow)" floodOpacity="0.36" />
              </filter>
            </defs>

            <g filter="url(#cursor-glow)">
              <path
                d="M4.2 3.9C3.44 3.4 2.44 4.07 2.62 4.96L9.17 37.36C9.41 38.55 10.98 38.85 11.65 37.85L15.96 31.37L22.08 45.05C22.39 45.75 23.2 46.06 23.9 45.74L28.03 43.88C28.74 43.56 29.05 42.72 28.71 42.02L22.54 28.38L30.27 28.03C31.46 27.98 32.05 26.56 31.17 25.74L4.2 3.9Z"
                fill="url(#cursor-fill)"
                stroke="url(#cursor-edge)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M6.7 7.43L26.5 24.1L19.66 24.52C18.89 24.57 18.4 25.36 18.71 26.08L24.26 38.56L22.76 39.24L17.16 26.78C16.84 26.06 15.92 25.9 15.39 26.47L11.63 30.51L6.7 7.43Z"
                fill="rgba(248,250,252,0.12)"
              />
              <path
                d="M7.64 8.64L23.61 22.13"
                stroke="rgba(248,250,252,0.62)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M13.98 14.13L20.52 19.62"
                stroke="rgba(248,250,252,0.28)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
