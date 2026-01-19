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
    ctx.font = "2px monospace";
    ctx.fillStyle = "rgb(20, 20, 20)";
    ctx.textBaseline = "top";
    ctx.imageSmoothingEnabled = false;

    const lines = sephiroth.split("\n");
    const lineHeight = 2;
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], 700, 70 + i * lineHeight);
    }
  }, [width, height]);

  return (
    <canvas ref={canvasRef} className="fixed -z-10 block top-0 left-0"></canvas>
  );
}
