import { ArrowUpRight } from "lucide-react";

// Marks links that open in a new tab, visually and for screen readers.
export function ExternalMark({ size = 15 }) {
  return (
    <>
      <ArrowUpRight size={size} aria-hidden="true" className="shrink-0" />
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

export function externalProps(href) {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}
