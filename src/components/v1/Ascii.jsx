import sephiroth from "/assets/drawings/sephiroth.txt?raw";
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

function drawAscii(ctx, width) {
  if (width < 1380) return;

  let idx = 0;
  ctx.font = "2px monospace";
  ctx.fillStyle = "rgb(150, 150, 150)";
  ctx.textBaseline = "top";
  ctx.imageSmoothingEnabled = false;
  const lines = sephiroth.split("\n");
  const lineHeight = 2;

  const dots = String(".").repeat(lines[0].length);
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(dots, 700, 70 + i * lineHeight);
    ctx.fillText(dots, 700, 70 + i * lineHeight);
  }

  const updateText = () => {
    if (idx >= lines.length) {
      clearInterval(intervalId);
      return;
    }
    ctx.fillStyle = "rgb(252, 252, 252)";
    ctx.fillText(dots, 700, 70 + idx * lineHeight);
    ctx.fillStyle = "rgb(150, 150, 150)";
    ctx.fillText(lines[idx], 700, 70 + idx * lineHeight);
    ctx.fillText(lines[idx], 700, 70 + idx * lineHeight);
    idx++;
  };

  const intervalId = setInterval(updateText, 10);
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

    drawAscii(ctx, width);
  }, [width, height]);

  return (
    <canvas ref={canvasRef} className="fixed -z-10 block top-0 left-0"></canvas>
  );
}
