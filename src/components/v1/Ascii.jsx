import { useEffect, useRef } from "react";
import { DRAWINGS } from "@/lib/drawings";
import { createWeightedMatrix, prim } from "@/lib/prim";
import { useWindowSize } from "@/lib/windowSize";

const DrawingState = {
  DRAWING: "drawing",
  WAITING: "waiting",
  ERASING: "erasing",
  PAUSING: "pausing",
};

const CHARS_DRAWN_PER_FRAME = 150;
const CHARS_ERASED_PER_FRAME = 300;
const HOLD_TIME = 10_000;
const PAUSE_AFTER_ERASE = 1_000;

const LINE_HEIGHT = 2;

const BG_COLOR = "rgb(252, 252, 252)";
const FG_COLOR1 = "rgb(40, 42, 47)";
const FG_COLOR2 = "rgb(180, 182, 187)";

function getCoordsAndColor(width, height) {
  // Maps minimum screen size to the calculated initialX value
  const xMappings = [
    [1536, 1536 + (width - 1536) / 2 - 450],
    [1280, width - 450],
    [1024, 700],
    [768, 550],
    [480, 200],
  ];
  let initialX = 100;
  for (const [size, x] of xMappings) {
    if (width >= size) {
      initialX = x;
      break;
    }
  }
  const initialY = width >= 768 ? 100 : height - 450;
  const fgColor = width >= 1024 ? FG_COLOR1 : FG_COLOR2;
  return [initialX, initialY, fgColor];
}

function initDrawing(drawingStr) {
  const lines = drawingStr.replace(/\n$/, "").split("\n");
  const weights = createWeightedMatrix(lines);
  const order = prim(weights, [33, 159]);

  return { lines, order };
}

function drawAscii(ctx, width, height) {
  const [initialX, initialY, fgColor] = getCoordsAndColor(width, height);

  ctx.font = "3px monospace";
  ctx.textBaseline = "top";

  let rafId = null;
  let cancelled = false;

  let i = 0;
  let drawingState = DrawingState.DRAWING;
  let reverseAt = 0;
  let nextAt = 0;

  let drawingIdx = Math.floor(Math.random() * DRAWINGS.length);
  let drawingLines, order;

  const loadDrawing = () => {
    const next = DRAWINGS[drawingIdx];
    ({ lines: drawingLines, order } = initDrawing(next));

    i = 0;
    drawingState = DrawingState.DRAWING;
    reverseAt = performance.now() + HOLD_TIME;
  };

  loadDrawing();

  const animate = (now) => {
    if (cancelled) return;

    if (drawingState === DrawingState.DRAWING && i >= order.length) {
      drawingState = DrawingState.WAITING;
    }

    if (drawingState === DrawingState.WAITING && now >= reverseAt) {
      drawingState = DrawingState.ERASING;
      i = order.length - 1;
    }

    if (drawingState === DrawingState.ERASING && i < 0) {
      drawingState = DrawingState.PAUSING;
      nextAt = now + PAUSE_AFTER_ERASE;
    }

    if (drawingState === DrawingState.PAUSING && now >= nextAt) {
      let lastIdx = drawingIdx;
      do {
        drawingIdx = Math.floor(Math.random() * DRAWINGS.length);
      } while (DRAWINGS.length > 1 && drawingIdx === lastIdx);
      loadDrawing();
    }

    if (drawingState === DrawingState.DRAWING) {
      ctx.fillStyle = fgColor;
      for (let k = 0; k < CHARS_DRAWN_PER_FRAME && i < order.length; k++) {
        const { r, c } = order[i];
        const ch = drawingLines[r][c];
        ctx.fillText(ch, initialX + c, initialY + r * LINE_HEIGHT);
        i++;
      }
    }
    if (drawingState === DrawingState.ERASING) {
      ctx.fillStyle = BG_COLOR;
      for (let k = 0; k < CHARS_ERASED_PER_FRAME && i >= 0; k++) {
        const { r, c } = order[i];
        const ch = drawingLines[r][c];
        ctx.fillText(ch, initialX + c, initialY + r * LINE_HEIGHT);
        ctx.fillText(ch, initialX + c, initialY + r * LINE_HEIGHT);
        ctx.fillText(ch, initialX + c, initialY + r * LINE_HEIGHT);
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

    const cleanup = drawAscii(ctx, width, height);
    return cleanup;
  }, [width, height]);

  return (
    <canvas ref={canvasRef} className="fixed -z-10 block inset-0"></canvas>
  );
}
