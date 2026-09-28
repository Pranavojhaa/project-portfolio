// Text on a split-flap board: when it changes, each character flips over in turn.
export function FlapText({ text }) {
  return (
    <span className="flap">
      {[...text].map((char, index) => (
        <span
          key={`${text}-${index}`}
          className={char === " " ? "flap__gap" : "flap__cell"}
          style={{ "--i": Math.min(index, 14) }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
