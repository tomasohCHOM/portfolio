import { PQ } from "@/lib/pq";

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
