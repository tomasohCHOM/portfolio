import { PQ } from "@/lib/pq";

export function createWeightedMatrix(drawingLines) {
  const M = drawingLines.length;
  const N = drawingLines[0].length;

  const weights = Array.from({ length: M }, () => new Array(N).fill(0));
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      const weightR = Math.pow(r - M / 2, 2) / 100 + 10;
      const weightC = Math.pow(c - N / 2, 2) / 100 + 10;
      const chIdx = "@#%XO+=:-. ".indexOf(drawingLines[r][c]) + 1;
      const weightChar = Math.random() * 67 + (chIdx - 1) * 67;

      weights[r][c] = weightR + weightC + weightChar;
    }
  }

  return weights;
}

export function prim(weights, start = [33, 159]) {
  const M = weights.length;
  const N = weights[0].length;

  const seen = Array.from({ length: M }, () => Array(N).fill(false));
  const result = [];

  const pq = new PQ((a, b) => a.weight < b.weight);
  const [sr, sc] = start;
  pq.push({ r: sr, c: sc, weight: 0 });

  while (!pq.isEmpty()) {
    const { r, c, weight } = pq.pop();
    if (seen[r][c]) continue;

    seen[r][c] = true;
    result.push({ r, c, weight });
    for (const [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= M || nc < 0 || nc >= N || seen[nr][nc]) continue;

      const edgeWeight = weights[nr][nc];
      pq.push({ r: nr, c: nc, weight: edgeWeight });
    }
  }
  return result;
}
