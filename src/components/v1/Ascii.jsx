import { DRAWINGS } from "@/lib/drawings";
import { prim } from "@/lib/prim";
import { useEffect, useRef, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== undefined ? window.innerWidth : 0,
    height: typeof window !== undefined ? window.innerHeight : 0,
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

function initDrawing(drawingStr) {
  const lines = drawingStr.replace(/\n$/, "").split("\n");
  const weights = createWeightedMatrix(lines);
  const order = prim(weights, [33, 159]);

  return { lines, order };
}

function drawAscii(ctx, width) {
  // TODO: Play with different screen sizes
  const initialX = width >= 1380 ? 800 : 50;
  const initialY = width >= 800 ? 70 : 400;

  const FG_COLOR = "rgb(40, 42, 47)";
  const BG_COLOR = "rgb(252, 252, 252)";

  ctx.font = "3px monospace";
  ctx.textBaseline = "top";

  const lineHeight = 2;

  const CHARS_PER_FRAME = 150;
  const HOLD_TIME = 7_000;
  const PAUSE_AFTER_ERASE = 1_000;

  let rafId = null;
  let cancelled = false;

  let i = 0;
  let state = "drawing";
  let reverseAt = 0;
  let nextAt = 0;

  let drawingIdx = Math.floor(Math.random() * DRAWINGS.length);
  let drawingLines, order;

  const loadDrawing = () => {
    const next = DRAWINGS[drawingIdx];
    ({ lines: drawingLines, order } = initDrawing(next));

    i = 0;
    state = "drawing";
    reverseAt = performance.now() + HOLD_TIME;
  };

  loadDrawing();

  const animate = (now) => {
    if (cancelled) return;

    if (state === "drawing" && i >= order.length) {
      state = "waiting";
    }

    if (state === "waiting" && now >= reverseAt) {
      state = "erasing";
      i = order.length - 1;
    }

    if (state === "erasing" && i < 0) {
      state = "pause";
      nextAt = now + PAUSE_AFTER_ERASE;
    }

    if (state === "pause" && now >= nextAt) {
      let lastIdx = drawingIdx;
      do {
        console.log(DRAWINGS.length);
        console.log(drawingIdx === lastIdx);
        drawingIdx = Math.floor(Math.random() * DRAWINGS.length);
      } while (DRAWINGS.length > 1 && drawingIdx === lastIdx);
      loadDrawing();
    }

    if (state === "drawing") {
      ctx.fillStyle = FG_COLOR;
      for (let k = 0; k < CHARS_PER_FRAME && i < order.length; k++) {
        const { r, c } = order[i];
        const ch = drawingLines[r][c];
        ctx.fillText(ch, initialX + c, initialY + r * lineHeight);
        i++;
      }
    }
    if (state === "erasing") {
      ctx.fillStyle = BG_COLOR;
      for (let k = 0; k < CHARS_PER_FRAME && i >= 0; k++) {
        const { r, c } = order[i];
        const ch = drawingLines[r][c];
        ctx.fillText(ch, initialX + c, initialY + r * lineHeight);
        ctx.fillText(ch, initialX + c, initialY + r * lineHeight);
        ctx.fillText(ch, initialX + c, initialY + r * lineHeight);
        i--;
      }
    }

    rafId = requestAnimationFrame(animate);
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
