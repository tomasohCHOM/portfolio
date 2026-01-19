import { useEffect } from "react";

export function useTheme(theme) {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("v0", "v1");
    html.classList.add(theme);
  });
}
