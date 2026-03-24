import { useEffect, useState } from "react";

export function TypeTagline({ text }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      setVisibleText(text.slice(0, frame));

      if (frame >= text.length) {
        window.clearInterval(timer);
      }
    }, 38);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <span>
      {visibleText}
      <span className="ml-1 inline-block h-[1.1em] w-[0.08em] animate-pulse bg-accentSoft align-middle" />
    </span>
  );
}
