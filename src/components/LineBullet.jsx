// A round line badge, like the ones on transit signs. Decorative: the line's name always sits beside it.
export function LineBullet({ line }) {
  return (
    <span className="line-bullet" style={{ "--c": `var(--line-${line.id})` }} aria-hidden="true">
      {line.code}
    </span>
  );
}
