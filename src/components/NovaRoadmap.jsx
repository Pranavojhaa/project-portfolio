// Nova's honest status: the current stage is filled, later stages stay dashed until they are reached.
export function NovaRoadmap({ roadmap }) {
  const current = roadmap.currentStage;

  return (
    <section className="roadmap" aria-labelledby="nova-roadmap-title">
      <h4 id="nova-roadmap-title" className="type-label">
        Where Nova is now: stage {current + 1} of {roadmap.stages.length}, {roadmap.stages[current].toLowerCase()}
      </h4>
      <ol className="roadmap__steps" aria-label="Nova product stages">
        {roadmap.stages.map((stage, index) => {
          const isCurrent = index === current;
          return (
            <li
              key={stage}
              className={`roadmap__step ${isCurrent ? "is-current" : ""}`}
              aria-current={isCurrent ? "step" : undefined}
            >
              <span className="roadmap__node" aria-hidden="true">
                {index + 1}
              </span>
              <span>
                {stage}
                {isCurrent ? <span className="block text-[0.8125rem] font-semibold text-muted">Current stage</span> : null}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
