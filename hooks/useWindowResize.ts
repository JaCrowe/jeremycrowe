import { useEffect } from "react";

interface WindowResizeOptions {
  onResize(): void;
}

export default function useWindowResize({ onResize }: WindowResizeOptions) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const resizeHandler = () => {
      if (typeof window === "undefined") return;
      onResize();
    };
    window.addEventListener("resize", resizeHandler);
    onResize();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
}
