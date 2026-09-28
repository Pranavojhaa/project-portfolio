// Hover/press surface for list rows. The row must be `group relative isolate`.
export function RowWash() {
  return (
    <span
      aria-hidden="true"
      className="absolute -inset-x-3 inset-y-0 -z-10 bg-raised opacity-0 transition-[opacity,background-color] duration-200 group-hover:opacity-100 group-active:bg-signalTint sm:-inset-x-5"
    />
  );
}

// Title nudge that pairs with RowWash; disabled when motion is reduced.
export const rowTitleMotion =
  "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-settle motion-safe:group-hover:translate-x-1.5 motion-safe:group-active:translate-x-0.5";
