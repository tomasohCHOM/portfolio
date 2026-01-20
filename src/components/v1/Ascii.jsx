import { PQ } from "./pq";
import drawing from "/assets/drawings/hello.txt?raw";
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

function prim(weightedMatrix, start = [33, 159]) {
  const M = weightedMatrix.length;
  const N = weightedMatrix[0].length;

  const seen = Array.from({ length: M }, () => Array(N).fill(false));
  const result = [];

  const pq = new PQ((a, b) => a.weight < b.weight);
  const [sr, sc] = start;
  pq.push({ r: sr, c: sc, weight: 0, from: null });

  while (!pq.isEmpty()) {
    const { r, c, weight, from } = pq.pop();
    if (seen[r][c]) continue;

    seen[r][c] = true;
    result.push({ r, c, weight, from });
    for (const [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= M || nc < 0 || nc >= N || seen[nr][nc]) continue;

      const edgeWeight = weightedMatrix[nr][nc];
      pq.push({ r: nr, c: nc, weight: edgeWeight, from: [r, c] });
    }
  }
  return result;
}

function drawAscii(ctx, width) {
  // TODO: Play with different screen sizes
  const initialX = width >= 1380 ? 800 : 50;
  const initialY = width >= 1380 ? 70 : 400;

  const drawingLines = drawing.split("\n");

  const weights = createWeightedMatrix(drawingLines);

  ctx.fillStyle = "rgb(90, 93, 97)";
  ctx.font = "2.1px monospace";
  ctx.textBaseline = "top";

  const lineHeight = 2;

  const order = prim(weights, [33, 159]);
  let i = 0;
  const intervalId = setInterval(() => {
    if (i >= order.length) {
      clearInterval(intervalId);
      return;
    }

    for (let j = 0; j < 100 && i < order.length; j++) {
      const { r, c } = order[i];
      const ch = drawingLines[r][c];

      ctx.fillText(ch, initialX + c, initialY + r * lineHeight);
      i++;
    }
  }, 1);
}

export function AsciiArt() {
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

    drawAscii(ctx, width);
  }, [width, height]);

  return (
    <canvas ref={canvasRef} className="fixed -z-10 block top-0 left-0"></canvas>
  );
}
