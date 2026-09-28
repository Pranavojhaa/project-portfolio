import { skillLines } from "../data/portfolio";
import { usePointerTilt } from "./usePointerTilt";

/*
 * The hero's bundle of skill lines: they run in from the right, turn 45° like a transit map, and head down
 * towards the projects. Parallel spacing through the turn: line k's diagonal sits on x + y = C0 - k·gap·√2,
 * which keeps every line exactly `gap` apart on the straights and on the diagonal. Each line is drawn as a
 * raised ribbon: a darker copy offset down-right is its side, and the line itself is its top face.
 */
function bundlePaths({ width, height, top, gap, bottomX, c0 }) {
  return skillLines.map((line, k) => {
    const y = top + k * gap;
    const c = c0 - k * gap * Math.SQRT2;
    const x = bottomX - k * gap;
    const turnAt = c - y;
    const downAt = c - x;
    return { line, d: `M ${width + 20} ${y} H ${turnAt} L ${x} ${downAt} V ${height + 40}` };
  });
}

const variants = {
  wide: { width: 460, height: 560, top: 48, gap: 16, bottomX: 250, c0: 470 },
  narrow: { width: 360, height: 200, top: 20, gap: 12, bottomX: 110, c0: 240 },
};

export function LineBundle() {
  const stageRef = usePointerTilt(9);

  return (
    <div className="tilt-stage" ref={stageRef}>
      <Bundle variant="wide" className="hidden lg:block" />
      <Bundle variant="narrow" className="line-bundle--bleed mt-10 lg:hidden" />
    </div>
  );
}

function Bundle({ variant, className }) {
  const size = variants[variant];

  return (
    <svg
      className={`line-bundle ${className}`}
      viewBox={`0 0 ${size.width} ${size.height}`}
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden="true"
      focusable="false"
    >
      {bundlePaths(size).map(({ line, d }, k) => {
        const style = { "--c": `var(--line-${line.id})`, "--i": Math.min(k, 4) };
        return (
          <g key={line.id}>
            <path d={d} pathLength="1" transform="translate(3 5)" className="line-bundle__line line-bundle__side" style={style} />
            <path d={d} pathLength="1" className="line-bundle__line" style={style} />
          </g>
        );
      })}
    </svg>
  );
}
