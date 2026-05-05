"use client";

import { useEffect, useRef } from "react";

import { useHasMounted } from "@/hooks/use-has-mounted";

type TouchParticle = {
  color: string;
  life: number;
  maxLife: number;
  size: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

type TouchRipple = {
  life: number;
  maxLife: number;
  radius: number;
  radiusGrowth: number;
  strong: boolean;
  x: number;
  y: number;
};

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "input:not([type='hidden'])",
  "textarea",
  "select",
  "[role='button']",
  "[data-touch-surface]",
  "[data-cursor='card']"
].join(",");

const SURFACE_SELECTOR = "[data-touch-surface]";
const STRONG_TOUCH_SELECTOR = [
  "[data-touch-strength='strong']",
  "[data-touch-surface='button']",
  "[data-touch-surface='card']",
  "[data-cursor-burst='strong']"
].join(",");

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MobileTouchEffects() {
  const hasMounted = useHasMounted();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<TouchParticle[]>([]);
  const ripplesRef = useRef<TouchRipple[]>([]);
  const stateRef = useRef<{
    activePointerId: null | number;
    activeSurface: HTMLElement | null;
    lastFrame: number;
    lastTrailAt: number;
    lastX: number;
    lastY: number;
  }>({
    activePointerId: null,
    activeSurface: null,
    lastFrame: 0,
    lastTrailAt: 0,
    lastX: 0,
    lastY: 0
  });

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const canvas = canvasRef.current;
    const touchQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !touchQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const state = stateRef.current;
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue("--color-accent").trim() || "#00E676";
    const accent = rootStyles.getPropertyValue("--color-accent-secondary").trim() || "#14B8A6";
    const highlight = rootStyles.getPropertyValue("--color-highlight").trim() || "#A7F3D0";
    const colors = [primary, accent, highlight];

    document.documentElement.classList.add("has-mobile-touch-effects");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const findInteractiveTarget = (target: EventTarget | null) =>
      target instanceof HTMLElement ? (target.closest(INTERACTIVE_SELECTOR) as HTMLElement | null) : null;

    const findSurfaceTarget = (target: EventTarget | null) =>
      target instanceof HTMLElement
        ? ((target.closest(SURFACE_SELECTOR) as HTMLElement | null) ??
          (target.closest("button, a[href], [role='button']") as HTMLElement | null))
        : null;

    const setActiveSurface = (surface: HTMLElement | null) => {
      if (state.activeSurface && state.activeSurface !== surface) {
        state.activeSurface.removeAttribute("data-touch-active");
      }

      state.activeSurface = surface;

      if (surface) {
        surface.setAttribute("data-touch-active", "true");
      }
    };

    const releaseActiveSurface = () => {
      const surface = state.activeSurface;

      if (!surface) {
        return;
      }

      window.setTimeout(() => {
        surface.removeAttribute("data-touch-active");

        if (state.activeSurface === surface) {
          state.activeSurface = null;
        }
      }, 160);
    };

    const pushParticle = (particle: TouchParticle) => {
      particlesRef.current.push(particle);

      if (particlesRef.current.length > 72) {
        particlesRef.current.splice(0, particlesRef.current.length - 72);
      }
    };

    const pushRipple = (ripple: TouchRipple) => {
      ripplesRef.current.push(ripple);

      if (ripplesRef.current.length > 18) {
        ripplesRef.current.splice(0, ripplesRef.current.length - 18);
      }
    };

    const spawnBurst = (x: number, y: number, strong: boolean) => {
      const count = strong ? 12 : 7;

      for (let index = 0; index < count; index += 1) {
        const angle = (Math.PI * 2 * index) / count + (Math.random() - 0.5) * 0.28;
        const speed = (strong ? 1.8 : 1.2) + Math.random() * (strong ? 1.4 : 0.9);

        pushParticle({
          color: colors[index % colors.length]!,
          life: strong ? 18 + Math.random() * 9 : 13 + Math.random() * 7,
          maxLife: strong ? 18 + Math.random() * 9 : 13 + Math.random() * 7,
          size: strong ? 1.4 + Math.random() * 1.2 : 1 + Math.random() * 0.8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          x,
          y
        });
      }
    };

    const spawnTrail = (x: number, y: number, vx: number, vy: number) => {
      pushParticle({
        color: colors[Math.floor(Math.random() * colors.length)]!,
        life: 8 + Math.random() * 4,
        maxLife: 8 + Math.random() * 4,
        size: 0.8 + Math.random() * 0.7,
        vx: -vx * (0.06 + Math.random() * 0.02) + (Math.random() - 0.5) * 0.36,
        vy: -vy * (0.06 + Math.random() * 0.02) + (Math.random() - 0.5) * 0.36,
        x,
        y
      });
    };

    const spawnRipple = (x: number, y: number, strong: boolean) => {
      pushRipple({
        life: strong ? 22 : 16,
        maxLife: strong ? 22 : 16,
        radius: strong ? 10 : 8,
        radiusGrowth: strong ? 2.7 : 2.1,
        strong,
        x,
        y
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") {
        return;
      }

      const interactiveTarget = findInteractiveTarget(event.target);
      const surfaceTarget = findSurfaceTarget(event.target);
      const strong = Boolean(interactiveTarget?.closest(STRONG_TOUCH_SELECTOR) ?? interactiveTarget);

      state.activePointerId = event.pointerId;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      state.lastTrailAt = performance.now();

      setActiveSurface(surfaceTarget);
      spawnRipple(event.clientX, event.clientY, strong);
      spawnBurst(event.clientX, event.clientY, strong);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch" || state.activePointerId !== event.pointerId) {
        return;
      }

      const dx = event.clientX - state.lastX;
      const dy = event.clientY - state.lastY;
      const distance = Math.hypot(dx, dy);
      const now = performance.now();

      if (distance > 8 && now - state.lastTrailAt > 32) {
        spawnTrail(event.clientX, event.clientY, dx, dy);
        state.lastTrailAt = now;
        state.lastX = event.clientX;
        state.lastY = event.clientY;
      }
    };

    const endPointer = (event: PointerEvent) => {
      if (event.pointerType !== "touch" || state.activePointerId !== event.pointerId) {
        return;
      }

      state.activePointerId = null;
      releaseActiveSurface();
    };

    const renderRipples = (delta: number) => {
      const activeRipples: TouchRipple[] = [];

      for (const ripple of ripplesRef.current) {
        ripple.life -= delta * 0.9;
        ripple.radius += ripple.radiusGrowth * delta;

        if (ripple.life <= 0) {
          continue;
        }

        const alpha = ripple.life / ripple.maxLife;
        const glowRadius = ripple.strong ? 18 : 12;
        const lineWidth = ripple.strong ? 1.8 : 1.4;

        context.save();
        context.globalCompositeOperation = "lighter";
        context.shadowBlur = glowRadius;
        context.shadowColor = primary;
        context.strokeStyle = accent;
        context.globalAlpha = alpha * 0.22;
        context.lineWidth = lineWidth * 4.2;
        context.beginPath();
        context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        context.stroke();

        context.shadowBlur = glowRadius * 0.55;
        context.shadowColor = accent;
        context.strokeStyle = highlight;
        context.globalAlpha = alpha * 0.78;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.arc(ripple.x, ripple.y, ripple.radius * 0.94, 0, Math.PI * 2);
        context.stroke();
        context.restore();

        activeRipples.push(ripple);
      }

      ripplesRef.current = activeRipples;
    };

    const renderParticles = (delta: number) => {
      const activeParticles: TouchParticle[] = [];

      for (const particle of particlesRef.current) {
        particle.life -= delta * 0.92;

        if (particle.life <= 0) {
          continue;
        }

        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vx *= 0.985;
        particle.vy *= 0.982;
        particle.vy += 0.01 * delta;

        const alpha = particle.life / particle.maxLife;

        context.save();
        context.globalCompositeOperation = "lighter";
        context.globalAlpha = alpha * 0.26;
        context.shadowBlur = 10;
        context.shadowColor = particle.color;
        context.strokeStyle = particle.color;
        context.lineWidth = particle.size * 2.2;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(particle.x - particle.vx * 1.6, particle.y - particle.vy * 1.6);
        context.stroke();

        context.globalAlpha = alpha * 0.88;
        context.lineWidth = particle.size;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(particle.x - particle.vx * 1.05, particle.y - particle.vy * 1.05);
        context.stroke();
        context.restore();

        activeParticles.push(particle);
      }

      particlesRef.current = activeParticles;
    };

    const animate = (timestamp: number) => {
      if (!state.lastFrame) {
        state.lastFrame = timestamp;
      }

      const delta = clamp((timestamp - state.lastFrame) / 16.6667, 0.6, 1.6);
      state.lastFrame = timestamp;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      renderRipples(delta);
      renderParticles(delta);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", endPointer, { passive: true });
    window.addEventListener("pointercancel", endPointer, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-mobile-touch-effects");
      state.activeSurface?.removeAttribute("data-touch-active");
      state.activeSurface = null;

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endPointer);
      window.removeEventListener("pointercancel", endPointer);
    };
  }, [hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[94]" />;
}
