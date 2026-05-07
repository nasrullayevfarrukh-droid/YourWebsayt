"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { heroTrustIndicators } from "@/data/site";

type Rotation = {
  x: number;
  y: number;
};

type Vec3 = {
  x: number;
  y: number;
  z: number;
};

type ProjectedPoint = {
  scale: number;
  x: number;
  y: number;
  z: number;
};

const heroHeadline = ["Biznesinizi daha ciddi göstərən", "premium veb saytlar qururuq"];
const heroDescription =
  "YourWebsayt şirkətlər, restoranlar, klinikalar, daşınmaz əmlak ofisləri, rent a car biznesləri və şəxsi brendlər üçün sürətli, modern və satış yönümlü saytlar hazırlayır.";

const TWO_PI = Math.PI * 2;
const GLOBE_PERSPECTIVE = 3.4;
const AUTO_ROTATE_SPEED = 0.0032;
const initialRotation: Rotation = { x: -0.34, y: 0.64 };

const techOrbitBadges = [
  {
    label: "AI",
    x: 0,
    y: -170,
    accent: "rgba(167,243,208,0.16)",
    text: "rgba(248,250,252,0.94)"
  },
  {
    label: "Python",
    x: -154,
    y: -34,
    accent: "rgba(20,184,166,0.14)",
    text: "rgba(167,243,208,0.92)"
  },
  {
    label: "JavaScript",
    x: 158,
    y: -28,
    accent: "rgba(96,165,250,0.14)",
    text: "rgba(248,250,252,0.92)"
  },
  {
    label: "Node",
    x: -138,
    y: 132,
    accent: "rgba(0,230,118,0.14)",
    text: "rgba(248,250,252,0.9)"
  },
  {
    label: "HTML/CSS",
    x: 136,
    y: 124,
    accent: "rgba(129,140,248,0.13)",
    text: "rgba(167,243,208,0.9)"
  }
] as const;

const brandMarkLinks = [
  { x1: 28, y1: 18, x2: 78, y2: 47, stroke: "rgba(167,243,208,0.66)", width: 1.7 },
  { x1: 78, y1: 47, x2: 58, y2: 68, stroke: "rgba(96,165,250,0.42)", width: 1.45 },
  { x1: 58, y1: 68, x2: 46, y2: 56, stroke: "rgba(20,184,166,0.5)", width: 1.35 },
  { x1: 46, y1: 56, x2: 34, y2: 79, stroke: "rgba(167,243,208,0.52)", width: 1.45 },
  { x1: 34, y1: 79, x2: 34, y2: 34, stroke: "rgba(20,184,166,0.5)", width: 1.45 },
  { x1: 34, y1: 34, x2: 28, y2: 18, stroke: "rgba(96,165,250,0.36)", width: 1.2 },
  { x1: 34, y1: 34, x2: 50, y2: 21, stroke: "rgba(167,243,208,0.52)", width: 1.3 },
  { x1: 50, y1: 21, x2: 50, y2: 43, stroke: "rgba(20,184,166,0.58)", width: 1.65 },
  { x1: 50, y1: 21, x2: 78, y2: 47, stroke: "rgba(167,243,208,0.54)", width: 1.3 },
  { x1: 16, y1: 35, x2: 34, y2: 56, stroke: "rgba(167,243,208,0.7)", width: 2.1 },
  { x1: 34, y1: 56, x2: 34, y2: 88, stroke: "rgba(20,184,166,0.68)", width: 2.2 },
  { x1: 34, y1: 56, x2: 48, y2: 35, stroke: "rgba(167,243,208,0.66)", width: 1.9 },
  { x1: 48, y1: 35, x2: 48, y2: 75, stroke: "rgba(96,165,250,0.56)", width: 1.85 },
  { x1: 48, y1: 75, x2: 58, y2: 56, stroke: "rgba(20,184,166,0.64)", width: 1.75 },
  { x1: 40, y1: 29, x2: 47, y2: 25, stroke: "rgba(167,243,208,0.58)", width: 1.15 },
  { x1: 40, y1: 36, x2: 47, y2: 32, stroke: "rgba(20,184,166,0.54)", width: 1.15 },
  { x1: 40, y1: 43, x2: 47, y2: 39, stroke: "rgba(96,165,250,0.42)", width: 1.05 },
  { x1: 58, y1: 46, x2: 53, y2: 50, stroke: "rgba(167,243,208,0.56)", width: 1.15 },
  { x1: 53, y1: 50, x2: 58, y2: 54, stroke: "rgba(167,243,208,0.56)", width: 1.15 },
  { x1: 63, y1: 58, x2: 67, y2: 42, stroke: "rgba(96,165,250,0.52)", width: 1.1 },
  { x1: 72, y1: 46, x2: 77, y2: 50, stroke: "rgba(20,184,166,0.54)", width: 1.15 },
  { x1: 77, y1: 50, x2: 72, y2: 54, stroke: "rgba(20,184,166,0.54)", width: 1.15 }
] as const;

const brandMarkNodes = [
  { x: 28, y: 18, size: 1.6, color: "rgba(167,243,208,0.98)", peak: 0.96, delay: 0.15, duration: 4.8 },
  { x: 34, y: 34, size: 1.4, color: "rgba(20,184,166,0.92)", peak: 0.92, delay: 0.45, duration: 5.4 },
  { x: 50, y: 21, size: 1.45, color: "rgba(248,250,252,0.92)", peak: 0.94, delay: 0.7, duration: 4.6 },
  { x: 78, y: 47, size: 1.75, color: "rgba(167,243,208,0.96)", peak: 0.94, delay: 0.2, duration: 5.6 },
  { x: 58, y: 68, size: 1.45, color: "rgba(96,165,250,0.86)", peak: 0.9, delay: 0.9, duration: 5.1 },
  { x: 46, y: 56, size: 1.2, color: "rgba(20,184,166,0.84)", peak: 0.88, delay: 0.6, duration: 5.5 },
  { x: 34, y: 79, size: 1.55, color: "rgba(167,243,208,0.92)", peak: 0.92, delay: 0.8, duration: 5.8 },
  { x: 16, y: 35, size: 1.5, color: "rgba(167,243,208,0.88)", peak: 0.9, delay: 0.25, duration: 5.2 },
  { x: 34, y: 56, size: 1.75, color: "rgba(248,250,252,0.92)", peak: 0.98, delay: 0.3, duration: 4.9 },
  { x: 34, y: 88, size: 1.85, color: "rgba(20,184,166,0.9)", peak: 0.96, delay: 1, duration: 6.1 },
  { x: 48, y: 35, size: 1.45, color: "rgba(167,243,208,0.9)", peak: 0.9, delay: 0.5, duration: 4.7 },
  { x: 48, y: 75, size: 1.45, color: "rgba(96,165,250,0.86)", peak: 0.9, delay: 0.95, duration: 5.9 },
  { x: 58, y: 56, size: 1.3, color: "rgba(20,184,166,0.84)", peak: 0.88, delay: 0.65, duration: 5.3 },
  { x: 40, y: 29, size: 0.95, color: "rgba(167,243,208,0.82)", peak: 0.82, delay: 0.15, duration: 4.4 },
  { x: 40, y: 36, size: 0.9, color: "rgba(20,184,166,0.8)", peak: 0.8, delay: 0.55, duration: 4.8 },
  { x: 40, y: 43, size: 0.85, color: "rgba(96,165,250,0.76)", peak: 0.76, delay: 0.85, duration: 5.1 },
  { x: 58, y: 46, size: 0.9, color: "rgba(167,243,208,0.8)", peak: 0.8, delay: 0.2, duration: 4.5 },
  { x: 53, y: 50, size: 0.8, color: "rgba(248,250,252,0.78)", peak: 0.8, delay: 0.5, duration: 4.9 },
  { x: 58, y: 54, size: 0.9, color: "rgba(167,243,208,0.8)", peak: 0.8, delay: 0.75, duration: 5.4 },
  { x: 67, y: 42, size: 0.82, color: "rgba(96,165,250,0.76)", peak: 0.78, delay: 0.35, duration: 5.1 },
  { x: 63, y: 58, size: 0.82, color: "rgba(96,165,250,0.76)", peak: 0.78, delay: 0.92, duration: 5.6 },
  { x: 72, y: 46, size: 0.9, color: "rgba(20,184,166,0.78)", peak: 0.8, delay: 0.25, duration: 4.6 },
  { x: 77, y: 50, size: 0.92, color: "rgba(248,250,252,0.78)", peak: 0.8, delay: 0.6, duration: 5.2 },
  { x: 72, y: 54, size: 0.9, color: "rgba(20,184,166,0.78)", peak: 0.8, delay: 0.88, duration: 5.8 }
] as const;

const outerOrbitRings = [
  createTiltedRing(1.22, { x: 1.16, y: 0.08 }),
  createTiltedRing(1.18, { x: 0.28, y: 1.22 }),
  createTiltedRing(1.14, { x: 0.72, y: 0.92 })
];

const globeSignalPoints = Array.from({ length: 20 }, (_, index) => {
  const count = 20;
  const offset = 2 / count;
  const y = 1 - index * offset - offset / 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = index * 2.399963229728653;

  return {
    x: Math.cos(theta) * radius * 0.92,
    y: y * 0.92,
    z: Math.sin(theta) * radius * 0.92
  };
});

function createTiltedRing(radius: number, tilt: Rotation) {
  const points: Vec3[] = [];

  for (let index = 0; index <= 96; index += 1) {
    const angle = (TWO_PI * index) / 96;
    const basePoint = { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, z: 0 };
    points.push(rotatePoint(basePoint, tilt));
  }

  return points;
}

function createLatitudeRing(latitude: number) {
  const points: Vec3[] = [];
  const lat = (latitude * Math.PI) / 180;
  const cosLat = Math.cos(lat);
  const sinLat = Math.sin(lat);

  for (let index = 0; index <= 88; index += 1) {
    const angle = (TWO_PI * index) / 88;
    points.push({
      x: Math.cos(angle) * cosLat,
      y: sinLat,
      z: Math.sin(angle) * cosLat
    });
  }

  return points;
}

function createLongitudeRing(longitude: number) {
  const points: Vec3[] = [];
  const lon = (longitude * Math.PI) / 180;
  const cosLon = Math.cos(lon);
  const sinLon = Math.sin(lon);

  for (let index = 0; index <= 88; index += 1) {
    const angle = (TWO_PI * index) / 88;
    points.push({
      x: Math.sin(angle) * cosLon,
      y: Math.cos(angle),
      z: Math.sin(angle) * sinLon
    });
  }

  return points;
}

function brandCoordinateToPoint(x: number, y: number): Vec3 {
  const normalizedX = ((x - 50) / 50) * 0.58;
  const normalizedY = ((y - 50) / 50) * 0.58;
  const radius = 0.74;
  const radialSquare = normalizedX * normalizedX + normalizedY * normalizedY;
  const depth = Math.sqrt(Math.max(0, radius * radius - radialSquare)) * 0.38 - 0.02;

  return {
    x: normalizedX,
    y: normalizedY,
    z: depth
  };
}

function rotatePoint(point: Vec3, rotation: Rotation): Vec3 {
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);
  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);

  const y = point.y * cosX - point.z * sinX;
  const z = point.y * sinX + point.z * cosX;
  const x = point.x * cosY + z * sinY;
  const rotatedZ = -point.x * sinY + z * cosY;

  return { x, y, z: rotatedZ };
}

function projectPoint(point: Vec3, radius: number): ProjectedPoint {
  const scale = GLOBE_PERSPECTIVE / (GLOBE_PERSPECTIVE - point.z);

  return {
    scale,
    x: point.x * radius * scale,
    y: point.y * radius * scale,
    z: point.z
  };
}

function drawPolyline3d(
  context: CanvasRenderingContext2D,
  points: Vec3[],
  rotation: Rotation,
  radius: number,
  frontStyle: string,
  backStyle: string,
  width: number
) {
  for (let index = 1; index < points.length; index += 1) {
    const from = projectPoint(rotatePoint(points[index - 1]!, rotation), radius);
    const to = projectPoint(rotatePoint(points[index]!, rotation), radius);
    const depth = (from.z + to.z) * 0.5;

    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.lineWidth = depth > 0 ? width * 1.05 : width * 0.92;
    context.globalAlpha = depth > 0 ? 0.18 + depth * 0.12 : 0.05;
    context.strokeStyle = depth > 0 ? frontStyle : backStyle;
    context.stroke();
  }
}

function drawSignalPoints(
  context: CanvasRenderingContext2D,
  points: Vec3[],
  rotation: Rotation,
  radius: number
) {
  for (const point of points) {
    const projected = projectPoint(rotatePoint(point, rotation), radius);
    const visibility = Math.max(0, projected.z + 0.45);

    if (visibility <= 0) {
      continue;
    }

    context.beginPath();
    context.fillStyle = "rgba(167,243,208,0.16)";
    context.arc(projected.x, projected.y, 4.5 * projected.scale, 0, TWO_PI);
    context.fill();

    context.beginPath();
    context.fillStyle = "rgba(248,250,252,0.85)";
    context.arc(projected.x, projected.y, (1.15 + visibility * 0.55) * projected.scale, 0, TWO_PI);
    context.fill();
  }
}

function drawBrandConstellation(
  context: CanvasRenderingContext2D,
  rotation: Rotation,
  radius: number,
  timestamp: number
) {
  context.save();
  context.globalCompositeOperation = "lighter";

  for (const link of brandMarkLinks) {
    const from = projectPoint(rotatePoint(brandCoordinateToPoint(link.x1, link.y1), rotation), radius * 0.86);
    const to = projectPoint(rotatePoint(brandCoordinateToPoint(link.x2, link.y2), rotation), radius * 0.86);
    const depth = (from.z + to.z) * 0.5;
    const visibility = 0.18 + Math.max(0, depth + 0.32) * 0.42;

    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.strokeStyle = link.stroke;
    context.globalAlpha = visibility;
    context.lineWidth = link.width * 0.85 * ((from.scale + to.scale) * 0.5);
    context.stroke();
  }

  for (const node of brandMarkNodes) {
    const projected = projectPoint(rotatePoint(brandCoordinateToPoint(node.x, node.y), rotation), radius * 0.86);
    const pulse = 0.55 + Math.sin(timestamp / (node.duration * 260) + node.delay * 6) * 0.45;
    const alpha = 0.2 + pulse * 0.42;

    context.beginPath();
    context.fillStyle = node.color;
    context.globalAlpha = alpha * 0.28;
    context.arc(projected.x, projected.y, node.size * 3.8 * projected.scale, 0, TWO_PI);
    context.fill();

    context.beginPath();
    context.fillStyle = node.color;
    context.globalAlpha = alpha;
    context.arc(projected.x, projected.y, node.size * 1.18 * projected.scale, 0, TWO_PI);
    context.fill();
  }

  context.restore();
}

function drawGlobe(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  rotation: Rotation,
  timestamp: number
) {
  const radius = Math.min(width, height) * 0.265;
  const highlightX = -radius * 0.22 + Math.sin(rotation.y) * radius * 0.06;
  const highlightY = -radius * 0.28 + Math.sin(rotation.x) * radius * 0.05;

  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width * 0.5, height * 0.52);

  const atmosphere = context.createRadialGradient(0, 0, radius * 0.86, 0, 0, radius * 1.55);
  atmosphere.addColorStop(0, "rgba(20,184,166,0.14)");
  atmosphere.addColorStop(0.45, "rgba(20,184,166,0.06)");
  atmosphere.addColorStop(1, "rgba(20,184,166,0)");
  context.fillStyle = atmosphere;
  context.beginPath();
  context.arc(0, 0, radius * 1.52, 0, TWO_PI);
  context.fill();

  context.save();
  context.scale(1, 0.34);
  const shadow = context.createRadialGradient(0, radius * 1.88, radius * 0.08, 0, radius * 1.88, radius * 0.72);
  shadow.addColorStop(0, "rgba(0,0,0,0.34)");
  shadow.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = shadow;
  context.beginPath();
  context.arc(0, radius * 1.88, radius * 0.74, 0, TWO_PI);
  context.fill();
  context.restore();

  for (const ring of outerOrbitRings) {
    drawPolyline3d(
      context,
      ring,
      rotation,
      radius,
      "rgba(167,243,208,0.72)",
      "rgba(96,165,250,0.28)",
      1.15
    );
  }

  context.save();
  context.beginPath();
  context.arc(0, 0, radius, 0, TWO_PI);
  context.clip();

  const shellGradient = context.createRadialGradient(highlightX, highlightY, radius * 0.08, 0, 0, radius * 1.08);
  shellGradient.addColorStop(0, "rgba(248,250,252,0.46)");
  shellGradient.addColorStop(0.12, "rgba(248,250,252,0.22)");
  shellGradient.addColorStop(0.24, "rgba(167,243,208,0.12)");
  shellGradient.addColorStop(0.46, "rgba(15,50,44,0.52)");
  shellGradient.addColorStop(0.76, "rgba(5,17,15,0.94)");
  shellGradient.addColorStop(1, "rgba(3,10,10,1)");
  context.fillStyle = shellGradient;
  context.fillRect(-radius * 1.2, -radius * 1.2, radius * 2.4, radius * 2.4);

  const terminator = context.createLinearGradient(-radius * 0.78, -radius * 0.82, radius * 0.88, radius * 0.96);
  terminator.addColorStop(0, "rgba(255,255,255,0)");
  terminator.addColorStop(0.32, "rgba(255,255,255,0.03)");
  terminator.addColorStop(0.68, "rgba(0,0,0,0.16)");
  terminator.addColorStop(1, "rgba(0,0,0,0.34)");
  context.fillStyle = terminator;
  context.fillRect(-radius * 1.2, -radius * 1.2, radius * 2.4, radius * 2.4);

  const atmosphereBand = context.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius);
  atmosphereBand.addColorStop(0.82, "rgba(0,0,0,0)");
  atmosphereBand.addColorStop(0.96, "rgba(167,243,208,0.08)");
  atmosphereBand.addColorStop(1, "rgba(167,243,208,0.14)");
  context.fillStyle = atmosphereBand;
  context.fillRect(-radius * 1.1, -radius * 1.1, radius * 2.2, radius * 2.2);

  const latitudeRings = [-58, -28, 0, 28, 58];
  const longitudeRings = [0, 35, 70, 110, 145];

  for (const latitude of latitudeRings) {
    drawPolyline3d(
      context,
      createLatitudeRing(latitude),
      rotation,
      radius * 0.98,
      "rgba(167,243,208,0.68)",
      "rgba(96,165,250,0.22)",
      0.9
    );
  }

  for (const longitude of longitudeRings) {
    drawPolyline3d(
      context,
      createLongitudeRing(longitude),
      rotation,
      radius * 0.98,
      "rgba(20,184,166,0.62)",
      "rgba(96,165,250,0.18)",
      0.78
    );
  }

  drawSignalPoints(context, globeSignalPoints, rotation, radius * 0.98);
  drawBrandConstellation(context, rotation, radius, timestamp);

  const lowerShadow = context.createRadialGradient(0, radius * 0.9, radius * 0.04, 0, radius * 0.82, radius * 0.66);
  lowerShadow.addColorStop(0, "rgba(0,0,0,0.28)");
  lowerShadow.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = lowerShadow;
  context.fillRect(-radius, -radius, radius * 2, radius * 2);

  const topGloss = context.createRadialGradient(-radius * 0.18, -radius * 0.46, radius * 0.02, -radius * 0.14, -radius * 0.48, radius * 0.48);
  topGloss.addColorStop(0, "rgba(248,250,252,0.22)");
  topGloss.addColorStop(0.36, "rgba(248,250,252,0.08)");
  topGloss.addColorStop(1, "rgba(248,250,252,0)");
  context.fillStyle = topGloss;
  context.fillRect(-radius, -radius, radius * 2, radius * 2);

  context.restore();

  context.beginPath();
  context.arc(0, 0, radius, 0, TWO_PI);
  context.strokeStyle = "rgba(248,250,252,0.08)";
  context.lineWidth = Math.max(1.4, radius * 0.012);
  context.stroke();

  context.beginPath();
  context.arc(0, 0, radius * 1.01, 0, TWO_PI);
  context.strokeStyle = "rgba(167,243,208,0.12)";
  context.lineWidth = Math.max(1, radius * 0.006);
  context.stroke();

  context.restore();
}

function HeroNetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rotationRef = useRef(initialRotation);
  const velocityRef = useRef({ x: 0, y: 0 });
  const reducedMotionRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * devicePixelRatio);
      canvas.height = Math.floor(rect.height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const animate = (timestamp: number) => {
      if (!pointerRef.current) {
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;

        if (!reducedMotionRef.current) {
          rotationRef.current.y += AUTO_ROTATE_SPEED;
          rotationRef.current.x += Math.sin(timestamp * 0.00045) * 0.00035;
        }

        if (Math.abs(velocityRef.current.x) < 0.00004) {
          velocityRef.current.x = 0;
        }

        if (Math.abs(velocityRef.current.y) < 0.00004) {
          velocityRef.current.y = 0;
        }
      }

      drawGlobe(context, canvas.clientWidth, canvas.clientHeight, rotationRef.current, timestamp);
      frameRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = { x: event.clientX, y: event.clientY };
    velocityRef.current = { x: 0, y: 0 };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerRef.current) {
      return;
    }

    const deltaX = event.clientX - pointerRef.current.x;
    const deltaY = event.clientY - pointerRef.current.y;

    rotationRef.current.x -= deltaY * 0.008;
    rotationRef.current.y += deltaX * 0.009;
    velocityRef.current.x = -deltaY * 0.0008;
    velocityRef.current.y = deltaX * 0.0009;
    pointerRef.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[45rem] xl:max-w-[47rem]"
    >
      <div className="absolute -left-10 top-12 hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.08),transparent_72%)] blur-3xl lg:block" />
      <div className="absolute right-2 top-8 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.08),transparent_72%)] blur-3xl lg:block" />

      <div className="relative px-2 py-3 sm:px-4 sm:py-4">
        <div className="pointer-events-none absolute inset-x-[12%] inset-y-[14%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08),rgba(20,184,166,0.03)_52%,transparent_76%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[18%] inset-y-[20%] rounded-full bg-[radial-gradient(circle_at_50%_46%,rgba(167,243,208,0.08),transparent_48%)] blur-[72px]" />

        <div
          className={`relative aspect-square select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={(event) => {
            if (pointerRef.current) {
              handlePointerEnd(event);
            }
          }}
        >
          <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />

          <div className="pointer-events-none absolute inset-0">
            {techOrbitBadges.map((badge) => (
              <div
                key={badge.label}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${badge.x}px), calc(-50% + ${badge.y}px))`
                }}
              >
                <div
                  className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(8,20,17,0.24),rgba(8,20,17,0.08))] px-2.5 py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                  style={{ boxShadow: `0 0 12px ${badge.accent}` }}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: badge.text,
                        boxShadow: `0 0 8px ${badge.accent}`
                      }}
                    />
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em]" style={{ color: badge.text }}>
                      {badge.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32 xl:pt-[8.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(0,230,118,0.1),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(20,184,166,0.1),transparent_20%),linear-gradient(180deg,rgba(4,17,13,0),rgba(4,17,13,0.22))]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(167,243,208,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,243,208,0.08) 1px, transparent 1px)",
          backgroundSize: "78px 78px"
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
          <Reveal className="max-w-[39rem] xl:pr-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.05)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-highlight)] shadow-[0_0_0_1px_rgba(167,243,208,0.04)]">
              <Sparkles className="size-4 text-[var(--color-accent)]" />
              Premium web studio
            </div>

            <h1 className="mt-6 max-w-[11.5ch] font-display text-[2.85rem] leading-[0.94] tracking-[-0.055em] text-[var(--color-text)] sm:text-[4rem] lg:text-[4.35rem] xl:text-[4.7rem] 2xl:text-[4.95rem]">
              <span className="block">{heroHeadline[0]}</span>
              <span className="mt-1 block text-[rgba(167,243,208,0.96)]">{heroHeadline[1]}</span>
            </h1>

            <p className="mt-5 max-w-[35rem] text-[15px] leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              {heroDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                Portfoliaya baxın
              </Button>
            </div>

            <div className="mt-6 grid max-w-[42rem] gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {heroTrustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-4 py-3 text-sm text-[var(--color-muted)] backdrop-blur-xl"
                >
                  <BadgeCheck className="size-4 shrink-0 text-[var(--color-accent)]" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative xl:-mr-3">
            <HeroNetworkVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
