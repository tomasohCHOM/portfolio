import { prim } from "@/lib/prim";
import drawing from "/ascii/sephiroth.txt?raw";
import { useEffect, useRef, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function createWeightedMatrix(drawingLines) {
  const M = drawingLines.length;
  const N = drawingLines[0].length;

  const weights = [];
  for (let r = 0; r < M; r++) {
    weights.push([]);
    for (let c = 0; c < N; c++) {
      const weightR = Math.pow(r - M / 2, 2) / 100 + 10;
      const weightC = Math.pow(c - N / 2, 2) / 100 + 10;

      const chIdx = "@#%XO+=:-. ".indexOf(drawingLines[r][c]) + 1;
      const weightChar = Math.random() * 67 + (chIdx - 1) * 67;

      const finalWeight = weightR + weightC + weightChar;

      weights[weights.length - 1].push(finalWeight);
    }
  }

  return weights;
}

function drawAscii(ctx, width) {
  // TODO: Play with different screen sizes
  const initialX = width >= 1380 ? 800 : 50;
  const initialY = width >= 800 ? 70 : 400;

  const drawingLines = drawing.replace(/\n$/, "").split("\n");
  const weights = createWeightedMatrix(drawingLines);

  ctx.fillStyle = "rgb(40, 42, 47)";
  ctx.font = "3px monospace";
  ctx.textBaseline = "top";
  const lineHeight = 2;

  const order = prim(weights, [33, 159]);
  const CHARS_PER_FRAME = 150;

  let i = 0;
  let rafId = null;
  let cancelled = false;

  const animate = () => {
    if (cancelled) return;

    for (let k = 0; k < CHARS_PER_FRAME && i < order.length; k++) {
      const { r, c } = order[i];
      ctx.fillText(drawingLines[r][c], initialX + c, initialY + r * lineHeight);
      i++;
    }

    if (i < order.length) {
      rafId = requestAnimationFrame(animate);
    }
  };

  rafId = requestAnimationFrame(animate);
  return () => {
    cancelled = true;
    if (rafId) cancelAnimationFrame(rafId);
  };
}

export default function AsciiArt() {
  const canvasRef = useRef(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const cleanup = drawAscii(ctx, width);
    return cleanup;
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed -z-10 block top-0 left-2/12"
    ></canvas>
  );
}
